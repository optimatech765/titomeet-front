/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";
import { CategorieDto } from "@/utils/dto/categorie.dto";

export class CategoriesServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token:string) {
        tokenServices.setHeaderToken(token);
    }

    getCategories() {
        return axios.get(`${this.baseUrl}/events/categories`);
    }

    addCategories(data:CategorieDto) {
        return axios.post(`${this.baseUrl}/admin/events/categories`,data);
    }

}