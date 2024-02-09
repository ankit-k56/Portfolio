"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavMobile = ({ showMobileNav, setShowMobileNav }: any) => {
  return (
    <motion.nav
      className={`fixed w-full inset-0 bg-black bg-opacity-50 z-[70] ${
        showMobileNav ? "" : "hidden"
      }`}
      onClick={() => {
        setShowMobileNav(!showMobileNav);
      }}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={showMobileNav ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 0.3 }}
        // onClick={(e) => e.stopPropagation()}
        className="flex bg-gradient-to-r h-screen from-[#2a2b28] p-7 py-16 gap-5 text-xl via-[#24291e] to-[#000000] w-[60vw] flex-col text-md space-y-4 "
      >

        <Link href={"#about"}>
          <p className="hover:text-emerald-500 hover:pl-5 duration-150  cursor-pointer">
            <span className="text-emerald-500">01.</span>About
          </p>
        </Link>
        <Link href={"#projects"}>
          <p className="hover:text-emerald-500 hover:pl-5 duration-150 cursor-pointer">
            <span className="text-emerald-500">02.</span>Projects
          </p>
        </Link>
        <Link href={"#contact"}>
          <p className="hover:text-emerald-500 hover:pl-5 duration-150  cursor-pointer">
            <span className="text-emerald-500">03.</span>Contact
          </p>
        </Link>

      </motion.div>
    </motion.nav>
  );
};

export default NavMobile;


