import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ["#c770f0", "#6bd4ff", "#ff6b6b"] },
          links: {
            color: "#c770f0",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: {
            value: 0.5,
            anim: { enable: true, speed: 1, opacity_min: 0.1 },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 5 },
            anim: { enable: true, speed: 2, size_min: 0.1 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;