import React from "react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  fullName: string;
  abbreviation: string;
  city: string;
};

export const TeamCard = ({ id, fullName, abbreviation, city }: Props) => {
  return (
    <div
      className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between items-center text-center"
      key={id}
    >
      <div className="flex flex-col content-center justify-center align-middle">
        <h3 className="flex justify-center">{fullName}</h3>
        <p className="flex justify-center">({abbreviation})</p>
      </div>
      <div>
        <Link
          to={`/teams/${id}`}
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          More info
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
