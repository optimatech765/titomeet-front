/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProvidersServices } from "@/services/providers/providers.services";
import { ProviderDto } from "@/utils/dto/providers.dto";
import { create } from "zustand";


const columns = [
    { name: "Nom", uid: "name", sortable: true },
    { name: "Description", uid: "description", sortable: true },
    { name: "Adresse", uid: "address", sortable: true },
    { name: "Catégorie", uid: "address", sortable: false },
    { name: "ACTIONS", uid: "actions", sortable: false },
];

interface UseProviderDto {
    DataListConfig: {
        page: number;
        totalItems: number;
        perPageItems: number;
        isSearch: boolean;
        searchValue: string;
    };
    columnsValue: any[];
    isLoading: boolean;
    dataList: any[];
    setProviders: (newData: any[]) => void;
    updateProviders: (id: string, newData: any) => void;
    deleteProviders: (id: string) => void;
    fetchProvidersList: () => void;
}

export const useProvidersStore = create<UseProviderDto>((set) => ({
    DataListConfig: {
        page: 1,
        totalItems: 0,
        perPageItems: 25,
        isSearch: false,
        searchValue: "",
    },
    columnsValue: columns,
    dataList: [],
    isLoading: true,
    setProviders: (newData: ProviderDto[]) =>
        set(() => ({
            dataList: [...newData],
        })),
    updateProviders: (id: string, newData: ProviderDto) =>
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
    deleteProviders: (id: string) =>
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
    fetchProvidersList: async () => {
        try {
            set(() => ({
                isLoading: true,
            }));

            const token = localStorage.getItem('accessToken');
            const providersServices = new ProvidersServices(token || "");

            providersServices
                .getProvders()
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
}));