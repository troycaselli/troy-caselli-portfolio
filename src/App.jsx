import {Routes, Route} from 'react-router-dom';

import './styling/app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Resume from './components/Resume';

function App() {

  return (
    <div class='app-wrapper'>
      <div class='header'>
        <Header />
      </div>
      
      <div class='main'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
        </Routes>
      </div>

      <div class='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
