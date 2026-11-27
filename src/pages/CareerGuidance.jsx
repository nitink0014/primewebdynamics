
import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Code2,
  Laptop,
  BrainCircuit,
  ShieldCheck,
  ChartNoAxesCombined,
  Palette,
  Settings2,
  Smartphone,
  Sparkles,
  UserRoundCheck,
  GraduationCap,
  Target,
} from "lucide-react";

import careerData from "../data/careerGuidanceData.json";
import AutoPopupForm from "../components/home/AutoPopupForm";

const iconMap = {
  Code2,
  Laptop,
  BrainCircuit,
  ShieldCheck,
  ChartNoAxesCombined,
  Palette,
  Settings2,
  Smartphone,
  BriefcaseBusiness,
  UserRoundCheck,
};

export default function CareerGuidance() {
  const [selectedFields, setSelectedFields] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [error, setError] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Same tilt animation as LiveClassesSection
  const handleCardMove = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 2.5;
    const rotateX = ((centerY - y) / centerY) * 2.5;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
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

  const toggleField = (id) => {
    setSelectedFields((current) => {
      const updated = current.includes(id)
        ? current.filter((field) => field !== id)
        : [...current, id];

      setShowSummary(false);
      setError("");

      return updated;
    });
  };

  const selectedCareerFields = careerData.careerFields.filter((field) =>
    selectedFields.includes(field.id)
  );

  const handleNext = () => {
    if (selectedFields.length === 0) {
      setError("Please select at least one career field to continue.");
      setShowSummary(false);
      return;
    }

    setError("");
    setShowSummary(true);
  };

  return (
    <>
      <main className="overflow-hidden bg-[#f5f8fc] text-[#172943]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#102b4e]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(40,120,206,0.20),transparent_45%)]" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="relative mx-auto max-w-[1250px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10 lg:pb-24">
            <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[11px] font-extrabold tracking-[1.4px] text-blue-100">
              <Sparkles size={15} className="text-sky-300" />
              CAREER GUIDANCE
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Hero Content */}
              <div className="max-w-[620px]">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/[0.08] px-4 py-2 text-[11px] font-bold tracking-[1.2px] text-blue-200">
                  <Target size={14} />
                  {careerData.hero.eyebrow}
                </span>

                <h1 className="mt-6 text-[35px] font-extrabold leading-[1.12] tracking-[-1.4px] text-white sm:text-[48px] lg:text-[57px]">
                  {careerData.hero.title}
                </h1>

                <p className="mt-5 max-w-[550px] text-[14px] leading-7 text-blue-100/75 sm:text-[16px]">
                  {careerData.hero.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#career-fields"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#f28b36] px-6 py-3 text-sm font-bold text-white shadow-[0_6px_18px_rgba(242,139,54,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#df7624] hover:shadow-[0_10px_24px_rgba(242,139,54,0.22)] focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#102b4e]"
                  >
                    {careerData.hero.primaryText}
                    <ArrowRight size={17} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    {careerData.hero.secondaryText}
                    <ArrowRight size={17} />
                  </button>
                </div>

                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-[12px] font-medium text-blue-100/80 sm:text-sm">
                  {[
                    "Practical learning",
                    "Career-focused skills",
                    "Expert guidance",
                  ].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <Check size={15} className="text-emerald-300" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative mx-auto w-full max-w-[530px]">
                <div className="absolute -inset-3 rounded-[26px] border border-white/[0.08]" />

                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/5 p-2 shadow-[0_25px_65px_rgba(0,0,0,0.25)]">
                  <img
                    src={careerData.hero.image}
                    alt={careerData.hero.imageAlt}
                    className="h-[280px] w-full rounded-[16px] object-cover sm:h-[370px]"
                  />

                  <div className="absolute inset-x-2 bottom-2 rounded-b-[16px] bg-gradient-to-t from-[#071a32]/90 via-[#071a32]/45 to-transparent px-5 pb-5 pt-16">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sky-200 backdrop-blur">
                        <BriefcaseBusiness size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-extrabold text-white">
                          Your future starts here
                        </p>
                        <p className="mt-1 text-xs text-blue-100/75">
                          Find your learning direction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="relative z-10 mx-auto max-w-[1250px] px-5 pt-9 sm:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {careerData.highlights.map((item) => {
              const Icon = iconMap[item.icon] || BriefcaseBusiness;

              return (
                <article
                  key={item.title}
                  onMouseMove={handleCardMove}
                  onMouseLeave={handleCardLeave}
                  className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-[#e5ebf3] bg-white p-5 shadow-[0_4px_18px_rgba(15,35,65,0.025)] transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform hover:border-[#cbdced] hover:shadow-[0_12px_30px_rgba(15,35,65,0.06)]"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(230px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(67,136,237,0.10), transparent 75%)",
                    }}
                  />

                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#1760a4] transition-colors duration-300 group-hover:bg-[#1760a4] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="relative">
                    <h3 className="text-[14px] font-extrabold text-[#172943]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#778397]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Career Fields */}
        <section
          id="career-fields"
          className="mx-auto max-w-[1250px] scroll-mt-8 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto mb-10 max-w-[720px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-extrabold tracking-[1.3px] text-[#1760a4] shadow-sm">
              <Target size={15} />
              {careerData.section.eyebrow}
            </div>

            <h2 className="mt-5 text-[29px] font-extrabold tracking-[-1px] text-[#172943] sm:text-[40px]">
              {careerData.section.title}
            </h2>

            <p className="mt-3 text-[14px] leading-7 text-[#778397] sm:text-[16px]">
              {careerData.section.description}
            </p>
          </div>

          {/* Selection Header */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-[16px] font-extrabold text-[#26364d]">
                Explore career fields
              </h3>
              <p className="mt-1 text-xs text-[#8995a6]">
                Select one or more fields that interest you
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#dce8f6] bg-white px-4 py-2 text-[12px] font-bold text-[#1760a4] shadow-sm">
              <CheckCircle2 size={15} />
              {selectedFields.length} selected
            </div>
          </div>

          {/* Career Field Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careerData.careerFields.map((field, index) => {
              const Icon = iconMap[field.icon] || BriefcaseBusiness;
              const selected = selectedFields.includes(field.id);

              return (
                <button
                  key={field.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleField(field.id)}
                  onMouseMove={handleCardMove}
                  onMouseLeave={handleCardLeave}
                  style={{
                    "--card-glow": selected
                      ? "rgba(67,136,237,0.15)"
                      : "rgba(67,136,237,0.09)",
                  }}
                  className={`group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border p-5 text-left transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out will-change-transform focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2 ${
                    selected
                      ? "border-[#1760a4] bg-[#f6faff] shadow-[0_8px_24px_rgba(23,96,164,0.09)]"
                      : "border-[#e3e9f1] bg-white shadow-[0_3px_14px_rgba(15,35,65,0.025)] hover:border-[#c7d9ed] hover:shadow-[0_12px_28px_rgba(15,35,65,0.065)]"
                  }`}
                >
                  {/* Cursor Following Glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(230px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--card-glow), transparent 75%)",
                    }}
                  />

                  {/* Card Number */}
                  <span className="pointer-events-none absolute right-5 top-4 text-[25px] font-extrabold tracking-[-1px] text-[#edf2f8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon and Selection */}
                  <div className="relative flex w-full items-start justify-between">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        selected
                          ? "bg-[#1760a4] text-white shadow-[0_5px_12px_rgba(23,96,164,0.16)]"
                          : "bg-[#edf5ff] text-[#1760a4] group-hover:bg-[#1760a4] group-hover:text-white"
                      }`}
                    >
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span
                      className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                        selected
                          ? "border-[#1760a4] bg-[#1760a4] text-white"
                          : "border-[#d4dce7] bg-white text-transparent group-hover:border-[#9dbde0]"
                      }`}
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-[16px] font-extrabold text-[#172943]">
                    {field.title}
                  </h3>

                  <p className="relative mt-2 text-[13px] leading-6 text-[#778397]">
                    {field.description}
                  </p>

                  <div
                    className={`relative mt-auto flex items-center gap-2 pt-4 text-[12px] font-bold ${
                      selected ? "text-[#1760a4]" : "text-[#8290a4]"
                    }`}
                  >
                    {selected ? "Selected" : "Explore field"}
                    <ArrowRight size={14} />
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`pointer-events-none absolute bottom-0 left-0 h-[3px] w-full transition-opacity duration-200 ${
                      selected
                        ? "bg-[#1760a4] opacity-100"
                        : "bg-[#2878ce] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Validation */}
          {error && (
            <p
              role="alert"
              className="mt-5 text-center text-sm font-semibold text-red-600"
            >
              {error}
            </p>
          )}

          {/* Next Button */}
          <div className="mt-8 flex flex-col items-center">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex min-h-[49px] min-w-[230px] items-center justify-center gap-3 rounded-xl bg-[#1760a4] px-8 py-3.5 text-sm font-bold text-white shadow-[0_6px_18px_rgba(23,96,164,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#124e87] hover:shadow-[0_10px_24px_rgba(23,96,164,0.21)] focus:outline-none focus:ring-2 focus:ring-[#1760a4] focus:ring-offset-2"
            >
              {careerData.guidance.buttonText}
              <ArrowRight size={17} />
            </button>

            <p className="mt-3 text-xs text-[#98a3b3]">
              Select your interests to see your next step
            </p>
          </div>

          {/* Selected Interests Summary */}
          {showSummary && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#dce7f4] bg-white shadow-[0_10px_35px_rgba(15,35,65,0.055)]">
              <div className="border-b border-[#e8edf4] bg-[#f7faff] px-6 py-6 sm:px-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <span className="text-[11px] font-extrabold tracking-[1.4px] text-[#1760a4]">
                      YOUR CAREER INTERESTS
                    </span>

                    <h3 className="mt-2 text-[23px] font-extrabold tracking-[-0.5px] text-[#172943] sm:text-[28px]">
                      Let's explore your options.
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#778397]">
                      Here are your selected fields and their related courses.
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-green-200 bg-green-50 px-4 py-2 text-[12px] font-bold text-green-700">
                    {selectedCareerFields.length} fields selected
                  </span>
                </div>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
                {selectedCareerFields.map((field) => {
                  const Icon = iconMap[field.icon] || BriefcaseBusiness;

                  return (
                    <div
                      key={field.id}
                      className="rounded-xl border border-[#e5ebf3] bg-[#fbfcfe] p-5 transition-colors duration-200 hover:border-[#cbdced]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1760a4]">
                          <Icon size={20} />
                        </div>

                        <h4 className="text-[14px] font-extrabold text-[#26364d]">
                          {field.title}
                        </h4>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {field.courses.map((course) => (
                          <span
                            key={course}
                            className="rounded-lg border border-[#e0e7f0] bg-white px-3 py-2 text-[11px] font-medium text-[#5f6f85]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4 border-t border-[#e8edf4] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <p className="max-w-[480px] text-[13px] leading-6 text-[#778397]">
                  Ready to discuss your interests? Connect with our career
                  guidance team.
                </p>

                <button
                  type="button"
                  onClick={() => setIsPopupOpen(true)}
                  className="inline-flex min-h-[45px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f28b36] px-6 py-3 text-[13px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#df7624] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                >
                  Get Career Guidance
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Guidance Process */}
        <section className="border-y border-[#e9eef5] bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-extrabold tracking-[1.2px] text-[#1760a4]">
                  <GraduationCap size={15} />
                  {careerData.guidance.eyebrow}
                </div>

                <h2 className="mt-5 text-[30px] font-extrabold leading-[1.15] tracking-[-1px] text-[#172943] sm:text-[40px]">
                  {careerData.guidance.title}
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#778397] sm:text-[15px]">
                  {careerData.guidance.description}
                </p>

                <button
                  type="button"
                  onClick={() => setIsPopupOpen(true)}
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#1760a4] transition-colors duration-200 hover:text-[#f28b36]"
                >
                  Talk to Our Team
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="space-y-3">
                {careerData.guidance.steps.map((step) => (
                  <article
                    key={step.number}
                    onMouseMove={handleCardMove}
                    onMouseLeave={handleCardLeave}
                    className="group relative flex gap-4 overflow-hidden rounded-2xl border border-[#e5ebf3] bg-[#fbfcfe] p-5 transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform hover:border-[#cbdced] hover:bg-white hover:shadow-[0_8px_24px_rgba(15,35,65,0.045)] sm:p-6"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(230px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(67,136,237,0.09), transparent 75%)",
                      }}
                    />

                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ff] text-[13px] font-extrabold text-[#1760a4] transition-colors duration-200 group-hover:bg-[#1760a4] group-hover:text-white">
                      {step.number}
                    </div>

                    <div className="relative">
                      <h3 className="text-[15px] font-extrabold text-[#26364d]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-6 text-[#778397]">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-[#102b4e] px-5 py-14 text-center sm:px-8 sm:py-18">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(40,120,206,0.13),transparent_60%)]" />

          <div className="relative mx-auto max-w-[750px]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-blue-200">
              <Sparkles size={22} />
            </div>

            <h2 className="mt-5 text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-white sm:text-[38px]">
              Your next opportunity starts with the right skills.
            </h2>

            <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-7 text-blue-100/75 sm:text-[16px]">
              Explore your interests and take the first step towards building
              your future with Prime Webdynamics.
            </p>

            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#f28b36] px-7 py-3.5 text-[13px] font-bold text-white shadow-[0_6px_18px_rgba(242,139,54,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#df7624] focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#102b4e]"
            >
              Talk to Our Team
              <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>

      {/* Reusable Contact Popup */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
