/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";

export class ProvidersServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token: string) {
        tokenServices.setHeaderToken(token);
    }

    addProviders(data: any) {
        return axios.post(`${this.baseUrl}/providers`, data);
    }

    getProvders() {
        return axios.get(`${this.baseUrl}/providers`);
    }

    getProvidersById(id: string) {
        return axios.get(`${this.baseUrl}/providers/${id}`);
    }

    updateProviders(id: string, data: any) {
        return axios.put(`${this.baseUrl}/providers/${id}`, data);
    }

    deleteProviders(id: string) {
        return axios.delete(`${this.baseUrl}/providers/${id}`);
    }

}