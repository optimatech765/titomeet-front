/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";

export class AddressServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token:string) {
        tokenServices.setHeaderToken(token);
    }

    getAddresses(query: string) {
        return axios.get(`${this.baseUrl}/addresses?query=${query}`);
    }

}
