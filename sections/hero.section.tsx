"use client"
import { useI18n, useScopedI18n } from "@/locales/client";
import { getI18n, getScopedI18n } from "@/locales/server";
import { Button } from "@heroui/button";
import { Card, Image, Input } from "@heroui/react";
import { MapPinIcon, SearchIcon } from "lucide-react";
import NextImage from "next/image";


export const HeroSection = () => {
    const t = useI18n()
    const landingT = useScopedI18n('landing')
    const landingTButton = useScopedI18n('landing.button')
    return (
        <section className="bg-white px-3 md:px-7 lg:px-14 py-3">
            <div className="max-w-7xl mx-auto flex lg:flex-row  justify-between">
                {/* Texte et boutons */}
                <div className="lg:w-1/2  lg:text-left space-y-7 mt-9">
                    <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                        <p className="text-primary">Tit<span className="text-secondary" >o</span>meet,</p>
                        <p className="text-black">{landingT('title')}</p>
                    </h1>
                    <p className="text-gray-600 mt-4 text-lg">
                        {landingT('description')}
                    </p>

                    {/* Boutons */}
                    <div className="mt-6 mb-4 flex sm:flex-row items-center gap-4">
                        <Button color="primary" radius="full" size="lg">
                        {landingTButton('first')}
                        </Button>
                        <Button color="secondary" variant="bordered" radius={"full"} size="lg">
                            {landingTButton('second')}
                        </Button>
                    </div>

                    {/* Barre de recherche */}

                    <div className="mt-14  h-[93px] bg-hero-pattern bg-red-100 p-2 rounded-md flex items-center gap-4 shadow-md">
                        <Input
                            type="text"
                            placeholder="Rechercher événement"
                            radius="full"
                            startContent={<SearchIcon className="w-4 h-4 text-primary " />}
                            className=""
                            size="lg"
                        />
                        <Input
                            type="text"
                            placeholder="Localisation"
                            radius="full"
                            startContent={<MapPinIcon className="w-4 h-4 text-primary " />}
                            className=""
                            size="lg"
                        />

                        <Button isIconOnly className="bg-white text-primary rounded-full p-3 ml-2 hover:bg-primary hover:text-white">
                            <SearchIcon className="w-4 h-4 " />
                        </Button>
                    </div>


                </div>

                {/* Image avec NextUI Card */}
                <div className="lg:w-1/2 flex justify-end mt-4 ">
                    <Card radius="lg" shadow="md" className="rounded-[160px] shadow-lg  max-h-[525px] max-w-[525px] overflow-hidden">
                        <Image
                            as={NextImage}
                            src="/img/hero-image.png" // Remplace par ton image
                            alt="Événement en groupe"
                            width={500}
                            height={500}
                            className="object-cover"
                        />
                    </Card>
                </div>
            </div>
        </section>
    );
};

