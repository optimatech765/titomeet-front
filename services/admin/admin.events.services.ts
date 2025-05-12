/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";

export class AdminEventsServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token: string) {
        tokenServices.setHeaderToken(token);
    }

    getAll(queryString: string) {
        return axios.get(`${this.baseUrl}/events?${queryString}`);
    }

    add(data: any) {
        return axios.post(`${this.baseUrl}/admin/events`, data);
    }

    update(id: string, data: any) {
        return axios.put(`${this.baseUrl}/admin/events/${id}`, data);
    }

    delete(id: string) {
        return axios.delete(`${this.baseUrl}/admin/events/${id}`);
    }

    getById(id: string) {
        return axios.get(`${this.baseUrl}/admin/events/${id}`);
    }
    

}