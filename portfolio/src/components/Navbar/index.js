import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand">Abbey Schueller</h1>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className={window.location.pathname === "/education" ? "nav-link active" : "nav-link"}>Education</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>Work</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
