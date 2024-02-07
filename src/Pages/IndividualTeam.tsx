import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getTeamBydId } from "../utils/api";

const IndividualTeam = () => {
  const { id } = useParams();

  const { data: team, isLoading } = useQuery({
    queryKey: ["team", id],
    queryFn: () => getTeamBydId(id!).then((res) => res.data),
    staleTime: Infinity,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
    </div>
  );
};

export default IndividualTeam;
