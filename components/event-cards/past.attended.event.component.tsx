import { EventDtoResponse } from '@/utils/dto/events.dto';
import { formatDate, getHourMinute } from '@/utils/functions/date.function';
import {
    Card, CardBody, Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Textarea,
} from '@heroui/react';
import { AlignHorizontalDistributeCenter, Clock, Eclipse, MapPin, MapPinIcon, Share2, Star, Ticket } from 'lucide-react';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { RaitingComponent } from '../raiting.component';

export const PastAttendedEventComponent = ({ event }: { event: EventDtoResponse }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <Fragment>
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                shadow="sm"
            >
                <div>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-0  justify-center">
                        <div className="relative col-span-6 md:col-span-4 h-56 md:h-40 ">
                            <Image
                                alt="Album cover"
                                className="object-cover  "
                                layout="fill"
                                objectFit="cover"
                                src={event.coverPicture}

                            />
                        </div>

                        <CardBody className="flex flex-col p-3 col-span-6 justify-between md:col-span-8">

                            <div className="flex items-start gap-3">
                                <div className="text-center">
                                    <p className="text-xl font-bold">{formatDate(event?.startDate).day}</p>
                                    <p className="text-sm text-danger font-bold uppercase">{formatDate(event?.startDate).month}</p>
                                </div>
                                <div className='flex-1'>
                                    <p className="event-card-title">{event?.name}</p>
                                    <div className="flex w-full flex-wrap gap-2 items-center justify-between text-sm text-default-500">
                                        <div className="flex items-center gap-1  ">
                                            <MapPin size={16} className="text-primary px-0" /> {event?.address?.city}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={16} className="text-primary px-0" /> {getHourMinute(event?.startTime)}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Ticket size={16} className="text-primary px-0" />
                                            {event?.accessType === "FREE" ? "Gratuit" : "Payant"}
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-wrap gap-2 items-center justify-between text-sm text-default-500">
                                        <div className="flex items-center gap-1 text-sm text-default-500">
                                            <AlignHorizontalDistributeCenter size={16} className="text-primary px-0" />
                                            <span>
                                                {event?.participants?.length || 0} Participants
                                            </span>
                                        </div>

                                        {/* Inscrit ou terminé */}
                                        <div className="flex items-center gap-2 text-sm text-default-400 ">

                                            <Eclipse className="w-4 h-4 bg-primary text-white rounded-full" />
                                            <span>Terminé</span>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Bouton Modifier */}
                            <div className="mt-2 flex flex-col-reverse gap-3  md:flex-row justify-between items-center">
                                <Button
                                    onPress={onOpen}
                                    size='sm'
                                    variant='ghost'
                                    radius='full'
                                    color='primary'
                                    className="mt-2 border-1 text-xs font-semibold text-primary w-full ">
                                    <Star className="w-4 h-4 text-red-500" />
                                    Laisser un avis
                                </Button>
                            </div>
                        </CardBody>
                    </div>
                </div>
            </Card>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <div className='px-6 pt-5 mb-2'>
                                <h3 className="text-2xl  font-semibold  text-center">
                                    Donner votre avis
                                </h3>

                            </div>
                            <ModalBody>
                                <RaitingComponent maxStars={5} onRate={(rating: number) => console.log(rating)} />
                                <Textarea
                                    // className="max-w-sm"
                                    classNames={{
                                        input: "w-full bg-white",
                                        base: "w-full bg-white",
                                        inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                                    }}
                                    label="Commentaire" placeholder="Votre commentaire" />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Annuler
                                </Button>
                                <Button className='bg-primary text-white' color="primary" onPress={onClose}>
                                    Envoyer
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </Fragment>
    );
}



