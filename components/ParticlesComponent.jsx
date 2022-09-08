import Particles from 'react-particles';
import React, { useCallback } from 'react';
import { loadFull } from 'tsparticles';

export const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container.started;
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
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
            color: {
              value: '#ccc'
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 100,
              color: '#fff',
              opacity: 0.4,
              width: 1
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
                opacity: 0,
                speed: 3
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
