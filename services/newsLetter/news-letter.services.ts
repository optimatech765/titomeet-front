import axios from "axios";

class NewLetterServices {
    baseUrl = process.env.NEXT_PUBLIC_API_URL;

    addNewsLetter(email:string) {
        return axios.post(`${this.baseUrl}/mail/newsletter/subscribe`,{
            email,
            action:"SUBSCRIBE"
        });
    }
}

const newLetterServices = new NewLetterServices();

export { newLetterServices }