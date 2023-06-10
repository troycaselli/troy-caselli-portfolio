import React, {useState, useEffect, useMemo} from 'react';
import {Link, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import image from '../images/logo/sword-spade-large.webp';
import '../styling/header.css';

function Header() {

    //activeLink sets 'current' class on Links
    const [activeLink, setActiveLink] = useState('/');
    const { pathname, hash, key } = useLocation();
    useEffect(() => {
        if (hash && hash !== '#top') {
            setActiveLink(pathname + hash);
        }
        if(!hash) {
            setActiveLink(pathname);
        }
    }, [pathname, hash, key]);

    // theme and icon switch
    const [themeIcon, setThemeMode] = useState('moon')
    const toggleThemeIcon = () => {
        if (themeIcon === 'sun') {
            setThemeMode('moon')
        } else {
            setThemeMode('sun')
        }
    }

    useMemo(() => {
        if(!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        else if (themeIcon === 'sun') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }, [themeIcon])
    


    // useEffect(() => {
    //     const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    //     function switchTheme(e) {
    //         if(!localStorage.getItem('theme')) {
    //             localStorage.setItem('theme', 'light');
    //         }
    //         else if (themeMode === 'moon') {
    //             document.documentElement.setAttribute('data-theme', 'dark');
    //             localStorage.setItem('theme', 'dark');
    //         }
    //         else {
    //             document.documentElement.setAttribute('data-theme', 'light');
    //             localStorage.setItem('theme', 'light');
    //         }
    //     }
    //     toggleSwitch.addEventListener('change', switchTheme, false);
    // }, [themeMode])

    return(
        <div className='header-wrapper'>
            <div className='navlink-wrapper'>
                <div className='navlink-container-left'>
                    <Link to='/' className={'header-link ' + (activeLink === '/' ? 'current' : '')}>Home</Link>
                    <Link to='/#projects' className={'header-link ' + (activeLink === '/#projects' ? 'current' : '')}>Projects</Link>
                </div>
                <div className='navlink-container-right'>
                    <Link to='about' className={'header-link ' + (activeLink === '/about' ? 'current' : '')}>About Me</Link>
                    <Link to='resume' className={'header-link ' + (activeLink === '/resume' ? 'current' : '')}>Résumé</Link>
                </div>
                <label className="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className={themeIcon} onClick={e => toggleThemeIcon(e)}></div>
                </label>
            </div>
            <div className='logo-container'>
                <img src={image} alt="Logo" className='logo-image'/>
            </div>
        </div>
    );
}

export default Header;