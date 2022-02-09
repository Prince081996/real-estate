import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "4c37ad75f2msh7cbd57bb36f850dp105c9ejsn267f2fb21b32",
    },
  });
  return data;
};
