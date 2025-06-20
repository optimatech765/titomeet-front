/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { AdminState } from "@/services/admin/admin.state.services";
import { toast } from "react-toastify";
import { create } from "zustand";

interface AdminStateStoreDto {
    isLoading: boolean;
    valueList: any,
    setValueList: (newData: any[]) => void;
    fetchList: () => void;
}
export const UseAdminStateStore = create<AdminStateStoreDto>((set) => ({
    isLoading: true,
    valueList: [],
    setValueList: (newData: any[]) => set(() => ({ valueList: [...newData] })),
    fetchList: async () => {
        try {
            set(() => ({ isLoading: true }));
            const token = localStorage.getItem('accessToken');
            const adminState = new AdminState(token || "");
            adminState.getHomeState().then(
                (res) => {
                    const {  data } = res;
                    console.log(data)
                    set(() => ({ isLoading: false, valueList: data }))
                   
                },
                (error) => {
                   toast.error("Erreur lors de la récupération des détails");
                    console.log(error)
                    set(() => ({ isLoading: false }));
                }
            )
        } catch (error) {
            console.log(error)
            toast.error("Erreur lors de la récupération des détails");
            set(() => ({ isLoading: false }));
        }
    },
}));