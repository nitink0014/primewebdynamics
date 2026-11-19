
import statsData from "../../data/statsData.json";

function StatsSection() {
  return (
    <section className="w-full bg-[#f8faff] px-4 py-8 font-sans sm:px-6 lg:py-10">

      {/* Main Container */}
      <div className="mx-auto flex min-h-[500px] w-full max-w-[1480px] flex-col items-center overflow-hidden rounded-[30px] bg-gradient-to-br from-[#091d47] via-[#123574] to-[#164395] px-5 py-8 shadow-[0_20px_55px_rgba(15,35,75,0.16)] sm:px-8 md:px-10 lg:w-[83%] lg:px-[56px] lg:py-10">

        {/* Header */}
        <div className="flex w-full flex-col items-center text-center">

          {/* Trust Badge */}
          <div className="flex min-h-[40px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[14px] font-bold text-[#9bcaff]">
            <span>{statsData.badge.icon}</span>
            <span>{statsData.badge.text}</span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-[28px] font-extrabold leading-tight tracking-[-1px] text-white sm:text-[36px] lg:text-[46px]">
            {statsData.title}
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-[720px] text-[14px] font-medium leading-[1.6] text-[#d0dcf2] sm:text-[16px]">
            {statsData.description}
          </p>

        </div>

        {/* Statistics Cards */}
        <div className="mt-9 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-[22px]">

          {statsData.stats.map((item) => (
            <div
              key={item.id}
              className="flex min-h-[200px] flex-col items-center justify-center rounded-[24px] bg-white px-3 py-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)] lg:h-[210px] lg:min-h-0"
            >

              {/* Icon */}
              <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-[20px] bg-[#478df5] text-[29px] shadow-[0_10px_25px_rgba(71,141,245,0.35)]">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="mt-4 text-[36px] font-extrabold leading-none tracking-[-1px] text-[#5099fa] sm:text-[42px] lg:text-[48px]">
                {item.number}
              </h3>

              {/* Label */}
              <p className="mt-2 text-[14px] font-medium text-[#4b5568] sm:text-[16px]">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default StatsSection;
