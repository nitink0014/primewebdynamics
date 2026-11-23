
import {
  Bot,
  Target,
  Sparkles,
  BriefcaseBusiness,
  Video,
  Award,
} from "lucide-react";

import featuresData from "../../data/featuresData.json";

const iconMap = {
  Bot,
  Target,
  Sparkles,
  BriefcaseBusiness,
  Video,
  Award,
};

function FeaturesSection() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-10 font-sans sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-0 lg:py-16">

      <div className="mx-auto w-full max-w-[1440px] lg:w-[92%] xl:w-[88%]">

        {/* Section Heading */}
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-11 md:mb-12 lg:mb-14">

          <h2 className="text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.12] tracking-[-1px] text-[#101d3b]">
            {featuresData.title}
            <span className="mt-1 block text-[#5099fa]">
              {featuresData.highlight}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-[#647084] sm:mt-4 sm:text-base sm:leading-7 md:text-lg">
            {featuresData.subtitle}
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6 xl:grid-cols-3">

          {featuresData.features.map((feature) => {
            const Icon = iconMap[feature.icon];

            return (
              <div
                key={feature.id}
                className="group flex h-full min-h-[190px] flex-col rounded-2xl border border-[#e3ebf8] bg-[#f6f8fc] p-5 transition-colors duration-300 hover:border-[#526dff] hover:bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)] sm:min-h-[205px] sm:p-6"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5099fa] text-white transition-colors duration-300 group-hover:bg-[#526dff] sm:h-14 sm:w-14">
                  {Icon && (
                    <Icon
                      size={26}
                      strokeWidth={2}
                      className="sm:hidden"
                    />
                  )}

                  {Icon && (
                    <Icon
                      size={29}
                      strokeWidth={2}
                      className="hidden sm:block"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-bold leading-snug text-[#10213d] sm:mt-5 sm:text-lg">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#647084] sm:text-sm">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;
