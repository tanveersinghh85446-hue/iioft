import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import coursesData from "../data/courses.json";

// ─── CATEGORY THEME ──────────────────────────────────────────────────────────
const theme = {
  master: {
    heroBg: "from-slate-900 via-blue-900 to-blue-700",
    accent: "text-blue-600",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    tag: "bg-blue-50 text-blue-700 border-blue-200",
    numBg: "from-blue-700 to-blue-500",
    dot: "bg-blue-300",
    backColor: "text-blue-700",
  },
  advance: {
    heroBg: "from-indigo-950 via-indigo-800 to-indigo-600",
    accent: "text-indigo-600",
    accentBg: "bg-indigo-50",
    accentBorder: "border-indigo-200",
    tag: "bg-indigo-50 text-indigo-700 border-indigo-200",
    numBg: "from-indigo-700 to-indigo-500",
    dot: "bg-indigo-300",
    backColor: "text-indigo-700",
  },
};

// ─── NOT FOUND ────────────────────────────────────────────────────────────────
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-6 text-center px-4">
      <div className="text-6xl">🔍</div>
      <h1 className="text-2xl font-black text-slate-800">Course Not Found</h1>
      <p className="text-slate-500 text-sm max-w-sm">
        The course you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/courses"
        className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition no-underline"
      >
        ← Back to All Courses
      </Link>
    </div>
  );
}

// ─── SECTION HEADING ──────────────────────────────────────────────────────────
function SectionHeading({ icon, label, t }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-base">{icon}</span>
      <span
        className={`text-xs font-bold tracking-widest uppercase ${t.accent}`}
      >
        {label}
      </span>
      <div className="flex-1 h-px bg-slate-200 ml-1" />
    </div>
  );
}

// ─── COURSE DETAIL PAGE ───────────────────────────────────────────────────────
export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find course from JSON by slug
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) return <NotFound />;

  const t = theme[course.category] || theme.master;

  return (
    <>
      {/* ── SEO META TAGS ── */}
      <Helmet>
        <title>{course.metaTitle}</title>
        <meta name="description" content={course.metaDescription} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={course.metaTitle} />
        <meta property="og:description" content={course.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={course.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={course.metaTitle} />
        <meta name="twitter:description" content={course.metaDescription} />
        <meta name="twitter:image" content={course.image} />

        {/* Canonical */}
        <link
          rel="canonical"
          href={`${window.location.origin}/course/${course.slug}`}
        />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* ── BACK NAV ── */}
        <div className="max-w-3xl mx-auto px-4 pt-6">
          <Link to="/courses"
            onClick={() => navigate(-1)}
            className={`flex items-center gap-1.5 text-xs font-semibold bg-transparent border-0 cursor-pointer ${t.backColor}`}
          >
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Courses
          </Link>
        </div>

        {/* ── HERO ── */}
        <div className="max-w-3xl mx-auto px-4 py-5">
          <div
            className={`rounded-2xl p-6 relative overflow-hidden bg-linear-to-br ${t.heroBg}`}
          >
            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10" />
            <div className="absolute -bottom-5 left-2 w-16 h-16 rounded-full bg-white/5" />

            <div className="relative">
              {/* Category & duration badge */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-bold bg-white/15 border border-white/25 rounded-full px-3 py-0.5 text-white/80">
                  {course.category === "master"
                    ? "Master Diploma"
                    : "Advance Professional"}
                </span>
                <span className="text-xs font-bold bg-white/15 border border-white/25 rounded-full px-3 py-0.5 text-white/80">
                  ⏱ {course.duration}
                </span>
                {course.price && course.price !== "Contact for Pricing" && (
                  <span className="text-xs font-bold bg-amber-400/90 text-amber-900 rounded-full px-3 py-0.5">
                    {course.price}
                  </span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2">
                {course.title}
              </h1>
              <p className="text-white/70 text-sm leading-relaxed">
                {course.shortDescription}
              </p>

              {/* CTA */}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/apply"
                  className="px-6 py-2.5 rounded-full bg-white text-slate-900 text-sm font-bold hover:bg-slate-100 transition no-underline"
                >
                  Enroll Now →
                </Link>
                <a
                  href="#syllabus"
                  className="px-6 py-2.5 rounded-full bg-white/15 border border-white/30 text-white text-sm font-bold hover:bg-white/25 transition no-underline"
                >
                  View Syllabus
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-3xl mx-auto px-4 pb-16 space-y-8">
          {/* Full Description */}
          <section
            className={`bg-white rounded-2xl border ${t.accentBorder} p-5`}
          >
            <SectionHeading icon="📖" label="About This Course" t={t} />
            <p className="text-sm text-slate-600 leading-relaxed">
              {course.fullDescription}
            </p>
          </section>

          {/* Features */}
          {course.features?.length > 0 && (
            <section
              className={`bg-white rounded-2xl border ${t.accentBorder} p-5`}
            >
              <SectionHeading icon="✅" label="What You Will Learn" t={t} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {course.features.map((f, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 rounded-xl p-3 ${t.accentBg}`}
                  >
                    <span className={`text-sm mt-0.5 ${t.accent}`}>✓</span>
                    <span className="text-sm text-slate-700 font-medium">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Syllabus */}
          {course.syllabus?.length > 0 && (
            <section
              id="syllabus"
              className={`bg-white rounded-2xl border ${t.accentBorder} p-5`}
            >
              <SectionHeading icon="📚" label="Course Syllabus" t={t} />
              <div className="space-y-3">
                {course.syllabus.map((mod, i) => (
                  <div
                    key={i}
                    className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-150"
                  >
                    {/* Module Header */}
                    <div className="flex items-center gap-3 p-4">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold text-white shrink-0 bg-linear-to-br ${t.numBg}`}
                      >
                        {mod.module}
                      </div>
                      <h3 className="text-sm font-semibold text-slate-800 leading-snug">
                        {mod.title}
                      </h3>
                    </div>

                    {/* Topics */}
                    {mod.topics?.length > 0 && (
                      <div className="px-4 pb-4">
                        <ul className="flex flex-wrap gap-2 ml-10">
                          {mod.topics.map((topic, j) => (
                            <li
                              key={j}
                              className="text-xs text-slate-500 flex items-center gap-1.5"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 ${t.dot}`}
                              />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Enroll CTA */}
          <section
            id="enroll"
            className={`bg-linear-to-br ${t.heroBg} rounded-2xl p-6 text-center relative overflow-hidden`}
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10" />
            <h2 className="text-xl font-extrabold text-white mb-2 relative">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-sm mb-5 relative">
              Join thousands of students building real careers with{" "}
              {course.title}.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 relative">
              <a
                href="tel:+91XXXXXXXXXX"
                className="px-7 py-2.5 rounded-full bg-white text-slate-900 text-sm font-bold hover:bg-slate-100 transition no-underline"
              >
                📞 Call Us
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-2.5 rounded-full bg-green-500 text-white text-sm font-bold hover:bg-green-600 transition no-underline"
              >
                💬 WhatsApp
              </a>
            </div>
          </section>

          {/* Related: Back to courses */}
          <div className="text-center">
            <Link
              to="/courses"
              className={`inline-flex items-center gap-2 text-sm font-semibold ${t.accent} no-underline`}
            >
              ← Explore More Courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
