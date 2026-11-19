
import React from "react";
import coursesData from "../data/coursesData.json";

export default function Courses() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Main Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14">

        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-[38px] font-extrabold tracking-tight text-[#0f172a]">
            Industry-ready{" "}
            <span className="text-[#5ba4fc]">IT courses</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-[15px] mt-1.5">
            Master in-demand tech skills with real-world projects and land your
            dream job
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {coursesData.featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col justify-between"
            >
              <div>

                {/* Course Thumbnail */}
                <div className="h-44 rounded-xl relative overflow-hidden bg-slate-100">

                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                  {/* Course Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-[10px] font-bold tracking-wider uppercase ${course.accentColor}`}
                    >
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Tagline */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-extrabold text-sm leading-snug tracking-wide text-white">
                      {course.tagline}
                    </p>
                  </div>

                </div>

                {/* Course Details */}
                <div className="pt-4 px-1">

                  <h3 className="font-bold text-[15px] text-slate-900 uppercase leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2">
                    Duration :{" "}
                    <span className="text-slate-600 font-medium">
                      {course.duration}
                    </span>
                  </p>

                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-5 pb-1 px-1 flex items-center justify-between gap-3">

                <button className="px-4 py-1.5 rounded-md border border-[#5ba4fc] text-[#4a96f5] hover:bg-blue-50 text-xs font-medium transition-colors">
                  Learn More
                </button>

                <button className="px-4 py-1.5 rounded-md bg-[#5ba4fc] hover:bg-[#4793f0] text-white text-xs font-medium shadow-sm transition-colors">
                  Apply Now
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
