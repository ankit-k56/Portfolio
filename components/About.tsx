"use client";
import { useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoInstagram } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";
import { BiLogoGithub } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useInView, motion, useAnimate } from "framer-motion";

const About = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const isInView = useInView(scope, { once: false });
  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, x: 0, y: 0 }, { duration: 1 });
      animate2(scope2.current, { opacity: 1, x: 0, y: 0 }, { duration: 1 });
      // console.log("inview")
    } else {
      animate(scope.current, { opacity: 0, x: 0, y: -100 }, { duration: 0.1 });
      animate2(scope2.current, { opacity: 0, x: 0, y: 100 }, { duration: 0.1 });
    }
  }, [isInView, animate, animate2, scope, scope2]);
  return (
    <div className="bg-black flex justify-center ">
      <div
        id="about"
        className="flex flex-col md:flex-row px-10 xl:px-36 lg:px-28 pt-10 items-center xl:py-36 pb-28 max-w-[2000px]"
      >
        <Image
          ref={scope}
          className="rounded-full  mx-8 w-[45%] sm:py-0 py-3 sm:w-[35%] xl:w-[70%] md:w-[35%] h-[80%]  object-cover items-center"
          src={"/Ank.JPG"}
          alt="me"
          width={280}
          height={660}
        ></Image>
        <div ref={scope2}>
          <h1 className="lg:text-3xl text-xl pb-5 font-semibold text-emerald-500">
            About Me
          </h1>
          <p className="text-sm xl:text-lg lg:text-base">
            {
              "I am a dedicated Full Stack developer proficient in the MERN (MongoDB, Express.js, React, Node.js) stack and specialized in Next.js. I am a second year B.Tech student in Computer Science and Engineering at KIIT University and am known for my quick learning abilities and strong work ethic. My passion is in creating exceptional web experiences, whether it's designing user-friendly interfaces, optimizing back-end processes, or ensuring seamless user interactions. With a commitment to staying at the forefront of web development technologies, I am here to transform your digital ideas into reality and help you achieve your full-stack development objectives"
            }
          </p>
          <div>
            <div className="flex py-4 items-center child:text-4xl gap-3 child:cursor-pointer">
              <Link href={"https://www.linkedin.com/in/ankit-kumar-7a9ab3253/"}>
                <CiLinkedin />
              </Link>
              <Link
                href={
                  "https://twitter.com/Ankit56k?t=7ysvNiXxvworFBs6JUkbZw&s=09"
                }
              >
                <RiTwitterXLine className="text-3xl" />
              </Link>
              <Link href={"https://github.com/ankit-k56"}>
                <BiLogoGithub />
              </Link>
              <Link
                href={
                  "https://instagram.com/ankit.init?utm_source=qr&igshid=OGU0MmVlOWVjOQ=="
                }
              >
                <BiLogoInstagram />
              </Link>
              <Link href={"https://portfolio-ankit-k56.vercel.app/"}>
                <AiOutlineLink />
              </Link>
            </div>
            <a href="/Resume_Front.pdf" download={"Resume"}>
              <button className="hover:bg-transparent my-3 text-lg px-12  py-3 bg-emerald-600 transition border-[1px] border-emerald-500">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
