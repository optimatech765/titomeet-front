/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteName: 'TITOMEET',
  generateIndexSitemap: true,
  generateSitemaps: true,
  sitemapBaseFileName: 'sitemap',
  siteUrl: 'https://titomeet.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/admin', '/dashboard', '/api/*', '/auth/*', '/settings', '/profile'],
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (['/fr', '/en'].includes(path)) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (['/faq', '/support', '/cgu', '/policy'].includes(path)) {
      priority = 0.6;
      changefreq = 'yearly';
    } else if (path === '/events') {
      priority = 0.9;
      changefreq = 'daily';
    }

    return {
      loc: config.siteUrl + path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/dashboard/',
          '/api/',
          '/auth/',
          '/settings/',
          '/profile/',
        ],
      },
    ],
    sitemap: 'https://titomeet.com/sitemap.xml',
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/fr'),
    await config.transform(config, '/en'),
    await config.transform(config, '/cgu'),
    await config.transform(config, '/policy'),
    await config.transform(config, '/faq'),
    await config.transform(config, '/support'),
    await config.transform(config, '/events'),
    await config.transform(config, '/#evenements'),
    await config.transform(config, '/#categories'),
    await config.transform(config, '/#fonctionnalites'),
    await config.transform(config, '/#providers'),
    await config.transform(config, '/favicon.ico'),
    await config.transform(config, '/500'),
    await config.transform(config, '/404'),
    await config.transform(config, '/sitemap.xml'),
    await config.transform(config, '/robots.txt'),
    await config.transform(config, '/manifest.webmanifest'),
    await config.transform(config, '/apple-icon.png'),
    await config.transform(config, '/img/logo.png'),
    // Ajoute toutes les routes publiques ici
  ],
}

