import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { path: "/", name: "Home" },
  { path: "/course", name: "Course" },
  { path: "/contact", name: "Contact" },
  { path: "/know-more", name: "Know More" },
  { path: "/about", name: "About" },
];

const NAV_ANIMATION = { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-blue-600 text-white shadow-md w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-5 gap-4">

        <img className="max-h-12 w-auto object-contain" src="Logo.png" alt="Logo" />

        <h1 className="font-bold text-base sm:text-lg md:text-2xl lg:text-3xl leading-tight text-center">
          INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
        </h1>

        <motion.div
          {...NAV_ANIMATION}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-semibold text-sm sm:text-base md:text-lg"
        >
          {NAV_LINKS.map(({ path, name }) => (
            <Link
              key={path}
              to={path}
              className={`transition duration-300 ${pathname === path ? "text-black" : "hover:text-black"}`}
            >
              {name}
            </Link>
          ))}
        </motion.div>

      </div>
    </nav>
  );
}