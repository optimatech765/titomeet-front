import { description, keywords } from '@/utils/metadata-contant';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    keywords: keywords,
    metadataBase: new URL(process.env.NEXT_PUBLIC_FRONT_URL as string),
    description: description,
    title:"Titomeet - Politique de confidentialité (Privacy Policy)",
    openGraph: {
        title: "Titomeet",
        url: process.env.NEXT_PUBLIC_FRONT_URL as string,
        description: description,
        siteName: "Titomeet",
        images: [
            {
                url: "https://titomeet.com/img/logo.png",
                width: 800,
                height: 600,
            },
        ],
        type: "website",
    },
    twitter:{
        images:"https://titomeet.com/img/logo.png",
        card:"summary_large_image",
        title:"Titomeet",
        description:description,
        site:"@ahstoorx",
        creator:"@ahstoorx",
    },
    alternates:{
        canonical: 'https://titomeet.com/policy',
        languages: {
            'en': 'https://titomeet.com/en/policy',
            'fr': 'https://titomeet.com/fr/policy',
        },
    },
    robots:{
        index:true,
        follow:true,
    }
}

const Page = () => {
    return (
        <div className="section-container">
            <h1 className="text-3xl font-bold mb-8 text-center">Politique de confidentialité (Privacy Policy)</h1>

            <div className="space-y-4 text-gray-700">
                <p><strong>1. Données collectées :</strong> Nous recueillons les informations fournies lors de la création de compte et de l’achat de billets.</p>
                <p><strong>2. Utilisation :</strong> Les données servent à gérer les comptes, événements, paiements, et communications.</p>
                <p><strong>3. Partage :</strong> Aucune revente de données. Partage uniquement avec prestataires nécessaires (paiement, e-mailing).</p>
                <p><strong>4. Sécurité :</strong> Vos données sont sécurisées via des protocoles de chiffrement et d’authentification.</p>
                <p><strong>5. Vos droits :</strong> Vous pouvez demander l’accès, la modification ou la suppression de vos données à privacy@titomeet.com.</p>
            </div>
        </div>
    );
}

export default Page;
