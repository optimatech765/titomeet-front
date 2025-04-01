/* eslint-disable @typescript-eslint/no-explicit-any */
import { categoriesServices } from "@/services/categories/categories.services";
import { CategorieDto } from "@/utils/dto/categorie.dto";
import { toast } from "react-toastify";
import { create } from "zustand";

interface EventCategoriesStoreDto {
    DataListConfig: {
        page: number;
        totalItems: number;
        perPageItems: number;
        isSearch: boolean;
        searchValue: string;
    };
    isLoading: boolean;
    isSubmit: boolean;
    dataList: CategorieDto[];
    setEventCategories: (newData: CategorieDto[]) => void;
    updateEventCategories: (id: string, newData: CategorieDto) => void;
    deleteEventCategories: (id: string) => void;
    fetchCategoriesList: () => void;
    handleSubmit: (data: CategorieDto) => void;
}

export const EventCategorieStore = create<EventCategoriesStoreDto>((set) => ({
    DataListConfig: {
        page: 1,
        totalItems: 0,
        perPageItems: 25,
        isSearch: false,
        searchValue: "",
    },
    isSubmit: false,
    dataList: [],
    isLoading: true,
    setEventCategories: (newData: CategorieDto[]) =>
        set(() => ({
            dataList: [...newData],
        })),
    updateEventCategories: (id: string, newData: CategorieDto) =>
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
    deleteEventCategories: (id: string) =>
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
    fetchCategoriesList: async () => {
        try {
            set(() => ({
                isLoading: true,
            }));

            categoriesServices
                .getCategories()
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
    handleSubmit: async (data: CategorieDto) => {
        try {
            set(() => ({
                isSubmit: true,
            }));

            const toastId = toast.loading("Enregistrement en cours...");
            categoriesServices
                .addCategories(data)
                .then(
                    (response) => {
                        const data = response.data;

                        set((state: EventCategoriesStoreDto) => ({
                            isSubmit: false,
                            dataList: [...state.dataList, data],

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
}));