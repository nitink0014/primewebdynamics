
import { useState } from "react";
import {
  ArrowRight,
  Target,
  Telescope,
  GraduationCap,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import aboutData from "../data/aboutData.json";

function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-[#1760a4]">
        <Sparkles size={14} />
        Prime Webdynamics
      </span>

      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {children}
      </h2>

      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-500" />

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-slate-400 focus:border-[#2878ce] focus:bg-white focus:ring-4 focus:ring-blue-100";

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

    const updatedValue =
      name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
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
        className="relative flex min-h-[360px] items-center justify-center bg-cover bg-center px-5 py-20 text-center sm:min-h-[420px]"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(3, 17, 40, 0.94), rgba(10, 48, 91, 0.82)), url('${hero.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(40,120,206,0.25),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-blue-100 backdrop-blur-sm">
            <Sparkles size={14} className="text-orange-400" />
            About Our Institute
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {hero.title}
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />

          <h2 className="mt-6 text-xl font-bold text-blue-100 sm:text-2xl">
            {hero.heading}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionTitle>{whoWeAre.title}</SectionTitle>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[2px] text-orange-500">
              <span className="h-0.5 w-7 bg-orange-500" />
              Bridging the Gap Between College & Career
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Learn Practical Skills.
              <span className="block text-[#1760a4]">
                Build Your Future.
              </span>
            </h2>

            <p className="mt-6 text-justify text-sm leading-8 text-slate-600 sm:text-base">
              {whoWeAre.description}
            </p>

            <p className="mt-4 text-justify text-sm leading-8 text-slate-600 sm:text-base">
              {whoWeAre.additionalDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-[#1760a4]">
                <GraduationCap size={19} />
                Practical Learning
              </span>

              <span className="inline-flex items-center gap-2 rounded-lg bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-700">
                <BookOpen size={18} />
                Real-World Projects
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-2/3 w-2/3 rounded-3xl bg-orange-100" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-2 shadow-[0_20px_60px_rgba(15,35,65,0.12)]">
              <img
                src={hero.backgroundImage}
                alt="Prime Webdynamics training environment"
                className="h-[300px] w-full rounded-2xl object-cover sm:h-[400px]"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-[#061d38]/90 p-5 text-white backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[2px] text-orange-400">
                  Learn. Practice. Grow.
                </p>
                <p className="mt-2 text-lg font-bold">
                  Skills that prepare you for the real world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="relative overflow-hidden bg-[#f5f8fc] px-5 py-16 sm:px-8 sm:py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle subtitle="The principles that guide our approach to education and professional development.">
            Our Purpose & Direction
          </SectionTitle>

          <div className="grid gap-7 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-[0_8px_30px_rgba(15,35,65,0.05)] sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1760a4]">
                <Target size={29} />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold text-slate-900">
                {mission.title}
              </h3>

              <div className="mt-3 h-1 w-12 rounded-full bg-orange-500" />

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                {mission.description}
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white p-7 shadow-[0_8px_30px_rgba(15,35,65,0.05)] sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Telescope size={29} />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold text-slate-900">
                {vision.title}
              </h3>

              <div className="mt-3 h-1 w-12 rounded-full bg-blue-600" />

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                {vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionTitle subtitle="Discover the learning environment and support that help students develop practical skills.">
          {whyChooseUs.title}
        </SectionTitle>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.items.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_5px_22px_rgba(15,35,65,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,35,65,0.09)]"
            >
              <span className="absolute right-5 top-5 text-3xl font-extrabold tracking-tight text-slate-100">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-colors duration-200 group-hover:bg-blue-100">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-orange-500 transition-[width] duration-200 group-hover:w-16" />
            </div>
          ))}
        </div>
      </section>

      {/* Learning Journey */}
      <section className="relative overflow-hidden bg-[#061d38] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle>
            {learningJourney.title}
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-3">
            {learningJourney.items.map((item, index) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 text-center transition-[border-color,background-color] duration-200 hover:border-white/20 hover:bg-white/[0.09] sm:p-9"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-orange-400/30 bg-orange-500/10 text-xl font-extrabold text-orange-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-7 text-xl font-extrabold text-white sm:text-2xl">
                  {item.title}
                </h3>

                <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-orange-500" />

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#12549a] to-[#176fc0] px-5 py-14 text-white sm:px-8 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[40px] border-white/5" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[2px] text-blue-100">
              Take the Next Step
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              {contactCTA.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
              {contactCTA.description}
            </p>
          </div>

          <a
            href={contactCTA.buttonLink}
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-950/10 transition-colors duration-200 hover:bg-orange-600"
          >
            {contactCTA.buttonText}
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

      {/* Top Courses */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionTitle subtitle="Explore the training programs available at Prime Webdynamics.">
          {topCourses.title}
        </SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topCourses.courses.map((course, index) => (
            <a
              href={topCourses.link}
              key={course}
              className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-[0_4px_16px_rgba(15,35,65,0.035)] transition-[border-color,box-shadow,background-color] duration-200 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-[0_8px_22px_rgba(15,35,65,0.07)]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-extrabold text-[#1760a4]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-bold leading-6 text-slate-800 transition-colors group-hover:text-[#1760a4]">
                  {course}
                </span>
              </div>

              <ArrowRight
                size={18}
                className="shrink-0 text-slate-400 transition-colors group-hover:text-orange-500"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Inquiry Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center px-5 py-16 sm:px-8 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(110deg, rgba(3, 17, 40, 0.96), rgba(5, 31, 59, 0.92)), url('${inquiry.backgroundImage}')`,
        }}
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Contact Information */}
          <div className="pt-2 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-orange-300">
              <Phone size={14} />
              Get In Touch
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
              {inquiry.title}
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-orange-500" />

            <p className="mt-6 max-w-lg text-sm leading-8 text-slate-300 sm:text-base">
              {inquiry.description}
            </p>

            <div className="mt-10 space-y-5">
              {inquiry.contactDetails.map((detail, index) => {
                const DetailIcon = [Phone, Mail, MapPin][index % 3];

                return (
                  <div
                    key={detail.id}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                      <DetailIcon size={22} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-white">
                        {detail.title}
                      </h3>

                      {detail.link ? (
                        <a
                          href={detail.link}
                          target={
                            detail.link.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            detail.link.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          className="mt-1 block break-words text-sm leading-7 text-slate-300 transition-colors hover:text-orange-300"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm leading-7 text-slate-300">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inquiry Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-white/20 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.22)] sm:p-9"
          >
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-[2px] text-orange-500">
                Course Enquiry
              </span>

              <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                {inquiry.form.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Share your details and we'll get in touch with you.
              </p>
            </div>

            <div className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="about-name"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  id="about-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={inquiry.form.fields.namePlaceholder}
                  autoComplete="name"
                  required
                  className={inputClass}
                />

                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="about-email"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Email Address
                  <span className="ml-1 font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <input
                  id="about-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={inquiry.form.fields.emailPlaceholder}
                  autoComplete="email"
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="about-phone"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  id="about-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={inquiry.form.fields.phonePlaceholder}
                  autoComplete="tel"
                  required
                  maxLength={10}
                  inputMode="numeric"
                  className={inputClass}
                />

                {errors.phone && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Course */}
              <div>
                <label
                  htmlFor="about-course"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Interested Course
                  <span className="ml-1 font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <select
                  id="about-course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
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
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#12549a] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-900/10 transition-colors duration-200 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <Send size={18} />
                {inquiry.form.submitText}
              </button>

              {isSubmitted && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700"
                >
                  <CheckCircle2 size={20} className="shrink-0" />
                  <span>{inquiry.form.successMessage}</span>
                </div>
              )}

              <p className="text-center text-xs text-slate-400">
                * Name and phone number are required.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
