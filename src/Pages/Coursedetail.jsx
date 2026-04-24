// import React, { useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import coursesData from "../data/courses.json";

// // ─── THEME ────────────────────────────────────────────────────────────────────
// const theme = {
//   master: {
//     accent: "#2563eb",
//     accentLight: "#eff6ff",
//     accentBorder: "#bfdbfe",
//     gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #2563eb 100%)",
//     tagBg: "#dbeafe",
//     tagColor: "#1d4ed8",
//     pillBg: "#eff6ff",
//     pillBorder: "#bfdbfe",
//     pillColor: "#1d4ed8",
//     topicDot: "#93c5fd",
//   },
//   advance: {
//     accent: "#4f46e5",
//     accentLight: "#eef2ff",
//     accentBorder: "#c7d2fe",
//     gradient: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 60%, #4f46e5 100%)",
//     tagBg: "#e0e7ff",
//     tagColor: "#3730a3",
//     pillBg: "#eef2ff",
//     pillBorder: "#c7d2fe",
//     pillColor: "#3730a3",
//     topicDot: "#a5b4fc",
//   },
// };

// function NotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-6 text-center px-4">
//       <div className="text-6xl">🔍</div>
//       <h1 className="text-2xl font-black text-slate-800">Course Not Found</h1>
//       <p className="text-slate-500 text-sm max-w-sm">
//         The course you're looking for doesn't exist or may have been moved.
//       </p>
//       <Link
//         to="/courses"
//         className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition no-underline"
//       >
//         ← Back to All Courses
//       </Link>
//     </div>
//   );
// }

// // ─── SYLLABUS ACCORDION ITEM ──────────────────────────────────────────────────
// function SyllabusItem({ mod, t, index }) {
//   const [open, setOpen] = useState(index === 0);

//   return (
//     <div
//       style={{
//         border: `1px solid ${open ? t.accentBorder : "#e2e8f0"}`,
//         borderRadius: "14px",
//         overflow: "hidden",
//         transition: "border-color 0.2s",
//         background: open ? t.accentLight : "#fff",
//       }}
//     >
//       <button
//         onClick={() => setOpen(!open)}
//         style={{
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "16px 20px",
//           background: "transparent",
//           border: "none",
//           cursor: "pointer",
//           textAlign: "left",
//           gap: "12px",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//           <span
//             style={{
//               fontSize: "11px",
//               fontWeight: 800,
//               color: t.tagColor,
//               background: t.tagBg,
//               padding: "3px 8px",
//               borderRadius: "6px",
//               letterSpacing: "0.04em",
//               whiteSpace: "nowrap",
//             }}
//           >
//             {String(mod.module).padStart(2, "0")}
//           </span>
//           <span
//             style={{
//               fontSize: "14px",
//               fontWeight: 700,
//               color: "#1e293b",
//               lineHeight: "1.3",
//             }}
//           >
//             {mod.title}
//           </span>
//         </div>
//         <span
//           style={{
//             fontSize: "18px",
//             color: t.accent,
//             flexShrink: 0,
//             transform: open ? "rotate(180deg)" : "rotate(0deg)",
//             transition: "transform 0.2s",
//             lineHeight: 1,
//           }}
//         >
//           ⌄
//         </span>
//       </button>

//       {open && mod.topics?.length > 0 && (
//         <div style={{ padding: "0 20px 16px 20px" }}>
//           <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//             {mod.topics.map((topic, j) => (
//               <div
//                 key={j}
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   gap: "10px",
//                   padding: "10px 14px",
//                   background: "#fff",
//                   borderRadius: "10px",
//                   border: "1px solid #f1f5f9",
//                 }}
//               >
//                 <span
//                   style={{
//                     width: "6px",
//                     height: "6px",
//                     borderRadius: "50%",
//                     background: t.topicDot,
//                     flexShrink: 0,
//                     marginTop: "5px",
//                   }}
//                 />
//                 <span style={{ fontSize: "13px", color: "#475569", fontWeight: 500 }}>
//                   {topic}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── MAIN ─────────────────────────────────────────────────────────────────────
// export default function CourseDetail() {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const course = coursesData.find((c) => c.slug === slug);
//   if (!course) return <NotFound />;

//   const t = theme[course.category] || theme.master;
//   const imgSrc = `/${course.image.split("/").pop()}`;

//   return (
//     <>
//       <Helmet>
//         <title>{course.metaTitle}</title>
//         <meta name="description" content={course.metaDescription} />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content={course.metaTitle} />
//         <meta property="og:description" content={course.metaDescription} />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content={imgSrc} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={course.metaTitle} />
//         <meta name="twitter:description" content={course.metaDescription} />
//         <meta name="twitter:image" content={imgSrc} />
//         <link rel="canonical" href={`${window.location.origin}/course/${course.slug}`} />
//       </Helmet>

//       <div style={{ minHeight: "100vh", background: "#f8fafc" }}>

//         {/* ── BACK NAV ── */}
//         <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 20px 0" }}>
//           <Link
//             to="/courses"
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "6px",
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//               fontSize: "13px",
//               fontWeight: 700,
//               color: t.accent,
//               padding: 0,
//             }}
//           >
//             <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//             </svg>
//             Back to Courses
//           </Link>
//         </div>

//         {/* ── HERO CARD ── */}
//         <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 20px 0" }}>
//           <div
//             style={{
//               borderRadius: "24px",
//               overflow: "hidden",
//               background: t.gradient,
//               position: "relative",
//             }}
//           >
//             {/* Top section: image + title side by side on desktop */}
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1.1fr",
//                 minHeight: "280px",
//               }}
//               className="hero-grid"
//             >
//               {/* LEFT — Course Image */}
//               <div
//                 style={{
//                   position: "relative",
//                   overflow: "hidden",
//                   minHeight: "220px",
//                 }}
//               >
//                 <img
//                   src={imgSrc}
//                   alt={course.title}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     display: "block",
//                   }}
//                   onError={(e) => {
//                     e.target.style.display = "none";
//                     e.target.parentElement.style.background = "rgba(255,255,255,0.05)";
//                     // Show fallback letter
//                     const fb = document.createElement("div");
//                     fb.style.cssText =
//                       "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:96px;font-weight:900;color:rgba(255,255,255,0.15);";
//                     fb.textContent = course.title.charAt(0);
//                     e.target.parentElement.appendChild(fb);
//                   }}
//                 />
//                 {/* Gradient overlay right side */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     background:
//                       "linear-gradient(to right, transparent 50%, rgba(0,0,0,0.4) 100%)",
//                   }}
//                 />
//               </div>

//               {/* RIGHT — Course Info */}
//               <div
//                 style={{
//                   padding: "32px 32px 32px 28px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   gap: "16px",
//                 }}
//               >
//                 {/* Badges */}
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
//                   <span
//                     style={{
//                       fontSize: "11px",
//                       fontWeight: 700,
//                       background: "rgba(255,255,255,0.15)",
//                       border: "1px solid rgba(255,255,255,0.25)",
//                       color: "rgba(255,255,255,0.85)",
//                       borderRadius: "20px",
//                       padding: "4px 12px",
//                       letterSpacing: "0.04em",
//                     }}
//                   >
//                     {course.category === "master" ? "Master Diploma" : "Advance Professional"}
//                   </span>
//                   <span
//                     style={{
//                       fontSize: "11px",
//                       fontWeight: 700,
//                       background: "rgba(255,255,255,0.15)",
//                       border: "1px solid rgba(255,255,255,0.25)",
//                       color: "rgba(255,255,255,0.85)",
//                       borderRadius: "20px",
//                       padding: "4px 12px",
//                     }}
//                   >
//                     ⏱ {course.duration}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h1
//                   style={{
//                     fontSize: "clamp(20px, 3vw, 28px)",
//                     fontWeight: 900,
//                     color: "#fff",
//                     lineHeight: 1.2,
//                     margin: 0,
//                     letterSpacing: "-0.02em",
//                   }}
//                 >
//                   {course.title}
//                 </h1>

//                 {/* Short desc */}
//                 <p
//                   style={{
//                     fontSize: "13px",
//                     color: "rgba(255,255,255,0.65)",
//                     lineHeight: 1.6,
//                     margin: 0,
//                   }}
//                 >
//                   {course.shortDescription}
//                 </p>

//                 {/* CTAs */}
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "4px" }}>
//                   <Link
//                     to="/apply"
//                     style={{
//                       padding: "10px 24px",
//                       borderRadius: "50px",
//                       background: "#fff",
//                       color: "#0f172a",
//                       fontSize: "13px",
//                       fontWeight: 800,
//                       textDecoration: "none",
//                       letterSpacing: "0.02em",
//                     }}
//                   >
//                     Enroll Now →
//                   </Link>
//                   <a
//                     href="#syllabus"
//                     style={{
//                       padding: "10px 24px",
//                       borderRadius: "50px",
//                       background: "rgba(255,255,255,0.12)",
//                       border: "1px solid rgba(255,255,255,0.3)",
//                       color: "#fff",
//                       fontSize: "13px",
//                       fontWeight: 700,
//                       textDecoration: "none",
//                     }}
//                   >
//                     View Syllabus
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── STATS ROW ── */}
//         <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 20px 0" }}>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gap: "12px",
//             }}
//           >
//             {[
//               { label: "Duration", value: course.duration, icon: "⏱" },
//               { label: "Modules", value: `${course.syllabus?.length || 0} Modules`, icon: "📚" },
//               { label: "Projects", value: course.features?.some(f => f.toLowerCase().includes("project")) ? "Included" : "Hands-On", icon: "🛠" },
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 style={{
//                   background: "#fff",
//                   borderRadius: "16px",
//                   border: "1px solid #e2e8f0",
//                   padding: "16px",
//                   textAlign: "center",
//                 }}
//               >
//                 <div style={{ fontSize: "22px", marginBottom: "6px" }}>{stat.icon}</div>
//                 <div style={{ fontSize: "13px", fontWeight: 800, color: "#1e293b" }}>{stat.value}</div>
//                 <div style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 600, marginTop: "2px" }}>{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── MAIN CONTENT ── */}
//         <div
//           style={{
//             maxWidth: 900,
//             margin: "0 auto",
//             padding: "20px 20px 60px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//           }}
//         >

//           {/* About */}
//           <section
//             style={{
//               background: "#fff",
//               borderRadius: "20px",
//               border: "1px solid #e2e8f0",
//               padding: "28px",
//             }}
//           >
//             <h2
//               style={{
//                 fontSize: "11px",
//                 fontWeight: 800,
//                 color: t.accent,
//                 letterSpacing: "0.1em",
//                 textTransform: "uppercase",
//                 marginBottom: "14px",
//               }}
//             >
//               📖 About This Course
//             </h2>
//             <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.75, margin: 0 }}>
//               {course.fullDescription}
//             </p>
//           </section>

//           {/* What You'll Learn */}
//           {course.features?.length > 0 && (
//             <section
//               style={{
//                 background: "#fff",
//                 borderRadius: "20px",
//                 border: "1px solid #e2e8f0",
//                 padding: "28px",
//               }}
//             >
//               <h2
//                 style={{
//                   fontSize: "11px",
//                   fontWeight: 800,
//                   color: t.accent,
//                   letterSpacing: "0.1em",
//                   textTransform: "uppercase",
//                   marginBottom: "16px",
//                 }}
//               >
//                 ✅ What You Will Learn
//               </h2>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//                   gap: "10px",
//                 }}
//               >
//                 {course.features.map((f, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       display: "flex",
//                       alignItems: "flex-start",
//                       gap: "10px",
//                       padding: "12px 14px",
//                       background: t.accentLight,
//                       borderRadius: "12px",
//                       border: `1px solid ${t.accentBorder}`,
//                     }}
//                   >
//                     <span
//                       style={{
//                         width: "20px",
//                         height: "20px",
//                         borderRadius: "50%",
//                         background: t.accent,
//                         color: "#fff",
//                         fontSize: "11px",
//                         fontWeight: 900,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         flexShrink: 0,
//                         marginTop: "1px",
//                       }}
//                     >
//                       ✓
//                     </span>
//                     <span style={{ fontSize: "13px", color: "#1e293b", fontWeight: 600, lineHeight: 1.4 }}>
//                       {f}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Syllabus */}
//           {course.syllabus?.length > 0 && (
//             <section
//               id="syllabus"
//               style={{
//                 background: "#fff",
//                 borderRadius: "20px",
//                 border: "1px solid #e2e8f0",
//                 padding: "28px",
//               }}
//             >
//               <h2
//                 style={{
//                   fontSize: "11px",
//                   fontWeight: 800,
//                   color: t.accent,
//                   letterSpacing: "0.1em",
//                   textTransform: "uppercase",
//                   marginBottom: "18px",
//                 }}
//               >
//                 📚 Course Syllabus
//               </h2>
//               <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//                 {course.syllabus.map((mod, i) => (
//                   <SyllabusItem key={i} mod={mod} t={t} index={i} />
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Enroll CTA */}
//           <section
//             style={{
//               background: t.gradient,
//               borderRadius: "20px",
//               padding: "36px 28px",
//               textAlign: "center",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 top: "-40px",
//                 right: "-40px",
//                 width: "120px",
//                 height: "120px",
//                 borderRadius: "50%",
//                 background: "rgba(255,255,255,0.07)",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: "-30px",
//                 left: "-20px",
//                 width: "80px",
//                 height: "80px",
//                 borderRadius: "50%",
//                 background: "rgba(255,255,255,0.05)",
//               }}
//             />
//             <h2
//               style={{
//                 fontSize: "22px",
//                 fontWeight: 900,
//                 color: "#fff",
//                 marginBottom: "8px",
//                 position: "relative",
//               }}
//             >
//               Ready to Get Started?
//             </h2>
//             <p
//               style={{
//                 fontSize: "13px",
//                 color: "rgba(255,255,255,0.65)",
//                 marginBottom: "24px",
//                 position: "relative",
//               }}
//             >
//               Join students building real careers with {course.title}.
//             </p>
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "12px",
//                 justifyContent: "center",
//                 position: "relative",
//               }}
//             >
//               <a
//                 href="tel:+91XXXXXXXXXX"
//                 style={{
//                   padding: "12px 28px",
//                   borderRadius: "50px",
//                   background: "#fff",
//                   color: "#0f172a",
//                   fontSize: "14px",
//                   fontWeight: 800,
//                   textDecoration: "none",
//                 }}
//               >
//                 📞 Call Us
//               </a>
//               <a
//                 href="https://wa.me/91XXXXXXXXXX"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   padding: "12px 28px",
//                   borderRadius: "50px",
//                   background: "#22c55e",
//                   color: "#fff",
//                   fontSize: "14px",
//                   fontWeight: 800,
//                   textDecoration: "none",
//                 }}
//               >
//                 💬 WhatsApp
//               </a>
//             </div>
//           </section>

//           {/* Back link */}
//           <div style={{ textAlign: "center" }}>
//             <Link
//               to="/courses"
//               style={{
//                 fontSize: "13px",
//                 fontWeight: 700,
//                 color: t.accent,
//                 textDecoration: "none",
//               }}
//             >
//               ← Explore More Courses
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Responsive grid fix */}
//       <style>{`
//         @media (max-width: 640px) {
//           .hero-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }





import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { TbMoodEmpty } from "react-icons/tb";

import coursesData from "../data/courses.json";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      <div className="text-5xl"><TbMoodEmpty/></div>
      <h1 className="text-2xl font-bold text-gray-800">Course Not Found</h1>
      <p className="text-gray-500 text-sm max-w-xs">
        The course you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/courses"
        className="mt-2 text-blue-600 border-black font-semibold text-sm hover:underline"
      >
         Back to Courses
      </Link>
    </div>
  );
}

function SyllabusItem({ mod }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="px-4 py-3 bg-gray-50">
        <span className="font-bold text-gray-800 text-sm">
          {String(mod.module).padStart(2, "0")}. {mod.title}
        </span>
      </div>
      {mod.topics?.length > 0 && (
        <ul className="list-disc pl-8 py-3 pr-4 space-y-1 bg-white">
          {mod.topics.map((topic, j) => (
            <li key={j} className="text-gray-700 text-sm">
              {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CourseDetail() {
  const { slug } = useParams();
  const course = coursesData.find((c) => c.slug === slug);
  if (!course) return <NotFound />;

  const imgSrc = `/${course.image.split("/").pop()}`;

  return (
    <>
      <Helmet>
        <title>{course.metaTitle}</title>
        <meta name="description" content={course.metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={course.metaTitle} />
        <meta property="og:description" content={course.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imgSrc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={course.metaTitle} />
        <meta name="twitter:description" content={course.metaDescription} />
        <meta name="twitter:image" content={imgSrc} />
        <link rel="canonical" href={`${window.location.origin}/course/${course.slug}`} />
      </Helmet>

      <div className="max-w-3xl mx-auto px-5 py-10 bg-white text-gray-900 font-sans text-[15px] leading-relaxed">

        {/* Back Link */}
        <Link
          to="/courses"
          className="text-blue-600 text-sm font-semibold hover:underline mb-6 inline-block"
        >
          ← Back to All Courses
        </Link>

        {/* Header */}
        <p className="text-sm text-gray-500 mb-1 tracking-wide">
          IIOFT — {course.category === "master" ? "Master Diploma" : "Advance Professional"}
        </p>
        <h1 className="text-2xl font-bold underline mb-1">{course.title}</h1>
        <p className="italic text-gray-600 mb-4">{course.shortDescription}</p>

        {/* Image */}
        <img
          src={imgSrc}
          alt={course.title}
          className="w-full rounded-lg mb-5 object-cover"
          onError={(e) => (e.target.style.display = "none")}
        />

        {/* Duration & Price */}
        <div className="flex gap-6 mb-6">
          <p className="text-gray-700">
            <span className="font-bold">Duration:</span> {course.duration}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Price:</span> {course.price}
          </p>
        </div>

        {/* Full Description */}
        <p className="text-gray-800 mb-6">{course.fullDescription}</p>

        <hr className="border-gray-200 my-7" />

        {/* Course Features */}
        {course.features?.length > 0 && (
          <>
            <h2 className="text-lg font-bold underline mb-3">Course Features</h2>
            <ul className="list-disc pl-6 mb-2 text-gray-800 space-y-1">
              {course.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <hr className="border-gray-200 my-7" />
          </>
        )}

        {/* Syllabus */}
        {course.syllabus?.length > 0 && (
          <>
            <h2 className="text-lg font-bold underline mb-4" id="syllabus">
              What You Will Learn
            </h2>
            <div className="flex flex-col gap-3 mb-2">
              {course.syllabus.map((mod, i) => (
                <SyllabusItem key={i} mod={mod} />
              ))}
            </div>
            <hr className="border-gray-200 my-7" />
          </>
        )}

        {/* Enroll CTA */}
        <h2 className="text-lg font-bold underline mb-3">Ready to Enroll?</h2>
        <p className="text-gray-800 mb-4">
          Take the next step in your career. Contact us to get started with{" "}
          <strong>{course.title}</strong>.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/apply"
            className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-full text-sm hover:bg-blue-700 transition"
          >
            Apply Now →
          </Link>
         
        </div>

      </div>
    </>
  );
}