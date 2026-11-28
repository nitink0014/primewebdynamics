
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock3, ArrowUpRight } from "lucide-react";

import coursesData from "../../data/coursesData.json";
import AutoPopupForm from "./AutoPopupForm";

function CoursesSection() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 3;
    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-5px)
    `;
  };

  const handleCardLeave = (event) => {
    const card = event.currentTarget;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#f8faff] px-5 py-14 font-sans sm:px-8 sm:py-16 lg:px-12">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/45 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-100/35 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl">

          {/* Section Heading */}
          <div className="max-w-3xl">

            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#438fe5] shadow-[0_3px_12px_rgba(67,143,229,0.04)] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#5099fa]" />
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

          {/* Premium Course Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {coursesData.courses.map((course) => (
              <article
                key={course.id}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                className="
                  course-premium-card
                  group
                  relative
                  flex
                  min-w-0
                  flex-col
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#e1e8f2]
                  bg-white
                  shadow-[0_5px_22px_rgba(15,35,75,0.045)]
                  transition-[transform,border-color,box-shadow]
                  duration-300
                  ease-out
                  hover:border-[#cbdcf2]
                  hover:shadow-[0_14px_35px_rgba(15,35,75,0.09)]
                "
              >

                {/* Cursor Following Glow */}
                <div
                  className="
                    course-cursor-glow
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    rounded-[22px]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Course Image */}
                <div className="relative h-[190px] w-full shrink-0 overflow-hidden bg-[#edf3fb] sm:h-[200px]">

                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10213d]/10 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                </div>

                {/* Course Details */}
                <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">

                  {/* Course Title */}
                  <h3 className="min-h-[48px] text-lg font-bold leading-snug text-[#18202f] transition-colors duration-300 group-hover:text-[#3478df]">
                    {course.title}
                  </h3>

                  {/* Duration */}
                  <div className="mt-3 flex items-center gap-2 border-t border-[#edf0f5] pt-3">

                    <Clock3
                      size={16}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#5099fa]"
                    />

                    <p className="text-xs font-medium text-[#788295] sm:text-sm">
                      Duration: {course.duration}
                    </p>

                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex items-center gap-2 pt-5">

                    <button
                      type="button"
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="
                        flex
                        h-10
                        min-w-0
                        flex-1
                        items-center
                        justify-center
                        gap-1.5
                        rounded-lg
                        border
                        border-[#5099fa]
                        bg-white
                        px-2
                        text-xs
                        font-bold
                        text-[#438fe5]
                        transition-all
                        duration-300
                        hover:border-[#3478df]
                        hover:bg-[#edf5ff]
                        sm:text-sm
                      "
                    >
                      Read More

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsPopupOpen(true)}
                      className="
                        flex
                        h-10
                        min-w-0
                        flex-1
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#5099fa]
                        px-2
                        text-xs
                        font-bold
                        text-white
                        shadow-[0_4px_12px_rgba(80,153,250,0.12)]
                        transition-all
                        duration-300
                        hover:bg-[#3188eb]
                        hover:shadow-[0_6px_16px_rgba(80,153,250,0.20)]
                        sm:text-sm
                      "
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
                  className="
                    rounded-full
                    border
                    border-[#e1e8f2]
                    bg-white
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-[#53647d]
                    shadow-[0_2px_8px_rgba(15,35,75,0.02)]
                    transition-colors
                    duration-300
                    hover:border-[#cbdcf2]
                    hover:bg-[#f5f9ff]
                    sm:text-sm
                  "
                >
                  <span className="mr-2 text-[#5099fa]">✓</span>
                  {item}
                </span>
              ))}

            </div>
          )}

        </div>

        {/* Cursor Glow Styles */}
        <style>{`
          .course-premium-card {
            transform-style: preserve-3d;
            will-change: transform;
          }

          .course-cursor-glow {
            background: radial-gradient(
              230px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(80, 153, 250, 0.08),
              rgba(80, 153, 250, 0.025) 35%,
              transparent 70%
            );
          }

          @media (prefers-reduced-motion: reduce) {
            .course-premium-card,
            .course-premium-card img {
              transition: none !important;
            }
          }
        `}</style>

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
