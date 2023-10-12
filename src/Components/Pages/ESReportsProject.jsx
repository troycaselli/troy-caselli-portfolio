import React, { useState, useEffect } from "react";

import { Divider, Loading, PreloadImage } from "../Common";
import images from "../../images/projects/ESReports";
import "../../styling/projectDetails.css";

function ESReportsProject() {
  //toggle loading component
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="project-wrapper">
      <div className="project-section">
        <h1 className="project__title">EMERGENCY SHELTERS REPORTS HUB</h1>
        <h3 className="project__role">Full-Stack Developer</h3>
        <p className="project__about">
          This site centralizes and organizes Spokane County ES data for public
          availability and utilization by the City of Spokane.
        </p>
        <a
          className="project__link"
          href="https://reports-green.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
        {/* <p className='project__contributions'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ab ratione error. Commodi placeat, ex eius harum atque eum porro dolorem cumque eligendi quisquam modi. Possimus doloremque fugiat reiciendis sapiente!
                </p> */}
      </div>

      <Divider />

      <div className="project-section">
        <h2 className="project__subtitle">User Overview</h2>
        <div className="users-container">
          <div className="project__users-circle">
            <p className="project__circle-text">
              Enables <b>the public</b> to access emergency shelter data for the
              County of Spokane
            </p>
          </div>
          <div className="project__users-circle">
            <p className="project__circle-text">
              Provides ciritical data for <b>Government Agencies</b> of Spokane
              to evaluate and use for legal compliance and policy-making
            </p>
          </div>
        </div>
      </div>

      <Divider />

      <div className="project-section">
        <h2 className="project__subtitle">User Flow</h2>
        <div className="project-card">
          <h3 className="project-card__user-title">
            Public and Government Agency Flow
          </h3>
          <div className="circles-container">
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>I</b>
              </p>
              <p className="project__circle-text">
                Select an ES report to navigate from the splash page to the data
                display page
              </p>
            </div>
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>II</b>
              </p>
              <p className="project__circle-text">
                Navigate between and interact with the ES data charts/maps on
                the page
              </p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div className="project-section">
        <h2 className="project__subtitle">Mock-Ups</h2>
        <p className="project__text">
          ES Reports mock-ups were built using Figma.
        </p>
        <PreloadImage
          src={images.reportsMockUpsPage}
          placeholderSrc={images.reportsMockUpsPageBlur}
          alt="intake form sample"
          className="design__img"
        />
      </div>

      <Divider />

      <div className="project-section">
        <h2 className="project__subtitle">UX / Design</h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="design-container">
            <PreloadImage
              src={images.splashPage}
              placeholderSrc={images.splashPageBlur}
              alt="splash page"
              className="design__img"
            />
            <PreloadImage
              src={images.allProvidersPage}
              placeholderSrc={images.allProvidersPageBlur}
              alt="all providers page"
              className="design__img"
            />
            <PreloadImage
              src={images.esProvidersPage}
              placeholderSrc={images.esProvidersPageBlur}
              alt="es providers page"
              className="design__img"
            />
            <PreloadImage
              src={images.fpsPreventionPage}
              placeholderSrc={images.fpsPreventionPageBlur}
              alt="fps prevention page"
              className="design__img"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default ESReportsProject;
