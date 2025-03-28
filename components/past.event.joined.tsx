import { EventDtoResponse } from '@/utils/dto/events.dto';
import { formatDate, getHourMinute } from '@/utils/functions/date.function';
import { Button, Card } from '@heroui/react';
import clsx from 'clsx';
import { Check, Clock, Eclipse, FilePenLine, MapPinIcon, MessageCircleMore, Star, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const PastEventJoined = ({ withDate = true, status = "active", event }: { event: EventDtoResponse, withDate?: boolean, status?: string }) => {
    return (
        <Card
            isBlurred
            className="border-1  bg-background/60 dark:bg-default-100/50 max-h-fit "
            shadow="sm"
        >

            <section className="sm:flex md:grid grid-cols-6 md:grid-cols-12 gap-1 justify-center">
                <div className="relative col-span-6 md:col-span-3 ">
                    <Image
                        // as={Image}
                        alt="Album cover"
                        className=" h-full w-full"
                        src={event.coverPicture}
                        width={300}
                        height={300}
                    />
                </div>

                <div className="flex flex-1 gap-1 col-span-6 md:col-span-9 py-1.5">
                    <div className="pl-2">
                        <div className="text-center rounded-lg font-bold ">
                            <p className="text-lg font-bold ">{formatDate(event?.startDate).day}</p>
                            <p className="text-sm uppercase text-red-600">{formatDate(event?.startDate).month}</p>
                        </div>
                    </div>
                    <div className="space-y-1 px-1">
                        <h2 className='text-xs font-bold'>{event?.name}</h2>
                        <div className="mt-2 flex-wrap flex gap-2 items-center justify-between font-normal text-gray-700 text-sm ">
                            <p className="flex items-center gap-0.5 text-xs font-light">
                                <MapPinIcon fill={"red"} className="w-4 h-4 text-white" /> {event?.address?.city}
                            </p>
                            <p className="flex items-center  text-xs font-light gap-0.5">
                                <Users className="w-4 h-4 text-white" fill="red" />  {event?.participants?.length} Participants
                            </p>
                            <p className="flex items-center  text-xs font-light gap-0.5">
                                <Clock className="w-4 h-4 text-white" fill="red" /> {getHourMinute(event?.startTime)}
                            </p>
                        </div>
                        <div className={"flex-1 flex items-center gap-1 "}>
                            {status === "past" ?
                                <>
                                    <Eclipse className="w-4 h-4 bg-primary text-white rounded-full" />
                                    <span>Terminé</span>
                                </>
                                :
                                <>
                                    <Check className="w-4 h-4 bg-green-500 text-white rounded-full" />
                                    <span>inscrit</span>
                                </>
                            }
                            <> </>

                        </div>


                        {/* Affichage des boutons en version web */}
                        <div className={clsx({ "md:flex": !withDate, "sm:flex": withDate }, " gap-1 hidden items-center")} >
                            {status === "active" ? <>
                                <Button
                                    startContent={<MessageCircleMore className="w-4 h-4" />}
                                    size='sm'
                                    variant='ghost'
                                    radius='full'
                                    color='primary'
                                    className="mt-2 w-full border-1 text-xs font-semibold text-primary">
                                    Accéder à la discussion
                                </Button>

                                <Button
                                    startContent={<FilePenLine className="w-4 h-4" />}
                                    size='sm'
                                    variant='ghost'
                                    radius='full'
                                    color='primary'
                                    className="mt-2 border-1 w-full text-xs font-semibold text-primary">
                                    Modifier participation
                                </Button>
                            </> : <>
                                <Button
                                    startContent={<Star className="w-4 h-4" />}
                                    size='sm'
                                    variant='ghost'
                                    radius='full'
                                    color='primary'
                                    className="mt-2 border-1 w-full text-xs font-semibold text-primary">
                                    Donner un avis
                                </Button>
                            </>
                            }
                        </div>

                    </div>
                </div>

                {/* Affichage des boutons en version mobile */}
                <div className="sm:hidden w-full gap-1 p-2 flex flex-col items-center">
                    {status === "active" ? <>
                        <Button
                            startContent={<MessageCircleMore className="w-4 h-4" />}
                            size='sm'
                            variant='ghost'
                            radius='full'
                            color='primary'
                            className="mt-2 w-full border-1 text-xs font-semibold text-primary">
                            Accéder à la discussion
                        </Button>

                        <Button
                            startContent={<FilePenLine className="w-4 h-4" />}
                            size='sm'
                            variant='ghost'
                            radius='full'
                            color='primary'
                            className="mt-2 border-1 w-full text-xs font-semibold text-primary">
                            Modifier participation
                        </Button>
                    </> : <>
                        <Button
                            startContent={<Star className="w-4 h-4" />}
                            size='sm'
                            variant='ghost'
                            radius='full'
                            color='primary'
                            className="mt-2 border-1 w-full text-xs font-semibold text-primary">
                            Donner un avis
                        </Button>
                    </>
                    }


                </div>
            </section>

        </Card>
    );
}

