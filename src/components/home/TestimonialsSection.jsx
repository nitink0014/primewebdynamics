
import {
  BookOpen,
  Code,
  FolderGit2,
  Lightbulb,
  UsersRound,
  BriefcaseBusiness,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

import testimonialsData from "../../data/testimonialsData.json";

const iconMap = {
  BookOpen,
  Code,
  FolderGit2,
  Lightbulb,
  UsersRound,
  BriefcaseBusiness,
};

function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f1f5fb] px-5 py-16 font-sans sm:px-8 lg:px-0">

      <div className="mx-auto w-full max-w-[1450px] lg:w-[88%]">

        {/* Section Heading */}
        <div className="mb-12 text-center">

          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#cfe2ff] bg-white px-4 py-2 text-[12px] font-bold tracking-[1px] text-[#347dc9] shadow-sm">
            <GraduationCap size={16} />
            {testimonialsData.badge}
          </div>

          <h2 className="mx-auto mt-5 max-w-[850px] text-[32px] font-extrabold leading-[1.2] tracking-[-1px] text-[#102b59] sm:text-[42px] lg:text-[49px]">
            {testimonialsData.title}
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[14px] leading-7 text-[#647084] sm:text-[16px]">
            {testimonialsData.subtitle}
          </p>

        </div>

        {/* Learning Outcomes */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {testimonialsData.features.map((item) => {
            const Icon = iconMap[item.icon] || GraduationCap;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-[#e1e9f4] bg-white p-7 shadow-[0_8px_25px_rgba(16,43,89,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b8d3f5] hover:shadow-[0_18px_35px_rgba(16,43,89,0.10)]"
              >

                {/* Background Number */}
                <span className="absolute right-6 top-4 text-[40px] font-extrabold text-[#edf3fb] transition-colors duration-300 group-hover:text-[#dfebfc]">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[#edf5ff] text-[#347dc9] transition-all duration-300 group-hover:bg-[#347dc9] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-[19px] font-extrabold text-[#102b59] sm:text-[21px]">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[75px] text-[13px] leading-[1.85] text-[#647084] sm:text-[14px]">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#ff821f] transition-all duration-300 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#102f68] px-6 py-8 text-center sm:px-10 lg:flex-row lg:text-left">

          <div>
            <div className="flex items-center justify-center gap-2 text-[#ff9a48] lg:justify-start">
              <GraduationCap size={20} />

              <span className="text-[12px] font-bold uppercase tracking-[1px]">
                {testimonialsData.footer.eyebrow}
              </span>
            </div>

            <h3 className="mt-2 text-[21px] font-extrabold text-white sm:text-[25px]">
              {testimonialsData.footer.title}
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-blue-100 sm:text-[14px]">
              {testimonialsData.footer.description}
            </p>
          </div>

          <a
            href={testimonialsData.footer.buttonLink}
            className="inline-flex h-[48px] shrink-0 items-center justify-center gap-2 rounded-[9px] bg-[#ff821f] px-6 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ed7011] hover:shadow-[0_8px_20px_rgba(255,130,31,0.25)]"
          >
            {testimonialsData.footer.buttonText}
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
