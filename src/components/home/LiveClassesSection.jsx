
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
  Sparkles,
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

const stepStyles = [
  {
    color: "text-blue-600",
    iconBg: "bg-blue-50",
    border: "hover:border-blue-300",
    number: "text-blue-100",
    accent: "bg-blue-500",
  },
  {
    color: "text-orange-600",
    iconBg: "bg-orange-50",
    border: "hover:border-orange-300",
    number: "text-orange-100",
    accent: "bg-orange-500",
  },
  {
    color: "text-purple-600",
    iconBg: "bg-purple-50",
    border: "hover:border-purple-300",
    number: "text-purple-100",
    accent: "bg-purple-500",
  },
  {
    color: "text-emerald-600",
    iconBg: "bg-emerald-50",
    border: "hover:border-emerald-300",
    number: "text-emerald-100",
    accent: "bg-emerald-500",
  },
];

function LiveClassesSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-14 font-sans sm:px-6 sm:py-16 lg:px-8 lg:py-20">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px]">

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Left Introduction */}
          <div className="max-w-xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold tracking-[1.3px] text-blue-700 sm:text-sm">
              <Sparkles size={15} />
              {liveClassesData.badge}
            </div>

            <h2 className="mt-6 text-[clamp(32px,4vw,53px)] font-extrabold leading-[1.13] tracking-[-1.6px] text-[#10213d]">
              {liveClassesData.title}
              <span className="mt-1 block text-[#4388ed]">
                {liveClassesData.highlight}
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-[1.9] text-[#68768c] sm:text-base">
              {liveClassesData.subtitle}
            </p>

            {/* Learning Highlights */}
            <div className="mt-8 space-y-4">
              {[
                "Understand concepts step by step",
                "Practise with hands-on activities",
                "Apply learning through real projects",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eaf2ff] text-[#4388ed]">
                    <span className="text-xs font-extrabold">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#35445e]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102f68] text-white">
                <GraduationCap size={23} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#10213d]">
                  Learn. Practise. Build.
                </p>
                <p className="mt-1 text-xs text-[#7b8799]">
                  A practical approach to skill development
                </p>
              </div>
            </div>
          </div>

          {/* Right Learning Cards */}
          <div className="relative">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold tracking-[1.5px] text-[#4388ed]">
                  OUR LEARNING PROCESS
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-[#10213d] sm:text-2xl">
                  From Learning to Building
                </h3>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#f0f5ff] text-[#4388ed] sm:flex">
                <BookOpen size={22} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {liveClassesData.steps.map((step, index) => {
                const Icon = iconMap[step.icon] || BookOpen;
                const style = stepStyles[index % stepStyles.length];

                return (
                  <article
                    key={step.id}
                    className={`group relative flex min-h-[235px] flex-col overflow-hidden rounded-[22px] border border-[#e7edf6] bg-white p-6 shadow-[0_5px_22px_rgba(16,43,89,0.045)] transition-[border-color,box-shadow] duration-300 ${style.border} hover:shadow-[0_14px_32px_rgba(16,43,89,0.09)]`}
                  >
                    {/* Decorative Number */}
                    <span className={`pointer-events-none absolute right-5 top-3 text-[46px] font-black tracking-[-2px] ${style.number}`}>
                      {step.number}
                    </span>

                    {/* Icon */}
                    <div className={`relative flex h-[54px] w-[54px] items-center justify-center rounded-2xl ${style.iconBg} ${style.color} transition-[background-color,color] duration-300 group-hover:bg-[#102f68] group-hover:text-white`}>
                      <Icon size={25} strokeWidth={1.9} />
                    </div>

                    {/* Content */}
                    <h3 className="relative mt-6 text-xl font-extrabold text-[#142443]">
                      {step.title}
                    </h3>

                    <p className="relative mt-3 text-[13px] leading-[1.8] text-[#68768c]">
                      {step.description}
                    </p>

                    {/* Frequency */}
                    <div className="mt-auto pt-5">
                      <span className={`inline-flex items-center rounded-full bg-[#f5f7fb] px-3 py-2 text-[11px] font-bold ${style.color}`}>
                        {step.frequency}
                      </span>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-300 group-hover:w-full ${style.accent}`} />
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Training Features Strip */}
        <div className="mt-14 overflow-hidden rounded-[24px] bg-[#102b59] shadow-[0_15px_35px_rgba(16,43,89,0.12)] sm:mt-16">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {liveClassesData.features.map((feature, index) => {
              const Icon = featureIcons[index] || GraduationCap;

              return (
                <div
                  key={feature}
                  className="group flex items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-white/[0.06] sm:px-6 sm:py-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-[#ff9a48] transition-colors duration-300 group-hover:border-orange-300/30 group-hover:bg-orange-400/10">
                    <Icon size={21} />
                  </div>

                  <p className="text-[12px] font-semibold leading-5 text-white/90 sm:text-[13px]">
                    {feature}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-8 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[24px] border border-orange-100 bg-[#fff8f2] px-6 py-8 sm:px-9 lg:flex-row lg:py-9">

          <div className="pointer-events-none absolute -right-12 -top-20 h-48 w-48 rounded-full bg-orange-200/30 blur-3xl" />

          <div className="relative text-center lg:text-left">
            <div className="flex items-center justify-center gap-2 text-[#e87932] lg:justify-start">
              <GraduationCap size={21} />
              <span className="text-xs font-extrabold uppercase tracking-[1.3px]">
                Start Your Journey
              </span>
            </div>

            <h3 className="mt-3 text-xl font-extrabold text-[#10213d] sm:text-2xl">
              {liveClassesData.cta.title}
            </h3>

            <p className="mt-2 max-w-[650px] text-sm leading-7 text-[#68768c]">
              {liveClassesData.cta.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="group relative z-10 inline-flex min-h-[50px] shrink-0 items-center justify-center gap-3 rounded-xl bg-[#f07832] px-6 py-3 text-sm font-bold text-white shadow-[0_7px_20px_rgba(240,120,50,0.20)] transition-[background-color,box-shadow] duration-300 hover:bg-[#d96523] hover:shadow-[0_10px_26px_rgba(240,120,50,0.30)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
          >
            {liveClassesData.cta.buttonText}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Registration Popup */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}

export default LiveClassesSection;
