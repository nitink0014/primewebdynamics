
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Wrench,
  BriefcaseBusiness,
  Lightbulb,
  Users,
  MonitorPlay,
  Award,
  Rocket,
  MessageCircle,
  Sparkles,
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
      <section className="flex min-h-[65vh] flex-col items-center justify-center bg-[#f8faff] px-5 text-center">
        <div className="rounded-2xl bg-[#edf5ff] p-5 text-[#5099fa]">
          <BookOpen size={40} />
        </div>

        <h1 className="mt-6 text-3xl font-extrabold text-[#151b2a]">
          Course Not Found
        </h1>

        <p className="mt-3 text-[#647084]">
          Sorry, the course you are looking for does not exist.
        </p>

        <button
          type="button"
          onClick={() => navigate("/courses")}
          className="mt-6 rounded-xl bg-[#5099fa] px-7 py-3 font-bold text-white transition hover:bg-[#3188eb]"
        >
          Back to Courses
        </button>
      </section>
    );
  }

  const courseIncludes = coursesData.courseIncludes || [
    "Certificate",
    "Live Projects",
    "Placement Assistance",
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
      <main className="min-h-screen bg-[#f5f8fd] font-sans">

        {/* Top Navigation */}
        <section className="px-5 pt-7 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1350px]">
            <button
              type="button"
              onClick={() => navigate("/courses")}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#52749e] transition hover:gap-3 hover:text-[#5099fa]"
            >
              <ArrowLeft size={18} />
              All Courses
            </button>
          </div>
        </section>

        {/* Course Hero */}
        <section className="px-5 pb-8 pt-5 sm:px-8 lg:px-10">
          <div className="relative mx-auto max-w-[1350px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#102d67] via-[#164e99] to-[#2879d5] shadow-[0_18px_50px_rgba(16,45,103,0.16)]">

            <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border-[55px] border-white/[0.04]" />
            <div className="pointer-events-none absolute -bottom-44 left-1/3 h-96 w-96 rounded-full border-[55px] border-white/[0.04]" />

            <div className="relative z-10 grid items-center gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_390px] lg:gap-12 lg:p-12">

              {/* Course Information */}
              <div className="min-w-0">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-100">
                  <Sparkles size={14} className="text-orange-300" />
                  PROFESSIONAL TRAINING PROGRAM
                </div>

                <p className="mt-7 text-sm font-extrabold tracking-[3px] text-orange-300">
                  COURSE {course.courseNumber}
                </p>

                <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[46px]">
                  {course.title}
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                  {course.tagline}
                </p>

                {/* Course Meta */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                  <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-3">
                    <Clock3 size={20} className="shrink-0 text-orange-300" />
                    <div>
                      <p className="text-[11px] text-blue-200">
                        Duration
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {course.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-3">
                    <GraduationCap size={21} className="shrink-0 text-orange-300" />
                    <div>
                      <p className="text-[11px] text-blue-200">
                        Level
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {course.level}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-3">
                    <MonitorPlay size={20} className="shrink-0 text-orange-300" />
                    <div>
                      <p className="text-[11px] text-blue-200">
                        Learning Mode
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {course.mode}
                      </p>
                    </div>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() => setIsPopupOpen(true)}
                  className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-[#f47724] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-1 hover:bg-[#ff8a35]"
                >
                  Enquire About This Course
                  <ArrowRight size={18} />
                </button>

              </div>

              {/* Compact Course Image */}
              <div className="mx-auto w-full max-w-[390px]">
                <div className="overflow-hidden rounded-[22px] border border-white/20 bg-white/10 p-2 shadow-2xl">
                  <div className="aspect-[4/3] overflow-hidden rounded-[16px] bg-[#eaf1fa]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                <p className="mt-4 text-center text-xs font-medium tracking-wide text-blue-100">
                  Explore the course and start building your skills
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1350px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-9">

            {/* Left Content */}
            <div className="min-w-0 space-y-7">

              {/* About Course */}
              <section className="rounded-2xl border border-[#e4ebf5] bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.035)] sm:p-8">

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                    <BookOpen size={22} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#5099fa]">
                      Course Overview
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-[#18202f] sm:text-2xl">
                      About This Course
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-[15px] leading-8 text-[#647084]">
                  {course.description}
                </p>

              </section>

              {/* Easy Explanation */}
              <section className="overflow-hidden rounded-2xl border border-[#ffdfc8] bg-gradient-to-r from-[#fff8f2] to-[#fff1e7] p-6 sm:p-8">

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f47724] text-white shadow-md shadow-orange-200">
                    <Lightbulb size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#e66b20]">
                      Simple Explanation
                    </p>

                    <h2 className="mt-1 text-xl font-extrabold text-[#18202f]">
                      Understand It Easily
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#596579] sm:text-base">
                      {course.easyExplanation}
                    </p>
                  </div>
                </div>

              </section>

              {/* Syllabus */}
              <section className="rounded-2xl border border-[#e4ebf5] bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.035)] sm:p-8">

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                      <BookOpen size={22} />
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#5099fa]">
                        What You Will Learn
                      </p>
                      <h2 className="mt-1 text-xl font-extrabold text-[#18202f] sm:text-2xl">
                        Course Syllabus
                      </h2>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-[#edf5ff] px-3 py-1.5 text-xs font-bold text-[#3477bd]">
                    {(course.syllabus || []).length} Modules
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {(course.syllabus || []).map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="group flex gap-3 rounded-xl border border-[#e7edf5] bg-[#fbfcfe] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#9cc7f6] hover:bg-white hover:shadow-md"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-sm font-extrabold text-[#3477bd] transition group-hover:bg-[#5099fa] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h3 className="text-sm font-extrabold text-[#20375e]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#788295]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </section>

              {/* Who Should Join */}
              <section className="rounded-2xl border border-[#dce8f8] bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.035)] sm:p-8">

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                    <Users size={22} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#5099fa]">
                      Find Your Starting Point
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-[#18202f]">
                      Who Should Join?
                    </h2>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#647084] sm:text-base">
                  {course.whoShouldJoin}
                </p>

              </section>

            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24">

              {/* Tools */}
              <section className="rounded-2xl border border-[#dce8f8] bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.04)]">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                    <Wrench size={20} />
                  </div>

                  <h2 className="text-lg font-extrabold text-[#18376c]">
                    Tools You'll Learn
                  </h2>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(course.tools || []).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#d4e4f8] bg-[#f7faff] px-3 py-2 text-xs font-bold text-[#37669d]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </section>

              {/* Projects */}
              <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#102d67] to-[#1b579e] p-6 text-white shadow-[0_8px_25px_rgba(16,45,103,0.12)]">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                    <Rocket size={21} />
                  </div>

                  <h2 className="text-lg font-extrabold">
                    Projects You'll Build
                  </h2>
                </div>

                <div className="mt-5 space-y-4">
                  {(course.projects || []).map((project) => (
                    <div
                      key={project}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-orange-300"
                      />

                      <p className="text-sm leading-6 text-blue-100">
                        {project}
                      </p>
                    </div>
                  ))}
                </div>

              </section>

              {/* Career Opportunities */}
              <section className="rounded-2xl border border-[#e4ebf5] bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.04)]">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff3e9] text-[#f47724]">
                    <BriefcaseBusiness size={20} />
                  </div>

                  <h2 className="text-lg font-extrabold text-[#18376c]">
                    Career Opportunities
                  </h2>
                </div>

                <div className="mt-5 space-y-4">
                  {(course.careers || []).map((career) => (
                    <div
                      key={career}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[#5099fa]"
                      />

                      <p className="text-sm leading-6 text-[#465267]">
                        {career}
                      </p>
                    </div>
                  ))}
                </div>

              </section>

              {/* Apply Card */}
              <section className="overflow-hidden rounded-2xl border border-[#dce8f8] bg-white shadow-[0_8px_30px_rgba(15,35,75,0.07)]">

                <div className="bg-gradient-to-r from-[#102d67] to-[#2165b4] p-6 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                    <GraduationCap size={27} />
                  </div>

                  <h2 className="mt-5 text-xl font-extrabold">
                    Start Learning Today
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    Interested in {course.title}? Connect with our team for course guidance.
                  </p>
                </div>

                <div className="p-6">

                  <div className="flex items-center gap-3 rounded-xl bg-[#f5f8fd] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#5099fa]">
                      <Clock3 size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-[#788295]">
                        Course Duration
                      </p>

                      <p className="mt-1 font-extrabold text-[#18202f]">
                        {course.duration}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5099fa] px-5 py-4 text-sm font-extrabold text-white shadow-md shadow-blue-100 transition duration-300 hover:-translate-y-0.5 hover:bg-[#3188eb] hover:shadow-lg"
                  >
                    Apply Now
                    <ArrowRight size={18} />
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-[#929bad]">
                    Our team will help you get started.
                  </p>

                </div>
              </section>

            </aside>

          </div>
        </section>

        {/* Course Includes */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1350px] overflow-hidden rounded-2xl border border-[#dce8f8] bg-white shadow-[0_6px_25px_rgba(15,35,75,0.045)]">

            <div className="flex items-center gap-3 bg-[#102d67] px-6 py-5 text-white sm:px-8">
              <Award size={22} className="text-orange-300" />
              <h2 className="text-base font-extrabold uppercase tracking-wider">
                Course Includes
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 p-6 sm:grid-cols-4 sm:p-8">
              {courseIncludes.map((item, index) => {
                const Icon = includeIcons[index] || CheckCircle2;

                return (
                  <div
                    key={item}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e9] text-[#f47724]">
                      <Icon size={23} />
                    </div>

                    <span className="text-sm font-bold text-[#29446e]">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      {/* Application Popup */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}

export default CourseDetail;
