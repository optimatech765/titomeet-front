/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";
import { CategorieDto } from "@/utils/dto/categorie.dto";

class CategoriesServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor() {
        tokenServices.setHeader();
    }

    getCategories() {
        return axios.get(`${this.baseUrl}/events/categories`);
    }

    addCategories(data:CategorieDto) {
        return axios.post(`${this.baseUrl}/admin/events/categories`,data);
    }

}

const categoriesServices = new CategoriesServices();

export { categoriesServices }