
import {
  Code,
  Laptop,
  FolderKanban,
  GraduationCap,
  BriefcaseBusiness,
  TrendingUp,
  ArrowUpRight,
  Check,
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
  return (
    <section className="relative w-full overflow-hidden bg-[#0b1b35] px-5 py-16 font-sans sm:px-8 lg:py-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#0785ff]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f59e0b]/10 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-[1250px]">
        {/* Heading */}
        <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0785ff]/30 bg-[#0785ff]/10 px-4 py-2 text-[12px] font-bold tracking-[1.5px] text-[#65b5ff]">
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
                className="group relative overflow-hidden rounded-2xl border border-[#2b4163] bg-[#142a4b] p-6 transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#0785ff]/70 hover:bg-[#193456] hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)]"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0785ff]/20 bg-[#0785ff]/10 text-[#55adff] transition-[background-color,color] duration-300 group-hover:bg-[#0785ff] group-hover:text-white">
                    {Icon && <Icon size={23} strokeWidth={1.8} />}
                  </div>

                  <span className="text-[38px] font-extrabold leading-none tracking-[-2px] text-white/[0.12]">
                    {item.number}
                  </span>
                </div>

                {/* Card Content */}
                <h3 className="mt-7 text-[19px] font-bold tracking-[-0.3px] text-white">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-[14px] leading-[1.8] text-[#aebdd2]">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-[3px] w-8 rounded-full bg-[#0785ff] transition-[width] duration-300 group-hover:w-14" />
                  <span className="h-[3px] w-3 rounded-full bg-[#f59e0b]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#31496d] bg-gradient-to-r from-[#142e52] to-[#19375e] px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
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
              className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#0785ff] px-6 py-3.5 text-sm font-bold text-white transition-[background-color,box-shadow] duration-300 hover:bg-[#006bd1] hover:shadow-[0_6px_20px_rgba(7,133,255,0.25)] focus:outline-none focus:ring-2 focus:ring-[#65b5ff] focus:ring-offset-2 focus:ring-offset-[#142e52]"
            >
              {careerTestimonialsData.footer.buttonText}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerTestimonialsSection;
