
import { NotificationsServices } from "@/services/notifications/notifcations.services";
import { NotificationDto } from "@/utils/dto/notification.dto";
import { create } from "zustand";

interface EventStore {
    DataListConfig: {
        page: number;
        totalItems: number;
        perPageItems: number;
        isSearch: boolean;
        searchValue: string;
    };
    notificationsList: NotificationDto[];
    isLoading: boolean;
    fetchNotificationsList: () => Promise<void>;

}

export const useNotificationsStore = create<EventStore>((set) => ({
    DataListConfig: {
        page: 1,
        totalItems: 0,
        perPageItems: 25,
        isSearch: false,
        searchValue: "",
    },
    notificationsList: [],
    isLoading: true,
    fetchNotificationsList: async () => {
        try {
            set(() => ({
                isLoading: true,
            }));

            const token = localStorage?.getItem('accessToken') || "";
            const notificationsServices = new NotificationsServices(token);
            notificationsServices
                .getNotifications()
                .then(
                    (response) => {
                        const { items, total, page, limit } = response.data;

                        set(() => ({
                            isLoading: false,
                            notificationsList: [...items],
                            DataListConfig: {
                                totalItems: total,
                                page: page,
                                perPageItems: limit,
                                isSearch: false,
                                searchValue: "",

                            }
                        }));
                    },
                    (error) => {
                        set(() => ({
                            isLoading: false,
                        }));
                        console.log(error);
                    }
                );

        } catch (error) {
            set(() => ({
                isLoading: false,
            }));
            console.error("Erreur lors de la récupération des détails :", error);
        }
    },

}))