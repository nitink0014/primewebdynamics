
import statsData from "../../data/statsData.json";

function StatsSection() {
  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(1000px)
      translateY(-8px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleCardLeave = (event) => {
    const card = event.currentTarget;

    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");

    card.style.transform = `
      perspective(1000px)
      translateY(0)
      rotateX(0deg)
      rotateY(0deg)
    `;
  };

  return (
    <section className="w-full bg-[#f5f7fc] px-4 py-12 font-sans sm:px-6 sm:py-16 lg:py-20">
      <div className="relative isolate mx-auto w-full max-w-[1320px] overflow-hidden rounded-[28px] bg-[#091b3b] px-5 py-12 shadow-[0_24px_65px_rgba(15,35,75,0.18)] sm:rounded-[34px] sm:px-9 sm:py-16 lg:px-14 lg:py-20">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-40 -right-20 -z-10 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[110px]" />

        {/* Decorative Grid */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Header */}
        <div className="relative mx-auto flex max-w-[850px] flex-col items-center text-center">

          <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2.5 text-[11px] font-bold tracking-wide text-blue-200 backdrop-blur-md sm:text-sm">
            <span className="text-base">
              {statsData.badge.icon}
            </span>

            <span>{statsData.badge.text}</span>
          </div>

          <h2 className="mt-7 text-[clamp(28px,3.8vw,48px)] font-extrabold leading-[1.2] tracking-[-1.3px] text-white">
            {statsData.title}
          </h2>

          <p className="mt-4 max-w-[680px] text-[13px] font-medium leading-[1.9] text-[#aebed8] sm:text-base">
            {statsData.description}
          </p>

          <div className="mt-7 flex items-center gap-2">
            <span className="h-[3px] w-8 rounded-full bg-blue-400" />
            <span className="h-[3px] w-12 rounded-full bg-orange-400" />
            <span className="h-[3px] w-8 rounded-full bg-blue-400" />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="relative mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">

          {statsData.stats.map((item, index) => (
            <article
              key={item.id}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              className="
                stats-premium-card
                group
                relative
                flex
                min-h-[230px]
                flex-col
                overflow-hidden
                rounded-[22px]
                border
                border-white/[0.12]
                bg-[#0d2447]/70
                px-5
                py-7
                backdrop-blur-xl
                sm:min-h-[245px]
                sm:px-6
              "
            >
              {/* Cursor-following Glow */}
              <div
                className="
                  stats-card-cursor-glow
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Ambient Blue Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-44
                  w-44
                  rounded-full
                  bg-blue-400/10
                  opacity-0
                  blur-[60px]
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Ambient Orange Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-10
                  h-40
                  w-40
                  rounded-full
                  bg-orange-400/10
                  opacity-0
                  blur-[55px]
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Card Content */}
              <div className="relative z-10 flex h-full flex-col">

                {/* Card Top */}
                <div className="flex items-center justify-between">

                  <div
                    className="
                      flex
                      h-[54px]
                      w-[54px]
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-blue-300/20
                      bg-blue-400/10
                      text-[25px]
                      text-blue-200
                      shadow-[0_0_20px_rgba(59,130,246,0.05)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-cyan-300/50
                      group-hover:bg-cyan-400/15
                      group-hover:text-cyan-200
                      group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                    "
                  >
                    {item.icon}
                  </div>

                  <span
                    className="
                      text-sm
                      font-bold
                      tracking-[2px]
                      text-white/25
                      transition-all
                      duration-300
                      group-hover:translate-x-[-3px]
                      group-hover:text-orange-300
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Number */}
                <h3
                  className={`
                    relative
                    mt-7
                    break-words
                    font-extrabold
                    leading-none
                    tracking-[-1.5px]
                    text-white
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:text-[#ffbd8a]
                    ${
                      item.number.length > 6
                        ? "text-[26px] sm:text-[29px]"
                        : item.number.length > 3
                          ? "text-[34px] sm:text-[38px]"
                          : "text-[42px] sm:text-[48px]"
                    }
                  `}
                >
                  {item.number}
                </h3>

                {/* Label */}
                <p className="relative mt-3 max-w-[210px] text-sm font-semibold leading-relaxed text-[#aebed8] transition-colors duration-300 group-hover:text-white">
                  {item.label}
                </p>
              </div>

             
              {/* Hover Border */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[22px]
                  border
                  border-transparent
                  transition-colors
                  duration-300
                  group-hover:border-cyan-300/30
                "
              />
            </article>
          ))}

        </div>
      </div>

      {/* Card Interaction Styles */}
      <style>{`
        .stats-premium-card {
          --mouse-x: 50%;
          --mouse-y: 50%;

          transform:
            perspective(1000px)
            translateY(0)
            rotateX(0deg)
            rotateY(0deg);

          transition:
            transform 180ms ease-out,
            border-color 300ms ease,
            background-color 300ms ease,
            box-shadow 300ms ease;

          transform-style: preserve-3d;
          will-change: transform;
        }

        .stats-premium-card:hover {
          border-color: rgba(103, 232, 249, 0.45);

          background-color: rgba(13, 36, 71, 0.9);

          box-shadow:
            0 0 25px rgba(34, 211, 238, 0.12),
            0 0 55px rgba(59, 130, 246, 0.13),
            0 20px 45px rgba(0, 0, 0, 0.22);
        }

        .stats-card-cursor-glow {
          background:
            radial-gradient(
              260px circle at var(--mouse-x) var(--mouse-y),
              rgba(34, 211, 238, 0.20),
              rgba(59, 130, 246, 0.10) 35%,
              transparent 70%
            );
        }

        @media (prefers-reduced-motion: reduce) {
          .stats-premium-card {
            transition:
              border-color 300ms ease,
              background-color 300ms ease,
              box-shadow 300ms ease;
          }
        }

        @media (hover: none) {
          .stats-premium-card {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default StatsSection;
