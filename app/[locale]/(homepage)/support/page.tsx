import { description, keywords } from '@/utils/metadata-contant';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    keywords: keywords,
    metadataBase: new URL(process.env.NEXT_PUBLIC_FRONT_URL as string),
    description: description,
    title: "Titomeet - Support",
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
        canonical: 'https://titomeet.com/support',
        languages: {
            'en': 'https://titomeet.com/en/support',
            'fr': 'https://titomeet.com/fr/support',
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
            <h1 className="text-3xl font-bold mb-8 text-center">Support (Support)</h1>

            <div className="text-gray-700 space-y-2">
                <p><strong>📧 Email :</strong> support@titomeet.com</p>
                <p><strong>💬 Chat en ligne :</strong> Disponible du lundi au vendredi, 9h à 18h (GMT+1).</p>
                <p><strong>📞 Temps de réponse :</strong> Moins de 24h par email, réponse instantanée en chat durant les heures d’ouverture.</p>
            </div>
        </div>
    );
}

export default Page;
