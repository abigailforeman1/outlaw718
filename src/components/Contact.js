import React from "react";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <>
      <Fade>
        <section className="hero is-white is-large">
          <div className="hero-body is-justify-content-space-around is-flex is-flex-wrap-wrap contact-wrapper">
            <section className="section inquiries-section" style={{ width: "50%" }}>
              <div className="container">
                <h1 className="title is-1" style={{ wordBreak: "normal" }}>
                  INQUIRIES
                </h1>
              </div>
            </section>
            <section
              className="section is-align-self-center inquiries-info-section"
              style={{ width: "50%" }}
            >
              <div className="container">
                <h1 className="subtitle is-4 inquiries-info">
                  For all inquiries, please contact Paul at {""}
                  <a
                    href="mailto:outlaw718@btinternet.com"
                    style={{ textDecoration: "underline" }}
                    className="footer-link"
                  >
                    outlaw718@btinternet.com
                  </a>{" "}
                  or call +447941 742002.
                </h1>
              </div>
            </section>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default Contact;
