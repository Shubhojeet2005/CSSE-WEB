import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import LOGOCSSE from '../assets/LOGOCSSE.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-slate-950 px-5 py-3">
        <div>
          <img src={LOGOCSSE} alt="logo" className="h-12 sm:h-20" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            className="text-zinc-400 text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links for Larger Screens */}
        <ul className="hidden sm:flex font-bold items-center space-x-6">
        <Link to="/">
            <li className="flex items-center gap-2 text-zinc-400">
              <FaHome className="text-2xl" />
              Home
            </li>
          </Link>
          <Link to="/events">
            <li className="p-2 cursor-pointer text-zinc-400">Events</li>
          </Link>
          <li className="p-2 cursor-pointer text-zinc-400">About</li>
          <Link to="/members">
            <li className="p-2 cursor-pointer text-zinc-400">Team</li>
          </Link>
          <li className="p-2 cursor-pointer text-zinc-400">Contact</li>
          <Link to="/auth">
            <button className="text-cyan-600 hover:bg-cyan-400 hover:text-white hover:rounded-lg px-4 py-2">
              Sign / Log
            </button>
          </Link>
        </ul>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <ul className="sm:hidden bg-slate-950 text-zinc-400 font-bold flex flex-col items-start px-5 py-3 space-y-3">
          <Link to="/">
            <li className="flex items-center gap-2">
              <FaHome className="text-2xl" />
              Home
            </li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
          <li>About</li>
          <Link to="/members">
            <li>Team</li>
          </Link>
          <li>Contact</li>
          <Link to="/auth">
            <button className="text-cyan-600 hover:bg-cyan-400 hover:text-white hover:rounded-lg py-2 mt-2">
              Sign / Log
            </button>
          </Link>
        </ul>
      )}
    </>
  );
};

export default Navbar;
