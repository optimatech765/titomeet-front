/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { toast } from "react-toastify";
import { UsersServices } from "@/services/users/users.service";
import { paramsToQueryString, QyeryParamsDto } from "@/utils/functions/other.functions";
import { ColumnsDto } from "@/utils/dto/colums.dto";
// Assure-toi d'avoir un service API pour les users

interface UserDto {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface DataListConfig {
  page: number;
  totalItems: number;
  perPageItems: number;
  isSearch: boolean;
  searchValue: string;
}



interface UserStore {
  dataListConfig: DataListConfig;
  isLoading: boolean;
  isSubmit: boolean;
  users: UserDto[];
  columnsValue: ColumnsDto[]
  setUsers: (newData: UserDto[]) => void;
  updateUser: (id: string, newData: UserDto) => void;
  deleteUser: (id: string) => void;
  fetchUsers: (params?: QyeryParamsDto) => Promise<void>;
  handleSubmit: (data: UserDto) => Promise<void>;
}

const columns = [
  { name: "Nom utilisateur", uid: "username", sortable: true },
  { name: "Email", uid: "email", sortable: true },
  { name: "Prénom(s)", uid: "firstName", sortable: true },
  { name: "Nom", uid: "lastName", sortable: true },
  { name: "Role", uid: "role", sortable: true },
]

export const useUserStore = create<UserStore>((set, get) => ({
  dataListConfig: {
    page: 1,
    totalItems: 0,
    perPageItems: 25,
    isSearch: false,
    searchValue: "",
  },
  columnsValue: columns,
  isLoading: false,
  isSubmit: false,
  users: [],

  /** Met à jour la liste des utilisateurs */
  setUsers: (newData) => set({ users: [...newData] }),

  /** Met à jour un utilisateur */
  updateUser: (id, newData) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...newData } : user
      ),
    })),

  /** Supprime un utilisateur */
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),

  /** Récupère la liste des utilisateurs */
  fetchUsers: async (searchParams?: QyeryParamsDto) => {
    set({ isLoading: true });
    try {
      const queryString = paramsToQueryString(searchParams || {});

      const { page, perPageItems, searchValue, isSearch } = get().dataListConfig;

      const token = localStorage.getItem("accessToken") || "";
      const userService = new UsersServices(token)
      const response = await userService.getUsers(queryString);

      const { items, total } = response.data; 

      set((state) => ({
        isLoading: false,
        users: items,
        dataListConfig: { ...state.dataListConfig, totalItems: total },
      }));
    } catch (error) {
      console.error("Erreur fetchUsers:", error);
      set({ isLoading: false });
      toast.error("Erreur lors du chargement des utilisateurs");
    }
  },

  /** Ajoute un utilisateur */
  handleSubmit: async (data) => {
    set({ isSubmit: true });
    const toastId = toast.loading("Ajout en cours...");

    try {
      const token = localStorage.getItem("accessToken") || "";
      const userService = new UsersServices(token)
      const response = await userService.addUser(data);
      const newUser: UserDto = response.data;

      set((state) => ({
        isSubmit: false,
        users: [...state.users, newUser],
      }));

      toast.update(toastId, {
        render: "Utilisateur ajouté avec succès",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Erreur handleSubmit:", error);
      set({ isSubmit: false });

      toast.update(toastId, {
        render: "Erreur lors de l'ajout",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  },
}));
