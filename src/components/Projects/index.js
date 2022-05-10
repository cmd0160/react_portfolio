import React, { useState } from "react";
import "./Projects.css";
import { images } from "../../utils/carouselImages";

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="carousel_con col-lg-6">
          <h3 className="projects_title">Projects</h3>
          <div className="carousel">
            <div
              className="carouselInner"
              style={{ backgroundImage: `url(${images[currentImage].img})` }}
            ></div>
          </div>
          <div className="btn_con">
            <button
              className="btn last"
              onClick={() => {
                currentImage > 0 && setCurrentImage(currentImage - 1);
              }}
            >
              last
            </button>
            <button
              className="btn next"
              onClick={() => {
                currentImage < images.length - 1 &&
                  setCurrentImage(currentImage + 1);
              }}
            >
              next
            </button>
          </div>
        </div>

        <div className="project_text col-lg-6">
          <div className="center">
            <h1>{images[currentImage].title}</h1>
            <p>{images[currentImage].description}</p>
            <button className="btn">View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
