import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import Slideshow from "./Slideshow";
// import logo from "../assets/Outlaw718-logo.png";
// import hero1 from "../assets/hero1.2.png";
// import hero2 from "../assets/hero2.png";
// import hero3 from "../assets/hero3.png";
import car from "../assets/car.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";

let heroImage = car;
const fadeImages = [car, car2, car3];
let startNum = 1;

const Homepage = () => {
  const [loading, isLoading] = useState(false);

  const getHeroImage = () => {
    isLoading(true);
    if (startNum <= fadeImages.length - 1) {
      heroImage = fadeImages[startNum];
      startNum++;
    } else {
      startNum = 0;
      heroImage = fadeImages[startNum];
      startNum++;
    }
    isLoading(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getHeroImage();
    }, 4000);
  }, []);

  return (
    <>
      <section className="hero is-white">
        <div className="hero-body">
          <div
            className="container is-flex is-justify-content-center"
            style={{
              height: "100vh",
            }}
          >
            <img
              src={heroImage}
              alt="logo"
              className="fade-in"
              style={{
                width: "100vw",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
        <section className="section is-large">
          <div className="container is-max-widescreen">
            <p className="subtitle is-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link
              to="/contact"
              className="subtitle is-4"
              style={{ textDecoration: "underline" }}
            >
              Get in touch
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Homepage;
