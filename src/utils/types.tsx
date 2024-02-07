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
