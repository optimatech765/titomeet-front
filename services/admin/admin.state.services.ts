import axios from "axios";
import { tokenServices } from "../tokenService";

export class AdminState {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token: string) {
        tokenServices.setHeaderToken(token);
    }

    getHomeState(){
        return axios.get(`${this.baseUrl}/admin/state`);
    }
    
}