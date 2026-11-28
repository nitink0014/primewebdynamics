
import chooseUsData from "../../data/chooseUsData.json";

function ChooseUs() {
  const benefits = chooseUsData.logos;

  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 3;
    const rotateX = ((centerY - y) / centerY) * 3;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-5px)
    `;
  };

  const handleCardLeave = (event) => {
    const card = event.currentTarget;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  };

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-16 font-sans sm:px-8 sm:py-20 lg:px-12">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-600 sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#151b2a] sm:text-4xl lg:text-5xl">
            {chooseUsData.title}{" "}

            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {chooseUsData.highlight}
            </span>{" "}

            {chooseUsData.titleEnd}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#647084] sm:text-base lg:text-lg">
            {chooseUsData.subtitle}
          </p>

        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

          {benefits.map((item, index) => (
            <article
              key={item.id}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              className="
                group relative flex min-h-[210px]
                flex-col items-center justify-center
                overflow-hidden rounded-3xl
                border border-slate-200/80
                bg-white/90 p-7 text-center
                shadow-[0_8px_30px_rgba(15,40,90,0.045)]
                transition-[transform,border-color,box-shadow]
                duration-300 ease-out
                will-change-transform
                hover:border-blue-200
                hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]
                sm:min-h-[230px] sm:p-8
              "
            >

              {/* Cursor Glow */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59,130,246,0.10), transparent 75%)",
                }}
              />

              {/* Decorative Number */}
              <span className="pointer-events-none absolute right-5 top-4 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="
                  relative mb-5 flex h-16 w-16
                  items-center justify-center
                  rounded-2xl border border-blue-100
                  bg-gradient-to-br from-blue-50 to-indigo-50
                  text-3xl
                  shadow-sm
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:border-blue-200
                  group-hover:shadow-[0_8px_22px_rgba(59,130,246,0.15)]
                  sm:h-[72px] sm:w-[72px] sm:text-4xl
                "
              >
                <span aria-hidden="true">
                  {item.image}
                </span>
              </div>

              {/* Benefit Title */}
              <h3 className="relative max-w-[260px] text-base font-bold leading-snug text-[#243653] transition-colors duration-300 group-hover:text-blue-700 sm:text-lg">
                {item.name}
              </h3>

              {/* Bottom Accent */}
              <div className="relative mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-50 transition-all duration-300 group-hover:w-16 group-hover:opacity-100" />

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ChooseUs;
