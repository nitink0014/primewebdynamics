
import { useState } from "react";
import {
  BookOpen,
  Code,
  FolderKanban,
  ClipboardCheck,
  ArrowRight,
  GraduationCap,
  Monitor,
  Clock3,
  Languages,
  UsersRound,
} from "lucide-react";

import liveClassesData from "../../data/liveClassesData.json";
import AutoPopupForm from "./AutoPopupForm";

const iconMap = {
  BookOpen,
  Code,
  FolderKanban,
  ClipboardCheck,
};

const featureIcons = [
  Monitor,
  Clock3,
  Languages,
  UsersRound,
];

function LiveClassesSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="w-full bg-white px-5 py-16 font-sans sm:px-8 lg:px-0">
      <div className="mx-auto w-full max-w-[1450px] lg:w-[88%]">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-center text-center">

          {/* Badge */}
          <div className="flex items-center gap-2 rounded-full border border-[#cfe2ff] bg-[#f0f6ff] px-4 py-2 text-[12px] font-bold tracking-[1px] text-[#286fc0] sm:text-[13px]">
            <span className="h-2 w-2 rounded-full bg-[#ff821f]" />
            {liveClassesData.badge}
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-[32px] font-extrabold leading-tight tracking-[-1px] text-[#102b59] sm:text-[43px] lg:text-[52px]">
            {liveClassesData.title}{" "}
            <span className="text-[#5099fa]">
              {liveClassesData.highlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[14px] leading-7 text-[#647084] sm:text-[16px]">
            {liveClassesData.subtitle}
          </p>
        </div>

        {/* Learning Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {liveClassesData.steps.map((step, index) => {
            const Icon = iconMap[step.icon] || BookOpen;

            return (
              <div
                key={step.id}
                className="group relative overflow-hidden rounded-2xl border border-[#e2eaf5] bg-white p-6 shadow-[0_8px_25px_rgba(16,43,89,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#a9cbf5] hover:shadow-[0_15px_35px_rgba(16,43,89,0.11)]"
              >
                {/* Step Number */}
                <div className="absolute right-5 top-4 text-[34px] font-extrabold text-[#edf3fc] transition-colors group-hover:text-[#dceaff]">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#edf5ff] text-[#347dc9] transition-all duration-300 group-hover:bg-[#347dc9] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-[21px] font-extrabold text-[#102b59]">
                  {step.title}
                </h3>

                <p className="mt-3 min-h-[88px] text-[13px] leading-[1.8] text-[#647084]">
                  {step.description}
                </p>

                {/* Frequency */}
                <div className="mt-5 inline-flex items-center rounded-full bg-[#fff3e9] px-3 py-2 text-[11px] font-bold text-[#ed791f]">
                  {step.frequency}
                </div>

                {/* Bottom Accent */}
              
              </div>
            );
          })}
        </div>

        {/* Training Features */}
        <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl bg-[#102f68] p-5 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
          {liveClassesData.features.map((feature, index) => {
            const Icon = featureIcons[index] || GraduationCap;

            return (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl px-2 py-3 text-white"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#ff9a48]">
                  <Icon size={20} />
                </div>

                <p className="text-[12px] font-semibold leading-5 sm:text-[13px]">
                  {feature}
                </p>
              </div>
            );
          })}
        </div>

        {/* Free Demo CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#e3ebf7] bg-[#f3f7ff] px-6 py-8 text-center sm:px-10 lg:flex-row lg:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 text-[#ed791f] lg:justify-start">
              <GraduationCap size={21} />
              <span className="text-[12px] font-extrabold uppercase tracking-[1px]">
                Start Your Journey
              </span>
            </div>

            <h3 className="mt-2 text-[21px] font-extrabold text-[#102b59] sm:text-[25px]">
              {liveClassesData.cta.title}
            </h3>

            <p className="mt-2 max-w-[650px] text-[13px] leading-6 text-[#647084] sm:text-[14px]">
              {liveClassesData.cta.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex h-[48px] shrink-0 items-center justify-center gap-2 rounded-[9px] bg-[#ff821f] px-6 text-[13px] font-bold text-white shadow-[0_6px_18px_rgba(255,130,31,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ed7011] hover:shadow-[0_10px_22px_rgba(255,130,31,0.3)] active:scale-95"
          >
            {liveClassesData.cta.buttonText}
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* Existing Registration Popup */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}

export default LiveClassesSection;
