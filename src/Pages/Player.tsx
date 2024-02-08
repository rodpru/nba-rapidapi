import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPlayerById } from "../utils/api";
import BackIcon from "../assets/icons/arrow.png";

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

  if (playerQuery.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div onClick={handleGoBack}>
        <img src={BackIcon} alt="Back Icon" />
      </div>
      <div>
        <h1 className="text-4xl text-center mb-10">
          {player?.first_name} {player?.last_name}
        </h1>
        <div className="flex justify-center">
          {player?.position && <p>Position: {player?.position}</p>}
          {player?.team && <p>Team: {player?.team.full_name}</p>}
          {player?.height_feet && (
            <p>
              Height: {player?.height_feet}'{player?.height_inches}
            </p>
          )}
          {player?.weight_pounds && <p>Weight: {player?.weight_pounds} lbs</p>}
        </div>
      </div>
    </div>
  );
};
