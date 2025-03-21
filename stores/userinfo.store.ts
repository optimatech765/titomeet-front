/* eslint-disable @typescript-eslint/no-explicit-any */
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
}

export const useUserInfoStore = create<UserInfoDto>((set) => ({
    userInfo: initialUserInfo,
    setUserInfo: (userInfo) => set({ userInfo }),
    updateUserInfo: (key: string, value: string) => set((state: any) => ({ ...state, userInfo: { ...state.userInfo, [key]: value } })),
}));