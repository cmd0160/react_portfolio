import React from "react";
import linkedIn from "../../assets/images/LinkedIn_icon.png";
import gitHub from "../../assets/images/GitHub_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-6 gh_icon">
          <img src={gitHub} alt="GitHub Icon" className="github" />
        </div>
        <div className="col-md-6 li_icon">
          <img src={linkedIn} alt="LinkedIn Icon" className="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
