
import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
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
      <main className="min-h-screen overflow-hidden bg-[#f7f9fc] text-[#172033]">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#102b4e]">
          <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#2366a5]/20 blur-3xl" />

          <div className="relative mx-auto max-w-[1240px] px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pb-24">

            <div className="mb-10 flex items-center gap-2 text-sm font-semibold tracking-[0.15em] text-blue-200">
              <Sparkles size={17} />
              CAREER DISCOVERY
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

              {/* Hero Content */}
              <div className="max-w-[620px]">
                <span className="mb-5 inline-flex rounded-full border border-blue-300/30 bg-blue-300/10 px-4 py-2 text-xs font-semibold tracking-[0.13em] text-blue-200">
                  {careerData.hero.eyebrow}
                </span>

                <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[58px]">
                  {careerData.hero.title}
                </h1>

                <p className="mt-6 max-w-[550px] text-base leading-8 text-blue-100/80 sm:text-lg">
                  {careerData.hero.description}
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#career-fields"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#f28b36] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-[#df7624]"
                  >
                    {careerData.hero.primaryText}
                    <ArrowRight size={17} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {careerData.hero.secondaryText}
                    <ArrowRight size={17} />
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-blue-100/80">
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

                <img
                  src={careerData.hero.image}
                  alt={careerData.hero.imageAlt}
                  className="relative h-[300px] w-full rounded-2xl object-cover shadow-2xl sm:h-[390px]"
                />

                <div className="absolute -bottom-5 right-4 max-w-[260px] rounded-xl border border-white/60 bg-white p-4 shadow-xl sm:right-[-15px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                      <BriefcaseBusiness size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#172033]">
                        Your future starts here
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Find a learning direction
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="relative z-10 mx-auto -mt-1 max-w-[1240px] px-5 pt-10 sm:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {careerData.highlights.map((item) => {
              const Icon = iconMap[item.icon] || BriefcaseBusiness;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,35,65,0.04)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#172033]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Career Fields */}
        <section
          id="career-fields"
          className="mx-auto max-w-[1240px] scroll-mt-8 px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto mb-11 max-w-[680px] text-center">
            <span className="text-xs font-bold tracking-[0.18em] text-[#1760a4]">
              {careerData.section.eyebrow}
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#172033] sm:text-4xl">
              {careerData.section.title}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              {careerData.section.description}
            </p>
          </div>

          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-700">
              Explore career fields
            </p>

            <p className="text-sm text-slate-500">
              {selectedFields.length} selected
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {careerData.careerFields.map((field) => {
              const Icon = iconMap[field.icon] || BriefcaseBusiness;
              const selected = selectedFields.includes(field.id);

              return (
                <button
                  key={field.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleField(field.id)}
                  className={`group relative flex min-h-[245px] flex-col rounded-2xl border bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    selected
                      ? "border-[#1760a4] ring-2 ring-[#1760a4]/15 shadow-lg"
                      : "border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl transition ${
                        selected
                          ? "bg-[#1760a4] text-white"
                          : "bg-blue-50 text-[#1760a4] group-hover:bg-[#1760a4] group-hover:text-white"
                      }`}
                    >
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border transition ${
                        selected
                          ? "border-[#1760a4] bg-[#1760a4] text-white"
                          : "border-slate-300 text-transparent"
                      }`}
                    >
                      <Check size={14} strokeWidth={3} />
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#172033]">
                    {field.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {field.description}
                  </p>

                  <div className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-[#1760a4]">
                    {selected ? "Selected" : "Explore field"}
                    <ArrowRight size={15} />
                  </div>
                </button>
              );
            })}
          </div>

          {error && (
            <p
              role="alert"
              className="mt-5 text-center text-sm font-medium text-red-600"
            >
              {error}
            </p>
          )}

          <div className="mt-10 flex flex-col items-center">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex min-w-[240px] items-center justify-center gap-3 rounded-lg bg-[#1760a4] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#124e87]"
            >
              {careerData.guidance.buttonText}
              <ArrowRight size={18} />
            </button>

            <p className="mt-3 text-xs text-slate-400">
              Select your interests to see your next step
            </p>
          </div>

          {/* Selected Interests Summary */}
          {showSummary && (
            <div className="mt-10 rounded-2xl border border-blue-200 bg-white p-6 shadow-lg sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <span className="text-xs font-bold tracking-[0.15em] text-[#1760a4]">
                    YOUR CAREER INTERESTS
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-[#172033]">
                    Let's explore your options.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    These are the fields you selected and some related courses
                    to discuss with our team.
                  </p>
                </div>

                <span className="w-fit rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                  {selectedCareerFields.length} fields selected
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {selectedCareerFields.map((field) => (
                  <div
                    key={field.id}
                    className="rounded-xl bg-slate-50 p-5"
                  >
                    <h4 className="font-bold text-[#172033]">
                      {field.title}
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {field.courses.map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[480px] text-sm leading-6 text-slate-500">
                  Ready to discuss your interests? Connect with our career
                  guidance team.
                </p>

                <button
                  type="button"
                  onClick={() => setIsPopupOpen(true)}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f28b36] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#df7624]"
                >
                  Get Career Guidance
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Guidance Process */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

              <div>
                <span className="text-xs font-bold tracking-[0.18em] text-[#1760a4]">
                  {careerData.guidance.eyebrow}
                </span>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-[#172033] sm:text-4xl">
                  {careerData.guidance.title}
                </h2>

                <p className="mt-5 leading-7 text-slate-500">
                  {careerData.guidance.description}
                </p>

                <button
                  type="button"
                  onClick={() => setIsPopupOpen(true)}
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-[#1760a4] transition hover:gap-3"
                >
                  Talk to Our Team
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="space-y-4">
                {careerData.guidance.steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-5 rounded-xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-md sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#1760a4]">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="font-bold text-[#172033]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#102b4e] px-5 py-14 text-center sm:px-8">
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your next opportunity starts with the right skills.
            </h2>

            <p className="mt-4 leading-7 text-blue-100/75">
              Explore your interests and take the first step towards building
              your future with Prime Webdynamics.
            </p>

            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#f28b36] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#df7624]"
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
