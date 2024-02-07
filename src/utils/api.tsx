import axios from "axios";
import { ResponseTeams, Team } from "./types";
import { toast } from "react-hot-toast";

const api = axios.create({
  baseURL: "https://free-nba.p.rapidapi.com",
});

api.interceptors.request.use((config) => {
  config.headers["x-rapidapi-key"] = process.env.REACT_APP_RAPID_API_KEY;
  config.headers["x-rapidapi-host"] = "free-nba.p.rapidapi.com";
  config.headers["Accept"] = "application/json";
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default api;

export const getTeams = async () => {
  return await api.get<ResponseTeams>("/teams");
};

export const getTeamBydId = async (id: string) => {
  return await api.get<Team>(`/teams/${id}`);
};
