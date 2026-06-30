import React from "react";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { RxArrowRight } from "react-icons/rx";

export default function InternShip() {
  const internships = [
    {
      title: "Data Analytics Trainer",
      image: "IDA.AVIF",
      duration: "45 Days",
      desc: "Learn Excel, SQL, Power BI and Dashboard Development with real-world projects.",
    },
    {
      title: "Graphic Designing",
      image: "IGD.AVIF",
      duration: "45 Days",
      desc: "Master Photoshop, Illustrator, Canva, Branding and Social Media Design.",
    },
    {
      title: "Tally with GST",
      image: "ITWGST.AVIF",
      duration: "45 Days",
      desc: "Accounting, GST, Inventory, Payroll and Financial Management.",
    },
    {
      title: "Microsoft Office",
      image: "IMO.AVIF",
      duration: "45 Days",
      desc: "Become proficient in MS Word, Excel, PowerPoint & Outlook.",
    },
    {
      title: "Web Development",
      image: "IWD.AVIF",
      duration: "45 Days",
      desc: "HTML, CSS, JavaScript, React.js and Responsive Website Development.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            IIOFT Internship Programs
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-7">
            <span className="font-bold text-blue-600">
              INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY (IIOFT)
            </span>
            <br />
            Industry-oriented internship programs designed to build practical
            skills and prepare students for successful careers.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {internships.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Duration Badge */}

                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                  {item.duration}
                </span>

                {/* Limited Seats */}

                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full animate-pulse font-semibold shadow">
                  Limited Seats
                </span>
              </div>

              {/* Content */}

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-6 flex-1">
                  {item.desc}
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 text-red-500 font-semibold">
                    <FaCalendarAlt />
                    Apply Before :<span className="text-blue-600">30 July</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}

        <div className="mt-20 bg-white rounded-3xl shadow-xl p-10">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-blue-600">
            Why Choose IIOFT?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="text-center">
              {/* <div className="text-4xl mb-3">💼</div> */}
              <h4 className="font-bold text-lg">Live Projects</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Gain real industry experience by working on practical projects.
              </p>
            </div>

            <div className="text-center">
              {/* <div className="text-4xl mb-3">👨‍🏫</div> */}
              <h4 className="font-bold text-lg">Expert Trainers</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Learn from highly experienced industry professionals.
              </p>
            </div>

            <div className="text-center">
              {/* <div className="text-4xl mb-3">🏆</div> */}
              <h4 className="font-bold text-lg">Internship Certificate</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Receive an industry-recognized certificate after completion.
              </p>
            </div>

            <div className="text-center">
              {/* <div className="text-4xl mb-3">🚀</div> */}
              <h4 className="font-bold text-lg">Placement Support</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Resume building, interview preparation and placement assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
