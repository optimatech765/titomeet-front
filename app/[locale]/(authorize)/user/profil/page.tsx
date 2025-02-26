"use client";
import { FutureEventCardComponent } from "@/components/future.event.card.component";
import { Avatar, Button, Card, CardBody, Chip, Image } from "@heroui/react";
import { Camera, FilePenLine, MapPin, MapPinIcon, Pencil } from "lucide-react";

const UserProfile = () => {
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
                            <Avatar src="/img/user.png" size="lg" className="border-4  mx-auto md:mx-0 z-40 w-52 h-52 border-white" />
                            <h2 className="text-xl font-semibold mt-2 text-center">Username</h2>
                            <p className="text-gray-500 text-center">adressemail@gmail.com</p>
                            <div className="flex items-center gap-2 text-gray-600 mt-2 text-center justify-center">
                                <MapPinIcon fill="red" className="w-4 h-4 text-white" /> <span>Localisation</span>
                            </div>
                        </div>


                        <div className="flex justify-around w-full gap-2 ">
                            <div className="text-center bg-[#00000026] rounded-lg py-1 px-3 text-foreground">
                                <p className="text-sm">Participations</p>
                                <p className="text-lg font-semibold">25</p>

                            </div>
                            <div className="text-center bg-[#00000026] rounded-lg py-1 px-3 text-foreground ">
                                <p className=" text-sm">Organisations</p>
                                <p className="text-lg font-semibold">10</p>

                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button size="sm" radius="full" color='primary' variant={"ghost"} className="" startContent={<Pencil size={16} />}>
                                Modifier profil
                            </Button>
                        </div>
                    </div>



                </Card>

                <div className="py-4 ps-4 flex-1">
                    {/* Interest Section */}
                    <Card >
                        <CardBody>
                            <h3 className="font-semibold flex items-center">Mes centres d’intérêt
                                <FilePenLine className="w-4 h-4 text-primary ml-2" />
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["Coding Weekend", "Jam Session", "Innovation Lab"].map((tag, index) => (
                                    <Chip key={index} className="bg-tertiary text-primary" variant="flat">
                                        {tag}
                                    </Chip>
                                ))}
                            </div>

                        </CardBody>

                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                        <FutureEventCardComponent
                            title="Evènements"
                            subtitle=""
                            titleClass={"text-foreground"}
                            data={[]}
                        />
                        <FutureEventCardComponent
                            title="Mes évènements"
                            subtitle=""
                            titleClass={"text-foreground"}
                            data={[]}
                        />
                    </div>

                </div>


            </div>


        </div>
    );
};

export default UserProfile;
