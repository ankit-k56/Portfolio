import React from "react";
import Link from "next/link";

const NavMobile = ({ showMobileNav }: any) => {
  if (!showMobileNav) {
    return;
  }
  return (
    <nav className="md:hidden fixed right-10 top-10">
      <div className="flex  flex-col text-md space-y-4 ">
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
        <Link href={"#contact"}>
          <p className="hover:text-emerald-500 cursor-pointer">
            <span className="text-emerald-500">03.</span>Contact2
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default NavMobile;
