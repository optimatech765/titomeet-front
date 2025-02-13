import { Button } from "@heroui/button";
import { Input } from "@heroui/react";
import Image from "next/image";

export const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
            {/* Texte */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="text-red-500">Titomeet</span>,<br />
                    <span className="text-black">Le plaisir de se retrouver</span>
                </h1>
                <p className="text-gray-600 mt-4">
                    Participez à des événements uniques et créez des connexions authentiques
                </p>

                {/* Boutons */}
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <Button className="bg-red-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-red-600">
                        Découvrir les événements
                    </Button>
                    <Button className="border border-orange-500 text-orange-500 py-3 px-6 rounded-full shadow-md hover:bg-orange-50">
                        Créer un événement
                    </Button>
                </div>

                {/* Barre de recherche */}
                <div className="mt-8 flex flex-col md:flex-row bg-red-100 p-2 rounded-full w-full md:w-4/5 shadow-md">
                    <Input
                        className="bg-white rounded-full px-4 py-2 flex-1"
                        placeholder="Rechercher événement"
                    />
                    <Input
                        className="bg-white rounded-full px-4 py-2 flex-1 md:ml-2"
                        placeholder="Localisation"
                    />
                    <Button className="bg-red-500 text-white rounded-full p-3 ml-2 hover:bg-red-600">
                        🔍
                    </Button>
                </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                    src="img/hero-image.png"
                    width={500}
                    height={500}
                    alt="People enjoying an event"
                    className="rounded-tr-full"
                />
            </div>
        </section>
    );
}
