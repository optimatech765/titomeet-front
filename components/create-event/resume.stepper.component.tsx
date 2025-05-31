/* eslint-disable @typescript-eslint/no-explicit-any */
'use cliente'
import { AddressStore } from '@/stores/address.store';
import { EventCategorieStore } from '@/stores/event.categories.store';
import { useEventsStore } from '@/stores/events.store';
import { GetDate } from '@/utils/functions/date.function';
import { Card, CardBody, Checkbox, DatePicker, TimeInput } from '@heroui/react';
import { Pen } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export const ResumeStepperComponent = ({ setActiveStep }: { setActiveStep: (value: string) => void }) => {

    const { data: eventData } = useEventsStore();
    const { dataList } = EventCategorieStore()
    const { dataList: AddressList } = AddressStore()
    const [isProgramming, setIsProgramming] = useState(false);

    const returnCategories = () => {
        const cate = eventData?.categories?.split(",") || [];
        return dataList
            .filter((item: any) => cate.includes(String(item.id))) // Vérifie si l'ID est dans cate
            .map((item: any) => item.name)
            .join(", ");

    }

    const returnAddress = () => {
        const address = eventData?.addressId;
        const value = AddressList
            .find((item: any) => item.id === address)
        console.log(value)
        return value

    }

    return (
        <div className='border rounded-md border-[#00000026] p-6 '>

            <ol className="relative w-full space-y-auto h-full flex flex-col justify-center text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="mb-4 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-secondary text-white rounded-md -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                        01
                    </span>
                    <div>
                        {/* Section 1 - Informations Générales */}
                        <Card shadow="sm" className="p-4 relative border bg-[#F8F8F8]">

                            <Pen className="absolute  z-50 top-4 right-4 text-primary cursor-pointer" onClick={() => setActiveStep("general")} />
                            <CardBody className='pt-0'>
                                <h3 className="text-orange-500 font-semibold text-lg">Informations générales</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                                    <p><strong>Nom :</strong> {eventData?.name}</p>
                                    <p><strong>Catégorie :</strong> {returnCategories()}</p>
                                    <p><strong>Date début :</strong> {GetDate(eventData.startDate)}</p>
                                    <p><strong>Date fin :</strong> {GetDate(eventData.endDate)}</p>
                                    <p><strong>Heure début :</strong> {new Date().toLocaleTimeString()}</p>
                                    <p><strong>Heure fin :</strong> {new Date().toLocaleTimeString()}</p>
                                    <p><strong>Lieu :</strong> {returnAddress()?.city}</p>
                                    <p><strong>Adresse :</strong> {returnAddress()?.state} / {returnAddress()?.country}</p>
                                    <p><strong>Nombre de places :</strong> {eventData?.capacity}</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                </li>
                <li className="mb-4 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-secondary text-white rounded-md -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        02
                    </span>
                    <div>
                        {/* Section 2 - Options Avancées */}
                        <Card shadow="sm" className="p-4 relative border bg-[#F8F8F8]">

                            <Pen className="absolute z-50 top-4 right-4 text-primary cursor-pointer" onClick={() => setActiveStep("advanced")} />
                            <CardBody className='pt-0'>
                                <h3 className="text-secondary font-semibold text-lg">Options avancées</h3>
                                <p className="text-sm mt-2">
                                    <strong>Nom de l’événement :</strong> {eventData.name}
                                </p>
                                <div className="grid grid-cols-2 gap-4 items-center mt-3">

                                    <div className="flex space-x-2 mt-1">
                                        <h1 className="font-medium">Photo de couverture :</h1>
                                        <Image src={URL.createObjectURL(eventData.coverPicture)} height={200} width={200} alt="Photo" className="w-72 h-36 rounded-md object-cover" />

                                    </div>
                                    <div className="flex space-x-2 mt-1">

                                        <h1 className="font-medium">Badge :</h1>
                                        <Image src={URL.createObjectURL(eventData.badge)} height={200} width={200} alt="badge" className="w-72 h-36 rounded-md object-cover" />


                                    </div>
                                </div>
                                <p className="text-sm mt-3"><strong>Type d&lsquo;accès :</strong> {eventData.accessType === "FREE" ? "Gratuit" : "Payant"}</p>
                                <div className='flex gap-8'>
                                    <p className="text-sm mt-3"><strong>Services :</strong></p>
                                    <div className="mt-1 text-[#1E1E1E]">
                                        {eventData?.providers?.map((item: any, index: number) => (
                                            <p key={index}> {item?.category?.name} - {item?.name}</p>
                                        ))}

                                    </div>
                                </div>

                            </CardBody>
                        </Card>
                    </div>
                </li>

                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-secondary text-white rounded-md -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        03
                    </span>
                    <div className='overflow-hidden' >
                        {/* Section 3 - Visibilité */}
                        <Card shadow="sm" className="p-4 relative border bg-[#F8F8F8]">

                            <Pen className="absolute z-50 top-4 right-4 text-primary cursor-pointer" onClick={() => setActiveStep("communication")} />
                            <CardBody className='pt-0'>
                                <h3 className="text-secondary font-semibold text-lg">Visibilité et communication</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                                    <p><strong>Visibilité :</strong> {eventData?.visibility === "PUBLIC" ? "Publique" : "Privée"}</p>
                                    <p><strong>Création discussion :</strong> Oui</p>
                                    <p><strong>Tags :</strong> {eventData?.tags?.map((tag: string) => tag).join(' - ')}</p>
                                </div>

                                {/* Programmation de la publication */}
                                <div className="mt-4">
                                    <div className="flex items-center gap-4 justify-between">
                                        <h4 className="text-sm font-semibold text-secondary">Programmer la publication</h4>
                                        <div className='gap-4'>
                                            <Checkbox
                                                isSelected={!isProgramming}
                                                color="success"
                                                onChange={(e) => setIsProgramming(!e.target.checked)}
                                                className='mx-2'
                                            >
                                                Non
                                            </Checkbox>

                                            <Checkbox
                                                className='mx-2'
                                                onChange={(e) => setIsProgramming(e.target.checked)}
                                                isSelected={isProgramming}
                                                color="success"
                                            >
                                                Oui
                                            </Checkbox>
                                        </div>
                                    </div>

                                    {isProgramming && (
                                        <div className="flex justify-end space-x-2 mt-2">
                                            <div className='flex justify-between items-center gap-4'>
                                                <DatePicker className="w-40 border-slate-300" size='sm' radius='full' variant={"bordered"} />
                                                <TimeInput className="w-32 border-slate-300 focus:border-slate-300 outline-none " size='sm' radius='full' variant={"bordered"} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                </li>
            </ol>

        </div>
    );
}

