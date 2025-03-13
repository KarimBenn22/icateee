"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="w-full bg-primary p-4 fixed top-0 z-200">
        <div className="flex items-center justify-center relative">
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
              isScrolled
                ? "opacity-100 scale-75 top-0" 
                : "opacity-0 scale-0 top-20" 
            }`}
          >
            <img
              src="/favicon.ico" 
              alt="Logo"
              className="h-12 w-12 rounded-full transition-all duration-500"
            />
          </div>


          <ul
            className={`flex gap-4 transition-all duration-500 ml-15 ${
              isScrolled ? "-translate-x-7" : "translate-x-0" 
            }`}
          >
            <li className="p-2 relative group">
              <Link href={""} className="relative inline-block">
                HOME
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="p-2 relative group">
              <Link href={""} className="relative inline-block">
                COMMITEES
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="p-2 relative group">
              <Link href={""} className="relative inline-block">
                SUBMISSION
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>


          <ul
            className={`flex gap-4 transition-all duration-500 ${
              isScrolled ? "translate-x-7" : "translate-x-0" 
            }`}
          >
            <li className="p-2 relative group">
              <Link href={""} className="relative inline-block">
                SPEAKERS
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="p-2 relative group">
              <Link href={""} className="relative inline-block">
                CALL FOR PAPERS
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="p-2 relative group">
              <Link href={""} className="relative inline-block">
                DISCOVER
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
          isScrolled ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      >
        <img
          src="/favicon.ico" 
          alt="Logo"
          className="h-24 w-24 rounded-full"
        />
      </div>
    </>
  );
}