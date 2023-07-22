import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faEnvelope,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import "../../styling/footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container-top">
        <div className="footer-media-top">
          <a
            href="https://www.linkedin.com/in/troy-caselli/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-media-container"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
        <div className="footer-media-top">
          <a href="#top" className="footer-media-container">
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
          </a>
        </div>
        <div className="footer-media-top">
          <a
            href="https://calendly.com/troy-caselli/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-media-container"
            type="button"
          >
            <FontAwesomeIcon icon={faCalendarDays} size="lg" />
          </a>
        </div>
      </div>
      <div className="footer-container-bottom">
        <div className="footer-media-bottom">
          <a
            href="https://github.com/troycaselli"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-media-container"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </div>
        <div className="footer-media-bottom">
          <a
            className="footer-media-container"
            type="button"
            href="mailto:swordandtrowel1689@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
