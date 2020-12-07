import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import hero1 from "../assets/hero1.2.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const fadeImages = [hero1, hero2, hero3];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div>
            <img src={fadeImages[0]} alt="car" />
          </div>
        </div>
        <div className="each-fade">
          <div>
            <img src={fadeImages[1]} alt="car" />
          </div>
        </div>
        <div className="each-fade">
          <div>
            <img src={fadeImages[2]} alt="car" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
