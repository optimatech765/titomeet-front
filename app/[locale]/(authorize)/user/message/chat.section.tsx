/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from '@/context';
import { useSocketIoListener } from '@/hooks/useSocket';
import { ChatStore } from '@/stores/chat.store';
import { Avatar, Button, Modal, ModalBody, ModalContent, useDisclosure, } from '@heroui/react';
import clsx from 'clsx';

import { EllipsisVertical, X, Music, FileText } from 'lucide-react';
import React, { Fragment, Suspense, useEffect, useState } from 'react';
import ChatInputComponent from './chat.input.component';
import Image from 'next/image';


interface ChatSectionProps {
    showInfo: boolean;
    setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;

}

export const ChatSection = ({ showInfo, setShowInfo }: ChatSectionProps) => {
    const { currentChat, messages, fetchMessages, addNewMessageToMessages, chatMembers, fetchChatMembers } = ChatStore();
    const [files, setFiles] = useState<File[]>([]);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const { isAuth } = useAppContext()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedFile, setSelectedFile] = useState<any>(null);

    useSocketIoListener("events.sockets.newMessage", (message: any) => {
        console.log(message.message);
        addNewMessageToMessages(currentChat?.id, message.message);
    });

    useEffect(() => {
        if (currentChat?.id && currentChat?.id.length > 0) {
            fetchChatMembers(currentChat?.id);
            fetchMessages(currentChat?.id)
        }
    }, [currentChat?.id]);

    const removeFile = (index: number) => {
        const updated = [...files];
        updated.splice(index, 1);
        setFiles(updated);
    };

    const renderPreview = (file: File) => {
        const type = file.type;

        const url = URL.createObjectURL(file);

        if (type.startsWith("image/")) {
            return <img src={url} alt="preview" className="w-20 h-20 object-cover rounded-md" />;
        }
        if (type.startsWith("video/")) {
            return (
                <video className="w-20 h-20 rounded-md" muted>
                    <source src={url} />
                </video>
            );
        }
        if (type.startsWith("audio/")) {
            return <Music className="w-8 h-8 text-blue-600" />;
        }

        return <FileText className="w-8 h-8 text-gray-500" />;
    };

    const Lightbox = ({
        open,
        onClose,
        file,
    }: {
        open: boolean;
        onClose: () => void;
        file: any;
    }) => {

        return (

            <Modal
                scrollBehavior={"inside"}
                size={"2xl"}
                isOpen={open}
            >
                <ModalContent>
                    <Button isIconOnly onPress={onClose} className="absolute top-2 right-2 text-white text-2xl z-10">×</Button>

                    <ModalBody >
                        {file.type == "image" && (
                            <Image
                                height={800}
                                width={800}
                                objectFit='cover'
                                //  className="w-full h-full object-cover object-center rounded-xl"
                                src={file.url}
                                alt=""
                                className="max-w-full max-h-[90vh] object-contain"
                            />
                        )}
                        {file.type == "image" && (
                            <video controls autoPlay className="max-w-full max-h-[90vh] rounded-lg">
                                <source src={file.url} type={file.type} />
                            </video>
                        )}

                    </ModalBody>

                </ModalContent>
            </Modal>

        )
    };

    const RenderMessageContent = (message: any) => {

        const handleOpen = (file: any) => {
            setSelectedFile(file);
            onOpen();
        };
        const messageFiles = Array.isArray(message?.files) ? message?.files : [];


        const mediaFiles = messageFiles?.filter((file: any) =>
            file.type == "image" || file.type == "video"
        );

        const otherFiles = messageFiles?.filter((file: any) =>
            file.type != "image" && file.type != "video"
        );

        return (
            <div className="space-y-2">
                {selectedFile && <button onClick={onClose} className=" bg-red-400 right-2  text-2xl z-10">×</button>}
                {message.text && <p>{message.text}</p>}

                {/* Media Preview */}
                {mediaFiles?.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 max-w-sm">
                        {mediaFiles.slice(0, 4).map((file: any, idx: number) => (
                            <div
                                key={idx}
                                className="relative cursor-pointer"
                                onClick={() => handleOpen(file)}
                            >
                                {file.type == "image" && (
                                    <Image
                                        height={200}
                                        width={200}
                                        objectFit='cover'
                                        src={file.url}
                                        alt="Event Banner"
                                        className="w-full h-full object-cover object-center rounded-xl"

                                    />
                                )}

                                {file.type == "video" && (
                                    <video className="w-full h-32 object-cover rounded-md">
                                        <source src={file.url} type={file.type} />
                                    </video>
                                )}

                                {/* Overlay if it's the last one and more files exist */}
                                {idx === 3 && mediaFiles.length > 4 && (
                                    <div className="absolute inset-0 bg-black/60 rounded-md flex items-center justify-center text-white text-xl font-bold">
                                        +{mediaFiles.length - 4}
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                )}

                {/* Other Files */}
                {otherFiles?.length > 0 && (
                    <div className="flex flex-col gap-2 mt-2">
                        {otherFiles.map((file: any, idx: number) => (
                            <>
                                {file.type == "audio" && (
                                    // <audio controls src={file.url} type="audio/webm"  />
                                    <audio controls>
                                        <source src="https://titomeet.s3.eu-west-3.amazonaws.com/public/598de222-27b5-4389-9894-52837ee62f52-1749744436854.webm" type="audio/webm"/>
                                           
                                    </audio>

                                )}

                                {file.type != "audio" && (
                                    <a
                                        key={idx}
                                        href={file.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="flex items-center space-x-2 text-sm text-blue-600 underline"
                                    >
                                        <FileText className="w-5 h-5" />
                                        <span>{file.name || "Télécharger le fichier"}</span>
                                    </a>
                                )}
                            </>

                        ))}
                    </div>
                )}


                {isOpen && selectedFile && (
                    <Lightbox
                        open={isOpen}
                        onClose={onClose}
                        file={selectedFile}
                    />
                )}
            </div>
        );
    };

    return (
        <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
            <div className={clsx({ "col-span-9": !showInfo, "col-span-6": showInfo }, " bg-white h-[88vh] md:h-[90vh] px-4 shadow-lg flex flex-col ")} >
                <div className="flex justify-between items-center border-b pb-3 ">
                    <div className="flex items-center gap-2">
                        <Avatar src={currentChat?.event?.coverPicture} isBordered color="warning" name={currentChat?.name.charAt(0) + currentChat?.name.charAt(1)} className="mr-3" />
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
                                        {RenderMessageContent(message)}
                                    </div>
                                </div>
                                :
                                <div className="flex items-start justify-end" key={`client-${index}`}>
                                    <div className="relative max-w-xs text-white p-2 rounded-[36px] ">

                                        {RenderMessageContent(message)}
                                        {/* Queue de cheval */}
                                        {/* <div
                                            className="absolute  bottom-[-6px] right-[1px] w-2.5 h-4 bg-blue-400 rounded-br-full -rotate-[40deg] -translate-y-1  "
                                        ></div> */}
                                    </div>
                                </div>
                            }
                        </Fragment>
                    ))}


                    {audioUrl && (
                        <div className="flex flex-wrap gap-2 mb-2 absolute bottom-[20vh] w-full">
                            <audio controls src={audioUrl} className="w-1/2" />
                            <Button isIconOnly
                                className=" p-1 rounded-full"
                                onPress={() => setAudioUrl(null)}
                            >
                                <X className="w-4 h-4 text-red-500" />
                            </Button>
                        </div>
                    )}



                    {files.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2 absolute bottom-[20vh] w-full">
                            {files.map((file, index) => (
                                <div key={index} className="relative w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                                    {renderPreview(file)}
                                    <button
                                        className="absolute top-0 right-0 p-1 bg-white rounded-full"
                                        onClick={() => removeFile(index)}
                                    >
                                        <X className="w-4 h-4 text-red-500" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className=" border-t pt-3 h-[10vh]">

                    <ChatInputComponent files={files} setFiles={setFiles} setAudioUrl={setAudioUrl} />
                </div>
            </div>
        </Suspense>

    );
}



