// import React from "react";
// import { motion } from "framer-motion";
// import { MdOndemandVideo } from "react-icons/md";
// import { Helmet } from "react-helmet-async";

// // ─── Shared animation variants ────────────────────────────────────────────────

// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.2 } },
// };

// const fadeIn = {
//   initial: { opacity: 0 },
//   whileInView: { opacity: 1 },
//   transition: { duration: 1 },
//   viewport: { once: true },
// };

// const slideUp = {
//   initial: { opacity: 0, y: 80 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 1 },
//   viewport: { once: true },
// };

// const scaleIn = {
//   initial: { scale: 0.9, opacity: 0 },
//   whileInView: { scale: 1, opacity: 1 },
//   transition: { duration: 0.8 },
//   viewport: { once: true },
// };

// // ─── Static data ──────────────────────────────────────────────────────────────

// const MISSION_VISION = [
//   { title: "Mission", text: "To nurture innovative minds and prepare students for future technologies." },
//   { title: "Vision", text: "To be a leading hub for cutting-edge research and futuristic education." },
// ];

// const GALLERY_IMAGES = ["/AB.jpeg", "/AB2.jpeg", "/Team.jpeg"];

// const USP_ITEMS = [
//   "Advanced Curriculum",
//   "State-of-the-Art Labs",
//   "Expert Faculty",
//   "Global Opportunities",
// ];

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function About() {
//   return (
//     <div className="font-sans text-gray-800 bg-gray-50 overflow-hidden">

//       {/* HELMET */}
//       <Helmet>
//         <title>About Us - IIOFT | International Institute of Futuristic Technology Delhi</title>
//         <meta name="description" content="IIOFT ke baare mein jaano. Hamaara mission hai students ko future-ready banana with world-class technology education. Advanced Curriculum, Expert Faculty aur Global Opportunities." />
//         <meta name="keywords" content="about IIOFT, IIOFT Delhi, International Institute of Futuristic Technology, best technology institute Delhi, futuristic education, IIOFT mission vision" />
//         <meta property="og:title" content="About Us - IIOFT | International Institute of Futuristic Technology Delhi" />
//         <meta property="og:description" content="IIOFT ke baare mein jaano. Advanced Curriculum, Expert Faculty aur 100% Placement Support." />
//         <meta property="og:url" content="https://iioft.co.in/about" />
//         <link rel="canonical" href="https://iioft.co.in/about" />
//       </Helmet>

//       {/* HEADER */}
//       <motion.header
//         initial={{ opacity: 0, y: -60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="py-12 px-4 text-center bg-linear-to-r from-blue-700 via-indigo-700 to-blue-900 text-white"
//       >
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//           International Institute of Futuristic Technology
//         </h1>
//         <p className="mt-4 text-lg opacity-90">Shaping minds for tomorrow's technology</p>
//       </motion.header>

//       {/* MISSION & VISION */}
//       <motion.section
//         variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//         className="py-16 px-4"
//       >
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
//           {MISSION_VISION.map(({ title, text }) => (
//             <motion.div
//               key={title}
//               variants={fadeUp}
//               whileHover={{ scale: 1.05 }}
//               className="p-10 rounded-3xl backdrop-blur-lg bg-white/40 border border-white shadow-2xl text-center"
//             >
//               <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">{title}</h2>
//               <p className="text-lg font-medium">{text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* ABOUT OVERVIEW */}
//       <motion.section
//         {...fadeIn}
//         className="py-16 bg-linear-to-r from-indigo-600 to-blue-600 text-center text-white px-6"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">
//           About <span className="font-serif">(IIOFT)</span>
//         </h2>
//         <p className="text-lg md:text-xl max-w-4xl mx-auto">
//           IIOFT is dedicated to equipping students with knowledge and skills
//           for emerging technologies and global challenges.
//         </p>
//       </motion.section>

//       {/* IMAGE GALLERY */}
//       <motion.section
//         variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//         className="py-20 px-6 bg-gray-100"
//       >
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//           {GALLERY_IMAGES.map((img, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               whileHover={{ scale: 1.08 }}
//               className="overflow-hidden rounded-3xl shadow-2xl group relative"
//             >
//               <img
//                 src={img}
//                 alt="Gallery"
//                 className="w-full h-96 object-cover transition duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* VIDEO SECTION */}
//       <motion.section
//         {...slideUp}
//         className="py-20 bg-linear-to-r from-blue-800 to-indigo-900 text-center text-white px-6"
//       >
//         <div className="flex justify-center items-center gap-4 mb-10 animate-pulse">
//           <MdOndemandVideo className="text-5xl" />
//           <h2 className="text-4xl font-bold">Our Learning Environment</h2>
//           <MdOndemandVideo className="text-5xl" />
//         </div>
//         <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
//           <video className="w-full aspect-video object-cover" controls>
//             <source src="VIDEO.mp4" type="video/mp4" />
//           </video>
//         </div>
//         <h3 className="mt-10 text-3xl font-serif">Hands On Skill Development</h3>
//       </motion.section>

//       {/* USP SECTION */}
//       <motion.section
//         variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//         className="py-20 px-6 bg-white"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose (IIOFT)</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           {USP_ITEMS.map((item, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               whileHover={{ y: -15 }}
//               className="p-8 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-xl text-center"
//             >
//               <h3 className="font-bold text-xl mb-3">{item}</h3>
//               <p>Designed for future industries and global careers.</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* CTA */}
//       <motion.section
//         {...scaleIn}
//         className="py-20 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-center px-6"
//       >
//         <h2 className="text-4xl font-bold mb-6">Shape Your Future with IIOFT</h2>
//         <p className="text-lg">Explore our programs and admissions to begin your journey today.</p>
//       </motion.section>

//       {/* ── Footer ── */}
//       <footer className="bg-blue-950 mt-6">
//         <div className="max-w-6xl mx-auto px-4 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
//           <p className="text-blue-300 text-xs sm:text-sm text-center">
//             © 2026 IIOFT. All Rights Reserved.
//           </p>
//           <div className="flex gap-4">
//             <a href="tel:+919560307098" className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors">+91 9560307098</a>
//             <a href="mailto:info@iioft.co.in" className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors">info@iioft.co.in</a>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOndemandVideo } from "react-icons/md";
import { Helmet } from "react-helmet-async";

// ─── Shared animation variants ────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1 },
  viewport: { once: true },
};

const slideUp = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  viewport: { once: true },
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

// ─── Static data ──────────────────────────────────────────────────────────────

const MISSION_VISION = [
  {
    title: "Mission",
    text: "To nurture innovative minds and prepare students for future technologies.",
  },
  {
    title: "Vision",
    text: "To be a leading hub for cutting-edge research and futuristic education.",
  },
];

const GALLERY_IMAGES = ["/AB.jpeg", "/AB2.jpeg", "/Team.jpeg"];

const USP_ITEMS = [
  "Advanced Curriculum",
  "State-of-the-Art Labs",
  "Expert Faculty",
  "Global Opportunities",
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    course: "Data Science",
    review:
      "IIOFT changed my life. After learning Data Science from here, I got placed in a top company. The faculty is very supportive!",
    Image: "AB.jpeg",
  },
  {
    name: "Priya Verma",
    course: "UI/UX Design",
    review:
      "Best institute for design courses in Delhi. The practical projects gave me real-world experience. Now I am doing freelance work and earning well.",
    Image: "AB.jpeg",
  },
  {
    name: "Amit Kumar",
    course: "Web Development",
    review:
      "IIOFT’s curriculum is industry-aligned. The learning approach is completely hands-on. All my doubts were cleared and I also got placement.",
    Image: "AB.jpeg",
  },
  {
    name: "Sneha Gupta",
    course: "Digital Marketing",
    review:
      "I took courses from many places, but I never got practical training like IIOFT. After learning from here, I started my own agency.",
    Image: "AB.jpeg",
  },
  {
    name: "Rohan Mehta",
    course: "Graphic Designing",
    review:
      "The instructors are very experienced and they give personal attention to every student. I received a lot of help in preparing my portfolio.",
    Image: "AB.jpeg",
  },
  {
    name: "Neha Singh",
    course: "Tally Prime + GST",
    review:
      "The course content was very detailed. Now I can confidently handle accounts. I would recommend IIOFT to everyone!",
    Image: "AB.jpeg",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-hidden">
      {/* HELMET */}
      <Helmet>
        <title>
          About Us - IIOFT | International Institute of Futuristic Technology
          Delhi
        </title>
        <meta
          name="description"
          content="IIOFT ke baare mein jaano. Hamaara mission hai students ko future-ready banana with world-class technology education. Advanced Curriculum, Expert Faculty aur Global Opportunities."
        />
        <meta
          name="keywords"
          content="about IIOFT, IIOFT Delhi, International Institute of Futuristic Technology, best technology institute Delhi, futuristic education, IIOFT mission vision"
        />
        <meta
          property="og:title"
          content="About Us - IIOFT | International Institute of Futuristic Technology Delhi"
        />
        <meta
          property="og:description"
          content="IIOFT ke baare mein jaano. Advanced Curriculum, Expert Faculty aur 100% Placement Support."
        />
        <meta property="og:url" content="https://iioft.co.in/about" />
        <link rel="canonical" href="https://iioft.co.in/about" />
      </Helmet>

      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-12 px-4 text-center bg-linear-to-r from-blue-700 via-indigo-700 to-blue-900 text-white"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          International Institute of Futuristic Technology
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Shaping minds for tomorrow's technology
        </p>
      </motion.header>

      {/* ── TABS ── */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-xl mx-auto flex">
          {["about", "testimonials"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-sm sm:text-base font-semibold capitalize tracking-wide transition-all duration-300 border-b-4 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
            >
              {tab === "about" ? "About Us" : "Testimonials"}
            </button>
          ))}
        </div>
      </div>

      {/* ── TAB CONTENT ── */}
      <AnimatePresence mode="wait">
        {/* ── ABOUT TAB ── */}
        {activeTab === "about" && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {/* MISSION & VISION */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="py-16 px-4"
            >
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {MISSION_VISION.map(({ title, text }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    className="p-10 rounded-3xl backdrop-blur-lg bg-white/40 border border-white shadow-2xl text-center"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
                      {title}
                    </h2>
                    <p className="text-lg font-medium">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* ABOUT OVERVIEW */}
            <motion.section
              {...fadeIn}
              className="py-16 bg-linear-to-r from-indigo-600 to-blue-600 text-center text-white px-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="font-serif">(IIOFT)</span>
              </h2>
              <p className="text-lg md:text-xl max-w-4xl mx-auto">
                IIOFT is dedicated to equipping students with knowledge and
                skills for emerging technologies and global challenges.
              </p>
            </motion.section>

            {/* IMAGE GALLERY */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="py-20 px-6 bg-gray-100"
            >
              <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {GALLERY_IMAGES.map((img, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.08 }}
                    className="overflow-hidden rounded-3xl shadow-2xl group relative"
                  >
                    <img
                      src={img}
                      alt="Gallery"
                      className="w-full h-96 object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* VIDEO SECTION */}
            <motion.section
              {...slideUp}
              className="py-20 bg-linear-to-r from-blue-800 to-indigo-900 text-center text-white px-6"
            >
              <div className="flex justify-center items-center gap-4 mb-10 animate-pulse">
                <MdOndemandVideo className="text-5xl" />
                <h2 className="text-4xl font-bold">Our Learning Environment</h2>
                <MdOndemandVideo className="text-5xl" />
              </div>
              <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <video className="w-full aspect-video object-cover" controls>
                  <source src="VIDEO.mp4" type="video/mp4" />
                </video>
              </div>
              <h3 className="mt-10 text-3xl font-serif">
                Hands On Skill Development
              </h3>
            </motion.section>

            {/* USP SECTION */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="py-20 px-6 bg-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose (IIOFT)
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {USP_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -15 }}
                    className="p-8 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-xl text-center"
                  >
                    <h3 className="font-bold text-xl mb-3">{item}</h3>
                    <p>Designed for future industries and global careers.</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section
              {...scaleIn}
              className="py-20 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-center px-6"
            >
              <h2 className="text-4xl font-bold mb-6">
                Shape Your Future with IIOFT
              </h2>
              <p className="text-lg">
                Explore our programs and admissions to begin your journey today.
              </p>
            </motion.section>
          </motion.div>
        )}

        {/* ── TESTIMONIALS TAB ── */}
        {activeTab === "testimonials" && (
          <motion.div
            key="testimonials"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="py-20 px-6 bg-gray-50 min-h-screen"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-700">
                What Our Students Say
              </h2>
              <p className="text-center text-gray-500 mb-12 text-lg">
                Real stories from real students who transformed their careers at
                IIOFT.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl shadow-xl p-8 flex flex-col gap-4 border border-gray-100"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 text-yellow-400 text-xl">
                      {"★★★★★"}
                    </div>

                    {/* Review */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      "{t.review}"
                    </p>

                    {/* Student Info */}
                    {/* <div className="flex items-center gap-3 mt-2">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{t.name}</p>
                        <p className="text-xs text-blue-500">{t.course}</p>
                      </div>
                    </div> */}

                    <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center font-bold text-sm shrink-0 bg-blue-600 text-white">
                      {t.Image ? (
                        <img
                          src={t.Image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        t.avatar
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="bg-blue-950 mt-6">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-blue-300 text-xs sm:text-sm text-center">
            © 2026 IIOFT. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="tel:+919560307098"
              className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors"
            >
              +91 9560307098
            </a>
            <a
              href="mailto:info@iioft.co.in"
              className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors"
            >
              info@iioft.co.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
