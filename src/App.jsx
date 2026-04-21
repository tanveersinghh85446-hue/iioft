import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Components/Navbar";
import WelcomeAnimation from "./Components/WelcomeAnimation"; //
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";
import Course from "./Pages/Course";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import KnowMore from "./Pages/Kmore";
import HeroSection from "./Components/Hero";
import Apply from "./Pages/Apply";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("careerPopupShown");
    if (hasSeenPopup !== "true") {
      setShowPopup(true);
      localStorage.setItem("careerPopupShown", "true");
    }
  }, []);

  return (
    <div className="relative">
      <WelcomeAnimation />

      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/know-more" element={<KnowMore />} />
        <Route path="/Apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;
