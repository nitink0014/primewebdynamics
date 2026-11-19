
import { useEffect, useState } from "react";
import companiesData from "../../data/companiesData.json";

function CompaniesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const logos = companiesData.logos;
  const totalLogos = logos.length;

  useEffect(() => {
    if (totalLogos <= 1) return;

    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setActiveIndex((current) => current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalLogos]);

  const handleTransitionEnd = () => {
    if (activeIndex >= totalLogos) {
      setTransitionEnabled(false);
      setActiveIndex(0);
    }
  };

  const goToSlide = (index) => {
    setTransitionEnabled(true);
    setActiveIndex(index);
  };

  const dotIndexes = [
    0,
    Math.ceil(totalLogos / 3),
    Math.ceil((totalLogos * 2) / 3)
  ].map((index) => Math.min(index, Math.max(totalLogos - 1, 0)));

  const activeDot = Math.min(
    2,
    Math.floor((activeIndex % totalLogos) / Math.max(1, totalLogos / 3))
  );

  return (
    <section className="min-h-[588px] w-full overflow-hidden bg-white px-5 pt-6 font-sans sm:px-8 lg:px-[50px]">

      {/* Heading */}
      <div className="w-full">

        <h2 className="text-[36px] font-extrabold leading-tight tracking-[-1.5px] text-[#151b2a] sm:text-[46px] lg:text-[58px]">
          {companiesData.title}{" "}
          <span className="text-[#5099fa]">
            {companiesData.highlight}
          </span>{" "}
          {companiesData.titleEnd}
        </h2>

        <p className="mt-2 text-[16px] font-medium text-[#647084] sm:text-[18px]">
          {companiesData.subtitle}
        </p>

      </div>

      {/* Logo Carousel */}
      <div className="mx-auto mt-[96px] w-full max-w-[1234px] overflow-hidden">

        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${activeIndex * 204}px)`,
            transition: transitionEnabled
              ? "transform 650ms ease-in-out"
              : "none"
          }}
          className="flex w-max gap-[18px]"
        >

          {[...logos, ...logos].map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              className="flex h-[125px] w-[186px] shrink-0 items-center justify-center border border-[#d7e5f8] bg-white p-3"
            >

           <img
  src={`https://www.google.com/s2/favicons?domain_url=https://${company.domain}&sz=128`}
  alt={company.name}
  title={company.name}
  onError={(e) => {
    console.error(`Failed to load ${company.name}:`, e.currentTarget.src);
  }}
  className="h-full w-full object-contain"
/>
            </div>
          ))}

        </div>

      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex items-center justify-center gap-[17px]">

        {dotIndexes.map((index, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => goToSlide(index)}
            aria-label={`Go to logo group ${dotIndex + 1}`}
            className={`h-[13px] w-[13px] rounded-full transition-colors duration-300 ${
              activeDot === dotIndex
                ? "bg-[#ff7900]"
                : "bg-[#1760a5]"
            }`}
          />
        ))}

      </div>

    </section>
  );
}

export default CompaniesSection;
