"use client";
import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ToastContainer } from "react-toastify";


export const NextUiProvider = ({ children }: { children: React.ReactNode }) => {
    // 2. Wrap HeroUIProvider at the root of your app
    return (
        <HeroUIProvider >

           
            <NextThemesProvider attribute="class" defaultTheme="white">
            <ToastContainer position="top-right"/>
                {children}
            </NextThemesProvider>


        </HeroUIProvider>
    );
}