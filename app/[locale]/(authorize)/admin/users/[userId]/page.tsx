/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from 'react';
import { UserState } from './_user.state';
import { AdminTableComponent } from '@/components/tables/admin.table.component';
import { Avatar, Card, CardBody, Modal, ModalBody, ModalContent, TableCell, TableRow, useDisclosure } from '@heroui/react';
import { Calendar, Clock, Ellipsis, MapPinIcon, Ticket } from 'lucide-react';
import { useUserStore } from '@/stores/admin/admin.users.store';
import { useParams } from 'next/navigation';
import { LoadingComponent } from '@/components/loading.component';
import { useAttendeeEventsStore } from '@/stores/attendee.event.store';
import { useEventsStore } from '@/stores/events.store';
import { StatusComponent } from '@/components/status.component';
import { formatDate2, formatDateFrench, getHourMinute } from '@/utils/functions/date.function';
import { TableComponent } from '@/components/table.component';
import { useAdminEventsStore } from '@/stores/admin/admin.events.store';
import Image from 'next/image';


const Page = () => {

    const params = useParams();
    const { userId } = params;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedEvent, setSelectedEvent,] = useState<any>(null);

    const { columnsValue } = useAdminEventsStore()
    const { fetchEventList, dataList: attendeeEventList, isLoading } = useAttendeeEventsStore();
    const { fetchEventList: fetchUserEvent, dataList: userEventList } = useEventsStore();

    const onpenModal = (event: any) => {
        setSelectedEvent(event);
        onOpen();
    }

    useEffect(() => {
        fetchEventList({ page: 1, limit: 25, attendeeId: userId });
        fetchUserEvent({ page: 1, limit: 25, createdById: userId });
    }, []);

    return (
        <>
            {isLoading ? <LoadingComponent /> :
                <div className="sm:flex  gap-3 sm:overflow-y-hidden h-screen ">

                    <>
                        <div className={"sm:w-1/4"}>
                            <Card className='border-1 border-slate-300'>
                                <CardBody>
                                    <div className='flex items-center justify-center'>
                                        <Avatar radius='full'
                                            src="/img/user.png"
                                            alt="hero"
                                            size='lg'
                                            className='h-28 w-28'
                                        />
                                    </div>
                                    <div className='mt-2 space-y-3'>
                                        <p className={"text-center font-light text-sm "}>#34345534</p>
                                        <div>
                                            <p className={"text-center font-bold text-xl"}>User Name</p>
                                            <p className={"text-center font-light text-sm "}>benin@gmail.com</p>
                                            <div className="flex items-center gap-2 text-gray-600 mt-2 text-center justify-center font-light text-sm">
                                                <MapPinIcon fill="red" className="w-4 h-4 text-white" /> <span>Localisation</span>
                                            </div>
                                        </div>

                                    </div>
                                </CardBody>
                            </Card>
                        </div>


                        <div className='space-y-3 sm:h-screen overflow-auto navscroll w-full pb-28'>

                            <section>
                                <UserState />
                            </section>

                            <section>
                                <TableComponent
                                    objectHookName={useAttendeeEventsStore}
                                    title="Liste des Evènements auxquels l'utilisateur a participé"
                                    columns={columnsValue}
                                    valuesList={attendeeEventList}
                                    emptyContent={<p>Aucun résultat</p>}
                                    isLoading={isLoading}
                                >
                                    {attendeeEventList.map((item: any) => (
                                        <TableRow key={item.id} className="cursor-pointer" onClick={() => onpenModal(item)}>
                                            <TableCell >{formatDate2(item.startDate)}</TableCell>
                                            <TableCell >{item.name}</TableCell>
                                            <TableCell >{item.categories.map((cat: any) => cat.name).join(", ")}</TableCell>
                                            <TableCell >{item?.postedBy?.firstName} {item?.postedBy?.lastName}</TableCell>
                                            <TableCell >{item?.participants?.length}</TableCell>
                                            <TableCell ><StatusComponent status={item.status} /></TableCell>
                                            <TableCell >
                                                <div>
                                                    <Ellipsis className="text-default-300" />
                                                </div>
                                            </TableCell>

                                        </TableRow>
                                    ))}

                                </TableComponent>

                            </section>

                            <section className='pt-20'>
                                <TableComponent
                                    objectHookName={useEventsStore}
                                    title="Liste des Evènements crées par l'utilisateur"
                                    columns={columnsValue}
                                    valuesList={userEventList}
                                    emptyContent={<p>Aucun résultat</p>}
                                    isLoading={isLoading}
                                >
                                    {userEventList.map((item: any) => (
                                        <TableRow key={item.id} className="cursor-pointer" onClick={() => onpenModal(item)}>
                                            <TableCell >{formatDate2(item.startDate)}</TableCell>
                                            <TableCell >{item.name}</TableCell>
                                            <TableCell >{item.categories.map((cat: any) => cat.name).join(", ")}</TableCell>
                                            <TableCell >{item?.postedBy?.firstName} {item?.postedBy?.lastName}</TableCell>
                                            <TableCell >{item?.participants?.length}</TableCell>
                                            <TableCell ><StatusComponent status={item.status} /></TableCell>
                                            <TableCell >
                                                <div>
                                                    <Ellipsis className="text-default-300" />
                                                </div>
                                            </TableCell>

                                        </TableRow>
                                    ))}

                                </TableComponent>

                            </section>



                        </div>
                    </>

                    <Modal
                        scrollBehavior={"inside"}
                        size={"2xl"}
                        isOpen={isOpen}
                        onOpenChange={onOpenChange} classNames={{
                            closeButton: 'text-primary',
                        }}>
                        <ModalContent>
                            {(onClose) => (
                                <>

                                    <ModalBody >
                                        <div className=" mx-auto p-6 mb-12 section-container md:px-10">
                                            <h2 className="text-2xl font-extrabold text-black flex items-center gap-2 mb-3">

                                                Détails
                                            </h2>

                                            <div className={`w-full h-64`}
                                            // style={{
                                            //     backgroundImage: `url(${selectedEvent?.coverPicture || ""})`,
                                            //     backgroundSize: "cover",
                                            //     backgroundPosition: "center",
                                            // }}
                                            >
                                                <Image
                                                    objectFit='cover'
                                                    width={800}
                                                    height={500}
                                                    src={selectedEvent?.coverPicture}
                                                    alt="Event Banner"
                                                    className="w-full h-full object-cover object-center rounded-xl"
                                                />
                                            </div>

                                            <div className="mt-3">
                                                <h1 className="text-2xl font-extrabold">{selectedEvent?.name}</h1>
                                                <p className="information-text ">
                                                    Rencontrez des passionnés de la
                                                    tech autour d’un verre !
                                                </p>
                                                <p className="space-x-2 mt-2">
                                                    <span className="information-text ">Organisée par </span>
                                                    <span className={"intormation-title"}>{`${selectedEvent?.postedBy?.firstName} ${selectedEvent?.postedBy?.lastName}`}</span>
                                                    <span className="information-text ">publié le </span>
                                                    <span className={"intormation-title"}>{selectedEvent?.createdAt?.split("T")[0]}</span>
                                                </p>
                                                <div className="flex items-center gap-4 text-sm text-black mt-4">
                                                    <p className="flex items-center gap-1 font-normal text-lg">
                                                        <Calendar className="w-5 h-5 text-primary mx-0" />
                                                        {formatDateFrench(selectedEvent?.startDate)}
                                                        {/* Samedi 14 Avril 2025 */}
                                                    </p>
                                                    <p className="flex items-center gap-1">
                                                        <MapPinIcon fill="red" className="w-5 h-5 text-white mx-0" /> {selectedEvent?.address?.city}
                                                    </p>
                                                    <p className="flex items-center gap-1">
                                                        <Clock className="w-5 h-5 text-white mx-0" fill="red" />
                                                        {getHourMinute(selectedEvent?.startTime || "")}
                                                    </p>
                                                    <p className="text-black flex items-center gap-1 font-semibold">
                                                        <Ticket className="w-5 h-5 text-white mx-0" fill="red" />
                                                        {selectedEvent?.accessType === "FREE" ? "Gratuit" : "Payant"}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className=" gap-14 mt-4">
                                                <div className="">
                                                    {/* Description */}
                                                    <div className="mt-6 space-y-2.5">
                                                        <h2 className="information-title1">Description</h2>
                                                        <p className="information-text ">
                                                            {selectedEvent?.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ModalBody>

                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>

            }
        </>

    );
}

export default Page;

