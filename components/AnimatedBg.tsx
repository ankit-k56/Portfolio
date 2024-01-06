"use client";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";

const AnimatedBg = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div className="h-[]">
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
    </div>
  );
};

export default AnimatedBg;
