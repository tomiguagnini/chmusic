import axios from "axios";
const baseURL: string = import.meta.env.VITE_API_URL || '';
export default axios.create({baseURL})