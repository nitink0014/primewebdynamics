
import {
  BookOpenCheck,
  Route,
  FolderKanban,
  BriefcaseBusiness,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

import featuresData from "../../data/featuresData.json";

const iconMap = {
  Bot: BookOpenCheck,
  Target: Route,
  Sparkles: FolderKanban,
  BriefcaseBusiness,
  Video: CalendarDays,
  Award: BadgeCheck,
};

function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f8ff] px-4 py-14 font-sans sm:px-6 sm:py-16 md:px-8 lg:px-0 lg:py-20">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] lg:w-[92%] xl:w-[88%]">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold tracking-[1.5px] text-[#4388ed] shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#5099fa]" />
            WHY LEARN WITH US
          </span>

          <h2 className="mt-5 text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.12] tracking-[-1.5px] text-[#101d3b]">
            {featuresData.title}
            <span className="mt-1 block text-[#5099fa]">
              {featuresData.highlight}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-[#647084] sm:text-base md:text-lg">
            {featuresData.subtitle}
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {featuresData.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <article
                key={feature.id}
                className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-[#e3eaf6] bg-white p-6 shadow-[0_4px_18px_rgba(30,64,120,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[#9bbdff] hover:shadow-[0_14px_35px_rgba(30,64,120,0.10)] sm:p-7"
              >

                {/* Top Row */}
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4ff] text-[#4388ed] transition-colors duration-300 group-hover:bg-[#4388ed] group-hover:text-white">
                    {Icon && <Icon size={27} strokeWidth={1.9} />}
                  </div>

                  <span className="text-sm font-bold tracking-wider text-[#c4d3e9]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Content */}
                <div className="mt-6">

                  <h3 className="text-lg font-bold leading-snug text-[#142443] sm:text-xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.8] text-[#68768c]">
                    {feature.description}
                  </p>

                </div>

                {/* Bottom Accent */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-[#5099fa] transition-[width] duration-300 group-hover:w-full" />

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;
