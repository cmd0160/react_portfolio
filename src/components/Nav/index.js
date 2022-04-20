import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav_bar container-fluid">
      <div className="row">
        <div className="col-sm-6 icon_con">
          <a href="/" className="icon">
            ICON
          </a>
        </div>
        <div className="navCom_con col-sm-6">
          <div className="container b">
            <div className="nav_con row">
              <div className="nav col-sm-2">
                <a href="/" className="about">
                  ABOUT
                </a>
              </div>
              <div className="nav col-sm-2 ">
                <a href="/" className="projects">
                  PROJECTS
                </a>
              </div>
              <div className="nav col-sm-2">
                <a href="/" className="contact">
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
