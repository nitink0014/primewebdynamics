
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock3,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Wrench,
  BriefcaseBusiness,
  Lightbulb,
  Users,
  MonitorPlay,
  Award,
  Rocket,
  MessageCircle,
} from "lucide-react";

import coursesData from "../data/coursesData.json";
import AutoPopupForm from "../components/home/AutoPopupForm";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const course = coursesData.courses.find(
    (item) => String(item.id) === String(id)
  );

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

  const courseIncludes = coursesData.courseIncludes || [
    "Certificate",
    "Live Projects",
    "Placement Help",
    "Doubt Sessions",
  ];

  const includeIcons = [
    Award,
    Rocket,
    BriefcaseBusiness,
    MessageCircle,
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

          {/* Course Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#102d67] via-[#1554a8] to-[#2879d5] px-6 py-10 text-white shadow-lg sm:rounded-3xl sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border-[35px] border-white/5" />
            <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full border-[35px] border-white/5" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-extrabold tracking-[3px] text-orange-300 sm:text-sm">
                COURSE {course.courseNumber}
              </p>

              <h1 className="mt-4 text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                {course.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                  <Clock3 size={17} className="text-orange-300" />
                  <span className="text-blue-100">Duration:</span>
                  <strong>{course.duration}</strong>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                  <GraduationCap size={18} className="text-orange-300" />
                  <span className="text-blue-100">Level:</span>
                  <strong>{course.level}</strong>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                  <MonitorPlay size={17} className="text-orange-300" />
                  <span className="text-blue-100">Mode:</span>
                  <strong>{course.mode}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Course Image */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#e2eaf5] bg-white p-2 shadow-[0_10px_35px_rgba(15,35,75,0.08)] sm:p-3">
            <div className="flex w-full items-center justify-center overflow-hidden rounded-xl bg-[#f1f5fa]">
              <img
                src={course.image}
                alt={course.title}
                className="block h-auto max-h-[500px] w-full object-contain"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-[1fr_350px] lg:gap-10">

            {/* Left Column */}
            <div className="min-w-0 space-y-8">

              {/* About Course */}
              <div className="rounded-2xl border border-[#e4ebf5] bg-white p-6 shadow-sm sm:p-8">
                <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#18202f] sm:text-2xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                    <BookOpen size={21} />
                  </span>
                  What Is This Course?
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#647084] sm:text-base">
                  {course.description}
                </p>
              </div>

              {/* Understand Easily */}
              <div className="rounded-2xl border-l-4 border-[#f47724] bg-[#fff4eb] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f47724] text-white">
                    <Lightbulb size={21} />
                  </span>

                  <div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#e66b20]">
                      Understand It Easily
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-[#465267] sm:text-base">
                      {course.easyExplanation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Syllabus */}
              <div className="rounded-2xl border border-[#e4ebf5] bg-white p-6 shadow-sm sm:p-8">
                <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#18202f] sm:text-2xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                    <BookOpen size={21} />
                  </span>
                  Course Syllabus
                </h2>

                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {course.syllabus.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="flex gap-3 rounded-xl border border-[#e2eaf5] bg-white p-4 transition hover:border-[#5099fa] hover:shadow-sm"
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold text-white ${
                          index % 2 === 0
                            ? "bg-[#2367b5]"
                            : "bg-[#f47724]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h3 className="text-sm font-extrabold text-[#20375e]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-[#788295]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column */}
            <aside className="h-fit space-y-6 lg:sticky lg:top-24">

              {/* Tools */}
              <div className="rounded-2xl border border-[#dceaff] bg-[#edf5ff] p-6">
                <h2 className="flex items-center gap-2 text-lg font-extrabold text-[#18376c]">
                  <Wrench size={19} className="text-[#5099fa]" />
                  Tools You'll Learn
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#d4e4f8] bg-white px-3 py-1.5 text-xs font-bold text-[#37669d]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="rounded-2xl bg-[#102d67] p-6 text-white shadow-sm">
                <h2 className="flex items-center gap-2 text-lg font-extrabold">
                  <Rocket size={19} className="text-orange-400" />
                  Projects You'll Build
                </h2>

                <div className="mt-5 space-y-4">
                  {course.projects.map((project) => (
                    <div
                      key={project}
                      className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-orange-400"
                      />

                      <p className="text-sm leading-6 text-blue-100">
                        {project}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div className="rounded-2xl border border-[#f2a36f] bg-white p-6">
                <h2 className="flex items-center gap-2 text-lg font-extrabold text-[#18376c]">
                  <BriefcaseBusiness size={19} className="text-[#f47724]" />
                  Career Opportunities
                </h2>

                <div className="mt-5 space-y-4">
                  {course.careers.map((career) => (
                    <div
                      key={career}
                      className="flex items-start gap-3"
                    >
                      <BriefcaseBusiness
                        size={15}
                        className="mt-0.5 shrink-0 text-[#3675b8]"
                      />

                      <p className="text-sm font-medium text-[#465267]">
                        {career}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Should Join */}
              <div className="rounded-2xl bg-gradient-to-br from-[#f47724] to-[#ff8a35] p-6 text-white shadow-sm">
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <h2 className="text-lg font-extrabold">
                    Who Should Join?
                  </h2>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/95">
                  {course.whoShouldJoin}
                </p>
              </div>

              {/* Apply Card */}
              <div className="rounded-2xl border border-[#e0e9f6] bg-white p-6 shadow-[0_8px_30px_rgba(15,35,75,0.07)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                  <GraduationCap size={27} />
                </div>

                <h2 className="mt-5 text-xl font-extrabold text-[#18202f]">
                  Start Learning Today
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#788295]">
                  Interested in {course.title}? Apply now and take the next step in your career.
                </p>

                <div className="mt-6 flex items-center gap-3 border-y border-[#edf0f5] py-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                    <Clock3 size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#788295]">
                      Course Duration
                    </p>

                    <p className="mt-1 font-bold text-[#18202f]">
                      {course.duration}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPopupOpen(true)}
                  className="mt-7 flex w-full items-center justify-center rounded-xl bg-[#5099fa] px-6 py-4 text-base font-bold text-white shadow-[0_6px_18px_rgba(80,153,250,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#3188eb] hover:shadow-[0_9px_22px_rgba(80,153,250,0.3)]"
                >
                  Apply Now
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-[#929bad]">
                  Our team will help you get started.
                </p>
              </div>

            </aside>
          </div>

          {/* Course Includes */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#dce8f8] bg-white shadow-sm">
            <div className="bg-[#102d67] px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wider text-white sm:text-left">
              Course Includes
            </div>

            <div className="grid grid-cols-2 gap-5 p-6 sm:grid-cols-4 sm:gap-3">
              {courseIncludes.map((item, index) => {
                const Icon = includeIcons[index] || CheckCircle2;

                return (
                  <div
                    key={item}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <Icon size={25} className="text-[#f47724]" />

                    <span className="text-sm font-bold text-[#29446e]">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
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
