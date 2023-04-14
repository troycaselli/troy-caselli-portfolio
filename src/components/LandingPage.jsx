import React from 'react';

import '../styling/landingPage.css';

function LandingPage() {
    return(
        <div className='landing-wrapper'>
            <div className='intro-container'>
                <div className="svg-wrapper">
                    <svg height="150" width="600" xmlns="http://www.w3.org/2000/svg">
                        <rect class="shape" height="150" width="600" />
                        <text x='30' y='95' className="text">TROY CASELLI</text>
                    </svg>
                </div>
            </div>
            <div  id='projects' className='projects-wrapper'>
                <h2>Projects</h2>

            </div>
        </div>
    );
}

export default LandingPage;