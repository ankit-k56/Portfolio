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
 
      <Particles
        options={particlesOptions as ISourceOptions}
        className="z-[-50] absolute top-0 left-0 h-[100vh] w-[100vw]"
        init={particlesInit}
      />

  );
};

export default AnimatedBg;


