
import { useState } from "react";

import {
  FileUser,
  MessagesSquare,
  FolderGit2,
  Brain,
  BriefcaseBusiness,
  UsersRound,
  ArrowUpRight,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

import careerDevelopmentData from "../../data/careerDevelopmentData.json";
import AutoPopupForm from "./AutoPopupForm";

const iconMap = {
  FileUser,
  MessagesSquare,
  FolderGit2,
  Brain,
  BriefcaseBusiness,
  UsersRound,
};

const serviceStyles = [
  {
    icon: "bg-blue-50 text-blue-600",
    number: "text-blue-100",
    glow: "rgba(67, 136, 237, 0.10)",
  },
  {
    icon: "bg-orange-50 text-orange-600",
    number: "text-orange-100",
    glow: "rgba(240, 120, 50, 0.10)",
  },
  {
    icon: "bg-purple-50 text-purple-600",
    number: "text-purple-100",
    glow: "rgba(139, 92, 246, 0.10)",
  },
  {
    icon: "bg-emerald-50 text-emerald-600",
    number: "text-emerald-100",
    glow: "rgba(16, 185, 129, 0.10)",
  },
  {
    icon: "bg-sky-50 text-sky-600",
    number: "text-sky-100",
    glow: "rgba(14, 165, 233, 0.10)",
  },
  {
    icon: "bg-rose-50 text-rose-600",
    number: "text-rose-100",
    glow: "rgba(244, 63, 94, 0.10)",
  },
];

function CareerDevelopment() {
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
    <section className="relative w-full overflow-hidden bg-[#f5f8fd] px-4 py-16 font-sans sm:px-6 sm:py-20 lg:px-8">

      {/* Soft Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/35 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-orange-100/25 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1325px]">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-center text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-extrabold tracking-[1.2px] text-[#347dc9] shadow-sm">
            <GraduationCap size={16} />
            {careerDevelopmentData.badge}
          </div>

          <h2 className="mt-5 text-[clamp(32px,4vw,54px)] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#102b59]">
            {careerDevelopmentData.title}{" "}

            <span className="text-[#4388ed]">
              {careerDevelopmentData.highlight}
            </span>
          </h2>

          <p className="mt-4 max-w-[680px] text-sm leading-7 text-[#647084] sm:text-base">
            {careerDevelopmentData.subtitle}
          </p>
        </div>

        {/* Career Support Services */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {careerDevelopmentData.supportServices.map((service, index) => {
            const Icon = iconMap[service.icon] || GraduationCap;
            const style = serviceStyles[index % serviceStyles.length];

            return (
              <article
                key={service.id}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                style={{
                  "--card-glow": style.glow,
                }}
                className="
                  group relative flex min-h-[255px]
                  flex-col overflow-hidden
                  rounded-[22px]
                  border border-[#e5edf6]
                  bg-white p-6
                  shadow-[0_5px_22px_rgba(16,43,89,0.04)]
                  transition-[transform,border-color,box-shadow]
                  duration-300 ease-out
                  will-change-transform
                  hover:border-[#cbdff5]
                  hover:shadow-[0_14px_32px_rgba(16,43,89,0.075)]
                  sm:p-7
                "
              >

                {/* Cursor Following Glow */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                  style={{
                    background:
                      "radial-gradient(230px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--card-glow), transparent 75%)",
                  }}
                />

                {/* Decorative Number */}
                <span
                  className={`
                    pointer-events-none absolute right-6 top-3
                    text-[48px] font-black tracking-[-2px]
                    ${style.number}
                  `}
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className={`
                    relative flex h-[58px] w-[58px]
                    items-center justify-center
                    rounded-2xl
                    ${style.icon}
                    transition-transform duration-300
                    group-hover:scale-[1.04]
                  `}
                >
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="relative mt-6 text-xl font-extrabold text-[#102b59]">
                  {service.title}
                </h3>

                <p className="relative mt-3 flex-1 text-[13px] leading-[1.85] text-[#647084] sm:text-sm">
                  {service.description}
                </p>

                {/* Bottom Label */}
                <div className="relative mt-5 flex items-center gap-2 text-xs font-bold text-[#347dc9]">
                  <CheckCircle2 size={15} />
                  Career Development
                </div>

              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-10 overflow-hidden rounded-[26px] bg-[#102b59] px-6 py-9 shadow-[0_15px_35px_rgba(16,43,89,0.10)] sm:px-10 sm:py-10">

          {/* Soft CTA Decorations */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-400/12 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-orange-400/10 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">

            <div className="max-w-2xl">

              <div className="flex items-center justify-center gap-2 text-[#ff9a48] lg:justify-start">
                <GraduationCap size={22} />

                <span className="text-xs font-extrabold uppercase tracking-[1.3px]">
                  Career Starts Here
                </span>
              </div>

              <h3 className="mt-3 text-[22px] font-extrabold leading-tight text-white sm:text-[28px]">
                {careerDevelopmentData.footer.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100/85 sm:text-base">
                {careerDevelopmentData.footer.description}
              </p>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="
                group inline-flex min-h-[50px]
                shrink-0 items-center justify-center gap-3
                rounded-xl bg-[#ff821f]
                px-7 py-3
                text-sm font-bold text-white
                shadow-[0_7px_20px_rgba(255,130,31,0.18)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#ed7011]
                hover:shadow-[0_10px_25px_rgba(255,130,31,0.25)]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-orange-400
              "
            >
              {careerDevelopmentData.footer.buttonText}

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
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

export default CareerDevelopment;
