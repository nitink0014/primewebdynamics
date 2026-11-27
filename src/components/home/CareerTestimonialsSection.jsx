
import {
  Code,
  Laptop,
  FolderKanban,
  GraduationCap,
  BriefcaseBusiness,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import careerTestimonialsData from "../../data/careerTestimonialsData.json";

const iconMap = {
  Code,
  Laptop,
  FolderKanban,
  GraduationCap,
  BriefcaseBusiness,
  TrendingUp,
};

function CareerTestimonialsSection() {
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
    <section className="relative w-full overflow-hidden bg-[#0b1b35] px-5 py-16 font-sans sm:px-8 lg:py-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#0785ff]/[0.07] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f59e0b]/[0.06] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1250px]">
        {/* Heading */}
        <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0785ff]/25 bg-[#0785ff]/[0.08] px-4 py-2 text-[12px] font-bold tracking-[1.5px] text-[#65b5ff]">
              <span className="h-2 w-2 rounded-full bg-[#0785ff]" />
              {careerTestimonialsData.badge}
            </div>

            <h2 className="mt-5 max-w-[680px] text-[30px] font-extrabold leading-[1.15] tracking-[-1px] text-white sm:text-[40px] lg:text-[48px]">
              {careerTestimonialsData.title}
            </h2>
          </div>

          <p className="max-w-[500px] text-[15px] leading-7 text-[#aebdd2] lg:justify-self-end lg:pb-1">
            {careerTestimonialsData.subtitle}
          </p>
        </div>

        {/* Learning Framework */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerTestimonialsData.features.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.id}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                style={{
                  "--card-glow": "rgba(7, 133, 255, 0.10)",
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#2b4163] bg-[#142a4b] p-6 shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out will-change-transform hover:border-[#426087] hover:bg-[#172f52] hover:shadow-[0_14px_35px_rgba(0,0,0,0.16)]"
              >
                {/* Cursor Glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(230px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--card-glow), transparent 75%)",
                  }}
                />

                {/* Top Row */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0785ff]/20 bg-[#0785ff]/[0.08] text-[#55adff] transition-[background-color,color,transform] duration-300 group-hover:scale-105 group-hover:bg-[#0785ff]/20 group-hover:text-[#8bcaff]">
                    {Icon && <Icon size={23} strokeWidth={1.8} />}
                  </div>

                  <span className="text-[38px] font-extrabold leading-none tracking-[-2px] text-white/[0.10] transition-colors duration-300 group-hover:text-white/[0.15]">
                    {item.number}
                  </span>
                </div>

                {/* Card Content */}
                <h3 className="relative z-10 mt-7 text-[19px] font-bold tracking-[-0.3px] text-white transition-colors duration-300 group-hover:text-[#8bcaff]">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-3 min-h-[72px] text-[14px] leading-[1.8] text-[#aebdd2]">
                  {item.description}
                </p>

                {/* Static Accent */}
                <div className="relative z-10 mt-6 flex items-center gap-2">
                  <span className="h-[3px] w-8 rounded-full bg-[#0785ff]/70" />
                  <span className="h-[3px] w-3 rounded-full bg-[#f59e0b]/70" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="group relative mt-12 overflow-hidden rounded-2xl border border-[#31496d] bg-gradient-to-r from-[#142e52] to-[#19375e] px-6 py-8 shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-[border-color,box-shadow] duration-300 hover:border-[#45638b] hover:shadow-[0_14px_35px_rgba(0,0,0,0.14)] sm:px-10 sm:py-10">
          {/* Subtle CTA Glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#0785ff]/[0.06] blur-[90px]" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-[680px]">
              {careerTestimonialsData.footer.eyebrow && (
                <span className="text-[12px] font-bold tracking-[1.8px] text-[#65b5ff]">
                  {careerTestimonialsData.footer.eyebrow}
                </span>
              )}

              <h3 className="mt-2 text-[24px] font-extrabold leading-tight text-white sm:text-[30px]">
                {careerTestimonialsData.footer.title}
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-[#b9c8dc] sm:text-[15px]">
                {careerTestimonialsData.footer.description}
              </p>
            </div>

            <Link
              to={careerTestimonialsData.footer.buttonLink}
              className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#0785ff] px-6 py-3.5 text-sm font-bold text-white transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#0878e0] hover:shadow-[0_6px_20px_rgba(7,133,255,0.18)] focus:outline-none focus:ring-2 focus:ring-[#65b5ff] focus:ring-offset-2 focus:ring-offset-[#142e52]"
            >
              {careerTestimonialsData.footer.buttonText}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerTestimonialsSection;
