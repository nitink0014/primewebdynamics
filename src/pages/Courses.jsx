
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  GraduationCap,
} from "lucide-react";

import coursesData from "../data/coursesData.json";
import AutoPopupForm from "../components/home/AutoPopupForm";

function Courses() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <main className="w-full overflow-hidden bg-[#f7f9fc] font-sans">

        {/* Page Heading */}
        <section className="relative px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#dceaff] opacity-70 blur-[100px]" />

          <div className="relative mx-auto max-w-[1250px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5e5fb] bg-white px-4 py-2 text-[12px] font-extrabold tracking-[1.2px] text-[#2878ce]">
              <GraduationCap size={16} />
              EXPLORE OUR PROGRAMS
            </div>

            <h1 className="mt-5 max-w-[850px] text-[34px] font-extrabold leading-[1.12] tracking-[-1.5px] text-[#14243d] sm:text-[46px] lg:text-[58px]">
              {coursesData.title}{" "}
              <span className="text-[#2878ce]">
                {coursesData.highlight}
              </span>
            </h1>

            <p className="mt-4 max-w-[720px] text-[14px] leading-7 text-[#68778c] sm:text-[17px]">
              {coursesData.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-[13px] font-semibold text-[#53647b]">
              <div className="flex items-center gap-2">
                <BookOpen size={17} className="text-[#2878ce]" />
                8 Training Courses
              </div>

              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-[#2878ce]" />
                Practical Learning
              </div>
            </div>
          </div>
        </section>

        {/* Courses Listing */}
        <section className="px-5 pb-16 sm:px-8 lg:pb-20">
          <div className="mx-auto max-w-[1250px]">

            <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-[#e4eaf2] pb-5">
              <div>
                <p className="text-[12px] font-extrabold tracking-[1.5px] text-[#2878ce]">
                  FIND YOUR PATH
                </p>

                <h2 className="mt-2 text-[23px] font-extrabold tracking-[-0.5px] text-[#172943] sm:text-[28px]">
                  Explore All Courses
                </h2>
              </div>

              <p className="text-[13px] font-medium text-[#778397]">
                {coursesData.courses.length} Courses Available
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {coursesData.courses.map((course, index) => (
                <article
                  key={course.id}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e1e7ef] bg-white shadow-[0_4px_18px_rgba(20,36,61,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[#b8d5f5] hover:shadow-[0_12px_30px_rgba(20,36,61,0.09)]"
                >
                  {/* Image */}
                  <div className="relative h-[195px] overflow-hidden bg-[#eaf1fa]">
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute left-4 top-4 rounded-lg border border-white/30 bg-[#14243d]/85 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-sm">
                      COURSE {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Course Details */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="min-h-[48px] text-[17px] font-extrabold leading-6 text-[#172943]">
                      {course.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-[#778397]">
                      <Clock3 size={15} className="text-[#2878ce]" />
                      <span>Duration:</span>
                      <span className="text-[#34445c]">
                        {course.duration}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => navigate(`/courses/${course.id}`)}
                        className="flex min-h-[42px] flex-1 items-center justify-center gap-1 rounded-lg border border-[#2878ce] px-2 text-[12px] font-bold text-[#2878ce] transition-[background-color,color] duration-200 hover:bg-[#2878ce] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2"
                      >
                        Read More
                        <ArrowRight size={14} />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsPopupOpen(true)}
                        className="flex min-h-[42px] flex-1 items-center justify-center rounded-lg bg-[#2878ce] px-2 text-[12px] font-bold text-white transition-colors duration-200 hover:bg-[#1768b8] focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  <div className="h-[3px] w-0 bg-[#2878ce] transition-[width] duration-300 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Enquiry Popup */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}

export default Courses;
