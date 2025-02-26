"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, Divider } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const interests = [
    {
        category: "Tech et innovation",
        icon: "💡",
        options: ["Coding Weekend", "Innovation Lab", "Blockchain pour débutants"],
    },
    {
        category: "Art et culture",
        icon: "🎨",
        options: ["Club de lecture", "Jam Session", "Ciné-débat"],
    },
    {
        category: "Sport et bien-être",
        icon: "⚽",
        options: [
            "Running Club @ Bord de mer",
            "Yoga",
            "Football mixte du dimanche",
        ],
    },
    {
        category: "Cuisine et gastro",
        icon: "🍽️",
        options: [
            "Atelier Cuisine Locale",
            "Dégustation vins & fromages",
            "Food Tour du marché",
        ],
    },
];

export default function InterestsSelection() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelection = (option: string) => {
        setSelected((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    return (
        <div className="flex flex-col items-center space-y-6 p-6">
            <h1 className="text-3xl font-extrabold text-red-500 md:flex items-center">

                <Image
                    src="/img/face.png"
                    alt="logo"
                    width={50}
                    height={50}

                />  Personnalisez votre expérience TITOMEET
            </h1>
            <p className="footer-link text-center">
                Sélectionnez vos centres d’intérêts pour découvrir des événements qui
                vous correspondent
            </p>
            <p className="footer-link">
                Sélectionnez au moins <span className="font-bold">trois (03)</span>{" "}
                centres d’intérêts
            </p>

            <div className="grid space-y-5 md:space-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full max-w-5xl">
                {interests.map(({ category, icon, options }, index) => (
                    <>
                        <div
                            key={category}
                            className={clsx({ "md:border-e-1 pe-2": index + 1 < interests.length }, )}
                        >
                            <Card className="bg-transparent flex items-center justify-center">

                                <h2 className="text-lg font-medium flex my-3 items-center">
                                    <span className="mr-2">{icon}</span> {category}
                                </h2>

                            </Card>

                            <div className="flex gap-2 mt-2">
                                <div className="flex flex-wrap gap-2 ">
                                    {options.map((option) => (
                                        <button
                                            key={option}
                                            className={`px-3 py-1 rounded-full text-xs font-medium border  ${selected.includes(option)
                                                ? "bg-tertiary text-primary"
                                                : "bg-gray-100 text-gray-700"
                                                }`}
                                            onClick={() => toggleSelection(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>



                            </div>

                        </div>


                    </>


                ))}
            </div>

            <Button
                variant="solid"
                color="primary"
                size="sm"
                disabled={selected.length < 3}
                className="mt-4 px-28"
                radius="full"
            >
                Enregistrer
            </Button>
        </div>
    );
}
