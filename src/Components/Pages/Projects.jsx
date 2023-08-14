import React from "react";
import { Link } from "react-router-dom";

import "../../styling/projects.css";

function Projects() {
  const arrowUp = "\u{25B2}";
  const arrowDown = "\u{25BC}";

  // U+25B5 (▵)
  // U+25BF (▿)
  // U+25B2 (▲)
  // U+25BC (▼)

  const toggleArrow = (evt) => {
    const elValue = evt.target.getAttribute("value");
    const elValueId = "#" + elValue;
    const elInfo = document.querySelector(elValueId);
    const elArrowId = "#" + elValue + "-text";
    const elArrow = document.querySelector(elArrowId);

    if (elInfo.classList.contains("opened")) {
      elInfo.classList.remove("opened");
      elArrow.innerText = arrowDown;
    } else {
      elInfo.classList.add("opened");
      elArrow.innerText = arrowUp;
    }
  };

  return (
    <section className="projects-wrapper">
      <div className="projects-container-left">
        <div className="project-container-left">
          <div className="project-info" id="faith">
            <h3 className="project-info__title">Faith in Five Initiative</h3>
            <h4 className="project-info__role">Full-Stack Developer</h4>
            <p className="project-info__text">
              This web app helps Faith Bible Church serve its neighbors better
              through interactive addresses display and visit log feature.
            </p>
            <div className="project-links-container">
              <a
                className="project-info__link"
                href="https://faith-in-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <text className="project-info__divider">|</text>
              <Link to="/faith-in-five" className="project-info__link">
                Exhibit
              </Link>
            </div>
          </div>
          <div className="project-image-container-left">
            <div
              className="project-image image-faith"
              value="faith"
              onClick={toggleArrow}
            >
              <p className="project-image__text" id="faith-text" value="faith">
                {arrowDown}
              </p>
            </div>
          </div>
        </div>
        <div className="project-container-left">
          <div className="project-info" id="asylum">
            <h3 className="project-info__title">
              Asylum Office Grant Rate Tracker
            </h3>
            <h4 className="project-info__role">
              Front-End Developer, UI/UX Developer
            </h4>
            <p className="project-info__text">
              This site provides public information and data for asylum grant
              rates in the USA and private features for authorized users.
            </p>
            <div className="project-links-container">
              {/* <a className='project-info__link' href='' target='_blank' rel='noopener noreferrer' >Website</a>
<text className='project-info__divider'>|</text> */}
              <a
                className="project-info__link"
                href="https://github.com/troycaselli/asylum-rg-fe-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>

              <text className="project-info__divider">|</text>
              <Link to="/asylum-grant-tracker" className="project-info__link">
                Exhibit
              </Link>
            </div>
          </div>
          <div className="project-image-container-left">
            <div
              className="project-image image-asylum"
              value="asylum"
              onClick={toggleArrow}
            >
              <p
                className="project-image__text"
                id="asylum-text"
                value="asylum"
              >
                {arrowDown}
              </p>
            </div>
          </div>
        </div>
        <div className="project-container-left">
          <div className="project-info" id="user">
            <h3 className="project-info__title">User Account Database</h3>
            <h4 className="project-info__role">Back-End Developer</h4>
            <p className="project-info__text">
              This backend-only app records and persists user and company name
              information alongside their current spending plan cap.
            </p>
            <div className="project-links-container">
              <a
                className="project-info__link"
                href="https://github.com/troycaselli/node-db1-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="project-image-container-left">
            <div
              className="project-image image-user"
              value="user"
              onClick={toggleArrow}
            >
              <p className="project-image__text" id="user-text" value="user">
                {arrowDown}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-container-right">
        <div className="project-container-right">
          <div className="project-image-container-right">
            <div
              className="project-image image-sms"
              value="sms"
              onClick={toggleArrow}
            >
              <p className="project-image__text" id="sms-text" value="sms">
                {arrowDown}
              </p>
            </div>
          </div>
          <div className="project-info" id="sms">
            <h3 className="project-info__title">Family Promise SMS</h3>
            <h4 className="project-info__role">Front-End Developer</h4>
            <p className="project-info__text">
              This application enables homeless individuals to digitally fill
              out and submit an intake form for admittance to a local shelter.
            </p>
            <div className="project-links-container">
              <a
                className="project-info__link"
                href="https://shelter-management-system.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <text className="project-info__divider">|</text>
              <Link to="/family-promise-sms" className="project-info__link">
                Exhibit
              </Link>
            </div>
          </div>
        </div>
        <div className="project-container-right">
          <div className="project-image-container-right">
            <div
              className="project-image image-friends"
              value="friends"
              onClick={toggleArrow}
            >
              <p
                className="project-image__text"
                id="friends-text"
                value="friends"
              >
                {arrowDown}
              </p>
            </div>
          </div>
          <div className="project-info" id="friends">
            <h3 className="project-info__title">Friends List Login</h3>
            <h4 className="project-info__role">
              Front-End Developer, UI/UX Developer
            </h4>
            <p className="project-info__text">
              This app simulates an electronic phonebook by storing a user's
              list of friends with their contact information. Access with
              Username: "Bloom", Password: "Tech"
            </p>
            <div className="project-links-container">
              {/* <a className='project-info__link' href='' target='_blank' rel='noopener noreferrer' >Website</a>
                                <text className='project-info__divider'>|</text> */}
              <a
                className="project-info__link"
                href="https://github.com/troycaselli/web-module-project-client-auth"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
