import {useEffect, useState, useMemo} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import './styling/app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Resume from './components/Resume';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: "#fffbeb",
        },
        divider: "#fde68a",
        background: {
          default: "#fbbf24",
          paper: "#fbbf24",
        },
        text: {
          primary: "#000",
          secondary: "#27272a",
        },
      }
    : {
        // palette values for dark mode
        primary: {
          main: "#dbf4ff",
        },
        divider: "#004282",
        background: {
          default: "#000e21",
          paper: "#000e21",
        },
        text: {
          primary: "#fff",
          secondary: "#71717a",
        },
      }),
  }
})

function App() {
  const [mode, setMode] = useState('light');
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { pathname, hash, key } = useLocation();

  // checks url for hash pathing
  useEffect(() => {
    // if no hash in path, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    }
    // else scroll to id on page
    else {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  useMemo(() => {
    if(darkMode) {
      setMode('dark')
    } else {
      setMode('light')
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    // Does this need to be a parent or is grandparent sufficient?
    <ThemeProvider theme={theme}>
      <div className='app-wrapper'>
          <Header />
        
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='about' element={<About />} />
            <Route path='resume' element={<Resume />} />
          </Routes>

          <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
