
import { useState } from "react";
import {
  Send,
  ExternalLink,
  Globe,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Building2,
} from "lucide-react";

import contact from "../data/contact.json";

function Contact() {
  const {
    hero,
    form,
    courses,
    branches,
    branchesSection,
    map,
  } = contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    center: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedValue =
      name === "phone"
        ? value.replace(/\D/g, "").slice(0, 10)
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setSubmitted(false);

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = form.validation.nameRequired;
    }

    if (!formData.phone) {
      newErrors.phone = form.validation.phoneRequired;
    } else if (formData.phone.length !== 10) {
      newErrors.phone = form.validation.phoneInvalid;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    console.log("Contact Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      center: "",
      course: "",
      message: "",
    });

    setErrors({});
  };

  const inputStyle =
    "w-full rounded-xl border border-[#dce4ef] bg-[#fbfcfe] px-4 py-3.5 text-sm text-[#26364d] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[#9aa6b6] focus:border-[#2878ce] focus:bg-white focus:ring-4 focus:ring-[#2878ce]/10";

  const labelStyle =
    "mb-2 block text-[13px] font-bold text-[#26364d]";

  const getFieldStyle = (fieldName) =>
    `${inputStyle} ${
      errors[fieldName]
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : ""
    }`;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8fc] text-[#172943]">

      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-cover bg-center px-5 py-20 text-center sm:min-h-[450px]"
        style={{
          backgroundImage: `linear-gradient(110deg, rgba(8, 25, 55, 0.92), rgba(16, 43, 78, 0.78)), url('${hero.backgroundImage}')`,
        }}
      >
        <div className="pointer-events-none absolute -left-32 -top-40 h-[400px] w-[400px] rounded-full bg-blue-400/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[850px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-white/[0.08] px-5 py-2 text-[11px] font-extrabold tracking-[1.8px] text-blue-200">
            <MessageCircle size={15} />
            GET IN TOUCH
          </span>

          <h1 className="mt-6 text-[38px] font-extrabold leading-[1.12] tracking-[-1.5px] text-white sm:text-[52px] lg:text-[62px]">
            {hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-[680px] text-[14px] leading-8 text-blue-100/80 sm:text-[17px]">
            {hero.description}
          </p>

          <a
            href="#contact-form"
            className="mt-9 inline-flex min-h-[49px] items-center justify-center gap-2 rounded-xl bg-[#f28b36] px-7 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(242,139,54,0.18)] transition-[background-color,box-shadow] duration-200 hover:bg-[#df7624] hover:shadow-[0_10px_28px_rgba(242,139,54,0.25)] focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#102b4e]"
          >
            Contact Our Team
            <Send size={16} />
          </a>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section
        id="contact-form"
        className="scroll-mt-8 px-4 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">

          {/* LEFT INFORMATION */}
          <div className="pt-2">
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-extrabold tracking-[1.5px] text-[#1760a4]">
              LET'S CONNECT
            </span>

            <h2 className="mt-5 text-[30px] font-extrabold leading-tight tracking-[-1px] text-[#172943] sm:text-[38px]">
              {form.title}
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#778397]">
              {form.description}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-[#e3eaf3] bg-white p-5 shadow-[0_5px_20px_rgba(15,35,65,0.035)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#1760a4]">
                  <Mail size={21} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-[#26364d]">
                    Email Us
                  </h3>

                  <a
                    href={`mailto:${form.email}`}
                    className="mt-1 block break-all text-sm text-[#1760a4] transition-colors hover:text-[#f28b36]"
                  >
                    {form.emailText}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#e3eaf3] bg-white p-5 shadow-[0_5px_20px_rgba(15,35,65,0.035)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff3e9] text-[#e47b2c]">
                  <Phone size={21} />
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-[#26364d]">
                    Need Assistance?
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#778397]">
                    Share your details and our team can get in touch with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-[#102b4e] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                  <Building2 size={21} />
                </div>

                <h3 className="text-base font-extrabold">
                  Prime Webdynamics
                </h3>
              </div>

              <p className="mt-4 text-[13px] leading-7 text-blue-100/75">
                Have questions about our courses or learning programs? Send
                us your enquiry and connect with our team.
              </p>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="rounded-[24px] border border-[#e4eaf2] bg-white p-5 shadow-[0_15px_50px_rgba(15,35,65,0.07)] sm:p-8 lg:p-10">
            <div className="mb-8">
              <span className="text-[11px] font-extrabold tracking-[1.5px] text-[#1760a4]">
                SEND AN ENQUIRY
              </span>

              <h3 className="mt-3 text-[23px] font-extrabold tracking-[-0.5px] text-[#172943] sm:text-[28px]">
                Tell us how we can help
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#778397]">
                Fill in your details below and share what you are looking for.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              {/* NAME AND EMAIL */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelStyle}>
                    {form.fields.name.label}
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder={form.fields.name.placeholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={getFieldStyle("name")}
                  />

                  {errors.name && (
                    <p
                      id="contact-name-error"
                      role="alert"
                      className="mt-2 text-xs font-medium text-red-500"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelStyle}>
                    {form.fields.email.label}
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder={form.fields.email.placeholder}
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* PHONE, CENTER AND COURSE */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label htmlFor="contact-phone" className={labelStyle}>
                    {form.fields.phone.label}
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder={form.fields.phone.placeholder}
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    inputMode="numeric"
                    autoComplete="tel"
                    required
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                    className={getFieldStyle("phone")}
                  />

                  {errors.phone && (
                    <p
                      id="contact-phone-error"
                      role="alert"
                      className="mt-2 text-xs font-medium text-red-500"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-center" className={labelStyle}>
                    {form.fields.center.label}
                  </label>

                  <select
                    id="contact-center"
                    name="center"
                    value={formData.center}
                    onChange={handleChange}
                    className={inputStyle}
                  >
                    <option value="">
                      {form.fields.center.placeholder}
                    </option>

                    {branches.map((branch) => (
                      <option
                        key={branch.id}
                        value={branch.centerValue}
                      >
                        {branch.centerLabel}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-course" className={labelStyle}>
                    {form.fields.course.label}
                  </label>

                  <select
                    id="contact-course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={inputStyle}
                  >
                    <option value="">
                      {form.fields.course.placeholder}
                    </option>

                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="contact-message" className={labelStyle}>
                  {form.fields.message.label}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder={form.fields.message.placeholder}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputStyle} resize-y`}
                />
              </div>

              {/* SUBMIT */}
              <div className="border-t border-[#edf1f6] pt-6">
                <button
                  type="submit"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#1760a4] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_22px_rgba(23,96,164,0.16)] transition-[background-color,box-shadow] duration-200 hover:bg-[#124e87] hover:shadow-[0_10px_25px_rgba(23,96,164,0.22)] focus:outline-none focus:ring-2 focus:ring-[#1760a4] focus:ring-offset-2"
                >
                  {form.submitButton}
                  <Send size={17} />
                </button>

                {submitted && (
                  <p
                    role="status"
                    className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-semibold text-green-700"
                  >
                    {form.successMessage}
                  </p>
                )}

                <p className="mt-4 text-center text-xs text-[#98a3b3]">
                  Fields marked with * are required.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* OUR OFFICE */}
      <section className="border-y border-[#e8edf4] bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mx-auto mb-12 max-w-[650px] text-center">
            <span className="inline-flex rounded-full border border-blue-100 bg-[#f5f9ff] px-4 py-2 text-[11px] font-extrabold tracking-[1.5px] text-[#1760a4]">
              FIND US
            </span>

            <h2 className="mt-5 text-[30px] font-extrabold tracking-[-1px] text-[#172943] sm:text-[40px]">
              {branchesSection.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#778397]">
              Visit our office or connect with our team through the contact
              details below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {branches.map((branch) => (
              <article
                key={branch.id}
                className="rounded-2xl border border-[#e1e9f3] bg-[#f8fbff] p-6 shadow-[0_5px_22px_rgba(15,35,65,0.035)] transition-[border-color,box-shadow] duration-200 hover:border-[#bfd8f3] hover:shadow-[0_10px_28px_rgba(15,35,65,0.07)] sm:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7f1ff] text-[#1760a4]">
                      <Building2 size={23} />
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-[#172943] sm:text-2xl">
                        {branch.name}
                      </h3>

                      <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-[#778397]">
                        <MapPin
                          size={17}
                          className="mt-1 shrink-0 text-[#1760a4]"
                        />
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  <a
                    href={branch.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#d6e4f5] bg-white px-4 py-2.5 text-xs font-bold text-[#1760a4] transition-colors duration-200 hover:border-[#1760a4] hover:bg-[#edf5ff]"
                  >
                    {branch.websiteText}
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="mt-7 grid gap-4 border-t border-[#e2eaf3] pt-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1760a4]">
                      <Phone size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#8995a6]">
                        Phone
                      </p>

                      <a
                        href={`tel:+91${branch.phone}`}
                        className="mt-1 block text-sm font-semibold text-[#26364d] hover:text-[#1760a4]"
                      >
                        +91 {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-green-600">
                      <MessageCircle size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#8995a6]">
                        WhatsApp
                      </p>

                      <a
                        href={`https://wa.me/91${branch.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block text-sm font-semibold text-[#26364d] hover:text-green-600"
                      >
                        +91 {branch.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1760a4]">
                      <Mail size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#8995a6]">
                        Email
                      </p>

                      <a
                        href={`mailto:${branch.email}`}
                        className="mt-1 block break-all text-sm font-semibold text-[#26364d] hover:text-[#1760a4]"
                      >
                        {branch.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1760a4]">
                      <Globe size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#8995a6]">
                        Website
                      </p>

                      <a
                        href={branch.website}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block break-all text-sm font-semibold text-[#26364d] hover:text-[#1760a4]"
                      >
                        {branch.websiteText}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="bg-[#f5f8fc] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-[11px] font-extrabold tracking-[1.5px] text-[#1760a4]">
                OUR LOCATION
              </span>

              <h2 className="mt-2 text-2xl font-extrabold text-[#172943] sm:text-3xl">
                {map.title}
              </h2>
            </div>

            <a
              href={map.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#dce5f0] bg-white px-5 py-3 text-sm font-bold text-[#1760a4] transition-colors duration-200 hover:border-[#1760a4] hover:bg-[#edf5ff]"
            >
              {map.buttonText}
              <ExternalLink size={15} />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e1e8f0] bg-white shadow-[0_12px_35px_rgba(15,35,65,0.08)]">
            <iframe
              title={map.iframeTitle}
              src={map.embedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
