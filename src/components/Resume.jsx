import React from 'react';

import '../styling/resume.css';

function Resume() {
    return(
        <section className='resume-wrapper'>

            <div className='resume-section'>
                <h2 className='resume__title'>TECHNICAL SKILLS</h2>
                {/* <div className='skills-texts'> */}
                    <p className='skills-text'>
                        <span className='skills-subtitle'>Front End:</span> JavaScript, React.js, TypeScript, Next.js, C++, Axios, Redux, Context API, HTML, CSS (Less, Tailwind, ChakraUI), Jest, Cypress, Yup
                    </p>
                    <p className='skills-text'>
                        <span className='skills-subtitle'>Back End:</span> Node.js, Express, SQLite3, Relational Databases, Docker, knex.js, PHP
                    </p>
                    <p className='skills-text'>
                        <span className='skills-subtitle'>Additional Skills:</span> Project Management, GitHub, GitLab, VS Code, Git CLI, Postman, HTTPie, Vercel, Netlify, Deployment, Architecture, Algorithms, Debugging
                    </p>
                {/* </div> */}
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
                        <p className='resume__name'>Asylum Office Grant Rate Tracker,&nbsp;</p>
                        <p className='resume__role'><i>Front End Developer, UI/UX Developer</i></p>
                    </div>
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
                        <p className='resume__name'>Family Promise Shelter Management System,&nbsp;</p>
                        <p className='resume__role'>Front End Developer</p>
                    </div>
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
                        <p className='resume__name'>Friends List Login,&nbsp;</p>
                        <p className='resume__role'>Front End Developer, UI/UX Developer</p>
                    </div>
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
                        <p className='resume__role'>Back End Developer</p>
                    </div>
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
                        <p className='resume__role'>Full Stack Developer</p>
                    </div>
                    <p className='resume__dates'>Sept. 2022-Current</p>
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
                        <p className='resume__name'>Northwest Christian Schools,&nbsp;</p>
                        <p className='resume__role'>Substitute Teacher</p>
                    </div>
                    <p className='resume__dates'>Oct. 2021 – June 2022</p>
                    <div className='resume-texts'>
                        <p className='resume-text'>
                            ◆	Managed classes of various subjects consisting of middle and high school aged students.
                        </p>
                        <p className='resume-text'>
                            ◆	Taught course material, facilitated discussions, and provided guidance for individual and group assignments.
                        </p>
                        <p className='resume-text'>
                            ◆	Designated by teachers and admin staff as the preferred substitute to contact whenever the need arose.
                        </p>
                    </div>
                </div>
                <div className='resume-container'>
                    <div className='resume__specs'>
                        <p className='resume__name'>AMAN Services,&nbsp;</p>
                        <p className='resume__role'>General Laborer</p>
                    </div>
                    <p className='resume__dates'>Feb. 2017 – Aug. 2019</p>
                    <div className='resume-texts'>
                        <p className='resume-text'>
                            ◆	Completed projects within timeframe and budget which increased the company’s gross income over $20,000.
                        </p>
                        <p className='resume-text'>
                            ◆	Received managerial confirmation that client relations were consistently professional and effective for business.
                        </p>
                        <p className='resume-text'>
                            ◆	Participated in business development from a self-employed to employee-based model vital for company growth.
                        </p>
                    </div>
                </div>
                <div className='resume-container'>
                    <div className='resume__specs'>
                        <p className='resume__name'>Arby’s,&nbsp;</p>
                        <p className='resume__role'>In-Store Trainer</p>
                    </div>
                    <p className='resume__dates'>Apr. 2013 – Aug. 2017</p>
                    <div className='resume-texts'>
                        <p className='resume-text'>
                            ◆	Trained and certified employees in safety, customer service, and a variety of work stations and positions.
                        </p>
                        <p className='resume-text'>
                            ◆	Received the Employee of the Month Award on two occasions in a store exceeding fifty employees.
                        </p>
                        <p className='resume-text'>
                            ◆	Received the “OPS” Gold Award on three occasions for excellence in quality, speed, and teamwork on the backline.
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
                            Graduate of the Full Stack Web Development Program
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

        </section>
    );
}

export default Resume;