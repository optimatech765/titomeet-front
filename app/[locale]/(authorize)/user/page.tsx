import React from 'react';
import { UserPageContent } from './user.homepage.content';
import { Metadata } from 'next';

export const metadata: Metadata = {
    keywords: "Evènement,Discussion,BENIN,MEET,REUNION,RESEAUTAGE,",
    generator: "Next.js",
    authors: [{ name: "ADIVE HYACINTHE", url: "https://github.com/ahstoorx" }],
    applicationName: "TITOMEET",
    title: "TITOMEET-USER HOMEPAGE",
    description: "TITOMEET est un service de réunions en ligne qui vous permet de rencontrer des personnes de votre réseau social, de vos amis, de vos collègues, de vos amis professionnels, et de toute autre personne qui vous intéresse.",
    referrer: "no-referrer",
    creator: "@ahstoorx",
    publisher: "@ahstoorx",
    robots: "index,follow",
    appleWebApp: true,
    alternates: {
        canonical: 'https://titomeet.com/fr',
        languages: {
            'en': 'https://titomeet.com/en',
            'fr': 'https://titomeet.com/fr',
        },
    },
    openGraph: {
        title: 'USER HOMEPAGE | TITOMEET',
        description: 'Participez à des évènements en ligne de manière simple et sécurisée avec TITOMEET.',
        url: 'https://titomeet.com/user',
        siteName: 'Titomeet',
        images: [
            {
                url: 'https://titomeet.com/img/logo.png',
                width: 800,
                height: 600,
            },
        ],
        type: 'website',
    },
};

const Page = () => {
    return (
        <>

            <UserPageContent />
        </>
    );
}

export default Page;
