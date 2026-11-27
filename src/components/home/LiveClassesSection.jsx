
import { useState } from "react";
import {
  BookOpen,
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
  Code: ClipboardCheck,
  FolderKanban: Monitor,
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
    border: "hover:border-blue-200",
    number: "text-blue-100",
    glow: "rgba(67, 136, 237, 0.10)",
  },
  {
    color: "text-orange-600",
    iconBg: "bg-orange-50",
    border: "hover:border-orange-200",
    number: "text-orange-100",
    glow: "rgba(240, 120, 50, 0.10)",
  },
  {
    color: "text-purple-600",
    iconBg: "bg-purple-50",
    border: "hover:border-purple-200",
    number: "text-purple-100",
    glow: "rgba(139, 92, 246, 0.10)",
  },
  {
    color: "text-emerald-600",
    iconBg: "bg-emerald-50",
    border: "hover:border-emerald-200",
    number: "text-emerald-100",
    glow: "rgba(16, 185, 129, 0.10)",
  },
];

function LiveClassesSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardMove = (event) => {
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

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-14 font-sans sm:px-6 sm:py-16 lg:px-8 lg:py-20">

      {/* Soft Background Decorations */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-orange-100/25 blur-3xl" />

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

            {/* Learning Approach */}
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

            {/* Learning Process Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {liveClassesData.steps.map((step, index) => {
                const Icon = iconMap[step.icon] || BookOpen;
                const style = stepStyles[index % stepStyles.length];

                return (
                  <article
                    key={step.id}
                    onMouseMove={handleCardMove}
                    onMouseLeave={handleCardLeave}
                    style={{
                      "--card-glow": style.glow,
                    }}
                    className={`
                      group relative flex min-h-[235px] flex-col
                      overflow-hidden rounded-[22px]
                      border border-[#e7edf6]
                      bg-white p-6
                      shadow-[0_5px_22px_rgba(16,43,89,0.045)]
                      transition-[transform,border-color,box-shadow]
                      duration-300 ease-out
                      will-change-transform
                      ${style.border}
                      hover:shadow-[0_14px_32px_rgba(16,43,89,0.08)]
                    `}
                  >

                    {/* Cursor Following Glow */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(230px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--card-glow), transparent 75%)",
                      }}
                    />

                    {/* Decorative Number */}
                    <span
                      className={`
                        pointer-events-none absolute right-5 top-3
                        text-[46px] font-black tracking-[-2px]
                        ${style.number}
                      `}
                    >
                      {step.number}
                    </span>

                    {/* Icon */}
                    <div
                      className={`
                        relative flex h-[54px] w-[54px]
                        items-center justify-center
                        rounded-2xl
                        ${style.iconBg}
                        ${style.color}
                        transition-all duration-300
                        group-hover:scale-[1.04]
                      `}
                    >
                      <Icon size={25} strokeWidth={1.9} />
                    </div>

                    {/* Card Content */}
                    <h3 className="relative mt-6 text-xl font-extrabold text-[#142443]">
                      {step.title}
                    </h3>

                    <p className="relative mt-3 text-[13px] leading-[1.8] text-[#68768c]">
                      {step.description}
                    </p>

                    {/* Frequency */}
                    <div className="relative mt-auto pt-5">
                      <span
                        className={`
                          inline-flex items-center rounded-full
                          bg-[#f5f7fb] px-3 py-2
                          text-[11px] font-bold
                          ${style.color}
                        `}
                      >
                        {step.frequency}
                      </span>
                    </div>

                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Training Features Strip */}
        <div className="mt-14 overflow-hidden rounded-[24px] bg-[#102b59] shadow-[0_15px_35px_rgba(16,43,89,0.10)] sm:mt-16">

          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">

            {liveClassesData.features.map((feature, index) => {
              const Icon = featureIcons[index] || GraduationCap;

              return (
                <div
                  key={feature}
                  className="
                    group flex items-center gap-4
                    px-5 py-5
                    transition-colors duration-300
                    hover:bg-white/[0.04]
                    sm:px-6 sm:py-6
                  "
                >

                  <div
                    className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl
                      border border-white/10
                      bg-white/[0.06]
                      text-[#ff9a48]
                      transition-all duration-300
                      group-hover:bg-white/[0.10]
                    "
                  >
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

          {/* Soft CTA Decoration */}
          <div className="pointer-events-none absolute -right-12 -top-20 h-48 w-48 rounded-full bg-orange-200/25 blur-3xl" />

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

          {/* CTA Button */}
          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="
              group relative z-10
              inline-flex min-h-[50px] shrink-0
              items-center justify-center gap-3
              rounded-xl bg-[#f07832]
              px-6 py-3
              text-sm font-bold text-white
              shadow-[0_7px_20px_rgba(240,120,50,0.18)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#d96523]
              hover:shadow-[0_10px_26px_rgba(240,120,50,0.24)]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-orange-500
            "
          >
            {liveClassesData.cta.buttonText}

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
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
