import { Poppins } from 'next/font/google';
import React from 'react';
import './globals.css';


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
