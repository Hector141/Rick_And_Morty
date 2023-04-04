import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
      <nav>
        <SearchBar onSearch={onSearch}></SearchBar>
        <NavLink to="/About"><button>About</button></NavLink>
        <NavLink to="/Home"><button>Home</button></NavLink>
      </nav>
    );
  };
  

export default Nav;