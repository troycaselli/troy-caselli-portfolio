/* adapted from https://codepen.io/alvarotrigo/pen/ExwgbZv?editors=1100 */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ThemeToggle } from "../Common";
import "../../styling/hamburger.css";

function Hamburger() {
  const [checkedValue, setCheckedValue] = useState(false);

  //activeLink sets 'current' class on Links
  const [activeLink, setActiveLink] = useState("/");
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash && hash !== "#top") {
      setActiveLink(pathname + hash);
    }
    if (!hash) {
      setActiveLink(pathname);
    }
  }, [pathname, hash, key]);

  const toggleCheckboxValue = () => {
    setCheckedValue(!checkedValue);
  };

  return (
    <section className="hamburger-wrapper">
      <label>
        <input
          type="checkbox"
          className="hamburger-input"
          checked={checkedValue}
          onChange={toggleCheckboxValue}
        />
        <div className="hamburger-menu">
          <div className="hamburger"></div>
        </div>
        <div className="hamburger-theme-toggle">
          <ThemeToggle />
        </div>
        <div className="hamburger-links">
          <Link
            to="/"
            className={
              "hamburger-link " + (activeLink === "/" ? "current" : "")
            }
            onClick={toggleCheckboxValue}
          >
            Home
          </Link>
          <Link
            to="/#projects"
            className={
              "hamburger-link " + (activeLink === "/#projects" ? "current" : "")
            }
            onClick={toggleCheckboxValue}
          >
            Projects
          </Link>
          <Link
            to="about"
            className={
              "hamburger-link " + (activeLink === "/about" ? "current" : "")
            }
            onClick={toggleCheckboxValue}
          >
            About Me
          </Link>
          <Link
            to="resume"
            className={
              "hamburger-link " + (activeLink === "/resume" ? "current" : "")
            }
            onClick={toggleCheckboxValue}
          >
            Résumé
          </Link>
        </div>
      </label>
    </section>
  );
}

export default Hamburger;
