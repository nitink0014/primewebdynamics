
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

import testimonialsData from "../../data/testimonialsData.json";

function TestimonialsSection() {
  const carouselRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Automatically move cards one by one
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const interval = setInterval(() => {
      const firstCard = carousel.querySelector(".testimonial-card");

      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = 20;
      const scrollAmount = cardWidth + gap;

      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft + scrollAmount >= maxScroll - 5) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const moveCarousel = (direction) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstCard = carousel.querySelector(".testimonial-card");

    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 20;

    carousel.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  // Close video with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#f1f4f8] px-5 pb-14 pt-10 font-sans sm:px-8 lg:px-0">

      <div className="mx-auto w-full max-w-[1590px] lg:w-[90%]">

        {/* Section Heading */}
        <div className="mb-[24px]">

          <div className="flex h-[38px] w-fit items-center rounded-full bg-[#ff7948] px-[18px] text-[13px] font-bold text-white shadow-[0_6px_18px_rgba(255,121,72,0.15)]">
            {testimonialsData.badge}
          </div>

          <h2 className="mt-[17px] text-[34px] font-extrabold leading-[1.15] tracking-[-1.1px] text-[#151b2a] sm:text-[44px]">
            {testimonialsData.title}
          </h2>

        </div>

        {/* Carousel */}
        <div className="group/carousel relative">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label="Previous testimonials"
            className="absolute left-2 top-1/2 z-10 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1685ff] shadow-md transition-all duration-200 hover:scale-105 hover:bg-white"
          >
            <ChevronLeft size={29} strokeWidth={2.5} />
          </button>

          {/* Cards Container */}
          <div
            ref={carouselRef}
            className="flex gap-[20px] overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >

            {testimonialsData.testimonials.map((item) => (

              <button
                type="button"
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                aria-label={`Play testimonial by ${item.name}`}
                className="testimonial-card group relative h-[310px] w-[270px] flex-none overflow-hidden rounded-[12px] border border-[#cbd5e1] bg-[#111827] text-left"
              >

                {/* Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-[75px] bg-gradient-to-t from-black/80 to-transparent" />

                {/* Play Button */}
                <div className="absolute left-1/2 top-1/2 flex h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111827] shadow-[0_4px_15px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-110">
                  <Play size={20} fill="currentColor" className="ml-1" />
                </div>

                {/* Student Name */}
                <span className="absolute bottom-[11px] left-[11px] right-3 truncate text-[13px] font-bold text-white">
                  {item.name}
                </span>

              </button>

            ))}

          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label="Next testimonials"
            className="absolute right-2 top-1/2 z-10 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1685ff] shadow-md transition-all duration-200 hover:scale-105 hover:bg-white"
          >
            <ChevronRight size={29} strokeWidth={2.5} />
          </button>

        </div>

      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
        >

          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-[850px] overflow-hidden rounded-[16px] bg-black shadow-2xl"
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-[#ff7948]"
            >
              <X size={23} />
            </button>

            {/* Video */}
            {selectedVideo.video ? (
              <video
                key={selectedVideo.id}
                src={selectedVideo.video}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full bg-black object-contain"
              />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 text-white">
                <Play size={42} />
                <p className="text-base font-semibold">
                  Video coming soon
                </p>
              </div>
            )}

            {/* Video Name */}
            <div className="px-5 py-3 text-white">
              <h3 className="text-[15px] font-bold">
                {selectedVideo.name}
              </h3>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default TestimonialsSection;
