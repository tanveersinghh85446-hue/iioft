import React from "react";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { CiClock2, CiMail } from "react-icons/ci";

export default function JobVacancy() {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 to-white py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
            <LuBriefcaseBusiness className="text-5xl text-blue-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
            Careers at IIOFT
          </h1>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
            Join the International Institute of Futuristic Technology and become
            a part of a passionate team shaping the future of education. We
            welcome dedicated professionals, trainers, and innovators who are
            committed to empowering students with industry-ready skills.
          </p>
        </div>

        {/* Hiring */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center mb-12">
          <div className="flex justify-center items-center gap-2 text-blue-700 text-xl font-semibold">
            <CiClock2 className="text-3xl" />
            We're Hiring Soon
          </div>

          <p className="mt-3 text-gray-600">
            New opportunities will be announced shortly. Keep checking this page
            or send us your resume in advance.
          </p>
        </div>

        {/* Open Positions */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Upcoming Opportunities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-3">Technical Trainer</h3>

            <p className="text-gray-600">
              Teach Web Development, Python, Data Science, AI, Cloud Computing,
              Cyber Security and other emerging technologies.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-3">Academic Counselor</h3>

            <p className="text-gray-600">
              Guide students in selecting the right career path and assist them
              throughout the admission process.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-3">Placement Executive</h3>

            <p className="text-gray-600">
              Build corporate partnerships and help students secure internships
              and placements.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-3">
              Digital Marketing Executive
            </h3>

            <p className="text-gray-600">
              Manage SEO, social media, paid campaigns, and digital branding for
              the institute.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-3">
              Graphic Designer & Video Editor
            </h3>

            <p className="text-gray-600">
              Design creative content for marketing campaigns, social media, and
              student engagement.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-3">
              Student Support Executive
            </h3>

            <p className="text-gray-600">
              Ensure an excellent learning experience by assisting students with
              academic and administrative support.
            </p>
          </div>
        </div>

        {/* Resume */}
        <div className="text-center mt-16">
          <a
            href="mailto:careers@iioft.com"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
          >
            <CiMail className="text-2xl" />
            Send Your Resume
          </a>

          <p className="mt-5 text-gray-500">
            Email your latest resume along with your preferred job role. Our HR
            team will contact you when suitable opportunities become available.
          </p>
        </div>
      </div>
    </section>
  );
}
