/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";

export class AdminProvidersServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token: string) {
        tokenServices.setHeaderToken(token);
    }

    getAll(data?:string) {
        return axios.get(`${this.baseUrl}/providers?${data}`);
    }

    getById(id: string) {
        return axios.get(`${this.baseUrl}/admin/providers/${id}`);
    }

    add(data: any) {
        return axios.post(`${this.baseUrl}/admin/providers`, data);
    }

    update(id: string, data: any) {
        return axios.put(`${this.baseUrl}/admin/providers/${id}`, data);
    }

    delete(id: string) {
        return axios.delete(`${this.baseUrl}/admin/providers/${id}`);
    }

}