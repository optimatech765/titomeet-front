/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChatStore } from '@/stores/chat.store';
import { Button } from '@heroui/button';
import { Avatar } from '@heroui/react';
import { Image as Picture, ExternalLink, File, X, Info, Play, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const ChatInfoComponent = ({ setShowInfo }: { setShowInfo: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { currentChat, chatMembers } = ChatStore();

    const router = useRouter();
    const goto = () => {
        router.push(`/user/events/${currentChat.eventId}`);
    }
    return (
        <>
            <div className="flex justify-between items-center border-b pb-3">

                <h3 className="text-lg font-semibold flex ">    <Info className="cursor-pointer text-white" fill={"#28B0E6"} />Informations</h3>
                <p className="bg-white rounded-full w-fit p-2">
                    <X fill="#F8F8F8" className="cursor-pointer rounded-md text-black" size={12} onClick={() => setShowInfo(false)} />

                </p>
            </div>
            <div className="relative overflow-scroll max-h-[80vh] navscroll ">
                <div className="justify-between flex flex-col ">

                    <div>

                        <div className="space-y-2">
                            <div className="flex flex-col items-center">
                                <Avatar  src={currentChat?.event?.coverPicture} className="mr-3 text-white font-extrabold text-lg bg-[#28B0E6] text-center"  name={currentChat?.name.charAt(0)+currentChat?.name.charAt(1)} />
                                <p className="text-sm font-medium">{currentChat?.name}</p>
                                <p className="text-sm text-gray-500 font-extralight ">{chatMembers?.total} Membres</p>
                                <Button onPress={goto} className="mt-3 text-primary" color="danger" radius="full" variant={"ghost"}>
                                    <ExternalLink className="" />
                                    Acceder à l’évènement
                                </Button>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div className="text-md font-semibold flex justify-between items-center mt-4">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <User className="w-4 h-4 text-white" fill="red" />
                                <span className="text-gray-500">Membres</span> ({chatMembers?.total})
                            </div>
                            <div>
                                <span className="text-xs font-medium text-primary cursor-pointer ">
                                    Voir tout
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 mt-2 max-h-[40vh] overflow-y-auto ">
                            {chatMembers?.items?.map((member: any, index: number) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <Avatar src={member.profilePicture} size="md" className="rounded-full" />
                                    <p className="text-gray-900 font-semibold text-base leading-snug">
                                        {member.user.firstName} {member.user.lastName}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>


                    <div>
                        <div className="text-md font-semibold flex items-center gap-2 mt-4">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <File className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-500">Documents</span>
                            </div>

                        </div>
                        <div className="flex space-x-4 mt-2">
                            <div className="flex-1 text-center">
                                <div className="flex justify-center items-center rounded-lg bg-white py-3 px-6">
                                    <Picture size={22} className="mr-2 text-[#28B0E6]" />
                                </div>
                                Images
                            </div>
                            <div className="flex-1 text-center">
                                <div className="flex justify-center items-center rounded-lg bg-white py-3 px-6">
                                    <div className="bg-[#28B0E6] w-fit p-0.5 text-white rounded-md ">
                                        <Play size={18} fill="currentColor" />
                                    </div>
                                </div>

                                Vidéos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ChatInfoComponent;
