import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground(props) {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // style={{
      //   position: "absolute",
      //   top: "0",
      //   left: "0",
      //   height: "100%",
      //   width: "100%",
      //   margin: "0",
      //   padding: "0",
      //   zIndex: "0",
      // }}
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
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
      }}
    />
  );
}

export default ParticlesBackground;
