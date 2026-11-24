
import statsData from "../../data/statsData.json";

function StatsSection() {
  return (
    <section className="w-full bg-[#f5f7fc] px-4 py-12 font-sans sm:px-6 sm:py-16 lg:py-20">
      <div className="relative isolate mx-auto w-full max-w-[1320px] overflow-hidden rounded-[28px] bg-[#091b3b] px-5 py-12 shadow-[0_24px_65px_rgba(15,35,75,0.18)] sm:rounded-[34px] sm:px-9 sm:py-16 lg:px-14 lg:py-20">

        {/* Background Effects */}
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
            <span className="text-base">{statsData.badge.icon}</span>
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
              className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-[22px] border border-white/[0.12] bg-white/[0.045] px-5 py-7 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 hover:border-blue-400/60 hover:bg-blue-400/[0.09] hover:shadow-[0_0_30px_rgba(59,130,246,0.13)] sm:min-h-[245px] sm:px-6"
            >

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-400/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Card Top */}
              <div className="relative flex items-center justify-between">

                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-[25px] text-blue-200 transition-[border-color,background-color,color] duration-300 group-hover:border-orange-300/40 group-hover:bg-orange-400/10 group-hover:text-orange-300">
                  {item.icon}
                </div>

                <span className="text-sm font-bold tracking-[2px] text-white/25 transition-colors duration-300 group-hover:text-orange-300/70">
                  0{index + 1}
                </span>
              </div>

              {/* Number */}
              <h3
                className={`relative mt-7 break-words font-extrabold leading-none tracking-[-1.5px] text-white transition-colors duration-300 group-hover:text-[#ffad75] ${
                  item.number.length > 6
                    ? "text-[26px] sm:text-[29px]"
                    : item.number.length > 3
                      ? "text-[34px] sm:text-[38px]"
                      : "text-[42px] sm:text-[48px]"
                }`}
              >
                {item.number}
              </h3>

              {/* Label */}
              <p className="relative mt-3 max-w-[210px] text-sm font-semibold leading-relaxed text-[#aebed8] transition-colors duration-300 group-hover:text-white">
                {item.label}
              </p>

              {/* Bottom Hover Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 rounded-r-full bg-gradient-to-r from-blue-400 to-orange-400 transition-[width] duration-300 group-hover:w-full" />

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default StatsSection;
