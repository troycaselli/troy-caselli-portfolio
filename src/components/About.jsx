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
                <div className='featured-certification-wrapper'>
                    <div className='featured-certification-container'>
                        <a 
                            href='https://www.credly.com/badges/ca1eb39e-acfe-432d-9199-0ce5ed2340f3/public_url'
                            target='blank'
                            type='button'
                        >
                            <div className='featured-certification__image image-bloomtech-logo' />
                        </a>
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