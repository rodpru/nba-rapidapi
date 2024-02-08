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

export type StatType = {
  id: number;
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: number;
  fg3a: number;
  fg3m: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  ft_pct: number;
  fta: number;
  ftm: number;
  game: Game;
  min: string;
  oreb: number;
  pf: number;
  player: {
    id: number;
    first_name: string;
    height_feet: number;
    height_inches: number;
    last_name: string;
    position: string;
    team_id: number;
    weight_pounds: number;
  };
  pts: number;
  reb: number;
  stl: number;
  team: {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
  };
  turnover: number;
};
