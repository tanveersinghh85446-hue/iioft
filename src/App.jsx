import React from "react";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Components/Navbar";

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

            {/* POPUP */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl w-[90%] md:w-100 relative shadow-2xl">

                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-3 right-4 text-xl font-bold"
                        >
                            ×
                        </button>

                        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
                            Get Free Career Counselling
                        </h2>

                        <form className="flex flex-col gap-3">
                            <input type="text" placeholder="Your Name" className="border p-2 rounded-lg" />
                            <input type="email" placeholder="Your Email" className="border p-2 rounded-lg" />
                            <input type="tel" placeholder="Your Phone Number" className="border p-2 rounded-lg" />

                            <select className="border p-2 rounded-lg">
                                <option>Select Course </option>
                                <option>Data Science</option>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Data Analytics</option>
                                <option>Ethical Hacking</option>
                                <option>Diploma in Interior Design</option>
                                <option>Advanced Finance & Accounting</option>
                                <option>Diploma in Human Resource Management</option>

                            </select>

                            <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            )}

            <Navbar />

            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/course" element={<Course />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/know-more" element={<KnowMore />} />
                <Route path="/Apply" element={<Apply />} />
            </Routes>

        </div>
    );
}

export default App;