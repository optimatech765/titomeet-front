/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import { EventDetailPageContent } from './event.detail.page.content';
import { keywords } from '@/utils/metadata-contant';


type Props = {
    params: Promise<{ locale: string, eventId: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}


export async function generateMetadata({ params }: Props,
    parent: ResolvingMetadata): Promise<Metadata> {
    const { eventId } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`, {
        cache: 'no-store' // ou 'force-cache' selon le besoin
    });
    const event = await res.json();

    return {
        title: `TITOMEET | ${event.name}`,
        description: event.description,
        keywords: keywords,
        generator: "Next.js",
        authors: [{ name: "ADIVE HYACINTHE", url: "https://github.com/ahstoorx" }],
        applicationName: "TITOMEET",
        referrer: "no-referrer",
        creator: "@ahstoorx",
        publisher: "@ahstoorx",
        robots: "index,follow",
        appleWebApp: true,
        alternates: {
            canonical: `https://titomeet.com/events/${eventId}`,
            languages: {
                'en': `https://titomeet.com/en/events/${eventId}`,
                'fr': `https://titomeet.com/fr/events/${eventId}`,
            },
        },
        openGraph: {
            title: `TITOMEET | ${event.name}`,
            description: event.description,
            url: `https://titomeet.com/events/${eventId}`,
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
        twitter: {
            images: "https://titomeet.com/img/logo.png",
            card: "summary_large_image",
            title: `TITOMEET | ${event.name}`,
            description: event.description,
            site: `https://titomeet.com/events/${eventId}`,
            creator: "@ahstoorx",
        },

    };
}

// export async function generateStaticParams() {
//     // Simuler l’appel à une base de données ou API
//     const events = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`).then(res => res.json())

//     return events.items.map((event: any) => ({
//         id: event.id,
//         locale: 'fr', // ou 'en'
//     }))
// }

const Route = ({params}:Props) => {
    return (
        <div>
            <EventDetailPageContent />
        </div>
    );
}

export default Route;
