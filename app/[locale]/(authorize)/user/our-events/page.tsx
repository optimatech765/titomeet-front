import React from 'react';
import { OurEventPageContent } from './our-event.page.content';
import { Metadata } from 'next';


export const metadata: Metadata = {
    keywords: "Evènement,Discussion,BENIN,MEET,REUNION,RESEAUTAGE,",
    generator: "Next.js",
    authors: [{ name: "ADIVE HYACINTHE", url: "https://github.com/ahstoorx" }],
    applicationName: "TITOMEET",
    title: "TITOMEET-USER EVENTS PAGE",
    description: "TITOMEET est un service de réunions en ligne qui vous permet de rencontrer des personnes de votre réseau social, de vos amis, de vos collègues, de vos amis professionnels, et de toute autre personne qui vous intéresse.",
    referrer: "no-referrer",
    creator: "@ahstoorx",
    publisher: "@ahstoorx",
    robots: "index,follow",
    appleWebApp: true
};

const Page = () => {
    return (
        <>
          <OurEventPageContent />  
        </>
    );
}

export default Page;
