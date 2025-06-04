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
        return axios.post(`${this.baseUrl}/auth/refresh`,{
            refreshToken: tokenServices.getRefreshToken()
        });
    }

    getUsers(data:string){
        return axios.get(`${this.baseUrl}/admin/users?${data}`);
    }

    addUser(data:any){
        return axios.post(`${this.baseUrl}/admin/users`,data);
    }

    updateUser(data:any){
        return axios.put(`${this.baseUrl}/users/me`,data);
    }

    deactiveAccount(){
        return axios.patch(`${this.baseUrl}/users/me/status`,{status:"INACTIVE"});
    }

    getInterests(){
        return axios.get(`${this.baseUrl}/users/me/interests`);
    }

    addInterest(data:any){
        return axios.post(`${this.baseUrl}/users/me/interests`,data);
    }

    deleteInterest(data:any){
        return axios.delete(`${this.baseUrl}/users/me/interests`,data);
    }

    putInterest(data:any){
        return axios.put(`${this.baseUrl}/users/me/interests`,data);
    }


}
