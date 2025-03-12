
import axios from 'axios';
import { NewUserDto, UserDtoForLogin } from './new.user.dto';

class AuthServices {

    register(data: NewUserDto) {
        return axios.post(`/api/users`, data)
    }

    login(data: UserDtoForLogin) {
        return axios.post(`/api/auth/verify-otp`, data)
    }

}

const authSevices = new AuthServices();

export { authSevices }