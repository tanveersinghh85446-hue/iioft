import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Courses from "./Pages/Courses";
import Navbar from "./Components/Navbar";
import WelcomeAnimation from "./Components/WelcomeAnimation";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";
import Course from "./Pages/Courses";
import CourseDetail from "./Pages/Coursedetail"; // ✅ FIXED
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
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/course/:slug" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/know-more" element={<KnowMore />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;