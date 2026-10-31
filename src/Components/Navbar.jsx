import React from "react";
import { useRoutes } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          MyLogo
        </a>

        <div className="navbar-nav ms-auto">
          <a className="nav-link active" href="/">
            Home
          </a>
          <a className="nav-link" href="/about">
            About
          </a>
          <a className="nav-link" href="/contact">
            Contact
          </a>
          <a className="nav-link" href="/products">
            Products
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
