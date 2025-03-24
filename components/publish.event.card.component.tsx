"use client"
import { EventDtoResponse } from "@/utils/dto/events.dto";
import { formatDate, getHourMinute } from "@/utils/functions/date.function";
import { Button, Card, Progress } from "@heroui/react";
import clsx from "clsx";
import { AlignHorizontalDistributeCenter, Clock, Eclipse, FilePenLine, Hourglass, MapPinIcon, MessageCircleMore, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const PublishEventCardComponent = ({ status = "draft", withDate = true, event }: { event: EventDtoResponse, status?: string, withDate?: boolean }) => {

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
                        src="/img/event-image.jpg"
                        width={300}
                        height={300}
                    />
                </div>

                <div className="flex flex-1 gap-1 col-span-6 md:col-span-9 py-1.5">

                    <div className="">
                        <div className="text-center rounded-lg font-bold ">
                            <p className="text-lg font-bold ">{formatDate(event?.startDate).day}</p>
                            <p className="text-sm uppercase text-red-600">{formatDate(event?.startDate).month}</p>
                        </div>
                    </div>

                    <div className="space-y-1 px-1 flex-1">
                        <h2 className='text-xs font-bold'>{event?.name}</h2>
                        <div className="mt-2 flex-wrap flex gap-2 items-center justify-between font-normal text-gray-700 text-sm ">
                            <p className="flex items-center gap-0.5 text-xs font-light">
                                <MapPinIcon fill={"red"} className="w-4 h-4 text-white" />
                                {event?.address?.city}
                            </p>

                            <p className="flex items-center  text-xs font-light gap-0.5">
                                <Clock className="w-4 h-4 text-white" fill="red" /> {getHourMinute(event?.startTime)}
                            </p>

                            <p className="flex items-center  text-xs font-light gap-0.5">
                                <AlignHorizontalDistributeCenter className="w-4 h-4 text-white" fill="red" />
                                {event?.accessType === "FREE" ? "Gratuit" : "Payant"}

                            </p>

                        </div>

                        {(status !== "programming" && status !== "draft") && <>
                            <div className={"flex-1 flex items-center gap-1 "}>
                                <p className="flex items-center  text-xs font-light gap-0.5">
                                    <User className="w-4 h-4 text-white" fill="red" />
                                    <span>
                                        {event?.participants?.length} Par/{event?.capacity}
                                    </span>

                                </p>
                                <Progress
                                    classNames={{
                                        indicator: "bg-[#22d3ee]"
                                    }}
                                    value={25} size="md" aria-label="Loading..." className="w-full flex-1" />
                            </div>
                        </>
                        }


                        {/* Pour les programmés */}
                        {status === "programming" &&
                            <div className={"flex-1 flex items-center gap-1 "}>
                                <p className="flex items-center  text-xs font-light gap-0.5">
                                    <Hourglass className="w-4 h-4 text-primary" />
                                    <span className="text-secondary mx-1">
                                        Programmé pour
                                    </span>
                                    <span>
                                        {new Date().toLocaleDateString()} à {new Date().toLocaleTimeString()}
                                    </span>

                                </p>

                            </div>
                        }


                        {/* Affichage des boutons en version web */}
                        <div className={clsx({ "md:flex": !withDate, "sm:flex": withDate }, " gap-1 hidden items-center")} >
                            {status === "past" ?
                                <Button
                                    startContent={<Star className="w-3 h-3" />}
                                    size='sm'
                                    variant='ghost'
                                    radius='full'
                                    color='primary'
                                    className="mt-2 border-1 flex-1 gap-1 px-1 text-xs font-medium text-primary">
                                    Voir les avis
                                </Button>
                                : <>
                                    <Button
                                        as={Link}
                                        href={`/user/events/${event?.id}/update`}
                                        startContent={<FilePenLine className="w-3 h-3" />}
                                        size='sm'
                                        variant='ghost'
                                        radius='full'
                                        color='primary'
                                        className="mt-2 flex-1 border-1 gap-1 px-1 text-xs font-medium text-primary">
                                        <span className="hidden lg:flex">
                                            Modifier</span>
                                        <span className="lg:hidden flex">
                                            Modifier </span>
                                    </Button>

                                    {status === "published" ?
                                        <Button
                                            startContent={<MessageCircleMore className="w-3 h-3 mx-0" />}
                                            size='sm'
                                            variant='ghost'
                                            radius='full'
                                            color='primary'
                                            className="mt-2 flex-1  border-1 gap-1 px-1 text-xs font-medium text-primary">
                                            Accéder à la discussion
                                        </Button> :
                                        <Button
                                            startContent={<Eclipse className="w-3 h-3 mx-0" />}
                                            size='sm'
                                            variant='ghost'
                                            radius='full'
                                            color='primary'
                                            className="mt-2 flex-1  border-1 gap-1 px-1 text-xs font-medium text-primary">
                                            Publier
                                        </Button>
                                    }
                                </>}


                        </div>


                    </div>
                </div>

                {/* Affichage des boutons en version mobile */}
                <div className="sm:hidden gap-1 p-2 flex flex-col items-center">
                    <Button
                        as={Link}
                        href={`/user/events/${event?.id}/update`}
                        startContent={<FilePenLine className="w-3 h-3" />}
                        size='sm'
                        variant='ghost'
                        radius='full'
                        color='primary'
                        className="mt-2 flex-1 border-1 gap-1 px-1 text-xs font-medium text-primary">
                        Modifier
                    </Button>

                    {status === "published" ?
                        <Button
                            startContent={<MessageCircleMore className="w-3 h-3 mx-0" />}
                            size='sm'
                            variant='ghost'
                            radius='full'
                            color='primary'
                            className="mt-2 flex-1  border-1 gap-1 px-1 text-xs font-medium text-primary">
                            Accéder à la discussion
                        </Button> :
                        <Button
                            startContent={<Eclipse className="w-3 h-3 mx-0" />}
                            size='sm'
                            variant='ghost'
                            radius='full'
                            color='primary'
                            className="mt-2 flex-1  border-1 gap-1 px-1 text-xs font-medium text-primary">
                            Publier
                        </Button>
                    }

                </div>
            </section>

        </Card>
    );
}