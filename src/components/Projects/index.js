import React, { useState } from "react";
import "./Projects.css";
import { images } from "../../utils/carouselImages";

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="container projects_con">
      {/* <div className="row"> */}
        <div className="carousel_con col-lg-8">
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
              Prev
            </button>
            <button
              className="btn next"
              onClick={() => {
                currentImage < images.length - 1 &&
                  setCurrentImage(currentImage + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>

        <div className="project_text col-lg-4">
          <div className="center">
            <h1>{images[currentImage].title}</h1>
            <p>
              {images[currentImage].description}
              <br />
              <br />
              <span>Technologies:</span>
              <br />
              {images[currentImage].tech}
            </p>
            <div className="button_box">
              {" "}
              <button className="project_btn btn">
                <a href={images[currentImage].url}>
                  View Project
                </a>
              </button>
              <button className="deployed_btn btn">
                <a href={images[currentImage].deployed_site}>
                  View Site
                </a>
              </button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Projects;
