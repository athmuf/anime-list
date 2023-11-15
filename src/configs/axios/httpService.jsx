import axios from "./";

export const get = async (url, config = {}) => {
  let getData = { status: null, message: null, data: null };

  try {
    const response = await axios.get(url, config);
    getData.status = "success";
    getData.response = response.data;
  } catch (error) {
    getData.status = "failed";
    getData.error = error;
  }
};
