import Particles from 'react-particles';
import React, { useCallback } from 'react';
import { loadFull } from 'tsparticles';

export const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true
              }
            },
            size: {
              value: 1,
              random: true,
              anim: {
                speed: 10,
                size_min: 0.1
              }
            },
            line_linked: {
              enable: false,
              distance: 100,
              color: '#ffffff',
              opacity: 0.1,
              width: 0.1
            },
            move: {
              random: false,
              speed: 1,
              direction: 'none',
              out_mode: 'out'
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'connect'
              },
              onclick: {
                enable: false,
                mode: 'push'
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}
      />
    </div>
  );
};
