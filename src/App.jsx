import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./styling/app.css";
import { Header } from "./Components";
import { Hamburger } from "./Components";
import { ThemeToggle } from "./Components";
import { Footer } from "./Components";
import { LandingPage } from "./Components";
import { About } from "./Components";
import { Resume } from "./Components";
import { FaithInFiveProject } from "./Components";
import { FamPromProject } from "./Components";
import { AsylumProject } from "./Components";

function App() {
  // Logic for showing navbar for desktop or hamburger for tablet and phones
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
  const { pathname, hash, key } = useLocation();
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
      {windowWidth > 900 ? <ThemeToggle /> : <></>}

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
