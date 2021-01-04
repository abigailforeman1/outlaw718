import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import hero from "../assets/hero.jpg";
import hero2 from "../assets/hero1.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.jpg";
import bluecar from "../assets/image5.jpg";
import car from "../assets/car.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";

let heroImage = car;
const fadeImages = [car, hero3, car2, car3];
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
        <Fade>
          <div className="hero-body">
            <div
              className="container is-flex is-justify-content-center"
              style={{
                height: "90vh",
              }}
            >
              <img
                src={heroImage}
                alt="logo"
                className="fade-in"
                style={{
                  width: "90vw",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </Fade>
        <Fade>
          <section
            className="section is-large"
            style={{ backgroundColor: "slategrey" }}
          >
            <div className="container is-max-widescreen">
              <p className="subtitle is-2" style={{ color: "white" }}>
                Bespoke chassis design and fabrication. Classic car recreations
                built to order. Some more information here about what you do
                perhaps. Something punchy and to the point.
              </p>
              <Link
                to="/contact"
                className="subtitle is-4"
                style={{ textDecoration: "underline", color: "white" }}
              >
                Get in touch
              </Link>
            </div>
          </section>
        </Fade>
        <Fade>
          <section
            className="section is-medium"
            // style={{ backgroundColor: "slategrey" }}
          >
            <div className="container is-max-widescreen">
              <div className="tile is-ancestor">
                <div class="tile m-2">
                  <img src={hero4} alt="car" style={{ objectFit: "cover" }} />
                </div>
                <div class="tile m-2">
                  <img src={bluecar} alt="car" style={{ objectFit: "cover" }} />
                </div>
                <div class="tile m-2">
                  <img
                    src={hero3}
                    alt="car"
                    style={{ objectFit: "cover", objectPosition: "left" }}
                  />
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </section>
    </>
  );
};

export default Homepage;
