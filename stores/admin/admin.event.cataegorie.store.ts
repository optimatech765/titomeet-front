import { ColumnsDto } from "@/utils/dto/colums.dto";
import { create } from "zustand";


const columns = [
    { name: "Nom", uid: "name", sortable: true },
    { name: "Description", uid: "description", sortable: true },
    { name: "ACTIONS", uid: "actions", sortable: false },
];


interface EventCategoryStoreDto {
    columnsValue: ColumnsDto[];
    dataList: EventCategoryDto[];
    fetchEventCategoriesList: () => void;
}

interface EventCategoryDto {
    id?: string;
    name: string;
    description: string;
    created_at?: string;
    updated_at?: string;
}
export const useAdminEventCategoriesStore = create<EventCategoryStoreDto>((set) => ({
    columnsValue: columns,
    dataList: [],
    fetchEventCategoriesList: async () => {
        const response = await fetch(`/api/admin/event-categories`);
        const data = await response.json();
        set({ dataList: data });
    },
}));