// Exemple de structure Next.js + TypeScript + Heroicons pour une page de FAQ, CGU, etc.
// Ce fichier représente une page de type FAQ avec les composants HeroUI (Heroicons, Tailwind CSS)


import { description, keywords } from "@/utils/metadata-contant";
import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    keywords: keywords,
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

const FAQPage: NextPage = () => {
  return (
    <div className="section-container">
      <h1 className="text-3xl font-bold mb-8 text-center">Foire aux questions (FAQ)</h1>

      <div className="space-y-4">
        {[
          {
            question: "Qu’est-ce que Titomeet ?",
            answer:
              "Titomeet est une plateforme de gestion d’événements permettant de créer, gérer, vendre ou distribuer des billets pour des événements physiques ou en ligne."
          },
          {
            question: "Comment créer un événement ?",
            answer:
              "Après inscription, cliquez sur ‘Créer un événement’, remplissez les informations nécessaires (titre, description, date, lieu, billets) puis publiez en un clic."
          },
          {
            question: "Comment contacter le support ?",
            answer:
              "Vous pouvez nous contacter par e-mail à support@titomeet.com ou via le chat disponible sur le site du lundi au vendredi, de 9h à 18h (GMT+1)."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-purple-100 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900">{item.question}</h3>
            <p className="text-gray-700 mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
