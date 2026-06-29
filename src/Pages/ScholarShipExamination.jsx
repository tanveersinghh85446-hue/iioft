import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaRegLightbulb,
  FaBookReader,
  FaPhone,
  FaUserGraduate,
  FaFilePowerpoint,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdTimer, MdNotificationImportant } from "react-icons/md";
import {
  PiMicrosoftWordLogo,
  PiMicrosoftExcelLogo,
  PiMicrosoftOutlookLogo,
  PiMicrosoftTeamsLogoDuotone,
  PiExam,
} from "react-icons/pi";
import { CiStickyNote } from "react-icons/ci";
import { GiArchiveRegister } from "react-icons/gi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { TiTickOutline } from "react-icons/ti";

const benefits = [
  {
    icon: <FaTrophy className="text-white text-xl" />,
    title: "Top 10 Students",
    desc: "Score 75% or above and win the Microsoft Office Course absolutely FREE",
    highlight: "Worth ₹9,999",
    color: "from-yellow-400 to-orange-400",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  {
    icon: <FaRegLightbulb className="text-white text-xl" />,
    title: "Special Enrollment",
    desc: "Other selected students get exclusive access at a heavily discounted fee",
    highlight: "Only ₹5,999",
    color: "from-blue-400 to-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: <IoBookSharp className="text-white text-xl" />,
    title: "Comprehensive Curriculum",
    desc: "Word, Excel, PowerPoint, Outlook, Teams & OneNote — practical & industry-focused",
    highlight: "6 Applications",
    color: "from-purple-400 to-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: <MdTimer className="text-white text-xl" />,
    title: "Flexible Duration",
    desc: "Complete the course at a comfortable pace with expert guidance",
    highlight: "2–3 Months",
    color: "from-green-400 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-200",
  },
];

const modules = [
  {
    name: "Microsoft Word",
    icon: <PiMicrosoftWordLogo className="text-3xl" />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Microsoft Excel",
    icon: <PiMicrosoftExcelLogo className="text-3xl" />,
    color: "bg-green-100 text-green-700",
  },
  {
    name: "PowerPoint",
    icon: <FaFilePowerpoint className="text-3xl" />,
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Outlook",
    icon: <PiMicrosoftOutlookLogo className="text-3xl" />,
    color: "bg-sky-100 text-sky-700",
  },
  {
    name: "MS Teams",
    icon: <PiMicrosoftTeamsLogoDuotone className="text-3xl" />,
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "OneNote",
    icon: <CiStickyNote className="text-3xl" />,
    color: "bg-rose-100 text-rose-700",
  },
];

const timeline = [
  {
    date: "15 July",
    label: "Last Date to Apply",
    icon: <FaCalendarAlt className="text-lg" />,
    color: "bg-red-500",
  },
  {
    date: "18–19 July",
    label: "Scholarship Exam",
    icon: <PiExam className="text-lg" />,
    color: "bg-blue-600",
  },
  {
    date: "After Results",
    label: "Course Begins",
    icon: <FaUserGraduate className="text-lg" />,
    color: "bg-green-600",
  },
];

export default function ScholarShipExamination() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
        <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-32 -left-16 w-56 h-56 md:w-80 md:h-80 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-yellow-400/10 rounded-full blur-2xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5 shadow-md">
              Limited Seats Available
            </span>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              <span className="inline-flex items-center justify-center gap-2 flex-wrap">
                <FaUserGraduate className="text-yellow-300" />
                Scholarship Test Invitation
              </span>
              <span className="block text-yellow-300 mt-2 text-xl sm:text-2xl md:text-4xl">
                Microsoft Office Course
              </span>
            </h1>

            <p className="text-blue-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed px-2">
              International Institute of Futuristic Technology (IIOFT) invites
              you to participate in our{" "}
              <span className="text-yellow-300 font-semibold">
                Microsoft Office Scholarship Test
              </span>{" "}
              and build skills that employers truly value.
            </p>

            {/* Fee pill */}
            <div className="mt-7 inline-flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-sm rounded-full px-5 py-3 text-white font-semibold text-sm sm:text-base">
              <TiTickOutline className="text-yellow-300 text-xl shrink-0" />
              Application Fee:{" "}
              <span className="text-yellow-300 font-extrabold ml-1">FREE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS GRID ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-slate-800 mb-2 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <HiArrowTopRightOnSquare className="text-blue-600" />
          Why Join?
        </motion.h2>
        <p className="text-center text-slate-500 mb-8 md:mb-10 text-sm sm:text-base">
          Here's what's in it for you
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative rounded-2xl border ${b.border} ${b.bg} p-5 md:p-6 shadow-sm transition-all duration-300 ${
                hovered === i ? "shadow-lg -translate-y-1" : ""
              }`}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div
                  className={`w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-linear-to-br ${b.color} shadow-md shrink-0`}
                >
                  {b.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-800 text-base md:text-lg">
                    {b.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {b.desc}
                  </p>
                  <span
                    className={`inline-block mt-3 text-xs font-bold px-3 py-1 rounded-full bg-linear-to-r ${b.color} text-white shadow-sm`}
                  >
                    {b.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="bg-white py-10 md:py-14 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-slate-800 mb-2 flex items-center justify-center gap-3">
            <FaBookReader className="text-blue-600" />
            What You'll Learn
          </h2>
          <p className="text-center text-slate-500 mb-8 md:mb-10 text-sm sm:text-base">
            Practical, industry-focused training across 6 powerful tools
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`${m.color} rounded-xl px-3 py-4 md:px-4 md:py-5 flex flex-col items-center gap-2 text-center font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-shadow cursor-default`}
              >
                {m.icon}
                {m.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-slate-800 mb-2 flex items-center justify-center gap-2">
          <MdNotificationImportant className="text-red-500" />
          Important Dates
        </h2>
        <p className="text-center text-slate-500 mb-10 md:mb-12 text-sm sm:text-base">
          Mark your calendar — don't miss out
        </p>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-5.5 top-4 bottom-4 w-0.5 bg-linear-to-b from-blue-300 via-blue-500 to-green-400" />

          <div className="flex flex-col gap-6 md:gap-8">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-4 pl-14 relative"
              >
                {/* dot */}
                <div
                  className={`absolute left-2.5 w-7 h-7 ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md shrink-0`}
                >
                  {i + 1}
                </div>
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm px-4 py-3 md:px-5 md:py-4 flex-1 flex items-center gap-3 md:gap-4 min-w-0">
                  <span className="text-slate-500 shrink-0">{t.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide truncate">
                      {t.label}
                    </p>
                    <p className="text-slate-800 font-bold text-base md:text-lg">
                      {t.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3">
              Register Today & Take the First Step!
            </h2>
            <p className="text-blue-200 mb-8 text-sm sm:text-base leading-relaxed">
              Seats are limited. Don't miss this opportunity to upgrade your
              skills and boost your career — completely free to apply.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8">
              <a
                href="tel:+919560307098"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 active:bg-white/30 transition border border-white/20 rounded-xl px-5 py-4 text-white font-semibold text-sm sm:text-base"
              >
                <FaPhone className="text-yellow-300 shrink-0" />
                +91 95603 07098
              </a>
              <a
                href="tel:+919270661339"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 active:bg-white/30 transition border border-white/20 rounded-xl px-5 py-4 text-white font-semibold text-sm sm:text-base"
              >
                <FaPhone className="text-yellow-300 shrink-0" />
                +91 92706 61339
              </a>
            </div>

            {/* Register Button */}
            <a
              href="tel:+919560307098"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 transition text-yellow-900 font-extrabold text-base sm:text-lg px-8 md:px-10 py-3.5 md:py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform duration-200"
            >
              <GiArchiveRegister className="text-xl shrink-0" />
              Register Now — It's FREE
            </a>

            <p className="text-blue-300 text-xs mt-6">
              International Institute of Futuristic Technology (IIOFT)
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
