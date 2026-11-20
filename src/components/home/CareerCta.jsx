import React, { useState } from "react";
import content from "../../data/careerCta.json";
import AutoPopupForm from "./AutoPopupForm";

const CareerCta = ({ onBookDemo }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="relative z-0 w-[85.2%] max-w-[1513px] min-h-[245px] mx-auto my-16 rounded-[20px] bg-[#4b6edb] flex flex-col items-center justify-center text-center px-6 py-8 box-border max-md:w-[92%] max-md:min-h-[220px] max-md:my-10 max-md:px-4">

        <h2 className="text-white text-[42px] leading-[1.25] font-extrabold tracking-[0.2px] max-md:text-[clamp(25px,5vw,34px)]">
          {content.title}
        </h2>

        <p className="text-white text-[18px] leading-[1.4] font-normal mt-2 mb-[25px] max-md:text-[15px] max-md:mb-[22px]">
          {content.subtitle}
        </p>

        <button
          type="button"
          onClick={() => setIsPopupOpen(true)}
          className="w-[203px] h-[57px] shrink-0 rounded-[11px] bg-[#ff8a24] text-white text-[16px] font-bold hover:bg-[#f47d16] hover:-translate-y-[1px] transition-all duration-200"
        >
          {content.buttonText}
        </button>

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