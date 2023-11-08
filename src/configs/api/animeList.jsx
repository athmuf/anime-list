import axios from "../axios";
import errorHandler from "../axios/errorHandler";

export const FetchAnimeList = async () => {
  let getData = { status: null, message: null, data: null };
  try {
    const response = await axios.get("/anime");
    getData.status = "success";
    getData.message = "Anime list successfully loaded";
    console.log('ini data', response.data)
    getData.data = response.data;
  } catch (error) {
    errorHandler(error);
    getData.status = "failed";
    getData.message = "Failed to load anime list";
    getData.data = error;
  }
  return getData
};
