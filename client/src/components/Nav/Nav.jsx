import React from "react";
import SearchBar from "./../SearchBar/SearchBar";
import { NavLink} from "react-router-dom";
import './Nav.css';

const Nav = ({ onSearch, access, setAccess }) => {



  const handleLogOut = ()=>{
     setAccess(false);
 
  }

    return (
      <nav className="nav">
        <SearchBar onSearch={onSearch}></SearchBar>
        <NavLink className="about" to="/About"><button className="b1">About</button></NavLink>
        <NavLink to="/Home" className="home"><button className="b2">Home</button></NavLink>
        <NavLink to="/favorites" className="favorite"><button className="b3">Favorites</button></NavLink>
        <button className="logout" onClick={handleLogOut}>Log Out</button>
      </nav>
    );
  };
  

export default Nav;