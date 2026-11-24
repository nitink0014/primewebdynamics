
import companiesData from "../../data/companiesData.json";

function CompaniesSection() {
  const benefits = companiesData.logos;

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-16 font-sans sm:px-8 sm:py-20 lg:px-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#438fe5] sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#151b2a] sm:text-4xl lg:text-5xl">
            {companiesData.title}{" "}
            <span className="text-[#5099fa]">
              {companiesData.highlight}
            </span>{" "}
            {companiesData.titleEnd}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#647084] sm:text-base lg:text-lg">
            {companiesData.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {benefits.map((item) => (
            <article
              key={item.id}
              className="group relative flex min-h-[175px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#e3ebf6] bg-white p-5 text-center shadow-[0_4px_20px_rgba(25,55,100,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-[#b9d7fa] hover:shadow-[0_12px_30px_rgba(25,55,100,0.10)] sm:min-h-[195px] sm:p-7"
            >
              {/* Top accent line */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#5099fa] transition-[width] duration-300 ease-out group-hover:w-1/2" />

              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf5ff] text-3xl sm:h-16 sm:w-16 sm:text-4xl">
                <span aria-hidden="true">{item.image}</span>
              </div>

              {/* Benefit title */}
              <h3 className="max-w-[220px] text-sm font-bold leading-snug text-[#243653] sm:text-base">
                {item.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompaniesSection;
