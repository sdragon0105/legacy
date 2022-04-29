import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
function Navbar({ logo }) {
  return (
    <header className="navbar">
      <Link to="/" className="disableLink">
        <img src={logo} className="navbarLogo" alt="P2E" />
      </Link>
      <div className="navbarRoutes">
        <Link to="/hub" className="disableLink">
          <h2 className="navbarRouteItem">HUB</h2>
        </Link>
        <HashLink smooth to="/#about" className="disableLink">
          <h2 className="navbarRouteItem">ABOUT</h2>
        </HashLink>
        <HashLink smooth to="/#community" className="disableLink">
          <h2 className="navbarRouteItem">COMMUNITY</h2>
        </HashLink>
      </div>
    </header>
  );
}

export default Navbar;
