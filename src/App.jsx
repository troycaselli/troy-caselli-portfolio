import {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import './styling/app.css';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Resume from './components/Resume';

function App() {
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

  return (
    <div className='app-wrapper'>
        <Header />
        <ThemeToggle />

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
