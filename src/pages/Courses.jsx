
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import coursesData from "../data/coursesData.json";
import AutoPopupForm from "../components/home/AutoPopupForm";

function Courses() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -3;
    const rotateY = ((x / rect.width) - 0.5) * 3;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleCardLeave = (event) => {
    const card = event.currentTarget;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <>
      <main className="relative w-full overflow-hidden bg-[#f7f9fc] font-sans">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-32 h-[420px] w-[420px] rounded-full bg-[#dceaff]/60 blur-[120px]" />
          <div className="absolute -left-40 top-[500px] h-[350px] w-[350px] rounded-full bg-[#e6f0ff]/50 blur-[110px]" />
        </div>

        {/* Page Heading */}
        <section className="relative px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
          <div className="mx-auto max-w-[1250px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dce7f5] bg-white/80 px-4 py-2 shadow-[0_3px_12px_rgba(20,36,61,0.04)] backdrop-blur-sm">
              <GraduationCap size={16} className="text-[#2878ce]" />

              <span className="text-[11px] font-extrabold tracking-[1.4px] text-[#2878ce]">
                EXPLORE OUR PROGRAMS
              </span>
            </div>

            <h1 className="mt-6 max-w-[900px] text-[34px] font-extrabold leading-[1.12] tracking-[-1.5px] text-[#14243d] sm:text-[48px] lg:text-[62px]">
              {coursesData.title}{" "}
              <span className="relative inline-block text-[#2878ce]">
                {coursesData.highlight}
              </span>
            </h1>

            <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-[#68778c] sm:text-[17px] sm:leading-8">
              {coursesData.subtitle}
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-[#e3eaf3] bg-white/80 px-4 py-3 shadow-[0_3px_12px_rgba(20,36,61,0.03)]">
                <BookOpen size={17} className="text-[#2878ce]" />

                <span className="text-[12px] font-bold text-[#53647b]">
                  {coursesData.courses.length} Training Courses
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-[#e3eaf3] bg-white/80 px-4 py-3 shadow-[0_3px_12px_rgba(20,36,61,0.03)]">
                <GraduationCap size={18} className="text-[#2878ce]" />

                <span className="text-[12px] font-bold text-[#53647b]">
                  Practical Learning
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Listing */}
        <section className="relative px-5 pb-20 sm:px-8 lg:pb-24">
          <div className="mx-auto max-w-[1250px]">
            {/* Section Header */}
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#e3eaf2] pb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#2878ce]" />

                  <p className="text-[11px] font-extrabold tracking-[1.6px] text-[#2878ce]">
                    FIND YOUR PATH
                  </p>
                </div>

                <h2 className="mt-3 text-[25px] font-extrabold tracking-[-0.7px] text-[#172943] sm:text-[32px]">
                  Explore All Courses
                </h2>

                <p className="mt-2 text-[13px] text-[#7b899c]">
                  Choose a program and start building your future.
                </p>
              </div>

              <div className="rounded-xl border border-[#e1e8f1] bg-white px-4 py-2.5">
                <p className="text-[12px] font-bold text-[#53647b]">
                  <span className="text-[#2878ce]">
                    {coursesData.courses.length}
                  </span>{" "}
                  Courses Available
                </p>
              </div>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {coursesData.courses.map((course, index) => (
                <article
                  key={course.id}
                  onMouseMove={handleCardMove}
                  onMouseLeave={handleCardLeave}
                  className="course-premium-card group relative flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_5px_22px_rgba(20,36,61,0.045)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-[#c6d9ef] hover:shadow-[0_16px_38px_rgba(20,36,61,0.09)]"
                  style={{
                    transform:
                      "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
                  }}
                >
                  {/* Mouse Glow */}
                  <div
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(40,120,206,0.055), transparent 65%)",
                    }}
                  />

                  {/* Course Image */}
                  <div className="relative h-[205px] overflow-hidden bg-[#eaf1fa]">
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />

                    {/* Image Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14243d]/35 via-transparent to-[#14243d]/5" />

                    {/* Course Number */}
                    <span className="absolute left-4 top-4 rounded-lg border border-white/30 bg-[#14243d]/75 px-3 py-1.5 text-[10px] font-extrabold tracking-[1px] text-white backdrop-blur-md">
                      COURSE {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Course Details */}
                  <div className="relative z-10 flex flex-1 flex-col p-5">
                    <h3 className="min-h-[48px] text-[16px] font-extrabold leading-6 text-[#172943] transition-colors duration-200 group-hover:text-[#2878ce]">
                      {course.title}
                    </h3>

                    {/* Duration */}
                    <div className="mt-4 flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#edf5ff]">
                        <Clock3 size={15} className="text-[#2878ce]" />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#8996a8]">
                          Course Duration
                        </p>

                        <p className="mt-0.5 text-[12px] font-bold text-[#34445c]">
                          {course.duration}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => navigate(`/courses/${course.id}`)}
                        className="flex min-h-[42px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#d8e5f4] bg-white px-2 text-[11px] font-extrabold text-[#2878ce] transition-all duration-200 hover:border-[#2878ce] hover:bg-[#f1f7ff] focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2"
                      >
                        Read More
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsPopupOpen(true)}
                        className="flex min-h-[42px] flex-1 items-center justify-center rounded-xl bg-[#2878ce] px-2 text-[11px] font-extrabold text-white shadow-[0_4px_12px_rgba(40,120,206,0.16)] transition-all duration-200 hover:bg-[#1768b8] hover:shadow-[0_6px_16px_rgba(40,120,206,0.22)] focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
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
