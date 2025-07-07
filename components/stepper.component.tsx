"use client";

import { Button } from "@heroui/button";
import { useState } from "react";

const steps = [
    "Informations générales",
    "Options avancées",
    "Visibilité et communication",
    "Résumé",
];

export const StepperNextUI = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="w-full flex flex-col items-center">
            {/* Barre de progression */}
            <div className="relative flex items-center w-full max-w-2xl">
                {steps.map((step, index) => (
                    <div key={index} className="flex-1 relative">
                        {/* Ligne */}
                        {/* {index > 0 && ( */}
                        <div
                            className={`absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 ${index <= currentStep ? "bg-orange-500" : "bg-gray-300"
                                }`}
                        ></div>
                        {/* )} */}
                        {/* Point du step */}
                        <div
                            className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${index <= currentStep
                                ? "border-orange-500 bg-orange-500 text-white"
                                : "border-gray-400 bg-white"
                                }`}
                        >
                            {index === currentStep && (
                                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Noms des étapes */}
            <div className="flex justify-between w-full max-w-2xl mt-2 text-sm">
                {steps.map((step, index) => (
                    <span
                        key={index}
                        className={`flex-1 text-center ${index === currentStep ? "text-orange-500 font-bold" : "text-gray-500"
                            }`}
                    >
                        {step}
                    </span>
                ))}
            </div>

            {/* Boutons de navigation */}
            <div className="mt-6 flex gap-4">
                <Button
                    name="Précédent"
                    disabled={currentStep === 0}
                    onPress={() => setCurrentStep((prev) => prev - 1)}
                >
                    Précédent
                </Button>
                <Button
                    name="Suivant"
                    color="primary"
                    disabled={currentStep === steps.length - 1}
                    onPress={() => setCurrentStep((prev) => prev + 1)}
                >
                    Suivant
                </Button>
            </div>
        </div>
    );
}


export const StepperTailwind = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="w-full flex flex-col items-center">
            {/* Barre de progression */}
            <div className="relative flex items-center w-full max-w-2xl">
                {steps.map((step, index) => (
                    <div key={index} className="flex-1 relative">

                        {/* Ligne */}
                        {index > 0 && (
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 ${index <= currentStep ? "bg-orange-500" : "bg-gray-300"
                                    }`}
                            ></div>
                        )}

                        {/* Point du step */}
                        <div
                            className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${index <= currentStep
                                ? "border-orange-500 bg-orange-500 text-white"
                                : "border-gray-400 bg-white"
                                }`}
                        >
                            {index === currentStep && (
                                <span className="w-3 h-3 bg-white rounded-full"></span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Noms des étapes */}
            <div className="flex justify-between w-full max-w-2xl mt-2 text-sm">
                {steps.map((step, index) => (
                    <span
                        key={index}
                        className={`flex-1 text-center ${index === currentStep ? "text-orange-500 font-bold" : "text-gray-500"
                            }`}
                    >
                        {step}
                    </span>
                ))}
            </div>

            {/* Boutons de navigation */}
            <div className="mt-6 flex gap-4">
                <button
                    name="Précédent"
                    className="px-4 py-2 border rounded disabled:opacity-50"
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                >
                    Précédent
                </button>
                <button
                    name="Suivant"
                    className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
                    disabled={currentStep === steps.length - 1}
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                >
                    Suivant
                </button>
            </div>
        </div>
    );
}
