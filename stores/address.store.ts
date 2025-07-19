"use client"
import { AddressServices } from "@/services/address/address.services";
import { AddressDto } from "@/utils/dto/address.dto";
import { create } from "zustand";


interface AddressStoreDto {
    DataListConfig: {
        page: number;
        totalItems: number;
        perPageItems: number;
        isSearch: boolean;
        searchValue: string;
    };
    dataList: AddressDto[];
    isLoading: boolean;
    fetchAddressList: (params: string) => void;
}

export const AddressStore = create<AddressStoreDto>((set) => ({
    DataListConfig: {
        page: 1,
        totalItems: 0,
        perPageItems: 25,
        isSearch: false,
        searchValue: "",
    },
    dataList: [],
    isLoading: true,
    fetchAddressList: async (query: string) => {
        try {
            set(() => ({
                isLoading: true,
            }));
            const token = localStorage?.getItem('accessToken') || "";
            const addressServices = new AddressServices(token);
            addressServices
                .getAddresses(query)
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