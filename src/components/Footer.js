import React from "react";
import navLogo from "../assets/Outlaw718-logo.png";

const Footer = () => {
  return (
    <footer className="footer is-flex is-justify-content-space-between is-align-items-center">
      <section className="content mt-0 mb-0 ml-0 mr-0">
        <img src={navLogo} alt="logo" style={{ maxHeight: "100px" }} />
      </section>

      <section className="content is-flex is-justify-content-flex-end footer-info">
        <div className="ml-3">
          <p className="mt-1 mb-1 ml-1 mr-1">+447941 742002</p>
          <p className="mt-1 mb-1 ml-1 mr-1">
            <a
              href="mailto:outlaw718@btinternet.com"
              style={{ textDecoration: "underline" }}
              className="footer-link"
            >
              outlaw718@btinternet.com
            </a>
          </p>
        </div>
        <div className="ml-6">
          <p
            className="mt-1 mb-1 ml-1 mr-1"
            style={{ textDecoration: "underline" }}
          >
            <a
              href="https://www.instagram.com/outlaw718/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
          </p>
          <p
            className="mt-1 mb-1 ml-1 mr-1"
            style={{ textDecoration: "underline" }}
          >
            <a
              href="https://www.linkedin.com/in/paul-foreman-645b0a57/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
