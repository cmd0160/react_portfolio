import React from "react";
import slopes from "../../assets/images/Slopes.JPG";
import background from "../../assets/images/Crumb_img.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="container about_con">
      <div className="row">
        <div className="col-md-6 title_box">
          <h1 className="about_title">Cory Davis</h1>
          <p className="about_desc">
            Front-end web developer leveraging an education background to build
            progressive and nuanced applications on the web. I have recently
            graduated from a Full Stack Web Development Bootcamp at the
            University of Texas at Austin and have acquired newly developed
            skills in Javascript, CSS, MongoDB, Express, React, and Node.js. I have
            strong leadership, organizational and preparation skills. I thrive
            in a team work environment and am extremely excited to begin a new
            chapter in my life and this new career path in Web Development. 
            <br/>
            <br/>
            <span className="past_work-ex">Past work experience: </span>
            <br/>
            <br/>
            I have been a dedicated and progressive music
            educator in the Texas public school system for 6 years. Prior to my
            professional teaching career, I attended the University of
            Nebraska-Lincoln where I obtained a Masters degree in music
            performance and had the opportunity to instruct collegiate level
            courses in music pedagogy and performance.
          </p>
        </div>
        <div className="col-md-6 img_con">
          <img
            src={slopes}
            alt="Snare drummer playing"
            className="img-fluid w-100 slopes_img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
