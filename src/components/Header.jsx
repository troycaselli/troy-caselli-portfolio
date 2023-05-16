import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { toggleTheme } from '../store/reducers/themeSlice';
import {useTheme} from '@mui/material/styles';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

import image from '../images/logo/sword-spade-large.webp';
import '../styling/header.css';

function Header() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);
    const theme = useTheme();

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
                <div className='theme-container'>
                    {theme.palette.mode === 'dark' ? <DarkModeRoundedIcon className='theme__button' onClick={() => dispatch(toggleTheme())}/> : <LightModeRoundedIcon className='theme__button' onClick={() => dispatch(toggleTheme())}/>}
                </div>
            </div>
            <div className='logo-container'>
                <img src={image} alt="Logo" className='logo-image'/>
            </div>
        </div>
    );
}

export default Header;