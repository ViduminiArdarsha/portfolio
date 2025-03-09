"use client";
import { BiDownload } from "react-icons/bi";
import { BiMenu, BiWindowClose } from "react-icons/bi";
import React, { useState } from "react";

export const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggle = () => {
    setIsClick(!isClick);
  };

  return (
    <section className="bg-white px-20">
      <nav className="py-8 mb-10 flex flex-row justify-between">
        <div className="hidden md:block items-center">
          {/* <h2 className="hidden md:block py-3">Vidumini's Portfolio</h2> */}
          <ul className="flex justify-between px-15 py-3 gap-10 cursor-pointer">
            <li className=" text-primary hover:text-accent">Home</li>
            <li className=" text-primary hover:text-accent">About</li>
            <li className=" text-primary hover:text-accent">Projects</li>
            <li className=" text-primary hover:text-accent">Contact</li>
          </ul>
        </div>

        <div className="md:hidden flex items-center justify-between">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md"
            onClick={toggle}
          >
            {isClick ? (
              <BiWindowClose className="text-2xl" />
            ) : (
              <BiMenu className="text-2xl" />
            )}
          </button>
        </div>

        <div className="hidden md:flex bg-gradient-to-r from-blue-500 to-accent px-5 py-3 rounded-md text-white justify-between">
          <BiDownload className="cursor-pointer text-2xl" />
          <a href="#" className="ml-3">
            Download CV
          </a>
        </div>
      </nav>

      {isClick && (
        <div className="md:hidden shadow-md p-10 rounded-lg">
          <ul className="block px-30 py-3 gap-10 cursor-pointer">
            <li className=" text-primary p-3 text-center rounded-lg hover:text-white hover:bg-accent">
              Home
            </li>
            <li className=" text-primary p-3 text-center rounded-lg hover:text-white hover:bg-accent">
              About
            </li>
            <li className=" text-primary p-3 text-center rounded-lg hover:text-white hover:bg-accent">
              Projects
            </li>
            <li className=" text-primary p-3 text-center rounded-lg hover:text-white hover:bg-accent">
              Contact
            </li>
            
            <li className="mt-10">
            <div className="border-[2px] border-accent px-4 py-2 rounded-md text-accent flex items-center justify-center gap-5">
          <BiDownload className="cursor-pointer text-lg" />
          <a href="#" className="ml-2 ">
            Download CV
          </a>
        </div>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
