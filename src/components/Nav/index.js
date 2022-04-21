import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav_bar container-fluid">
      <div className="row">
        <div className="col-md-6 icon_con">
        <NavLink to="/" className='icon'>
            ICON
          </NavLink>
        </div>
        <div className="navCom_con col-md-6">
          <div className="container b">
            <div className="nav_con row">
              <div className="nav col-md-2">
                <NavLink to="/about" className="about">
                  ABOUT
                </NavLink>
              </div>
              <div className="nav col-md-2 ">
                <NavLink to="/projects" className="projects">
                  PROJECTS
                </NavLink>
              </div>
              <div className="nav col-md-2">
                <NavLink to="/contact" className="contact">
                  CONTACT
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
