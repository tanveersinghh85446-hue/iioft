import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  FaFacebookF, FaInstagramSquare, FaYoutube,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegLightbulb, FaGlobe,
} from "react-icons/fa";
import { FaLinkedin, FaHandshakeSimple, FaUserGraduate, FaXTwitter } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { BsPersonVcardFill, BsWhatsapp } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";

// Static data

const IMAGES = ["AB.jpeg", "Bulding.jpeg", "Graduation.jpeg", "Student.jpeg", "Hero1.jpeg", "Hero2.jpeg", "Hero3.jpeg", "Hero4.jpeg"];

const LOGOS = [
  "Google.png", "Alcoa.png", "accenture.webp", "Genpact.png", "GoldManSachs.png",
  "Hcl.png", "Ibm.png", "Microsoft.png", "NielsenIQ.png", "Ramboll.png",
  "Wipro.png", "Wsp.png",
];

const PLACEMENT_LOGOS = [
  "Google.png", "Microsoft.png", "Aws.png", "Ibm.png", "Deloitte.png",
  "Accenture.png", "tcs.png", "Infosys.png", "Wipro.png", "Capgemini.png",
  "Hcl.png", "Oracle.png", "Sap.png", "Adobe.png", "Cisco.png",
  "Intel.png", "Cognizant.png", "Salesforce.png", "Tm.png", "Nvidia.png",
];

const PROS = [
  { icon: <FaUserGraduate />, title: "Globally Recognized Certification" },
  { icon: <FaRegLightbulb />, title: "Hands-On Training" },
  { icon: <FaHandshakeSimple />, title: "Strong Brand Reputation" },
  { icon: <BsPersonVcardFill />, title: "Real-World Projects" },
  { icon: <RiGalleryFill />, title: "360° Career Support" },
  { icon: <FaGlobe />, title: "IIOFT® Alumni Status" },
];

const LOCATIONS = [
  { name: "Delhi, India, Dwarka", link: "https://www.google.com/maps/search/?api=1&query=Kochhar+Plaza+H3MC+XVF+Ramphal+Chowk+Sector+7+Palam+Delhi+110077" },
  { name: "Banglore, India", link: "https://maps.app.goo.gl/X1jBeHhow9cDK1qG8?g_st=aw" },
  { name: "Gujrat, India", link: "https://maps.app.goo.gl/HP72h9DCfNQjeUfTA?g_st=aw" },
  { name: "Hyderabad, India", link: "https://maps.app.goo.gl/bdL2hZgcMKuAtfxE9?g_st=aw" },
  { name: "Pune, India", link: "https://maps.app.goo.gl/gyt6TCVYwRRpr4Fr8?g_st=aw" },
  { name: "Capetown, South Africa", link: "https://maps.app.goo.gl/aqUSTiutzfPv7EYE7?g_st=aw" },
  { name: "London, United Kingdom", link: "https://maps.app.goo.gl/mswfsuEuiDnDwmRB8?g_st=aw" },
  { name: "Toronto, Canada", link: "https://maps.app.goo.gl/yhSD6dUpi9eoaK149?g_st=aw" },
  { name: "New York, United States", link: "https://maps.app.goo.gl/Yr8xWz4MY8f9aM8U9?g_st=aw" },
  { name: "Paris, France", link: "https://maps.app.goo.gl/yNFMHZTgRBuZbQSE8?g_st=aw" },
  { name: "Sydney, Australia", link: "https://maps.app.goo.gl/NMCKRFoAP8gqNDRK7?g_st=aw" },
  { name: "Perth, Australia", link: "https://maps.app.goo.gl/Rzd2LHerrhH2t1vu6?g_st=aw" },
  { name: "Adelaide, Australia", link: "https://maps.app.goo.gl/Rzd2LHerrhH2t1vu6?g_st=aw" },
];

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/profile.php?id=61578516476737", icon: <FaFacebookF className="text-blue-600 text-lg md:text-2xl" /> },
  { href: "https://www.instagram.com/iioft.official", icon: <FaInstagramSquare className="text-pink-600 text-lg md:text-2xl" /> },
  { href: "https://www.youtube.com/channel/UCLhUsvW0O-c6mf7Ti9jrOBg", icon: <FaYoutube className="text-red-600 text-lg md:text-2xl" /> },
  { href: "https://www.linkedin.com/in/iioft-a72bb83b7/", icon: <FaLinkedin className="text-blue-800 text-lg md:text-2xl" /> },
  { href: "https://x.com/iioft", icon: <FaXTwitter className="text-black text-lg md:text-2xl" /> },
  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@iioft.co.in&su=Inquiry&body=Hello%20IIOFT%20Team", icon: <IoIosMailUnread className="text-yellow-500 text-lg md:text-2xl" /> },
  { href: "https://wa.me/919560307098", icon: <BsWhatsapp className="text-green-600 text-lg md:text-2xl" /> },
];

const COUNTER_TARGETS = { labs: 10, faculty: 80, placement: 100, students: 2000 };
const COUNTER_STEPS = { labs: 1, faculty: 1, placement: 1, students: 18 };

const COUNTER_LABELS = [
  { key: "labs", suffix: "+", label: "Advanced Labs" },
  { key: "faculty", suffix: "+", label: "Expert Faculty" },
  { key: "placement", suffix: "%", label: "Placement Rate" },
  { key: "students", suffix: "+", label: "Students Enrolled" },
];

const MARQUEE_TRANSITION = { repeat: Infinity, duration: 8, ease: "linear" };

// ─── Sub-components ───────────────────────────────────────────────────────────

function LogoMarquee() {
  return (
    <div className="overflow-hidden py-10 bg-white">
      <motion.div
        className="flex gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={MARQUEE_TRANSITION}
      >
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <img key={i} src={logo} alt="logo" className="h-16 w-auto object-contain" />
        ))}
      </motion.div>
    </div>
  );
}

function SocialButton({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className="bg-white transition-transform duration-300 hover:scale-150 h-9 w-9 md:h-12 md:w-12 rounded-full flex items-center justify-center">
        {icon}
      </button>
    </a>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState({ labs: 0, faculty: 0, placement: 0, students: 0 });

  // Image carousel
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % IMAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  // Animated counters — stops each key individually when target is reached
  useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => {
        const next = { ...prev };
        let allDone = true;
        for (const key of Object.keys(COUNTER_TARGETS)) {
          if (prev[key] < COUNTER_TARGETS[key]) {
            next[key] = Math.min(prev[key] + COUNTER_STEPS[key], COUNTER_TARGETS[key]);
            allDone = false;
          }
        }
        if (allDone) clearInterval(id);
        return next;
      });
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <div>

      {/* ── HELMET ── */}
      <Helmet>
        <title>IIOFT - International Institute of Futuristic Technology Delhi</title>
        <meta name="description" content="IIOFT Delhi - India's leading futuristic technology institute. Data Science, Web Development, Digital Marketing, Ethical Hacking aur bahut saare courses. 100% Placement Support." />
        <meta name="keywords" content="IIOFT, International Institute of Futuristic Technology, technology institute Delhi, data science Delhi, web development Delhi, digital marketing Delhi, ethical hacking Delhi, best institute Dwarka" />
        <meta property="og:title" content="IIOFT - International Institute of Futuristic Technology Delhi" />
        <meta property="og:description" content="IIOFT Delhi - India's leading futuristic technology institute. 100% Placement Support. Enroll Now!" />
        <meta property="og:url" content="https://iioft.co.in" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://iioft.co.in" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <motion.img
          key={index}
          src={IMAGES[index]}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6 max-w-4xl text-white">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-sm md:text-base text-blue-400 mb-4"
          >
            World's Best Institute
          </motion.h2>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            International Institute of <br />
            <span className="text-blue-500">Futuristic Technology</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-md">
            <span className="text-red-500">Think</span>{" "}
            <span className="text-yellow-400">Smart</span>{" "}|{" "}
            <span className="text-red-500">Learn</span>{" "}
            <span className="text-yellow-400">Smart</span>
            <br />
            <span className="text-yellow-400">Skill Up with </span>
            <span className="text-blue-400 font-bold">IIOFT</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="course">
              <button className="px-5 py-2 sm:px-8 sm:py-3 bg-blue-600 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto animate-bounce">
                Explore Courses
              </button>
            </Link>
            <Link to="apply">
              <button className="px-5 py-2 sm:px-8 sm:py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto animate-bounce">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* ── PROS ── */}
      <div className="flex items-center justify-center mt-12 md:mt-16 px-4 text-center">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          The <span className="text-blue-600 font-serif">IIOFT</span> pro's
        </motion.h2>
      </div>

      <div className="py-8 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {PROS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-500 rounded-2xl p-4 md:p-8 shadow-lg text-center hover:scale-105 transition duration-300"
            >
              <div className="text-3xl md:text-5xl mx-auto mb-3 flex justify-center">{item.icon}</div>
              <h3 className="text-base md:text-xl font-bold mb-2 text-black">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── COUNTERS ── */}
      <div className="py-16 md:py-20 mb-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Our Milestones</h2>
          <p className="mt-3 text-black max-w-xl mx-auto">
            A quick look at our achievements and growth in numbers.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-blue-600 px-4">
          {COUNTER_LABELS.map(({ key, suffix, label }) => (
            <div key={key}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">{count[key]}{suffix}</h2>
              <p className="mt-2 text-sm md:text-lg text-black">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HIRING PARTNERS ── */}
      <section className="py-20 bg-blue-600 px-6">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Hiring Partners</h2>
          <p className="text-blue-100 mt-4 text-lg">Students Placed In Top MNC Companies</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {PLACEMENT_LOGOS.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="bg-black rounded-2xl p-6 flex items-center justify-center shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={`/${logo}`}
                alt="company logo"
                className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <LogoMarquee />

      {/* ── FOOTER ── */}
      <div className="bg-blue-600 flex flex-col lg:flex-row justify-between items-start px-6 md:px-12 lg:px-32 py-12 gap-10 text-white">

        {/* Brand + social */}
        <div className="max-w-md">
          <img className="max-h-12 w-auto object-contain" src="Logo.png" alt="Logo" />
          <p className="text-xl">
            International Institute of Futuristic Technology (IIOFT) prepares students with practical skills and advanced knowledge.
          </p>
          <div className="mt-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
              Connect With Us!
            </h2>
            <div className="lg:flex gap-4 grid grid-cols-4">
              {SOCIAL_LINKS.map((s, i) => <SocialButton key={i} {...s} />)}
            </div>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-lg md:text-2xl font-bold mb-4">India-Based. Globally Focused</h3>
          {LOCATIONS.map((loc, i) => (
            <p
              key={i}
              className="cursor-pointer hover:text-black"
              onClick={() => window.open(loc.link, "_blank")}
            >
              {loc.name}
            </p>
          ))}
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg md:text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col space-y-2">
            {[["Home", "/"], ["Contact", "/contact"], ["Course", "/course"], ["About", "/about"], ["Know More", "/know-more"]].map(([label, to]) => (
              <Link key={to} className="cursor-pointer hover:text-black" to={to}>{label}</Link>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg md:text-2xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2"><FaPhoneAlt />+91 9560307098</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@iioft.co.in</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> India, Dwarka</p>
          </div>
          <motion.div
            className="mt-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link to="apply">
              <button className="px-5 py-2 sm:px-8 sm:py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto">
                Apply Now
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* <div className="bg-blue-950 flex justify-center items-center mt-4 h-10 md:h-12 px-2">
        <p className="text-white text-xs sm:text-sm text-center">
          © 2026 IIOFT. All Rights Reserved. Designed & Developed by Developer <BsCodeSlash/>
        </p>
      </div> */}

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