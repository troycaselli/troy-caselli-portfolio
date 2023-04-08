import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import '../styling/header.css';

function Header() {
    return(
        <div className='header-wrapper'>
            <div className='navlink-wrapper'>
                <div className='navlink-container-left'>
                    <NavLink to='/' className='header-link'>Home</NavLink>
                    <NavLink to='/#projects' className='header-link'>Projects</NavLink>
                </div>
                <div className='navlink-container-right'>
                    <NavLink to='about' className='header-link'>About Me</NavLink>
                    <NavLink to='resume' className='header-link'>Résumé</NavLink>
                </div>
            </div>
            <div className='logo-container'></div>
        </div>
    );
}

export default Header;