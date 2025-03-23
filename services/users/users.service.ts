/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import axios from 'axios';
import { tokenServices } from '../tokenService';

export class UsersServices {
    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token: string) {
        tokenServices.setHeaderToken(token);
    }

    userInfo() {
        return axios.get(`${this.baseUrl}/users/me`);
    }

    refreshToken() {
        return axios.post(`${this.baseUrl}/users/refresh-token`);
    }

}
