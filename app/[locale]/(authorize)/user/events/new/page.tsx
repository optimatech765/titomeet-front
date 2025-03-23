/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import AdvanceComponent from '@/components/create-event/advance.component';
import GeneralInforComponent from '@/components/create-event/general.infor.component';
import ResumeComponent from '@/components/create-event/resume.component';
import VisibilityCommunicationComponent from '@/components/create-event/visibility.communication.component';
import { eventSevices } from '@/services/events/event.services';
import { useEventsStore } from '@/stores/events.store';
import { EventStepOneValidator, EventStepThreeValidator, EventStepTwoValidator, EventsValidator } from '@/utils/validator/events.validator';
import { Button } from '@heroui/button';
import clsx from 'clsx';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { GetDate } from '@/utils/functions/date.function';
import { InputErrorStore } from '@/stores/input.error.store';
import { assetsServices } from '@/services/assets/assets.services';
import { cleanResponse } from '@/utils/functions/other.functions';

const Page = () => {

    const [activeStep, setActiveStep] = useState("general");
    // const [validateStep, setValidateStep] = useState([]);
    const { data: eventData, resetData } = useEventsStore();

    const { setMessageError } = InputErrorStore()

    const handleSaveDraftEvent = async () => {
        console.log(eventData);

    }

    const uploadFile = async (file: File) => {

        const response = await assetsServices.getPresignUrl({
            fileName: "" + new Date().getTime() + file.name,
            fileType: eventData.coverPicture?.type
        });

        const { uploadUrl, fields, downloadUrl } = cleanResponse(response.data);

        const formData = new FormData()
        Object.entries(fields).forEach(([key, value]) => {
            formData.append(key, value as string)
        })

        formData.append("file", file)

        const uploadResponse = await fetch(uploadUrl, {
            method: "POST",
            body: formData,
        })

        if (uploadResponse.ok) {
            // Return the fileKey and type based on file
            return {
                fileKey: fields.key,
                type: file.type.includes("image") ? "image" : "pdf",
                downloadUrl: downloadUrl,
            }
        }

        return {
            fileKey: fields.key,
            type: file.type.includes("image") ? "image" : "pdf",
            downloadUrl: downloadUrl,
        }
    }

    const handleSaveEvent = async () => {
        try {


            const startDate = GetDate(eventData.startDate as any)
            const endDate = GetDate(eventData.endDate as any);

            const newData = {
                ...eventData,
                startDate: startDate,
                endDate: endDate,
                startTime: new Date().toLocaleTimeString(),
                endTime: new Date().toLocaleTimeString(),
            }
            const { error, errorData } = EventsValidator(newData);
            if (error) {
                toast.error(errorData.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
            }
            else {

                const toastId = toast.loading("Sauvegarde en cours...", {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                const coverFile = await uploadFile(eventData.coverPicture as File);
                const badgeFile = await uploadFile(eventData.badge as File);

                const updatedData = eventData?.prices?.map((item: any) => ({
                    ...item,
                    amount: parseInt(item.amount, 10)
                  }));

                eventSevices.createEvent({
                    ...eventData,
                    prices:updatedData,
                    categories: eventData?.categories?.split(","),
                    capacity: +eventData.capacity,
                    coverPicture: coverFile?.downloadUrl,
                    badge: badgeFile?.downloadUrl,
                    startDate: startDate,
                    endDate: endDate,
                    startTime: new Date().toLocaleTimeString(),
                    endTime: new Date().toLocaleTimeString(),
                }).then(
                    (response) => {
                        console.log(response);
                        toast.update(toastId, {
                            render: "Sauvegarde réussie",
                            type: "success",
                            isLoading: false,
                            autoClose: 3000,
                        });
                    },
                    (error) => {
                        console.log(error);
                        toast.update(toastId, {
                            render: "Erreur lors de la sauvegarde",
                            type: "error",
                            isLoading: false,
                            autoClose: 3000,
                        });
                    }
                );

            }

        } catch (error) {

            console.log(error);

        }
    }

    const handleNextStep = () => {
        if (activeStep === "general") {
            const startDate = GetDate(eventData.startDate as any)
            const endDate = GetDate(eventData.endDate as any);

            const { error, errorData } = EventStepOneValidator({
                ...eventData,
                startDate: startDate,
                endDate: endDate,
                startTime: new Date().toLocaleTimeString(),
                endTime: new Date().toLocaleTimeString(),
                categories: eventData.categories
            });
            if (error) {
                toast.error(errorData.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                setMessageError(errorData);

            }
            else {
                setActiveStep("advanced");
                setMessageError(errorData);
            }
        }
        if (activeStep === "advanced") {
            const { error, errorData } = EventStepTwoValidator(eventData);
            if (error) {
                toast.error(errorData.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                setMessageError(errorData);

            }
            else {
                setActiveStep("communication");
                setMessageError(errorData);
            }
        }
        if (activeStep === "communication") {
            const { error, errorData } = EventStepThreeValidator(eventData);
            if (error) {
                toast.error(errorData.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                setMessageError(errorData);
            }
            else {
                setActiveStep("resume");
                setMessageError(errorData);
            }
        }
    }

    const handlePrevStep = () => {

        if (activeStep === "advanced") {
            setActiveStep("general");
        }
        if (activeStep === "communication") {
            setActiveStep("advanced");
        }
        if (activeStep === "resume") {
            setActiveStep("communication");
        }
    }

    return (
        <div className={"flex flex-col gap-2 pb-6"}>
            <div>
                <div className="w-full px-2 md:px-8 py-4">
                    <div
                        className="relative grid w-full h-24 m-0 overflow-hidden text-slate-300  place-items-center rounded-xl bg-clip-border">
                        <div className="w-full px-5 md:px-10 lg:px-20 pt-4 pb-8">
                            <div className="relative flex  items-center justify-between w-full ">
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
                                    className={clsx({
                                        "!bg-secondary": activeStep === "advanced",
                                        "!bg-slate-300": activeStep !== "advanced"
                                    }, "relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full font-bold text-[#1E1E1E] transition-all duration-300")}  >
                                    <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                                            Options avancées
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    onClick={() => setActiveStep("communication")}
                                    className={clsx({
                                        "!bg-secondary": activeStep === "communication",
                                        "!bg-slate-300": activeStep !== "communication",
                                    }, "relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full  font-bold text-[#1E1E1E] transition-all duration-300")}  >
                                    <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                                            Visibilité et communication
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    onClick={() => setActiveStep("resume")}
                                    className={clsx({
                                        "!bg-secondary": activeStep === "resume",
                                        "!bg-slate-300": activeStep !== "resume"
                                    }, "relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full   font-semibold text-[#1E1E1E] transition-all duration-300")}  >
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
                <div className='flex flex-col gap-3 px-2 md:px-10 lg:px-32 '>
                    <h3 className={" font-normal"}>Définissez les bases de l’événement</h3>
                    <GeneralInforComponent />
                    <div className='flex items-center justify-between'>
                        <Button onPress={handleSaveDraftEvent} variant="bordered" className={" px-8 text-primary border-primary "} radius='full' >
                            Enregistrer brouillon
                        </Button>

                        <Button onPress={handleNextStep} className={" bg-primary px-20 text-white"} radius='full' >
                            Suivant
                        </Button>
                    </div>
                </div>
            }

            {/* Advanced stepper data */}
            {activeStep === "advanced" &&
                <div className={"flex flex-col gap-3 px-2 md:px-10 lg:px-32 "}>
                    <h3 className={" font-normal"}> Personnalisez l’événement et ajoutez des services</h3>
                    <AdvanceComponent />
                    <div className='flex items-center justify-between'>
                        <Button onPress={handleSaveDraftEvent} variant="bordered" className={" px-8 text-primary border-primary "} radius='full' >
                            Enregistrer brouillon
                        </Button>
                        <div className="flex  gap-2">
                            <Button onPress={handlePrevStep} className={" md:px-10 lg:px-20 text-primary bg-[#FACCCF] "} radius='full' >
                                Précédent
                            </Button>
                            <Button onPress={handleNextStep} className={" bg-primary px-20 text-white"} radius='full' >
                                Suivant
                            </Button>
                        </div>
                    </div>
                </div>
            }

            {/* communication stepper data */}
            {activeStep === "communication" &&
                <div className={"flex flex-col gap-3 px-2 md:px-10 lg:px-32 "}>
                    <h3 className={" font-normal"}>Gérer l’audience de l’événement</h3>
                    <VisibilityCommunicationComponent />
                    <div className='flex items-center justify-between'>
                        <Button onPress={handleSaveDraftEvent} variant="bordered" className={" px-8 text-primary border-primary "} radius='full' >
                            Enregistrer brouillon
                        </Button>
                        <div className="flex  gap-2">
                            <Button onPress={handlePrevStep} className={" md:px-10 lg:px-20 text-primary bg-[#FACCCF] "} radius='full' >
                                Précédent
                            </Button>
                            <Button onPress={handleNextStep} className={" bg-primary px-20 text-white"} radius='full' >
                                Suivant
                            </Button>
                        </div>
                    </div>
                </div>
            }

            {/* Resume stepper data */}
            {activeStep === "resume" &&
                <div className={"flex flex-col gap-3 px-2 md:px-10 lg:px-32 "}>
                    <h3 className={" font-normal"}>Tout est prêt ! Vérifiez et publiez votre événement</h3>
                    <ResumeComponent />
                    <div className='flex flex-wrap gap-4 items-center justify-between'>
                        <div className="flex gap-2">
                            <Button onPress={handleSaveDraftEvent} variant="bordered" className={" px-2 lg:px-8 text-primary border-primary "} radius='full' >
                                Enregistrer brouillon
                            </Button>
                            <Button onPress={resetData} className={" bg-primary md:px-10 lg:px-20 text-white"} radius='full' >
                                Supprimer
                            </Button>
                        </div>
                        <div className="flex  gap-2">
                            <Button onPress={handlePrevStep} className={" md:px-10 lg:px-20 text-primary bg-[#FACCCF] "} radius='full' >
                                Précédent
                            </Button>
                            <Button onPress={handleSaveEvent} className={" bg-primary md:px-10 lg:px-20 text-white"} radius='full' >
                                Publier
                            </Button>
                        </div>

                    </div>
                </div>
            }

        </div>
    );
}

export default Page;
