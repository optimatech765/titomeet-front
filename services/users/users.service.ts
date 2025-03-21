/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { tokenServices } from '../tokenService';

class UsersServices {
    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor() {
        tokenServices.setHeader();
    }

    userInfo() {
        return axios.get(`${this.baseUrl}/users/me`);
    }

    refreshToken() {
        return axios.post(`${this.baseUrl}/users/refresh-token`);
    }

}

const usersServices = new UsersServices();

export { usersServices }