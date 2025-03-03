"use client"
import { Button, Divider } from '@heroui/react';
import { Banknote, Calendar, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='container mx-auto mb-28 mt-7 '>
            <h2 className="text-2xl font-extrabold text-black flex items-center gap-2 mb-3">
                {/* <ChevronLeft className="text-black" /> */}
                Inscription confirmée
                <Image src="/img/check.png" alt="check" width={20} height={20} />
            </h2>

            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-8">
                    {/* Header */}
                    <div className="relative w-full h-64">
                        <img
                            src="/img/event-image.jpg"
                            alt="Event Banner"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    <div className="mt-3">
                        <h1 className="text-2xl font-extrabold">After Work Networking</h1>
                        <p className="information-text ">
                            Rencontrez des passionnés de la
                            tech autour d’un verre !
                        </p>
                        <p className="space-x-2 mt-2">
                            <span className="information-text ">Organisée par </span>
                            <span className={"intormation-title"}>Jacob Jones</span>
                            <span className="information-text ">publié le </span>
                            <span className={"intormation-title"}>12/02/25</span>
                        </p>
                        <div className="flex items-center gap-4 text-sm text-black mt-4">
                            <span className="flex items-center gap-1 font-normal text-lg">
                                <Calendar size={18} className='text-primary' /> Samedi 14 Avril 2025
                            </span>
                            <span className="flex items-center gap-1 text-base font-normal">
                                <MapPin size={18} className='text-primary' /> Cotonou
                            </span>
                            <span className="flex items-center gap-1 text-base font-normal">
                                <Clock size={18} className='text-primary' /> 15:00
                            </span>
                            <span className="flex items-center gap-1 text-black text-base font-normal">
                                <Banknote size={18} className='text-primary' />
                                15 000 XOF
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-4  ">

                    <div className="border-1 rounded-lg p-5 bg-[#F8F8F8]">
                        <h3 className='text-xl font-semibold'>Détails de la  réservation</h3>
                        <div>
                            <TicketInfoRow title="id" value="25" />
                            <TicketInfoRow title="Ticket" value="02" />
                            <TicketInfoRow title="Total" value="30000 XOF" />
                        </div>

                        <div className="rounded-lg border-1 p-1.5 mt-3.5 bg-[#F6DBC2] text-base font-normal">
                            Veuillez consulter votre boîte mail pour retrouver votre billet électronique
                        </div>
                        <Divider className='my-3 ' />
                        <div className='flex gap-2 flex-col '>
                            <Button className="w-full bg-[#FACCCF] text-primary  " radius="full" >
                                Confirmer
                            </Button>
                            <Button className="w-full bg-primary text-white  " radius="full" >
                                Modifier
                            </Button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Page;

const TicketInfoRow = ({ title, value }: { title: string; value: string }) => {
    return (
        <div className="flex items-center justify-between gap-2 mt-2">
            <span className="text-sm font-semibold text-gray-600">{title}</span>
            <span className="text-sm font-semibold text-black">{value}</span>
        </div>
    );
}
