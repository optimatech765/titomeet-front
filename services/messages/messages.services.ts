/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { tokenServices } from '../tokenService';

export class MessageServices {
    baseUrl = process.env.NEXT_PUBLIC_API_CHAT;

     constructor(token:string) {
        tokenServices.setHeaderToken(token);
    }

    getChats() {
        return axios.get(`${this.baseUrl}/list`);
    }

    getMessages(chatId:string) {
        return axios.get(`${this.baseUrl}/messages?chatId=${chatId}`);
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