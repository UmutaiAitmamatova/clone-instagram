import axios from "axios";
const baseUrl = "https://cryxxxen.pythonanywhere.com/";
export const instance = axios.create({baseUrl});