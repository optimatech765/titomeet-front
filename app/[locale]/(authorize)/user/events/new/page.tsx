"use client"
import AdvanceComponent from '@/components/create-event/advance.component';
import GeneralInforComponent from '@/components/create-event/general.infor.component';
import ResumeComponent from '@/components/create-event/resume.component';
import VisibilityCommunicationComponent from '@/components/create-event/visibility.communication.component';
import { Button } from '@heroui/button';
import clsx from 'clsx';
import React, { useState } from 'react';

const Page = () => {

    const [activeStep, setActiveStep] = useState("general");
    // const [validateStep, setValidateStep] = useState([]);

    return (
        <div className={"flex flex-col gap-2 pb-6"}>
            <div>
                <div className="w-full px-8 py-4">
                    <div
                        className="relative grid w-full h-24 m-0 overflow-hidden text-slate-300  place-items-center rounded-xl bg-clip-border">
                        <div className="w-full px-20 pt-4 pb-8">
                            <div className="relative flex items-center justify-between w-full">
                                <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-slate-300"></div>
                                {/* w-1/4 pour le premier 2/4 pour le second 3/4 pour le troisième et w-full pour le dernier */}
                                <div className={clsx({
                                    "w-1/4": activeStep === "general",
                                    "w-2/4": activeStep === "advanced",
                                    "w-3/4": activeStep === "communication",
                                    "w-full": activeStep === "resume",
                                },
                                    "absolute left-0 top-2/4 h-0.5  -translate-y-2/4 bg-secondary transition-all duration-500")}
                                >
                                </div>
                                <div
                                    onClick={() => setActiveStep("general")}
                                    className="relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full  !bg-secondary font-bold text-[#1E1E1E] ring-0 transition-all duration-300">
                                    <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                                            Informations générales
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    onClick={() => setActiveStep("advanced")}
                                    className="relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full  bg-secondary font-bold text-[#1E1E1E] transition-all duration-300">
                                    <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                                            Options avancées
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    onClick={() => setActiveStep("communication")}
                                    className="relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full  !bg-secondary font-bold text-[#1E1E1E] transition-all duration-300">
                                    <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                                            Visibilité et communication
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    onClick={() => setActiveStep("resume")}
                                    className="relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full  !bg-slate-300 font-semibold text-[#1E1E1E] transition-all duration-300">
                                    <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                                            Resumé
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* General stepper data */}
            {activeStep === "general" &&
                <div className='flex flex-col gap-3 px-32 '>
                    <h3 className={" font-normal"}>Définissez les bases de l’événement</h3>
                    <GeneralInforComponent />
                    <div className='flex items-center justify-between'>
                        <Button variant="bordered" className={" px-8 text-primary border-primary "} radius='full' >
                            Enregistrer brouillon
                        </Button>

                        <Button className={" bg-primary px-20 text-white"} radius='full' >
                            Suivant
                        </Button>
                    </div>
                </div>
            }

            {/* Advanced stepper data */}
            {activeStep === "advanced" &&
                <div className={"flex flex-col gap-3 px-32 "}>
                    <h3 className={" font-normal"}> Personnalisez l’événement et ajoutez des services</h3>
                    <AdvanceComponent />
                    <div className='flex items-center justify-between'>
                        <Button variant="bordered" className={" px-8 text-primary border-primary "} radius='full' >
                            Enregistrer brouillon
                        </Button>
                        <Button className={" bg-primary px-20 text-white"} radius='full' >
                            Suivant
                        </Button>
                    </div>
                </div>
            }

            {/* communication stepper data */}
            {activeStep === "communication" &&
                <div className={"flex flex-col gap-3 px-32 "}>
                    <h3 className={" font-normal"}>Gérer l’audience de l’événement</h3>
                    <VisibilityCommunicationComponent />
                    <div className='flex items-center justify-between'>
                        <Button variant="bordered" className={" px-8 text-primary border-primary "} radius='full' >
                            Enregistrer brouillon
                        </Button>
                        <Button className={" bg-primary px-20 text-white"} radius='full' >
                            Suivant
                        </Button>
                    </div>
                </div>
            }

            {/* Resume stepper data */}
            {activeStep === "resume" &&
                <div className={"flex flex-col gap-3 px-32 "}>
                    <h3 className={" font-normal"}>Tout est prêt ! Vérifiez et publiez votre événement</h3>
                    <ResumeComponent />
                    <div className='flex items-center justify-between'>
                        <Button variant="bordered" className={" px-8 text-primary border-primary "} radius='full' >
                            Enregistrer brouillon
                        </Button>
                        <Button className={" bg-primary px-20 text-white"} radius='full' >
                            Suivant
                        </Button>
                    </div>
                </div>
            }

        </div>
    );
}

export default Page;
