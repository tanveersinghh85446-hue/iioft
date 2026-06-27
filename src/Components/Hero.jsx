import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaRegLightbulb, FaGlobe } from "react-icons/fa";
import { FaHandshakeSimple, FaUserGraduate } from "react-icons/fa6";
import { BsPersonVcardFill } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import Footer from "./Footer";
// ─── Static data ──────────────────────────────────────────────────────────────

const IMAGES = [
  "AB.AVIF",
  "Bulding.AVIF",
  "Graduation.AVIF",
  "Student.AVIF",
  "Hero1.AVIF",
  "Hero2.AVIF",
  "Hero3.AVIF",
  "Hero4.AVIF",
];

const FAQS = [
  {
    question: "What courses are available at IIOFT?",
    answer:
      "IIOFT offers industry-relevant courses such as Data Science, Web Development, Digital Marketing, Ethical Hacking, Cloud Computing, and Artificial Intelligence/Machine Learning. All programs include hands-on training and provide globally recognized certifications.",
  },
  {
    question: "Does IIOFT offer a 100% placement guarantee?",
    answer:
      "Yes, IIOFT has a strong placement record with students placed in top companies such as Google, Microsoft, IBM, Accenture, and Wipro. Our dedicated placement team provides complete career support, including resume building and mock interviews.",
  },
  {
    question: "What are the course fees, and are EMI options available?",
    answer:
      "Course fees vary depending on the program. We offer flexible payment plans and EMI options to make learning accessible. For detailed fee information, please contact us at +91 9560307098 or fill out the Enquire Now form.",
  },
  {
    question:
      "How many IIOFT centers are there, and are online classes available?",
    answer:
      "IIOFT has multiple centers across India, including Delhi (Dwarka), Bangalore, Hyderabad, Pune, and Gujarat. We also have an international presence in cities like London, Toronto, New York, Paris, Sydney, Perth, Adelaide, and Cape Town. Both online and hybrid learning options are available.",
  },
  {
    question: "What certification will I receive after completing the course?",
    answer:
      "Upon successful completion, you will receive a globally recognized IIOFT certification accepted by industries worldwide. You will also become a part of the IIOFT Alumni Network, which supports future career opportunities.",
  },
  {
    question: "What are the eligibility criteria for admission?",
    answer:
      "Most courses require a minimum qualification of 10+2. Some advanced programs may require a graduate degree. Students from all backgrounds—engineering, commerce, or arts—are welcome. The admission process is simple: just click on the Enquire Now button.",
  },
];

const LOGOS = [
  "tcs.WebP",
  "Google.WebP",
  "Hcl.WebP",
  "Alcoa.WebP",
  "Microsoft.WebP",
  "Ramboll.WebP",
  "NielsenIQ.WebP",
  "GoldManSachs.WebP",
  "Ibm.AVIF",
  "Infosys.png",
  "Nvidia.WebP",
  "Salesforce.WebP",
];

const PLACEMENT_LOGOS = [
  "Google.WebP",
  "Microsoft.WebP",
  "Aws.WebP",
  "Ibm.AVIF",
  "Deloitte.WebP",
  "Accenture.png",
  "tcs.WebP",
  "Infosys.png",
  "Wipro.AVIF",
  "Capgemini.WebP",
  "Hcl.WebP",
  "Oracle.WebP",
  "Sap.WebP",
  "Adobe.WebP",
  "Cisco.WebP",
  "Intel.WebP",
  "Cognizant.WebP",
  "Salesforce.WebP",
  "Tm.WebP",
  "Nvidia.WebP",
];

const PROS = [
  { icon: <FaUserGraduate />, title: "Globally Recognized Certification" },
  { icon: <FaRegLightbulb />, title: "Hands-On Training" },
  { icon: <FaHandshakeSimple />, title: "Strong Brand Reputation" },
  { icon: <BsPersonVcardFill />, title: "Real-World Projects" },
  { icon: <RiGalleryFill />, title: "360° Career Support" },
  { icon: <FaGlobe />, title: "IIOFT® Alumni Status" },
];

const COUNTER_TARGETS = {
  labs: 10,
  faculty: 80,
  placement: 100,
  students: 2000,
};
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
          <img
            key={i}
            src={logo}
            alt="logo"
            className="h-16 w-auto object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Home Component ──────────────────────────────────────────────────────

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState({
    labs: 0,
    faculty: 0,
    placement: 0,
    students: 0,
  });

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % IMAGES.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        const next = { ...prev };
        let allDone = true;
        for (const key of Object.keys(COUNTER_TARGETS)) {
          if (prev[key] < COUNTER_TARGETS[key]) {
            next[key] = Math.min(
              prev[key] + COUNTER_STEPS[key],
              COUNTER_TARGETS[key],
            );
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
        <title>
          IIOFT - International Institute of Futuristic Technology Delhi
        </title>
        <meta
          name="description"
          content="IIOFT Delhi - India's leading futuristic technology institute. Data Science, Web Development, Digital Marketing, Ethical Hacking aur bahut saare courses. 100% Placement Support."
        />
        <meta
          name="keywords"
          content="IIOFT, International Institute of Futuristic Technology, technology institute Delhi, data science Delhi, web development Delhi, digital marketing Delhi, ethical hacking Delhi, best institute Dwarka"
        />
        <meta
          property="og:title"
          content="IIOFT - International Institute of Futuristic Technology Delhi"
        />
        <meta
          property="og:description"
          content="IIOFT Delhi - India's leading futuristic technology institute. 100% Placement Support. Enroll Now!"
        />
        <meta property="og:url" content="https://iioft.co.in" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://iioft.co.in" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <motion.img
          key={index}
          src={IMAGES[index]}
          alt="IIOFT students and campus"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-6 max-w-4xl text-white">
          {/* <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-sm md:text-base text-blue-400 mb-4"
          >
            World's Best Institute
          </motion.h2> */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            International Institute of <br />
            <span className="text-blue-300">Futuristic Technology</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-md">
            <span className="text-red-300">Think</span>{" "}
            <span className="text-yellow-400">Smart</span> |{" "}
            <span className="text-red-300">Learn</span>{" "}
            <span className="text-yellow-400">Smart</span>
            <br />
            <span className="text-yellow-400">Skill Up with </span>
            <span className="text-blue-400 font-bold">IIOFT</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/course"
              className="min-h-12 px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto animate-bounce inline-flex items-center justify-center"
            >
              Explore Courses
            </Link>

            <Link
              to="/Enquire"
              className="min-h-12 px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto animate-bounce inline-flex items-center justify-center"
            >
              Enquire Now
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
              <div className="text-3xl md:text-5xl mx-auto mb-3 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-base md:text-xl font-bold mb-2 text-black">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── COUNTERS ── */}
      <div className="py-16 md:py-20 mb-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Our Milestones
          </h2>
          <p className="mt-3 text-black max-w-xl mx-auto">
            A quick look at our achievements and growth in numbers.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-blue-600 px-4">
          {COUNTER_LABELS.map(({ key, suffix, label }) => (
            <div key={key}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                {count[key]}
                {suffix}
              </h2>
              <p className="mt-2 text-sm md:text-lg text-black">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HIRING PARTNERS ── */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Hiring Partners
          </h2>
          <p className="text-white mt-4 text-lg">
            Students Placed In Top MNC Companies
          </p>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {[
              ...PLACEMENT_LOGOS.slice(0, 10),
              ...PLACEMENT_LOGOS.slice(0, 10),
            ].map((logo, i) => (
              <div
                key={i}
                className="min-w-45 bg-black rounded-2xl p-6 flex items-center justify-center shadow-lg"
              >
                <img
                  src={`/${logo}`}
                  alt="company logo"
                  className="h-12 md:h-16 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {[...PLACEMENT_LOGOS.slice(10), ...PLACEMENT_LOGOS.slice(10)].map(
              (logo, i) => (
                <div
                  key={i}
                  className="min-w-45 bg-black rounded-2xl p-6 flex items-center justify-center shadow-lg"
                >
                  <img
                    src={`/${logo}`}
                    alt="company logo"
                    className="h-12 md:h-16 object-contain"
                  />
                </div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('AB.AVIF')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-14">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="flex justify-between items-center p-4 sm:p-6 w-full text-left"
                  onClick={() => toggle(i)}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    {faq.question}
                  </h3>
                  <span className="text-red-600 text-xl font-bold">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />
      {/* footer */}
      <Footer />
    </div>
  );
}
