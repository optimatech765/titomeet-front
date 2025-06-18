
"use client"
import { Avatar, Card, CardBody } from "@heroui/react";
import { Mail, MapPin, PhoneCall, User } from "lucide-react";
import { useEventsStore } from "@/stores/events.store";

export const OrganiserInfoComponent = () => {
    const { singleEvent } = useEventsStore();
    return (
        <div className="md:w-1/2">
            <Card>
                <CardBody>
                    <div className="flex gap-3 items-center">
                        <Avatar size={"lg"} className="h-20 w-20" src={singleEvent?.postedBy?.profilePicture || ""} />
                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-14">
                                <p className="flex items-center gap-1">
                                    <User size={16}  className="text-primary" />
                                    <span className="text-[#1E1E1E] font-[300] ">{singleEvent?.postedBy?.firstName} {singleEvent?.postedBy?.lastName}</span>
                                </p>
                                <p className="flex items-center gap-1 text-[#1E1E1E]">
                                    <PhoneCall size={16} className="text-primary" />
                                    <span className="text-[#1E1E1E] font-[300] ">{12345678}</span>
                                </p>
                            </div>

                            <div className=""> <div className="grid grid-cols-2 gap-14">
                                <p className="flex items-center gap-1">
                                    <MapPin size={16} className="text-primary" />
                                    <span className="text-[#1E1E1E] font-[300] ">Localisation</span>
                                </p>
                                <p className="flex items-center gap-1">
                                    <Mail size={16} className="text-primary" />
                                    <span className="text-[#1E1E1E] font-[300] ">{singleEvent?.postedBy?.email}</span>
                                </p>
                            </div>

                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}