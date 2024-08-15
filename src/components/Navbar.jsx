import React from "react";
import logo from "../images/logo.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="justify-between flex align-middle pt-3 h-auto text-xl border-solid border-y-fuchsia-200 text-white mt-5 mb-5">
        <Link to="/">
          <div className="logo flex">
            <img src={logo} alt="logo" className="h-10" />
            <h1 className="grid place-content-center">Portfolio</h1>
          </div>
        </Link>

        <div className="grid place-content-center">
          <nav>
            <Link
              to="/about"
              className="px-5 transition-underline hover:text-fuchsia-600 hover:underline hover:font-semibold"
            >
              About
            </Link>
            <Link
              to="/skills"
              className="px-5 transition-underline hover:text-fuchsia-600 hover:underline hover:font-semibold"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="px-5 transition-underline hover:text-fuchsia-600 hover:underline hover:font-semibold"
            >
              Projects
            </Link>
            <Link
              to="/edu"
              className="px-5 transition-underline hover:text-fuchsia-600 hover:underline hover:font-semibold"
            >
              Education
            </Link>
          </nav>
        </div>

        <a
          href="#"
          className="grid place-content-center border-purple-400 border-2 p-1 px-2 rounded-md hover:text-blue-500"
        >
          <Link to="/Contact"><button>Contact</button></Link>
        </a>
      </header>

      <Outlet />
    </div>
  );
};

export default Navbar;
