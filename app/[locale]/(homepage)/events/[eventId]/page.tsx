/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { EventDetails } from '@/components/event.detail.component';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    keywords: "Évènement Professionnel, Réseautage Bénin, Rencontre Business, Réunion d'Affaires, Networking Bénin, Discussion Professionnelle, Plateforme de Réseautage, Rencontre Entrepreneuriale, Organiser un Évènement, Agenda Bénin, Conférences Bénin, Meet-up Professionnel, Échange Business, Événementiel Bénin, Groupe de Discussion, Inscription Évènement, Salon Professionnel, Événement Interactif, Communauté Pro Bénin",
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
        canonical: 'https://titomeet.com/events',
        languages: {
            'en': 'https://titomeet.com/en/events',
            'fr': 'https://titomeet.com/fr/events',
        },
    },
    openGraph: {
        title: 'USER HOMEPAGE | TITOMEET',
        description: 'Participez à des évènements en ligne de manière simple et sécurisée avec TITOMEET.',
        url: 'https://titomeet.com/events',
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

export async function generateStaticParams() {
    // Simuler l’appel à une base de données ou API
    const events = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`).then(res => res.json())

    
    return events.items.map((event: any) => ({
        id: event.id,
        locale: 'fr', // ou 'en'
    }))
}

const Route = ({ params }: { params: Promise<{ locale: string; eventId: string }> }) => {
    return (
        <div className=''>

            <EventDetails />

        </div>
    );
}

export default Route;
