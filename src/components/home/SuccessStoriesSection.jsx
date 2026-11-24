
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

import successStoriesData from "../../data/successStoriesData.json";
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
    accent: "bg-blue-500",
    number: "text-blue-100",
  },
  {
    icon: "bg-orange-50 text-orange-600",
    accent: "bg-orange-500",
    number: "text-orange-100",
  },
  {
    icon: "bg-purple-50 text-purple-600",
    accent: "bg-purple-500",
    number: "text-purple-100",
  },
  {
    icon: "bg-emerald-50 text-emerald-600",
    accent: "bg-emerald-500",
    number: "text-emerald-100",
  },
  {
    icon: "bg-sky-50 text-sky-600",
    accent: "bg-sky-500",
    number: "text-sky-100",
  },
  {
    icon: "bg-rose-50 text-rose-600",
    accent: "bg-rose-500",
    number: "text-rose-100",
  },
];

function SuccessStoriesSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f8fd] px-4 py-16 font-sans sm:px-6 sm:py-20 lg:px-8">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1325px]">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-extrabold tracking-[1.2px] text-[#347dc9] shadow-sm">
            <GraduationCap size={16} />
            {successStoriesData.badge}
          </div>

          <h2 className="mt-5 text-[clamp(32px,4vw,54px)] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#102b59]">
            {successStoriesData.title}{" "}
            <span className="text-[#4388ed]">
              {successStoriesData.highlight}
            </span>
          </h2>

          <p className="mt-4 max-w-[680px] text-sm leading-7 text-[#647084] sm:text-base">
            {successStoriesData.subtitle}
          </p>
        </div>

        {/* Career Support Services */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {successStoriesData.supportServices.map((service, index) => {
            const Icon = iconMap[service.icon] || GraduationCap;
            const style = serviceStyles[index % serviceStyles.length];

            return (
              <article
                key={service.id}
                className="group relative flex min-h-[255px] flex-col overflow-hidden rounded-[22px] border border-[#e3eaf4] bg-white p-6 shadow-[0_5px_22px_rgba(16,43,89,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-[#b9d2f2] hover:shadow-[0_14px_32px_rgba(16,43,89,0.09)] sm:p-7"
              >
                {/* Decorative Number */}
                <span
                  className={`pointer-events-none absolute right-6 top-3 text-[48px] font-black tracking-[-2px] ${style.number}`}
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className={`relative flex h-[58px] w-[58px] items-center justify-center rounded-2xl ${style.icon} transition-[background-color,color] duration-300 group-hover:bg-[#102f68] group-hover:text-white`}
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
                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#347dc9]">
                  <CheckCircle2 size={15} />
                  Career Development
                </div>

                {/* Bottom Accent */}
                <div
                  className={`pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-300 group-hover:w-full ${style.accent}`}
                />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-10 overflow-hidden rounded-[26px] bg-[#102b59] px-6 py-9 shadow-[0_15px_35px_rgba(16,43,89,0.13)] sm:px-10 sm:py-10">
          {/* Decorative Glows */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
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
                {successStoriesData.footer.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100/85 sm:text-base">
                {successStoriesData.footer.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-3 rounded-xl bg-[#ff821f] px-7 py-3 text-sm font-bold text-white shadow-[0_7px_20px_rgba(255,130,31,0.2)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ed7011] hover:shadow-[0_10px_25px_rgba(255,130,31,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              {successStoriesData.footer.buttonText}
              <ArrowUpRight size={18} />
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

export default SuccessStoriesSection;
