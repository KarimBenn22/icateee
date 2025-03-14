"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-primary p-4 sticky top-0 z-999">
      <div className="flex items-center justify-center relative">
        <ul className="flex gap-4 ml-15">
          <li className="p-2 relative group">
            <Link href={"/playground"} className="relative inline-block">
              HOME
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-2 relative group">
            <Link href={"/commitees"} className="relative inline-block">
              COMMITEES
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-2 relative group">
            <Link href={"/submission"} className="relative inline-block">
              SUBMISSION
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        <Image
          src="/favicon.ico"
          alt="Logo"
          className="rounded-full mx-4"
          width={48}
          height={48}
        />

        <ul className="flex gap-4">
          <li className="p-2 relative group">
            <Link href={"/speakers"} className="relative inline-block">
              SPEAKERS
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-2 relative group">
            <Link href={"/registration"} className="relative inline-block">
              CALL FOR PAPERS
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-2 relative group">
            <Link href={"/discover"} className="relative inline-block">
              DISCOVER
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
