import React from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowUp, faEnvelope, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import '../styling/footer.css';

function Footer() {
    return(
        <div className='footer-wrapper'>
            <div className='footer-container-top'>
                <div className='footer-media-top'>
                    <a  href='https://www.linkedin.com/in/troy-caselli/'
                        target='blank'
                        className='footer-media-container'
                    >
                            <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
                    </a>
                </div>
                <div className='footer-media-top'>
                    <Link to='/' className='footer-media-container'>
                            <FontAwesomeIcon icon={faArrowUp} size='lg' />
                    </Link>
                </div>
                <div className='footer-media-top'>
                    <div 
                        className='footer-media-container'
                        type='button'
                        onClick={() => {console.log('Calendly')}}
                    >
                            <FontAwesomeIcon icon={faCalendarDays} size='lg' />
                    </div>
                </div>
            </div>
            <div className='footer-container-bottom'>
                <div className='footer-media-bottom'>
                    <a href='https://github.com/troycaselli'
                        target='blank'
                        className='footer-media-container'
                    >
                            <FontAwesomeIcon icon={faGithub} size='xl' />
                    </a>
                </div>
                <div className='footer-media-bottom'>
                    <div 
                        className='footer-media-container'
                        type='button'
                        onClick={() => {console.log('Email')}}
                    >
                            <FontAwesomeIcon icon={faEnvelope} size='lg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;