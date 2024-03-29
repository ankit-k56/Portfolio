"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMovileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <div className="flex justify-between max-w-[1200px] mx-auto p-6 ">
      <h1 className="text-lg lg:text-2xl ">
        ankitkumar19041@gmail<span className="text-emerald-500">.com</span>
      </h1>

      <div className="flex items-center  md:hidden">
        <button
          onClick={toggleMovileNav}
          className=""
        >
          <RxHamburgerMenu  className='text-2xl'/>
        </button>
        <NavMobile showMobileNav={showMobileNav}  setShowMobileNav={setShowMobileNav}/>
      </div>

      <div className="hidden md:block">
        <div className="flex text-lg space-x-10 md:text-xl sm:space-x-16 ">
          <Link href={"#about"}>
            <p className="hover:text-emerald-500 cursor-pointer">
              <span className="text-emerald-500">01.</span>About
            </p>
          </Link>
          <Link href={"#projects"}>
            <p className="hover:text-emerald-500 cursor-pointer">
              <span className="text-emerald-500">02.</span>Projects
            </p>
          </Link>
          <Link href={"#contact"}>
            <p className="hover:text-emerald-500 cursor-pointer">
              <span className="text-emerald-500">03.</span>Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
