/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { tokenServices } from '../tokenService';

class MessageServices {
    baseUrl = process.env.NEXT_PUBLIC_API_CHAT;

    constructor() {
        tokenServices.setHeader();
    }
    getChats() {
        return axios.get(`${this.baseUrl}/list`);
    }

    getMessages(chatId:string) {
        return axios.get(`${this.baseUrl}/${chatId}/messages`);
    }

    getMessage(id: string) {
        return axios.get(`${this.baseUrl}/messages/${id}`);
    }

    createMessage(data: any) {
        return axios.post(`${this.baseUrl}/messages`, data);
    }

    updateMessage(id: string, data: any) {
        return axios.put(`${this.baseUrl}/messages/${id}`, data);
    }

    deleteMessage(id: string) {
        return axios.delete(`${this.baseUrl}/messages/${id}`);
    }

    getChatMembers(chatId: string) {
        return axios.get(`${this.baseUrl}/${chatId}/members`);
    }


}

const messagesSevices = new MessageServices();

export { messagesSevices }