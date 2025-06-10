/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from '@/context';
import { useSocketIoListener } from '@/hooks/useSocket';
import { ChatStore } from '@/stores/chat.store';
import { Avatar, Divider, Input } from '@heroui/react';
import clsx from 'clsx';

import { EllipsisVertical, Mic, Send,Image as Picture } from 'lucide-react';
import React, { Fragment, useEffect, useRef, useState } from 'react';


interface ChatSectionProps {
    showInfo: boolean;
    setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;

}

export const ChatSection = ({ showInfo, setShowInfo }: ChatSectionProps) => {
    const { currentChat, messages, fetchMessages,addNewMessageToMessages, chatMembers, sendMessage, fetchChatMembers } = ChatStore();

    const [recording, setRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunks = useRef<Blob[]>([]);
    const { isAuth } = useAppContext()
    const [message, setMessage] = useState("");
    
    useSocketIoListener("events.sockets.newMessage", (message: any) => {
        console.log(message.message);
        addNewMessageToMessages(currentChat?.id, message.message);
    });

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

    useEffect(() => {
        if (currentChat?.id && currentChat?.id.length > 0) {
            fetchChatMembers(currentChat?.id);
            fetchMessages(currentChat?.id)
        }
    }, [currentChat?.id]);

    const handleSendMessage = () => {
        sendMessage(currentChat?.id, message, "");
        setMessage('');
    };



    return (
        <div className={clsx({ "col-span-9": !showInfo, "col-span-6": showInfo }, " bg-white h-[90vh] px-4 shadow-lg flex flex-col ")} >
            <div className="flex justify-between items-center border-b pb-3 ">
                <div className="flex items-center gap-2">
                    <Avatar isBordered color="warning" name={currentChat?.name.charAt(0)+currentChat?.name.charAt(1)} className="mr-3" />
                    <div>
                        <h3 className="text-lg font-semibold">{currentChat?.name}</h3>
                        <p className="text-sm text-gray-500">{chatMembers?.total} Membres, <span className="text-green-500">50 En ligne</span></p>
                    </div>

                </div>
                <div className="flex items-center gap-2">
                    {/* <Share2 className="cursor-pointer text-gray-500" onClick={() => setShowInfo(true)} /> */}
                    <EllipsisVertical className="cursor-pointer text-gray-500" onClick={() => setShowInfo(true)} />
                </div>

            </div>
            <div className="flex-1 overflow-y-auto space-y-3 p-4 h-[80vh] navscroll ">

                {messages?.items?.map((message: any, index: number) => (
                    <Fragment key={`message-${index}`}>
                        {isAuth.id !== message?.senderId ?
                            <div className="flex items-center" key={index} >
                                <Avatar src="/img/men.png" className="mr-3" size={"sm"} />
                                <div>
                                    <p className="font-normal text-xs">{message.sender.username} <span className="text-xs text-gray-400">10:12</span></p>
                                    <p className="bg-gray-100 px-1 rounded-[36px]">{message.text}</p>
                                </div>
                            </div>
                            :
                            <div className="flex items-start justify-end" key={`client-${index}`}>
                                <div className="relative max-w-xs bg-blue-400 text-white p-2 rounded-[36px] ">
                                    <p>{message.text}</p>
                                    {/* Queue de cheval */}
                                    <div
                                        className="absolute  bottom-[-6px] right-[1px] w-2.5 h-4 bg-blue-400 rounded-br-full -rotate-[40deg] -translate-y-1  "
                                    ></div>
                                </div>
                            </div>
                        }
                    </Fragment>
                ))}



                {/* <div className="flex items-start justify-end">
                    <p className="bg-blue-500 text-white p-2 rounded-[36px]">Lorem ipsum dolor sit ametrr!</p>
                </div> */}



                {/*  */}

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
            <div className=" border-t pt-3 h-[10vh]">
                <Input
                    startContent={<Avatar alt="photo" src={"/img/men.png"} className="w-8 h-8 text-gray-500" />}
                    className="flex-1 -pl-2"
                    placeholder="Votre message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    endContent={
                        <div className="flex items-center gap-2">
                            <input type="file" className="hidden" id="file-upload" />
                            <label htmlFor="file-upload">  <Picture size={22} className="mr-2 text-[#28B0E6] cursor-pointer" /></label>

                            <Mic className={clsx({ "text-primary": recording, "text-gray-500": !recording }, "cursor-pointer ")} onClick={recording ? stopRecording : startRecording} />
                            <Divider orientation={"vertical"} className="w-px h-4 bg-gray-500" />
                            <Send className="text-primary cursor-pointer " onClick={handleSendMessage} />


                        </div>
                    }
                />

                {/* <Button isIconOnly>
                            <Send className="text-blue-500" />
                        </Button> */}
            </div>
        </div>
    );
}
