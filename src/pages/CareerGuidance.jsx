
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
      <main className="min-h-screen overflow-hidden bg-[#f6f8fc] text-[#172943]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#102b4e]">
          <div className="pointer-events-none absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-[#2878ce]/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[350px] w-[350px] rounded-full bg-[#f28b36]/10 blur-[100px]" />

          <div className="relative mx-auto max-w-[1250px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pb-28">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/[0.07] px-4 py-2 text-[11px] font-extrabold tracking-[1.5px] text-blue-200">
              <Sparkles size={16} />
              CAREER GUIDANCE
            </div>

            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Hero Content */}
              <div className="max-w-[620px]">
                <span className="inline-flex rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-[11px] font-bold tracking-[1.3px] text-blue-200">
                  {careerData.hero.eyebrow}
                </span>

                <h1 className="mt-6 text-[36px] font-extrabold leading-[1.12] tracking-[-1.5px] text-white sm:text-[48px] lg:text-[58px]">
                  {careerData.hero.title}
                </h1>

                <p className="mt-6 max-w-[550px] text-[14px] leading-8 text-blue-100/75 sm:text-[17px]">
                  {careerData.hero.description}
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#career-fields"
                    className="inline-flex min-h-[49px] items-center justify-center gap-2 rounded-xl bg-[#f28b36] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(242,139,54,0.18)] transition-[background-color,box-shadow] duration-200 hover:bg-[#df7624] hover:shadow-[0_10px_28px_rgba(242,139,54,0.25)] focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#102b4e]"
                  >
                    {careerData.hero.primaryText}
                    <ArrowRight size={17} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="inline-flex min-h-[49px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    {careerData.hero.secondaryText}
                    <ArrowRight size={17} />
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-[12px] font-medium text-blue-100/80 sm:text-sm">
                  <span className="flex items-center gap-2">
                    <Check size={16} className="text-[#72d6a1]" />
                    Practical learning
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={16} className="text-[#72d6a1]" />
                    Career-focused skills
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={16} className="text-[#72d6a1]" />
                    Expert guidance
                  </span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative mx-auto w-full max-w-[540px]">
                <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-2xl border border-blue-300/30" />

                <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-blue-300/20" />

                <img
                  src={careerData.hero.image}
                  alt={careerData.hero.imageAlt}
                  className="relative h-[290px] w-full rounded-2xl border border-white/10 object-cover shadow-[0_25px_60px_rgba(0,0,0,0.3)] sm:h-[390px]"
                />

                <div className="absolute -bottom-5 right-3 max-w-[270px] rounded-xl border border-[#e8edf5] bg-white p-4 shadow-xl sm:right-[-15px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                      <BriefcaseBusiness size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-[#172943]">
                        Your future starts here
                      </p>
                      <p className="mt-1 text-xs text-[#778397]">
                        Find your learning direction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="relative z-10 mx-auto max-w-[1250px] px-5 pt-10 sm:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {careerData.highlights.map((item) => {
              const Icon = iconMap[item.icon] || BriefcaseBusiness;

              return (
                <article
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-[#e3e9f1] bg-white p-5 shadow-[0_5px_22px_rgba(15,35,65,0.035)] transition-[border-color,box-shadow] duration-300 hover:border-[#c6dcf5] hover:shadow-[0_10px_28px_rgba(15,35,65,0.07)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#1760a4]">
                    <Icon size={23} />
                  </div>

                  <div>
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
          className="mx-auto max-w-[1250px] scroll-mt-8 px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
        >
          {/* Section Heading */}
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-extrabold tracking-[1.4px] text-[#1760a4]">
              <Target size={15} />
              {careerData.section.eyebrow}
            </div>

            <h2 className="mt-5 text-[29px] font-extrabold tracking-[-1px] text-[#172943] sm:text-[40px]">
              {careerData.section.title}
            </h2>

            <p className="mt-4 text-[14px] leading-7 text-[#778397] sm:text-[16px]">
              {careerData.section.description}
            </p>
          </div>

          {/* Selection Header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-[16px] font-extrabold text-[#26364d]">
                Explore career fields
              </h3>
              <p className="mt-1 text-xs text-[#8995a6]">
                Select one or more fields that interest you
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#dce8f6] bg-white px-4 py-2 text-[12px] font-bold text-[#1760a4]">
              <CheckCircle2 size={15} />
              {selectedFields.length} selected
            </div>
          </div>

          {/* Career Field Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {careerData.careerFields.map((field, index) => {
              const Icon = iconMap[field.icon] || BriefcaseBusiness;
              const selected = selectedFields.includes(field.id);

              return (
                <button
                  key={field.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleField(field.id)}
                  className={`group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border p-6 pt-6 text-left transition-[border-color,box-shadow,background-color] duration-200 focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2 ${
                    selected
                      ? "border-[#1760a4] bg-[#f5f9ff] shadow-[0_8px_25px_rgba(23,96,164,0.10)]"
                      : "border-[#e2e8f0] bg-white shadow-[0_4px_16px_rgba(15,35,65,0.035)] hover:border-[#b8d5f5] hover:shadow-[0_10px_25px_rgba(15,35,65,0.07)]"
                  }`}
                >
                  {/* Card Number */}
                  <span className="pointer-events-none absolute right-5 top-5 text-[26px] font-extrabold tracking-[-1px] text-[#edf2f8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon and Selection */}
                  <div className="flex w-full items-start justify-between">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors duration-200 ${
                        selected
                          ? "bg-[#1760a4] text-white"
                          : "bg-[#edf5ff] text-[#1760a4] group-hover:bg-[#1760a4] group-hover:text-white"
                      }`}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span
                      className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
                        selected
                          ? "border-[#1760a4] bg-[#1760a4] text-white"
                          : "border-[#d4dce7] bg-white text-transparent"
                      }`}
                    >
                      <Check size={14} strokeWidth={3} />
                    </span>
                  </div>

                  <h3 className="mt-6 text-[17px] font-extrabold text-[#172943]">
                    {field.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#778397]">
                    {field.description}
                  </p>

                  <div
                    className={`mt-auto flex items-center gap-2 pt-5 text-[12px] font-bold ${
                      selected ? "text-[#1760a4]" : "text-[#8290a4]"
                    }`}
                  >
                    {selected ? "Selected" : "Explore field"}
                    <ArrowRight size={15} />
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
          <div className="mt-10 flex flex-col items-center">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex min-h-[50px] min-w-[240px] items-center justify-center gap-3 rounded-xl bg-[#1760a4] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_22px_rgba(23,96,164,0.17)] transition-[background-color,box-shadow] duration-200 hover:bg-[#124e87] hover:shadow-[0_10px_25px_rgba(23,96,164,0.23)] focus:outline-none focus:ring-2 focus:ring-[#1760a4] focus:ring-offset-2"
            >
              {careerData.guidance.buttonText}
              <ArrowRight size={18} />
            </button>

            <p className="mt-3 text-xs text-[#98a3b3]">
              Select your interests to see your next step
            </p>
          </div>

          {/* Selected Interests Summary */}
          {showSummary && (
            <div className="mt-12 overflow-hidden rounded-2xl border border-[#dce7f4] bg-white shadow-[0_12px_40px_rgba(15,35,65,0.07)]">
              <div className="border-b border-[#e8edf4] bg-[#f6f9fe] px-6 py-7 sm:px-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <span className="text-[11px] font-extrabold tracking-[1.5px] text-[#1760a4]">
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

              <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
                {selectedCareerFields.map((field) => {
                  const Icon = iconMap[field.icon] || BriefcaseBusiness;

                  return (
                    <div
                      key={field.id}
                      className="rounded-xl border border-[#e5ebf3] bg-[#fbfcfe] p-5"
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

              <div className="flex flex-col gap-4 border-t border-[#e8edf4] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <p className="max-w-[480px] text-[13px] leading-6 text-[#778397]">
                  Ready to discuss your interests? Connect with our career
                  guidance team.
                </p>

                <button
                  type="button"
                  onClick={() => setIsPopupOpen(true)}
                  className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f28b36] px-6 py-3 text-[13px] font-bold text-white transition-colors duration-200 hover:bg-[#df7624] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                >
                  Get Career Guidance
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Guidance Process */}
        <section className="border-y border-[#edf1f6] bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-extrabold tracking-[1.3px] text-[#1760a4]">
                  <GraduationCap size={15} />
                  {careerData.guidance.eyebrow}
                </div>

                <h2 className="mt-5 text-[30px] font-extrabold leading-[1.15] tracking-[-1px] text-[#172943] sm:text-[40px]">
                  {careerData.guidance.title}
                </h2>

                <p className="mt-5 text-[14px] leading-7 text-[#778397] sm:text-[15px]">
                  {careerData.guidance.description}
                </p>

                <button
                  type="button"
                  onClick={() => setIsPopupOpen(true)}
                  className="mt-7 inline-flex items-center gap-2 text-[14px] font-bold text-[#1760a4] transition-colors duration-200 hover:text-[#f28b36]"
                >
                  Talk to Our Team
                  <ArrowRight size={17} />
                </button>
              </div>

              {/* Right Steps */}
              <div className="space-y-4">
                {careerData.guidance.steps.map((step) => (
                  <article
                    key={step.number}
                    className="flex gap-5 rounded-2xl border border-[#e3e9f1] bg-[#fbfcfe] p-5 transition-[border-color,box-shadow] duration-200 hover:border-[#c6dcf5] hover:shadow-[0_8px_22px_rgba(15,35,65,0.05)] sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ff] text-[13px] font-extrabold text-[#1760a4]">
                      {step.number}
                    </div>

                    <div>
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
        <section className="relative overflow-hidden bg-[#102b4e] px-5 py-16 text-center sm:px-8 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-32 h-72 w-72 rounded-full bg-blue-400/10 blur-[90px]" />
          <div className="pointer-events-none absolute -right-20 -bottom-32 h-72 w-72 rounded-full bg-orange-400/10 blur-[90px]" />

          <div className="relative mx-auto max-w-[750px]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-blue-200">
              <Sparkles size={23} />
            </div>

            <h2 className="mt-6 text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-white sm:text-[38px]">
              Your next opportunity starts with the right skills.
            </h2>

            <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-7 text-blue-100/75 sm:text-[16px]">
              Explore your interests and take the first step towards building
              your future with Prime Webdynamics.
            </p>

            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="mt-8 inline-flex min-h-[49px] items-center justify-center gap-2 rounded-xl bg-[#f28b36] px-7 py-3.5 text-[13px] font-bold text-white transition-colors duration-200 hover:bg-[#df7624] focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#102b4e]"
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
