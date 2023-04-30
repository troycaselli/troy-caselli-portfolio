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
                            target='_blank'
                            rel='noopener noreferrer'
                            type='button'
                        >
                            <div className='featured-certification__image image-bloomtech-logo' />
                        </a>
                    </div>
                </div>
                <div className='featured-text-container'>
                    <div className='featured-text-titles'>
                        <h3 className='featured-text__title'>Follower of Christ.</h3>
                        <h3 className='featured-text__title'>Husband and Father.</h3>
                        <h3 className='featured-text__title'>Web Developer.</h3>
                    </div>
                    <p className='featured-text__body'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ea temporibus architecto culpa molestiae harum molestias ducimus voluptatum. Facilis, aperiam et doloribus corporis molestias dolore delectus quis vel! Officia, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempore? Quia eaque ipsam perspiciatis! Blanditiis molestias, ipsum eos illum eveniet pariatur. Eos quisquam atque non eius, quia beatae aliquid iste.
                    </p>
                </div>
            </div>
            <div className='gallery-wrapper'>

            </div>
        </section>
    );
}

export default About;