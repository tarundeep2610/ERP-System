import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

// Header component for navigation and toggling sidebar
const Header = () => {
  // State to manage the sidebar toggling
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 relative">
      <div className="container mx-auto flex items-center">
        {/* Logo or title */}
        <div className="text-3xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            ERP System
          </Link>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden sm:block ml-auto">
          <ul className="flex text-base space-x-4 mt-2 sm:mt-2">
            {/* Dashboard link */}
            <li>
              <Link to="/" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            {/* Products link */}
            <li>
              <Link to="/products" className="hover:text-gray-300">
                Products
              </Link>
            </li>
            {/* Orders link */}
            <li>
              <Link to="/orders" className="hover:text-gray-300">
                Orders
              </Link>
            </li>
          </ul>
        </nav>

        {/* Button to toggle sidebar for smaller screens */}
        <div className="sm:hidden ml-auto">
          <button
            onClick={() => setToggleSidebar((prev) => !prev)}
            className="block text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
          >
            {/* Hamburger menu icon */}
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 6h18a1 1 0 110 2H3a1 1 0 110-2zm0 5h18a1 1 0 110 2H3a1 1 0 110-2zm0 5h18a1 1 0 110 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        {/* Rendering sidebar when toggleSidebar is true */}
        <div className="flex absolute md:hidden flex-row top-[3.7rem] right-0">
          {toggleSidebar && (
            <div className="w-fit bg-white overflow-y-auto shadow-md z-10 animate-slide-in right-10 mt-2 bottom-0">
              {/* Passing closeToggle function to Sidebar */}
              <Sidebar closeToggle={setToggleSidebar} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
