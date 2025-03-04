import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import React from 'react';
import './globals.css';




const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

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
