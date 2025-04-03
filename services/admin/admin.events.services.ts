/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";

export class AdminEventsServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token: string) {
        tokenServices.setHeaderToken(token);
    }

    addCategories(data: any) {
        return axios.post(`${this.baseUrl}/admin/events/categories`, data);
    }

    getCategories() {
        return axios.get(`${this.baseUrl}/admin/events/categories`);
    }

    getCategoriesById(id: string) {
        return axios.get(`${this.baseUrl}/admin/events/categories/${id}`);
    }

    updateCategories(id: string, data: any) {
        return axios.put(`${this.baseUrl}/admin/events/categories/${id}`, data);
    }

    deleteCategories(id: string) {
        return axios.delete(`${this.baseUrl}/admin/events/categories/${id}`);
    }

    getEvents(queryString: string) {
        return axios.get(`${this.baseUrl}/events?${queryString}`);
    }

    updateEvent(id: string, data: any) {
        return axios.put(`${this.baseUrl}/admin/events/${id}`, data);
    }

    deleteEvent(id: string) {
        return axios.delete(`${this.baseUrl}/admin/events/${id}`);
    }

    getEventsById(id: string) {
        return axios.get(`${this.baseUrl}/admin/events/${id}`);
    }

}