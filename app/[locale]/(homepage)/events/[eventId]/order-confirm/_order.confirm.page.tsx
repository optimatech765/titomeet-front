/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { LoadingComponent2 } from '@/components/loading.component';
import { eventSevices } from '@/services/events/event.services';
import { useEventsStore } from '@/stores/events.store';
import { formatDateFrench, getHourMinute } from '@/utils/functions/date.function';
import { Banknote, Calendar, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const OrderConfirmPage = () => {

    const { fetchSingleEventDetails, singleEvent, isLoading } = useEventsStore();
    const [shoppingInfo, setShoppingInfo] = useState<any>({});

    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const params = useParams();
    const event = params?.eventId

    const handleGetShopInfo = async () => {

        try {
            eventSevices.getShopInfo(id as string).then((res) => {
                console.log(res?.data)
                setShoppingInfo(res.data)

                console.log(shoppingInfo?.data?.items)
            },
                (error) => {
                    toast.error("Erreur lors de la récupération des détails");
                    console.log(error)
                }
            )
        } catch (error) {
            toast.error("Erreur lors de la récupération des détails");
            console.log(error)

        }
    }

    useEffect(() => {

        fetchSingleEventDetails(event as string);
        handleGetShopInfo();
    }, [event, id]);

    return (

        <div className=' mx-auto mb-28 mt-7 section-container'>
            {isLoading ? <LoadingComponent2 /> : <>

                <h2 className="section-container text-2xl font-extrabold text-black flex items-center gap-2 mb-3">
                    {/* <ChevronLeft className="text-black" /> */}
                    Inscription confirmée
                    <Image src="/img/check.png" alt="check" width={20} height={20} />
                </h2>

                <div className="md:grid grid-cols-12 gap-2 space-y-3 md:space-y-0">
                    <div className="col-span-8">
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
                            <h1 className="text-2xl font-extrabold">{singleEvent.name}</h1>
                            <p className="information-text ">
                                {singleEvent.description}
                            </p>
                            <p className="space-x-2 mt-2">
                                <span className="information-text ">Organisée par </span>
                                <span className={"intormation-title"}>{`${singleEvent?.postedBy?.firstName} ${singleEvent?.postedBy?.lastName}`}</span>
                                <span className="information-text ">publié le </span>
                                <span className={"intormation-title"}>{singleEvent?.createdAt?.split("T")[0]}</span>
                            </p>
                            <div className="flex items-center gap-4 text-sm text-black mt-4">
                                <span className="flex items-center gap-1 font-normal text-lg">
                                    <Calendar size={18} className='text-primary' />  {formatDateFrench(singleEvent?.startDate)}
                                </span>
                                <span className="flex items-center gap-1 text-base font-normal">
                                    <MapPin size={18} className='text-primary' /> {singleEvent?.address?.city}
                                </span>
                                <span className="flex items-center gap-1 text-base font-normal">
                                    <Clock size={18} className='text-primary' /> 
                                     {getHourMinute(singleEvent?.startTime || "")}
                                </span>
                                <span className="flex items-center gap-1 text-black text-base font-normal">
                                    <Banknote size={18} className='text-primary' />
                                    {singleEvent.prices?.map((item: any) => (
                                        <span key={item.id} className="flex items-center gap-1 text-black text-base font-normal">
                                            {item.name} :
                                            {item.amount} XOF,
                                        </span>
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4  ">

                        <div className="border-1 rounded-lg p-5 bg-[#F8F8F8]">
                            <h3 className='text-xl font-semibold'>Détails de la  réservation</h3>
                            <div>
                                {shoppingInfo?.items?.map((item:any)=>(
                                    <TicketInfoRow title={item?.eventPrice?.name} value={`${item?.quantity} X ${item?.eventPrice?.amount}`} key={item?.name} />
                                ))}
                                {/* <TicketInfoRow title="id" value="25" />
                                <TicketInfoRow title="Ticket" value="02" /> */}
                                <TicketInfoRow title="Total" value={`${shoppingInfo?.totalAmount} XOF`} />
                            </div>

                            <div className="rounded-lg border-1 p-1.5 mt-3.5 bg-[#F6DBC2] text-base font-normal">
                                Veuillez consulter votre boîte mail pour retrouver votre billet électronique
                            </div>
                            {/* <Divider className='my-3 ' />
                            <div className='flex gap-2 flex-col '>
                                <Button className="w-full bg-[#FACCCF] text-primary  " radius="full" >
                                    Confirmer
                                </Button>
                                <Button className="w-full bg-primary text-white  " radius="full" >
                                    Modifier
                                </Button>
                            </div> */}
                        </div>

                    </div>
                </div>

            </>}
        </div>
    );
}

const TicketInfoRow = ({ title, value }: { title: string; value: string }) => {
    return (
        <div className="flex items-center justify-between gap-2 mt-2">
            <span className="text-sm font-semibold text-gray-600">{title}</span>
            <span className="text-sm font-semibold text-black">{value}</span>
        </div>
    );
}

