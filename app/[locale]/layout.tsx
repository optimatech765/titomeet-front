"use client"
// import type { Metadata } from "next";
import { NextUiProvider } from "@/providers/nextui.provider";
import { LangProvider } from "@/providers/lang.provider";
import { useParams } from "next/navigation";


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();
  const locale = params.locale;

  return (
    <section
      className="font-poppins "
    >
      <NextUiProvider>
        <LangProvider locale={locale as string}>
          {children}
        </LangProvider>

      </NextUiProvider>

    </section>
  );
}
