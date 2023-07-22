import React, { useState, useEffect } from "react";

import { Divider, Loading, PreloadImage } from "../Common";
import images from "../../images/projects/faithInFive";
import "../../styling/projectDetails.css";

function FaithInFiveProject() {
  //toggle loading component
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="project-wrapper">
      <div className="project-section">
        <h1 className="project__title">FAITH IN FIVE INITIATIVE</h1>
        <h3 className="project__role">Full-Stack Developer</h3>
        <p className="project__about">
          This web app helps Faith Bible Church serve its neighbors better
          through interactive addresses display and visit log feature
        </p>
        <a
          className="project__link"
          href="https://faith-in-five.vercel.app/"
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
              Enables Faith Bible Church Members <b>(Frontliners)</b> to track
              their hospitality and service visits to neighbors more effectively
            </p>
          </div>
          <div className="project__users-circle">
            <p className="project__circle-text">
              Simplifies the tasks of <b>administrators</b> who manage users,
              groups, and addresses
            </p>
          </div>
        </div>
      </div>

      <Divider />

      <div className="project-section">
        <h2 className="project__subtitle">User Flow</h2>
        <div className="project-card">
          <h3 className="project-card__user-title">Frontliner Flow</h3>
          <div className="circles-container">
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>I</b>
              </p>
              <p className="project__circle-text">
                Login to the FI5 App with a valid, whitelisted email address
              </p>
            </div>
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>II</b>
              </p>
              <p className="project__circle-text">
                Check the addresses (including location, status, and previous
                visits log) assigned for your group to visit
              </p>
            </div>
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>III</b>
              </p>
              <p className="project__circle-text">
                After meeting with a neighbor, submit a visit log with
                information such as name, interest in church, prayer requests,
                and needs
              </p>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h3 className="project-card__user-title">Administrator Flow</h3>
          <div className="circles-container">
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>I</b>
              </p>
              <p className="project__circle-text">
                Login to the FI5 App with a valid, admin email address
              </p>
            </div>
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>II</b>
              </p>
              <p className="project__circle-text">
                Add, edit, or remove users, groups, and addresses in order to
                ensure the best service for everyone who lives near the church
              </p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* <div className='project-section'>
        <h2 className='project__subtitle'>Wireframes</h2>
      </div>

      <Divider /> */}

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
              src={images.dashboardPage}
              placeholderSrc={images.dashboardPageBlur}
              alt="dashboard page"
              className="design__img"
            />
            <PreloadImage
              src={images.mapViewPage}
              placeholderSrc={images.mapViewPageBlur}
              alt="map view page"
              className="design__img"
            />
            <PreloadImage
              src={images.listViewPage}
              placeholderSrc={images.listViewPageBlur}
              alt="list view page"
              className="design__img"
            />
            <PreloadImage
              src={images.groupsPage}
              placeholderSrc={images.groupsPageBlur}
              alt="groups page"
              className="design__img"
            />
            <PreloadImage
              src={images.usersPage}
              placeholderSrc={images.usersPageBlur}
              alt="users page"
              className="design__img"
            />
            <PreloadImage
              src={images.restrictedPage}
              placeholderSrc={images.restrictedPageBlur}
              alt="restricted page"
              className="design__img"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default FaithInFiveProject;
