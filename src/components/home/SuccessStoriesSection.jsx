
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

function SuccessStoriesSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="w-full bg-[#f5f8fd] px-5 py-16 font-sans sm:px-8 lg:px-0">
      <div className="mx-auto w-full max-w-[1325px] lg:w-[88%]">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 rounded-full border border-[#cfe2ff] bg-[#edf5ff] px-4 py-2 text-[12px] font-bold tracking-[1px] text-[#347dc9]">
            <GraduationCap size={15} />
            {successStoriesData.badge}
          </div>

          <h2 className="mt-5 text-[34px] font-extrabold leading-[1.15] tracking-[-1.2px] text-[#102b59] sm:text-[46px] lg:text-[54px]">
            {successStoriesData.title}{" "}
            <span className="text-[#5099fa]">
              {successStoriesData.highlight}
            </span>
          </h2>

          <p className="mt-3 max-w-[680px] text-[14px] font-medium leading-7 text-[#647084] sm:text-[16px]">
            {successStoriesData.subtitle}
          </p>
        </div>

        {/* Career Support Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {successStoriesData.supportServices.map((service) => {
            const Icon = iconMap[service.icon] || GraduationCap;

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl border border-[#e0e8f3] bg-white p-6 shadow-[0_8px_25px_rgba(16,43,89,0.045)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b8d3f5] hover:shadow-[0_16px_35px_rgba(16,43,89,0.10)]"
              >
                <span className="absolute right-5 top-4 text-[38px] font-extrabold text-[#edf3fb] transition-colors duration-300 group-hover:text-[#e0edff]">
                  {service.number}
                </span>

                <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[#edf5ff] text-[#347dc9] transition-all duration-300 group-hover:bg-[#347dc9] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-[19px] font-extrabold text-[#102b59] sm:text-[20px]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[76px] text-[13px] leading-[1.85] text-[#647084] sm:text-[14px]">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#ff821f] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-9 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#102f68] px-6 py-8 text-center sm:px-10 lg:flex-row lg:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 text-[#ff9a48] lg:justify-start">
              <GraduationCap size={21} />
              <span className="text-[12px] font-bold uppercase tracking-[1px]">
                Career Starts Here
              </span>
            </div>

            <h3 className="mt-2 text-[21px] font-extrabold text-white sm:text-[25px]">
              {successStoriesData.footer.title}
            </h3>

            <p className="mt-2 max-w-[650px] text-[13px] leading-6 text-blue-100 sm:text-[14px]">
              {successStoriesData.footer.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex h-[48px] shrink-0 items-center justify-center gap-2 rounded-[9px] bg-[#ff821f] px-6 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ed7011] hover:shadow-[0_8px_20px_rgba(255,130,31,0.25)] active:scale-95"
          >
            {successStoriesData.footer.buttonText}
            <ArrowUpRight size={17} />
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

export default SuccessStoriesSection;
