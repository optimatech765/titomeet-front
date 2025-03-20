'use cliente'
import { useEventsStore } from '@/stores/events.store';
import { GetDate } from '@/utils/functions/date.function';
import { Button, Card, CardBody, DatePicker, TimeInput } from '@heroui/react';
import { Eye, Pen } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const ResumeStepperComponent = () => {

     const { data: eventData } = useEventsStore();

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

                            <Pen className="absolute top-4 right-4 text-primary cursor-pointer" />
                            <CardBody className='pt-0'>
                                <h3 className="text-orange-500 font-semibold text-lg">Informations générales</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                                    <p><strong>Nom :</strong> {eventData?.name}</p>
                                    <p><strong>Catégorie :</strong> {}</p>
                                    <p><strong>Date début :</strong> {GetDate(eventData.startDate)}</p>
                                    <p><strong>Date fin :</strong> {GetDate(eventData.endDate)}</p>
                                    <p><strong>Heure début :</strong> {new Date().toLocaleTimeString()}</p>
                                    <p><strong>Heure fin :</strong> {new Date().toLocaleTimeString()}</p>
                                    <p><strong>Lieu :</strong> {eventData?.addressId}</p>
                                    <p><strong>Adresse :</strong> Adresse complète</p>
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

                            <Pen className="absolute top-4 right-4 text-primary cursor-pointer" />
                            <CardBody className='pt-0'>
                                <h3 className="text-secondary font-semibold text-lg">Options avancées</h3>
                                <p className="text-sm mt-2">
                                    <strong>Nom de l’événement :</strong> {eventData.name}
                                </p>
                                <div className="grid grid-cols-2 gap-4 items-center mt-3">

                                    <div className="flex space-x-2 mt-1">
                                        <h1 className="font-medium">Photo de couverture :</h1>
                                        <Image src="/img/joy.png" height={200} width={200} alt="Photo" className="w-72 h-36 rounded-md object-cover" />

                                    </div>
                                    <div className="flex space-x-2 mt-1">

                                        <h1 className="font-medium">Badge :</h1>
                                        <Image src="/img/badge.png" height={200} width={200} alt="badge" className="w-72 h-36 rounded-md object-cover" />


                                    </div>
                                </div>
                                <p className="text-sm mt-3"><strong>Type d&lsquo;accès :</strong> {eventData.accessType}</p>
                                <div className='flex gap-8'>
                                    <p className="text-sm mt-3"><strong>Services :</strong></p>
                                    <div className="mt-1 text-[#1E1E1E]">
                                        <p> Location salle - Prestataire</p>
                                        <p> Location salle - Prestataire</p>
                                        <p> Location salle - Prestataire</p>
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
                    <div>
                        {/* Section 3 - Visibilité */}
                        <Card shadow="sm" className="p-4 relative border bg-[#F8F8F8]">

                            <Pen className="absolute top-4 right-4 text-primary cursor-pointer" />
                            <CardBody className='pt-0'>
                                <h3 className="text-secondary font-semibold text-lg">Visibilité et communication</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                                    <p><strong>Visibilité :</strong> Public</p>
                                    <p><strong>Création discussion :</strong> Oui</p>
                                    <p><strong>Tags :</strong> {eventData.tags.map((tag: string) => tag).join(' - ')}</p>
                                </div>

                                {/* Programmation de la publication */}
                                <div className="mt-4">
                                    <h4 className="text-sm font-semibold">Programmer la publication</h4>
                                    <div className="flex justify-between space-x-2 mt-2">
                                        <div className='flex justify-between items-center gap-4'>
                                            <DatePicker className="w-40 border-slate-300" size='sm' radius='full' variant={"bordered"} />
                                            <TimeInput className="w-32 border-slate-300 focus:border-slate-300 outline-none " size='sm' radius='full' variant={"bordered"} />
                                        </div>
                                        <div className='flex justify-items-end justify-end'>
                                            <Button radius='full' size='sm' className='text-primary border-primary' variant={"bordered"} startContent={<Eye />}>Prévisualiser</Button>
                                        </div>


                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                </li>
            </ol>

        </div>
    );
}

