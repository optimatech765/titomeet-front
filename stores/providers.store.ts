/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProvidersServices } from "@/services/providers/providers.services";
import { ProviderDto } from "@/utils/dto/providers.dto";
import { toast } from "react-toastify";
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
    isSubmit: boolean;
    dataList: any[];
    setProviders: (newData: any[]) => void;
    updateProviders: (id: string, newData: any) => void;
    deleteProviders: (id: string) => void;
    fetchProvidersList: () => void;
    providersCategoriesList: any[];
    handleSubmitProvidersCategories: (data: any) => void;
    fetchProvidersCategoriesList: () => void;
    providerData: ProviderDto;
    setProviderData: (newData: any) => void;
    updateProviderData: (key: string, value: any) => void;
    fetchIsLoading: boolean;
}

export const useProvidersStore = create<UseProviderDto>((set) => ({
    DataListConfig: {
        page: 1,
        totalItems: 0,
        perPageItems: 25,
        isSearch: false,
        searchValue: "",
    },
    providerData: {} as ProviderDto,
    columnsValue: columns,
    dataList: [],
    isLoading: true,
    fetchIsLoading: false,
    isSubmit: false,
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
                fetchIsLoading: true,
            }));

            const token = localStorage.getItem('accessToken');
            const providersServices = new ProvidersServices(token || "");

            providersServices
                .getProvders()
                .then(
                    (response) => {

                        const { items, total, page, limit } = response.data;
                        console.log(items);
                        set(() => ({
                            fetchIsLoading: false,
                            dataList: items,
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
                            fetchIsLoading: false,
                        }));
                        console.log(error);
                    }
                );

        } catch (error) {
            set(() => ({
                fetchIsLoading: false,
            }));
            console.error("Erreur lors de la récupération des détails :", error);
        }
    },
    providersCategoriesList: [],
    handleSubmitProvidersCategories: async (data: any) => {
        try {
            set(() => ({
                isSubmit: true,
            }));

            const token = localStorage.getItem('accessToken');
            const providersServices = new ProvidersServices(token || "");

            const toastId = toast.loading("Enregistrement en cours...");
            providersServices
                .addProvidersCategories(data)
                .then(
                    (response) => {
                        const data = response.data;

                        set((state: any) => ({
                            isSubmit: false,
                            providersCategoriesList: [...state.providersCategoriesList, data],

                        }));
                        toast.update(toastId, {
                            render: "Enregistrement réussi",
                            type: "success",
                            isLoading: false,
                            autoClose: 5000,
                        });
                    },
                    (error) => {
                        set(() => ({
                            isSubmit: false,
                        }));
                        console.log(error);
                        toast.update(toastId, {
                            render: "Erreur lors de l'enregistrement",
                            type: "error",
                            isLoading: false,
                            autoClose: 5000,
                        });
                    }
                );
        } catch (error) {
            set(() => ({
                isSubmit: false,
            }));
            console.error("Erreur lors de la récupération des détails :", error);
            toast.error("Erreur lors de l'enegistrement");
        }
    },
    fetchProvidersCategoriesList: async () => {
        try {
            set(() => ({
                isLoading: true,
            }));

            const token = localStorage.getItem('accessToken');
            const providersServices = new ProvidersServices(token || "");

            providersServices
                .getProvidersCategories()
                .then(
                    (response) => {
                        const { items, total, page, limit } = response.data;

                        set(() => ({
                            isLoading: false,
                            providersCategoriesList: [...items],
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
    setProviderData: (newData: any) =>
        set(() => ({
            providerData: newData,
        })),
    updateProviderData: (key: string, value: any) =>
        set((state: any) => {
            const updatedData = { ...state.providerData, [key]: value };
            return { providerData: updatedData };
        }),

}));
