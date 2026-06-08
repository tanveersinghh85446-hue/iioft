import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { path: "/", name: "Home" },
  { path: "/course", name: "Course" },
  { path: "/about", name: "About" },
  { path: "/know-more", name: "Know More" },
  { path: "/blog", name: "Blog" },
  { path: "/testimonials", name: "FeedBack" },
  { path: "/contact", name: "Contact" },
  { path: "/enquire", name: "Enquire" },
];

const ALL_MOBILE_LINKS = [
  { path: "/", name: "Home" },
  { path: "/course", name: "Course" },
  { path: "/about", name: "About" },
  { path: "/know-more", name: "Know More" },
  { path: "/blog", name: "Blog" },
  { path: "/testimonials", name: "FeedBack" },
  { path: "/contact", name: "Contact" },
  { path: "/enquire", name: "Enquire" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-700 text-white shadow-md w-full sticky top-0 z-50">
        {/* Header Row */}
        <div className="px-4 md:px-10 py-3 border-b border-blue-600">
          {/* Desktop Header */}
          <div className="hidden md:flex justify-center items-center gap-20">
            <Link to="/">
              <img
                className="h-12 w-auto object-contain"
                src="Logo.WebP"
                alt="Logo"
              />
            </Link>

            <h1 className="font-bold text-2xl lg:text-3xl leading-tight tracking-wide text-center">
              INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
            </h1>

            <div className="flex flex-col items-center gap-1">
              <Link to="/">
                <img
                  className="h-12 w-auto object-contain"
                  src="NSDC.WebP"
                  alt="NSDC Logo"
                />
              </Link>
              <span className="text-xs font-semibold text-yellow-300 tracking-wide whitespace-nowrap">
                Authorised by NSDC
              </span>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              {/* Logos Side by Side */}
              <div className="flex items-center gap-3">
                <Link to="/">
                  <img
                    className="h-10 w-auto object-contain"
                    src="Logo.WebP"
                    alt="Logo"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="h-10 w-auto object-contain"
                    src="NSDC.WebP"
                    alt="NSDC Logo"
                  />
                </Link>
              </div>

              {/* Hamburger Button */}
              <button
                className="flex flex-col gap-1.5 p-2 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>

            <h1 className="font-bold text-sm sm:text-base text-center mt-2 leading-tight tracking-wide">
              INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
            </h1>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-10 px-10 py-3 font-semibold text-base lg:text-lg bg-blue-700">
          {NAV_LINKS.map(({ path, name }) => (
            <Link
              key={path}
              to={path}
              className={`transition duration-300 hover:text-yellow-300 ${
                pathname === path
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Menu (inline, no animation lib needed) */}
        {isOpen && (
          <div className="md:hidden bg-blue-800 px-6 py-4 flex flex-col gap-1 border-t border-blue-600">
            {ALL_MOBILE_LINKS.map(({ path, name }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`py-3 border-b border-blue-600 font-semibold text-base transition duration-300 hover:text-yellow-300 ${
                  pathname === path ? "text-yellow-300" : "text-white"
                }`}
              >
                {name}
              </Link>
            ))}
            {/* Authorised by NSDC - bottom of mobile menu */}
            <div className="pt-4 pb-1 flex items-center justify-center gap-2">
              <img
                className="h-7 w-auto object-contain"
                src="NSDC.WebP"
                alt="NSDC Logo"
              />
              <span className="text-sm font-semibold text-yellow-300 tracking-wide">
                Authorised by NSDC
              </span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}