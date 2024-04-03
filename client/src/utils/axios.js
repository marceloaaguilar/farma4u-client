import axios from "axios";

export const api = axios.create({
    baseURL: "https://sistema.farma4u.com.br/api"
})