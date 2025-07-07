'use client';


import { Card, Image, Button, Progress, Chip } from "@heroui/react";
import {  Clock, MapPin, PencilLine, Users } from "lucide-react";

export const  EventCardHorizontal=() =>{
    return (
        <Card shadow="sm" radius="lg" className="w-full p-2">
            <div className="flex flex-col sm:flex-row items-start gap-3">
                {/* Image */}
                <Image
                    src="/img/event-image.jpg" // remplace par ton image
                    alt="After Work"
                    width={100}
                    height={100}
                    className="object-fit h-auto rounded-lg min-w-[100px] min-h-[100px]"
                />

                {/* Infos */}
                <div className="flex flex-col flex-1 gap-2">
                    {/* Date & Title */}
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
                                <Chip size="sm" variant="flat" color="danger">Brouillon</Chip>
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
                            name="Edit"
                            startContent={<PencilLine size={16} />}
                            color="danger"
                            variant="bordered"
                            radius="full"
                            size="sm"
                        >
                            Modifier
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
