import axios from "axios";
import { tokenServices } from "../tokenService";

export class NotificationsServices {
    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token:string) {
        tokenServices.setHeaderToken(token);
    }

    getNotifications() {
        return axios.get(`${this.baseUrl}/notifications`);
    }

}