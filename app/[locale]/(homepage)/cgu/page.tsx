import { description, keywords } from '@/utils/metadata-contant';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    keywords: keywords,
    title: "Titomeet - Conditions générales d'utilisation (CGU)",
    metadataBase: new URL(process.env.NEXT_PUBLIC_FRONT_URL as string),
    description: description,
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
        canonical: 'https://titomeet.com/fr',
        languages: {
            'en': 'https://titomeet.com/en',
            'fr': 'https://titomeet.com/fr',
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
            <h1 className="text-3xl font-bold mb-8 text-center">Conditions générales d&apos;utilisation (CGU)</h1>

            <div className="space-y-4 text-gray-700">
                <p><strong>1. Objet :</strong> Ces conditions régissent l’accès et l’utilisation de la plateforme Titomeet.com.</p>
                <p><strong>2. Inscription :</strong> L’inscription est gratuite et requiert des informations exactes et à jour.</p>
                <p><strong>3. Responsabilités :</strong> Chaque utilisateur est responsable du contenu publié. L’organisateur doit respecter la législation en vigueur.</p>
                <p><strong>4. Paiement :</strong> Les paiements sont traités via des prestataires externes. Titomeet n’est pas responsable des litiges entre organisateurs et participants.</p>
                <p><strong>5. Propriété intellectuelle :</strong> Tous les éléments du site sont protégés. Toute reproduction est interdite sans autorisation.</p>
                <p><strong>6. Suspension :</strong> Titomeet peut suspendre un compte en cas de non-respect des présentes conditions.</p>
            </div>
        </div>
    );
}

export default Page;
