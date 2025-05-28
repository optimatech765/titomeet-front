import { Button } from '@heroui/button';
import { Avatar, Switch } from '@heroui/react';
import { AlignHorizontalDistributeCenter,Image as Picture, ExternalLink, File, Link, Link2, X, Info, Play } from 'lucide-react';
import React from 'react';

const ChatInfoComponent = ({setShowInfo}: {setShowInfo: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <>
            <div className="flex justify-between items-center border-b pb-3">

                <h3 className="text-lg font-semibold flex ">    <Info className="cursor-pointer text-white" fill={"#28B0E6"} />Informations</h3>
                <p className="bg-white rounded-full w-fit p-2">
                    <X fill="#F8F8F8" className="cursor-pointer rounded-md text-black" size={12} onClick={() => setShowInfo(false)} />

                </p>
            </div>
            <div className="relative overflow-scroll max-h-[500px] navscroll ">
                <div className="justify-between flex flex-col ">

                    <div>

                        <span className="text-xs font-thin" >Description</span>
                        <p className="text-gray-500 mt-2 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <Button className="mt-3 text-[#28B0E6] bg-white" radius="full" >
                            <Link2 className="" /> Copier le lien du groupe
                        </Button>

                    </div>

                    <div>
                        <div className="flex items-center mt-4 justify-between">

                            <span>Notifications</span>
                            <Switch className="ml-auto" checked={true} color="success" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex flex-col items-center">
                                <Avatar className="mr-3 text-white font-extrabold text-lg bg-[#28B0E6] text-center" name="AW" />
                                <p className="text-sm font-medium">After Work Event</p>
                                <p className="text-sm text-gray-500 font-extralight ">132 Membres</p>
                                <Button className="mt-3 text-primary" color="danger" radius="full" variant={"ghost"} >
                                    <ExternalLink className="" />
                                    Acceder à l’évènement
                                </Button>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div className="text-md font-semibold flex justify-between items-center mt-4">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <AlignHorizontalDistributeCenter className="w-4 h-4 text-white" fill="red" />
                                <span className="text-gray-500">Membres</span> (132)
                            </div>
                            <div>
                                <Link href={"#"} className="text-xs font-medium text-primary">
                                    Voir tout
                                </Link>
                            </div>
                        </div>
                        <div className="px-5">
                            <Link href="#" className="text-xs text-black font-medium flex items-center gap-1 mt-4 cursor-pointer">
                                <Avatar src="/img/women.png" className="" size="sm" />
                                <span>Jane</span>
                            </Link>
                            <Link href="#" className="text-xs text-black font-medium flex items-center gap-1 mt-4 cursor-pointer">
                                <Avatar src="/img/women2.png" className="" size="sm" />
                                <span>Brooklyn Simmons</span>
                            </Link>
                            <Link href="#" className="text-xs text-black font-medium flex items-center gap-1 mt-4 cursor-pointer">
                                <Avatar src="/img/men.png" className="" size="sm" />
                                <span>Leslie Alexander</span>
                            </Link>
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
