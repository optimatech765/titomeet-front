import React from 'react';
import { PrestataireDemandes } from './content';

import { description, keywords } from "@/utils/metadata-contant";
import type { Metadata } from "next";

export const metadata: Metadata = {
    keywords: keywords,
    title:"Titomeet - Demandes de Prestation",
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
        canonical: 'https://titomeet.com/faq',
        languages: {
            'en': 'https://titomeet.com/en/faq',
            'fr': 'https://titomeet.com/fr/faq',
        },
    },
    robots:{
        index:true,
        follow:true,
    }
}

const Page = () => {
    return (
        <PrestataireDemandes />
    );
}

export default Page;
