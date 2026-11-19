
import {
  Phone,
  MessageCircle,
  CalendarDays
} from "lucide-react";

import contactData from "../../data/careerContactData.json";

function CareerContactSection() {
  const getIcon = (type) => {
    switch (type) {
      case "call":
        return <Phone size={20} fill="currentColor" strokeWidth={2.5} />;

      case "whatsapp":
        return (
          <span className="relative flex items-center justify-center">
            <MessageCircle size={22} strokeWidth={2} />
            <Phone size={9} strokeWidth={2.5} className="absolute" />
          </span>
        );

      case "callback":
        return <CalendarDays size={23} strokeWidth={2} />;

      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#f1f3f6] px-5 pb-[30px] pt-[20px] font-sans sm:px-8">

      <div className="mx-auto w-full max-w-[1280px]">

        {/* Section Heading */}
        <div className="text-center">

          <h2 className="text-[31px] font-extrabold leading-[1.05] tracking-[-1px] text-[#151b2a] sm:text-[42px] lg:text-[54px]">
            {contactData.heading.firstLine}
            <br />
            <span className="text-[#5995ff]">
              {contactData.heading.secondLine}
            </span>
          </h2>

          <p className="mt-[9px] text-[13px] font-medium text-[#647084] sm:text-[15px]">
            {contactData.heading.subtitle}
          </p>

        </div>

        {/* Contact Cards */}
        <div className="mt-[60px] grid grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-3">

          {contactData.cards.map((card) => (
            <article
              key={card.id}
              className="flex min-h-[255px] flex-col items-center rounded-[15px] border border-[#d0d5dd] px-[16px] pb-[18px] pt-[18px]"
            >

              {/* Icon */}
              <div
                className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: card.iconBackground,
                  color: card.iconColor
                }}
              >
                {getIcon(card.type)}
              </div>

              {/* Title */}
              <h3 className="mt-[8px] text-center text-[15px] font-bold leading-[1.4] text-[#101b35]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-[4px] text-center text-[13px] font-normal leading-[1.4] text-[#647084]">
                {card.description}
              </p>

              {/* Main Value */}
              <p className="mt-[9px] text-center text-[27px] font-bold leading-[1.2] text-[#101b35] sm:text-[31px]">
                {card.value}
              </p>

              {/* Action Button */}
              <a
                href={card.link}
                className="mt-auto flex h-[45px] w-full items-center justify-center rounded-[8px] text-[13px] font-bold text-white"
                style={{ backgroundColor: card.buttonColor }}
              >
                {card.buttonText}
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CareerContactSection;
