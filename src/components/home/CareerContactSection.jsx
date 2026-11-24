
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  CalendarDays,
  ArrowUpRight,
  Headphones,
} from "lucide-react";

import contactData from "../../data/careerContactData.json";
import AutoPopupForm from "./AutoPopupForm";

function CareerContactSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      case "call":
        return <Phone size={23} strokeWidth={2} />;

      case "whatsapp":
        return (
          <span className="relative flex items-center justify-center">
            <MessageCircle size={24} strokeWidth={2} />
            <Phone size={10} strokeWidth={2.5} className="absolute" />
          </span>
        );

      case "callback":
        return <CalendarDays size={23} strokeWidth={2} />;

      default:
        return <Headphones size={23} />;
    }
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#f7f9fc] px-5 py-16 font-sans sm:px-8 lg:py-20">
        {/* Background Accents */}
        <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-[#dceaff]/70 blur-[100px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#e7efff]/70 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-[1250px]">

          {/* Section Heading */}
          <div className="mx-auto max-w-[750px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5e5fb] bg-white px-4 py-2 text-[12px] font-extrabold tracking-[1.3px] text-[#2878ce] shadow-[0_4px_15px_rgba(40,120,206,0.05)]">
              <Headphones size={16} />
              LET'S CONNECT
            </div>

            <h2 className="mt-5 text-[30px] font-extrabold leading-[1.15] tracking-[-1px] text-[#14243d] sm:text-[40px] lg:text-[48px]">
              {contactData.heading.firstLine}
              <br className="hidden sm:block" />
              <span className="text-[#2878ce]">
                {contactData.heading.secondLine}
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] text-[14px] leading-7 text-[#68778c] sm:text-[16px]">
              {contactData.heading.subtitle}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {contactData.cards.map((card, index) => (
              <article
                key={card.id}
                className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-[#e1e7ef] bg-white p-7 text-center shadow-[0_5px_20px_rgba(20,36,61,0.035)] transition-[border-color,box-shadow] duration-300 hover:border-[#b8d5f5] hover:shadow-[0_14px_35px_rgba(20,36,61,0.09)]"
              >
                {/* Card Number */}
                <span className="absolute right-5 top-5 text-[32px] font-extrabold tracking-[-1px] text-[#edf2f8]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="mx-auto flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: card.iconBackground,
                    color: card.iconColor,
                  }}
                >
                  {getIcon(card.type)}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[18px] font-extrabold tracking-[-0.3px] text-[#172943]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[13px] leading-6 text-[#778397]">
                  {card.description}
                </p>

                {/* Main Value */}
                <p className="mt-5 break-words text-[25px] font-extrabold leading-tight tracking-[-0.6px] text-[#172943] sm:text-[28px]">
                  {card.value}
                </p>

                {/* Action Button */}
                {card.type === "callback" ? (
                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="mt-auto flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[13px] font-bold text-white transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_7px_18px_rgba(20,36,61,0.12)] focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2"
                    style={{ backgroundColor: card.buttonColor }}
                  >
                    {card.buttonText}
                    <ArrowUpRight size={17} />
                  </button>
                ) : (
                  <a
                    href={card.link}
                    target={
                      card.type === "whatsapp" ? "_blank" : undefined
                    }
                    rel={
                      card.type === "whatsapp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-auto flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[13px] font-bold text-white transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_7px_18px_rgba(20,36,61,0.12)] focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2"
                    style={{ backgroundColor: card.buttonColor }}
                  >
                    {card.buttonText}
                    <ArrowUpRight size={17} />
                  </a>
                )}

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#2878ce] transition-[width] duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Callback Popup */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}

export default CareerContactSection;
