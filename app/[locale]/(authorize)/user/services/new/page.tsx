"use client"
import React, { useState } from 'react';
import { FirstStep } from './first.step';
import { Divider } from '@heroui/react';
import { SecondStemp } from './second.stemp';
import { ThirdStep } from './third.step';

const Page = () => {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <div>
            <div className="max-w-5xl mx-auto py-12 mb-16">
                <h2 className="text-center text-2xl font-extrabold">Devenir prestataire</h2>
                <p className="text-center text-red-500 font-medium mt-1">
                    Devenez Prestataire sur TITOMEET & Développez Votre Activité
                </p>
                <p className="text-center text-gray-600 mt-2 font-light ">
                    Rejoignez une communauté dynamique et accédez à des milliers d&#39;organisateurs d&#39;événements à la recherche de services de qualité
                </p>
                <Divider className="my-6" />
                <p className="text-center font-medium">
                    Créez votre profil en quelques étapes, ajoutez vos services et recevez des demandes rapidement.
                </p>
                <section>
                    {activeStep === 1 && <FirstStep setActiveStep={setActiveStep} />}
                    {activeStep === 2 && <SecondStemp setActiveStep={setActiveStep}/>}
                    {activeStep === 3 && <ThirdStep setActiveStep={setActiveStep}/>}
                   
                </section>
            </div>
        </div>
    );
}

export default Page;
