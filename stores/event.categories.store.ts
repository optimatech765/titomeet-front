/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategorieDto } from "@/utils/dto/categorie.dto";
import { create } from "zustand";

interface EventCategoriesStoreDto {
    dataList: CategorieDto[];
    setEventCategories: (newData: CategorieDto[]) => void;
    updateEventCategories: (id: string, newData: CategorieDto) => void;
    deleteEventCategories: (id: string) => void;
}

export const EventCategorieStore = create<EventCategoriesStoreDto>((set) => ({
    dataList: [],
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
}));