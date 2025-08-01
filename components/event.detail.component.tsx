/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import dynamic from 'next/dynamic';

const BadgeGenerator = dynamic(async () => (await import('./badge.generator.component')).BadgeGenerator, {
    ssr: false,
});

import { Progress, Button, Card, Avatar, Chip, CardBody, CardHeader, Divider, useDisclosure, ModalBody, Modal, ModalContent, ModalFooter, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
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
import Image from 'next/image';
import clsx from 'clsx';
import { EventMapComponent } from './events/event.map.component';
import { useScopedI18n } from '@/locales/client';
import { ShareEventComponent } from './share-event.component';


export const EventDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useDisclosure();
    const { isOpen: isOpenPaiement, onOpen: onOpenPaiement, onClose: onClosePaiement } = useDisclosure();
    const { dataList, fetchEventList, fetchSingleEventDetails, singleEvent, isLoading } = useEventsStore();
    const router = useRouter()
    const params = useParams();
    const event = params?.eventId
    const eventT = useScopedI18n("event");
    const eventDetailT = useScopedI18n("eventDetail");
    const inputT = useScopedI18n("input");
    const paymentT = useScopedI18n("payment");


    useEffect(() => {
        fetchSingleEventDetails(event as string);
        fetchEventList({ limit: 2 });

    }, [event]);


    return (
        <div className={""}>
            {isLoading && <LoadingComponent2 />}
            {!isLoading && <>
                <div className=" mx-auto p-6 mb-12 section-container md:px-10">
                    <h2 className="text-2xl font-extrabold text-black flex items-center gap-2 mb-3">
                        <ChevronLeft className="text-black cursor-pointer " onClick={() => router.back()} />
                        {eventDetailT("title")}
                    </h2>

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
                            {eventDetailT("slogan")}
                        </p>
                        <p className="space-x-2 mt-2">
                            <span className="information-text ">{eventT("organizer")} </span>
                            <span className={"intormation-title"}>{`${singleEvent?.postedBy?.firstName} ${singleEvent?.postedBy?.lastName}`}</span>
                            <span className="information-text ">{eventT("publish")} </span>
                            <span className={"intormation-title"}>{singleEvent?.createdAt?.split("T")[0]}</span>
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-black mt-4">
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

                    <div className="md:grid md:grid-cols-3 gap-14 mt-4">
                        <div className="col-span-2">
                            {/* Description */}
                            <div className="mt-6 space-y-2.5">
                                <h2 className="information-title1">{eventT("description")}</h2>
                                <p className="information-text ">
                                    {singleEvent?.description}
                                </p>
                            </div>


                            {/* Participants */}
                            <div className="mt-6 space-y-2.5">
                                <h2 className="information-title1">{eventT("participant")}</h2>
                                <Card className="">
                                    <CardBody>
                                        <CardHeader  >
                                            <div className="flex gap-3 w-full items-center justify-between">
                                                <h2 className="text-lg font-normal flex items-center gap-1">
                                                    <Users2Icon size={18} className="text-primary" />
                                                    {singleEvent?.ticketsSold || 0} {eventT("participanton")} {singleEvent?.capacity}
                                                </h2>
                                                <div className={"flex-1"}>

                                                    <Progress
                                                        classNames={{
                                                            indicator: "w-full flex-1 bg-[#28B0E6] ",
                                                        }}
                                                        value={(singleEvent?.accessType === "PAID" ? (singleEvent?.ticketsSold || 0) * 100 / singleEvent?.capacity : (singleEvent?.ticketsSold || 0) * 100 / singleEvent?.capacity)}
                                                        size={"md"}
                                                        className="w-full flex-1 text-[#28B0E6] "
                                                    />
                                                </div>

                                            </div>

                                        </CardHeader>
                                        <Divider />

                                        <div className="flex gap-2 mt-4">
                                            {singleEvent?.participants?.map((participant: any) => (
                                                <div key={participant?.id} className="border-1 rounded-md flex items-center gap-2 p-2 flex-1">
                                                    <Avatar src="/img/user.png" size="md" />
                                                </div>
                                            ))}
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="mt-6 flex gap-2">
                                <Button
                                    name="Join"
                                    onPress={() => onOpen()} size="sm" color="primary" radius="full" className="mt-2 flex-1 w-full">{eventT("join")}</Button>

                                <ShareEventComponent singleEvent={singleEvent} />


                            </div>

                        </div>

                        <div className='space-y-6'>
                            {/* Localisation */}
                            <div className="">
                                <h2 className="information-title1">{inputT("location")}</h2>
                                {singleEvent?.address?.longitude &&
                                    <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                                        {/* <MapPin size={32} className="text-red-500" /> */}
                                        <EventMapComponent
                                            longitude={singleEvent?.address?.longitude}
                                            latitude={singleEvent?.address?.latitude}
                                            city={singleEvent?.address?.city}
                                        />
                                    </div>
                                }
                                <p className="flex items-center gap-2 mt-3">
                                    <MapPin size={12} className="text-red-500" />
                                    <span className="information-text">
                                        {singleEvent?.address?.city} , {singleEvent?.address?.country} , {singleEvent?.address?.postalCode}
                                    </span>

                                </p>
                            </div>

                            {/* Tags */}
                            <div className="">
                                <h2 className="information-title1">Tags</h2>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {singleEvent?.tags?.map((tague: string) => (
                                        <Chip key={tague} className="bg-tertiary text-primary">
                                            {tague}
                                        </Chip>
                                    ))}
                                </div>
                            </div>

                            <BadgeGenerator imageUrl={singleEvent?.badge} />
                        </div>
                    </div>
                </div>

                {/* évènements similaires */}
                <div className="mt-10 pb-12 ">
                    <div className="section-container mx-auto p-6 ">
                        <h2 className="information-title1">{eventT("mayLike")}</h2>
                        <div className={clsx("lg:grid-cols-4 mb-7 md:grid space-y-3 md:space-y-0 md:grid-cols-2  gap-3 mt-2")}>
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
                                        {paymentT("success")}
                                    </h4>
                                    <p className="text-sm font-light text-center">
                                        {paymentT("mail")}
                                    </p>

                                </div>

                                <ModalBody>
                                    <div className="flex justify-center justify-items-stretch items-center gap-3">

                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        name="Close"
                                        className="w-full bg-primary text-white  " radius="full" onPress={onCloseConfirm}>
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
