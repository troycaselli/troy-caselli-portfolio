import React, {useEffect, useState} from 'react';

import cImage from '../images/c.svg';
import css3Image from '../images/css3.svg';
import cypressImage from '../images/cypress.svg';
import expressImage from '../images/express.svg';
import githubImage from '../images/github.svg';
import gitlabImage from '../images/gitlab.svg';
import html5Image from '../images/html5.svg';
import javaScriptImage from '../images/javascript.svg';
import lessImage from '../images/less.svg';
import nodeImage from '../images/nodejs.svg';
import reactImage from '../images/react.svg';
import reduxImage from '../images/redux.svg';
import slackImage from '../images/slack.svg';
import sqlite3Image from '../images/sqlite3.svg';
import typescriptImage from '../images/typescript.svg';
import vscodeImage from '../images/vscode.svg';
import '../styling/landingPage.css';

function LandingPage() {

    const arrowUp = '\u{25B2}'
    const arrowDown = '\u{25BC}'

    // U+25B5 (▵)
    // U+25BF (▿)
    // U+25B2 (▲)
    // U+25BC (▼)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // repositions relative svg text on window's inner-width change
    useEffect(() => {
        let value = window.innerWidth
        if(value > 900) {
            const el = document.querySelector('.text')
            el.setAttribute('x', '47')
            el.setAttribute('y', '97')
        } else if(value <= 900 && value > 650) {
            const el = document.querySelector('.text')
            el.setAttribute('x', '50')
            el.setAttribute('y', '71')
        } else if(value <= 850 && value > 450) {
            const el = document.querySelector('.text')
            el.setAttribute('x', '26')
            el.setAttribute('y', '48')
        } else {
            const el = document.querySelector('.text')
            el.setAttribute('x', '15')
            el.setAttribute('y', '32')
        }
    }, [windowWidth])

    window.onresize = () => {
        setWindowWidth(window.innerWidth)
    }

    const toggleArrow = (evt) => {
        const elValue = evt.target.getAttribute('value')
        const elValueId = '#' + elValue
        const elInfo = document.querySelector(elValueId)
        const elArrowId = '#' + elValue + '-text'
        const elArrow = document.querySelector(elArrowId)

        if(elInfo.classList.contains('opened')) {
            elInfo.classList.remove('opened')
            elArrow.innerText = arrowDown
        } else {
            elInfo.classList.add('opened')
            elArrow.innerText = arrowUp
        }
    }

    return(
        <div className='landing-wrapper'>
            <section className='intro-container'>
                <div className="svg-wrapper">
                    <svg className='svg-container' xmlns="http://www.w3.org/2000/svg">
                        <rect className="shape" />
                        <text x='47' y='97' className="text">TROY CASELLI</text>
                    </svg>
                </div>
                <div className='tools-wrapper'>
                    <img className='tool-image tool-1' src={cImage} alt='c'></img>
                    <img className='tool-image tool-2' src={css3Image} alt='css3'></img>
                    <img className='tool-image tool-3' src={cypressImage} alt='cypress'></img>
                    <img className='tool-image tool-4' src={expressImage} alt='express'></img>
                    <img className='tool-image tool-5' src={githubImage} alt='github'></img>
                    <img className='tool-image tool-6' src={gitlabImage} alt='gitlab'></img>
                    <img className='tool-image tool-7' src={html5Image} alt='html5'></img>
                    <img className='tool-image tool-8' src={javaScriptImage} alt='javascript'></img>
                    <img className='tool-image tool-9' src={lessImage} alt='less'></img>
                    <img className='tool-image tool-10' src={nodeImage} alt='node'></img>
                    <img className='tool-image tool-11' src={reactImage} alt='react'></img>
                    <img className='tool-image tool-12' src={reduxImage} alt='redux'></img>
                    <img className='tool-image tool-13' src={slackImage} alt='slack'></img>
                    <img className='tool-image tool-14' src={sqlite3Image} alt='sqlite3'></img>
                    <img className='tool-image tool-15' src={typescriptImage} alt='typescript'></img>
                    <img className='tool-image tool-16' src={vscodeImage} alt='vscode'></img>
                </div>
                <div className='titles-wrapper'>
                    <div className='titles-container'>
                        <text className='title-names'>
                            {'{ \n\t Full Stack Engineer && \n\t OOL Developer && \n\t React Developer \n};'}
                        </text>
                    </div>
                </div>
            </section>

            <h2 id='projects' className='projects-header'>Projects</h2>
            <hr className='projects-divider'/>
            <section className='projects-wrapper'>
                <div className='projects-container-left'>
                    <div className='project-container-left'>
                        <div className='project-info' id='asylum'>
                            <h3 className='project-info__title'>Asylum Office Grant Rate Tracker</h3>
                            <h4 className='project-info__role'>Front End Developer, UI/UX Developer</h4>
                            <p className='project-info__text'>
                                This responsive web application provides information and data for asylum grant rates and also features an Auth0 login for private pages and API calls.
                            </p>
                            <div className='project-links-container'>
                                {/* <a className='project-info__link' href='' target='blank' >Website</a>
                                <text className='project-info__divider'>|</text> */}
                                <a className='project-info__link' href='https://github.com/troycaselli/asylum-rg-fe-starter' target='blank' >Source Code</a>
                            </div>
                        </div>
                        <div className='project-image-container-left' >
                            <div className='project-image image-asylum' value='asylum' onClick={toggleArrow}>
                                <p className='project-image__text' id='asylum-text' value='asylum' >{arrowDown}</p>
                            </div>
                        </div>
                    </div>
                    <div className='project-container-left'>
                        <div className='project-info' id='friends'>
                            <h3 className='project-info__title'>Friends List Login</h3>
                            <h4 className='project-info__role'>Front End Developer, UI/UX Developer</h4>
                            <p className='project-info__text'>
                                This friend directory application stores a user's list of friends with their contact information. Access with Username: "Bloom", Password: "Tech"
                            </p>
                            <div className='project-links-container'>
                                {/* <a className='project-info__link' href='' target='blank' >Website</a>
                                <text className='project-info__divider'>|</text> */}
                                <a className='project-info__link' href='https://github.com/troycaselli/web-module-project-client-auth' target='blank' >Source Code</a>
                            </div>
                        </div>
                        <div className='project-image-container-left' >
                            <div className='project-image image-friends'value='friends' onClick={toggleArrow}> 
                                <p className='project-image__text' id='friends-text' value='friends' >{arrowDown}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects-container-right'>
                    <div className='project-container-right'>
                        <div className='project-image-container-right'>
                            <div className='project-image image-faith' value='faith' onClick={toggleArrow} >
                                <p className='project-image__text' id='faith-text' value='faith' >{arrowDown}</p>
                            </div>
                        </div>
                        <div className='project-info' id='faith'>
                            <h3 className='project-info__title'>Faith in Five Initiative</h3>
                            <h4 className='project-info__role'>Front End Developer</h4>
                            <p className='project-info__text'>
                                This application helps Faith Bible Church know its neighbors better by displaying all the homes in a five minute radius on a map and providing a visit logs feature.
                            </p>
                            <div className='project-links-container'>
                                <a className='project-info__link' href='https://faith-in-five.vercel.app/' target='blank' >Website</a>
                                <text className='project-info__divider'>|</text>
                                <a className='project-info__link' href='https://gitlab.com/nonprofit2/faithinfive' target='blank' >Private Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className='project-container-right'>
                        <div className='project-image-container-right'>
                            <div className='project-image image-user' value='user' onClick={toggleArrow} >
                                <p className='project-image__text' id='user-text' value='user' >{arrowDown}</p>
                            </div>
                        </div>
                        <div className='project-info' id='user'>
                            <h3 className='project-info__title'>User Account Database</h3>
                            <h4 className='project-info__role'>Back End Developer</h4>
                            <p className='project-info__text'>
                                This User Budget API app records and persists users/companies names and their budget through utilizing SQLite for data management.
                            </p>
                            <div className='project-links-container'>
                                <a className='project-info__link' href='https://github.com/troycaselli/node-db1-project' target='blank' >Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default LandingPage;