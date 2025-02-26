import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // Загружаем только необходимые функции
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#1e1e1e" },
        particles: {
          color: { value: "#64ffda" },
          links: {
            color: "#64ffda",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: { enable: true, speed: 2 },
          number: { value: 50 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;