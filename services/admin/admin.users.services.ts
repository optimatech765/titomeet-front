/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";


export class AdminUsersServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token: string) {
        tokenServices.setHeaderToken(token);
    }

    getUsers() {
        return axios.get(`${this.baseUrl}/admin/users`);
    }

    getUser(id: string) {
        return axios.get(`${this.baseUrl}/admin/users/${id}`);
    }

    updateUser(id: string, data: any) {
        return axios.put(`${this.baseUrl}/admin/users/${id}`, data);
    }

    deleteUser(id: string) {
        return axios.delete(`${this.baseUrl}/admin/users/${id}`);
    }
}