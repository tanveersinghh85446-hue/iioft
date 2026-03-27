import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { path: "/", name: "Home" },
  { path: "/course", name: "Course" },
  { path: "/contact", name: "Contact" },
  { path: "/know-more", name: "Know More" },
  { path: "/about", name: "About" },
];

const NAV_ANIMATION = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-600 text-white shadow-md w-full relative z-50">
        <div className="px-4 md:px-8 py-4 md:py-5">

          {/* Top Row: Logo + Hamburger (mobile) | Logo + Title + Nav (desktop) */}
          <div className="flex items-center justify-between">

            <img
              className="max-h-12 w-auto object-contain"
              src="Logo.png"
              alt="Logo"
            />

            {/* Title — desktop only */}
            <h1 className="hidden md:block font-bold text-2xl lg:text-3xl leading-tight text-center">
              INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
            </h1>

            {/* Desktop Nav */}
            <motion.div
              {...NAV_ANIMATION}
              className="hidden md:flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-semibold text-sm sm:text-base md:text-lg"
            >
              {NAV_LINKS.map(({ path, name }) => (
                <Link
                  key={path}
                  to={path}
                  className={`transition duration-300 ${
                    pathname === path ? "text-black" : "hover:text-black"
                  }`}
                >
                  {name}
                </Link>
              ))}
            </motion.div>

            {/* Hamburger Button — mobile only */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
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

          {/* Title — mobile only, below logo row */}
          <h1 className="md:hidden font-bold text-base sm:text-lg leading-tight text-center mt-2">
            INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
          </h1>

        </div>
      </nav>

      {/* Overlay (background dim) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Right Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-64 bg-blue-800 text-white z-50 shadow-xl md:hidden flex flex-col pt-20 px-6 gap-6 font-semibold text-lg"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 flex flex-col gap-1.5 p-2 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-1" />
              <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-0.5" />
            </button>

            {NAV_LINKS.map(({ path, name }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`transition duration-300 border-b border-blue-600 pb-4 ${
                  pathname === path ? "text-black" : "hover:text-black"
                }`}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}