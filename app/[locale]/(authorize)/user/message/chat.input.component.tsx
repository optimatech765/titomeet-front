/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ChatStore } from '@/stores/chat.store';
import { uploadMultipleFiles } from '@/utils/functions/other.functions';
import { Avatar, Button, Divider, Input } from '@heroui/react';
import clsx from 'clsx';
import { FileIcon, FileText, Mic, Music, Send, X } from 'lucide-react';
import React, { useRef, useState } from 'react';

const ChatInputComponent = ({ files, setFiles, setAudioUrl }: { setAudioUrl: any, files: File[], setFiles: React.Dispatch<React.SetStateAction<File[]>> }) => {

    const { currentChat, sendMessage } = ChatStore();
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [recording, setRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [seconds, setSeconds] = useState(0);
    const audioChunks = useRef<Blob[]>([]);
    const [message, setMessage] = useState("");


    // const startRecording = async () => {
    //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    //     const mediaRecorder = new MediaRecorder(stream);

    //     mediaRecorder.ondataavailable = (event) => {
    //         audioChunks.current.push(event.data);
    //     };

    //     mediaRecorder.onstop = () => {
    //         const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
    //         setAudioUrl(URL.createObjectURL(audioBlob));
    //         audioChunks.current = [];
    //     };

    //     mediaRecorder.start();
    //     mediaRecorderRef.current = mediaRecorder;
    //     setRecording(true);
    // };

    // const stopRecording = () => {
    //     mediaRecorderRef.current?.stop();
    //     setRecording(false);
    // };

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
            setSeconds(0);
        };

        mediaRecorder.start();
        mediaRecorderRef.current = mediaRecorder;
        setRecording(true);

        intervalRef.current = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setRecording(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleSendMessage = async () => {
        let filesList: any[] = [];
        if (files.length > 0) {
            filesList = await uploadMultipleFiles(files);
        }

        if (audioChunks.current) {
            const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });

            const audioFile = new File([audioBlob], `audio-${Date.now()}.webm`, { type: "audio/webm" });

            const vocalNote = await uploadMultipleFiles([audioFile]);
            filesList = [...filesList, ...vocalNote];
        }

        sendMessage(currentChat?.id, message, filesList);
        setFiles([]);
        setAudioUrl(null);
        setMessage('');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles([...files, ...Array.from(e.target.files)]);
        }
    };

    const formatTime = (s: number) => {
        const minutes = Math.floor(s / 60).toString().padStart(2, "0");
        const seconds = (s % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div>

            {recording && (
                <div className="flex items-center w-full justify-between space-x-4 bg-gray-100 px-4 py-2 rounded-lg">
                    <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
                        <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white">
                            🎙️
                        </div>
                    </div>
                    <div className="text-xl font-mono">{formatTime(seconds)}</div>
                    <Button
                    name={"Arrêter"}
                        isIconOnly
                        onPress={stopRecording}
                        className="ml-4 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        <Mic />
                    </Button>
                </div>
            )}
            <Input
                startContent={<Avatar alt="photo" src={"/img/men.png"} className="w-8 h-8 text-gray-500" />}
                className="flex-1 -pl-2"
                placeholder="Votre message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                endContent={
                    <div className="flex items-center gap-2">
                        <input
                            type="file"
                            multiple
                            hidden
                            ref={fileInputRef}
                            accept="image/*,video/*,audio/*,application/pdf"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="file-upload">  <FileIcon size={22} className="mr-2 text-[#28B0E6] cursor-pointer" onClick={() => fileInputRef.current?.click()} /></label>

                        <Mic className={clsx({ "text-primary": recording, "text-gray-500": !recording }, "cursor-pointer ")} onClick={recording ? stopRecording : startRecording} />
                        <Divider orientation={"vertical"} className="w-px h-4 bg-gray-500" />
                        <Send className="text-primary cursor-pointer " onClick={handleSendMessage} />
                    </div>
                }
            />
        </div>
    );
}

export default ChatInputComponent;
