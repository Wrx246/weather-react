import axios from "axios";

const base_url = process.env.REACT_APP_API_URL;
export const api_key = process.env.REACT_APP_API_KEY;

export const API = axios.create({
    baseURL: base_url,
})