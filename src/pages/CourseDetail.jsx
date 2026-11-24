
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

  if (!course) {
    return (
      <main className="flex min-h-[65vh] flex-col items-center justify-center bg-[#f5f8fd] px-5 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-[#1760a4]">
          <BookOpen size={38} />
        </div>

        <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
          Course Not Found
        </h1>

        <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
          Sorry, the course you are looking for does not exist or may have been moved.
        </p>

        <button
          type="button"
          onClick={() => navigate("/courses")}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1760a4] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#124b82]"
        >
          <ArrowLeft size={17} />
          Back to Courses
        </button>
      </main>
    );
  }

  const syllabus = course.syllabus || [];
  const tools = course.tools || [];
  const projects = course.projects || [];
  const careers = course.careers || [];

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#f5f8fd] font-sans">

        {/* Top Navigation */}
        <section className="px-5 pt-7 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1350px]">
            <button
              type="button"
              onClick={() => navigate("/courses")}
              className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-[#1760a4]"
            >
              <ArrowLeft size={18} />
              All Courses
            </button>
          </div>
        </section>

        {/* Course Hero */}
        <section className="px-5 pb-9 pt-6 sm:px-8 lg:px-10">
          <div className="relative mx-auto max-w-[1350px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#071d3d] via-[#123e78] to-[#1769b5] shadow-[0_20px_55px_rgba(16,45,103,0.15)]">

            <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border-[55px] border-white/[0.04]" />
            <div className="pointer-events-none absolute -bottom-44 left-1/3 h-96 w-96 rounded-full border-[55px] border-white/[0.04]" />
            <div className="pointer-events-none absolute right-1/4 top-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative z-10 grid items-center gap-9 p-6 sm:p-9 lg:grid-cols-[1fr_390px] lg:gap-12 lg:p-12">

              {/* Course Information */}
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-100">
                  <Sparkles size={14} className="text-orange-300" />
                  PROFESSIONAL TRAINING PROGRAM
                </div>

                <p className="mt-7 text-xs font-extrabold tracking-[3px] text-orange-300 sm:text-sm">
                  COURSE {course.courseNumber}
                </p>

                <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[46px]">
                  {course.title}
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                  {course.tagline}
                </p>

                {/* Course Meta */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.08] p-4">
                    <Clock3
                      size={21}
                      className="shrink-0 text-orange-300"
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] text-blue-200">
                        Duration
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {course.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.08] p-4">
                    <GraduationCap
                      size={22}
                      className="shrink-0 text-orange-300"
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] text-blue-200">
                        Level
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {course.level}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.08] p-4">
                    <MonitorPlay
                      size={21}
                      className="shrink-0 text-orange-300"
                    />
                    <div className="min-w-0">
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
                  className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-950/20 transition-colors duration-200 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300/40"
                >
                  Enquire About This Course
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Course Image */}
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
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.035)] sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                    <BookOpen size={22} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#1760a4]">
                      Course Overview
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
                      About This Course
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                  {course.description}
                </p>
              </section>

              {/* Easy Explanation */}
              <section className="overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-[#fff7f0] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-200">
                    <Lightbulb size={23} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-orange-600">
                      Simple Explanation
                    </p>

                    <h2 className="mt-1 text-xl font-extrabold text-slate-900">
                      Understand It Easily
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                      {course.easyExplanation}
                    </p>
                  </div>
                </div>
              </section>

              {/* Syllabus */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.035)] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                      <BookOpen size={22} />
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#1760a4]">
                        What You Will Learn
                      </p>
                      <h2 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
                        Course Syllabus
                      </h2>
                    </div>
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#1760a4]">
                    {syllabus.length} Modules
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {syllabus.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="group flex gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-[border-color,background-color,box-shadow] duration-200 hover:border-blue-200 hover:bg-white hover:shadow-md"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-extrabold text-[#1760a4]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h3 className="text-sm font-extrabold text-slate-800">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Who Should Join */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.035)] sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                    <Users size={22} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#1760a4]">
                      Find Your Starting Point
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-slate-900">
                      Who Should Join?
                    </h2>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  {course.whoShouldJoin}
                </p>
              </section>
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24">

              {/* Tools */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                    <Wrench size={20} />
                  </div>

                  <h2 className="text-lg font-extrabold text-slate-900">
                    Tools You'll Learn
                  </h2>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-[#37669d]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#102d67] to-[#1b579e] p-6 text-white shadow-[0_8px_25px_rgba(16,45,103,0.12)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                    <Rocket size={21} />
                  </div>

                  <h2 className="text-lg font-extrabold">
                    Projects You'll Build
                  </h2>
                </div>

                <div className="mt-5 space-y-4">
                  {projects.map((project) => (
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
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_18px_rgba(15,35,75,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <BriefcaseBusiness size={20} />
                  </div>

                  <h2 className="text-lg font-extrabold text-slate-900">
                    Career Opportunities
                  </h2>
                </div>

                <div className="mt-5 space-y-4">
                  {careers.map((career) => (
                    <div
                      key={career}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#1760a4]"
                      />

                      <p className="text-sm leading-6 text-slate-600">
                        {career}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Apply Card */}
              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,35,75,0.07)]">
                <div className="bg-gradient-to-br from-[#102d67] to-[#2165b4] p-6 text-white">
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
                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                      <Clock3 size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Course Duration
                      </p>

                      <p className="mt-1 font-extrabold text-slate-900">
                        {course.duration}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1760a4] px-5 py-4 text-sm font-extrabold text-white shadow-md shadow-blue-100 transition-colors duration-200 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
                  >
                    Apply Now
                    <ArrowRight size={18} />
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                    Our team will help you get started.
                  </p>
                </div>
              </section>
            </aside>
          </div>
        </section>

        {/* Course Includes */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1350px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_25px_rgba(15,35,75,0.045)]">
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <Icon size={23} />
                    </div>

                    <span className="text-sm font-bold text-slate-700">
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
