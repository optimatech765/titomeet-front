
import { EventDetails } from '@/components/event.detail.component';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  keywords: "Evènement,Discussion,BENIN,MEET,REUNION,RESEAUTAGE,",
  generator: "Next.js",
  authors: [{ name: "ADIVE HYACINTHE", url: "https://github.com/ahstoorx" }],
  applicationName: "TITOMEET",
  title: "TITOMEET-EVENT DETAILS",
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
        url: 'https://titomeet.com/user/events',
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

const Route = () => {
    return (
        <div className=''>

            <EventDetails />
           
        </div>
    );
}

export default Route;
