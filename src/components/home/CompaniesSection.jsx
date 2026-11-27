
import { useRef } from "react";

import companiesData from "../../data/companiesData.json";

function CompaniesSection() {
  const benefits = companiesData.logos;

  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 2.5;
    const rotateX = ((centerY - y) / centerY) * 2.5;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
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
    <section className="relative w-full overflow-hidden bg-white px-5 py-16 font-sans sm:px-8 sm:py-20 lg:px-12">

      {/* Soft Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-blue-50/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#438fe5] sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#151b2a] sm:text-4xl lg:text-5xl">
            {companiesData.title}{" "}

            <span className="text-[#5099fa]">
              {companiesData.highlight}
            </span>{" "}

            {companiesData.titleEnd}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#647084] sm:text-base lg:text-lg">
            {companiesData.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3">

          {benefits.map((item) => (
            <article
              key={item.id}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              className="
                group relative flex min-h-[175px]
                flex-col items-center justify-center
                overflow-hidden rounded-2xl
                border border-[#e5edf7]
                bg-white p-5 text-center
                shadow-[0_4px_20px_rgba(25,55,100,0.035)]
                transition-[transform,border-color,box-shadow]
                duration-300 ease-out
                will-change-transform
                hover:border-[#cbdff5]
                hover:shadow-[0_12px_30px_rgba(25,55,100,0.075)]
                sm:min-h-[195px] sm:p-7
              "
            >

              {/* Subtle Cursor Glow */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "radial-gradient(220px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(80,153,250,0.08), transparent 75%)",
                }}
              />

              {/* Icon */}
              <div
                className="
                  relative mb-4 flex h-14 w-14
                  items-center justify-center
                  rounded-2xl bg-[#edf5ff]
                  text-3xl
                  transition-transform duration-300
                  group-hover:scale-[1.04]
                  sm:h-16 sm:w-16 sm:text-4xl
                "
              >
                <span aria-hidden="true">
                  {item.image}
                </span>
              </div>

              {/* Benefit Title */}
              <h3 className="relative max-w-[220px] text-sm font-bold leading-snug text-[#243653] sm:text-base">
                {item.name}
              </h3>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CompaniesSection;
