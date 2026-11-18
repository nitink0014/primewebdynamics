import React, { useState } from "react";

export default function CounsellingModal({
  isOpen = true,
  onClose,
  onSubmit,
  courses = [],
  branches = [],
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    branch: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 font-sans">
      <div className="relative w-full max-w-[920px] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 bg-white">
        {/* Left Blue Promotional Panel */}
        <div className="md:col-span-5 bg-gradient-to-b from-[#23389c] via-[#1f4ac4] to-[#235de0] text-white p-7 sm:p-9 flex flex-col justify-between relative">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/15 text-xs font-medium text-white">
              <span className="text-amber-300">☆</span>
              Limited Seats
            </span>

            <h2 className="mt-7 text-[30px] sm:text-[34px] font-extrabold leading-[1.15] tracking-tight">
              Master IT Skills for a{" "}
              <span className="text-[#f5821f]">Brighter</span> Future!
            </h2>

            <p className="mt-5 text-[13.5px] leading-relaxed text-blue-100/90">
              Join 10,000+ students who transformed their careers with Ducat
              Institute
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {/* 3 Stat Cards */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-white/10 border border-white/15 rounded-xl py-3 px-2 text-center backdrop-blur-xs">
                <div className="text-[17px] sm:text-[18px] font-extrabold text-white">
                  95%
                </div>
                <div className="text-[10.5px] text-blue-100/90 mt-1 leading-tight">
                  Placement Rate
                </div>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-xl py-3 px-2 text-center backdrop-blur-xs">
                <div className="text-[17px] sm:text-[18px] font-extrabold text-white">
                  500+
                </div>
                <div className="text-[10.5px] text-blue-100/90 mt-1 leading-tight">
                  Hiring Partners
                </div>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-xl py-3 px-2 text-center backdrop-blur-xs">
                <div className="text-[17px] sm:text-[18px] font-extrabold text-white">
                  18 LPA
                </div>
                <div className="text-[10.5px] text-blue-100/90 mt-1 leading-tight">
                  Highest Package
                </div>
              </div>
            </div>

            {/* Company Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/15 text-[11px] font-medium text-white">
                Google
              </span>
              <span className="px-3 py-1 rounded-full bg-white/15 text-[11px] font-medium text-white">
                Amazon
              </span>
              <span className="px-3 py-1 rounded-full bg-white/15 text-[11px] font-medium text-white">
                Microsoft
              </span>
              <span className="px-3 py-1 rounded-full bg-white/15 text-[11px] font-medium text-white">
                TCS
              </span>
              <span className="px-3 py-1 rounded-full bg-white/15 text-[11px] font-medium text-white">
                Infosys
              </span>
            </div>
          </div>
        </div>

        {/* Right White Form Panel */}
        <div className="md:col-span-7 bg-white p-7 sm:p-10 relative flex flex-col justify-center">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 shadow-xs flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            ✕
          </button>

          <div className="flex items-center gap-4 mb-7 pr-8">
            <div className="w-12 h-12 rounded-xl bg-[#1d6ce0] text-white flex items-center justify-center shrink-0 shadow-sm">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-slate-900 leading-tight">
                Kick Start Your IT Career
              </h3>
              <p className="text-[13.5px] text-slate-500 mt-0.5">
                Get a free counselling session today
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-[#f9fafb] border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1d6ce0] focus:bg-white transition-colors"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-[#f9fafb] border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1d6ce0] focus:bg-white transition-colors"
            />

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg bg-[#f9fafb] border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1d6ce0] focus:bg-white transition-colors"
            />

            <div className="relative">
              <select
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className={`w-full appearance-none px-4 py-3 rounded-lg bg-[#f9fafb] border border-slate-200 text-sm focus:outline-none focus:border-[#1d6ce0] focus:bg-white transition-colors ${
                  formData.course ? "text-slate-800" : "text-slate-500"
                }`}
              >
                <option value="" disabled>
                  Select a Course
                </option>
                {courses.map((course, idx) => (
                  <option key={idx} value={course} className="text-slate-800">
                    {course}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 text-xs">
                ⌄
              </span>
            </div>

            <div className="relative">
              <select
                name="branch"
                required
                value={formData.branch}
                onChange={handleChange}
                className={`w-full appearance-none px-4 py-3 rounded-lg bg-[#f9fafb] border border-slate-200 text-sm focus:outline-none focus:border-[#1d6ce0] focus:bg-white transition-colors ${
                  formData.branch ? "text-slate-800" : "text-slate-500"
                }`}
              >
                <option value="" disabled>
                  Select a Branch
                </option>
                {branches.map((branch, idx) => (
                  <option key={idx} value={branch} className="text-slate-800">
                    {branch}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 text-xs">
                ⌄
              </span>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 rounded-lg bg-[#1d6ce0] hover:bg-[#1658ba] text-white font-semibold text-sm shadow-sm transition-colors cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}