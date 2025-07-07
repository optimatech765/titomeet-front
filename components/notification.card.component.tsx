"use client";
import { useNotificationsStore } from "@/stores/notifications.store";
import { Button } from "@heroui/button";
import clsx from "clsx";
import { MessageCircle, MessageCircleMore } from "lucide-react";
import { useEffect } from "react";


export const NotificationsCardComponent = () => {

    const { notificationsList, isLoading, fetchNotificationsList } = useNotificationsStore();

    useEffect(() => {
        fetchNotificationsList()
    }, []);

    return (
        <div className="max-w-2xl md:p-4 text-black ">
            <h1 className="text-2xl font-bold mb-4 text-foreground ">Notifications</h1>
            <div className="bg-[#F8F8F8] shadow-md rounded-lg p-2 md:p-4 space-y-2">
                {isLoading ? <>
                    <div className="flex flex-col items-center animate-pulse justify-center gap-4 text-center">
                        <h3 >Chargement ...</h3>
                    </div>
                </> :

                    <>
                        {notificationsList.length > 0 ? <>
                            {notificationsList.map((notif, index) => (
                                <div key={notif.id} className={clsx({ "bg-white": index == 0 || index == 1 }, "flex  items-start gap-2 md:gap-4 p-3  rounded-lg hover:bg-white cursor-pointer ")}>
                                    <div className="p-2 bg-gray-200 rounded-full">
                                        <MessageCircle className="md:w-6 md:h-6 w-3 h-3 text-blue-500" />
                                    </div>
                                    <div className="md:flex justify-between flex-1  items-start">
                                        <div className="flex-1 space-y-1.5">
                                            <h2 className=" text-xs md:text-xl font-extralight md:font-semibold">{notif.type}</h2>
                                            {notif.data && (
                                                <p className="text-gray-600 text-sm whitespace-pre-line">
                                                    {notif.data}
                                                </p>
                                            )}

                                            {notif.type === "message" && (
                                                <Button
                                                    name="Accéder"
                                                    variant={"ghost"}
                                                    startContent={<MessageCircleMore className="h-3 w-3 md:w-4 md:h-4 font-semibold" />}
                                                    color="danger"
                                                    size="sm"
                                                    radius={"full"}
                                                    className="px-0 sm:px-1 md:px-3 py-1 text-sx font-extralight  md:font-normal md:text-sm text-primary border border-primary hover:bg-primary hover:text-white transition">
                                                    Accéder
                                                </Button>
                                            )}
                                        </div>
                                        <div className="text-gray-400 text-right text-sm">{notif.createdAt}</div>
                                    </div>

                                </div>
                            ))}
                        </> : <>
                            <div className="flex flex-col items-center justify-center gap-4 text-center">
                                <h3>Aucune notification</h3>
                            </div>
                        </>}
                    </>}

            </div>
        </div>
    );
}
