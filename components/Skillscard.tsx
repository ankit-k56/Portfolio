"use client";
import { useEffect, useRef } from "react";
import React from "react";
import { useInView, motion, useAnimation, useAnimate } from "framer-motion";
import Skillbadge from "./Skillbadge";
interface Skills {
  name: string;
  img: string;
}

interface SkillsArray {
  title: string;
  skills: Skills[];
}

const Skillscard: React.FC<SkillsArray> = ({ title, skills }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [scope, animate] = useAnimate();
  const isInView = useInView(ref, { once: false });

  const badge = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      transition: {
        duration: 0.1,
        // staggerChildren: 0.5
      },
    },
    show: {
      opacity: 1,
      scale: 1,
      // transition: {
      //   duration:0.5,
      //   staggerChildren: 0.5
      // }
    },
  };
  const card = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 2.5 },
    },
  };

  useEffect(() => {
    if (isInView) {
      // animate(scope.current, { opacity: 1, y:0 },{ duration: 0.7 })
      // controls.start({opacity:1,scale:1})
      controls.start("show");
      controls2.start("show");
      console.log("inview");
    } else {
      // controls.start({opacity:0,scale:0.7})
      controls.start("hidden");
      controls2.start("hidden");
      // animate(scope.current, { opacity: 0, y:130 },{ duration: 0.7 })
    }
  }, [isInView, controls, controls2]);
  return (
    <>
      <motion.div
        variants={card}
        initial={"hidden"}
        className=""
        animate={controls2}
      >
        <div
          ref={ref}
          className="text-center h-[60vh] sm:w-[60vw] md:w-[40vw] max-h-[300px] lg:max-h-[450px] lg:w-[25vw] border-[1px] border-stone-400 rounded-lg bg-[#111111] p-7 "
        >
          <h1 className="text-2xl xl:text-3xl pb-6 text-emerald-500">
            {title}
          </h1>
          <ul className="  child:text-lg  flex child:p-[5px] flex-wrap items-center justify-center">
            {skills.map((skill, index) => {
              return (
                <motion.div
                  // initial={{opacity:0, scale:0.7}}
                  variants={badge}
                  key={index}
                  initial={"hidden"}
                  animate={controls}
                  transition={{ duration: 0.16, delay: index * 0.16 }}
                >
                  <li>
                    <Skillbadge key={index} {...skill} />
                  </li>
                </motion.div>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Skillscard;
