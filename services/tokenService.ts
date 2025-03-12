
import axios from "axios";

class TokenService {
    setHeader(authorizationToken:string) {
        if (authorizationToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${authorizationToken}`;
        }
    }

    refreshToken(token:string) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    removeHeader() {
        axios.defaults.headers.common['Authorization'] = '';
    }
}

export const tokenServices = new TokenService();
