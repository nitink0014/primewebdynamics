
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import coursesData from "../../data/coursesData.json";
import AutoPopupForm from "./AutoPopupForm";

function CoursesSection() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#f8faff] px-5 py-14 font-sans sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">

          {/* Section Heading */}
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#438fe5] sm:text-sm">
              Explore Our Programs
            </span>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#151b2a] sm:text-4xl lg:text-5xl">
              {coursesData.title}{" "}
              <span className="text-[#5099fa]">
                {coursesData.highlight}
              </span>
            </h2>

            <p className="mt-4 text-sm font-medium leading-7 text-[#647084] sm:text-base lg:text-lg">
              {coursesData.subtitle}
            </p>
          </div>

          {/* Course Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {coursesData.courses.map((course) => (
              <article
                key={course.id}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e1e8f2] bg-white shadow-[0_4px_18px_rgba(15,35,75,0.05)] transition-[border-color,box-shadow] duration-200 hover:border-[#b9d7fa] hover:shadow-[0_10px_28px_rgba(15,35,75,0.10)]"
              >
                {/* Course Image */}
                <div className="h-[190px] w-full shrink-0 overflow-hidden bg-[#edf3fb] sm:h-[200px]">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Course Details */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">

                  {/* Course Number */}
                  {course.courseNumber && (
                    <span className="mb-3 w-fit rounded-md bg-[#edf5ff] px-2.5 py-1 text-[11px] font-bold tracking-wide text-[#438fe5]">
                      COURSE {course.courseNumber}
                    </span>
                  )}

                  {/* Course Title */}
                  <h3 className="min-h-[48px] text-lg font-bold leading-snug text-[#18202f]">
                    {course.title}
                  </h3>

                  {/* Duration */}
                  <div className="mt-3 flex items-center gap-2 border-t border-[#edf0f5] pt-3">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4 shrink-0 text-[#5099fa]"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>

                    <p className="text-xs font-medium text-[#788295] sm:text-sm">
                      Duration: {course.duration}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex items-center gap-2 pt-5">
                    <button
                      type="button"
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="flex h-10 min-w-0 flex-1 items-center justify-center rounded-lg border border-[#5099fa] bg-white px-2 text-xs font-bold text-[#438fe5] transition-colors duration-200 hover:bg-[#edf5ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5099fa] focus-visible:ring-offset-2 sm:text-sm"
                    >
                      Read More
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsPopupOpen(true)}
                      className="flex h-10 min-w-0 flex-1 items-center justify-center rounded-lg bg-[#5099fa] px-2 text-xs font-bold text-white transition-colors duration-200 hover:bg-[#3188eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5099fa] focus-visible:ring-offset-2 sm:text-sm"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </article>
            ))}

          </div>

          {/* Course Includes */}
          {coursesData.courseIncludes?.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-[#e5eaf2] pt-7">
              {coursesData.courseIncludes.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full border border-[#e1e8f2] bg-white px-4 py-2 text-xs font-semibold text-[#53647d] sm:text-sm"
                >
                  <span className="mr-2 text-[#5099fa]">✓</span>
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Popup */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}

export default CoursesSection;
