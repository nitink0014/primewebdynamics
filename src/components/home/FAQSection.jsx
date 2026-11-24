
import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

import faqData from "../../data/faqData.json";

function FAQSection() {
  // First FAQ default open
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const titleParts = faqData.title.split(faqData.highlightTitle);

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f9fc] px-5 py-16 font-sans sm:px-8 lg:py-20">
      {/* Background Accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-[#dceaff]/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#e7efff]/70 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-[950px]">

        {/* Section Heading */}
        <div className="mb-11 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d5e5fb] bg-white px-4 py-2 text-[12px] font-extrabold tracking-[1.2px] text-[#2878ce] shadow-[0_4px_15px_rgba(40,120,206,0.06)]">
            <MessageCircleQuestion size={16} />
            {faqData.badge}
          </div>

          <h2 className="mx-auto mt-5 max-w-[780px] text-[30px] font-extrabold leading-[1.15] tracking-[-1px] text-[#14243d] sm:text-[40px] lg:text-[48px]">
            {titleParts[0]}
            <span className="text-[#2878ce]">
              {faqData.highlightTitle}
            </span>
            {titleParts.slice(1).join(faqData.highlightTitle)}
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-7 text-[#68778c] sm:text-[16px]">
            {faqData.subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqData.faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const answerId = `faq-answer-${faq.id}`;

            return (
              <article
                key={faq.id}
                className={`overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-300 ${
                  isOpen
                    ? "border-[#a9ccef] shadow-[0_8px_28px_rgba(40,120,206,0.08)]"
                    : "border-[#e5eaf1] shadow-[0_3px_12px_rgba(20,35,65,0.025)] hover:border-[#c5d8ee]"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="group flex min-h-[76px] w-full items-center justify-between gap-4 px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2878ce] sm:px-7"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span
                      className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[12px] font-extrabold sm:flex ${
                        isOpen
                          ? "bg-[#2878ce] text-white"
                          : "bg-[#edf4fc] text-[#7892b2]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-[14px] font-bold leading-[1.55] transition-colors duration-200 sm:text-[17px] ${
                        isOpen
                          ? "text-[#2878ce]"
                          : "text-[#192b45] group-hover:text-[#2878ce]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-[background-color,color] duration-300 ${
                      isOpen
                        ? "bg-[#2878ce] text-white"
                        : "bg-[#f0f5fb] text-[#506783] group-hover:bg-[#e3effd]"
                    }`}
                  >
                    <ChevronDown
                      size={19}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-5 border-l-2 border-[#d7e8fb] pb-6 pl-4 pr-5 sm:ml-[76px] sm:pl-5 sm:pr-7">
                      <p className="text-[13px] leading-[1.85] text-[#65758b] sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
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
