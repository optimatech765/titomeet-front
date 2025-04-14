/* eslint-disable @typescript-eslint/no-explicit-any */
// stores/useGenericStore.ts
import { create } from 'zustand'
import { toast } from 'react-toastify'
import { paramsToQueryString } from '@/utils/functions/other.functions';
import { AdminProvidersServices } from '@/services/admin/admin.providers.services';

const columns = [
    { name: "Nom", uid: "username", sortable: true },
    { name: "Catégorie", uid: "category", sortable: true },
    { name: "Avis", uid: "address.name", sortable: true },
    { name: "Page", uid: "website", sortable: true },
    { name: "Actions", uid: "action", sortable: false },

]


interface HookInterface {
    columnsValue: any
    DataListConfig: any;
    isSubmitLoading: boolean;
    item: any;
    isLoading: boolean;
    items: any[];
    setItems: (items: any) => void;
    addItem: (item: any) => void;
    removeItem: (item: any) => void;
    updateItem: (item: any) => void;
    fetchItems: (searchParams?: any) => void;
    submitItem: (item: any) => void;
    submitDeleteItem: (item: any) => void;
    submitUpdateItem: (item: any) => void;
    fetchSingleItem: (id: string) => void;

}

export const useAdminProvidersStore = create<HookInterface>((set) => ({
    item: {},
    DataListConfig: {
        page: 1,
        totalItems: 0,
        perPageItems: 25,
        isSearch: false,
        searchValue: "",
    },
    columnsValue: columns,
    isSubmitLoading: false,
    isLoading: false,
    items: [],
    setItems: (items: any) => set({ items }),
    addItem: (item: any) => set((state: any) => ({ items: [...state.items, item] })),
    removeItem: (item: any) => set((state: any) => ({ items: state.items.filter((i: any) => i.id !== item.id) })),
    updateItem: (item: any) => set((state: any) => ({ items: state.items.map((i: any) => i.id === item.id ? item : i) })),
    fetchItems: async (searchParams?: any) => {
        const queryString = paramsToQueryString(searchParams || {});

        try {
            set({ isLoading: true })
            const token = localStorage.getItem("accessToken") || "";
            const apiRouting = new AdminProvidersServices(token);

            apiRouting.getAll(queryString).then((response) => {
                const { items, total,
                    page,
                    limit,
                    totalPages } = response.data;

                set({
                    isLoading: false,
                    items: items,
                    DataListConfig: {
                        page,
                        totalItems: total,
                        perPageItems: limit,
                        totalPages,
                        isSearch: false,
                        searchValue: "",
                    }
                });


            }).catch((error) => {
                set({ isLoading: false })
                toast.error("Erreur lors du chargement", {
                    type: "error",
                    isLoading: false,
                    autoClose: 5000
                })
                console.error(error)
            })

        } catch (error) {

            console.log(error)
            set({ isLoading: false })
            toast.error(`Erreur lors du chargement`)
        }
    },
    submitItem: async (item: any) => {

        try {
            const token = localStorage.getItem("accessToken") || "";
            const apiRouting = new AdminProvidersServices(token);

            set({ isSubmitLoading: true })

            const toastId = toast.loading(`Soumission de la demande...`);

            apiRouting.add(item).then((response) => {
                console.log(response)
                const { data } = response;

                set((state: any) => ({
                    isSubmitLoading: false,
                    items: [data, ...state.items],

                }));
                toast.update(toastId, {
                    render: "Enregistrement réussi",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            }).catch((error) => {
                set({ isSubmitLoading: false })
                toast.update(toastId, {
                    render: "Erreur lors de la soumission",
                    type: "error",
                    isLoading: false,
                    autoClose: 5000
                })
                console.error(error)
            })

        } catch (error) {
            set({ isSubmitLoading: false })
            toast.error(`Erreur lors de la soumission`)
            console.error(error)
        }
    },
    submitDeleteItem: async (item: any) => {
        set({ isSubmitLoading: true })
        try {
            const token = localStorage.getItem("accessToken") || "";
            const apiRouting = new AdminProvidersServices(token);

            const toastId = toast.loading(`Suppression de la demande...`);

            apiRouting.delete(item.id).then((response) => {
                console.log(response)

                set((state: any) => ({
                    isSubmitLoading: false,
                    items: state.items.filter((i: any) => i.id !== item.id),

                }));
                toast.update(toastId, {
                    render: "Suppression réussie",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            }).catch((error) => {
                set({ isSubmitLoading: false })
                toast.update(toastId, {
                    render: "Erreur lors de la suppression",
                    type: "error",
                    isLoading: false,
                    autoClose: 5000
                })
                console.error(error)
            })

        } catch (error) {
            set({ isSubmitLoading: false })
            toast.error(`Erreur lors de la suppression`)
            console.error(error)
        }
    },
    submitUpdateItem: async (item: any) => {
        set({ isSubmitLoading: true })
        try {
            const token = localStorage.getItem("accessToken") || "";
            const apiRouting = new AdminProvidersServices(token);

            const toastId = toast.loading(`Mise à jour de la demande...`);

            apiRouting.update(item.id, item).then((response) => {
                console.log(response)

                set((state: any) => ({
                    isSubmitLoading: false,
                    items: state.items.map((i: any) => i.id === item.id ? item : i),

                }));
                toast.update(toastId, {
                    render: "Mise à jour réussie",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            }).catch((error) => {
                set({ isSubmitLoading: false })
                toast.update(toastId, {
                    render: "Erreur lors de la mise à jour",
                    type: "error",
                    isLoading: false,
                    autoClose: 5000
                })
                console.error(error)
            })

        } catch (error) {
            set({ isSubmitLoading: false })
            toast.error(`Erreur lors de la mise à jour`)
            console.error(error)
        }
    },
    fetchSingleItem: async (id: string) => {
        set({ isLoading: true })
        try {
            const token = localStorage.getItem("accessToken") || "";
            const apiRouting = new AdminProvidersServices(token);

            const toastId = toast.loading(`Chargement de la demande...`);

            apiRouting.getById(id).then((response) => {
                console.log(response)
                const data = response.data;

                set(() => ({
                    isLoading: false,
                    item: data,

                }));

                toast.update(toastId, {
                    render: "Chargement réussi",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            }).catch((error) => {
                set({ isLoading: false })
                toast.update(toastId, {
                    render: "Erreur lors du chargement",
                    type: "error",
                    isLoading: false,
                    autoClose: 5000
                })
                console.error(error)
            })

        } catch (error) {
            set({ isLoading: false })
            toast.error(`Erreur lors du chargement`)
            console.error(error)
        }
    },

}))
