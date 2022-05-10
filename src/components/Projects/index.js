import React, { useState } from "react";
import "./Projects.css";
import { images } from "../../utils/carouselImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";

const leftArrow = <FontAwesomeIcon icon={faSquareCaretLeft} size="2x" />;
const rightArrow = <FontAwesomeIcon icon={faSquareCaretRight} size="2x" />;

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <h1 className="projects_title">Projects</h1>
      <div className="carousel">
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${images[currentImage].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currentImage > 0 && setCurrentImage(currentImage - 1);
            }}
          >
            {leftArrow}
          </div>
          <div className="center">
            <h1>{images[currentImage].title}</h1>
            <p>{images[currentImage].description}</p>
          </div>
          <div
            className="right"
            onClick={() => {
              currentImage < images.length - 1 &&
                setCurrentImage(currentImage + 1);
            }}
          >
            {rightArrow}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
