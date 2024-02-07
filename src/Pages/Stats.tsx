import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getStatsById } from "../utils/api";

export const Stats = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleGoBack = () => {
    navigate(-1);
  };

  const statsQuery = useQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsById(id!).then((res) => res),
    staleTime: Infinity,
  });

  console.log(statsQuery, "statsQuery");
  if (statsQuery.isLoading) return <div>Loading...</div>;
  if (statsQuery.isError) return <div>Error fetching data</div>;

  return <div onClick={handleGoBack}>Stats</div>;
};
