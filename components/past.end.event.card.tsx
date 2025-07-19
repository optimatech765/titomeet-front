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
import { AlignHorizontalDistributeCenter, Clock, Eclipse, MapPinIcon,  Star } from 'lucide-react';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { RaitingComponent } from './raiting.component';
import { ShareEventComponent } from './share-event.component';

export const PastEndEventCard = ({ event }: { event: EventDtoResponse }) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (

        <Fragment>
            <Card
                isBlurred
                className="border-1  bg-background/60 dark:bg-default-100/50 max-h-fit md:w-fit "
                shadow="sm"
            >
                <div>
                    <section className="sm:grid grid-cols-6 sm:grid-cols-12 gap-1 justify-center">
                        <div className="relative col-span-6 sm:col-span-3 ">
                            <Image
                                // as={Image}
                                alt="Album cover"
                                className=" h-full w-full "
                                src={event.coverPicture}
                                width={300}
                                height={300}
                            />
                            <div className="absolute top-0 right-0 w-full h-full "> {/* //bg-gradient-to-b from-transparent to-black opacity-50 */}
                                <div className="absolute flex right items-center justify-end  w-full pt-4 pr-4  ">

                                     <ShareEventComponent singleEvent={event} iconly={true} />

                                </div>

                            </div>
                        </div>

                        <CardBody className='col-span-6 sm:col-span-9 '>
                            <div className="flex gap-2">
                                <div className="">
                                    <div className="text-center rounded-lg font-bold ">
                                        <p className="text-lg font-bold text-black">{formatDate(event?.startDate).day}</p>
                                        <p className="text-sm uppercase text-red-600">{formatDate(event?.startDate).month}</p>
                                    </div>
                                </div>
                                <div className="space-y-1 flex-1 flex flex-col justify-between justify-items-stretch ">
                                    <h2 className='text-xs font-bold'>{event?.name}</h2>
                                    <div className="mt-2 flex flex-wrap justify-between  w-full gap-2 items-center space-y-3 sm:space-y-0 font-normal text-gray-700 text-sm">
                                        <p className="flex items-center gap-0.5 text-xs font-light">
                                            <MapPinIcon fill={"red"} className="w-4 h-4 text-white" /> {event?.address?.city}
                                        </p>
                                        <p className="flex items-center  text-xs font-light gap-0.5 ">
                                            <AlignHorizontalDistributeCenter className="w-4 h-4 text-white" fill="red" />
                                            <span>
                                                {event?.participants?.length} Participants
                                            </span>
                                        </p>
                                        <p className="flex items-center  text-xs font-light gap-0.5">
                                            <Clock className="w-4 h-4 text-white" fill="red" /> {getHourMinute(event?.startTime)}
                                        </p>

                                    </div>
                                    <p className='font-normal text-xs text-[#6A6A6A] flex gap-1 items-center '>
                                        <Eclipse className="w-4 h-4 bg-primary text-white rounded-full" />
                                        <span>Terminé</span>
                                    </p>

                                    <div className="flex gap-2 items-center">
                                        <Button
                                            name="Rate"
                                            onPress={onOpen}
                                            size='sm'
                                            variant='ghost'
                                            radius='full'
                                            color='primary'
                                            className="mt-2 border-1 text-xs font-semibold text-primary w-full md:w-1/2">
                                            <Star className="w-4 h-4 text-red-500" />
                                            Laisser un avis
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </section>
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
                                <Button
                                    name="Cancel"
                                    color="danger" variant="light" onPress={onClose}>
                                    Annuler
                                </Button>
                                <Button name="Send" className='bg-primary text-white' color="primary" onPress={onClose}>
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
