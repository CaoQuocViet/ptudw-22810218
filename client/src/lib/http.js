import axios from "axios";

export const http = axios.create({
    baseUrl: import.meta.env.API_URL,
    timeout: 1000,
});