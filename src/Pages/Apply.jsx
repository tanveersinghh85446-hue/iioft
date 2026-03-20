// import { motion } from "framer-motion";
// import { CgPlayButtonR } from "react-icons/cg";

// // ─── Static data ──────────────────────────────────────────────────────────────

// const LOGOS = [
//   "DATA ANALYSIS.png",
//   "FINANCE.png",
//   "DATA SCIENCE.png",
//   "DIPLOMA IHRM.png",
//   "WEB DEVELOPMENT.png",
//   "EATHICAL HACKING.png",
//   "DIGITAL MARKETING.png",
//   "DIPLOMA IID.png",
// ];

// const STATS = [
//   { number: "1000+", label: "Students Enrolled" },
//   { number: "50+", label: "Industry Mentors" },
//   { number: "100%", label: "Placement Support" },
// ];

// const PROGRAMS = ["Web Development", "App Development", "AI & Robotics", "Cyber Security"];

// const APPLY_URL = "https://docs.google.com/forms/d/19Zf-RLRlerLWgnbczZBoAUfuhdVV20xs-WngXYC4rbw/edit";

// // ─── Shared animation variants ────────────────────────────────────────────────

// const containerVariant = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.15 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function Apply() {
//   return (
//     <div className="relative overflow-hidden bg-linear-to-b from-white via-blue-50 to-indigo-100">

//       {/* Background glows */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full animate-pulse" />
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full animate-pulse" />

//       {/* LOGO MARQUEE */}
//       <div className="overflow-hidden py-16 relative">
//         <motion.div
//           className="flex gap-20 whitespace-nowrap"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
//         >
//           {[...LOGOS, ...LOGOS].map((logo, i) => (
//             <motion.img
//               key={i}
//               src={logo}
//               loading="lazy"
//               alt="course logo"
//               whileHover={{ scale: 1.1 }}
//               className="h-32 md:h-44 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300"
//             />
//           ))}
//         </motion.div>
//       </div>

//       {/* HERO CTA */}
//       <motion.section
//         variants={containerVariant}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="flex flex-col justify-center items-center text-center px-4 py-20 relative z-10"
//       >
//         <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">
//           Ready to Start Your Tech Journey?
//         </motion.h2>

//         <motion.p variants={fadeUp} className="text-gray-600 max-w-2xl mb-10 text-lg">
//           Join IIOFT and build industry-ready skills that top companies are looking for.
//         </motion.p>

//         <motion.a variants={fadeUp} href={APPLY_URL} target="_blank" rel="noopener noreferrer">
//           <motion.button
//             whileHover={{ scale: 1.08, boxShadow: "0px 0px 30px rgba(37,99,235,0.7)" }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-3 px-10 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-xl"
//           >
//             <CgPlayButtonR size={24} />
//             Apply Now
//           </motion.button>
//         </motion.a>
//       </motion.section>

//       {/* STATS */}
//       <section className="py-20 bg-white/40 backdrop-blur-xl">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-10 px-6">
//           {STATS.map(({ number, label }, i) => (
//             <motion.div
//               key={label}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-4xl font-bold text-indigo-700">{number}</h3>
//               <p className="text-gray-600 mt-2">{label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* PROGRAMS */}
//       <section className="py-24 px-6 max-w-6xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-4xl font-extrabold text-indigo-700"
//         >
//           Our Flagship Programs
//         </motion.h2>

//         <motion.div
//           variants={containerVariant}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="mt-16 grid md:grid-cols-4 gap-8"
//         >
//           {PROGRAMS.map((program) => (
//             <motion.div
//               key={program}
//               variants={fadeUp}
//               whileHover={{ scale: 1.08, rotateY: 5 }}
//               className="bg-white/30 backdrop-blur-xl border border-white/40 text-indigo-900 p-8 rounded-3xl shadow-2xl cursor-pointer"
//             >
//               <h3 className="text-xl font-semibold">{program}</h3>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* FOOTER */}
//       <div className="bg-blue-950 flex justify-center items-center h-12">
//         <p className="text-white text-sm text-center">
//           © 2026 IIOFT | All Rights Reserved | Designed by Web Developer
//         </p>
//       </div>

//     </div>
//   );
// }







import React from "react";
import { motion } from "framer-motion";
import { CgPlayButtonR } from "react-icons/cg";
import { Helmet } from "react-helmet-async";

// ─── Static data ──────────────────────────────────────────────────────────────

const LOGOS = [
  "DATA ANALYSIS.png",
  "FINANCE.png",
  "DATA SCIENCE.png",
  "DIPLOMA IHRM.png",
  "WEB DEVELOPMENT.png",
  "EATHICAL HACKING.png",
  "DIGITAL MARKETING.png",
  "DIPLOMA IID.png",
];

const STATS = [
  { number: "1000+", label: "Students Enrolled" },
  { number: "50+", label: "Industry Mentors" },
  { number: "100%", label: "Placement Support" },
];

const PROGRAMS = ["Web Development", "App Development", "AI & Robotics", "Cyber Security"];

const APPLY_URL = "https://docs.google.com/forms/d/19Zf-RLRlerLWgnbczZBoAUfuhdVV20xs-WngXYC4rbw/edit";

// ─── Shared animation variants ────────────────────────────────────────────────

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Apply() {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-white via-blue-50 to-indigo-100">

      {/* HELMET */}
      <Helmet>
        <title>Apply Now - IIOFT Delhi | Admission Open 2026</title>
        <meta name="description" content="IIOFT Delhi mein admission ke liye abhi apply karo. Web Development, Data Science, AI & Robotics, Cyber Security aur bahut saare courses mein enroll karo. 100% Placement Support." />
        <meta name="keywords" content="IIOFT admission, apply IIOFT Delhi, IIOFT enrollment 2026, technology course admission Delhi, data science admission, web development admission Delhi" />
        <meta property="og:title" content="Apply Now - IIOFT Delhi | Admission Open 2026" />
        <meta property="og:description" content="IIOFT Delhi mein admission ke liye abhi apply karo. Limited seats available. 100% Placement Support!" />
        <meta property="og:url" content="https://iioft.co.in/Apply" />
        <link rel="canonical" href="https://iioft.co.in/Apply" />
      </Helmet>

      {/* Background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full animate-pulse" />

      {/* LOGO MARQUEE */}
      <div className="overflow-hidden py-16 relative">
        <motion.div
          className="flex gap-20 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              loading="lazy"
              alt="course logo"
              whileHover={{ scale: 1.1 }}
              className="h-32 md:h-44 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
          ))}
        </motion.div>
      </div>

      {/* HERO CTA */}
      <motion.section
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center text-center px-4 py-20 relative z-10"
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Ready to Start Your Tech Journey?
        </motion.h2>

        <motion.p variants={fadeUp} className="text-gray-600 max-w-2xl mb-10 text-lg">
          Join IIOFT and build industry-ready skills that top companies are looking for.
        </motion.p>

        <motion.a variants={fadeUp} href={APPLY_URL} target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 30px rgba(37,99,235,0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-10 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-xl"
          >
            <CgPlayButtonR size={24} />
            Apply Now
          </motion.button>
        </motion.a>
      </motion.section>

      {/* STATS */}
      <section className="py-20 bg-white/40 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-10 px-6">
          {STATS.map(({ number, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-indigo-700">{number}</h3>
              <p className="text-gray-600 mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-indigo-700"
        >
          Our Flagship Programs
        </motion.h2>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {PROGRAMS.map((program) => (
            <motion.div
              key={program}
              variants={fadeUp}
              whileHover={{ scale: 1.08, rotateY: 5 }}
              className="bg-white/30 backdrop-blur-xl border border-white/40 text-indigo-900 p-8 rounded-3xl shadow-2xl cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{program}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FOOTER */}
      <div className="bg-blue-950 flex justify-center items-center h-12">
        <p className="text-white text-sm text-center">
          © 2026 IIOFT | All Rights Reserved | Designed by Web Developer
        </p>
      </div>

    </div>
  );
}