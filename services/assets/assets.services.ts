/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { tokenServices } from "../tokenService";

export class AssetsServices {

    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    constructor(token:string) {
        tokenServices.setHeaderToken(token);
    }

    getPresignUrl(data: Asset) {
        return axios.post(`${this.baseUrl}/assets/presigned-url`, data);
    }

    uploadFile(data: any, url: string) {
        return axios.post(`${url}`, data);
    }

    deleteFile(data: string) {
        return axios.delete(`${this.baseUrl}/assets/delete/${data}`);

    }

}

interface Asset {

    fileName: string;
    fileType: string;
}