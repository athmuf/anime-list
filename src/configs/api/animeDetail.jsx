import axios from "../axios";

export const FetchAnimeDetail = async (id) => {
    let getData = { status: null, message: null, data: null };
    try {
      const response = await axios.get(`/anime/${id}`);
      console.log(response)
      getData.status = "success";
      getData.message = "Anime detail successfully loaded"
      getData.data = response.data;
    } catch (error) {
      getData.status = "failed";
      getData.message = "Failed to load anime detail";
      getData.data = error;
    }
    return getData
  };