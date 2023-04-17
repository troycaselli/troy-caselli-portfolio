import React from 'react';

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
    return(
        <div className='landing-wrapper'>
            <div className='intro-container'>
                <div className="svg-wrapper">
                    <svg height="150" width="600" xmlns="http://www.w3.org/2000/svg">
                        <rect class="shape" height="150" width="600" />
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
            </div>
            <div  id='projects' className='projects-wrapper'>
                <h2>Projects</h2>

            </div>
        </div>
    );
}

export default LandingPage;