
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

  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 2.2;
    const rotateX = ((centerY - y) / centerY) * 2.2;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-3px)
    `;
  };

  const handleCardLeave = (event) => {
    event.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#f7f9fc] px-5 py-16 font-sans sm:px-8 lg:py-20">
        {/* Background Accents */}
        <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-[#dceaff]/40 blur-[100px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#e7efff]/40 blur-[100px]" />

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
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                style={{
                  "--card-glow": "rgba(40, 120, 206, 0.08)",
                }}
                className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-[#e1e7ef] bg-white p-7 text-center shadow-[0_5px_20px_rgba(20,36,61,0.035)] transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform hover:border-[#c5d9ef] hover:shadow-[0_14px_35px_rgba(20,36,61,0.08)]"
              >
                {/* Subtle Cursor Glow */}
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(230px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--card-glow), transparent 75%)",
                  }}
                />

                {/* Card Number */}
                <span className="pointer-events-none absolute right-5 top-5 z-0 text-[32px] font-extrabold tracking-[-1px] text-[#edf2f8]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="relative z-10 mx-auto flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: card.iconBackground,
                    color: card.iconColor,
                  }}
                >
                  {getIcon(card.type)}
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-5 text-[18px] font-extrabold tracking-[-0.3px] text-[#172943] transition-colors duration-300 group-hover:text-[#2878ce]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-2 text-[13px] leading-6 text-[#778397]">
                  {card.description}
                </p>

                {/* Main Value */}
                <p className="relative z-10 mt-5 break-words text-[25px] font-extrabold leading-tight tracking-[-0.6px] text-[#172943] sm:text-[28px]">
                  {card.value}
                </p>

                {/* Action Button */}
                {card.type === "callback" ? (
                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="relative z-10 mt-auto flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[13px] font-bold text-white transition-[transform,filter,box-shadow] duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_7px_18px_rgba(20,36,61,0.10)] focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2"
                    style={{ backgroundColor: card.buttonColor }}
                  >
                    {card.buttonText}
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
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
                    className="relative z-10 mt-auto flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[13px] font-bold text-white transition-[transform,filter,box-shadow] duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_7px_18px_rgba(20,36,61,0.10)] focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2"
                    style={{ backgroundColor: card.buttonColor }}
                  >
                    {card.buttonText}
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
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
