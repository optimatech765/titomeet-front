"use client"
import { Button } from "@heroui/button";
import { Card, Input } from "@heroui/react";
import Image from "next/image";

export const HeroSection = () => {
    return (
        <section className="bg-white px-6 md:px-12 lg:px-24 py-12">
            <div className="max-w-7xl mx-auto flex lg:flex-row items-center">
                {/* Texte et boutons */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                        <span className="text-red-500">Titomeet</span>, <br />
                        <span className="text-black">Le plaisir de se retrouver</span>
                    </h1>
                    <p className="text-gray-600 mt-4 text-lg">
                        Participez à des événements uniques et créez des connexions authentiques.
                    </p>

                    {/* Boutons */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                        <Button color="danger" radius="full" size="lg">
                            Découvrir les évènements
                        </Button>
                        <Button color="warning" variant="bordered" radius="full" size="lg">
                            Créer un évènement
                        </Button>
                    </div>

                    {/* Barre de recherche */}
                    <div className="mt-8 bg-red-100 p-2 rounded-full flex items-center gap-4 shadow-md">
                        <Input
                            type="text"
                            placeholder="Rechercher événement"
                            radius="full"
                            startContent="🔍"
                            className="bg-white"
                        />
                        <Input
                            type="text"
                            placeholder="Localisation"
                            radius="full"
                            startContent="📍"
                            className="bg-white"
                        />
                    </div>
                </div>

                {/* Image avec NextUI Card */}
                <div className="lg:w-1/2 flex justify-center">
                    <Card radius="lg" shadow="md" className="rounded-[50px] overflow-hidden">
                        <Image
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

