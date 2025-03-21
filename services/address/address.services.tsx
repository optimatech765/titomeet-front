/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";

class AddressServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor() {
        tokenServices.setHeader();
    }

    getAddresses(query: string) {
        return axios.get(`${this.baseUrl}/addresses?query=${query}`);
    }

}

const addressServices = new AddressServices();

export { addressServices }