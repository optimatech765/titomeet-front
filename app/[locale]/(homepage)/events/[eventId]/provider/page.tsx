import { EventDetailSection } from "@/sections/event.detail.section";
import { OrganiserInfoComponent } from "@/components/organiser.info.component";
import { description, keywords } from "@/utils/metadata-contant";
import { Metadata } from "next";

export const metadata: Metadata = {
    keywords: keywords,
    title: "Titomeet - Prestataires",
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

export default function ProviderPage() {
    return <div className="mx-auto p-6 mb-12 section-container md:px-10">
        <EventDetailSection />
        <div className="mt-6 space-y-2.5">
            <h2 className="information-title1">Informations sur l’organisateur</h2>
            <OrganiserInfoComponent />
        </div>

    </div>;
}