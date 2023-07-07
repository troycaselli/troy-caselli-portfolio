import React from "react";
import Divider from "../components/Divider";

import "../styling/resume.css";
import "../styling/divider.css";
import resumePDF from "../troy-caselli-web-dev-resume.pdf";

function Resume() {
  return (
    <section className="resume-wrapper">
      <div className="resume-section">
        <h2 className="resume__title">TECHNICAL SKILLS</h2>
        <div className="skills-texts">
          <p className="skills-text">
            <span className="skills-subtitle">Front-End:</span> JavaScript,
            React.js, TypeScript, Next.js, HTML, CSS (Less, Tailwind, ChakraUI),
            Axios, Redux, Context API, Yup
          </p>
          <p className="skills-text">
            <span className="skills-subtitle">Back-End:</span> Node.js,
            Relational Databases (SQLite3 and PostgreSQL), Express, knex.js,
            Docker, C++, PHP
          </p>
          <p className="skills-text">
            <span className="skills-subtitle">Additional Skills:</span> API
            endpoints/integration, automation testing (Jest and Cypress),
            Debugging, Algorithms, Architecture, Project Management, Git CLI,
            GitHub, GitLab, VS Code, Postman, HTTPie, Vercel, Netlify,
            Deployment
          </p>
        </div>
      </div>

      <Divider />

      <div className="resume-section">
        <h2 className="resume__title">EXPERIENCE</h2>
        <div className="resume-container">
          <div className="resume__specs">
            <p className="resume__name">ikTech,&nbsp;</p>
            <p className="resume__role">Contract Full-Stack Developer</p>
          </div>
          <p className="resume__dates">Jan. 2023-Current</p>
          <p className="resume-description">
            Contributed to large-scale, multi-tier production applications
            enabling local nonprofits to better serve the community. Developed
            code in agile workflows to tailor products to stakeholders’ needs.
            Worked in small teams of two or three according to the demands of
            the current development iteration.
          </p>
          <div className="resume-texts">
            <div className="resume-container">
              <div className="resume__experience-specs">
                <p className="resume__name">Faith in Five Initiative&nbsp;</p>
                <p className="resume__dates">(Mar. 2023 - Current)</p>
              </div>
              <p className="resume-description">
                This app helps Faith Bible Church serve its neighbors better
                through an interactive address display and visit log feature.{" "}
              </p>
              <div className="resume-texts">
                <p className="resume-bullet">
                  ◆ Designed a fully functional landing dashboard and neighbor
                  logs archive page in TypeScript for 800 active users.
                </p>
                <p className="resume-bullet">
                  ◆ Crafted an intuitive UI from an Adobe XD wireframe using
                  customized Chakra UI for easy address and log access.
                </p>
                <p className="resume-bullet">
                  ◆ Filtered 12,000 addresses in PostgreSQL DB for relevant
                  dashboard and logs archive data through API integration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-container">
          <div className="resume__specs">
            <p className="resume__name">Family Promise,&nbsp;</p>
            <p className="resume__role">Front-End Developer Intern</p>
          </div>
          <p className="resume__dates">Sept. 2022-Dec. 2022</p>
          <p className="resume-description">
            Advanced the development of a digital intake form to expedite the
            administration of services to homeless families in Spokane.
            Self-learned TypeScript, Tailwind CSS library, and Docker in order
            to efficiently contribute to the project’s source code. Worked on
            project’s tasks independently while under the supervision of the
            project manager.
          </p>
          <div className="resume-texts">
            <div className="resume-container">
              <div className="resume__experience-specs">
                <p className="resume__name">
                  Family Promise Shelter Management System&nbsp;
                </p>
                <p className="resume__dates">(Nov. 2022 – Dec. 2022)</p>
              </div>
              <p className="resume-description">
                This application enables homeless families to digitally fill out
                and submit an intake form for admittance to a local shelter.
              </p>
              <div className="resume-texts">
                <p className="resume-bullet">
                  ◆ Built a single-page application intake form using TypeScript
                  to be used by 50 unique users per nonprofit per month.
                </p>
                <p className="resume-bullet">
                  ◆ Utilized Tailwind to match the intake application form
                  components with the whole project for UI/UX consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div className="resume-section">
        <h2 className="resume__title">PROJECTS</h2>
        <div className="resume-container">
          <div className="resume__specs">
            <p className="resume__name">
              Asylum Office Grant Rate Tracker,&nbsp;
            </p>
            <p className="resume__role">
              <i>Front-End Developer, UI/UX Developer&nbsp;</i>
            </p>
            <p className="resume__dates">(Mar. 2023)</p>
          </div>
          <p className="resume-description">
            This site provides public information and data for asylum grant
            rates in the USA and private features for authorized users.
          </p>
          <div className="resume-texts">
            <p className="resume-bullet">
              ◆ Built landing and profile pages from wireframe using Less CSS,
              flexbox, and media queries for responsive UI design.
            </p>
            <p className="resume-bullet">
              ◆ Replaced mock data with production data by adapting and
              rewriting the logic of Axios promises and API integration.
            </p>
            <p className="resume-bullet">
              ◆ Implemented Auth0 login/logout functionality with protected
              routes and secure API endpoints in React Router 5.
            </p>
          </div>
        </div>
        <div className="resume-container">
          <div className="resume__specs">
            <p className="resume__name">Friends List Login,&nbsp;</p>
            <p className="resume__role">
              Front-End Developer, UI/UX Developer&nbsp;
            </p>
            <p className="resume__dates">(Jan. 2023 – Apr. 2023)</p>
          </div>
          <p className="resume-description">
            This web application simulates an electronic phonebook by storing a
            user's list of friends with their contact information.
          </p>
          <div className="resume-texts">
            <p className="resume-bullet">
              ◆ Designed a user-friendly, single-page application which
              interacts with a user’s friend list using React Router 6.
            </p>
            <p className="resume-bullet">
              ◆ Regulated access to restricted user Friends and Add Friend pages
              with token authorization and PrivateRoutes.
            </p>
            <p className="resume-bullet">
              ◆ Employed Yup to validate and add new friend data and
              incorporated error messages and disable for quality UX.
            </p>
          </div>
        </div>
        <div className="resume-container">
          <div className="resume__specs">
            <p className="resume__name">User Account Database,&nbsp;</p>
            <p className="resume__role">Back-End Developer&nbsp;</p>
            <p className="resume__dates">(Dec. 2022 – Mar. 2023)</p>
          </div>
          <p className="resume-description">
            This backend-only app records and persists user and company name
            information alongside their current spending plan cap.
          </p>
          <div className="resume-texts">
            <p className="resume-bullet">
              ◆ Constructed a RESTful API integrating each CRUD operation for
              users to interact with the budget database.
            </p>
            <p className="resume-bullet">
              ◆ Developed middleware functions purposed to evaluate user
              requests and respond with an error message if invalid.
            </p>
            <p className="resume-bullet">
              ◆ Utilized Knex in asynchronous models enabling access to and
              manipulation of the SQLite3 user accounts database.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      <div className="resume-section">
        <h2 className="resume__title">EDUCATION</h2>
        <div className="resume-container">
          <div className="education-container">
            <p className="resume__name">Bloom Institute of Technology,&nbsp;</p>
            <p className="resume__degree">
              Graduate of the Full-Stack Web Development Program
            </p>
          </div>
          <p className="resume__dates">July 2022 – Apr. 2023</p>
        </div>
        <div className="resume-container">
          <div className="education-container">
            <p className="resume__name">
              The Southern Baptist Theological Seminary,&nbsp;
            </p>
            <p className="resume__degree">
              Anticipated M. Div. in Christian Ministry
            </p>
          </div>
          <p className="resume__dates">Feb. 2020 – Dec. 2025</p>
        </div>
        <div className="resume-container">
          <div className="education-container">
            <p className="resume__name">Moody Bible Institute,&nbsp;</p>
            <p className="resume__degree">
              Bachelor of Arts in Biblical Studies with{" "}
              <span className="normal-font">summa cum laude</span>
            </p>
          </div>
          <p className="resume__dates">Sept. 2013 – Dec. 2017</p>
        </div>
      </div>

      <a
        href={resumePDF}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        PDF Download
      </a>
    </section>
  );
}

export default Resume;
