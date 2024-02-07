import { useQuery } from "react-query";
import { getTeams } from "../utils/api";
import { Team } from "../utils/types";
import { TeamCard } from "../Components/TeamCard";
import { useState } from "react";

const Teams = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;
  const { data: allTeams, isLoading } = useQuery({
    queryKey: ["allTeams"],
    queryFn: () => getTeams().then((res) => res.data),
    staleTime: Infinity,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentItems = allTeams?.data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allTeams!.data!.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {currentItems?.map((team: Team) => {
          return (
            <TeamCard
              key={team.id}
              id={team.id}
              fullName={team.name}
              abbreviation={team.abbreviation}
              city={team.city}
            />
          );
        })}
      </div>
      <div>
        <p className="float-right">
          Página {currentPage} de {totalPages}
        </p>
        <div className="mt-10 flex gap-4">
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teams;
