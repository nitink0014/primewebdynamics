
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  Play,
  Coffee,
  Code2,
} from "lucide-react";

import homeSlides from "../../data/homeSlides.json";

function HeroCarousel({ onEnroll }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const activeSlide = homeSlides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % homeSlides.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + homeSlides.length) % homeSlides.length
    );
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % homeSlides.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden bg-gradient-to-br from-[#10234f] via-[#10295c] to-[#0d1d40] px-[5.4%] py-8 pb-16 font-sans text-white">

      <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 items-center gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-10">

        {/* Left Content */}
        <div
          key={activeSlide.id}
          className="min-w-0 max-w-[610px] animate-[fadeIn_.55s_ease_both]"
        >
          {/* Category Tag */}
          <div className="mb-4 flex min-h-[33px] w-fit max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs text-[#e5eaf5]">
            <Coffee size={14} />
            <span>{activeSlide.tag}</span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-[clamp(30px,2.8vw,43px)] font-extrabold leading-[1.15] tracking-[-1.2px]">
            {activeSlide.title}

            <span className="mt-1 block text-[#ff803f]">
              {activeSlide.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mb-6 max-w-[490px] text-[14px] font-medium leading-[1.7] text-[#c1cadd]">
            {activeSlide.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">

            {/* Enroll Now */}
            <button
              type="button"
              onClick={() => onEnroll?.()}
              className="flex h-[49px] items-center justify-center gap-2 rounded-lg border border-[#4b9df5] bg-[#4b9df5] px-6 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3188eb]"
            >
              {activeSlide.primaryButton}
              <span>→</span>
            </button>

            {/* Explore Course */}
            <button
              type="button"
              onClick={() => navigate("/courses")}
              className="flex h-[49px] items-center justify-center gap-2 rounded-lg border-2 border-[#7183a5] bg-transparent px-5 text-sm font-bold transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <Play size={15} fill="currentColor" />
              {activeSlide.secondaryButton}
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div
          key={`image-${activeSlide.id}`}
          className="relative mx-auto h-[230px] w-full max-w-[560px] animate-[fadeIn_.6s_ease_both] rounded-[24px] bg-white md:h-[310px] lg:h-[365px]"
        >
          <img
            src={activeSlide.image}
            alt={activeSlide.tag}
            className="h-full w-full rounded-[24px] object-cover"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-5 left-3 flex min-h-[60px] min-w-[220px] items-center gap-3 rounded-xl bg-white px-4 py-2 text-[#111827] shadow-xl md:bottom-7 md:-left-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#5689ff] text-white">
              <Code2 size={21} />
            </div>

            <div>
              <span className="mb-0.5 block text-[11px] font-semibold text-gray-500">
                {activeSlide.badgeTitle}
              </span>

              <strong className="block text-sm font-extrabold">
                {activeSlide.badgeSubtitle}
              </strong>
            </div>
          </div>
        </div>

      </div>

      {/* Previous Arrow */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/25"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/25"
      >
        <ChevronRight size={22} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {homeSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-6 bg-[#ff7434]"
                : "w-2 bg-[#52658b]"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default HeroCarousel;
