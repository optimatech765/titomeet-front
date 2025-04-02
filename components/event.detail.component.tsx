/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import dynamic from 'next/dynamic';

const BadgeGenerator = dynamic(async () => (await import('./badge.generator.component')).BadgeGenerator, {
    ssr: false,
});

import { Progress, Button, Card, Avatar, Chip, CardBody, AvatarGroup, CardHeader, Divider, useDisclosure, ModalBody, Modal, ModalContent, ModalFooter, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { Calendar, CheckCircle, ChevronLeft, Clock, MapPin, MapPinIcon, Ticket, Users2Icon } from "lucide-react";
import { EventCardComponent } from "./event.card.component";
import { EventRegisterModal } from "./event.register.modal";
import { PaiementModalComponent } from "./paiement.modal.component";
import { useEventsStore } from "@/stores/events.store";
import { useEffect } from "react";
import { EventDtoResponse } from "@/utils/dto/events.dto";
import { useParams, useRouter } from "next/navigation";
import { formatDateFrench, getHourMinute } from "@/utils/functions/date.function";
import { LoadingComponent2 } from "./loading.component";
import { EmailShareButton, FacebookShareButton, WhatsappShareButton } from "react-share";
import Image from 'next/image';


export const EventDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useDisclosure();
    const { isOpen: isOpenPaiement, onOpen: onOpenPaiement, onClose: onClosePaiement } = useDisclosure();
    const { dataList, fetchEventList, fetchSingleEvent, singleEvent, isLoading } = useEventsStore();
    const router = useRouter()
    const params = useParams();
    const event = params?.eventId

    useEffect(() => {
        fetchSingleEvent(event as string);
        fetchEventList({ limit: 2 });

    }, []);


    return (
        <div className={""}>
            {isLoading && <LoadingComponent2 />}
            {!isLoading && <>
                <div className=" mx-auto p-6 mb-12 section-container">
                    <h2 className="text-2xl font-extrabold text-black flex items-center gap-2 mb-3">
                        <ChevronLeft className="text-black cursor-pointer " onClick={() => router.back()} />
                        Détails de l’évènement
                    </h2>

                    {/* Header */}
                    <div className="relative w-full h-64">
                        <Image
                            width={350}
                            height={500}
                            src={singleEvent?.coverPicture}
                            alt="Event Banner"
                            className="w-full h-full object-contain rounded-xl"
                        />
                    </div>

                    <div className="mt-3">
                        <h1 className="text-2xl font-extrabold">{singleEvent?.name}</h1>
                        <p className="information-text ">
                            Rencontrez des passionnés de la
                            tech autour d’un verre !
                        </p>
                        <p className="space-x-2 mt-2">
                            <span className="information-text ">Organisée par </span>
                            <span className={"intormation-title"}>{`${singleEvent?.postedBy?.firstName} ${singleEvent?.postedBy?.lastName}`}</span>
                            <span className="information-text ">publié le </span>
                            <span className={"intormation-title"}>{singleEvent?.createdAt?.split("T")[0]}</span>
                        </p>
                        <div className="flex items-center gap-4 text-sm text-black mt-4">
                            <p className="flex items-center gap-1 font-normal text-lg">
                                <Calendar className="w-5 h-5 text-primary mx-0" />
                                {formatDateFrench(singleEvent?.startDate)}
                                {/* Samedi 14 Avril 2025 */}
                            </p>
                            <p className="flex items-center gap-1">
                                <MapPinIcon fill="red" className="w-5 h-5 text-white mx-0" /> {singleEvent?.address?.city}
                            </p>
                            <p className="flex items-center gap-1">
                                <Clock className="w-5 h-5 text-white mx-0" fill="red" />
                                {getHourMinute(singleEvent?.startTime || "")}
                            </p>
                            <p className="text-black flex items-center gap-1 font-semibold">
                                <Ticket className="w-5 h-5 text-white mx-0" fill="red" />
                                {singleEvent?.accessType === "FREE" ? "Gratuit" : "Payant"}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-14 mt-4">
                        <div className="col-span-2">
                            {/* Description */}
                            <div className="mt-6 space-y-2.5">
                                <h2 className="information-title1">Description</h2>
                                <p className="information-text ">
                                    {singleEvent?.description}
                                </p>
                            </div>

                            {/* Avantages */}
                            {/* <div className="mt-6 space-y-2.5">
                            <h2 className="information-title1">Avantages</h2>
                            <p className="information-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
                            </p>
                        </div> */}

                            {/* Participants */}
                            <div className="mt-6 space-y-2.5">
                                <h2 className="information-title1">Participants</h2>
                                <Card className="">
                                    <CardBody>
                                        <CardHeader  >
                                            <div className="flex gap-3 w-full items-center justify-between">
                                                <h2 className="text-lg font-normal flex items-center gap-1">
                                                    <Users2Icon size={18} className="text-primary" />
                                                    {singleEvent?.participants?.length} Participants sur {singleEvent?.capacity}
                                                </h2>
                                                <div className={"flex-1"}>

                                                    <Progress
                                                        classNames={{
                                                            indicator: "w-full flex-1 bg-[#28B0E6] ",
                                                        }}
                                                        value={25} size={"md"} className="w-full flex-1 text-[#28B0E6] " />
                                                </div>

                                            </div>

                                        </CardHeader>
                                        <Divider />

                                        <div className="flex gap-2 mt-4">
                                            {singleEvent?.participants?.map((participant: any) => (
                                                <div key={participant?.id} className="border-1 rounded-md flex items-center gap-2 p-2 flex-1">
                                                    <Avatar src="/img/user.png" size="md" />
                                                    hello la team
                                                </div>
                                            ))}

                                            {/* <div className="border-1 rounded-md flex items-center gap-2 p-2 flex-1">
                                            <Avatar src="/img/user.png" size="md" />
                                            hello la team
                                        </div>
                                        <div className="border-1 rounded-md flex items-center gap-2 p-2 flex-1">
                                            <Avatar src="/img/user.png" size="md" />
                                            hello la team
                                        </div> */}
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="mt-6 flex gap-2">
                                <Button onPress={() => onOpen()} size="sm" color="primary" radius="full" className="mt-2 flex-1 w-full">Participer</Button>

                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button variant={"bordered"} size="sm" color="primary" radius="full" className="mt-2 flex-1 w-full">Partager</Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="new">
                                            <EmailShareButton url={window.location.href} title="Share this event">
                                                Email
                                            </EmailShareButton>
                                        </DropdownItem>
                                        <DropdownItem key="copy">
                                            <FacebookShareButton url={window.location.href} title="Share this event">
                                                Facebook
                                            </FacebookShareButton>
                                        </DropdownItem>
                                        <DropdownItem key="edit">
                                            <WhatsappShareButton url={window.location.href} title="Share this event">
                                                Whatsapp
                                            </WhatsappShareButton>
                                        </DropdownItem>

                                    </DropdownMenu>
                                </Dropdown>


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
                                        {singleEvent?.address?.city} , {singleEvent?.address?.country} , {singleEvent?.address?.postalCode}
                                    </span>

                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mt-6">
                                <h2 className="information-title1">Tags</h2>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {singleEvent?.tags?.map((tague: string) => (
                                        <Chip key={tague} className="bg-tertiary text-primary">
                                            {tague}
                                        </Chip>
                                    ))}
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

                            <BadgeGenerator imageUrl={singleEvent?.badge} />
                        </div>
                    </div>
                </div>

                {/* Événements similaires */}
                <div className="mt-10 bg-[#F8F8F8] pb-12 ">
                    <div className="section-container mx-auto p-6 ">
                        <h2 className="information-title1">Événements que vous pourriez aimer</h2>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {dataList?.map((event: EventDtoResponse, index: number) => (
                                <EventCardComponent key={index} event={event} />
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
                    onConfirm={onOpenConfirm}
                />


                {/* Modale de confirmation */}
                <Modal backdrop={"blur"} isOpen={isOpenConfirm} onClose={onCloseConfirm} classNames={{ closeButton: 'text-primary' }}>
                    <ModalContent >
                        {(onCloseConfirm) => (
                            <>

                                <div className='px-6 pt-5 mb-2'>
                                    <h3 className="text-2xl  font-semibold  flex justify-center text-center">
                                        <CheckCircle className="text-emerald-500 text-xl font-bold h-28 w-28" />
                                    </h3>
                                    <h4 className="text-2xl  font-semibold  flex justify-center text-center">
                                        Paiement réussi
                                    </h4>
                                    <p className="text-sm font-light text-center">
                                        Retrouvé vos tickets dans votre boîte mail
                                    </p>

                                </div>

                                <ModalBody>
                                    <div className="flex justify-center justify-items-stretch items-center gap-3">

                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="w-full bg-primary text-white  " radius="full" onPress={onCloseConfirm}>
                                        Fermer
                                    </Button>

                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>}
        </div>


    );
}
