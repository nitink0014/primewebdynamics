
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { renderToStaticMarkup } from "react-dom/server";

import * as SimpleIcons from "react-icons/si";
import * as FontAwesome from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------------------
   TECHNOLOGY ICONS
--------------------------------------------- */

const LOGOS = [
  ["SiHtml5", "#E34F26"],
  ["SiCss3", "#1572B6"],
  ["SiJavascript", "#F7DF1E"],
  ["SiReact", "#61DAFB"],
  ["SiFlutter", "#02569B"],
  ["SiAndroid", "#3DDC84"],
  ["SiGoogleads", "#4285F4"],
  ["SiGoogleanalytics", "#E37400"],
  ["SiPython", "#3776AB"],
  ["SiDjango", "#44B78B"],
  ["SiFlask", "#FFFFFF"],
  ["SiTailwindcss", "#06B6D4"],
  ["SiNodedotjs", "#339933"],
  ["SiExpress", "#FFFFFF"],
  ["SiMongodb", "#47A248"],
  ["SiMysql", "#4479A1"],
  ["SiMicrosoftexcel", "#217346"],
  ["SiPowerbi", "#F2C811"],
  ["SiTypescript", "#3178C6"],
  ["SiNextdotjs", "#FFFFFF"],
  ["SiVite", "#646CFF"],
  ["SiGithub", "#FFFFFF"],
  ["SiDocker", "#2496ED"],
  ["SiAmazonaws", "#FF9900"],
  ["SiFigma", "#F24E1E"],
  ["SiWordpress", "#21759B"],
  ["SiPhp", "#777BB4"],
  ["SiLaravel", "#FF2D20"],
  ["FaCode", "#7DD3FC"],
  ["FaDatabase", "#60A5FA"],
];

/* ---------------------------------------------
   LOGO POSITIONS
--------------------------------------------- */

function createLogoData(mobile, viewport) {
  const selected = mobile
    ? LOGOS.slice(0, 12)
    : LOGOS;

  return selected.map(([icon, color], i) => {
    const angle = i * 2.399;

    const radiusX = mobile
      ? viewport.width * 0.3
      : 3.6;

    const radiusY = mobile
      ? viewport.height * 0.24
      : 2.5;

    return {
      icon,
      color,

      x: Math.cos(angle) * radiusX,
      y: Math.sin(angle) * radiusY,

      startZ: -75 - (i % 5) * 5,

      passZ: mobile
        ? -2 + (i % 3) * 1.2
        : -1 + (i % 4) * 1.5,

      endZ: mobile ? 12 : 18,

      delay: mobile
        ? i * 0.8
        : i * 0.52,
    };
  });
}

/* ---------------------------------------------
   TECHNOLOGY TEXTURE
   VIBRANT COLORS + NEON GLOW
--------------------------------------------- */

function createTechnologyTexture(iconName, color) {
  const Icon =
    SimpleIcons[iconName] ||
    FontAwesome[iconName] ||
    FontAwesome.FaCode;

  const canvas = document.createElement("canvas");

  canvas.width = 512;
  canvas.height = 512;

  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  context.clearRect(0, 0, 512, 512);

  /*
   * Solid dark glass background
   */

  context.fillStyle = "rgba(3, 14, 30, 1)";

  context.beginPath();
  context.roundRect(45, 45, 422, 422, 70);
  context.fill();

  /*
   * Glowing card border
   */

  context.save();

  context.shadowColor = color;
  context.shadowBlur = 45;

  context.strokeStyle = color;
  context.lineWidth = 7;

  context.beginPath();
  context.roundRect(45, 45, 422, 422, 70);
  context.stroke();

  context.restore();

  /*
   * Subtle colored background glow
   */

  const glowGradient = context.createRadialGradient(
    256,
    256,
    25,
    256,
    256,
    260
  );

  glowGradient.addColorStop(0, color + "30");
  glowGradient.addColorStop(0.45, color + "18");
  glowGradient.addColorStop(0.8, color + "08");
  glowGradient.addColorStop(1, "transparent");

  context.fillStyle = glowGradient;

  context.beginPath();
  context.roundRect(48, 48, 416, 416, 68);
  context.fill();

  /*
   * Render React icon as SVG
   */

  const svgMarkup = renderToStaticMarkup(
    <Icon
      color={color}
      size="280"
    />
  );

  /*
   * Fix SVG attributes
   */

  const coloredSvg = svgMarkup
    .replace(/currentColor/gi, color)
    .replace(
      /<svg\b([^>]*)>/i,
      (match, attributes) => {
        const cleanAttributes = attributes
          .replace(/\s(width|height)="[^"]*"/gi, "")
          .replace(/\sxmlns="[^"]*"/gi, "");

        return (
          `<svg xmlns="http://www.w3.org/2000/svg"` +
          `${cleanAttributes} width="280" height="280">`
        );
      }
    );

  /*
   * SVG image
   */

  const image = new Image();

  const texture = new THREE.CanvasTexture(canvas);

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  image.onload = () => {
    /*
     * Outer neon glow
     */

    context.save();

    context.globalCompositeOperation = "lighter";
    context.shadowColor = color;
    context.shadowBlur = 85;
    context.globalAlpha = 0.75;

    context.drawImage(
      image,
      100,
      100,
      312,
      312
    );

    /*
     * Inner neon glow
     */

    context.shadowBlur = 45;
    context.globalAlpha = 0.9;

    context.drawImage(
      image,
      116,
      116,
      280,
      280
    );

    context.restore();

    /*
     * Bright original logo
     */

    context.save();

    context.globalCompositeOperation = "source-over";
    context.globalAlpha = 1;
    context.shadowBlur = 0;

    context.filter =
      "saturate(1.8) brightness(1.25)";

    context.drawImage(
      image,
      116,
      116,
      280,
      280
    );

    context.restore();

    /*
     * Extra crisp color layer
     */

    context.save();

    context.globalCompositeOperation = "source-over";
    context.globalAlpha = 1;
    context.filter = "none";

    context.drawImage(
      image,
      116,
      116,
      280,
      280
    );

    context.restore();

    texture.needsUpdate = true;
  };

  image.onerror = () => {
    console.error(
      `Technology icon texture failed: ${iconName}`
    );
  };

  image.src =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(coloredSvg);

  return texture;
}

/* ---------------------------------------------
   TECHNOLOGY SPRITE
--------------------------------------------- */

function BrandLogo({
  iconName,
  color,
  mobile,
  cardRef,
}) {
  const texture = useMemo(
    () => createTechnologyTexture(iconName, color),
    [iconName, color]
  );

  useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);

  const spriteSize = mobile ? 1.4 : 1.9;

  return (
    <sprite
      ref={cardRef}
      scale={[
        spriteSize,
        spriteSize,
        1,
      ]}
    >
      <spriteMaterial
        map={texture}
        color="#ffffff"
        transparent
        opacity={0}
        depthWrite={false}
        depthTest={false}
        blending={THREE.NormalBlending}
        toneMapped={false}
      />
    </sprite>
  );
}

/* ---------------------------------------------
   SCROLL CONTROLLER
--------------------------------------------- */

function ScrollController({
  sectionRef,
  logoRefs,
  cardRefs,
  items,
}) {
  const { camera, size } = useThree();

  const mobile = size.width < 768;

  useLayoutEffect(() => {
    const section = sectionRef?.current;

    if (!section) return undefined;

    let refreshFrame;

    const ctx = gsap.context(() => {
      /*
       * Initial icon state
       */

      items.forEach((item, i) => {
        const object = logoRefs.current[i];
        const sprite = cardRefs.current[i];

        if (!object || !sprite) return;

        object.position.set(
          item.x,
          item.y,
          item.startZ
        );

        object.rotation.set(0, 0, 0);

        sprite.material.opacity = 0;

        sprite.scale.setScalar(0.01);
      });

      /*
       * Initial camera
       */

      camera.position.set(0, 0, 7.5);

      camera.rotation.set(0, 0, 0);

      /*
       * Scroll timeline
       */

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () =>
            `+=${Math.max(
              section.offsetHeight * 0.7,
              window.innerHeight * 1.8
            )}`,

          scrub: 0.8,

          invalidateOnRefresh: true,

          fastScrollEnd: false,

          anticipatePin: 1,
        },
      });

      /*
       * Camera movement
       */

      timeline.to(
        camera.position,
        {
          z: mobile ? -30 : -42,
          x: mobile ? 0 : 0.15,
          y: mobile ? 0 : 0.1,
          duration: 20,
        },
        0
      );

      timeline.to(
        camera.rotation,
        {
          x: mobile ? 0.01 : -0.025,
          y: mobile ? 0 : 0.025,
          z: 0,
          duration: 20,
        },
        0
      );

      /*
       * Technology icons
       */

      items.forEach((item, i) => {
        const object = logoRefs.current[i];
        const sprite = cardRefs.current[i];

        if (!object || !sprite) return;

        const start = 0.5 + item.delay;

        /*
         * Reveal icon
         */

        timeline.to(
          sprite.material,
          {
            opacity: 1,
            duration: 1.1,
            ease: "power2.out",
          },
          start
        );

        timeline.to(
          sprite.scale,
          {
            x: mobile ? 1.4 : 1.9,
            y: mobile ? 1.4 : 1.9,
            z: 1,
            duration: 1.1,
            ease: "back.out(1.3)",
          },
          start
        );

        /*
         * Move towards camera
         */

        timeline.to(
          object.position,
          {
            z: item.passZ,
            duration: 3.5,
            ease: "none",
          },
          start
        );

        /*
         * Gentle rotation
         */

        timeline.to(
          object.rotation,
          {
            x: mobile ? 0.03 : 0.08,
            y: mobile ? 0.04 : 0.12,
            z: mobile ? 0.01 : 0.025,
            duration: 3.5,
            ease: "none",
          },
          start
        );

        /*
         * Pass camera
         */

        timeline.to(
          object.position,
          {
            z: item.endZ,
            duration: 1.8,
            ease: "power1.in",
          },
          start + 3.5
        );

        /*
         * Fade out
         */

        timeline.to(
          sprite.material,
          {
            opacity: 0,
            duration: 0.9,
            ease: "power2.in",
          },
          start + 4.5
        );

        timeline.to(
          sprite.scale,
          {
            x: 0.01,
            y: 0.01,
            z: 1,
            duration: 0.9,
            ease: "power2.in",
          },
          start + 4.5
        );
      });

      /*
       * Final camera movement
       */

      timeline.to(
        camera.position,
        {
          z: mobile ? -34 : -46,
          duration: 3,
        },
        17
      );

      refreshFrame = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, section);

    return () => {
      if (refreshFrame) {
        cancelAnimationFrame(refreshFrame);
      }

      ctx.revert();
    };
  }, [
    camera,
    sectionRef,
    logoRefs,
    cardRefs,
    items,
    mobile,
  ]);

  return null;
}

/* ---------------------------------------------
   TUNNEL ARCHITECTURE
--------------------------------------------- */

function TunnelArchitecture() {
  const { size } = useThree();

  const mobile = size.width < 768;

  const frames = useMemo(() => {
    const result = [];

    const spacing = mobile ? 6 : 5;

    for (let z = -105; z <= 20; z += spacing) {
      result.push(z);
    }

    return result;
  }, [mobile]);

  return (
    <group>
      {frames.map((z, i) => (
        <group
          key={z}
          position={[0, 0, z]}
        >
          <mesh position={[-5.1, 0, 0]}>
            <boxGeometry
              args={[
                0.055,
                mobile ? 5.5 : 7.2,
                0.1,
              ]}
            />

            <meshBasicMaterial
              color={i % 2 ? "#087FA8" : "#36D9FF"}
            />
          </mesh>

          <mesh position={[5.1, 0, 0]}>
            <boxGeometry
              args={[
                0.055,
                mobile ? 5.5 : 7.2,
                0.1,
              ]}
            />

            <meshBasicMaterial
              color={i % 2 ? "#087FA8" : "#36D9FF"}
            />
          </mesh>

          {!mobile && (
            <>
              <mesh position={[0, 3.55, 0]}>
                <boxGeometry
                  args={[10.2, 0.07, 0.12]}
                />

                <meshBasicMaterial color="#087FA8" />
              </mesh>

              <mesh position={[0, -3.55, 0]}>
                <boxGeometry
                  args={[10.2, 0.07, 0.12]}
                />

                <meshBasicMaterial color="#087FA8" />
              </mesh>
            </>
          )}
        </group>
      ))}

      {/* Digital floor */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3.2, -45]}
      >
        <planeGeometry
          args={[mobile ? 9 : 10.5, 150]}
        />

        <meshStandardMaterial
          color="#031323"
          metalness={0.7}
          roughness={0.28}
          emissive="#062B48"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Floor circuit lines */}

      {Array.from(
        { length: mobile ? 9 : 21 },
        (_, i) => (
          <mesh
            key={i}
            position={[
              (i - (mobile ? 4 : 10)) *
                (mobile ? 0.8 : 0.48),
              -3.15,
              -85 + (i % 8) * 12,
            ]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry
              args={[0.025, mobile ? 14 : 22]}
            />

            <meshBasicMaterial
              color="#16BFEA"
              transparent
              opacity={0.4}
            />
          </mesh>
        )
      )}

      {/* Holographic panels */}

      {!mobile &&
        frames.slice(3, -3).map((z) => (
          <group
            key={`panel-${z}`}
            position={[0, 0.3, z]}
          >
            {[-1, 1].map((side) => (
              <group
                key={side}
                position={[side * 4.92, 0, 0]}
              >
                <mesh
                  rotation={[0, side * -0.16, 0]}
                >
                  <planeGeometry args={[1.7, 2.4]} />

                  <meshBasicMaterial
                    color="#073B61"
                    transparent
                    opacity={0.4}
                    side={THREE.DoubleSide}
                  />
                </mesh>

                {Array.from(
                  { length: 5 },
                  (_, line) => (
                    <mesh
                      key={line}
                      position={[
                        0,
                        0.7 - line * 0.3,
                        0.025,
                      ]}
                      rotation={[
                        0,
                        side * -0.16,
                        0,
                      ]}
                    >
                      <planeGeometry
                        args={[
                          0.6 + (line % 3) * 0.3,
                          0.025,
                        ]}
                      />

                      <meshBasicMaterial
                        color="#36D9FF"
                        transparent
                        opacity={0.65}
                      />
                    </mesh>
                  )
                )}
              </group>
            ))}
          </group>
        ))}
    </group>
  );
}

/* ---------------------------------------------
   AMBIENT PARTICLES
--------------------------------------------- */

function AmbientParticles() {
  const pointsRef = useRef();

  const { size } = useThree();

  const mobile = size.width < 768;

  const positions = useMemo(() => {
    const count = mobile ? 90 : 320;

    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      values[i * 3] =
        (Math.random() - 0.5) * 12;

      values[i * 3 + 1] =
        (Math.random() - 0.5) * 8;

      values[i * 3 + 2] =
        -100 + Math.random() * 110;
    }

    return values;
  }, [mobile]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.z += delta * 0.003;

    pointsRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#59DFFF"
        size={mobile ? 0.025 : 0.035}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

/* ---------------------------------------------
   SCENE
--------------------------------------------- */

function Scene({ sectionRef }) {
  const logoRefs = useRef([]);
  const cardRefs = useRef([]);

  const { size } = useThree();

  const mobile = size.width < 768;

  const items = useMemo(
    () =>
      createLogoData(mobile, {
        width: size.width / 100,
        height: size.height / 100,
      }),
    [mobile, size.width, size.height]
  );

  const setLogoRef = useCallback((index, node) => {
    logoRefs.current[index] = node;
  }, []);

  const setCardRef = useCallback((index, node) => {
    cardRefs.current[index] = node;
  }, []);

  return (
    <>
      <color
        attach="background"
        args={["#020914"]}
      />

      <fog
        attach="fog"
        args={[
          "#020914",
          mobile ? 15 : 20,
          100,
        ]}
      />

      <ambientLight intensity={0.6} />

      <pointLight
        position={[0, 2, 4]}
        color="#42DFFF"
        intensity={mobile ? 12 : 22}
        distance={35}
      />

      <pointLight
        position={[-4, 1, -20]}
        color="#087BFF"
        intensity={mobile ? 8 : 14}
        distance={35}
      />

      {!mobile && (
        <pointLight
          position={[4, -1, -50]}
          color="#00D9FF"
          intensity={14}
          distance={40}
        />
      )}

      <TunnelArchitecture />

      <AmbientParticles />

      {items.map((item, i) => (
        <group
          key={`${item.icon}-${i}`}
          ref={(node) => setLogoRef(i, node)}
          position={[
            item.x,
            item.y,
            item.startZ,
          ]}
        >
          <BrandLogo
            iconName={item.icon}
            color={item.color}
            mobile={mobile}
            cardRef={(node) => setCardRef(i, node)}
          />
        </group>
      ))}

      <ScrollController
        sectionRef={sectionRef}
        logoRefs={logoRefs}
        cardRefs={cardRefs}
        items={items}
      />
    </>
  );
}

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */

export default function TechnologyTunnel({
  sectionRef,
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{
          position: [0, 0, 7.5],
          fov: 62,
          near: 0.1,
          far: 180,
        }}
        dpr={[1, 1.25]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <Scene sectionRef={sectionRef} />
      </Canvas>

      {/* Cinematic vignette */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 20%,
              rgba(2, 9, 20, 0.25) 65%,
              rgba(2, 9, 20, 0.75) 100%
            )
          `,
        }}
      />

      {/* Atmospheric overlay */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,15,35,.08), transparent 35%, rgba(0,10,25,.2))",
        }}
      />
    </div>
  );
}
