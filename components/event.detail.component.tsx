
"use client";
import { Progress, Button, Card, Avatar, Chip, CardBody, AvatarGroup, CardHeader, Divider, useDisclosure } from "@heroui/react";
import { Calendar, ChevronLeft, Clock, MapPin, MapPinIcon, Ticket, Users2Icon } from "lucide-react";
import { EventCardComponent } from "./event.card.component";
import { EventRegisterModal } from "./event.register.modal";
import { PaiementModalComponent } from "./paiement.modal.component";

export const EventDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenPaiement, onOpen: onOpenPaiement, onClose: onClosePaiement } = useDisclosure();
    return (
        <div className={""}>

            <div className=" mx-auto p-6 mb-12 section-container">
                <h2 className="text-2xl font-extrabold text-black flex items-center gap-2 mb-3">
                    <ChevronLeft className="text-black" />
                    Détails de l’évènement
                </h2>

                {/* Header */}
                <div className="relative w-full h-64">
                    <img
                        src="/img/event-image.jpg"
                        alt="Event Banner"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                <div className="mt-3">
                    <h1 className="text-2xl font-extrabold">After Work Networking</h1>
                    <p className="information-text ">
                        Rencontrez des passionnés de la
                        tech autour d’un verre !
                    </p>
                    <p className="space-x-2 mt-2">
                        <span className="information-text ">Organisée par </span>
                        <span className={"intormation-title"}>Jacob Jones</span>
                        <span className="information-text ">publié le </span>
                        <span className={"intormation-title"}>12/02/25</span>
                    </p>
                    <div className="flex items-center gap-4 text-sm text-black mt-4">
                        <p className="flex items-center gap-1 font-normal text-lg">
                            <Calendar  className="w-5 h-5 text-primary mx-0" />
                            Samedi 14 Avril 2025
                        </p>
                        <p className="flex items-center gap-1">
                            <MapPinIcon fill="red" className="w-5 h-5 text-white mx-0" /> Cotonou
                        </p>
                        <p className="flex items-center gap-1">
                            <Clock className="w-5 h-5 text-white mx-0" fill="red" /> 15:00
                        </p>
                        <p className="text-black flex items-center gap-1 font-semibold">
                            <Ticket className="w-5 h-5 text-white mx-0" fill="red" />
                            Gratuit</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-14 mt-4">
                    <div className="col-span-2">
                        {/* Description */}
                        <div className="mt-6 space-y-2.5">
                            <h2 className="information-title1">Description</h2>
                            <p className="information-text ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        {/* Avantages */}
                        <div className="mt-6 space-y-2.5">
                            <h2 className="information-title1">Avantages</h2>
                            <p className="information-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
                            </p>
                        </div>

                        {/* Participants */}
                        <div className="mt-6 space-y-2.5">
                            <h2 className="information-title1">Avantages</h2>
                            <Card className="">
                                <CardBody>
                                    <CardHeader  >
                                        <div className="flex gap-3 w-full items-center justify-between">
                                            <h2 className="text-lg font-normal flex items-center gap-1">
                                                <Users2Icon size={18} className="text-primary" />
                                                25 Participants sur 100
                                            </h2>
                                            <div className={"flex-1"}>

                                                <Progress 
                                                classNames={{
                                                    indicator: "w-full flex-1 bg-[#28B0E6] ",
                                                }}
                                                value={25} size={"md"}  className="w-full flex-1 text-[#28B0E6] " />
                                            </div>

                                        </div>

                                    </CardHeader>
                                    <Divider />

                                    <div className="flex gap-2 mt-4">
                                        <div className="border-1 rounded-md flex items-center gap-2 p-2 flex-1">
                                            <Avatar src="/img/user.png" size="md" />
                                            hello la team
                                        </div>

                                        <div className="border-1 rounded-md flex items-center gap-2 p-2 flex-1">
                                            <Avatar src="/img/user.png" size="md" />
                                            hello la team
                                        </div>
                                        <div className="border-1 rounded-md flex items-center gap-2 p-2 flex-1">
                                            <Avatar src="/img/user.png" size="md" />
                                            hello la team
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="mt-6 flex gap-2">
                            <Button onPress={() => onOpen()} size="sm" color="primary" radius="full" className="mt-2 flex-1 w-full">Participer</Button>
                            <Button variant={"bordered"} size="sm" color="primary" radius="full" className="mt-2 flex-1 w-full">Partager</Button>
                        </div>

                    </div>

                    <div>
                        {/* Localisation */}
                        <div className="mt-6">
                            <h2 className="information-title1">Localisation</h2>
                            <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                                <MapPin size={32} className="text-red-500" />
                            </div>
                            <p className="flex items-center gap-2 mt-3">
                                <MapPin size={12} className="text-red-500" />
                                <span className="information-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                </span>

                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mt-6">
                            <h2 className="information-title1">Tags</h2>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <Chip className="bg-tertiary text-primary"> Tech</Chip>
                                <Chip className="bg-tertiary text-primary">Networking</Chip>
                                <Chip className="bg-tertiary text-primary">Événement</Chip>
                                <Chip className="bg-tertiary text-primary">Networking</Chip>
                                <Chip className="bg-tertiary text-primary">Événement</Chip>
                            </div>
                        </div>

                        {/* Discussion */}
                        <Card className="mt-6 bg-transparent ">
                            <CardBody>
                                <h2 className="information-title1">Groupe de discussion</h2>
                                <p className="text-gray-600">Rejoignez le groupe de discussion de l&apos;événement.</p>
                                <AvatarGroup  >
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />

                                </AvatarGroup>
                                <Button size="sm" color="primary" radius="full" className="mt-2">Rejoindre</Button>
                            </CardBody>

                        </Card>
                    </div>
                </div>
            </div>

            {/* Événements similaires */}
            <div className="mt-10 bg-[#F8F8F8] pb-12 ">
                <div className="section-container mx-auto p-6 ">
                    <h2 className="information-title1">Événements que vous pourriez aimer</h2>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {[1, 2, 3].map((event) => (
                            <EventCardComponent key={event} />
                        ))}
                    </div>
                </div>

            </div>


            {/* Ticket buy modal */}
            <EventRegisterModal
                isOpen={isOpen}
                onClose={() => {
                    onClose();
                    onOpenPaiement();
                }}

            />

            <PaiementModalComponent
                isOpen={isOpenPaiement}
                onClose={onClosePaiement}
            />
        </div>

    );
}
