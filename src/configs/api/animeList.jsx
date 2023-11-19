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

export const FetchAnimeRecommendations = async () => {
  let getData = { status: null, message: null, data: null };
  try {
    const response = await axios.get("/recommendations/anime");
    getData.status = "success";
    getData.message = "Anime recommendations successfully loaded"
    getData.data = response.data;
  } catch (error) {
    getData.status = "failed";
    getData.message = "Failed to load anime recommendations";
    getData.data = error;
  }
  return getData
}