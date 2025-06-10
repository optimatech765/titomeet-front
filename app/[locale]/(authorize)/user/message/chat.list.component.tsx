/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChatStore } from '@/stores/chat.store';
import { Avatar } from '@heroui/react';
import clsx from 'clsx';
import { CheckCheck } from 'lucide-react';
import React from 'react';

interface ChatListComponentProps {
    chat: any;
    index: number;
}
export const ChatListComponent = ({ chat, index }: ChatListComponentProps) => {
    const { setCurrentChat, currentChat } = ChatStore();

    return (
        <div
            onClick={() => setCurrentChat(chat)}
            key={index}
            className={clsx({ "bg-[#F8F8F8]": currentChat.id !== chat.id, "bg-white": currentChat.id === chat.id }, "flex shadow-none border-none items-center p-3 cursor-pointer hover:bg-gray-200 rounded-lg")}>
            <div className="grid grid-cols-12 gap-2 p-0">
                {/* Avatar dans la colonne 2 */}
                <div className="col-span-2 flex items-center justify-center">
                    <Avatar
                        size="sm"
                        name={
                            currentChat?.name
                                ? currentChat.name.charAt(0) + currentChat.name.charAt(1)
                                : ""
                        }
                        className="m2-3"
                    />
                </div>

                {/* Contenu principal dans les 10 colonnes restantes */}
                <div className="flex-1 col-span-10 flex justify-between items-center">
                    <div>
                        <p className="text-sm font-normal lg:font-medium break-words">
                            {chat?.name}
                        </p>
                        {/* <p className="text-xs text-gray-500">John: Salut ici, comment allez...</p> */}
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs text-gray-500">10:05</span>
                        {index > 2 ? (
                            <div className="px-1 text-xs py-0.5 bg-[#28B0E6] text-white w-fit rounded-full">
                                23
                            </div>
                        ) : (
                            <CheckCheck className="text-[#28B0E6] text-xs py-0.5 w-fit rounded-full" />
                        )}
                    </div>
                </div>
            </div>


        </div>
    );
}
