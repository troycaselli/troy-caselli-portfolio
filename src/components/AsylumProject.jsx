import React, { useState, useEffect } from "react";
import Divider from "./Divider";
import Loading from "./Loading.jsx";
import "../styling/projectDetails.css";
import citizenshipMap from "../images/projects/asylumGrantTracker/citizenshipMap.png";
import dataChart from "../images/projects/asylumGrantTracker/dataChart.png";
import heatMap from "../images/projects/asylumGrantTracker/heatMap.png";
import landingPage from "../images/projects/asylumGrantTracker/landingPage.png";
import loginPage from "../images/projects/asylumGrantTracker/loginPage.png";
import profilePage from "../images/projects/asylumGrantTracker/profilePage.png";
import signupPage from "../images/projects/asylumGrantTracker/signupPage.png";
import timeGraph from "../images/projects/asylumGrantTracker/timeGraph.png";

function AsylumProject() {
  //toggle loading component
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="project-wrapper">
      <div className="project-section">
        <h1 className="project__title">ASYLUM OFFICE GRANT RATE TRACKER</h1>
        <h3 className="project__role">Front-End Developer, UI/UX Developer</h3>
        <p className="project__about">
          This site provides public information and data for asylum grant rates
          in the USA and private features for authorized users{" "}
        </p>
        <a
          className="project__link"
          href="https://github.com/troycaselli/asylum-rg-fe-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
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
              Allows <b>public guests</b> to search asylum decision data by
              date, citizenship, and region
            </p>
          </div>
          <div className="project__users-circle">
            <p className="project__circle-text">
              In addition to priveleges of public guests, <b>members</b> have
              exclusive access to a personal profile page
            </p>
          </div>
        </div>
      </div>

      <Divider />

      <div className="project-section">
        <h2 className="project__subtitle">User Flow</h2>
        <div className="project-card">
          <h3 className="project-card__user-title">Public Guest Flow</h3>
          <div className="circles-container">
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>I</b>
              </p>
              <p className="project__circle-text">
                Read featured content and download asylum data on the landing
                page
              </p>
            </div>
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>II</b>
              </p>
              <p className="project__circle-text">
                Search and filter asylum office grant data by date, citizenship,
                and region via an interactive map and chart
              </p>
            </div>
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>III</b>
              </p>
              <p className="project__circle-text">
                Redirect to Human Rights First for further information including
                news and involvement opportunities
              </p>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h3 className="project-card__user-title">Member Flow</h3>
          <div className="circles-container">
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>I</b>
              </p>
              <p className="project__circle-text">
                Sign up or Login to the website with valid credentials via the
                portal
              </p>
            </div>
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>II</b>
              </p>
              <p className="project__circle-text">
                View private portfolio page which displays your image, name,
                email, and raw data
              </p>
            </div>
            <div className="project__circle">
              <p className="project__circle-bold">
                <b>III</b>
              </p>
              <p className="project__circle-text">Logout of account</p>
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
            <img
              src={landingPage}
              alt="landing page"
              className="design__img"
            ></img>
            <img src={heatMap} alt="heat map" className="design__img"></img>
            <img
              src={citizenshipMap}
              alt="citizenship map"
              className="design__img"
            ></img>
            <img src={timeGraph} alt="time graph" className="design__img"></img>
            <img src={dataChart} alt="data chart" className="design__img"></img>
            <img
              src={signupPage}
              alt="signup page"
              className="design__img"
            ></img>
            <img src={loginPage} alt="login page" className="design__img"></img>
            <img
              src={profilePage}
              alt="profile page"
              className="design__img"
            ></img>
          </div>
        )}
      </div>
    </section>
  );
}

export default AsylumProject;
