import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faFileCode,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const home = <FontAwesomeIcon icon={faHouse} size="2x" />;
const about = <FontAwesomeIcon icon={faUser} size="2x" />;
const projects = <FontAwesomeIcon icon={faFileCode} size="2x" />;
const contact = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
const resume = <FontAwesomeIcon icon={faFile} size="2x" />;
const github = <FontAwesomeIcon icon={faGithub} size="2x" />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />;

const Nav = () => {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/">
            <i className="home nav-link">{home}</i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/About">
            <i className="about nav-link">{about}</i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Projects">
            <i className="projects nav-link">{projects}</i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contact">
            <i className="contact nav-link">{contact}</i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume">
            <i className="resume nav-link">{resume}</i>
          </NavLink>
        </li>
        <li className="nav-item-2">
          <i className="github nav-link">{github}</i>
        </li>
        <li className="nav-item-3">
          <i className="linkedin nav-link">{linkedin}</i>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
