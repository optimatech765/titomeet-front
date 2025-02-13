"use client"
import { Button } from "@heroui/button";
import { Card, Image, Input } from "@heroui/react";
import { MapPinIcon, SearchIcon } from "lucide-react";
import NextImage from "next/image";


export const HeroSection = () => {
    return (
        <section className="bg-white px-3 md:px-7 lg:px-14 py-12">
            <div className="max-w-7xl mx-auto flex lg:flex-row  justify-between">
                {/* Texte et boutons */}
                <div className="lg:w-1/2  lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                        <p className="text-primary">Tit<span className="text-secondary" >o</span>meet,</p>
                        <span className="text-black">Le plaisir de se retrouver</span>
                    </h1>
                    <p className="text-gray-600 mt-4 text-lg">
                        Participez à des événements uniques et créez des connexions authentiques.
                    </p>

                    {/* Boutons */}
                    <div className="mt-6 mb-4 flex sm:flex-row items-center gap-4">
                        <Button color="primary" radius="full" size="lg">
                            Découvrir les évènements
                        </Button>
                        <Button color="secondary" variant="bordered" radius={"full"} size="lg">
                            Créer un évènement
                        </Button>
                    </div>

                    {/* Barre de recherche */}

                    <div className="mt-7 bg-hero-pattern bg-red-100 p-2 rounded-md flex items-center gap-4 shadow-md">
                        <Input
                            type="text"
                            placeholder="Rechercher événement"
                            radius="full"
                            startContent={<SearchIcon className="w-4 h-4 text-primary " />}
                            className=""
                        />
                        <Input
                            type="text"
                            placeholder="Localisation"
                            radius="full"
                            startContent={<MapPinIcon className="w-4 h-4 text-primary " />}
                            className=""
                        />

                        <Button isIconOnly className="bg-white text-primary rounded-full p-3 ml-2 hover:bg-primary hover:text-white">
                            <SearchIcon className="w-4 h-4 " />
                        </Button>
                    </div>


                </div>

                {/* Image avec NextUI Card */}
                <div className="lg:w-1/2 flex justify-end ">
                    <Card radius="lg" shadow="md" className="rounded-[188px] shadow-lg  max-h-[400px] max-w-[400px] overflow-hidden">
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

