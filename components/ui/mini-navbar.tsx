"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const defaultTextColor = "text-[#20245C]/60";
  const hoverTextColor = "text-[#20245C]";
  const textSizeClass = "text-sm";

  return (
    <Link href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </Link>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass("rounded-xl");
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full");
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <Link href="/" className="relative w-5 h-5 flex items-center justify-center" aria-label="HMPS ADBIS Home">
      <span className="absolute w-1.5 h-1.5 rounded-full bg-[#20245C] top-0 left-1/2 transform -translate-x-1/2 opacity-90"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-[#20245C] left-0 top-1/2 transform -translate-y-1/2 opacity-90"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-[#20245C] right-0 top-1/2 transform -translate-y-1/2 opacity-90"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-[#20245C] bottom-0 left-1/2 transform -translate-x-1/2 opacity-90"></span>
    </Link>
  );

  const navLinksData = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "People", href: "/people" },
    { label: "Programs", href: "/programs" },
    { label: "Hub", href: "/hub" },
  ];

  const loginButtonElement = (
    <Link
      href="/hub"
      className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#20245C]/10 bg-[#20245C]/[0.06] text-[#20245C]/70 rounded-full hover:border-[#20245C]/15 hover:bg-[#20245C]/10 hover:text-[#20245C] transition-colors duration-200 w-full sm:w-auto inline-flex items-center justify-center text-center backdrop-blur-md"
    >
      Hub
    </Link>
  );

  const signupButtonElement = (
    <div className="relative group w-full sm:w-auto">
      <div className="absolute inset-0 -m-2 rounded-full hidden sm:block bg-[#3F41CC] opacity-10 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-20 group-hover:blur-xl group-hover:-m-3"></div>
      <Link
        href="/hub"
        className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-white bg-[#20245C] rounded-full hover:bg-[#20245C]/90 transition-all duration-200 w-full sm:w-auto inline-flex items-center justify-center text-center shadow-[0_2px_10px_rgba(32,36,92,0.15)]"
      >
        Join Us
      </Link>
    </div>
  );

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center pl-6 pr-6 py-3 backdrop-blur-xl ${headerShapeClass} border border-[#20245C]/10 bg-white/70 shadow-[0_8px_32px_rgba(32,36,92,0.12)] w-[calc(100%-2rem)] sm:w-auto transition-[border-radius] duration-0 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <div className="flex items-center">{logoElement}</div>

        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          {loginButtonElement}
          {signupButtonElement}
        </div>

        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-[#20245C]/70 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      <div
        className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#20245C]/60 hover:text-[#20245C] transition-colors w-full text-center font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          {loginButtonElement}
          {signupButtonElement}
        </div>
      </div>
    </header>
  );
}
