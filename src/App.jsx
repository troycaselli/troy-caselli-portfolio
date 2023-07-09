import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./styling/app.css";
import Header from "./components/Header";
import Hamburger from "./components/Hamburger";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Resume from "./components/Resume";
import FaithInFiveProject from "./components/FaithInFiveProject";
import FamPromProject from "./components/FamPromProject";
import AsylumProject from "./components/AsylumProject";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { pathname, hash, key } = useLocation();

  // Logic for showing navbar for desktop or hamburger for tablet and phones
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="app-wrapper">
      {windowWidth > 900 ? <Header /> : <Hamburger />}
      <ThemeToggle />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="faith-in-five" element={<FaithInFiveProject />} />
        <Route path="family-promise-sms" element={<FamPromProject />} />
        <Route path="asylum-grant-tracker" element={<AsylumProject />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
