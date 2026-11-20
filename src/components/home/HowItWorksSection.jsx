import { useState } from "react";
import {
  UserRoundPlus,
  BookOpen,
  Code,
  BriefcaseBusiness,
} from "lucide-react";

import howItWorksData from "../../data/howItWorksData.json";
import AutoPopupForm from "./AutoPopupForm";

const iconMap = {
  UserRoundPlus,
  BookOpen,
  Code,
  BriefcaseBusiness,
};

const colorMap = {
  blue: "bg-[#4b68f5]",
  orange: "bg-[#ff682d]",
  purple: "bg-[#8239ed]",
  green: "bg-[#009d75]",
};

function HowItWorksSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="w-full bg-white px-5 pb-[60px] pt-[50px] font-sans sm:px-8 lg:px-0">

      <div className="mx-auto w-full max-w-[1400px] lg:w-[90%]">

        {/* Section Heading */}
        <div className="mb-[75px] flex flex-col items-center text-center">

          <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-1.2px] text-[#151b2a] sm:text-[46px] lg:text-[58px]">
            {howItWorksData.title}{" "}
            <span className="text-[#5099fa]">
              {howItWorksData.highlight}
            </span>
          </h2>

          <p className="mt-[8px] text-[15px] font-medium text-[#647084] sm:text-[17px]">
            {howItWorksData.subtitle}
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Connecting Gradient Line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[38px] hidden h-[3px] bg-gradient-to-r from-[#5368f5] via-[#ff682d] to-[#009d75] lg:block" />

          {/* Steps */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

            {howItWorksData.steps.map((step) => {
              const Icon = iconMap[step.icon];

              return (
                <div
                  key={step.id}
                  className="relative z-[1] flex flex-col items-center text-center"
                >

                  {/* Icon Circle */}
                  <div
                    className={`flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full border-[6px] border-[#e5e7eb] text-white ${colorMap[step.color]}`}
                  >
                    {Icon && <Icon size={30} strokeWidth={2} />}
                  </div>

                  {/* Step Number */}
                  <span className="mt-[12px] text-[18px] font-medium leading-none text-[#111827]">
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="mt-[9px] text-[17px] font-bold leading-[1.3] text-[#10213d]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-[10px] max-w-[290px] text-[14px] font-normal leading-[1.65] text-[#647084]">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-[48px] flex justify-center">

          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="flex h-[54px] items-center justify-center gap-2 rounded-[10px] bg-[#5099fa] px-[27px] text-[15px] font-bold text-white shadow-[0_7px_18px_rgba(80,153,250,0.12)] transition-all duration-300 ease-out hover:scale-105 hover:bg-[#ff821f] hover:shadow-[0_10px_22px_rgba(255,130,31,0.28)] active:scale-95"
          >
            {howItWorksData.buttonText}
            <span>→</span>
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

export default HowItWorksSection;