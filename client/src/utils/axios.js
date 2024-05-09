import axios from "axios";

export const api = axios.create({
    baseURL: "http://farma4u.com.br:5001/Hotsite"
})