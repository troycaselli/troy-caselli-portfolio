import React, { useState, useEffect } from "react";

import { Divider, Loading, PreloadImage } from "../Common";
import images from "../../images/projects/famPromIntake";
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
              Expedites the process for <b>applicants</b> who need assistance to
              receive funds and accomodations
            </p>
          </div>
          <div className="project__users-circle">
            <p className="project__circle-text">
              Expedites the process for <b>applicants</b> who need assistance to
              receive funds and accomodations
            </p>
          </div>
        </div>
      </div>

      <Divider />

      <div className="project-section">
        <h2 className="project__subtitle">User Flow</h2>
        <div className="project-card">
          <h3 className="project-card__user-title">Applicant Flow</h3>
          <div className="circles-container">
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>I</b>
              </p>
              <p className="project__circle-text">
                Sign up or login to the SMS App with a valid email address
              </p>
            </div>
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>II</b>
              </p>
              <p className="project__circle-text">
                Sufficiently fill out and submit the Shelter Management System
                Intake Form
              </p>
            </div>
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>III</b>
              </p>
              <p className="project__circle-text">
                Receive an announcement by phone, email, or mail from Family
                Promise describing your qualification and receipt of benefits
              </p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div className="project-section">
        <h2 className="project__subtitle">Mock-Ups</h2>
        <p className="project__text">
          The stakeholder wanted the digital intake form to match the style of
          the current app and include the information in the sixteen-page paper
          intake form (excerpt below).
        </p>
        <PreloadImage
          src={images.intakeForm}
          placeholderSrc={images.intakeFormBlur}
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
              src={images.welcomePage}
              placeholderSrc={images.welcomePageBlur}
              alt="welcome page"
              className="design__img"
            />
            <PreloadImage
              src={images.loginPage}
              placeholderSrc={images.loginPageBlur}
              alt="login page"
              className="design__img"
            />
            <PreloadImage
              src={images.confirmationEmail}
              placeholderSrc={images.confirmationEmailBlur}
              alt="confirmation email"
              className="design__img"
            />
            <PreloadImage
              src={images.landing}
              placeholderSrc={images.landingBlur}
              alt="landing page"
              className="design__img"
            />
            <PreloadImage
              src={images.profilePage}
              placeholderSrc={images.profilePageBlur}
              alt="profile page"
              className="design__img"
            />
            <PreloadImage
              src={images.lastPage}
              placeholderSrc={images.lastPageBlur}
              alt="last page"
              className="design__img"
            />
            <div className="design-container__full-images">
              <PreloadImage
                src={images.intakePageIncomplete}
                placeholderSrc={images.intakePageIncompleteBlur}
                alt="intake page: incomplete"
                className="design__img"
              />
              <PreloadImage
                src={images.intakePageCompleted}
                placeholderSrc={images.intakePageCompletedBlur}
                alt="intake page: completed"
                className="design__img"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ESReportsProject;
