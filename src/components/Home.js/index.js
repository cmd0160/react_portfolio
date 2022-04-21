import React from "react";
import "./Home.css";
import headshot from '../../assets/images/Headshots-2.jpeg'

const Home = () => {
  return (
    <div className="container home_con">
      <div className="row">
        <div className="col-md-6 img_con">
          <img src={headshot} alt="Happy Headshot" className="img-fluid w-100 headshot_img" />
        </div>
        <div className="col-md-6 title_box">
          <h1 className="title">Cory Davis</h1>
          <p className="desc">FULL STACK WEB DEVELOPER</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
