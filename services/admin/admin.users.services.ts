/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";


export class AdminUsersServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token: string) {
        tokenServices.setHeaderToken(token);
    }

    getAll(params?: string) {
        return axios.get(`${this.baseUrl}/admin/users?${params}`);
    }

    add(data: any) {
        return axios.post(`${this.baseUrl}/admin/users`, data);
    }

    getById(id: string) {
        return axios.get(`${this.baseUrl}/admin/users/${id}`);
    }

    update(id: string, data: any) {
        return axios.put(`${this.baseUrl}/admin/users/${id}`, data);
    }

    delete(id: string) {
        return axios.delete(`${this.baseUrl}/admin/users/${id}`);
    }
}