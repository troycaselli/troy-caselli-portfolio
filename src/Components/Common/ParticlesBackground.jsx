import React, { useCallback, useState, useEffect } from "react";
import { connect } from "react-redux";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground(props) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const lightModeParticles = "rgb(30, 42, 56)";
  const darkModeParticles = "rgb(5, 13, 17)";
  const [particlesColor, setParticlesColor] = useState(lightModeParticles);

  useEffect(() => {
    if (props.theme === "dark") {
      setParticlesColor(darkModeParticles);
    } else {
      setParticlesColor(lightModeParticles);
    }
  }, [props.theme]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          shape: {
            type: "circle",
          },
          color: particlesColor,
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
            },
          },
          size: {
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: particlesColor,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          modes: {
            push: {
              particles_nb: 4,
            },
          },
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps, {})(ParticlesBackground);
