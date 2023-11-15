import axios from "../axios";

export const FetchAnimeList = async () => {
  let getData = { status: null, message: null, data: null };
  try {
    const response = await axios.get("/anime");
    getData.status = "success";
    getData.message = "Anime list successfully loaded"
    getData.data = response.data;
  } catch (error) {
    getData.status = "failed";
    getData.message = "Failed to load anime list";
    getData.data = error;
  }
  return getData
};
