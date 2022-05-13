import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faFileCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const home = <FontAwesomeIcon icon={faHouse} size="2x" />;
const about = <FontAwesomeIcon icon={faUser} size="2x" />;
const projects = <FontAwesomeIcon icon={faFileCode} size="2x" />;
const contact = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
const github = <FontAwesomeIcon icon={faGithub} size="2x" />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />;

const Nav = () => {
  return (
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/react_portfolio/">
              <i className="home nav-link" data-hover="home">{home}</i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/react_portfolio/About">
              <i className="about nav-link">{about}</i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/react_portfolio/Projects">
              <i className="projects nav-link">{projects}</i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/react_portfolio/Contact">
              <i className="contact nav-link">{contact}</i>
            </NavLink>
          </li>
          <li className="nav-item-2">
            <a href="https://github.com/cmd0160" className="github nav-link">
              {github}
            </a>
          </li>
          <li className="nav-item-3">
            <a
              href="https://www.linkedin.com/in/cory-davis-803b57224/"
              className="linkedin nav-link"
            >
              {linkedin}
            </a>
          </li>
        </ul>
    </div>
  );
};

export default Nav;
