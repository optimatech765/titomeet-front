
import { NotificationsCardComponent } from '@/components/notification.card.component';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    keywords: ["Évènement Professionnel",
        "Réseautage Bénin",
        "Rencontre Business",
        "Réunion d'Affaires",
        "Networking Bénin",
        "Discussion Professionnelle",
        "Plateforme de Réseautage",
        "Rencontre Entrepreneuriale", "Organiser un Évènement",
        "Agenda Bénin",
        "Conférences Bénin",
        "Meet-up Professionnel",
        "Échange Business",
        "Événementiel Bénin",
        "Groupe de Discussion",
        "Inscription Évènement",
        "Salon Professionnel",
        "Événement Interactif",
        "Communauté Pro Bénin",
        "Titomeet",
        "Titomeet BENIN",
        "BENIN"
    ],
    generator: "Next.js",
    authors: [{ name: "ADIVE HYACINTHE", url: "https://github.com/ahstoorx" }],
    applicationName: "TITOMEET",
    title: "TITOMEET-NOTIFICATIONS PAGE",
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
const Page = () => {
    return (
        <div className={"section-container min-h-screen"}>
            <NotificationsCardComponent />
        </div>
    );
}

export default Page;
