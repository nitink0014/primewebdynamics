
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
  const [isPaused, setIsPaused] = useState(false);

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

  // Reset autoplay timer whenever the active slide changes.
  // Pause autoplay when the user interacts with the carousel.
  useEffect(() => {
    if (!homeSlides.length || isPaused) return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % homeSlides.length);
    }, 6000);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, isPaused]);

  if (!activeSlide) return null;

  return (
    <section
      aria-label="Featured courses"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      className="relative isolate flex min-h-[auto] items-center overflow-hidden bg-gradient-to-br from-[#10234f] via-[#142e63] to-[#0b1938] px-5 py-14 pb-24 text-white sm:px-8 md:min-h-[620px] md:px-[5.4%] md:py-16"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-36 -z-10 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(3,12,32,0.25)_100%)]" />

      {/* Main Content */}
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-12 lg:gap-16">

        {/* Left Content */}
        <div
          key={activeSlide.id}
          className="min-w-0 max-w-[620px] animate-[fadeIn_.55s_ease_both] motion-reduce:animate-none"
        >
          {/* Category Tag */}
          <div className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 text-[11px] font-bold tracking-[1.5px] text-[#dce7ff] shadow-lg shadow-black/10 backdrop-blur-sm sm:text-xs">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-[#ff995f]">
              <Coffee size={15} />
            </span>

            <span className="truncate">{activeSlide.tag}</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-[clamp(34px,4.2vw,62px)] font-extrabold leading-[1.08] tracking-[-1.8px] text-white">
            {activeSlide.title}

            <span className="mt-2 block bg-gradient-to-r from-[#ff9a56] via-[#ff793c] to-[#ff642f] bg-clip-text text-transparent">
              {activeSlide.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-[530px] text-[14px] font-medium leading-[1.85] text-[#c5d1e8] sm:text-[15px]">
            {activeSlide.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">

            {/* Primary Button */}
            <button
              type="button"
              onClick={() => onEnroll?.()}
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-[#62a8ff] bg-gradient-to-r from-[#4b9df5] to-[#3987e8] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#10234f]"
            >
              {activeSlide.primaryButton}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              onClick={() => navigate("/courses")}
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Play size={15} fill="currentColor" />

              {activeSlide.secondaryButton}
            </button>
          </div>

          {/* Supporting Label */}
          <div className="mt-8 flex items-center gap-2 text-xs font-medium text-[#aebedb]">
            <Code2 size={16} className="text-[#ff8950]" />
            Practical learning. Real-world projects.
          </div>
        </div>

        {/* Right Image */}
        <div
          key={`image-${activeSlide.id}`}
          className="relative mx-auto w-full max-w-[620px] animate-[fadeIn_.65s_ease_both] motion-reduce:animate-none"
        >
          {/* Image Glow */}
          <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-br from-blue-400/20 via-transparent to-orange-400/20 blur-2xl" />

          {/* Image Container */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] border border-white/20 bg-[#172b50] shadow-2xl shadow-black/30 sm:rounded-[28px]">
            <img
              src={activeSlide.image}
              alt={`${activeSlide.tag} practical learning`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]"
              draggable="false"
            />

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07152e]/30 via-transparent to-white/5" />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-3 flex min-h-[76px] max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-2xl border border-white/70 bg-white px-4 py-3 text-[#111827] shadow-2xl shadow-black/20 sm:-left-6 sm:bottom-8 sm:min-w-[250px] sm:max-w-[290px] sm:px-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#659aff] to-[#4279ed] text-white shadow-md shadow-blue-500/25">
              <Code2 size={23} />
            </div>

            <div className="min-w-0">
              <span className="mb-1 block text-[11px] font-semibold text-gray-500">
                {activeSlide.badgeTitle}
              </span>

              <strong className="block truncate text-sm font-extrabold text-[#14213d] sm:text-[15px]">
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
        className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/50 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex lg:left-7"
      >
        <ChevronLeft size={23} />
      </button>

      {/* Next Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/50 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex lg:right-7"
      >
        <ChevronRight size={23} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {homeSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#10234f] ${
              activeIndex === index
                ? "w-8 bg-[#ff803f]"
                : "w-2 bg-white/35 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
