import { useQuery } from "react-query";
import { getTeams } from "../utils/api";
import { Team } from "../utils/types";

const Teams = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allTeams"],
    queryFn: () => getTeams,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {(data as Team[]).map((team: Team) => {
        return (
          <div key={team.id}>
            <h1>{team.full_name}</h1>
            <p>{team.abbreviation}</p>
            <p>{team.city}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Teams;
