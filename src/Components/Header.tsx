import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div>
      <nav className="border-gray-200 px-2 mb-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to="/">
            <img className="w-10 h-10" src={logo} alt="NBA" />
          </Link>
          <div
            //className="md:flex justify-between items-center w-full md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul className="flex-row flex space-x-8 mt-0 text-sm font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-red-700 bg-transparent block pl-3 pr-4 py-2 text-blue-700 md:p-0 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className="text-red-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Teams
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
