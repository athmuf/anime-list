import axios from "axios";
import errorHandler from "./errorHandler"

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_ANIME_API}`,
});

axios.interceptors.request.use((response) => response.data, errorHandler)

export default instance;
