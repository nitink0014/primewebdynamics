
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import coursesData from "../../data/coursesData.json";
import AutoPopupForm from "./AutoPopupForm";

function CoursesSection() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white px-5 pb-12 pt-5 font-sans sm:px-8 lg:px-0">
        <div className="mx-auto w-full max-w-[1610px] lg:w-[90%]">

          {/* Section Heading */}
          <div>
            <h2 className="text-[36px] font-extrabold leading-[1.12] tracking-[-1.5px] text-[#151b2a] sm:text-[46px] lg:text-[58px]">
              {coursesData.title}{" "}
              <span className="text-[#5099fa]">
                {coursesData.highlight}
              </span>
            </h2>

            <p className="mt-2 text-[16px] font-medium text-[#647084] sm:text-[18px]">
              {coursesData.subtitle}
            </p>
          </div>

          {/* Course Cards */}
          <div className="mt-[48px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">

            {coursesData.courses.map((course) => (
              <div
                key={course.id}
                className="flex h-[350px] min-w-0 flex-col overflow-hidden rounded-[15px] border border-[#d6dfeb] bg-white shadow-[0_3px_9px_rgba(15,35,75,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(15,35,75,0.12)]"
              >

                {/* Course Image */}
                <div className="h-[205px] w-full shrink-0 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full rounded-t-[15px] object-cover"
                  />
                </div>

                {/* Course Details */}
                <div className="flex flex-1 flex-col px-[12px] pb-2 pt-[9px]">

                  {/* Course Title */}
                  <h3 className="text-[18px] font-bold leading-[1.3] text-[#18202f]">
                    {course.title}
                  </h3>

                  {/* Duration */}
                  <p className="mt-3 px-[6px] text-[13px] font-medium text-[#788295]">
                    Duration : {course.duration}
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-3 flex items-center justify-between gap-2">

                    <button
                      type="button"
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="flex h-[29px] items-center justify-center rounded-[8px] border border-[#5099fa] bg-white px-[12px] text-[12px] font-bold text-[#5099fa] transition-colors duration-200 hover:bg-[#5099fa] hover:text-white"
                    >
                      Read More
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsPopupOpen(true)}
                      className="flex h-[32px] items-center justify-center rounded-[8px] bg-[#5099fa] px-[12px] text-[12px] font-bold text-white transition-colors duration-200 hover:bg-[#3188eb]"
                    >
                      Apply Now
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Reusable Application Popup */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}

export default CoursesSection;
