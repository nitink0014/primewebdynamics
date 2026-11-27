
import { useState } from "react";
import {
  UserRoundPlus,
  BookOpen,
  Target,
  Code,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

import howItWorksData from "../../data/howItWorksData.json";
import AutoPopupForm from "./AutoPopupForm";

const iconMap = {
  UserRoundPlus,
  BookOpen,
  Target,
  Code,
  BriefcaseBusiness,
};

const colorMap = {
  blue: {
    icon: "bg-blue-50 text-blue-600 border-blue-100",
    number: "text-blue-600",
    glow: "rgba(59, 130, 246, 0.09)",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600 border-orange-100",
    number: "text-orange-600",
    glow: "rgba(249, 115, 22, 0.09)",
  },
  purple: {
    icon: "bg-purple-50 text-purple-600 border-purple-100",
    number: "text-purple-600",
    glow: "rgba(168, 85, 247, 0.09)",
  },
  green: {
    icon: "bg-emerald-50 text-emerald-600 border-emerald-100",
    number: "text-emerald-600",
    glow: "rgba(16, 185, 129, 0.09)",
  },
};

function HowItWorksSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 3;
    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-5px)
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
    <section className="relative w-full overflow-hidden bg-[#f5f8ff] px-4 py-14 font-sans sm:px-6 sm:py-16 lg:px-8 lg:py-20">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px]">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold tracking-[1.5px] text-blue-600 shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            YOUR LEARNING JOURNEY
          </span>

          <h2 className="mt-5 text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#10213d]">
            {howItWorksData.title}{" "}
            <span className="text-[#5099fa]">
              {howItWorksData.highlight}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-[#647084] sm:text-base sm:leading-8">
            {howItWorksData.subtitle}
          </p>

        </div>

        {/* Learning Journey Timeline */}
        <div className="relative">

          {/* Desktop Connecting Line */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-[2px] bg-gradient-to-r from-blue-400 via-orange-400 to-emerald-400 lg:block" />

          {/* Mobile Connecting Line */}
          <div className="pointer-events-none absolute bottom-8 left-[31px] top-8 w-[2px] bg-gradient-to-b from-blue-400 via-orange-400 to-emerald-400 lg:hidden" />

          {/* Steps */}
          <div className="grid grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-5 lg:gap-4">

            {howItWorksData.steps.map((step) => {
              const Icon = iconMap[step.icon];
              const colors = colorMap[step.color] || colorMap.blue;

              return (
                <article
                  key={step.id}
                  className="group relative z-10 flex items-start gap-4 lg:flex-col lg:items-center lg:gap-0"
                >

                  {/* Timeline Icon */}
                  <div
                    className={`
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-[20px]
                      border-[5px]
                      border-[#f5f8ff]
                      shadow-[0_5px_16px_rgba(30,64,120,0.08)]
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:shadow-[0_8px_22px_rgba(30,64,120,0.12)]
                      ${colors.icon}
                    `}
                  >
                    {Icon && <Icon size={27} strokeWidth={2} />}
                  </div>

                  {/* Premium Step Card */}
                  <div
                    onMouseMove={handleCardMove}
                    onMouseLeave={handleCardLeave}
                    className="
                      how-step-card
                      relative
                      flex
                      h-[255px]
                      w-full
                      min-w-0
                      flex-col
                      overflow-hidden
                      rounded-[22px]
                      border
                      border-[#e2eaf7]
                      bg-white
                      p-5
                      shadow-[0_5px_20px_rgba(30,64,120,0.035)]
                      transition-[transform,border-color,box-shadow]
                      duration-300
                      ease-out
                      hover:border-[#d5e2f5]
                      hover:shadow-[0_14px_35px_rgba(30,64,120,0.08)]
                      sm:p-6
                      lg:mt-5
                      lg:h-[255px]
                      lg:w-full
                      lg:flex-none
                      lg:items-center
                      lg:text-center
                    "
                  >

                    {/* Cursor Blur Glow */}
                    <div
                      className="
                        how-step-glow
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[22px]
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                      style={{
                        "--step-glow": colors.glow,
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative z-10 flex h-full flex-col">

                      {/* Step Number */}
                      <span
                        className={`
                          text-xs
                          font-extrabold
                          tracking-[2px]
                          ${colors.number}
                        `}
                      >
                        STEP {step.number}
                      </span>

                      {/* Title */}
                      <h3
                        className="
                          mt-3
                          text-lg
                          font-extrabold
                          leading-snug
                          text-[#142443]
                          transition-colors
                          duration-300
                          group-hover:text-[#3478df]
                          sm:text-xl
                        "
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-[1.8] text-[#68768c]">
                        {step.description}
                      </p>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center sm:mt-14">

          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="
              group
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[#397fe0]
              px-7
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_8px_22px_rgba(57,127,224,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#f0783c]
              hover:shadow-[0_10px_25px_rgba(240,120,60,0.20)]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-blue-500
            "
          >
            {howItWorksData.buttonText}

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

      {/* Premium Card Effects */}
      <style>{`
        .how-step-card {
          transform-style: preserve-3d;
          will-change: transform;
        }

        .how-step-glow {
          background: radial-gradient(
            220px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            var(--step-glow),
            transparent 70%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .how-step-card {
            transition: none !important;
          }
        }
      `}</style>

    </section>
  );
}

export default HowItWorksSection;
