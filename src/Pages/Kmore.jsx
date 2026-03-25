import React from "react";
import { motion } from "framer-motion";
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

// ─── Static data ──────────────────────────────────────────────────────────────

const VISION_MISSION = [
  {
    title: "Our Vision",
    color: "text-green-600",
    border: "border-green-600",
    text: "To become a globally recognized institute empowering students with next-generation technical expertise and leadership qualities.",
  },
  {
    title: "Our Mission",
    color: "text-blue-600",
    border: "border-blue-600",
    text: "To provide practical, industry-aligned training that prepares students for real-world challenges and successful professional careers.",
  },
];

const WHY_CHOOSE = [
  { title: "Expert Faculty", text: "Learn from certified industry professionals with real-world experience." },
  { title: "Modern Infrastructure", text: "Advanced labs, smart classrooms, and latest technology tools." },
  { title: "Career Support", text: "Dedicated placement cell guiding students toward top companies." },
];

const TEAM = [
  { name: "Rampal Soni", role: "Founder & CEO", img: "Rampal.jpeg" },
  { name: "Manoj Soni", role: "Head of Department", img: "Manoj Soni.jpeg" },
  { name: "Vinay Rojha", role: "Marketing Head & Managing Director", img: "Vinay Soni.jpeg" },
  { name: "Akash Soni", role: "Technical Head", img: "Akash Soni.jpeg" },
  { name: "Anjali Singh", role: "Career & Placement Coordinator", img: "Anjali.jpeg" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Kmore() {
  return (
    <div className="bg-gray-50 overflow-hidden">

      {/* HELMET */}
      <Helmet>
        <title>Know More - IIOFT Delhi | Faculty, Team & Why Choose Us</title>
        <meta name="description" content="IIOFT Delhi ke baare mein aur jaano. Expert Faculty, Modern Infrastructure, Career Support aur hamaari dedicated team ke baare mein detail mein samjho. Founder: Rampal Soni." />
        <meta name="keywords" content="IIOFT know more, IIOFT team, IIOFT faculty Delhi, IIOFT founder, why choose IIOFT, futuristic technology institute Delhi, IIOFT placements, IIOFT infrastructure" />
        <meta property="og:title" content="Know More - IIOFT Delhi | Faculty, Team & Why Choose Us" />
        <meta property="og:description" content="IIOFT ke Expert Faculty, Modern Infrastructure aur Career Support ke baare mein detail mein jaano." />
        <meta property="og:url" content="https://iioft.co.in/know-more" />
        <link rel="canonical" href="https://iioft.co.in/know-more" />
      </Helmet>

      {/* HERO */}
      <section className="bg-linear-to-r from-blue-700 via-indigo-700 to-blue-900 text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
        >
          Shaping The Future With{" "}
          <span className="text-yellow-300 font-serif">IIOFT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
        >
          International Institute of Futuristic Technology is committed to delivering
          industry-ready skills, innovation-driven learning, and career-focused programs.
        </motion.p>
      </section>

      {/* VISION & MISSION */}
      <motion.section
        variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="py-24 px-6 max-w-6xl mx-auto"
      >
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-center mb-16 text-blue-700">
          Our Core Foundation
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {VISION_MISSION.map(({ title, color, border, text }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className={`bg-white p-10 rounded-3xl shadow-lg border-t-4 ${border}`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${color}`}>{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="py-24 bg-linear-to-r from-indigo-50 to-blue-100"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-blue-700">
            Why Choose Our Institute?
            <span className="text-5xl font-serif text-yellow-300 ml-2">IIOFT</span>
          </motion.h2>

          <motion.div variants={stagger} className="mt-16 grid md:grid-cols-3 gap-10">
            {WHY_CHOOSE.map(({ title, text }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -15 }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* TEAM */}
      <motion.section
        variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="bg-blue-500 py-16 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold mb-12 text-white">
            Meet Our IIOFT Team
          </motion.h2>

          <motion.div variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {TEAM.map(({ name, role, img }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ scale: 1.08 }}
                className="bg-white shadow-lg p-6 rounded-xl"
              >
                <img className="h-30 w-30 rounded-full mx-auto" src={img} alt={name} />
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-500 text-sm">{role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-28 bg-linear-to-r from-blue-800 to-indigo-900 text-center text-white px-6"
      >
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          Start Your Future Today
        </motion.h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
          Take the first step toward a successful career in technology with
          International Institute of Futuristic Technology.
        </p>
      </motion.section>

      {/* FOOTER */}
      <div className="bg-blue-950 flex justify-center items-center mt-4 h-10 md:h-12 px-2">
        <p className="text-white text-xs sm:text-sm text-center flex items-center gap-1">
          © 2026 IIOFT. All Rights Reserved.
          <span className="flex items-center gap-1">
            Designed & Developed by Developer <BsCodeSlash className="text-yellow-400" />
          </span>
        </p>
      </div>

    </div>
  );
}