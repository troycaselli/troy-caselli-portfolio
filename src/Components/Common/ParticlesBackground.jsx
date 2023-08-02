import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground(props) {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    // <Particles
    //   id="tsparticles"
    //   init={particlesInit}
    //   loaded={particlesLoaded}
    //   options={{
    //     background: {
    //       color: {
    //         value: "#0d47a1",
    //       },
    //     },
    //     fpsLimit: 60,
    //     interactivity: {
    //       detectsOn: "canvas",
    //       events: {
    //         resize: true,
    //       },
    //     },
    //     particles: {
    //       color: {
    //         value: "#ffffff",
    //       },
    //       number: {
    //         density: {
    //           enable: true,
    //           area: 1080,
    //         },
    //         limit: 0,
    //         value: 400,
    //       },
    //       opacity: {
    //         animation: {
    //           enable: true,
    //           minimumValue: 0.05,
    //           speed: 1,
    //           sync: false,
    //         },
    //         random: {
    //           enable: true,
    //           minimumValue: 0.05,
    //         },
    //         value: 1,
    //       },
    //       shape: {
    //         type: "circle",
    //       },
    //       size: {
    //         random: {
    //           enable: true,
    //           value: 0.5,
    //         },
    //       },
    //       value: 1,
    //     },
    //   }}
    // />
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            // onHover: {
            //   enable: true,
            //   mode: "repulse",
            // },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;

// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";

// import "../../styling/particles.css";

// function ParticlesBackground() {
//   const particlesInit = useCallback(async (engine) => {
//     //console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     //console.log(container);
//   }, []);

//   return (
//     <Particles
//       options={{
//         background: {
//           color: "none",
//         },
//         fpsLimit: 60,
//         interactivity: {
//           detectsOn: "canvas",
//           events: {
//             resize: true,
//           },
//         },
//         particles: {
//           color: {
//             value: "green",
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 1080,
//             },
//             limit: 0,
//             value: 400,
//           },
//           opacity: {
//             animation: {
//               enable: true,
//               minimumValue: 0.05,
//               speed: 1,
//               sync: false,
//             },
//             random: {
//               enable: true,
//               minimumValue: 0.05,
//             },
//             value: 1,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             random: {
//               enable: true,
//               value: 0.5,
//             },
//           },
//           value: 1,
//         },
//       }}
//     />
//   );
// }

// export default ParticlesBackground;
