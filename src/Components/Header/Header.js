import React from "react";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to={"/"}> Home</Link>
        <Link to={"/login"}> Log In </Link>
        <Link to={'/register'} >Register</Link>
      </nav>
    </div>
  );
};

export default Header;
