
import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  ExternalLink,
  Globe,
} from "lucide-react";
import contact from "../data/contact.json";

function Contact() {
  const { hero, form, courses, branches, branchesSection, map } = contact;

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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
    const phone = formData.phone.replace(/\D/g, "");

    if (!formData.name.trim()) {
      newErrors.name = form.validation.nameRequired;
    }

    if (!phone) {
      newErrors.phone = form.validation.phoneRequired;
    } else if (phone.length !== 10) {
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
  };

  const inputStyle =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const labelStyle =
    "mb-2 block text-sm font-semibold text-gray-800";

  return (
    <div className="min-h-screen bg-[#f4f8fc]">

      {/* HERO BANNER */}
      <section
        className="relative flex min-h-[440px] items-center justify-center bg-cover bg-center px-5 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 25, 55, 0.78), rgba(8, 25, 55, 0.78)), url('${hero.backgroundImage}')`,
        }}
      >
        <div>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-5 text-base text-gray-200 sm:text-lg">
            {hero.description}
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1010px] rounded-[22px] bg-white px-5 py-10 shadow-[0_15px_50px_rgba(0,0,0,0.08)] sm:px-10 md:px-14">

          <div className="mb-7 text-center">
            <h2 className="text-3xl font-bold text-[#24538d] sm:text-4xl">
              {form.title}
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#64748b] sm:text-base">
              {form.description}{" "}
              <a
                href={`mailto:${form.email}`}
                className="font-bold text-black"
              >
                {form.emailText}
              </a>{" "}
              or use our contact form.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">

            {/* NAME AND EMAIL */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelStyle}>
                  {form.fields.name.label}
                  {form.fields.name.required && (
                    <span className="text-red-500">*</span>
                  )}
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder={form.fields.name.placeholder}
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyle}
                />

                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className={labelStyle}>
                  {form.fields.email.label}
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder={form.fields.email.placeholder}
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
            </div>

            {/* PHONE, CENTER, COURSE */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className={labelStyle}>
                  {form.fields.phone.label}
                  {form.fields.phone.required && (
                    <span className="text-red-500">*</span>
                  )}
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder={form.fields.phone.placeholder}
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  className={inputStyle}
                />

                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className={labelStyle}>
                  {form.fields.center.label}
                </label>

                <select
                  name="center"
                  value={formData.center}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="">
                    {form.fields.center.placeholder}
                  </option>

                  {branches.map((branch) => (
                    <option key={branch.id} value={branch.name}>
                      {branch.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelStyle}>
                  {form.fields.course.label}
                </label>

                <select
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
              <label className={labelStyle}>
                {form.fields.message.label}
              </label>

              <textarea
                name="message"
                rows="4"
                placeholder={form.fields.message.placeholder}
                value={formData.message}
                onChange={handleChange}
                className={`${inputStyle} resize-y`}
              />
            </div>

            {/* SUBMIT */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#39446e] to-[#171c31] px-6 py-4 text-sm font-bold uppercase text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {form.submitButton}
                <Send size={17} />
              </button>

              {submitted && (
                <p className="mt-4 text-sm font-semibold text-green-600">
                  {form.successMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* OUR BRANCHES */}
      <section className="bg-[#f4f8fc] px-5 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-10 text-center text-4xl font-bold text-[#245b9c] sm:text-5xl">
            {branchesSection.title}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="min-h-[230px] rounded-xl bg-[#e2f1ff] px-8 py-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-12"
              >
                <h3 className="mb-4 text-2xl font-bold text-[#24538d]">
                  {branch.name}
                </h3>

                <div className="space-y-3 text-base leading-6 text-gray-900">

                  <p className="flex flex-wrap items-center gap-2">
                    <Phone size={17} className="text-[#24538d]" />
                    <span>Phone:</span>

                    <a
                      href={`tel:+91${branch.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      +91 {branch.phone}
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <MessageCircle size={17} className="text-[#25D366]" />
                    <span>WhatsApp:</span>

                    <a
                      href={`https://wa.me/91${branch.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      +91 {branch.whatsapp}
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <Mail size={17} className="text-[#24538d]" />
                    <span>Email:</span>

                    <a
                      href={`mailto:${branch.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {branch.email}
                    </a>
                  </p>

                  {branch.website && (
                    <p className="flex flex-wrap items-center gap-2">
                      <Globe size={17} className="text-[#24538d]" />
                      <span>Website:</span>

                      <a
                        href={branch.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {branch.website}
                      </a>
                    </p>
                  )}

                  <p className="flex flex-wrap items-start gap-2">
                    <ExternalLink size={17} className="mt-1 text-[#24538d]" />
                    <span>Address:</span>
                    <span>{branch.address}</span>
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="bg-[#f4f8fc] px-5 pb-14">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-lg shadow-md">
          <div className="flex items-center justify-between bg-white px-4 py-3">
            <h3 className="font-semibold text-slate-800">
              {map.title}
            </h3>

            <a
              href={map.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm font-semibold text-blue-600"
            >
              {map.buttonText}
              <ExternalLink size={15} />
            </a>
          </div>

          <iframe
            title={map.iframeTitle}
            src={map.embedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
}

export default Contact;
