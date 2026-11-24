
import footerData from "../data/footerData.json";

export default function Footer() {
  const { sections, copyright } = footerData;

  return (
    <footer className="relative overflow-hidden bg-[#081c3a] px-5 py-12 font-sans text-white sm:px-8 sm:py-14 lg:px-12">
      {/* Top accent */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#249bd5] via-[#8ad3f8] to-[#f28b36]" />

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#249bd5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#f28b36]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">

          {/* Popular Courses */}
          <div className="min-w-0 lg:col-span-7">
            <div className="mb-7">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#8ad3f8]/80">
                Explore
              </span>

              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {sections[0].title}
              </h3>

              <div className="mt-3 h-1 w-12 rounded-full bg-[#f28b36]" />
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:gap-x-10">
              {sections[0].columns.map((column, index) => (
                <ul
                  key={index}
                  className="min-w-0 space-y-4 text-sm text-white/75 sm:text-[15px]"
                >
                  {column.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.url}
                        className="group inline-flex items-start gap-2 transition-colors duration-200 hover:text-[#8ad3f8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ad3f8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#081c3a]"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8ad3f8]/60 transition-all duration-200 group-hover:scale-125 group-hover:bg-[#f28b36]" />
                        <span className="leading-relaxed">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="min-w-0 lg:col-span-5">
            <div className="mb-7">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#8ad3f8]/80">
                Information
              </span>

              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {sections[1].title}
              </h3>

              <div className="mt-3 h-1 w-12 rounded-full bg-[#f28b36]" />
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:gap-x-8">
              {sections[1].columns.map((column, index) => (
                <ul
                  key={index}
                  className="min-w-0 space-y-4 text-sm text-white/75 sm:text-[15px]"
                >
                  {column.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.url}
                        className="group inline-flex items-start gap-2 break-words transition-colors duration-200 hover:text-[#8ad3f8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ad3f8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#081c3a]"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8ad3f8]/60 transition-all duration-200 group-hover:scale-125 group-hover:bg-[#f28b36]" />
                        <span className="leading-relaxed">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/15 pt-6 sm:mt-14 sm:pt-7">
          <p className="text-center text-xs leading-relaxed text-white/60 sm:text-sm">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
