/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { FutureEventCardComponent } from "@/components/future.event.card.component";
import { LoadingComponent2 } from "@/components/loading.component";
import { MyEventEventCardComponent } from "@/components/myevent.card.component";
import { useAppContext } from "@/context";
import { useScopedI18n } from "@/locales/client";
import { useAttendeeEventsStore } from "@/stores/attendee.event.store";
import { useEventsStore } from "@/stores/events.store";
import { useUserInfoStore } from "@/stores/userinfo.store";
import { Avatar, Button, Card, CardBody, Chip, Image, Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/react";
import { Camera, FilePenLine, MapPinIcon, Pencil } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const UserProfile = () => {
    const { isAuth } = useAppContext();
    const { fetchEventList: fetchAttendeeEvent, dataList: attendeeList, isLoading: attendeeLoading } = useAttendeeEventsStore();
    const { isOpen, onOpen ,onClose } = useDisclosure();

    const { fetchEventList, dataList, isLoading } = useEventsStore();
    const { fetchInterests, interests, isLoading: interestsLoading } = useUserInfoStore();
    const interetT = useScopedI18n("interet");
    const navbarT = useScopedI18n("navbar");
    const buttonT = useScopedI18n("button")

    useEffect(() => {

        fetchEventList({ page: 1, limit: 25, createdById: isAuth?.id });
        fetchAttendeeEvent({ page: 1, limit: 25, attendeeId: isAuth?.id });
        fetchInterests();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="relative w-full h-52 rounded-lg overflow-hidden">
                <Image src="/img/profil-banner.png" alt="Banner" className="w-full h-full object-cover" />
                <button className="absolute top-2 z-50 right-2 bg-white p-2 rounded-full shadow-md">
                    <Camera size={20} className="text-red-500" />
                </button>
            </div>

            <div className="md:flex justify-between ">
                {/* Profile Section */}
                <Card className="p-6 relative  -mt-32 flex  items-center shadow-lg">
                    <div className="flex-1 flex flex-col justify-between w-full gap-4">
                        <div>
                            <Avatar src={isAuth?.profilePicture} size="lg" className="border-4  mx-auto md:mx-0 z-10 w-52 h-52 border-white" />
                            <h2 className="text-xl font-semibold mt-2 text-center">{isAuth?.username}</h2>
                            <p className="text-gray-500 text-center">{isAuth?.email}</p>
                            <div className="flex items-center gap-2 text-gray-600 mt-2 text-center justify-center">
                                <MapPinIcon fill="red" className="w-4 h-4 text-white" /> <span>Localisation</span>
                            </div>
                        </div>


                        <div className="flex justify-around w-full gap-2 ">
                            <div className="text-center bg-[#00000026] rounded-lg py-1 px-3 text-foreground">
                                <p className="text-sm">Participations</p>
                                <p className="text-lg font-semibold">
                                    {attendeeLoading ? <>
                                        <LoadingComponent2 />
                                    </> : <>
                                        {attendeeList?.length}
                                    </>
                                    }
                                </p>

                            </div>
                            <div className="text-center bg-[#00000026] rounded-lg py-1 px-3 text-foreground ">
                                <p className=" text-sm">Organisations</p>
                                <p className="text-lg font-semibold">{isLoading ?
                                    <>
                                        {/* span loader */}
                                        <span className="loader"></span>
                                    </>
                                    : dataList?.length}</p>

                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button href={"/user/profil/update"} as={Link} size="sm" radius="full" color='primary' variant={"ghost"} className="" startContent={<Pencil size={16} />}>
                                {buttonT("update")}
                            </Button>
                        </div>
                    </div>



                </Card>

                <div className="py-4 ps-4 flex-1">
                    {/* Interest Section */}
                    <Card >
                        <CardBody>
                            <h3 className="font-semibold flex items-center gap-3">{interetT("subtitle")}
                                <FilePenLine onClick={onOpen} className="w-4 h-4 text-primary ml-2 cursor-pointer " />
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {interestsLoading ? (
                                    // Skeletons à la place des chips
                                    Array(3).fill(null).map((_, index) => (
                                        <div
                                            key={index}
                                            className="h-6 w-24 bg-gray-300 animate-pulse rounded-full"
                                        />
                                    ))
                                ) : (
                                    // Contenu réel une fois chargé
                                    interests.map((tag: string, index: number) => (
                                        <Chip key={index} className="bg-tertiary text-primary" variant="flat">
                                            {tag}
                                        </Chip>
                                    ))
                                )}
                            </div>

                        </CardBody>

                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                        <FutureEventCardComponent
                            title={navbarT("event")}
                            subtitle=""
                            titleClass={"text-foreground"}
                            data={[]}
                        />
                        <MyEventEventCardComponent showButton={false} />
                    </div>

                </div>


            </div>

            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} classNames={{ closeButton: 'text-primary' }}>
                <ModalContent >
                    {(onClose) => (
                        <>

                            <div className='px-6 pt-5 mb-2'>
                                <h3 className="text-2xl  font-semibold  text-center">
                                   Mes centres d’intérêt
                                </h3>
                                <p className="text-sm font-light text-center">
                                    Selectionnez vos centres d’intérêt
                                </p>

                            </div>

                            <ModalBody>
                                
                            </ModalBody>
                            
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default UserProfile;
