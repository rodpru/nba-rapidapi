import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getGames, getPlayers, getTeamBydId } from "../utils/api";
import { Link } from "react-router-dom";

const IndividualTeam = () => {
  const { id } = useParams();

  const teamQuery = useQuery({
    queryKey: ["team", id],
    queryFn: () => getTeamBydId(id!).then((res) => res.data),
    staleTime: Infinity,
  });

  const PlayersQuery = useQuery({
    queryKey: ["players"],
    queryFn: () => getPlayers().then((res) => res.data),
    staleTime: Infinity,
  });

  const GamesQuery = useQuery({
    queryKey: ["games"],
    queryFn: () => getGames().then((res) => res.data),
    staleTime: Infinity,
  });

  if (teamQuery.isLoading && PlayersQuery.isLoading && GamesQuery.isLoading) {
    return <div>Loading...</div>;
  }
  const team = teamQuery.data;
  const allPlayers = PlayersQuery.data?.data;
  const teamPlayers = allPlayers?.filter(
    (player) => player.team.id === parseInt(id!)
  );
  const allGames = GamesQuery.data?.data;
  const teamGames = allGames?.filter(
    (game) =>
      game.home_team.id === parseInt(id!) ||
      game.visitor_team.id === parseInt(id!)
  );

  return (
    <div className="w-full h-full">
      <h2 className="text-4xl mx-auto text-center">{team?.full_name}</h2>
      <p className="text-center">({team?.abbreviation})</p>
      <div className="flex justify-center flex-1 gap-5 py-8">
        <div>
          <p>{team?.conference} Conference</p>
        </div>
        <div>
          <p>{team?.division} Division</p>
        </div>
      </div>
      <hr />
      <div className="flex gap-10 justify-center mt-10">
        <div className="w-1/2">
          <h4 className="text-center pb-4 text-xl">Team Players</h4>
          <div className="flex flex-col gap-5 justify-center">
            {teamPlayers?.length === 0 && (
              <p>No players found on the fetched list</p>
            )}
            {teamPlayers &&
              teamPlayers.length > 0 &&
              teamPlayers?.map((player) => {
                return (
                  <div key={player.id}>
                    <p>
                      <span className="underline">
                        <Link to={`/player/${player.id}`}>
                          {player.first_name} {player.last_name}
                        </Link>
                      </span>
                      {player.position.length > 0
                        ? ` | Position: ${player.position} `
                        : ""}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <hr className="rotate-90 w-1/2 mt-20" />
        <div className="w-1/2">
          <h4 className="text-center pb-4 text-xl">Games</h4>
          <div className="flex flex-col gap-5 justify-center">
            {teamGames?.length === 0 && (
              <p>No games found on the fetched list</p>
            )}
            {teamGames &&
              teamGames.length > 0 &&
              teamGames?.map((teamGame) => {
                return (
                  <div
                    className="flex flex-col justify-center"
                    key={teamGame.id}
                  >
                    <Link to={`/game/stats/${teamGame.id}`}>
                      <p className="text-center underline">
                        {teamGame.home_team.full_name} vs{" "}
                        {teamGame.visitor_team.full_name}
                      </p>
                    </Link>
                    <p className="text-center">
                      {teamGame.home_team_score} - {teamGame.visitor_team_score}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualTeam;
