"use client";
import { Button } from "@heroui/button";
import clsx from "clsx";
import { Bell, MessageCircle, MessageCircleMore } from "lucide-react";

const notifications = [
    {
        id: 1,
        type: "event",
        title: "Inscription confirmée pour l'évènement After work",
        description: "",
        time: "10:05",
        buttonText: "Accéder à l'évènement",
        icon: <Bell className="md:w-6 md:h-6 w-3 h-3 text-red-500" />,
    },
    {
        id: 2,
        type: "reminder",
        title: "Rappel pour l'évènement After",
        description: "Plus que deux jours (02) avant cet évènement\nNe le ratez pas",
        time: "10:05",
        icon: <Bell className="md:w-6 md:h-6 w-3 h-3 text-orange-500" />,
    },
    {
        id: 3,
        type: "message",
        title: "Nouveaux messages dans le groupe After Work event",
        description: "",
        time: "10:05",
        buttonText: "Accéder à la discussion",
        icon: <MessageCircle className="md:w-6 md:h-6 w-3 h-3 text-blue-500" />,
    },
];

export const NotificationsCardComponent = () => {
    return (
        <div className="max-w-2xl md:p-4 text-black ">
            <h1 className="text-2xl font-bold mb-4 text-foreground ">Notifications</h1>
            <div className="bg-[#F8F8F8] shadow-md rounded-lg p-2 md:p-4 space-y-2">
                {notifications.map((notif, index) => (
                    <div key={notif.id} className={clsx({ "bg-white": index == 0 || index == 1 }, "flex  items-start gap-2 md:gap-4 p-3  rounded-lg hover:bg-white cursor-pointer ")}>
                        <div className="p-2 bg-gray-200 rounded-full">
                            {notif.icon}
                        </div>
                        <div className="md:flex justify-between flex-1  items-start">
                            <div className="flex-1 space-y-1.5">
                                <h2 className=" text-xs md:text-xl font-extralight md:font-semibold">{notif.title}</h2>
                                {notif.description && (
                                    <p className="text-gray-600 text-sm whitespace-pre-line">
                                        {notif.description}
                                    </p>
                                )}

                                {notif.buttonText && (
                                    <Button variant={"ghost"}
                                        startContent={<MessageCircleMore className="h-3 w-3 md:w-4 md:h-4 font-semibold" />}
                                        color="danger"
                                        size="sm"
                                        radius={"full"}
                                        className="px-0 sm:px-1 md:px-3 py-1 text-sx font-extralight  md:font-normal md:text-sm text-primary border border-primary hover:bg-primary hover:text-white transition">
                                        {notif.buttonText}
                                    </Button>
                                )}
                            </div>
                            <div className="text-gray-400 text-right text-sm">{notif.time}</div>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
}
