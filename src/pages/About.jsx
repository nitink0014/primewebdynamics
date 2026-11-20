import { useState } from "react";
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
    whoWeAre,
    mission,
    vision,
    whyChooseUs,
    learningJourney,
    contactCTA,
    topCourses,
    inquiry,
  } = aboutData;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    const phone = formData.phone.replace(/\D/g, "");

    if (!formData.name.trim()) {
      newErrors.name = inquiry.form.validation.nameRequired;
    }

    if (!phone) {
      newErrors.phone = inquiry.form.validation.phoneRequired;
    } else if (phone.length !== 10) {
      newErrors.phone = inquiry.form.validation.phoneInvalid;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const submissionData = {
      ...formData,
      name: formData.name.trim(),
      phone,
    };

    console.log("About Inquiry Details:", submissionData);

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
    });

    setErrors({});
    setIsSubmitted(true);
  };

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

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle>{whoWeAre.title}</SectionTitle>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Bridging the Gap Between College & Career
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Learn Practical Skills. Build Your Future.
            </h2>

            <p className="mt-6 text-justify text-base leading-8 text-gray-700">
              {whoWeAre.description}
            </p>

            <p className="mt-4 text-justify text-base leading-8 text-gray-700">
              {whoWeAre.additionalDescription}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={hero.backgroundImage}
              alt="Prime Webdynamics training environment"
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-3xl">
              🎯
            </div>

            <h2 className="text-2xl font-bold text-blue-900">
              {mission.title}
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              {mission.description}
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-white p-8 shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-3xl">
              🔭
            </div>

            <h2 className="text-2xl font-bold text-blue-900">
              {vision.title}
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              {vision.description}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle>{whyChooseUs.title}</SectionTitle>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.items.map((item) => (
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

      {/* Learning Journey */}
      <section className="bg-[#061d38] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold uppercase md:text-4xl">
            {learningJourney.title}
          </h2>

          <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-orange-500" />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {learningJourney.items.map((item, index) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center transition hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-extrabold text-white">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-orange-400">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {item.description}
                </p>
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

                  {detail.link ? (
                    <a
                      href={detail.link}
                      target={detail.link.startsWith("http") ? "_blank" : undefined}
                      rel={
                        detail.link.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="break-words transition hover:text-orange-300"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="leading-7">{detail.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 rounded-2xl bg-white p-7 shadow-2xl md:p-10"
          >
            <h3 className="mb-5 text-2xl font-bold text-blue-900">
              {inquiry.form.title}
            </h3>

            {/* Name - Required */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={inquiry.form.fields.namePlaceholder}
                required
                className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email - Optional */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={inquiry.form.fields.emailPlaceholder}
              className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
            />

            {/* Phone - Required */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={inquiry.form.fields.phonePlaceholder}
                required
                maxLength={10}
                inputMode="numeric"
                className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Course - Optional */}
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-4 text-gray-500 outline-none focus:border-blue-600"
            >
              <option value="">
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

            {isSubmitted && (
              <p className="rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
                {inquiry.form.successMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}