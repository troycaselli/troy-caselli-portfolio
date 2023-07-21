import React, { useState, useEffect } from "react";

import IncrementedImage from "./IncrementedImage.jsx";
import Divider from "./Divider";
import Loading from "./Loading.jsx";
import confirmationEmail from "../images/projects/faithInFive/confirmation-email.png";
import dashboardPage from "../images/projects/faithInFive/dashboard-page.png";
import groupsPage from "../images/projects/faithInFive/groups-page.png";
import listViewPage from "../images/projects/faithInFive/list-view-page.png";
import loginPage from "../images/projects/faithInFive/login-page.png";
import mapViewPage from "../images/projects/faithInFive/map-view-page.png";
import restrictedPage from "../images/projects/faithInFive/restricted-page.png";
import usersPage from "../images/projects/faithInFive/users-page.png";
import welcomePage from "../images/projects/faithInFive/welcome-page.png";
import confirmationEmailBlur from "../images/projects/faithInFive/confirmation-email-blur.jpg";
import dashboardPageBlur from "../images/projects/faithInFive/dashboard-page-blur.jpg";
import groupsPageBlur from "../images/projects/faithInFive/groups-page-blur.jpg";
import listViewPageBlur from "../images/projects/faithInFive/list-view-page-blur.jpg";
import loginPageBlur from "../images/projects/faithInFive/login-page-blur.jpg";
import mapViewPageBlur from "../images/projects/faithInFive/map-view-page-blur.jpg";
import restrictedPageBlur from "../images/projects/faithInFive/restricted-page-blur.jpg";
import usersPageBlur from "../images/projects/faithInFive/users-page-blur.jpg";
import welcomePageBlur from "../images/projects/faithInFive/welcome-page-blur.jpg";
import "../styling/projectDetails.css";

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
            <IncrementedImage
              src={welcomePage}
              placeholderSrc={welcomePageBlur}
              alt="welcome page"
              className="design__img"
            />
            <IncrementedImage
              src={loginPage}
              placeholderSrc={loginPageBlur}
              alt="login page"
              className="design__img"
            />
            <IncrementedImage
              src={confirmationEmail}
              placeholderSrc={confirmationEmailBlur}
              alt="confirmation email"
              className="design__img"
            />
            <IncrementedImage
              src={dashboardPage}
              placeholderSrc={dashboardPageBlur}
              alt="dashboard page"
              className="design__img"
            />
            <IncrementedImage
              src={mapViewPage}
              placeholderSrc={mapViewPageBlur}
              alt="map view page"
              className="design__img"
            />
            <IncrementedImage
              src={listViewPage}
              placeholderSrc={listViewPageBlur}
              alt="list view page"
              className="design__img"
            />
            <IncrementedImage
              src={groupsPage}
              placeholderSrc={groupsPageBlur}
              alt="groups page"
              className="design__img"
            />
            <IncrementedImage
              src={usersPage}
              placeholderSrc={usersPageBlur}
              alt="users page"
              className="design__img"
            />
            <IncrementedImage
              src={restrictedPage}
              placeholderSrc={restrictedPageBlur}
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
