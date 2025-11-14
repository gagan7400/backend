import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ui.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-2">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold text-pink fs-2" to="/">
          MeShop
        </NavLink>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <NavLink className="nav-link fw-semibold fs-5 text-black hover-pink" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link fw-semibold fs-5 text-black hover-pink" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link fw-semibold fs-5 text-black hover-pink" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="d-flex align-items-center gap-2">
          <NavLink to="/signup" className="btn btn-pink text-white fw-semibold px-4 py-1 btn-w">
            Sign  Up
          </NavLink>
          <NavLink to="/login" className="btn btn-outline-pink fw-semibold px-4 py-1">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
    