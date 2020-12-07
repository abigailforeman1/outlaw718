import React from "react";
import Slideshow from "./Slideshow";

const Homepage = () => {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <Slideshow />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
