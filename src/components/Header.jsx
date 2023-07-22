import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import image from "../images/logo/sword-spade-large.webp";
import "../styling/header.css";

function Header() {
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

  return (
    <div className="header-wrapper">
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
        <img
          src={image}
          alt="sword and trowel x-shaped cross logo"
          className="logo-image"
        />
      </div>
    </div>
  );
}

export default Header;
