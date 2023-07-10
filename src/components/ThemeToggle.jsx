import React, { useState, useMemo } from "react";
import logo from "../images/logo/sword-spade-large.webp";
import "../styling/themeToggle.css";
import "../styling/header.css";

function ThemeToggle() {
  // theme and icon switch
  const [themeIcon, setThemeMode] = useState(
    localStorage.getItem("themeIcon") || "moon"
  );
  const toggleThemeIcon = () => {
    if (themeIcon === "sun") {
      setThemeMode("moon");
    } else {
      setThemeMode("sun");
    }
  };
  useMemo(() => {
    if (!localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      localStorage.setItem("themeIcon", "moon");
    } else if (themeIcon === "sun") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      localStorage.setItem("themeIcon", "sun");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      localStorage.setItem("themeIcon", "moon");
    }
  }, [themeIcon]);

  return (
    <div className="theme-toggle-wrapper">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <label className="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className={themeIcon} onClick={(e) => toggleThemeIcon(e)}></div>
      </label>
    </div>
  );
}

export default ThemeToggle;
