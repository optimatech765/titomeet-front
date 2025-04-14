/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";


export class AdminProvidersCategorieServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token: string) {
        tokenServices.setHeaderToken(token);
    }

    getAll(params?: string) {
        return axios.get(`${this.baseUrl}/providers/categories?${params}`);
    }

    add(data: any) {
        return axios.post(`${this.baseUrl}/admin/providers/categories`, data);
    }

    getById(id: string) {
        return axios.get(`${this.baseUrl}/admin/providers/categories/${id}`);
    }

    update(id: string, data: any) {
        return axios.put(`${this.baseUrl}/admin/providers/categories/${id}`, data);
    }

    delete(id: string) {
        return axios.delete(`${this.baseUrl}/admin/providers/categories/${id}`);
    }
}