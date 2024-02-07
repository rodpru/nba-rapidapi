import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPlayerById } from "../utils/api";
import { Player as PlayerType } from "../utils/types";

export const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const playerQuery = useQuery({
    queryKey: ["player", id],
    queryFn: () => getPlayerById(id!).then((res) => res.data),
    staleTime: Infinity,
  });

  const player = playerQuery?.data;

  const handleGoBack = () => {
    navigate(-1);
  };

  console.log(player, "playerQuery.data");

  if (playerQuery.isLoading) return <div>Loading...</div>;

  return (
    <div onClick={handleGoBack}>
      <p className="my-10">{"<- Return"}</p>
      <h1>
        {player?.first_name} {player?.last_name}
      </h1>
      {player?.position && <p>Position: {player?.position}</p>}
      {player?.team && <p>Team: {player?.team.full_name}</p>}
      {player?.height_feet && (
        <p>
          Height: {player?.height_feet}'{player?.height_inches}"
        </p>
      )}
      {player?.weight_pounds && <p>Weight: {player?.weight_pounds} lbs</p>}
    </div>
  );
};
