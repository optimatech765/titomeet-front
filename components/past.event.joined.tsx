import { Button, Card } from '@heroui/react';
import { AlignHorizontalDistributeCenter, Check, CheckCircle, Clock, FilePenLine, MapPinIcon, MessageCircleMore, Share2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const PastEventJoined = () => {
    const [liked, setLiked] = React.useState(false);
    return (
        <Card
            isBlurred
            className="border-1  bg-background/60 dark:bg-default-100/50 max-h-fit "
            shadow="sm"
        >
            <div>
                <section className="grid grid-cols-6 md:grid-cols-12 gap-1 justify-center">
                    <div className="relative col-span-6 md:col-span-3 ">
                        <Image
                            // as={Image}
                            alt="Album cover"
                            className=" h-full "
                            src="/img/event-image.jpg"
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


                    <div className="flex gap-1 col-span-6 md:col-span-9 py-1.5">
                        <div className="">
                            <div className="text-center rounded-lg font-bold ">
                                <p className="text-lg font-bold text-black">14</p>
                                <p className="text-sm uppercase text-red-600">AVR</p>
                            </div>
                        </div>
                        <div className="space-y-1 flex flex-col justify-between justify-items-stretch ">
                            <h2 className='text-xs font-bold'>After Work Networking</h2>
                            <div className="mt-2 flex justify-between  w-full gap-2 items-center space-y-3 sm:space-y-0 font-normal text-gray-700 text-sm">
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
                            <p className='font-normal text-lg text-[#6A6A6A] flex gap-1 items-center '>
                                <Check className="w-4 h-4 bg-green-500 text-white rounded-full" />
                                <span>inscrit</span>
                            </p>

                            <div className="flex gap-2 items-center">


                                <Button
                                    startContent={<MessageCircleMore className="w-4 h-4" />}
                                    size='sm'
                                    variant='ghost'
                                    radius='full'
                                    color='primary'
                                    className="mt-2 border-1 text-xs font-semibold text-primary">
                                    Accéder à la discussion
                                </Button>

                                <Button
                                    startContent={<FilePenLine className="w-4 h-4" />}
                                    size='sm'
                                    variant='ghost'
                                    radius='full'
                                    color='primary'
                                    className="mt-2 border-1 text-xs font-semibold text-primary">
                                    Modifier participation
                                </Button>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Card>
    );
}

