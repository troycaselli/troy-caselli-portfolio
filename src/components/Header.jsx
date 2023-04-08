import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import '../styling/header.css';

function Header() {
    return(
        <div className='header-wrapper'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/#projects'>Projects</NavLink>
            <NavLink to='about'>About Me</NavLink>
            <NavLink to='resume'>Résumé</NavLink>
        </div>
    );
}

export default Header;