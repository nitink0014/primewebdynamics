
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import faqData from "../../data/faqData.json";

function FAQSection() {
  // First FAQ default open
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <section className="w-full bg-[#f7f9fe] px-5 pb-[65px] pt-[10px] font-sans sm:px-8">

      <div className="mx-auto w-full max-w-[1076px]">

        {/* Section Heading */}
        <div className="mb-[36px] text-center">

          {/* Badge */}
          <div className="inline-flex h-[41px] items-center rounded-full bg-[#dceaff] px-[18px] text-[15px] font-bold text-[#347fff] shadow-[0_8px_25px_rgba(52,127,255,0.08)]">
            {faqData.badge}
          </div>

          {/* Title */}
          <h2 className="mt-[19px] text-[34px] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#151b2a] sm:text-[48px] lg:text-[64px]">
            {faqData.title.replace(faqData.highlightTitle, "")}
            <span className="text-[#5995ff]">
              {faqData.highlightTitle}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-[12px] text-[15px] font-medium text-[#647084] sm:text-[18px]">
            {faqData.subtitle}
          </p>

        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-[14px]">

          {faqData.faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={faq.id}
                className="overflow-hidden rounded-[15px] border border-[#edf0f6] bg-white shadow-[0_3px_12px_rgba(20,35,65,0.035)]"
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="group flex min-h-[74px] w-full items-center justify-between gap-4 px-[20px] py-[17px] text-left sm:px-[25px]"
                >

                  <span
                    className={`text-[15px] font-bold leading-[1.4] transition-colors duration-200 sm:text-[18px] ${
                      isOpen
                        ? "text-[#4775ff]"
                        : "text-[#101b35] group-hover:text-[#4775ff]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#101f43] text-white"
                        : "bg-[#f7f9fe] text-[#101f43]"
                    }`}
                  >
                    <ChevronDown
                      size={20}
                      strokeWidth={3}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>

                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-[20px] text-[14px] leading-[1.7] text-[#34445e] sm:px-[25px] sm:text-[16px] ${
                        isOpen
                          ? "pb-[22px] pt-0"
                          : "pb-0 pt-0"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQSection;
