import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground(props) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

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
          color: {
            value: "rgb(38, 73, 92)",
          },
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
            color: "rgb(38, 73, 92)",
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

export default ParticlesBackground;
