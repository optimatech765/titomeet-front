/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { parseAbsoluteToLocal, parseDate } from '@internationalized/date';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventDto, EventDtoResponse } from "@/utils/dto/events.dto";
import { create } from "zustand";
import { paramsToQueryString, QyeryParamsDto } from '@/utils/functions/other.functions';
import { EventServices } from '@/services/events/event.services';


type EventStore = {
    DataListConfig: {
        page: number;
        totalItems: number;
        perPageItems: number;
        isSearch: boolean;
        searchValue: string;
    };
    singleEvent: EventDtoResponse;
    dataList: EventDtoResponse[];
    data: EventDto;
    isLoading: boolean;
    updateEventData: (keys: string, value: any) => void;
    setEventData: (newData: any) => void;
    UpdateEventsDataList: (id: string, newData: any) => void;
    deleteEventData: (id: string) => void;
    AddNewEventData: (newData: any) => void;
    setEventDataList: (newData: any) => void;
    setDataListConfig: (newData: any) => void;
    updateDataListConfig: (newData: any) => void;
    fetchEventList: (searchParams?: any) => Promise<void>;
    fetchSingleEvent: (id: string) => Promise<void>;
    fetchSingleEventDetails: (id: string) => Promise<void>;
    resetData: () => void;
}

const initialEventState: EventDto = {
    categories: "",
    name: "",
    description: "",
    badge: "",
    coverPicture: "",
    addressId: "",
    capacity: 0,
    tags: [],
    accessType: "FREE",
    prices: [],
    visibility: "PUBLIC",
    startDate: parseDate(new Date().toISOString().split('T')[0]),
    endDate: parseDate(new Date().toISOString().split('T')[0]),
    startTime: parseAbsoluteToLocal(new Date().toISOString()),
    endTime: parseAbsoluteToLocal(new Date().toISOString()),
    isDraft: false,
    providers: []
}




export const useAttendeeEventsStore = create<EventStore>((set) => ({
    DataListConfig: {
        page: 1,
        totalItems: 0,
        perPageItems: 25,
        isSearch: false,
        searchValue: "",
    },
    singleEvent: {} as EventDtoResponse,
    dataList: [],
    data: initialEventState,
    isLoading: true,
    updateEventData: (keys: string, value: any) =>
        set((state: any) => {
            return {
                data: {
                    ...state.data,
                    [keys]: value,
                },
            };
        }),

    setEventData: (newData: any) =>
        set(() => ({
            data: { ...newData },
        })),

    UpdateEventsDataList: (id: string, newData: any) =>
        set((state: any) => {
            const index = state.dataList.findIndex((item: any) => item.id === id);

            if (index === -1) {
                // Si aucune adresse avec cet ID n'est trouvée, on renvoie l'état inchangé
                return state;
            }

            // Cloner l'objet trouvé pour ne pas muter l'état directement
            const updatedData = { ...state.dataList[index], ...newData };

            // Créer une nouvelle liste d'adresses avec l'adresse mise à jour
            const updatedDataList = [...state.dataList];
            updatedDataList[index] = updatedData;

            // Retourner le nouvel état avec la liste d'adresses mise à jour
            return { dataList: [...updatedDataList] };
        }),
    deleteEventData: (id: string) =>
        set((state: any) => {
            const index = state.dataList.findIndex((item: any) => item.id === id);

            if (index === -1) {
                // Si aucune adresse avec cet ID n'est trouvée, on renvoie l'état inchangé
                return state;
            }

            // Cloner l'objet trouvé pour ne pas muter l'état directement
            const updatedData = state.dataList.filter((item: any) => item?.id !== id);

            // Retourner le nouvel état avec la liste d'adresses mise à jour
            return { dataList: [...updatedData] };
        }),
    AddNewEventData: (newData: any) =>
        set((state: any) => ({
            dataList: [...state.dataList, { ...newData }],
        })),
    setEventDataList: (newData: any) =>
        set(() => ({
            dataList: [...newData],
        })),

    setDataListConfig: (newData: any) =>
        set(() => ({
            DataListConfig: { ...newData },
        })),
    updateDataListConfig: (newData: any) =>
        set((state: any) => ({
            DataListConfig: { ...state.DataListConfig, ...newData },
        })),

    fetchEventList: async (searchParams?: QyeryParamsDto) => {
        try {
            console.log("Salut la famille")
            const queryString = paramsToQueryString(searchParams || {});
            set(() => ({
                isLoading: true,
            }));
            const token = localStorage?.getItem('accessToken') || "";
            const eventServices = new EventServices(token);
            eventServices
                .getEvents(queryString)
                .then(
                    (response) => {
                        const { items, total, page, limit } = response.data;

                        set(() => ({
                            isLoading: false,
                            dataList: [...items],
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
    fetchSingleEvent: async (id: string) => {
        try {
            set(() => ({
                isLoading: true,
            }));
            const token = localStorage?.getItem('accessToken') || "";
            const eventServices = new EventServices(token);
            eventServices
                .getEvent(id)
                .then(
                    async (response) => {
                        console.log("Hello la famille", response.data)
                        const coverPicture = await convertToBlob(response.data.coverPicture);
                        const badge = await convertToBlob(response.data.badge);

                        set(() => ({
                            isLoading: false,
                            singleEvent: {
                                ...response.data,
                                coverPicture: coverPicture,
                                badge: badge,
                                startDate: parseDate(response.data.startDate.split('T')[0]),
                                endDate: parseDate(response.data.endDate.split('T')[0]),
                                startTime: parseAbsoluteToLocal(response.data.startDate.split('T')[0] + "T" + response.data.startTime + "Z"),
                                endTime: parseAbsoluteToLocal(response.data.endDate.split('T')[0] + "T" + response.data.endTime + "Z"),
                            },
                            data: {
                                ...response.data,
                                startDate: parseDate(response.data.startDate.split('T')[0]),
                                endDate: parseDate(response.data.endDate.split('T')[0]),
                                startTime: parseAbsoluteToLocal(response.data.startDate.split('T')[0] + "T" + response.data.startTime + "Z"),
                                endTime: parseAbsoluteToLocal(response.data.endDate.split('T')[0] + "T" + response.data.endTime + "Z"),
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
    fetchSingleEventDetails: async (id: string) => {
        try {
            set(() => ({
                isLoading: true,
            }));
            const token = localStorage?.getItem('accessToken') || "";
            const eventServices = new EventServices(token);

            eventServices
                .getEvent(id)
                .then(
                    async (response) => {
                        set(() => ({
                            isLoading: false,
                            singleEvent: {
                                ...response.data
                            },
                            data: {
                                ...response.data,
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
    resetData: () =>
        set(() => {
            return { dataList: [] };
        }),
}));

const convertToBlob = async (file: string) => {
    const response = await fetch(file);
    const blob = await response.blob();
    return blob;
}