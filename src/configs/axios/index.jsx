import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_ANIME_API}`,
});

export default instance;
