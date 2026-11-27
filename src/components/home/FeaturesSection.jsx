
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
  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-5px)
    `;
  };

  const handleCardLeave = (event) => {
    const card = event.currentTarget;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  };

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
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                className="
                  feature-premium-card
                  group
                  relative
                  flex
                  min-h-[280px]
                  flex-col
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-[#e3eaf6]
                  bg-white
                  p-7
                  shadow-[0_4px_18px_rgba(30,64,120,0.035)]
                  transition-[transform,border-color,box-shadow]
                  duration-300
                  ease-out
                  hover:border-[#d5e2f5]
                  hover:shadow-[0_14px_35px_rgba(30,64,120,0.08)]
                  sm:p-8
                "
              >

                {/* Cursor Blur Glow */}
                <div
                  className="
                    feature-cursor-glow
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[26px]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Soft Hover Background */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[26px]
                    bg-gradient-to-br
                    from-blue-50/0
                    via-transparent
                    to-indigo-50/0
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Card Content */}
                <div className="relative z-10 flex h-full flex-col">

                  {/* Top Row */}
                  <div className="flex items-center justify-between">

                    {/* Icon */}
                    <div
                      className="
                        feature-icon-box
                        flex
                        h-[60px]
                        w-[60px]
                        items-center
                        justify-center
                        rounded-[19px]
                        border
                        border-[#e8effb]
                        bg-gradient-to-br
                        from-[#edf4ff]
                        to-[#f5f8ff]
                        text-[#4388ed]
                        transition-all
                        duration-300
                        group-hover:scale-105
                        group-hover:border-[#d5e3fa]
                        group-hover:from-[#edf4ff]
                        group-hover:to-[#eaf2ff]
                      "
                    >
                      {Icon && (
                        <Icon
                          size={27}
                          strokeWidth={1.9}
                        />
                      )}
                    </div>

                    {/* Number */}
                    <span
                      className="
                        text-sm
                        font-bold
                        tracking-wider
                        text-[#c4d3e9]
                        transition-colors
                        duration-300
                        group-hover:text-[#9bb8e4]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* Content */}
                  <div className="mt-7">

                    <h3
                      className="
                        text-[21px]
                        font-bold
                        leading-[1.45]
                        tracking-[-0.5px]
                        text-[#142443]
                        transition-colors
                        duration-300
                        group-hover:text-[#3478df]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-[15px]
                        font-normal
                        leading-[1.8]
                        text-[#68768c]
                        sm:text-base
                      "
                    >
                      {feature.description}
                    </p>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>

      {/* Cursor Glow and Tilt Styles */}
      <style>{`
        .feature-premium-card {
          transform-style: preserve-3d;
          will-change: transform;
        }

        .feature-cursor-glow {
          background: radial-gradient(
            220px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(80, 153, 250, 0.09),
            rgba(80, 153, 250, 0.035) 35%,
            transparent 70%
          );
        }

        .feature-premium-card:hover .feature-icon-box {
          box-shadow: 0 5px 15px rgba(67, 136, 237, 0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-premium-card,
          .feature-icon-box {
            transition: none !important;
          }
        }
      `}</style>

    </section>
  );
}

export default FeaturesSection;
