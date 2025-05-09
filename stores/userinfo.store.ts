/* eslint-disable @typescript-eslint/no-explicit-any */
import { UsersServices } from "@/services/users/users.service";
import { toast } from "react-toastify";
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
    handleUpdateUser: (user: any) => void;
}

export const useUserInfoStore = create<UserInfoDto>((set) => ({

    userInfo: initialUserInfo,
    setUserInfo: (userInfo) => set({ userInfo }),
    isLoading: false,
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
    handleUpdateUser: async (user: any) => {
        set({ isLoading: true })
        try {
            const token = localStorage.getItem('accessToken');
            const usersServices = new UsersServices(token || "");

            const toastId = toast.loading(`Mise à jour de la demande...`);

            const data = {
                lastName: user.lastName,
                firstName: user.firstName,
                username: user.username,
            };

            usersServices.updateUser(data).then((response) => {
                const { data } = response.data;

                set((state: any) => ({
                    isLoading: false,
                    userInfo: { ...state.userInfo, ...data }

                }));

                toast.update(toastId, {
                    render: "Mise à jour réussie",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            }).catch((error) => {
                console.log(error);
                set({ isLoading: false })
                toast.update(toastId, {
                    render: "Erreur lors de la mise à jour",
                    type: "error",
                    isLoading: false,
                    autoClose: 5000
                })
                console.error(error)
            })

        } catch (error) {
            set({ isLoading: false })
            toast.error(`Erreur lors de la mise à jour`)
            console.error(error)
        }
    }
}));