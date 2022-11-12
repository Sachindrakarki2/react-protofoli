import React from "react";
import logo from "../image/1.png";
import { NavTogler } from "./NavTogler";
export const TopNav = () => {
  return (
    <div id="navbar" className="topNav">
      <nav className="navbar navbar-expand-md bg-none">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="60px" />
          </a>
          <NavTogler />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
