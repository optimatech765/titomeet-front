"use client";
import { EventDtoResponse } from "@/utils/dto/events.dto";
import { formatDate, getHourMinute } from "@/utils/functions/date.function";
import { Button, Card, CardBody, Progress } from "@heroui/react";
import {
    Clock,
    FilePenLine,
    MapPin,
    MessageCircleMore,
    Ticket,
    User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const DraftEventComponent = ({ event }: { event: EventDtoResponse }) => {
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
        >
            <div>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-0  justify-center">
                    <div className="relative col-span-6 md:col-span-4 h-56 md:h-40 ">
                        <Image
                            alt="Album cover"
                            className="object-cover  "
                            layout="fill"
                            objectFit="cover"
                            src={event.coverPicture}

                        />
                    </div>

                    <CardBody className="flex flex-col p-3 col-span-6 justify-between md:col-span-8">

                        <div className="flex items-start gap-3">
                            <div className="text-center">
                                <p className="text-xl font-bold">{formatDate(event?.startDate).day}</p>
                                <p className="text-sm text-danger font-bold uppercase">{formatDate(event?.startDate).month}</p>
                            </div>
                            <div className='flex-1'>
                                <p className="event-card-title">{event?.name}</p>
                                <div className="flex w-full flex-wrap gap-2 items-center justify-between text-sm text-default-500">
                                    <div className="flex items-center gap-1  ">
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
                        <div className="flex items-center gap-2">
                            <p className="flex items-center text-xs gap-1">
                                <User className="w-4 h-4 text-white" fill="red" />
                                {event?.participants?.length} Par/{event?.capacity}
                            </p>
                            <Progress
                                value={25}
                                size="md"
                                className="flex-1"
                                classNames={{ indicator: "bg-[#22d3ee]" }}
                                aria-label="Progress"
                            />
                        </div>

                        {/* Bouton Modifier */}
                        <div className="mt-2 flex flex-col-reverse gap-3  md:flex-row justify-between items-center">
                            <Button
                                name="Modifier évènement"
                                href={`/user/events/${event?.id}/update`}
                                as={Link}
                                startContent={<FilePenLine className="w-4 h-4" />}
                                size="sm"
                                variant="ghost"
                                radius="full"
                                color="primary"
                                className="flex-1 border"
                            >
                                Modifier évènement
                            </Button>

                            <Button
                                name="Accéder à la discussion"
                                startContent={<MessageCircleMore className="w-4 h-4" />}
                                size="sm"
                                variant="ghost"
                                radius="full"
                                color="primary"
                                className="flex-1 border"
                            >
                                Accéder à la discussion
                            </Button>
                        </div>
                    </CardBody>
                </div>
            </div>
        </Card>
    );
}

