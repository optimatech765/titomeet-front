/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { tokenServices } from '../tokenService';

class EventServices {
    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor() {
        tokenServices.setHeader();
    }

    getEvents(data:string) {
        return axios.get(`${this.baseUrl}/events?${data}`);
    }

    getEvent(id: string) {
        return axios.get(`${this.baseUrl}/events/${id}`);
    }

    createEvent(data: any) {
        return axios.post(`${this.baseUrl}/events`, data);
    }

    updateEvent(id: string, data: any) {
        return axios.put(`${this.baseUrl}/events/${id}`, data);
    }

    deleteEvent(id: string) {
        return axios.delete(`${this.baseUrl}/events/${id}`);
    }

    toggleFavorit(id: string) {
        return axios.post(`${this.baseUrl}/events/${id}/toggle-favorite`);
    }

    buyTicket(id: string, data: any) {
        return axios.post(`${this.baseUrl}/events/${id}/orders`, data);
    }

    getShopInfo(id: string) {
        return axios.get(`${this.baseUrl}/orders/${id}`);
    }
}

const eventSevices = new EventServices();

export { eventSevices }