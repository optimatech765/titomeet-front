/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";

export class AdminProvidersServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token: string) {
        tokenServices.setHeaderToken(token);
    }

    getProviders() {
        return axios.get(`${this.baseUrl}/admin/providers`);
    }

    getProvidersById(id: string) {
        return axios.get(`${this.baseUrl}/admin/providers/${id}`);
    }

    addProviders(data: any) {
        return axios.post(`${this.baseUrl}/admin/providers`, data);
    }

    updateProviders(id: string, data: any) {
        return axios.put(`${this.baseUrl}/admin/providers/${id}`, data);
    }

    deleteProviders(id: string) {
        return axios.delete(`${this.baseUrl}/admin/providers/${id}`);
    }

    addProvidersCategories(data: any) {
        return axios.post(`${this.baseUrl}/admin/providers/categories`, data);
    }

    getProvidersCategories() {
        return axios.get(`${this.baseUrl}/admin/providers/categories`);
    }

    getProvidersCategoriesById(id: string) {
        return axios.get(`${this.baseUrl}/admin/providers/categories/${id}`);
    }

    updateProvidersCategories(id: string, data: any) {
        return axios.put(`${this.baseUrl}/admin/providers/categories/${id}`, data);
    }

    deleteProvidersCategories(id: string) {
        return axios.delete(`${this.baseUrl}/admin/providers/categories/${id}`);
    }

}