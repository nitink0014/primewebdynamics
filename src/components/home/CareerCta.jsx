
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import content from "../../data/careerCta.json";
import AutoPopupForm from "./AutoPopupForm";

const CareerCta = ({ onBookDemo }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    if (onBookDemo) {
      onBookDemo();
      return;
    }

    setIsPopupOpen(true);
  };

  return (
    <>
      <section
        className="
          group relative z-0 mx-auto
          my-16 w-[92%] max-w-[1250px]
          overflow-hidden rounded-[24px]
          border border-white/15
          bg-gradient-to-br
          from-[#174c91] via-[#2867b7] to-[#17447f]
          px-6 py-12 text-center
          shadow-[0_20px_55px_rgba(23,76,145,0.16)]
          transition-shadow duration-500
          hover:shadow-[0_24px_65px_rgba(23,76,145,0.20)]
          sm:px-10 sm:py-14
          lg:my-20 lg:px-16 lg:py-16
        "
      >

        {/* Soft Blue Decoration */}
        <div
          className="
            pointer-events-none absolute
            -left-24 -top-32 h-72 w-72
            rounded-full bg-[#60a5fa]/15
            blur-[85px]
          "
        />

        {/* Soft Orange Decoration */}
        <div
          className="
            pointer-events-none absolute
            -bottom-40 -right-20 h-80 w-80
            rounded-full bg-[#f59e0b]/10
            blur-[90px]
          "
        />

        {/* Subtle Grid Pattern */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-[0.045]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:35px_35px]
          "
        />

        {/* Content */}
        <div className="relative mx-auto flex max-w-[850px] flex-col items-center">

          {/* Eyebrow */}
          <div
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/20
              bg-white/[0.08] px-4 py-2
              text-[11px] font-extrabold
              tracking-[1.5px] text-[#e6f2ff]
              backdrop-blur-sm
              transition-colors duration-300
              group-hover:bg-white/[0.11]
            "
          >
            <Sparkles size={14} />
            YOUR NEXT STEP STARTS HERE
          </div>

          {/* Heading */}
          <h2
            className="
              mt-6 text-[30px] font-extrabold
              leading-[1.2] tracking-[-0.8px]
              text-white
              sm:text-[40px] lg:text-[48px]
            "
          >
            {content.title}
          </h2>

          {/* Subtitle */}
          <p
            className="
              mt-4 max-w-[650px]
              text-[14px] leading-[1.8]
              text-[#e0edff]
              sm:text-[16px]
            "
          >
            {content.subtitle}
          </p>

          {/* CTA Button */}
          <button
            type="button"
            onClick={handleOpenPopup}
            className="
              group/button mt-8
              inline-flex min-h-[54px]
              min-w-[205px]
              items-center justify-center gap-3
              rounded-xl bg-[#ff8a24]
              px-7 py-3.5
              text-[14px] font-extrabold text-white
              shadow-[0_8px_25px_rgba(255,138,36,0.20)]
              transition-all duration-300 ease-out
              hover:-translate-y-0.5
              hover:bg-[#f47d16]
              hover:shadow-[0_12px_30px_rgba(255,138,36,0.28)]
              active:translate-y-0
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
            "
          >
            {content.buttonText}

            <ArrowRight
              size={18}
              className="
                transition-transform duration-300
                group-hover/button:translate-x-1
              "
            />
          </button>
        </div>
      </section>

      {/* Existing Registration Popup */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
};

export default CareerCta;
