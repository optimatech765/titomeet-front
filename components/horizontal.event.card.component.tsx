"use client"
import { Button, Card, CardBody, Image as ImageUi, Slider } from '@heroui/react';
import { AlignHorizontalDistributeCenter, Clock, FilePenLine, HeartIcon, MapPinIcon, MessageCircleMore } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const HorizontalEventCardComponent = () => {
    const [liked, setLiked] = React.useState(false);
    return (
        <Card
            isBlurred
            className="border-1  bg-background/60 dark:bg-default-100/50 max-h-fit "
            shadow="sm"
        >
            <div>
                <section className="sm:flex md:grid grid-cols-6 md:grid-cols-12 gap-1 justify-center">
                    <div className="relative col-span-6 md:col-span-3 ">
                        <Image
                            // as={Image}
                            alt="Album cover"
                            className=" h-full w-full "
                            src="/img/event-image.jpg"
                            width={300}
                            height={300}
                        />
                    </div>

                    <div className="flex gap-1 col-span-6 md:col-span-9 py-1.5">
                        <div className="">
                            <div className="text-center rounded-lg font-bold ">
                                <p className="text-lg font-bold text-black">14</p>
                                <p className="text-sm uppercase text-red-600">AVR</p>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h2 className='text-xs font-bold'>After Work Networking</h2>
                            <div className="mt-2 flex flex-wrap justify-between  w-full gap-2 items-center space-y-3 sm:space-y-0 font-normal text-gray-700 text-sm"> 
                                <p className="flex items-center gap-0.5 text-xs font-light">
                                    <MapPinIcon fill={"red"} className="w-4 h-4 text-white" /> Cotonou
                                </p>
                                <p className="flex items-center  text-xs font-light gap-0.5">
                                    <AlignHorizontalDistributeCenter className="w-4 h-4 text-white" fill="red" />
                                    <span>
                                        25 Participants
                                    </span>
                                </p>
                                <p className="flex items-center  text-xs font-light gap-0.5">
                                    <Clock className="w-4 h-4 text-white" fill="red" /> 15:00
                                </p>

                            </div>

                            <Button
                                startContent={<MessageCircleMore className="w-4 h-4 font-semibold" />}
                                size='sm'
                                variant='ghost'
                                radius='full'
                                color='primary'
                                className="mt-2 border-1 text-xs font-semibold text-primary">
                                Accéder à la discussion
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </Card>
    );
}

export const HorizontalEventCardComponent2 = () => {
    const [liked, setLiked] = React.useState(false);
    return (
        <Card
            isBlurred
            className="border-1  bg-background/60 dark:bg-default-100/50 max-h-fit "
            shadow="sm"
        >
            <div>
                <section className="sm:flex md:grid grid-cols-6 md:grid-cols-12 gap-1 justify-center">
                    <div className="relative col-span-6 md:col-span-3 ">
                        <Image
                            // as={Image}
                            alt="Album cover"
                            className=" h-full w-full"
                            src="/img/event-image.jpg"
                            width={300}
                            height={300}
                        />
                    </div>

                    <div className="flex gap-1 col-span-6 md:col-span-9 py-1.5">
                        <div className="">
                            <div className="text-center rounded-lg font-bold ">
                                <p className="text-lg font-bold ">14</p>
                                <p className="text-sm uppercase text-red-600">AVR</p>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h2 className='text-xs font-bold'>After Work Networking</h2>
                            <div className="mt-2 flex gap-2 items-center justify-between space-y-3 sm:space-y-0 font-normal text-gray-700 text-sm">
                                <p className="flex items-center gap-0.5 text-xs font-light">
                                    <MapPinIcon fill={"red"} className="w-4 h-4 text-white" /> Cotonou
                                </p>
                                <p className="flex items-center  text-xs font-light gap-0.5 flex-1">
                                    <AlignHorizontalDistributeCenter className="w-4 h-4 text-white" fill="red" />
                                    <span>
                                        25 Participants
                                    </span>
                                </p>
                                <p className="flex items-center  text-xs font-light gap-0.5">
                                    <Clock className="w-4 h-4 text-white" fill="red" /> 15:00
                                </p>

                            </div>


                            <div className="flex gap-1 items-center">
                                <Button
                                    startContent={<FilePenLine className="w-3 h-3" />}
                                    size='sm'
                                    variant='ghost'
                                    radius='full'
                                    color='primary'
                                    className="mt-2 border-1 gap-1 px-1 text-xs font-medium text-primary">
                                   Modifier
                                </Button>

                                <Button
                                    startContent={<MessageCircleMore className="w-3 h-3 mx-0" />}
                                    size='sm'
                                    variant='ghost'
                                    radius='full'
                                    color='primary'
                                    className="mt-2 border-1 gap-1 px-1 text-xs font-medium text-primary">
                                    Accéder à la discussion
                                </Button>
                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </Card>
    );
}



