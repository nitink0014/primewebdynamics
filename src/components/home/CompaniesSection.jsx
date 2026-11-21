
import { useEffect, useState } from "react";
import companiesData from "../../data/companiesData.json";

function CompaniesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const benefits = companiesData.logos;
  const totalBenefits = benefits.length;

  useEffect(() => {
    if (totalBenefits <= 1) return;

    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setActiveIndex((current) => current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalBenefits]);

  const handleTransitionEnd = () => {
    if (activeIndex >= totalBenefits) {
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
    Math.ceil(totalBenefits / 3),
    Math.ceil((totalBenefits * 2) / 3)
  ].map((index) =>
    Math.min(index, Math.max(totalBenefits - 1, 0))
  );

  const activeDot = Math.min(
    2,
    Math.floor(
      (activeIndex % totalBenefits) /
      Math.max(1, totalBenefits / 3)
    )
  );

  return (
    <section className="min-h-[520px] w-full overflow-hidden bg-white px-5 pt-6 font-sans sm:px-8 lg:px-[50px]">

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

      {/* Benefits Carousel */}
      <div className="mx-auto mt-[75px] w-full max-w-[1100px] overflow-hidden">
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${activeIndex * 158}px)`,
            transition: transitionEnabled
              ? "transform 650ms ease-in-out"
              : "none"
          }}
          className="flex w-max gap-[18px]"
        >
          {[...benefits, ...benefits].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex h-[140px] w-[140px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-[#d7e5f8] bg-white p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-[36px]">
                {item.image}
              </span>

              <h3 className="text-[13px] font-bold leading-snug text-[#243653]">
                {item.name}
              </h3>
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
            aria-label={`Go to benefit group ${dotIndex + 1}`}
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
