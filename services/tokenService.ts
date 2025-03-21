
"use client";
import axios from "axios";

class TokenService {
    setHeader() {
        let authorizationToken = ""
        if (localStorage) {
            authorizationToken = localStorage?.getItem('accessToken') || "";
        }
        if (authorizationToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${authorizationToken}`;
        }
    }

    refreshToken(token: string) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    removeHeader() {
        axios.defaults.headers.common['Authorization'] = '';
    }
}

export const tokenServices = new TokenService();
