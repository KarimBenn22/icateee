"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/commitees", label: "COMMITTEES" },
    { href: "/submission", label: "SUBMISSION" },
    { href: "/speakers", label: "SPEAKERS" },
    { href: "/CFP_ICATEEE2025_2.pdf", label: "CALL FOR PAPERS" },
    { href: "/discover", label: "DISCOVER" },
  ];

  return (
    <nav className="w-full bg-primary p-4 sticky top-0 z-999">
      <div className="container mx-auto">
        <div className="hidden md:flex items-center justify-center relative">
          <div className="flex items-center gap-4">
            {navLinks.slice(0, 3).map((link) => (
              <div key={link.href} className="p-2 relative group">
                <Link
                  href={link.href}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </div>

          <Link href="/" className="mx-4">
            <Image
              src="/favicon.ico"
              alt="Logo"
              className="rounded-full"
              width={48}
              height={48}
              priority
            />
          </Link>

          <div className="flex items-center gap-4">
            {navLinks.slice(3).map((link) => (
              <div key={link.href} className="p-2 relative group">
                <Link
                  href={link.href}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:hidden items-center justify-between">
          <Link href="/">
            <Image
              src="/favicon.ico"
              alt="Logo"
              className="rounded-full"
              width={40}
              height={40}
              priority
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-primary absolute top-16 left-0 right-0 p-4 z-50 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gray-200 py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
