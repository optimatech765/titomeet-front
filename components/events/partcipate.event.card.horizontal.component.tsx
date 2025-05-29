/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useScopedI18n } from '@/locales/client';
import { formatDate, getHourMinute, verifyIsPastDate } from '@/utils/functions/date.function';
import { Card, Button, CardBody } from '@heroui/react';
import { Check, Clock, Eclipse, FilePenLine, MapPin, MessageCircleMore, Ticket } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const PartcipateEventCardHorizontalComponent = ({ event }: { event: any }) => {
    const eventT = useScopedI18n("event");
    const buttonT = useScopedI18n("button");
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
        >
            <div>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4  justify-center">
                    <div className="relative col-span-6 md:col-span-4 h-56 md:h-40 ">
                        <Image
                            alt="Album cover"
                            className="object-cover  "
                            layout="fill"
                            objectFit="cover"
                            src={event.coverPicture}

                        />
                    </div>

                    <CardBody className="flex flex-col col-span-6 md:col-span-8">

                        <div className="flex items-start gap-3">
                            <div className="text-center">
                                <p className="text-xl font-bold">{formatDate(event?.startDate).day}</p>
                                <p className="text-sm text-danger font-bold uppercase">{formatDate(event?.startDate).month}</p>
                            </div>
                            <div>
                                <p className="event-card-title">{event?.name}</p>
                                <div className="flex w-full flex-wrap gap-2 items-center justify-between text-sm text-default-500">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} className="text-primary px-0" /> {event?.address?.city}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} className="text-primary px-0" /> {getHourMinute(event?.startTime)}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Ticket size={16} className="text-primary px-0" />
                                        {event?.accessType === "FREE" ? "Gratuit" : "Payant"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Inscrit ou terminé */}
                        <div className="flex items-center gap-2 text-sm text-default-400">
                            {verifyIsPastDate(event?.endDate) ?
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
                        </div>

                        {/* Bouton Modifier */}
                        <div className="mt-2 flex flex-col gap-3  md:flex-row justify-between items-center">
                            <Button
                                as={Link}
                                href={`/user/message?eventId=${event.id}`}
                                startContent={<MessageCircleMore className="w-4 h-4" />}
                                size='sm'
                                variant='ghost'
                                radius='full'
                                color='primary'
                                className="mt-2 w-full border-1 text-xs font-semibold text-primary">
                                {buttonT("discus")}
                            </Button>

                            {/* <Button
                                startContent={<FilePenLine className="w-4 h-4" />}
                                size='sm'
                                variant='ghost'
                                radius='full'
                                color='primary'
                                className="mt-2 border-1 w-full text-xs font-semibold text-primary">
                                {eventT("join")}
                            </Button> */}
                        </div>
                    </CardBody>
                </div>
            </div>
        </Card>
    );
}

