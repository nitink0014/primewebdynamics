
import {
  Code,
  Laptop,
  FolderKanban,
  GraduationCap,
  BriefcaseBusiness,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

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
    <section className="w-full overflow-hidden bg-[#102653] px-5 py-[65px] font-sans sm:px-8 lg:px-0">
      <div className="mx-auto w-full max-w-[1250px]">

        {/* Heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="flex min-h-[35px] items-center justify-center border border-[#d5e0f5] px-5 text-[13px] font-extrabold tracking-[1px] text-white">
            {careerTestimonialsData.badge}
          </div>

          <h2 className="mt-5 max-w-[750px] text-[30px] font-extrabold leading-tight tracking-[-0.8px] text-white sm:text-[40px] lg:text-[48px]">
            {careerTestimonialsData.title}
          </h2>

          <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-[#c3cee1] sm:text-base">
            {careerTestimonialsData.subtitle}
          </p>
        </div>

        {/* Learning Approach Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careerTestimonialsData.features.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.id}
                className="group relative flex min-h-[235px] flex-col rounded-[14px] border border-[#34496d] bg-[#1d355f] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0785ff]"
              >
                {/* Icon and Number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0785ff]/15 text-[#42a5ff] transition-all duration-300 group-hover:bg-[#0785ff] group-hover:text-white">
                    {Icon && <Icon size={25} strokeWidth={1.8} />}
                  </div>

                  <span className="text-[30px] font-extrabold text-white/15">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-[19px] font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.7] text-[#c3cee1]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex flex-col items-center rounded-2xl border border-[#34496d] bg-[#1d355f] px-6 py-9 text-center sm:px-10">
          {careerTestimonialsData.footer.eyebrow && (
            <span className="text-[12px] font-bold tracking-[2px] text-[#42a5ff]">
              {careerTestimonialsData.footer.eyebrow}
            </span>
          )}

          <h3 className="mt-3 max-w-[650px] text-[24px] font-extrabold leading-tight text-white sm:text-[32px]">
            {careerTestimonialsData.footer.title}
          </h3>

          <p className="mt-3 max-w-[550px] text-sm leading-7 text-[#c3cee1]">
            {careerTestimonialsData.footer.description}
          </p>

          <a
            href={careerTestimonialsData.footer.buttonLink}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0785ff] px-7 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#006bd1]"
          >
            {careerTestimonialsData.footer.buttonText}
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default CareerTestimonialsSection;
