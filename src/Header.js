import React from "react";
import "./Header.css";
import logo from "./logo1.PNG";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
