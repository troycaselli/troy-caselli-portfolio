import React from "react";
import { Hero, Featured, Projects } from "./index";
import "../../styling/landing.css";

function Landing() {
  return (
    <div className="landing-wrapper">
      <Hero />
      <h2 className="featured-landing-header">Featured</h2>
      <Featured />
      <h2 id="projects" className="projects-header">
        Projects
      </h2>
      <Projects />
    </div>
  );
}

export default Landing;
