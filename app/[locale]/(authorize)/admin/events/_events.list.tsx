/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { StatusComponent } from '@/components/status.component';
import { TableComponent } from '@/components/table.component';
import { useAdminEventsStore } from '@/stores/admin/admin.events.store';
import { formatDate2, formatDateFrench, getHourMinute } from '@/utils/functions/date.function';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, TableCell, TableRow, useDisclosure } from '@heroui/react';
import { Calendar, Clock, Ellipsis, MapPinIcon, Ticket } from 'lucide-react';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';

export const EventsList = () => {

    const { items, isLoading, fetchItems, columnsValue,submitUpdateItem } = useAdminEventsStore()
    const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();
    const [selectedEvent, setSelectedEvent,] = useState<any>(null);

    useEffect(() => {
        fetchItems()

    }, []);

    const onpenModal = (event: any) => {
        setSelectedEvent(event);
        onOpen();
    }


    const handleApprouve = () => {
        submitUpdateItem({
            id: selectedEvent.id,
            status: "PUBLISHED"
        });
        onClose();
    }

    return (
        <Fragment>
            <section>


                <TableComponent
                    objectHookName={useAdminEventsStore}
                    title="Liste des Evènements"
                    columns={columnsValue}
                    valuesList={items}
                    emptyContent={<p>Aucun résultat</p>}
                    isLoading={isLoading}
                >
                    {items.map((item: any) => (
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
                            <ModalFooter>
                                <div className="flex justify-between items-center flex-1 gap-3">
                                    <Button color="danger" onPress={handleApprouve} fullWidth >
                                        Approuver
                                    </Button>
                                    <Button color="primary" onPress={onClose} fullWidth>
                                        Refuser
                                    </Button>
                                    <Button color="primary" onPress={onClose} fullWidth >
                                        Correction
                                    </Button>
                                </div>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </Fragment>

    );
}




