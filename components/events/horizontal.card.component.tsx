"use client"
import { Card, Progress, Button, CardBody } from '@heroui/react';
import { Clock, MapPin, PencilLine, Users } from "lucide-react";
import Image from 'next/image';
import React from 'react';

export const HorizontalCardComponent = () => {
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
                            src={"/img/event-image.jpg"}

                        />
                    </div>

                    <CardBody className="flex flex-col col-span-6 md:col-span-8">

                        <div className="flex items-start gap-3">
                            <div className="text-center">
                                <p className="text-xl font-bold">15</p>
                                <p className="text-sm text-danger font-bold uppercase">Avr</p>
                            </div>
                            <div>
                                <p className="text-xs md:text-lg md:font-semibold">After Work Networking</p>
                                <div className="flex flex-wrap gap-2 items-center text-sm text-default-500">
                                    <div className="flex items-center gap-1"><MapPin size={16} /> Cotonou</div>
                                    <div className="flex items-center gap-1"><Clock size={16} /> 15:00</div>
                                    <div className="flex items-center gap-1"><Clock size={16} /> 15:00</div>
                                </div>
                            </div>
                        </div>

                        {/* Progression */}
                        <div className="flex items-center gap-2 text-sm text-default-400">
                            <Users size={16} />
                            <span className="whitespace-nowrap">00 Par/45</span>
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
                        <div className="mt-2">
                            <Button
                                name="Modifier"
                                startContent={<PencilLine size={16} />}
                                color="danger"
                                variant="bordered"
                                radius="full"
                                size="sm"
                            >
                                Modifier
                            </Button>
                        </div>
                    </CardBody>
                </div>
            </div>
        </Card>
    );
}

