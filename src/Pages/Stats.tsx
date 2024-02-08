import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getStatsById } from "../utils/api";
import { StatType } from "../utils/types";
import BackIcon from "../assets/icons/arrow.png";

export const Stats = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleGoBack = () => {
    navigate(-1);
  };

  const statsQuery = useQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsById(id!).then((res) => res.data.data),
    staleTime: Infinity,
  });

  if (statsQuery.isLoading) return <div>Loading...</div>;

  let statsObject: StatType[];
  statsObject = statsQuery!.data!;

  console.log(statsObject, "statsObject");

  if (statsQuery.isError) return <div>Error fetching data</div>;

  return (
    <div>
      <div onClick={handleGoBack}>
        <img src={BackIcon} alt="Back Icon" />
      </div>
      <div>
        <h1 className="text-4xl text-center">Game Stats</h1>
      </div>{" "}
      <div className="mt-10 text-center">
        {statsObject[0].id && <p>Game ID: {statsObject[0].id}</p>}
        {statsObject[0].ast && <p>Assists: {statsObject[0].ast}</p>}
        {statsObject[0].blk && <p>Blocks: {statsObject[0].blk}</p>}
        {statsObject[0].dreb && (
          <p>Defensive Rebounds: {statsObject[0].dreb}</p>
        )}
        {statsObject[0].fg3_pct && (
          <p>3 Point Percentage: {statsObject[0].fg3_pct}</p>
        )}
        {statsObject[0].fg3a && <p>3 Point Attempts: {statsObject[0].fg3a}</p>}
        {statsObject[0].fg3m && <p>3 Point Makes: {statsObject[0].fg3m}</p>}
        {statsObject[0].fg_pct && (
          <p>Field Goal Percentage: {statsObject[0].fg_pct}</p>
        )}
        {statsObject[0].fga && <p>Field Goal Attempts: {statsObject[0].fga}</p>}
        {statsObject[0].fgm && <p>Field Goal Makes: {statsObject[0].fgm}</p>}
        {statsObject[0].ft_pct && (
          <p>Free Throw Percentage: {statsObject[0].ft_pct}</p>
        )}
        {statsObject[0].fta && <p>Free Throw Attempts: {statsObject[0].fta}</p>}
        {statsObject[0].ftm && <p>Free Throw Makes: {statsObject[0].ftm}</p>}
        {statsObject[0].min && <p>Minutes: {statsObject[0].min}</p>}
        {statsObject[0].game && (
          <>
            <p>Game Date: {statsObject[0].game.date}</p>

            {statsObject[0].game.home_team && (
              <p>Home Team Score: {statsObject[0].game.home_team_score}</p>
            )}
            {statsObject[0].game.visitor_team_score && (
              <p>
                Visitor Team Score: {statsObject[0].game.visitor_team_score}
              </p>
            )}
            {statsObject[0].game.season && (
              <p>Season: {statsObject[0].game.season}</p>
            )}
            {statsObject[0].game.period && (
              <p>Period: {statsObject[0].game.period}</p>
            )}
            {statsObject[0].game.status && (
              <p>Status: {statsObject[0].game.status}</p>
            )}
            {statsObject[0].game.time && (
              <p>Time: {statsObject[0].game.time}</p>
            )}
            {statsObject[0].game.postseason && (
              <p>Postseason: {statsObject[0].game.postseason}</p>
            )}
          </>
        )}
        {statsObject[0].pf && <p>Personal Fouls: {statsObject[0].pf}</p>}
        {statsObject[0].oreb && (
          <p>Offensive Rebounds: {statsObject[0].oreb}</p>
        )}
        {statsObject[0].turnover && <p>Turnovers: {statsObject[0].turnover}</p>}
      </div>
    </div>
  );
};
