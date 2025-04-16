
"use client";

import { Button } from "@heroui/react";
import { PlusIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FonctionnalitesSection = () => {
    return (
        // bg-gradient-to-r from-red-50 to-pink-50
        <section className=" py-10 rounded-xl section-container">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Texte */}
                <div>
                    <div className="space-y-1">
                        <h2 className="font-extrabold text-primary text-xl md:text-4xl font-poppins">Fonctionnalités</h2>
                        <p className="text-[#1E1E1E] text-base  block">
                            Trouvez l&apos;événement parfait ou lancez le vôtre
                        </p>
                        <div className="bg-primary h-2 max-w-36 mt-1 rounded-tl-md " />
                    </div>

                    <ul className="mt-6 space-y-3">
                        <li className="flex items-center gap-1 text-gray-800">
                            <div className="bg-secondary text-4xl w-4 h-4 rounded-full " />
                            Explorez les événements
                        </li>
                        <li className="flex items-enter gap-1 text-gray-800">
                            <div className="bg-secondary text-4xl w-4 h-4 rounded-full " /> Rejoignez la communauté, discutez et échangez
                        </li>
                        <li className="flex items-center gap-1 text-gray-800">
                            <div className="bg-secondary text-4xl w-4 h-4 rounded-full " /> Organisez vos propres rencontres
                        </li>
                        <li className="flex items-center gap-1 text-gray-800">
                            <div className="bg-secondary text-4xl w-4 h-4 rounded-full " /> Profitez d&apos;une expérience sur mesure
                        </li>
                    </ul>

                </div>

                {/* Images et Boutons */}
                <div className="grid md:grid-cols-2 gap-4 flex-end ">

                    <div className="flex justify-end">

                        <div className="w-fit space-y-2 flex flex-col justify-end">
                            <div>
                                <Image
                                    src="/img/function-Imagea.jpg"
                                    alt="Événement en groupe"
                                    width={300}
                                    height={200}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div>
                                <Button startContent={<SearchIcon hanging={20} width={20} />}
                                    as="a"
                                    href="#evenements"
                                    color="primary"
                                    variant="solid"
                                    className="w-full rounded-full "
                                >
                                    Découvrir les événements
                                </Button>
                            </div>


                        </div>

                    </div>

                    <div className="flex justify-end">

                        <div className="w-fit space-y-2">
                            <Button startContent={<PlusIcon hanging={20} width={20} />}
                                as={Link}
                                href="/user/events/new"
                                color="secondary"
                                variant="solid"
                                className="w-full  rounded-full "
                            >
                                Créer un événement
                            </Button>
                            <div className=" ">
                                <Image
                                    src="/img/function-imageB.jpg"
                                    alt="Créer un événement"
                                    width={300}
                                    height={200}
                                    objectFit="cover"
                                    className="rounded-lg object-cover"
                                />
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
