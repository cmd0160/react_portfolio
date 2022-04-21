import React from "react";
import "./Projects.css";
import PenguinPost from "../../assets/images/Penguin-post-login.png";
import RioColo from '../../assets/images/riocolo-cup.jpg'

const Projects = () => {
  return (
    <div className="container">
      <h1 className="projects_title">PROJECTS</h1>
      <div className="row">
        <div className="col-md-6">
          <a href="https://github.com/Chewbakkah/UTA-Final-Project">
            <img
              src={RioColo}
              alt="Putting green sunrise"
              className="penguinPost"
            />
          </a>
        </div>
        <div className="col-md-6">
        <a href="https://github.com/cmd0160/penguin-post">
            <img
              src={PenguinPost}
              alt="Penguin Post Login Page"
              className="penguinPost"
            />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <a href="">
            <img
              src={PenguinPost}
              alt="Penguin Post Login Page"
              className="penguinPost"
            />
          </a>
        </div>
        <div className="col-md-6">
        <a href="">
            <img
              src={PenguinPost}
              alt="Penguin Post Login Page"
              className="penguinPost"
            />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <a href="">
            <img
              src={PenguinPost}
              alt="Penguin Post Login Page"
              className="penguinPost"
            />
          </a>
        </div>
        <div className="col-md-6">
        <a href="">
            <img
              src={PenguinPost}
              alt="Penguin Post Login Page"
              className="penguinPost"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
