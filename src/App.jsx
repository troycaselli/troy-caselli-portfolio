import {Routes, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Resume from './components/Resume';

function App() {

  return (
    <div>
      <Header />

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
