
import { useState } from "react";
import {
  UserRound,
  Mail,
  Phone,
  BookOpen,
  MapPin,
  Building2,
  MapPinned,
  Hash,
  IndianRupee,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import registrationData from "../data/registrationData.json";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: registrationData.courses[0] || "",
    branch: registrationData.branches[0] || "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    amount: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubmitted(false);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }

    const phone = formData.phone.replace(/\D/g, "");

    if (!phone) {
      newErrors.phone = "Please enter your phone number";
    } else if (phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    console.log("Registration Data:", formData);
    setSubmitted(true);
  };

  const fields = [
    {
      name: "name",
      label: "Full Name",
      placeholder: "Enter your full name",
      icon: UserRound,
      required: true,
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "Enter your email",
      icon: Mail,
      type: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "Enter 10 digit number",
      icon: Phone,
      required: true,
      type: "tel",
    },
  ];

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10";

  const labelClass =
    "mb-2 block text-xs font-semibold tracking-wide text-slate-700";

  const renderInput = (name, label, placeholder, Icon, type = "text", required = false) => (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        <Icon
          size={17}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          maxLength={name === "phone" ? 10 : undefined}
          inputMode={name === "phone" ? "numeric" : undefined}
          min={name === "amount" ? "0" : undefined}
          className={`${inputClass} ${errors[name] ? "border-red-400 focus:border-red-500 focus:ring-red-500/10" : ""}`}
        />
      </div>

      {errors[name] && (
        <p className="mt-1.5 text-xs font-medium text-red-500">
          {errors[name]}
        </p>
      )}
    </div>
  );

  const renderSelect = (name, label, placeholder, Icon, options) => (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>

      <div className="relative">
        <Icon
          size={17}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <select
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`${inputClass} appearance-none pr-10`}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
          ▼
        </span>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f7fc] px-4 py-8 font-sans sm:px-6 lg:px-8 lg:py-14">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-[0_20px_70px_rgba(15,35,75,0.10)] lg:grid-cols-[0.85fr_1.35fr]">

        {/* Left Branding Panel */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#102b65] via-[#164b99] to-[#2563c7] px-7 py-9 text-white sm:px-10 sm:py-11 lg:min-h-[780px] lg:px-10">

          {/* Decorative Circles */}
          <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-12 -top-8 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="relative z-10">

            <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-blue-50 backdrop-blur">
              <Sparkles size={14} />
              START YOUR LEARNING JOURNEY
            </div>

            <div className="mb-7">
              <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {registrationData.brand.firstLine}
                <span className="text-sky-300">
                  {registrationData.brand.highlight}
                </span>
              </div>

              <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                {registrationData.brand.secondLine}
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-orange-400" />

              <p className="mt-5 max-w-xs text-sm leading-7 text-blue-100/90">
                {registrationData.brand.tagline}
              </p>
            </div>

            <div className="mt-10 space-y-5">

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky-200">
                  <GraduationCap size={21} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Industry-Relevant Learning</h3>
                  <p className="mt-1 text-xs leading-5 text-blue-100/75">
                    Build practical skills through structured learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky-200">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Practical Projects</h3>
                  <p className="mt-1 text-xs leading-5 text-blue-100/75">
                    Apply your knowledge through hands-on practice.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky-200">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Career Guidance</h3>
                  <p className="mt-1 text-xs leading-5 text-blue-100/75">
                    Get guidance to prepare for your professional journey.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="relative z-10 mt-12 border-t border-white/15 pt-6">
            <p className="text-xs leading-6 text-blue-100/70">
              Learn. Practice. Build. Grow.
            </p>
          </div>
        </div>

        {/* Right Registration Form */}
        <div className="px-5 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">

          <div className="mx-auto max-w-2xl">

            {/* Form Heading */}
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                <GraduationCap size={14} />
                Student Registration
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {registrationData.heading}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {registrationData.subtitle}
              </p>

              <p className="mt-4 text-xs text-slate-500">
                Fields marked with <span className="font-bold text-red-500">*</span> are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-7">

              {/* Personal Information */}
              <div>
                <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <UserRound size={17} className="text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-800">
                    Personal Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div className="sm:col-span-2">
                    {renderInput("name", "Full Name", "Enter your full name", UserRound, "text", true)}
                  </div>

                  {renderInput("email", "Email Address", "Enter your email address", Mail, "email")}

                  {renderInput("phone", "Phone Number", "Enter 10 digit number", Phone, "tel", true)}

                </div>
              </div>

              {/* Course Information */}
              <div>
                <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <BookOpen size={17} className="text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-800">
                    Course Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {renderSelect(
                    "course",
                    "Select Course",
                    "Choose your course",
                    BookOpen,
                    registrationData.courses
                  )}

                  {renderSelect(
                    "branch",
                    "Select Branch",
                    "Choose your branch",
                    Building2,
                    registrationData.branches
                  )}

                </div>
              </div>

              {/* Address Information */}
              <div>
                <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <MapPin size={17} className="text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-800">
                    Address Information
                  </h3>
                </div>

                <div className="space-y-5">

                  <div>
                    <label htmlFor="address" className={labelClass}>
                      Complete Address
                    </label>

                    <textarea
                      id="address"
                      name="address"
                      placeholder="Enter your complete address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    {renderInput("city", "City", "Enter your city", MapPinned)}

                    {renderInput("country", "Country", "Enter your country", MapPin)}

                    {renderInput("zipcode", "Zipcode", "Enter ZIP code", Hash)}

                    {renderInput("amount", "Amount", "Enter amount", IndianRupee, "number")}

                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="border-t border-slate-100 pt-6">

                {submitted && (
                  <div className="mb-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-green-600" />
                    <p className="text-sm font-medium leading-6 text-green-700">
                      {registrationData.successMessage}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-800 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-600/25 active:translate-y-0 sm:w-auto sm:min-w-[210px]"
                >
                  {registrationData.submitText}
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-4 text-xs leading-5 text-slate-400">
                  Please check your details before submitting the registration form.
                </p>

              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Registration;
