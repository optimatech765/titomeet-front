import { EventDtoResponse } from '@/utils/dto/events.dto';
import { formatDate, getHourMinute } from '@/utils/functions/date.function';
import { Button, Card } from '@heroui/react';
import { AlignHorizontalDistributeCenter, Clock, Eclipse, MapPinIcon, Share2, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const PastEndEventCard = ({ event }: { event: EventDtoResponse }) => {
    return (
        <Card
            isBlurred
            className="border-1  bg-background/60 dark:bg-default-100/50 max-h-fit w-fit "
            shadow="sm"
        >
            <div>
                <section className="sm:grid grid-cols-6 sm:grid-cols-12 gap-1 justify-center">
                    <div className="relative col-span-6 sm:col-span-3 ">
                        <Image
                            // as={Image}
                            alt="Album cover"
                            className=" h-full w-full "
                            src={event.coverPicture}
                            width={300}
                            height={300}
                        />
                        <div className="absolute top-0 right-0 w-full h-full "> {/* //bg-gradient-to-b from-transparent to-black opacity-50 */}
                            <div className="absolute flex right items-center justify-end  w-full pt-4 pr-4  ">

                                <Button isIconOnly className=" bg-white rounded-full p-3 ml-2   text-right">
                                    <Share2 className="w-6 h-6 text-red-500  " />
                                </Button>


                            </div>

                        </div>
                    </div>


                    <div className="flex gap-2 col-span-6 sm:col-span-9 py-1.5">
                        <div className="">
                            <div className="text-center rounded-lg font-bold ">
                                <p className="text-lg font-bold text-black">{formatDate(event?.startDate).day}</p>
                                <p className="text-sm uppercase text-red-600">{formatDate(event?.startDate).month}</p>
                            </div>
                        </div>
                        <div className="space-y-1 flex flex-col justify-between justify-items-stretch ">
                            <h2 className='text-xs font-bold'>{event?.name}</h2>
                            <div className="mt-2 flex flex-wrap justify-between  w-full gap-2 items-center space-y-3 sm:space-y-0 font-normal text-gray-700 text-sm">
                                <p className="flex items-center gap-0.5 text-xs font-light">
                                    <MapPinIcon fill={"red"} className="w-4 h-4 text-white" /> {event?.address?.city}
                                </p>
                                <p className="flex items-center  text-xs font-light gap-0.5 ">
                                    <AlignHorizontalDistributeCenter className="w-4 h-4 text-white" fill="red" />
                                    <span>
                                        {event?.participants?.length} Participants
                                    </span>
                                </p>
                                <p className="flex items-center  text-xs font-light gap-0.5">
                                    <Clock className="w-4 h-4 text-white" fill="red" /> {getHourMinute(event?.startTime)}
                                </p>

                            </div>
                            <p className='font-normal text-xs text-[#6A6A6A] flex gap-1 items-center '>
                                <Eclipse className="w-4 h-4 bg-primary text-white rounded-full" />
                                <span>Terminé</span>
                            </p>

                            <div className="flex gap-2 items-center">


                                <Button

                                    size='sm'
                                    variant='ghost'
                                    radius='full'
                                    color='primary'
                                    className="mt-2 border-1 text-xs font-semibold text-primary">
                                    <Star className="w-4 h-4 text-red-500" />
                                    Laisser un avis
                                </Button>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Card>
    );
}
