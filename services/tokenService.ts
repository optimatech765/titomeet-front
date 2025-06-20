
"use client";
import axios from "axios";

class TokenService {
    setHeader() {
        let authorizationToken = ""
        if (localStorage?.getItem('accessToken')) {
            authorizationToken = localStorage?.getItem('accessToken') || "";
        }
        if (authorizationToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${authorizationToken}`;
        }
    }

    setHeaderToken(token: string) {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    }

    refreshToken(token: string) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    removeHeader() {
        axios.defaults.headers.common['Authorization'] = '';
    }

    getRefreshToken() {
        return localStorage?.getItem('refreshToken') || "";
    }
}

export const tokenServices = new TokenService();
