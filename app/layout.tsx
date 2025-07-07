import { Poppins } from 'next/font/google';
import React from 'react';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Metadata } from 'next';
import { description, keywords } from '@/utils/metadata-contant';


const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

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

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased flex flex-col justify-between`}>

                {children}
            </body>

        </html>
    );
}

export default Layout;
