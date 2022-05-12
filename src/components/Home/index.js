import React from "react";
import "./Home.css";
import image from '../../assets/images/cd_logo.png'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";

// const globe = <FontAwesomeIcon icon={faGlobe} size="10x" />;

const Home = () => {
  return (
    <div className="container home_con">
      <div className="row">
        <div className="title col-lg-6">
          <h1>Cory Davis</h1>
          <p>FULL STACK WEB DEVELOPER</p>
          <button className="btn"><a className="contact_btn" href="/Contact">Contact Me</a></button>
        </div>
        <div className="globe_con col-lg-6">
          <img src={image} alt="cd logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
