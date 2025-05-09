/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { formatDate, getHourMinute } from '@/utils/functions/date.function';
import { Card, Progress, Button, CardBody } from '@heroui/react';
import { Clock, MapPin, MessageCircleMore, PencilLine, Ticket, Users } from "lucide-react";
import Image from 'next/image';
import React from 'react';

export const OurHorizontalCardComponent = ({ event }: { event: any }) => {
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
        >
            <div>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-1  justify-center">
                    <div className="relative col-span-6 md:col-span-4 h-56 md:h-40 ">
                        <Image
                            alt="Album cover"
                            className="object-cover  "
                            layout="fill"
                            objectFit="cover"
                            src={event.coverPicture}

                        />
                    </div>
                    <CardBody className="flex flex-col col-span-6 md:col-span-8 py-2">

                        <div className="flex items-start gap-3">
                            <div className="text-center">
                                <p className="text-xl font-bold">{formatDate(event?.startDate).day}</p>
                                <p className="text-sm text-danger font-bold uppercase">{formatDate(event?.startDate).month}</p>
                            </div>
                            <div>
                                <p className="event-card-title">{event?.name}</p>
                                <div className="flex flex-wrap gap-2 items-center text-sm text-default-500">
                                    <div className="flex items-center gap-1 text-xs"><MapPin size={16} />  {event?.address?.city}</div>
                                    <div className="flex items-center gap-1 text-xs"><Clock size={16} /> {getHourMinute(event?.startTime)}</div>
                                    <div className="flex items-center gap-1">
                                        <Ticket className="w-5 h-5 text-white px-0" fill="red" />
                                        {event?.accessType === "FREE" ? "Gratuit" : "Payant"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Progression */}
                        <div className="flex items-center gap-2 text-sm text-default-400">
                            <Users size={16} />
                            <span className="whitespace-nowrap"> {event?._count?.orders || 0} Par/{event?.capacity} </span>
                            <Progress
                                size="sm"
                                radius="sm"
                                className="flex-1"
                                color="danger"
                                value={0}
                                maxValue={45}
                                classNames={{
                                    track: "bg-default-200",
                                }}
                            />
                        </div>

                        {/* Bouton Modifier */}
                        <div className="mt-2 flex justify-between">
                            <Button
                                startContent={<PencilLine size={12} />}
                                color="danger"
                                variant="bordered"
                                radius="full"
                                size="sm"
                                className={"p-1 "}
                            >
                                Modifier
                            </Button>
                            <Button
                                startContent={<MessageCircleMore size={12} />}
                                color="danger"
                                variant="bordered"
                                radius="full"
                                size="sm"
                                className='text-xs px-1 py-1'
                            >
                                Discussion
                            </Button>
                        </div>
                    </CardBody>
                </div>
            </div>
        </Card>
    );
}

export default OurHorizontalCardComponent;
