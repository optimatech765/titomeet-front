/* eslint-disable @typescript-eslint/no-explicit-any */
import { UsersServices } from "@/services/users/users.service";
import { create } from "zustand";

interface UserDto {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    role: string;
    permissions: string[];
    address: string;
}

const initialUserInfo: UserDto = {
    id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    role: "",
    permissions: [],
    address: "",
}

interface UserInfoDto {
    userInfo: UserDto | null;
    setUserInfo: (userInfo: UserDto) => void;
    updateUserInfo: (key: string, value: string) => void;
    fetchUserInfo: () => void;
    isLoading: boolean;
}

export const useUserInfoStore = create<UserInfoDto>((set) => ({

    userInfo: initialUserInfo,
    setUserInfo: (userInfo) => set({ userInfo }),
    isLoading: true,
    fetchUserInfo: async () => {
        try {
            const token = localStorage.getItem('accessToken');
            const usersServices = new UsersServices(token || "");
            set(() => ({
                isLoading: true,
            }));
            const response = await usersServices.userInfo();
            set((state: any) => ({
                ...state,
                userInfo: response.data,
                isLoading: false
            }));
        } catch (error) {
            set(() => ({
                isLoading: false,
            }));
            console.log(error);
        }
    },
    updateUserInfo: (key: string, value: string) => set((state: any) => ({ ...state, userInfo: { ...state.userInfo, [key]: value } })),
}));