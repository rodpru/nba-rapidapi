import { config } from "process";

export type Team = {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
};

export type ResponseTeams = {
  data: Team[];
  config: {};
};

export type Player = {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  team: Team;
  height_feet: number;
  height_inches: number;
  weight_pounds: number;
};
export type PlayerList = {
  data: Player[];
  meta: {};
};

export type Game = {
  id: number;
  date: string;
  home_team: Team;
  home_team_score: number;
  visitor_team: Team;
  visitor_team_score: number;
  season: number;
  period: number;
  status: string;
  time: string;
  postseason: boolean;
};
export type GameList = {
  data: Game[];
  meta: {};
};

export type StatsList = {
  data: [];
  meta: {};
};
