
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import TechnologyOrbit from "./TechnologyOrbit";

function HeroCarousel({ onEnroll }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/courses");
  };

  const handleEnroll = () => {
    if (onEnroll) {
      onEnroll();
    } else {
      navigate("/registration");
    }
  };

  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[#050816] text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_45%,rgba(37,99,235,0.17),transparent_35%),radial-gradient(circle_at_15%_15%,rgba(124,58,237,0.12),transparent_30%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13] [background-image:linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:55px_55px]" />

      {/* Hero Content */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-12">
        {/* Left Side */}
        <div className="relative z-10 animate-[heroEnter_0.8s_ease-out_both]">
          <style>
            {`
              @keyframes heroEnter {
                from {
                  opacity: 0;
                  transform: translateY(25px);
                }

                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes heroGradient {
                0%, 100% {
                  background-position: 0% center;
                }

                50% {
                  background-position: 100% center;
                }
              }

              .hero-gradient-text {
                background: linear-gradient(
                  90deg,
                  #60a5fa,
                  #a78bfa,
                  #67e8f9,
                  #60a5fa
                );
                background-size: 250% auto;
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: heroGradient 6s ease-in-out infinite;
              }

              @media (prefers-reduced-motion: reduce) {
                .hero-gradient-text {
                  animation: none;
                }
              }
            `}
          </style>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-200">
            <Sparkles size={15} />
            Learn. Build. Grow.
          </div>

          <h1 className="text-[clamp(36px,5vw,68px)] font-extrabold leading-[1.12] tracking-tight">
            Build Your
            <br />

            <span className="hero-gradient-text">
              Future With Tech
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Learn industry-ready technologies, build real-world
            projects, and take the next step toward your dream
            career with Primewebdynamics.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleEnroll}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/30"
            >
              Get Started
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={handleExplore}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 text-sm font-bold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800"
            >
              Explore Courses
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-7 sm:gap-10">
            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                Practical
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Learning Approach
              </p>
            </div>

            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                Industry
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Focused Skills
              </p>
            </div>

            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                Career
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Oriented Training
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Technology Orbit */}
        <div className="relative flex w-full min-w-0 items-center justify-center lg:pl-4">
          <TechnologyOrbit />
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
