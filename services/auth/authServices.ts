
import { LoginDto, SignUpDto2 } from '@/utils/dto/auth.dto';
import axios from 'axios';

class AuthServices {
    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    register(data: SignUpDto2) {

        return axios.post(`${this.baseUrl}/auth/signup`, data)
    }

    login(data: LoginDto) {
        return axios.post(`${this.baseUrl}/auth/signin`, data);
    }

    forgotPassword(email: string) {
        return axios.post(`${this.baseUrl}/auth/forgot-password`, { email })
    }

    resetPassword(data: ResetPasswordtDto) {
        return axios.post(`${this.baseUrl}/auth/reset-password`, data)
    }

}

const authSevices = new AuthServices();

export { authSevices }

interface ResetPasswordtDto {
    password: string;
    token: string
}