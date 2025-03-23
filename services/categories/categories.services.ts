/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";

class CategoriesServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor() {
        tokenServices.setHeader();
    }

    getCategories() {
        return axios.get(`${this.baseUrl}/events/categories`);
    }

}

const categoriesServices = new CategoriesServices();

export { categoriesServices }