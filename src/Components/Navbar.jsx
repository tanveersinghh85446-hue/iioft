import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/course", name: "Course" },
  { path: "/contact", name: "Contact" },
];

const ABOUT_DROPDOWN = [
  { path: "/about", name: "About" },
  { path: "/know-more", name: "Know More" },
  { path: "/blog", name: "Blog" },
  { path: "/testimonials", name: "Testimonials" },
];

const NAV_ANIMATION = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);

  const MOBILE_LINKS = [
    { path: "/", name: "Home" },
    { path: "/course", name: "Course" },
    { path: "/contact", name: "Contact" },
    { path: "/apply", name: "Apply" },
  ];

  return (
    <>
      <nav className="bg-blue-600 text-white shadow-md w-full relative z-50">
        <div className="px-4 md:px-8 py-4 md:py-5">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                className="max-h-12 w-auto object-contain"
                src="Logo.png"
                alt="Logo"
              />
            </Link>

            {/* Title — desktop only */}
            <h1 className="hidden md:block font-bold text-2xl lg:text-3xl leading-tight text-center">
              INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
            </h1>

            {/* Desktop Nav */}
            <motion.div
              {...NAV_ANIMATION}
              className="hidden md:flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-semibold text-sm sm:text-base md:text-lg"
            >
              {NAV_LINKS.map(({ path, name }) => {
                if (name === "About") {
                  return (
                    <div
                      key={path}
                      className="relative"
                      onMouseEnter={() => setAboutHover(true)}
                      onMouseLeave={() => setAboutHover(false)}
                    >
                      <Link
                        to="/about"
                        className={`transition duration-300 flex items-center gap-1 ${
                          pathname === path ? "text-black" : "hover:text-black"
                        }`}
                      >
                        About
                        {/* Arrow icon */}
                        <motion.span
                          animate={{ rotate: aboutHover ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs mt-0.5"
                        >
                          +
                        </motion.span>
                      </Link>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {aboutHover && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="absolute top-full left-0 mt-2 w-40 bg-white rounded-xl shadow-xl overflow-hidden z-50"
                          >
                            {ABOUT_DROPDOWN.map(
                              ({ path: dPath, name: dName }) => (
                                <Link
                                  key={dPath}
                                  to={dPath}
                                  className={`block px-4 py-3 text-sm font-semibold transition duration-200 border-b border-blue-50 last:border-0
                                  ${
                                    pathname === dPath
                                      ? "bg-blue-600 text-white"
                                      : "text-blue-600 hover:bg-blue-600 hover:text-white"
                                  }`}
                                >
                                  {dName}
                                </Link>
                              ),
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Normal links
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`transition duration-300 ${
                      pathname === path ? "text-black" : "hover:text-black"
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
            </motion.div>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>

          {/* Title — mobile only */}
          <h1 className="md:hidden font-bold text-base sm:text-lg leading-tight text-center mt-2">
            INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
          </h1>
        </div>
      </nav>

      {/* Overlay */}
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

      {/* Mobile Drawer */}
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

            {/* Normal mobile links */}
            {MOBILE_LINKS.map(({ path, name }) => (
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

            {/* About Accordion — mobile */}
            <div className="border-b border-blue-600 pb-4">
              <button
                onClick={() => setAboutMobileOpen(!aboutMobileOpen)}
                className="w-full flex justify-between items-center hover:text-black transition duration-300"
              >
                About
                <motion.span
                  animate={{ rotate: aboutMobileOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {aboutMobileOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3 flex flex-col gap-3 pl-4"
                  >
                    {ABOUT_DROPDOWN.map(({ path, name }) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={() => setIsOpen(false)}
                        className={`text-base font-medium transition duration-300 ${
                          pathname === path
                            ? "text-black"
                            : "text-blue-200 hover:text-white"
                        }`}
                      >
                        → {name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
