
import {
  Bot,
  Target,
  Sparkles,
  BriefcaseBusiness,
  Video,
  Award
} from "lucide-react";

import featuresData from "../../data/featuresData.json";

const iconMap = {
  Bot,
  Target,
  Sparkles,
  BriefcaseBusiness,
  Video,
  Award
};

function FeaturesSection() {
  return (
    <section className="w-full bg-white px-5 pb-10 pt-8 font-sans sm:px-8 lg:px-0">

      <div className="mx-auto w-full max-w-[1544px] lg:w-[88%]">

        {/* Section Heading */}
        <div className="mb-[52px] flex flex-col items-center text-center">

          <h2 className="text-[38px] font-extrabold leading-[1.15] tracking-[-1.2px] text-[#101d3b] sm:text-[48px] lg:text-[54px]">
            {featuresData.title}
            <span className="block text-[#5099fa]">
              {featuresData.highlight}
            </span>
          </h2>

          <p className="mt-3 text-[16px] font-medium text-[#647084] sm:text-[18px]">
            {featuresData.subtitle}
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-[25px] sm:grid-cols-2 lg:grid-cols-3">

          {featuresData.features.map((feature) => {
            const Icon = iconMap[feature.icon];

            return (
              <div
                key={feature.id}
                className="group flex h-[205px] w-full flex-col rounded-[16px] border border-[#e3ebf8] bg-[#f6f8fc] px-[25px] py-[22px] transition-all duration-300 ease-in-out hover:border-[#526dff] hover:bg-white hover:shadow-[0_20px_40px_rgba(15,23,42,0.14)]"
              >

                {/* Icon */}
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#5099fa] text-white">
                  {Icon && <Icon size={29} strokeWidth={2} />}
                </div>

                {/* Title */}
                <h3 className="mt-[16px] text-[18px] font-bold leading-[1.3] text-[#10213d]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-[9px] text-[14px] font-normal leading-[1.55] text-[#647084]">
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
