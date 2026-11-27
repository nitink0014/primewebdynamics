
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
  ShieldCheck,
  BriefcaseBusiness,
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

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50/80 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10";

  const labelClass =
    "mb-1.5 block text-[12px] font-bold tracking-wide text-slate-700";

  const renderInput = (
    name,
    label,
    placeholder,
    Icon,
    type = "text",
    required = false
  ) => (
    <div className="min-w-0">
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
          className={`${inputClass} ${
            errors[name]
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
              : ""
          }`}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
        />
      </div>

      {errors[name] && (
        <p
          id={`${name}-error`}
          className="mt-1.5 text-xs font-medium text-red-500"
        >
          {errors[name]}
        </p>
      )}
    </div>
  );

  const renderSelect = (name, label, placeholder, Icon, options) => (
    <div className="min-w-0">
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

  // Compact section heading
  const sectionHeading = (Icon, title, subtitle) => (
    <div className="mt-4 mb-4 flex items-center gap-3 border-b border-slate-100 pb-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={19} />
      </div>

      <div className="flex min-w-0 flex-col justify-center">
        <h3 className="text-sm font-extrabold leading-5 text-slate-800">
          {title}
        </h3>

        <p className="mt-0.5 text-xs leading-5 text-slate-400">
          {subtitle}
        </p>
      </div>
    </div>
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f7fc] px-3 py-5 font-sans sm:px-5 sm:py-7 lg:px-8 lg:py-8">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1180px] overflow-hidden rounded-[24px] border border-white bg-white shadow-[0_20px_60px_rgba(15,35,75,0.08)] lg:grid-cols-[0.82fr_1.38fr]">
        {/* Left Branding Panel */}
        <aside className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0c2455] via-[#164b99] to-[#2875d4] px-6 py-7 text-white sm:px-8 sm:py-9 lg:min-h-[760px] lg:px-9">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-12 -top-8 h-48 w-48 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-bold tracking-[1.1px] text-blue-50 backdrop-blur">
              <Sparkles size={13} className="text-sky-300" />
              START YOUR LEARNING JOURNEY
            </div>

            <div className="mt-7">
              <p className="text-xs font-bold tracking-[2px] text-blue-200">
                WELCOME TO
              </p>

              <div className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {registrationData.brand.firstLine}
                <span className="text-sky-300">
                  {registrationData.brand.highlight}
                </span>
              </div>

              <h1 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-[30px]">
                {registrationData.brand.secondLine}
              </h1>

              <div className="mt-4 h-1 w-14 rounded-full bg-orange-400" />

              <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100/85">
                {registrationData.brand.tagline}
              </p>
            </div>

            {/* Learning Benefits */}
            <div className="mt-9 space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-sky-200">
                  <GraduationCap size={21} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Industry-Relevant Learning
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-blue-100/75">
                    Build practical skills through structured learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-sky-200">
                  <BookOpen size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">Hands-On Projects</h3>
                  <p className="mt-1 text-xs leading-5 text-blue-100/75">
                    Apply your knowledge through practical experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-sky-200">
                  <BriefcaseBusiness size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">Career Preparation</h3>
                  <p className="mt-1 text-xs leading-5 text-blue-100/75">
                    Get guidance for your professional journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="relative z-10 mt-8 border-t border-white/15 pt-5">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <ShieldCheck size={16} className="text-sky-300" />
              Your Learning Journey Starts Here
            </div>

            <p className="mt-1.5 text-xs leading-5 text-blue-100/65">
              Learn. Practice. Build. Grow.
            </p>
          </div>
        </aside>

        {/* Right Registration Form */}
        <section className="px-4 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-9">
          <div className="mx-auto max-w-[650px]">
            {/* Form Heading */}
            <div className="mb-5">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-700">
                <GraduationCap size={14} />
                Student Registration
              </div>

              <h2 className="text-[25px] font-extrabold tracking-[-0.7px] text-[#172943] sm:text-[32px]">
                {registrationData.heading}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {registrationData.subtitle}
              </p>

              <p className="mt-2.5 text-xs text-slate-400">
                Fields marked with{" "}
                <span className="font-bold text-red-500">*</span> are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Personal Information */}
              <div>
                {sectionHeading(
                  UserRound,
                  "Personal Information",
                  "Enter your basic contact details"
                )}

                <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    {renderInput(
                      "name",
                      "Full Name",
                      "Enter your full name",
                      UserRound,
                      "text",
                      true
                    )}
                  </div>

                  {renderInput(
                    "email",
                    "Email Address",
                    "Enter your email address",
                    Mail,
                    "email"
                  )}

                  {renderInput(
                    "phone",
                    "Phone Number",
                    "Enter 10 digit number",
                    Phone,
                    "tel",
                    true
                  )}
                </div>
              </div>

              {/* Course Information */}
              <div>
                {sectionHeading(
                  BookOpen,
                  "Course Information",
                  "Choose your preferred course and branch"
                )}

                <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
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
                {sectionHeading(
                  MapPin,
                  "Address Information",
                  "Add your location details"
                )}

                <div className="space-y-4">
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
                      rows={2}
                      className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                    {renderInput(
                      "city",
                      "City",
                      "Enter your city",
                      MapPinned
                    )}

                    {renderInput(
                      "country",
                      "Country",
                      "Enter your country",
                      MapPin
                    )}

                    {renderInput(
                      "zipcode",
                      "Zipcode",
                      "Enter ZIP code",
                      Hash
                    )}

                    {renderInput(
                      "amount",
                      "Amount",
                      "Enter amount",
                      IndianRupee,
                      "number"
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="border-t border-slate-100 pt-5">
                {submitted && (
                  <div className="mb-4 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-3.5">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-green-600"
                    />

                    <p className="text-sm font-medium leading-5 text-green-700">
                      {registrationData.successMessage}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="group flex min-h-[48px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#2169c5] to-[#2878ce] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(33,105,197,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#1758ad] hover:to-[#2169c5] hover:shadow-[0_12px_25px_rgba(33,105,197,0.25)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto sm:min-w-[220px]"
                >
                  {registrationData.submitText}
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-3 text-xs leading-5 text-slate-400">
                  Please check your details before submitting the registration form.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Registration;
