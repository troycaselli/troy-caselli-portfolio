import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowUp, faEnvelope, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import '../styling/footer.css';

function Footer() {
    return(
        <div className='footer-wrapper'>
            <div className='footer-container-top'>
                <div className='footer-media-top'>
                    <div className='footer-media-container'>
                        <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
                    </div>
                </div>
                <div className='footer-media-top'>
                    <div className='footer-media-container'>
                        <FontAwesomeIcon icon={faArrowUp} size='lg' />
                    </div>
                </div>
                <div className='footer-media-top'>
                    <div className='footer-media-container'>
                        <FontAwesomeIcon icon={faCalendarDays} size='lg' />
                    </div>
                </div>
            </div>
            <div className='footer-container-bottom'>
                <div className='footer-media-bottom'>
                    <div className='footer-media-container'>
                        <FontAwesomeIcon icon={faGithub} size='xl' />
                    </div>
                </div>
                <div className='footer-media-bottom'>
                    <div className='footer-media-container'>
                        <FontAwesomeIcon icon={faEnvelope} size='lg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;