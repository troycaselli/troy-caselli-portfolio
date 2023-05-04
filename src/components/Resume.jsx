import React from 'react';

import '../styling/resume.css';

function Resume() {
    return(
        <section className='resume-wrapper'>

            <div className='skills-container'>
                <h2 className='skills__title'>TECHNICAL SKILLS</h2>
                <div className='skills-texts'>
                    <p className='skills-text'></p>
                    <p className='skills-text'></p>
                    <p className='skills-text'></p>
                </div>
            </div>

            <div className='projects-container'>
                <h2 className='projects__title'>PROJECTS</h2>
                <div className='project-container'>
                    <div className='project__specs'>
                        <p className='project__name'></p>
                        <p className='project__role'></p>
                    </div>
                    <div className='project-texts'>
                        <p className='projects-text'></p>
                        <p className='projects-text'></p>
                        <p className='projects-text'></p>
                    </div>
                </div>
                <div className='project-container'>
                    <div className='project__specs'>
                        <p className='project__name'></p>
                        <p className='project__role'></p>
                    </div>
                    <div className='project-texts'>
                        <p className='projects-text'></p>
                        <p className='projects-text'></p>
                        <p className='projects-text'></p>
                    </div>
                </div>
                <div className='project-container'>
                    <div className='project__specs'>
                        <p className='project__name'></p>
                        <p className='project__role'></p>
                    </div>
                    <div className='project-texts'>
                        <p className='projects-text'></p>
                        <p className='projects-text'></p>
                        <p className='projects-text'></p>
                    </div>
                </div>
                <div className='project-container'>
                    <div className='project__specs'>
                        <p className='project__name'></p>
                        <p className='project__role'></p>
                    </div>
                    <div className='project-texts'>
                        <p className='projects-text'></p>
                        <p className='projects-text'></p>
                        <p className='projects-text'></p>
                    </div>
                </div>
            </div>

            <div className='experiences-container'>
                <h2 className='experience__title'>EXPERIENCE</h2>
                <div className='experience-container'>
                    <div className='experience__specs'>
                        <p className='experience__name'></p>
                        <p className='experience__role'></p>
                        <p className='experience__dates'></p>
                    </div>
                    <div className='experience-texts'>
                        <p className='experience-text'></p>
                        <p className='experience-text'></p>
                        <p className='experience-text'></p>
                    </div>
                </div>
                <div className='experience-container'>
                    <div className='experience__specs'>
                        <p className='experience__name'></p>
                        <p className='experience__role'></p>
                        <p className='experience__dates'></p>
                    </div>
                    <div className='experience-texts'>
                        <p className='experience-text'></p>
                        <p className='experience-text'></p>
                        <p className='experience-text'></p>
                    </div>
                </div>
                <div className='experience-container'>
                    <div className='experience__specs'>
                        <p className='experience__name'></p>
                        <p className='experience__role'></p>
                        <p className='experience__dates'></p>
                    </div>
                    <div className='experience-texts'>
                        <p className='experience-text'></p>
                        <p className='experience-text'></p>
                        <p className='experience-text'></p>
                    </div>
                </div>
                <div className='experience-container'>
                    <div className='experience__specs'>
                        <p className='experience__name'></p>
                        <p className='experience__role'></p>
                        <p className='experience__dates'></p>
                    </div>
                    <div className='experience-texts'>
                        <p className='experience-text'></p>
                        <p className='experience-text'></p>
                        <p className='experience-text'></p>
                    </div>
                </div>
            </div>

            <div className='educations-container'>
                <h2 className='education__title'>EDUCATION</h2>
                <div className='education-container'>
                    <p className='education__name'></p>
                    <p className='education__degree'></p>
                    <p className='education__dates'></p>
                </div>
                <div className='education-container'>
                    <p className='education__name'></p>
                    <p className='education__degree'></p>
                    <p className='education__dates'></p>
                </div>
                <div className='education-container'>
                    <p className='education__name'></p>
                    <p className='education__degree'></p>
                    <p className='education__dates'></p>
                </div>
            </div>

        </section>
    );
}

export default Resume;