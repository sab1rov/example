import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <Link to="/" className="header-logo">
            LOGO
          </Link>
          <div className="header-nav">
            <Link to="/about" className="header-nav-link">
              About
            </Link>
            <Link to="/contact" className="header-nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
