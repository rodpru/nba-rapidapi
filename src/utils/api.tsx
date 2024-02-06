import axios from "axios";
import { Team } from "./types";

const api = axios.create({
  baseURL: "https://free-nba.p.rapidapi.com",
});

api.interceptors.request.use((config) => {
  config.headers["x-rapidapi-key"] = process.env.REACT_APP_RAPID_API_KEY;
  config.headers["x-rapidapi-host"] = "free-nba.p.rapidapi.com";
  config.headers["Accept"] = "application/json";
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept-Encoding"] = "gzip, deflate";
  return config;
});

export default api;
export const getTeams = async (): Promise<Team[]> => {
  const response = await api.get("/teams");
  return response.data.data;
};
