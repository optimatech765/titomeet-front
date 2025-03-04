"use client"
import { Avatar, Card, Input, Button, Divider, CardBody, Switch, Link } from "@heroui/react";
import clsx from "clsx";
import { Search, Send, Info, Image as Picture, CheckCheck, Link2, ExternalLink, AlignHorizontalDistributeCenter, File, Play, X, EllipsisVertical, Share2, Mic } from "lucide-react";
import { useRef, useState } from "react";

export default function ChatInterface() {

    const [showInfo, setShowInfo] = useState(true);

    const [recording, setRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunks = useRef<Blob[]>([]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
            audioChunks.current.push(event.data);
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
            setAudioUrl(URL.createObjectURL(audioBlob));
            audioChunks.current = [];
        };

        mediaRecorder.start();
        mediaRecorderRef.current = mediaRecorder;
        setRecording(true);
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setRecording(false);
    };

    return (
        <div className="border-1 rounded-md  m-2">
            <div className="grid grid-cols-12 gap-1  max-h-screen  relative">
                {/* Sidebar - Conversations */}
                <div className="col-span-3 bg-[#F8F8F8] rounded-s-xl p-4 ">


                    <h2 className="text-lg font-semibold mb-4">
                        Messages <span className="text-blue-500">(15)</span>
                    </h2>
                    <Divider className="my-2" />
                    <div className="relative mb-4">
                        <Input radius="full" startContent={<Search className=" text-primary" size={18} />} className="border-gray-500 border-1 rounded-full" placeholder="Rechercher" />
                    </div>
                    <div className="relative overflow-scroll max-h-[400px] navscroll ">

                        <div className="space-y-3 mt-4 pt-2 ">
                            {[...Array(15)].map((_, index) => (
                                <Card key={index} className={clsx({ "bg-[#F8F8F8]": index != 0, "bg-white": index === 0 }, "flex shadow-none border-none items-center p-3 cursor-pointer hover:bg-gray-200 rounded-lg")}>
                                    <CardBody className="grid grid-cols-12 gap-2 p-0">
                                        <div className="col-span-2">
                                            <Avatar size="sm" src="/img/user-profile.png" className="mr-3" />
                                        </div>

                                        <div className="flex-1 col-span-10 flex justify-between ">
                                            <div>
                                                <p className=" text-sm lg:text-base font-normal  lg:font-medium">After Work Event</p>
                                                <p className="text-xs text-gray-500">John: Salut ici, comment allez...</p>
                                            </div>

                                            <div className="flex flex-col items-center gap-2">
                                                <span className="text-xs text-gray-500">10:05</span>
                                                {index > 2 ?
                                                    <div color="primary" className="px-1 text-xs py-0.5 bg-[#28B0E6] text-white w-fit rounded-full">23</div> :
                                                    <CheckCheck className="text-[#28B0E6] text-xs py-0.5 w-fit rounded-full" />
                                                }

                                            </div>
                                        </div>

                                    </CardBody>

                                </Card>))}
                        </div>
                    </div>
                </div>


                {/* Chat Area */}
                <div className={clsx({ "col-span-9": !showInfo, "col-span-6": showInfo }, " bg-white max-h-[570px] p-4 shadow-lg flex flex-col h-screen")} >
                    <div className="flex justify-between items-center border-b pb-3 ">
                        <div className="flex items-center gap-2">
                            <Avatar isBordered color="warning" name={"AW"} className="mr-3" />
                            <div>
                                <h3 className="text-lg font-semibold">After Work Event</h3>
                                <p className="text-sm text-gray-500">132 Membres, <span className="text-green-500">50 En ligne</span></p>
                            </div>

                        </div>
                        <div className="flex items-center gap-2">
                            <Share2 className="cursor-pointer text-gray-500" onClick={() => setShowInfo(true)} />
                            <EllipsisVertical className="cursor-pointer text-gray-500" onClick={() => setShowInfo(true)} />
                        </div>

                    </div>
                    <div className="flex-1 overflow-y-auto space-y-3 p-4 max-h-full navscroll">

                        <div className="flex items-start">
                            <Avatar src="/img/men.png" className="mr-3" />
                            <div>
                                <p className="font-semibold">Jane <span className="text-xs text-gray-400">10:12</span></p>
                                <p className="bg-gray-100 p-2 rounded-[36px]">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-end">
                            <p className="bg-blue-500 text-white p-2 rounded-[36px]">Lorem ipsum dolor sit ametrr!</p>
                        </div>
                        <div className="flex items-start justify-end">
                            <div className="relative max-w-xs bg-blue-400 text-white p-2 rounded-[36px] ">
                                <p>Lorem ipsum dolor sit amerrtt</p>
                                {/* Queue de cheval */}
                                <div
                                    className="absolute  bottom-[-6px] right-[1px] w-2.5 h-4 bg-blue-400 rounded-br-full -rotate-[40deg] -translate-y-1  "
                                ></div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Avatar src="/img/women.png" className="mr-3" />
                            <div>
                                <p className="font-semibold">Jane <span className="text-xs text-gray-400">10:12</span></p>
                                <p className="bg-gray-100 p-2 rounded-[36px]">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-end">
                            <p className="bg-blue-500 text-white p-2 rounded-[36px]">Lorem ipsum dolor sit ametrr!</p>
                        </div>
                        <div className="flex items-start justify-end">
                            <div className="relative max-w-xs bg-blue-400 text-white p-2 rounded-[36px] ">
                                <p>Lorem ipsum dolor sit amerrtt</p>
                                {/* Queue de cheval */}
                                <div
                                    className="absolute  bottom-[-6px] right-[1px] w-2.5 h-4 bg-blue-400 rounded-br-full -rotate-[40deg] -translate-y-1  "
                                ></div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Avatar src="/user1.png" className="mr-3" />
                            <div>
                                <p className="font-semibold">Jane <span className="text-xs text-gray-400">10:12</span></p>
                                <p className="bg-gray-100 p-2 rounded-[36px]">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-end">
                            <p className="bg-blue-500 text-white p-2 rounded-[36px]">Lorem ipsum dolor sit ametrr!</p>
                        </div>
                        <div className="flex items-start justify-end">
                            <div className="relative max-w-xs bg-blue-400 text-white p-2 rounded-[36px] ">
                                <p>Lorem ipsum dolor sit amerrtt</p>
                                {/* Queue de cheval */}
                                <div
                                    className="absolute  bottom-[-6px] right-[1px] w-2.5 h-4 bg-blue-400 rounded-br-full -rotate-[40deg] -translate-y-1  "
                                ></div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Avatar src="/user1.png" className="mr-3" />
                            <div>
                                <p className="font-semibold">Jane <span className="text-xs text-gray-400">10:12</span></p>
                                <p className="bg-gray-100 p-2 rounded-[36px]">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-end">
                            <p className="bg-blue-500 text-white p-2 rounded-[36px]">Lorem ipsum dolor sit ametrr!</p>
                        </div>
                        <div className="flex items-start justify-end">
                            <div className="relative max-w-xs bg-blue-400 text-white p-2 rounded-[36px] ">
                                <p>Lorem ipsum dolor sit amerrtt</p>
                                {/* Queue de cheval */}
                                <div
                                    className="absolute  bottom-[-6px] right-[1px] w-2.5 h-4 bg-blue-400 rounded-br-full -rotate-[40deg] -translate-y-1  "
                                ></div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Avatar src="/user1.png" className="mr-3" />
                            <div>
                                <p className="font-semibold">Jane <span className="text-xs text-gray-400">10:12</span></p>
                                <p className="bg-gray-100 p-2 rounded-[36px]">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-end">
                            <p className="bg-blue-500 text-white p-2 rounded-[36px]">Lorem ipsum dolor sit ametrr!</p>
                        </div>
                        <div className="flex items-start justify-end">
                            <div className="relative max-w-xs bg-blue-400 text-white p-2 rounded-[36px] ">
                                <p>Lorem ipsum dolor sit amerrtt</p>
                                {/* Queue de cheval */}
                                <div
                                    className="absolute  bottom-[-6px] right-[1px] w-2.5 h-4 bg-blue-400 rounded-br-full -rotate-[40deg] -translate-y-1  "
                                ></div>
                            </div>
                        </div>

                        {audioUrl && (

                            <div className="mt-4 flex   items-start justify-end">
                                <audio controls src={audioUrl} className="w-1/2" />
                                {/* <a href={audioUrl} download="recording.webm" className="mt-2 text-blue-500">
                                    Télécharger
                                </a> */}
                            </div>
                        )}

                        {/* <ChatFileUploader /> */}

                        {/* <MultiImageUploader /> */}

                    </div>
                    <div className=" border-t pt-3">
                        <Input
                            startContent={<Avatar alt="photo" src={"/img/men.png"} className="w-8 h-8 text-gray-500" />}
                            className="flex-1 -pl-2"
                            placeholder="Votre message..."
                            endContent={
                                <div className="flex items-center gap-2">
                                    <input type="file" className="hidden" id="file-upload" />
                                    <label htmlFor="file-upload">  <Picture size={22} className="mr-2 text-[#28B0E6] cursor-pointer" /></label>

                                    <Mic className={clsx({ "text-primary": recording, "text-gray-500": !recording }, "cursor-pointer ")} onClick={recording ? stopRecording : startRecording} />
                                    <Divider orientation={"vertical"} className="w-px h-4 bg-gray-500" />
                                    <Send className="text-primary cursor-pointer " />


                                </div>
                            }
                        />

                        {/* <Button isIconOnly>
                            <Send className="text-blue-500" />
                        </Button> */}
                    </div>
                </div>

                {/* Sidebar - Informations */}
                {showInfo &&
                    <>

                        <div className="col-span-3   bg-[#F8F8F8] p-4 rounded-e-xl   shadow-lg">
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
                                                    <ExternalLink className="" fill="currentColor" />
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
                        </div>
                    </>
                }


            </div>
        </div>
    );
}
