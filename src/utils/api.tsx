import axios from "axios";
import {
  GameList,
  Player,
  PlayerList,
  ResponseTeams,
  StatsList,
  Team,
} from "./types";

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

export const getPlayers = async () => {
  return await api.get<PlayerList>("/players", { data: { per_page: 25 } });
};

export const getPlayerById = async (id: string) => {
  return await api.get<Player>(`/players/${id}`);
};

export const getGames = async () => {
  return await api.get<GameList>("/games", { data: { per_page: 25 } });
};

export const getStatsById = async (id: string) => {
  const params = {
    page: "0",
    per_page: "1",
    game_ids: id,
  };

  return await api.get<StatsList>(`/stats/${id}`, { data: params }); // Remove type argument
};

/* const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/stats',
  params: {
    page: '0',
    per_page: '1',
    game_ids: '48752'
  },
  headers: {
    'X-RapidAPI-Key': 'c61f3b36d2msh83edb0440160c34p1665d2jsn6fd468336ba6',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} */
/* 
export const getStats = async (id: string) => {
  const options = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/stats",
    params: {
      page: "0",
      per_page: "1",
      game_ids: "48752",
    },
    headers: {
      "X-RapidAPI-Key": "c61f3b36d2msh83edb0440160c34p1665d2jsn6fd468336ba6",
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}; */
