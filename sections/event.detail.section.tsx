"use client"
import { EventMapComponent } from "@/components/events/event.map.component";
import { Calendar, ChevronLeft, Clock, MapPin, MapPinIcon, Ticket, } from "lucide-react";
import { useEffect } from "react";
import { useEventsStore } from "@/stores/events.store";
import { useParams } from "next/navigation";
import { LoadingComponent2 } from "@/components/loading.component";
import { useRouter } from "next/navigation";
import { useScopedI18n } from "@/locales/client";
import Image from "next/image";
import { formatDateFrench, getHourMinute } from "@/utils/functions/date.function";
import { Button } from "@heroui/button";

export const EventDetailSection = () => {
    const { fetchSingleEventDetails, singleEvent, isLoading } = useEventsStore();
    const params = useParams();
    const router = useRouter()
    const eventT = useScopedI18n("event");
    const eventDetailT = useScopedI18n("eventDetail");
    const inputT = useScopedI18n("input");
    const event = params?.eventId
    useEffect(() => {
        fetchSingleEventDetails(event as string);

    }, [event]);

    return (
        <div className={""}>
            {isLoading && <LoadingComponent2 />}
            {!isLoading && <>
                <div className=" space-y-3">
                    <div className="flex items-center justify-between w-full">
                        <h2 className="text-2xl font-extrabold text-black flex items-center gap-2 mb-3">

                        <ChevronLeft className="text-black cursor-pointer " onClick={() => router.back()} />
                        {eventDetailT("title")}

                    </h2>
                        <div className="flex gap-2">
                            <Button name="Accepter" radius="full" className="bg-primary text-white w-32">Accepter</Button>
                            <Button name="Refuser" radius="full" variant={"bordered"} className="border border-primary w-32">Refuser</Button>
                            <Button name="Contacter" radius="full" className="bg-primary text-white w-32">Contacter</Button>
                        </div>
                    </div>


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
                        </div>
                    </div>
                </div>

            </>}
        </div>

    );
}