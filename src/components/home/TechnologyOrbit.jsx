
import {
  SiHtml5,
  SiAndroid,
  SiGoogleads,
  SiReact,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

import { FaChartBar } from "react-icons/fa6";
import { Code2, Sparkles } from "lucide-react";

const technologies = [
  {
    name: "HTML5",
    Icon: SiHtml5,
    color: "#E44D26",
    x: 50,
    y: 7.6,
    delay: "0s",
  },
  {
    name: "Android",
    Icon: SiAndroid,
    color: "#3DDC84",
    x: 74.6,
    y: 20,
    delay: "0.5s",
  },
  {
    name: "Google Ads",
    Icon: SiGoogleads,
    color: "#4285F4",
    x: 84.8,
    y: 50,
    delay: "1s",
  },
  {
    name: "Power BI",
    Icon: FaChartBar,
    color: "#F2C811",
    x: 74.6,
    y: 80,
    delay: "1.5s",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    color: "#68A063",
    x: 50,
    y: 92.4,
    delay: "0.8s",
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
    x: 25.4,
    y: 80,
    delay: "1.2s",
  },
  {
    name: "MERN Stack",
    Icon: Code2,
    color: "#A78BFA",
    x: 15.2,
    y: 50,
    delay: "0.3s",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    color: "#F0F6FC",
    x: 25.4,
    y: 20,
    delay: "1.8s",
  },
];

function TechnologyIcon({ technology }) {
  const { Icon, color, name, delay } = technology;

  return (
    <div
      className="technology-orbit-icon-position"
      title={name}
      aria-label={name}
      style={{
        left: `${technology.x}%`,
        top: `${technology.y}%`,
      }}
    >
      <div
        className="technology-orbit-floating-icon"
        style={{
          animationDelay: delay,
        }}
      >
        <Icon
          size={46}
          color={color}
          className="technology-orbit-icon block shrink-0 bg-transparent drop-shadow-[0_0_3px_currentColor]"
          style={{
            color,
            shapeRendering: "geometricPrecision",
          }}
        />
      </div>
    </div>
  );
}

export default function TechnologyOrbit() {
  return (
    <section className="technology-orbit">
      <style>
        {`
          @keyframes technologyFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, -10px, 0);
            }
          }

          @keyframes orbitGlow {
            0%, 100% {
              opacity: 0.7;
            }

            50% {
              opacity: 1;
            }
          }

          .technology-orbit {
            position: relative;
            width: 100%;
            max-width: 560px;
            height: 460px;
            margin-inline: auto;
            overflow: visible;
            isolation: isolate;
          }

          .technology-orbit-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            border: 1px solid rgba(96, 165, 250, 0.17);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
          }

          .technology-orbit-ring-one {
            width: 300px;
            height: 300px;
          }

          .technology-orbit-ring-two {
            width: 390px;
            height: 390px;
            border-color: rgba(139, 92, 246, 0.18);
          }

          .technology-orbit-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 230px;
            height: 230px;
            border-radius: 50%;
            background: radial-gradient(
              circle,
              rgba(59, 130, 246, 0.18),
              rgba(99, 102, 241, 0.07) 45%,
              transparent 70%
            );
            filter: blur(20px);
            transform: translate(-50%, -50%);
            pointer-events: none;
          }

          .technology-orbit-center {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 4;
            transform: translate(-50%, -50%);
            animation: orbitGlow 5s ease-in-out infinite;
          }

          .technology-orbit-icon-position {
            position: absolute;
            z-index: 5;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 58px;
            height: 58px;
            transform: translate(-50%, -50%);
          }

          .technology-orbit-floating-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 58px;
            height: 58px;
            background: transparent;
            animation: technologyFloat 4s ease-in-out infinite;
            will-change: transform;
          }

          .technology-orbit-icon {
            background: transparent !important;
            flex-shrink: 0;
          }

          @media (max-width: 1024px) {
            .technology-orbit {
              max-width: 500px;
              height: 440px;
            }

            .technology-orbit-ring-two {
              width: 370px;
              height: 370px;
            }
          }

          @media (max-width: 767px) {
            .technology-orbit {
              max-width: 420px;
              height: 390px;
            }

            .technology-orbit-ring-one {
              width: 250px;
              height: 250px;
            }

            .technology-orbit-ring-two {
              width: 330px;
              height: 330px;
            }

            .technology-orbit-icon-position,
            .technology-orbit-floating-icon {
              width: 48px;
              height: 48px;
            }

            .technology-orbit-icon {
              width: 38px;
              height: 38px;
            }

            .technology-orbit-center {
              width: 100px;
              height: 100px;
            }
          }

          @media (max-width: 420px) {
            .technology-orbit {
              height: 350px;
            }

            .technology-orbit-ring-two {
              width: 290px;
              height: 290px;
            }

            .technology-orbit-icon-position,
            .technology-orbit-floating-icon {
              width: 42px;
              height: 42px;
            }

            .technology-orbit-icon {
              width: 34px;
              height: 34px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .technology-orbit-floating-icon,
            .technology-orbit-center {
              animation: none !important;
            }
          }
        `}
      </style>

      {/* Background glow */}
      <div className="technology-orbit-glow" />

      {/* Circular rings */}
      <div className="technology-orbit-ring technology-orbit-ring-one" />
      <div className="technology-orbit-ring technology-orbit-ring-two" />

      {/* Center branding */}
      <div className="technology-orbit-center flex h-28 w-28 flex-col items-center justify-center rounded-full border border-blue-400/20 bg-[#081127]">
        <Sparkles
          size={34}
          strokeWidth={2.2}
          className="text-blue-400"
          style={{
            color: "#60A5FA",
            shapeRendering: "geometricPrecision",
          }}
        />

        <span className="mt-2 text-xs font-bold tracking-wide text-white">
          PRIMEWEB
        </span>

        <span className="text-[9px] font-medium tracking-[2px] text-blue-300">
          DYNAMICS
        </span>
      </div>

      {/* Icons aligned around the circle */}
      {technologies.map((technology) => (
        <TechnologyIcon
          key={technology.name}
          technology={technology}
        />
      ))}
    </section>
  );
}
