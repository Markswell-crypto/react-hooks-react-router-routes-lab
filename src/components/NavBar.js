import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/movies">MOVIES</NavLink>
    <NavLink to="/actors">ACTORS</NavLink>
    <NavLink to="/directors">DIRECTORS</NavLink>
  </div>
    );
}

export default NavBar;
