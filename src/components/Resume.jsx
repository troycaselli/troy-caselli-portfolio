import React from 'react';

import '../styling/resume.css';
import resumePDF from '../troy-caselli-web-dev-resume.pdf';

function Resume() {
    return(
        <section className='resume-wrapper'>

            <div className='resume-section'>
                <h2 className='resume__title'>TECHNICAL SKILLS</h2>
                <div className='skills-texts'>
                    <p className='skills-text'>
                        <span className='skills-subtitle'>Front-End:</span> JavaScript, React.js, TypeScript, Next.js, C++, Axios, Redux, Context API, HTML, CSS (Less, Tailwind, ChakraUI), Yup
                    </p>
                    <p className='skills-text'>
                        <span className='skills-subtitle'>Back-End:</span> Node.js, Express, Relational Databases (SQLite3 and PostgreSQL), Docker, knex.js, PHP
                    </p>
                    <p className='skills-text'>
                        <span className='skills-subtitle'>Additional Skills:</span> API endpoints/Integration, automation testing (Jest and Cypress), Project Management, GitHub, GitLab, VS Code, Git CLI, Postman, HTTPie, Vercel, Netlify, Deployment, Architecture, Algorithms, Debugging
                    </p>
                </div>
            </div>

            <div className='resume-divider'>
                <div className='resume-divider__half'></div>
                <div className='resume-divider__outer-diamond'>
                    <div className='resume-divider__inner-diamond'></div>
                </div>
                <div className='resume-divider__half'></div>
            </div>

            <div className='resume-section'>
                <h2 className='resume__title'>PROJECTS</h2>
                <div className='resume-container'>
                    <div className='resume__specs'>
                        <p className='resume__name'>Faith in Five Initiative,&nbsp;</p>
                        <p className='resume__role'>Full-Stack Developer</p>
                    </div>
                    <p className='resume-text'>
                        This web app helps Faith Bible Church serve its neighbors better through interactive addresses display and visit log feature.
                    </p>
                    <div className='resume-texts'>
                        <p className='resume-text'>
                            ◆	Created and incorporated a fully functional user landing dashboard and neighbor logs archive page in TypeScript.
                        </p>
                        <p className='resume-text'>
                            ◆	Developed an intuitive user interface using Chakra UI elements with custom styling from an Adobe XD wireframe.
                        </p>
                        <p className='resume-text'>
                            ◆	Established API integration between PostgreSQL database and dashboard and logs archive pages for relevant UX.
                        </p>
                    </div>
                </div>
                <div className='resume-container'>
                    <div className='resume__specs'>
                        <p className='resume__name'>Family Promise Shelter Management System,&nbsp;</p>
                        <p className='resume__role'>Front-End Developer</p>
                    </div>
                    <p className='resume-text'>
                        This application enables homeless individuals to digitally fill out and submit an intake form for admittance to a local shelter.
                    </p>
                    <div className='resume-texts'>
                        <p className='resume-text'>
                            ◆	Built and merged a multi-step, single-page application, intake form into the project using Typescript (TSX).
                        </p>
                        <p className='resume-text'>
                            ◆	Utilized Tailwind to match the intake application form components with the whole project for UI/UX consistency.
                        </p>
                    </div>
                </div>
                <div className='resume-container'>
                    <div className='resume__specs'>
                        <p className='resume__name'>Asylum Office Grant Rate Tracker,&nbsp;</p>
                        <p className='resume__role'><i>Front-End Developer, UI/UX Developer</i></p>
                    </div>
                    <p className='resume-text'>
                        This site provides public information and data for asylum grant rates in the USA and private features for authorized users.
                    </p>
                    <div className='resume-texts'>
                        <p className='resume-text'>
                            ◆	Built landing and profile pages from wireframe using Less CSS, flexbox, and media queries for responsive UI design.
                        </p>
                        <p className='resume-text'>
                            ◆	Replaced mock data with production data by adapting and rewriting the logic of Axios promises and API integration.
                        </p>
                        <p className='resume-text'>
                            ◆	Implemented Auth0 login/logout functionality with protected routes and secure API endpoints in React Router 5.
                        </p>
                    </div>
                </div>
                <div className='resume-container'>
                    <div className='resume__specs'>
                        <p className='resume__name'>Friends List Login,&nbsp;</p>
                        <p className='resume__role'>Front-End Developer, UI/UX Developer</p>
                    </div>
                    <p className='resume-text'>
                        This web application simulates an electronic phonebook by storing a user's list of friends with their contact information.
                    </p>
                    <div className='resume-texts'>
                        <p className='resume-text'>
                            ◆	Designed a user-friendly, single-page application which interacts with a user’s friend list using React Router 6.
                        </p>
                        <p className='resume-text'>
                            ◆	Regulated access to restricted user Friends and Add Friend pages with token authorization and PrivateRoutes.
                        </p>
                        <p className='resume-text'>
                            ◆	Employed Yup to validate and add new friend data and incorporated error messages and disable for quality UX.
                        </p>
                    </div>
                </div>
                <div className='resume-container'>
                    <div className='resume__specs'>
                        <p className='resume__name'>User Account Database,&nbsp;</p>
                        <p className='resume__role'>Back-End Developer</p>
                    </div>
                    <p className='resume-text'>
                        This backend-only app records and persists user and company name information alongside their current spending plan cap.
                    </p>
                    <div className='resume-texts'>
                        <p className='resume-text'>
                            ◆	Constructed a RESTful API integrating each CRUD operation for users to  interact with the budget database.
                        </p>
                        <p className='resume-text'>
                            ◆	Developed middleware functions purposed to evaluate user requests and respond with an error message if invalid.
                        </p>
                        <p className='resume-text'>
                            ◆	Utilized Knex in asynchronous models enabling access to and manipulation of the SQLite3 user accounts database.
                        </p>
                    </div>
                </div>
            </div>

            <div className='resume-divider'>
                <div className='resume-divider__half'></div>
                <div className='resume-divider__outer-diamond'>
                    <div className='resume-divider__inner-diamond'></div>
                </div>
                <div className='resume-divider__half'></div>
            </div>

            <div className='resume-section'>
                <h2 className='resume__title'>EXPERIENCE</h2>
                <div className='resume-container'>
                    <div className='resume__specs'>
                        <p className='resume__name'>ikTech,&nbsp;</p>
                        <p className='resume__role'>Contract Full-Stack Developer</p>
                    </div>
                    <p className='resume__dates'>Jan. 2023-Current</p>
                    <div className='resume-texts'>
                        <p className='resume-text'>
                            ◆	Contributed to large-scale, multi-tier production applications enabling nonprofits to better serve the community.
                        </p>
                        <p className='resume-text'>
                            ◆	Developed code in agile workflows with small teams and independently to achieve stakeholder needs on schedule.
                        </p>
                    </div>
                </div>
                <div className='resume-container'>
                    <div className='resume__specs'>
                        <p className='resume__name'>Family Promise,&nbsp;</p>
                        <p className='resume__role'>Front-End Developer Intern</p>
                    </div>
                    <p className='resume__dates'>Sept. 2022-Dec. 2022</p>
                    <div className='resume-texts'>
                        <p className='resume-text'>
                            ◆	Advanced the development of a digital intake form to more expediently admit potential homeless shelter guests.
                        </p>
                        <p className='resume-text'>
                            ◆	Learned TypeScript, Tailwind CSS library, and Docker in order to efficiently contribute to projects source code.
                        </p>
                    </div>
                </div>
            </div>

            <div className='resume-divider'>
                <div className='resume-divider__half'></div>
                <div className='resume-divider__outer-diamond'>
                    <div className='resume-divider__inner-diamond'></div>
                </div>
                <div className='resume-divider__half'></div>
            </div>

            <div className='resume-section'>
                <h2 className='resume__title'>EDUCATION</h2>
                <div className='resume-container'>
                    <div className='education-container'>
                        <p className='resume__name'>Bloom Institute of Technology,&nbsp;</p>
                        <p className='resume__degree'>
                            Graduate of the Full-Stack Web Development Program
                        </p>
                    </div>
                    <p className='resume__dates'>July 2022 – Apr. 2023</p>
                </div>
                <div className='resume-container'>
                    <div className='education-container'>
                        <p className='resume__name'>The Southern Baptist Theological Seminary,&nbsp;</p>
                        <p className='resume__degree'>Anticipated M. Div. in Christian Ministry</p>
                    </div>
                    <p className='resume__dates'>Feb.  2020 –Dec. 2025</p>
                </div>
                <div className='resume-container'>
                    <div className='education-container'>
                        <p className='resume__name'>Moody Bible Institute,&nbsp;</p>
                        <p className='resume__degree'>Bachelor of Arts in Biblical Studies with <span className='normal-font'>summa cum laude</span></p>
                    </div>
                    <p className='resume__dates'>Sept. 2013 – Dec. 2017</p>
                </div>
            </div>

            <a 
                href={resumePDF}
                target='_blank'
                rel='noopener noreferrer'
                className='resume-button'
            >PDF Download</a>

        </section>
    );
}

export default Resume;