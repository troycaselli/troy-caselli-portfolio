import React from "react";
import { Link } from "react-router-dom";
import images from "../../images/projectPreviews";

import "../../styling/projects.css";

function Projects() {
  return (
    <section className="projects-wrapper">
      <div className="project-container">
        <Link to="/faith-in-five" className="project-image__link">
          <img
            srcSet={`${images.faithInFiveSm} 480w, ${images.faithInFiveMd} 800w, ${images.faithInFiveLg} 1280w`}
            sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
            alt="Faith In Five Project Screenshot"
            className="project-image"
            src={images.faithInFiveMd}
          />
        </Link>
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
      </div>
      <div className="project-container project-reverse">
        <Link to="/family-promise-sms" className="project-image__link">
          <img
            srcSet={`${images.famPromSm} 480w, ${images.famPromMd} 800w, ${images.famPromLg} 1280w`}
            sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
            alt="Famnily Promise SMS Project Screenshot"
            className="project-image"
            src={images.famPromMd}
          />
        </Link>
        <div className="project-info" id="sms">
          <h3 className="project-info__title">Family Promise SMS</h3>
          <h4 className="project-info__role">Front-End Developer</h4>
          <p className="project-info__text">
            This application enables homeless individuals to digitally fill out
            and submit an intake form for admittance to a local shelter.
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
      <div className="project-container">
        <Link to="/asylum-grant-tracker" className="project-image__link">
          <img
            srcSet={`${images.asylumSm} 480w, ${images.asylumMd} 800w, ${images.asylumLg} 1280w`}
            sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
            alt="Asylum Grant Tracker Project Screenshot"
            className="project-image"
            src={images.asylumMd}
          />
        </Link>
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
      </div>

      <div className="project-container project-reverse">
        <a
          href="https://github.com/troycaselli/web-module-project-client-auth"
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className="project-image__link"
        >
          <img
            srcSet={`${images.friendsSm} 480w, ${images.friendsMd} 800w, ${images.friendsLg} 1280w`}
            sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
            alt="Friends List Login Project Screenshot"
            className="project-image"
            src={images.friendsMd}
          />
        </a>
        <div className="project-info" id="friends">
          <h3 className="project-info__title">Friends List Login</h3>
          <h4 className="project-info__role">
            Front-End Developer, UI/UX Developer
          </h4>
          <p className="project-info__text">
            This app simulates an electronic phonebook by storing a user's list
            of friends with their contact information. Access with Username:
            "Bloom", Password: "Tech"
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
      <div className="project-container">
        <a
          href="https://github.com/troycaselli/node-db1-project"
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className="project-image__link"
        >
          <img
            srcSet={`${images.userSm} 480w, ${images.userMd} 800w, ${images.userLg} 1280w`}
            sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
            alt="User Account Database Project Screenshot"
            className="project-image"
            src={images.userMd}
          />
        </a>
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
      </div>
    </section>
  );
}

export default Projects;
