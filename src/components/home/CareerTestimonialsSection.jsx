
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import careerTestimonialsData from "../../data/careerTestimonialsData.json";

function CareerTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = careerTestimonialsData.testimonials;

  const visibleTestimonials = Array.from(
    { length: Math.min(3, testimonials.length) },
    (_, index) => testimonials[(activeIndex + index) % testimonials.length]
  );

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (testimonials.length <= 3) return;

    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="w-full overflow-hidden bg-[#102653] px-5 pb-[60px] pt-[55px] font-sans sm:px-8 lg:px-0">

      <div className="mx-auto w-full max-w-[1450px]">

        {/* Heading */}
        <div className="mb-[38px] flex flex-col items-center text-center">

          <div className="flex h-[35px] w-[215px] items-center justify-center border border-[#d5e0f5] text-[13px] font-extrabold tracking-[1px] text-white">
            {careerTestimonialsData.badge}
          </div>

          <h2 className="mt-[16px] text-[30px] font-extrabold leading-[1.15] tracking-[-0.8px] text-white sm:text-[40px] lg:text-[48px]">
            {careerTestimonialsData.title}
          </h2>

        </div>

        {/* Testimonial Cards */}
        <div className="relative">

          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonials"
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[#0785ff] transition-transform duration-200 hover:scale-110"
          >
            <ChevronLeft size={40} strokeWidth={2} />
          </button>

          <div className="grid grid-cols-1 gap-[24px] px-0 sm:grid-cols-2 lg:grid-cols-3">

            {visibleTestimonials.map((item) => (
              <div
                key={item.id}
                className="flex h-[260px] min-w-0 flex-col rounded-[14px] border border-[#34496d] bg-[#1d355f] px-[24px] py-[24px]"
              >

                {/* Stars */}
                <div className="flex items-center gap-[1px] text-[16px] leading-none text-[#ffd400]">
                  {Array.from({ length: item.rating }, (_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>

                {/* Review */}
                <p className="mt-[16px] line-clamp-4 text-[15px] font-medium leading-[1.65] text-[#d0d8e8]">
                  "{item.message}"
                </p>

                {/* Student Details */}
                <div className="mt-auto flex items-center gap-[11px]">

                  <div className="h-[44px] w-[42px] shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="text-[14px] font-bold text-white">
                    {item.name}
                  </h3>

                </div>

              </div>
            ))}

          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonials"
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[#0785ff] transition-transform duration-200 hover:scale-110"
          >
            <ChevronRight size={40} strokeWidth={2} />
          </button>

        </div>

      </div>

    </section>
  );
}

export default CareerTestimonialsSection;
