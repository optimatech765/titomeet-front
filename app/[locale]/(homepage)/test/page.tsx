/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useRef, useState } from "react";
import {
    X,
    Image as ImageIcon,
    FileText,
    Music,
    Send,
} from "lucide-react";
import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/react";
import Image from "next/image";

const MessageInput = ({ onSend }: { onSend: (message: any) => void }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [text, setText] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles([...files, ...Array.from(e.target.files)]);
        }
    };

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

    const handleSend = () => {
        if (!text && files.length === 0) return;

        const preparedFiles = files.map((file) => ({
            file,
            mimeType: file.type,
            name: file.name,
        }));

        onSend({
            text,
            files: preparedFiles,
            type: files.length ? "media" : "text",
        });

        // Clear after send
        setText("");
        setFiles([]);
    };

    return (

        <>

            {fakeData && RenderMessageContent(fakeData)}

            <div className="p-4 border-t bg-white">
                {files.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
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

                <div className="flex items-center gap-2">
                    <button onClick={() => fileInputRef.current?.click()} className="text-gray-500">
                        <ImageIcon className="w-6 h-6" />
                    </button>

                    <input
                        type="file"
                        multiple
                        hidden
                        ref={fileInputRef}
                        accept="image/*,video/*,audio/*,application/pdf"
                        onChange={handleFileChange}
                    />

                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Écrire un message..."
                        className="flex-1 p-2 border rounded-full"
                    />

                    <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded-full">
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </>

    );
};

export default MessageInput;


const RenderMessageContent = (message: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedFile, setSelectedFile] = useState<any>(null);

    const handleOpen = (file: any) => {
        setSelectedFile(file);
        onOpen();
        alert("ouvert");
    };

    const mediaFiles = message.files?.filter((file: any) =>
        file.mimeType.startsWith("image/") || file.mimeType.startsWith("video/")
    );

    const otherFiles = message.files?.filter((file: any) =>
        !file.mimeType.startsWith("image/") && !file.mimeType.startsWith("video/")
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
                            {file.mimeType.startsWith("image/") ? (
                                <Image
                                    height={200}
                                    width={200}
                                    objectFit='cover'
                                    src={file.url}
                                    alt="Event Banner"
                                    className="w-full h-full object-cover object-center rounded-xl"

                                />
                            ) : (
                                <video className="w-full h-32 object-cover rounded-md">
                                    <source src={file.url} type={file.mimeType} />
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



const fakeData = {
    "senderId": "123",
    "sender": { "username": "Alice" },
    "type": "media",
    "text": "Voici les fichiers",
    "files": [
        { "url": "/img/event-image.jpg", "mimeType": "image/png" },
        { "url": "/img/event-image.jpg", "mimeType": "image/png" },
        { "url": "/img/event-image.jpg", "mimeType": "image/png" },
        { "url": "/img/event-image.jpg", "mimeType": "image/png" },
        { "url": "/img/event-image.jpg", "mimeType": "image/png" },
        { "url": "/img/event-image.jpg", "mimeType": "image/png" },
        { "url": "/img/event-image.jpg", "mimeType": "image/png" },
        { "url": "/img/event-image.jpg", "mimeType": "image/png" },

    ]
}
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
                    {file.mimeType.startsWith("image/") ? (
                        <Image
                            height={800}
                            width={800}
                            objectFit='cover'
                            //  className="w-full h-full object-cover object-center rounded-xl"
                            src={file.url}
                            alt=""
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                    ) : (
                        <video controls autoPlay className="max-w-full max-h-[90vh] rounded-lg">
                            <source src={file.url} type={file.mimeType} />
                        </video>
                    )}
                </ModalBody>

            </ModalContent>
        </Modal>

    )
};