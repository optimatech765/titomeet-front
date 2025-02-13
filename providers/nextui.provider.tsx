"use client";
import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


export const NextUiProvider = ({ children }: { children: React.ReactNode }) => {
    // 2. Wrap HeroUIProvider at the root of your app
    return (
        <HeroUIProvider >
            <NextThemesProvider attribute="class" defaultTheme="dark">
                {children}
            </NextThemesProvider>

        </HeroUIProvider>
    );
}