import React from 'react';

import '../styling/about.css';

function About() {
    return(
        <section className='about-wrapper'>
            <div className='featured-wrapper'>
                <div className='featured-image-wrapper'>
                    <div className='featured-portrait-container'>
                        <div className='featured-portrait__image image-troy-portrait'></div>
                    </div>
                </div>
                <div className='featured-certification-container'>
                    <div className='featured-certification-container'>
                        <div className='featured-certification__image image-bloomtech-logo'></div>
                    </div>
                </div>
                <div className='featured-text-container'>

                </div>
            </div>
            <div className='gallery-wrapper'>

            </div>
        </section>
    );
}

export default About;