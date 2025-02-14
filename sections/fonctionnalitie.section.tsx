
"use client";

import { Button, Card } from "@heroui/react";
import { PlusIcon, SearchIcon } from "lucide-react";
import Image from "next/image";

export const FonctionnalitesSection = () => {
    return (
        // bg-gradient-to-r from-red-50 to-pink-50
        <section className=" p-10 rounded-xl">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Texte */}
                <div>
                    <div className="space-y-1">
                        <h2 className="font-extrabold text-gray-900 text-4xl font-poppins">Fonctionnalités</h2>
                        <p className="text-[#1E1E1E] text-base  block">
                            Trouvez l'événement parfait ou lancez le vôtre
                        </p>
                        <div className="bg-primary h-2 max-w-36 mt-1 rounded-tl-md " />
                    </div>

                    <ul className="mt-6 space-y-3">
                        <li className="flex items-center gap-2 text-gray-800">
                            <div className="bg-secondary text-4xl w-4 h-4 rounded-full " />
                            <span className="block">Explorez les événements</span>
                        </li>
                        <li className="flex items-center gap-1 text-gray-800">
                            <div className="bg-secondary text-4xl w-4 h-4 rounded-full " /> Rejoignez la communauté, discutez et échangez
                        </li>
                        <li className="flex items-center gap-1 text-gray-800">
                            <div className="bg-secondary text-4xl w-4 h-4 rounded-full " /> Organisez vos propres rencontres
                        </li>
                        <li className="flex items-center gap-1 text-gray-800">
                            <div className="bg-secondary text-4xl w-4 h-4 rounded-full " /> Profitez d'une expérience sur mesure
                        </li>
                    </ul>

                </div>

                {/* Images et Boutons */}
                <div className="grid grid-cols-2 gap-4">

                    <div className="space-y-2">

                        <Card className="">
                            <Image
                                src="/img/function-Imagea.jpg"
                                alt="Événement en groupe"
                                width={300}
                                height={200}
                                className="rounded-lg object-cover"
                            />
                        </Card>
                        <Button startContent={<SearchIcon hanging={20} width={20} />}
                            as="a"
                            href="/evenements"
                            color="primary"
                            variant="solid"
                            className="w-full rounded-full "
                        >
                            Découvrir les événements
                        </Button>
                    </div>

                    <div className="space-y-2">
                        <Button startContent={<PlusIcon hanging={20} width={20} />}
                            as="a"
                            href="/creer-evenement"
                            color="secondary"
                            variant="solid"
                            className="w-full  rounded-full "
                        >
                            Créer un événement
                        </Button>
                        <Card className=" flex flex-col justify-center items-center bg-secondary text-white">
                            <Image
                                src="/img/function-imageB.jpg"
                                alt="Créer un événement"
                                width={300}
                                height={200}
                                className="rounded-lg object-cover"
                            />

                        </Card>
                    </div>


                </div>
            </div>
        </section>
    );
}
