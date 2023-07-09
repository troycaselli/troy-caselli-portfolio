/* adapted from https://codepen.io/alvarotrigo/pen/ExwgbZv?editors=1100 */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import image from "../images/logo/sword-spade-large.webp";
import "../styling/hamburger.css";

function Header() {
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
    <div>
      <label>
        <input
          type="checkbox"
          className="hamburger-input"
          checked={checkedValue}
          onChange={toggleCheckboxValue}
        />
        <div class="hamburger-menu">
          <div class="hamburger"></div>
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
    </div>
    /* <div className="header-wrapper">
      <div className="navlink-wrapper">
        <div className="navlink-container-left">
          <Link
            to="/"
            className={"header-link " + (activeLink === "/" ? "current" : "")}
          >
            Home
          </Link>
          <Link
            to="/#projects"
            className={
              "header-link " + (activeLink === "/#projects" ? "current" : "")
            }
          >
            Projects
          </Link>
        </div>
        <div className="navlink-container-right">
          <Link
            to="about"
            className={
              "header-link " + (activeLink === "/about" ? "current" : "")
            }
          >
            About Me
          </Link>
          <Link
            to="resume"
            className={
              "header-link " + (activeLink === "/resume" ? "current" : "")
            }
          >
            Résumé
          </Link>
        </div>
      </div>
      <div className="logo-container">
        <img src={image} alt="Logo" className="logo-image" />
      </div>
    </div> */
  );
}

export default Header;
