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
    const { setCurrentChat } = ChatStore();
    
    return (
        <div
            onClick={() => setCurrentChat(chat)}
            key={index}
            className={clsx({ "bg-[#F8F8F8]": index != 0, "bg-white": index === 0 }, "flex shadow-none border-none items-center p-3 cursor-pointer hover:bg-gray-200 rounded-lg")}>
            <div className="block lg:grid grid-cols-12 gap-2 p-0">
                <div className="col-span-2">
                    <Avatar size="sm" src="/img/user-profile.png" className="mr-3" />
                </div>

                <div className="flex-1 col-span-10 flex justify-between ">
                    <div>
                        <p className=" text-sm font-normal  lg:font-medium">{chat?.name}</p>
                        {/* <p className="text-xs text-gray-500">John: Salut ici, comment allez...</p> */}
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs text-gray-500">10:05</span>
                        {index > 2 ?
                            <div color="primary" className="px-1 text-xs py-0.5 bg-[#28B0E6] text-white w-fit rounded-full">23</div> :
                            <CheckCheck className="text-[#28B0E6] text-xs py-0.5 w-fit rounded-full" />
                        }

                    </div>
                </div>

            </div>

        </div>
    );
}
