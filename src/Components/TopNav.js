import React from "react";
import logo from "../image/sachindralogo.png";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
export const TopNav = () => {
  return (
    <Navbar expand="md" id="navbar" className="topNav " collapseOnSelect>
      <Container>
        <Link to="/">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="img"
            src={logo}
            alt="logo"
            width="60px"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link className="nav-link text-light" to="/skills">
              Skills
            </Link>
            <Link className="nav-link text-light" to="/projects">
              Projects
            </Link>
            <Link className="nav-link text-light" to="/about-me">
              About Me
            </Link>
            <Link className="nav-link text-light" to="/contact">
              {" "}
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
