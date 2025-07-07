/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ChatStore } from "@/stores/chat.store";
import { Input, Divider, Button } from "@heroui/react";
import { Search } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { ChatSection } from "./chat.section";
import { ChatListComponent } from "./chat.list.component";
import { useSocketIoListener } from "@/hooks/useSocket";
import ChatInfoComponent from "./chatInfo.component";
import { useSearchParams } from "next/navigation";

export const MessagePageContent = () => {
    const { fetchChatList, chats, setCurrentChat, reorderChatList } = ChatStore();
    const [isMobile, setIsMobile] = useState(false);
    const [showConversations, setShowConversations] = useState(false);
    const [showInformations, setShowInformations] = useState(false);
    const [filterData, setFilterData] = useState("");
    const params = useSearchParams();
    const chatId = params.get("chatId");
    useSocketIoListener("events.sockets.newMessage", (message: any) => {
        reorderChatList(message.message.chatId);
    });
    useEffect(() => {
        fetchChatList();
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // initial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect(() => {
        if (chatId && chatId !== "undefined") {
            const chat = chats.find((item: any) => chatId === item.eventId);
            setCurrentChat(chat);
        }
    }, [chatId]);

    const filteredList = filterData === "" ? chats : chats.filter((chat: any) => chat.name.toLowerCase().includes(filterData.toLowerCase()));

    return (
        <Suspense fallback={<div className="h-screen"></div>}>
            <div className="m-2 section-container h-[90vh] overflow-hidden">
                <div className="grid grid-cols-12 gap-1 h-screen relative md:border rounded-md">

                    {/* === Sidebar Conversations === */}
                    {!isMobile ? (
                        <div className="col-span-3 md:bg-[#F8F8F8] rounded-s-xl p-4">
                            <h2 className="text-lg font-semibold mb-4">
                                Messages <span className="text-blue-500">({filteredList?.length})</span>
                            </h2>
                            <Divider className="my-2" />
                            <div className="relative mb-4">
                                <Input
                                    value={filterData}
                                    onChange={(e) => setFilterData(e.target.value)}
                                    radius="full"
                                    startContent={<Search className=" text-primary" size={18} />}
                                    className="border-gray-500 border-1 rounded-full"
                                    placeholder="Rechercher"
                                />
                            </div>
                            <div className="relative overflow-scroll max-h-[400px] navscroll ">

                                <div className="space-y-3 mt-4 pt-2 ">
                                    {filteredList.map((chat, index) => (
                                        < ChatListComponent key={index} chat={chat} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Button
                                name={"Discussions"}
                                onPress={() => setShowConversations(true)}
                                className=" left-4 bg-secondary-blue text-white p-2 rounded-lg shadow"
                            >
                                Discussions
                            </Button>
                            {showConversations && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
                                    <div className="absolute left-0 top-0 w-4/5 bg-[#F8F8F8] h-full p-4">
                                        <button
                                            name={"Fermer"}
                                            className="absolute top-4 right-4 text-black"
                                            onClick={() => setShowConversations(false)}
                                        >
                                            ✕
                                        </button>
                                        <h2 className="text-lg font-semibold mb-4">
                                            Messages <span className="text-blue-500">({chats.length})</span>
                                        </h2>
                                        <Divider className="my-2" />
                                        <div className="relative mb-4">
                                            <Input
                                                value={filterData}
                                                onChange={(e) => setFilterData(e.target.value)}
                                                radius="full"
                                                startContent={<Search className=" text-primary" size={18} />}
                                                className="border-gray-500 border-1 rounded-full"
                                                placeholder="Rechercher"
                                            />
                                        </div>
                                        <div className="relative overflow-scroll max-h-[400px] navscroll ">

                                            <div className="space-y-3 mt-4 pt-2 ">
                                                {filteredList.map((chat, index) => (
                                                    < ChatListComponent key={index} chat={chat} index={index} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {/* === Chat Principal === */}
                    <div className={`${(isMobile) ? "col-span-12" : (!showInformations && !isMobile) ? "col-span-9" : "col-span-6"} h-screen `}>
                        <ChatSection showInfo={showInformations} setShowInfo={setShowInformations} />
                    </div>

                    {/* === Sidebar Informations === */}
                    {!isMobile && showInformations && (
                        <div className="col-span-3 bg-[#F8F8F8] px-4 rounded-e-xl shadow-lg">
                            <ChatInfoComponent setShowInfo={setShowInformations} />
                        </div>
                    )}

                    {isMobile && showInformations && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
                            <div className="absolute right-0 top-0 w-4/5 bg-[#F8F8F8] h-full p-4">
                                <button
                                    name={"Fermer"}
                                    className="absolute top-4 left-4 text-black"
                                    onClick={() => setShowInformations(false)}
                                >
                                    ✕
                                </button>
                                <ChatInfoComponent setShowInfo={setShowInformations} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Suspense>

    );
}
