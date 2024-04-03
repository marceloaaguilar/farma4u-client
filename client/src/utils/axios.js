import axios from "axios";

export const api = axios.create({
    baseURL: "sistema.farma4u.com.br"
})