import React from "react";
import slopes from "../../assets/images/Slopes.JPG";
import background from '../../assets/images/Crumb_img.jpeg';
import './About.css'

const About = () => {
  return (
    <div className="container about_con">
      <div className="row">
        <div className="col-md-6 img_con">
          <h1 className="about_title">Cory Davis</h1>
          <p className="about_desc">
            I have been a dedicated and progressive music educator in the Texas
            public school system for 6 years. Prior to my professional teaching
            career, I attended the University of Nebraska-Lincoln where I
            obtained a Masters degree in music performance and had the
            opportunity to instruct collegiate level courses in music pedagogy
            and performance. I have strong leadership, organizational and
            preparation skills and I thrive in a team work environment. I am
            extremely excited to begin a new chapter in my life and this new
            career path in Web Development.
          </p>
        </div>
        <div className="col-md-6 title_box">
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
