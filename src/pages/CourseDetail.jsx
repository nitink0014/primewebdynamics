
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock3,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import coursesData from "../data/coursesData.json";
import AutoPopupForm from "../components/home/AutoPopupForm";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Find selected course using URL ID
  const course = coursesData.courses.find(
    (item) => String(item.id) === String(id)
  );

  // Course Not Found
  if (!course) {
    return (
      <section className="flex min-h-[65vh] flex-col items-center justify-center px-5 text-center">
        <div className="rounded-2xl bg-[#edf5ff] p-5 text-[#5099fa]">
          <BookOpen size={40} />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-[#151b2a]">
          Course Not Found
        </h1>

        <p className="mt-3 text-[#647084]">
          Sorry, the course you are looking for does not exist.
        </p>

        <button
          type="button"
          onClick={() => navigate("/courses")}
          className="mt-6 rounded-xl bg-[#5099fa] px-7 py-3 font-semibold text-white transition hover:bg-[#3188eb]"
        >
          Back to Courses
        </button>
      </section>
    );
  }

  const highlights = [
    "Practical Learning Experience",
    "Industry-Relevant Skills",
    "Hands-on Project Experience",
  ];

  return (
    <>
      <section className="w-full overflow-hidden bg-[#f8faff] px-5 py-10 font-sans sm:px-8 lg:py-14">

        <div className="mx-auto w-full max-w-[1350px]">

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate("/courses")}
            className="mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-bold text-[#5099fa] transition hover:gap-3 hover:text-[#3188eb]"
          >
            <ArrowLeft size={19} />
            Back to Courses
          </button>

          {/* Main Course Image */}
          <div className="overflow-hidden rounded-2xl border border-[#e2eaf5] bg-white p-2 shadow-[0_10px_35px_rgba(15,35,75,0.08)] sm:rounded-3xl sm:p-3">

            <div className="flex w-full items-center justify-center overflow-hidden rounded-xl bg-[#f1f5fa] sm:rounded-2xl">
              <img
                src={course.image}
                alt={course.title}
                className="block h-auto max-h-[650px] w-full object-contain"
              />
            </div>

          </div>

          {/* Course Information */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-[1fr_360px] lg:gap-12">

            {/* Left Content */}
            <div className="min-w-0">

              {/* Course Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dceaff] bg-white px-4 py-2 text-sm font-bold text-[#5099fa] shadow-sm">
                <Sparkles size={16} />
                Professional Training Course
              </div>

              {/* Course Title */}
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-1px] text-[#151b2a] sm:text-4xl lg:text-[48px]">
                {course.title}
              </h1>

              {/* Description */}
              <div className="mt-8 rounded-2xl border border-[#e4ebf5] bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.04)] sm:p-8">

                <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#18202f] sm:text-2xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                    <BookOpen size={21} />
                  </span>
                  About This Course
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#647084] sm:text-base">
                  {course.description ||
                    "Explore this course and develop practical skills through structured learning and hands-on experience."}
                </p>

              </div>

              {/* Course Highlights */}
              <div className="mt-8 rounded-2xl border border-[#e4ebf5] bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.04)] sm:p-8">

                <h2 className="text-xl font-extrabold text-[#18202f] sm:text-2xl">
                  What You Will Get
                </h2>

                <div className="mt-6 space-y-5">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-[15px] font-medium text-[#465267] sm:text-base"
                    >
                      <CheckCircle2
                        size={21}
                        className="shrink-0 text-[#5099fa]"
                      />
                      {item}
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Right Course Summary Card */}
            <aside className="h-fit rounded-2xl border border-[#e0e9f6] bg-white p-6 shadow-[0_8px_30px_rgba(15,35,75,0.07)] lg:sticky lg:top-24">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                <GraduationCap size={27} />
              </div>

              <h2 className="mt-5 text-xl font-extrabold text-[#18202f]">
                Course Overview
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#788295]">
                Start your learning journey with our professional training program.
              </p>

              {/* Duration */}
              <div className="mt-7 flex items-center gap-4 border-y border-[#edf0f5] py-5">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                  <Clock3 size={22} />
                </div>

                <div>
                  <p className="text-xs font-medium text-[#788295]">
                    Course Duration
                  </p>

                  <p className="mt-1 text-base font-bold text-[#18202f]">
                    {course.duration}
                  </p>
                </div>

              </div>

              {/* Apply Button */}
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="mt-7 flex w-full items-center justify-center rounded-xl bg-[#5099fa] px-6 py-4 text-base font-bold text-white shadow-[0_6px_18px_rgba(80,153,250,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#3188eb] hover:shadow-[0_9px_22px_rgba(80,153,250,0.3)]"
              >
                Apply Now
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-[#929bad]">
                Interested in this course? Apply now to get started.
              </p>

            </aside>

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

export default CourseDetail;
