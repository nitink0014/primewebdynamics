
import aboutData from "../data/aboutData.json";

function SectionTitle({ children }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold uppercase text-slate-900 md:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-orange-500" />
    </div>
  );
}

export default function About() {
  const {
    hero,
    mission,
    vision,
    whatWeDo,
    industryConnections,
    contactCTA,
    topCourses,
    stats,
    inquiry,
    testimonials,
  } = aboutData;

  return (
    <main className="overflow-hidden bg-white">

      {/* Hero Section */}
      <section
        className="relative flex min-h-[320px] items-center justify-center bg-cover bg-center px-5 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 17, 40, 0.82), rgba(3, 17, 40, 0.82)), url('${hero.backgroundImage}')`,
        }}
      >
        <div className="relative z-10">
          <span className="inline-block bg-blue-700 px-4 py-2 text-4xl font-extrabold text-white md:text-5xl">
            {hero.title}
          </span>

          <h1 className="mt-5 text-2xl font-bold text-white md:text-4xl">
            {hero.heading}
          </h1>

          <p className="mt-4 text-base text-gray-200 md:text-lg">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle>{mission.title}</SectionTitle>

        <p className="text-justify text-base leading-8 text-gray-700 md:text-lg">
          {mission.description}
        </p>
      </section>

      {/* Vision */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle>{vision.title}</SectionTitle>

          <p className="text-center text-lg leading-8 text-gray-700">
            {vision.description}
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle>{whatWeDo.title}</SectionTitle>

        <div className="grid gap-8 md:grid-cols-3">
          {whatWeDo.items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">{item.icon}</div>

              <h3 className="mb-3 text-xl font-bold text-blue-800">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Connections */}
      <section className="bg-[#061d38] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold uppercase">
              {industryConnections.title}
            </h2>

            <div className="mt-3 h-1 w-64 bg-orange-500" />

            <h3 className="mt-8 text-xl font-semibold text-orange-400">
              {industryConnections.subtitle}
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              {industryConnections.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {industryConnections.partners.map((partner) => (
              <div
                key={partner}
                className="flex h-24 items-center justify-center rounded-lg border-2 border-orange-500 bg-white p-3 text-center text-lg font-bold text-blue-900 transition hover:scale-105"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-700 px-6 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold">
              {contactCTA.title}
            </h2>

            <p className="mt-3 text-blue-100">
              {contactCTA.description}
            </p>
          </div>

          <a
            href={contactCTA.buttonLink}
            className="rounded-md bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            {contactCTA.buttonText} →
          </a>
        </div>
      </section>

      {/* Top Courses */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle>{topCourses.title}</SectionTitle>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topCourses.courses.map((course) => (
            <a
              href={topCourses.link}
              key={course}
              className="rounded-md border border-blue-200 px-5 py-5 font-semibold text-blue-800 shadow-md transition hover:bg-blue-800 hover:text-white"
            >
              {course} →
            </a>
          ))}
        </div>
      </section>

      {/* Success Stats */}
      <section className="bg-gradient-to-r from-[#263b75] to-[#54136d] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 text-center md:grid-cols-3">
          {stats.items.map((stat) => (
            <div key={stat.id}>
              <h3 className="text-5xl font-extrabold text-orange-400 md:text-6xl">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Section */}
      <section
        className="bg-cover bg-center px-6 py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 15, 30, 0.88), rgba(2, 15, 30, 0.88)), url('${inquiry.backgroundImage}')`,
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* Contact Information */}
          <div className="text-white">
            <h2 className="text-3xl font-bold text-orange-500 md:text-4xl">
              {inquiry.title}
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-200">
              {inquiry.description}
            </p>

            <div className="mt-10 space-y-7">
              {inquiry.contactDetails.map((detail) => (
                <div key={detail.id}>
                  <span className="text-3xl">{detail.icon}</span>

                  <h3 className="mt-2 font-bold text-orange-400">
                    {detail.title}
                  </h3>

                  <p>{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-2xl bg-white p-7 shadow-2xl md:p-10"
          >
            <h3 className="mb-5 text-2xl font-bold text-blue-900">
              {inquiry.form.title}
            </h3>

            <input
              type="text"
              placeholder={inquiry.form.fields.namePlaceholder}
              required
              className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder={inquiry.form.fields.emailPlaceholder}
              required
              className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
            />

            <input
              type="tel"
              placeholder={inquiry.form.fields.phonePlaceholder}
              required
              className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
            />

            <select
              required
              defaultValue=""
              className="w-full rounded-lg border border-gray-300 p-4 text-gray-500 outline-none focus:border-blue-600"
            >
              <option value="" disabled>
                {inquiry.form.fields.coursePlaceholder}
              </option>

              {topCourses.courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-900 py-4 font-bold text-white transition hover:bg-orange-500"
            >
              {inquiry.form.submitText}
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle>{testimonials.title}</SectionTitle>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-8 shadow-lg"
              >
                <div className="text-5xl font-bold text-orange-400">
                  “
                </div>

                <p className="min-h-28 leading-7 text-gray-600">
                  {item.review}
                </p>

                <div className="mt-6 border-t pt-5">
                  <h3 className="font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-blue-700">
                    {item.course}
                  </p>

                  <p className="mt-2 text-lg text-yellow-500">
                    {"★".repeat(item.rating)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
