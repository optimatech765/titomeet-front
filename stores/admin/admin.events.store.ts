/* eslint-disable @typescript-eslint/no-explicit-any */
import { AdminEventsServices } from "@/services/admin/admin.events.services";
import { EventDtoResponse } from "@/utils/dto/events.dto";
import { toast } from "react-toastify";
import { create } from "zustand";

interface SortDescriptorDto {
    column: string;
    direction: string;
}
interface AdminEventsStoreDto {
    isLoading: boolean;
    valueList: EventDtoResponse[],
    setValueList: (newData: EventDtoResponse[]) => void;
    columnsValue: any[];
    page: number;
    setPage: (value: number) => void;
    totalPage: number,
    hasSearchFilter: boolean;
    filterList: (value: string) => void;
    fetchList: () => void;
    updateEventData: (id: string, value: any) => void;
    sortList: (value: SortDescriptorDto) => void
}

const columns = [
    { name: "Date", uid: "date", sortable: true },
    { name: "Evènement", uid: "event", sortable: true },
    { name: "CATEGORIE", uid: "category", sortable: true },
    { name: "ORGANISATEUR", uid: "organisation", sortable: true },
    { name: "PARTICIPANTS", uid: "participants", sortable: true },
    { name: "Statut", uid: "status", sortable: true },
    { name: "ACTIONS", uid: "actions", sortable: false },
];


export const useAdminEventsStore = create<AdminEventsStoreDto>((set) => ({

    isLoading: false,
    valueList: [],
    columnsValue: columns,
    page: 1,
    totalPage: 0,
    hasSearchFilter: false,
    setPage: (value: number) => set(() => ({ page: value })),

    // pour mettre à jour la liste de évènements
    setValueList: (newData: EventDtoResponse[]) => set(() => ({ valueList: [...newData] })),

    // Pour filter la liste des évènements depuis la db
    filterList: async (value: string) => {
        try {
            console.log(value)
        } catch (error) {
            toast.error("Erreur lors de la récupération des détails");
            console.log(error)
        }
        // set(() => ({ filterValue:value }))
    },

    // Pour récupérer la liste des évènements depuis la db
    fetchList: async () => {
        try {
            set(() => ({ isLoading: true }));
            const token = localStorage.getItem('accessToken');
            const adminEvents = new AdminEventsServices(token || "");
            adminEvents.getEvents("limit=2").then(
                (res) => {
                    const { data } = res;
                    console.log(data)
                    set(() => ({ isLoading: false, valueList: data.items }))

                },
                (error) => {
                    toast.error("Erreur lors de la récupération des détails");
                    console.log(error)
                    set(() => ({ isLoading: false }));
                }
            )
        } catch (error) {
            set(() => ({ isLoading: false }));
            toast.error("Erreur lors de la récupération des détails");
            console.log(error)
        }
    },

    // Pour mettre à jour les données d'un évènement
    updateEventData: async (id: string, value: any) => {
        try {
            console.log("Salut la famille")
            set((state: any) => ({ ...state, valueList: state.valueList.map((item: any) => item.id === id ? { ...item, ...value } : item) }))
        } catch (error) {
            toast.error("Erreur lors de la récupération des détails");
            console.log(error)
        }
    },

    // pour trier la liste des évènements
    sortList: (value: SortDescriptorDto) => set((state: any) => ({
        ...state,
        valueList: state.valueList.sort((a: any, b: any) => {
            if (value.column === 'date') {
                return a[value.column].localeCompare(b[value.column]);
            }
            return a[value.column].localeCompare(b[value.column]);
        })
    }))

}));