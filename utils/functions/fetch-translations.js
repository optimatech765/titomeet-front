import axios from 'axios';
import Papa from 'papaparse';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Lien vers la feuille Google Sheet (export CSV)
const CSV_URL = "https://docs.google.com/spreadsheets/d/1d3QllToqewIUgodu3LYtKv1N4ISHoOa9a5JUH5xK_bU/export?format=csv";

axios.get(CSV_URL)
  .then(response => {
    const parsed = Papa.parse(response.data, {
      header: true,
      skipEmptyLines: true
    });

    const data = parsed.data;
    const translations = {};

    data.forEach((row) => {
      const key = row.key;
      if (!key) return;

      Object.keys(row).forEach((lang) => {
        if (lang === 'key') return;
        translations[lang] = translations[lang] || {};
        translations[lang][key] = row[lang];
      });
    });

    Object.entries(translations).forEach(([lang, content]) => {
      const outputDir = join(__dirname, '../../locales', lang);
      const outputPath = join(outputDir, 'common.json');

      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(outputPath, JSON.stringify(content, null, 2), 'utf8');
      console.log(`✅ Fichier ${outputPath} mis à jour.`);
    });
  })
  .catch(err => {
    console.error('❌ Erreur lors du téléchargement du fichier:', err.message);
  });
