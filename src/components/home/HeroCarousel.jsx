
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import TechnologyTunnel from "./TechnologyTunnel";

export default function HeroCarousel({ onEnroll }) {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[280svh]
        w-full
        overflow-clip
        bg-[#020914]
        text-white
        md:h-[300svh]
      "
      aria-label="Prime Webdynamics technology courses"
    >
      {/* Sticky viewport */}
      <div
        className="
          sticky
          top-0
          h-[100svh]
          w-full
          overflow-hidden
          bg-[#020914]
        "
      >
        {/* 3D tunnel */}
        <TechnologyTunnel sectionRef={sectionRef} />

        {/* Background overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-[linear-gradient(90deg,rgba(2,9,20,0.94)_0%,rgba(2,9,20,0.78)_27%,rgba(2,9,20,0.12)_67%,rgba(2,9,20,0.12)_100%)]
            max-md:bg-[linear-gradient(180deg,rgba(2,9,20,0.94)_0%,rgba(2,9,20,0.72)_40%,rgba(2,9,20,0.2)_100%)]
          "
        />

        {/* Vignette */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-[radial-gradient(ellipse_at_51%_47%,transparent_20%,rgba(2,9,20,0.34)_100%)]
          "
        />

        {/* Hero content */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            mx-auto
            flex
            max-w-[1440px]
            items-center
            px-5
            pb-14
            pt-24
            sm:px-10
            lg:px-16

            max-md:items-start
            max-md:justify-center
            max-md:px-5
            max-md:pb-20
            max-md:pt-[17svh]
          "
        >
          <div className="w-full max-w-[560px]">
            {/* Badge */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-300/30
                bg-cyan-300/[0.08]
                px-3
                py-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-cyan-200
                shadow-[0_0_28px_rgba(34,211,238,0.12)]
                sm:mb-6
                sm:px-4
                sm:text-xs
                sm:tracking-[0.24em]
              "
            >
              <Sparkles size={13} />

              Your future starts here
            </div>

            {/* Heading */}
            <h1
              className="
                text-[clamp(2.5rem,6.2vw,5.8rem)]
                font-black
                leading-[0.98]
                tracking-[-0.055em]
                max-md:text-[clamp(2.5rem,10vw,4.2rem)]
              "
            >
              Enter the

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-cyan-200
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_25px_rgba(34,211,238,0.18)]
                "
              >
                Tech Universe.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[440px]
                text-[13px]
                leading-6
                text-slate-200/85
                sm:mt-6
                sm:text-base
                sm:leading-8
              "
            >
              Explore eight learning paths. Master the tools
              behind tomorrow’s technology, and turn your
              curiosity into real-world skills.
            </p>

            {/* Buttons */}
            <div
              className="
                pointer-events-auto
                mt-6
                flex
                flex-wrap
                gap-3
                sm:mt-8
                sm:gap-4
              "
            >
              <button
                type="button"
                onClick={() => onEnroll?.()}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-200/40
                  bg-cyan-300
                  px-4
                  py-3
                  text-xs
                  font-extrabold
                  text-slate-950
                  shadow-[0_0_30px_rgba(34,211,238,0.22)]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-cyan-200
                  hover:shadow-[0_0_48px_rgba(34,211,238,0.38)]
                  sm:gap-3
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Start your journey

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button
                type="button"
                onClick={() => navigate("/courses")}
                className="
                  rounded-xl
                  border
                  border-white/25
                  bg-slate-950/50
                  px-4
                  py-3
                  text-xs
                  font-bold
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  transition
                  duration-300
                  hover:border-cyan-200/70
                  hover:bg-cyan-300/10
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Explore courses
              </button>
            </div>

            {/* Course count */}
            <div
              className="
                mt-6
                flex
                items-center
                gap-3
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-cyan-100/65
                sm:mt-9
                sm:text-xs
                sm:tracking-[0.22em]
              "
            >
              <span className="h-px w-8 bg-cyan-300/70 sm:w-10" />

              08 courses · limitless possibilities
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-5
            left-1/2
            z-30
            -translate-x-1/2
            text-center
            sm:bottom-7
          "
        >
          <p
            className="
              mb-1.5
              whitespace-nowrap
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-cyan-100/65
              sm:mb-2
              sm:text-[10px]
              sm:tracking-[0.35em]
            "
          >
            Scroll to travel through the courses
          </p>

          <ChevronDown
            size={20}
            className="mx-auto animate-bounce text-cyan-200"
          />
        </div>

        {/* Desktop brand */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-8
            right-8
            z-30
            hidden
            text-right
            md:block
          "
        >
          <p className="text-[11px] font-black tracking-[0.32em] text-white/75">
            PRIME WEBDYNAMICS
          </p>

          <p className="mt-1 text-[9px] tracking-[0.28em] text-cyan-200/55">
            DIGITAL LEARNING ENVIRONMENT
          </p>
        </div>
      </div>
    </section>
  );
}
