import React, { useState } from "react";
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from './logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const admin = localStorage.getItem("admin");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex items-center "><img src={logo} className="h-12" alt="" />Zohaib's Portfolio</div>
        <ul className="hidden md:flex space-x-6 items-center">
          <li className="flex items-center space-x-1">
            <FaHome />
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <FaUser />
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <FaProjectDiagram />
            <Link to="/projects" className="hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <FaEnvelope />
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
          {admin ? (
            <li className="flex items-center space-x-1">
              <RiAdminFill />
              <Link to="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>
          ) : (
            ""
          )}
          {!admin ? (
            <Link to={"/login"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
          ) : (
            ""
          )}
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <li className="flex items-center space-x-1">
              <FaHome />
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <FaUser />
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <FaProjectDiagram />
              <Link to="/projects" className="hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <FaEnvelope />
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
            {admin ? (
              <li className="flex items-center space-x-1">
                <RiAdminFill />
                <Link to="/dashboard" className="hover:text-gray-400">
                  Dashboard
                </Link>
              </li>
            ) : (
              ""
            )}
            {!admin ? (
              <Link to={"/login"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
              </Link>
            ) : (
              ""
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
