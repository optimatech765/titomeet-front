import axios from "axios";
import { tokenServices } from "../tokenService";

class NotificationsServices {
    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor() {
        tokenServices.setHeader();
    }

    getNotifications() {
        return axios.get(`${this.baseUrl}/notifications`);
    }

}

const notificationsServices = new NotificationsServices();

export { notificationsServices }