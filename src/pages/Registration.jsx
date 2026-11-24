
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
    "w-full rounded-xl border border-[#e0e6ef] bg-[#f8fafd] py-3.5 pl-11 pr-4 text-sm text-[#26364d] outline-none transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-[#a0aaba] hover:border-[#c8d5e6] focus:border-[#2878ce] focus:bg-white focus:ring-4 focus:ring-[#2878ce]/10";

  const labelClass =
    "mb-2 block text-[12px] font-bold tracking-wide text-[#34445c]";

  const renderInput = (
    name,
    label,
    placeholder,
    Icon,
    type = "text",
    required = false
  ) => (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        <Icon
          size={17}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#91a0b5]"
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
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>

      <div className="relative">
        <Icon
          size={17}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#91a0b5]"
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

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#91a0b5]">
          ▼
        </span>
      </div>
    </div>
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f8fd] px-4 py-8 font-sans sm:px-6 lg:px-8 lg:py-14">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1180px] overflow-hidden rounded-[26px] border border-[#e5ebf4] bg-white shadow-[0_20px_70px_rgba(15,35,75,0.09)] lg:grid-cols-[0.82fr_1.38fr]">

        {/* Left Branding Panel */}
        <aside className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#102b65] via-[#164b99] to-[#2563c7] px-7 py-9 text-white sm:px-10 sm:py-11 lg:min-h-[850px] lg:px-10">
          {/* Decorative Elements */}
          <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-12 -top-8 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[1.2px] text-blue-50 backdrop-blur">
              <Sparkles size={14} />
              START YOUR LEARNING JOURNEY
            </div>

            <div className="mt-10">
              <p className="text-[13px] font-bold tracking-[2px] text-blue-200">
                WELCOME TO
              </p>

              <div className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {registrationData.brand.firstLine}
                <span className="text-sky-300">
                  {registrationData.brand.highlight}
                </span>
              </div>

              <h1 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-[30px]">
                {registrationData.brand.secondLine}
              </h1>

              <div className="mt-5 h-1 w-16 rounded-full bg-orange-400" />

              <p className="mt-5 max-w-xs text-sm leading-7 text-blue-100/85">
                {registrationData.brand.tagline}
              </p>
            </div>

            {/* Learning Benefits */}
            <div className="mt-12 space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-sky-200">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Industry-Relevant Learning
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-blue-100/75">
                    Build practical skills through structured learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-sky-200">
                  <BookOpen size={21} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Hands-On Projects
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-blue-100/75">
                    Apply your knowledge through practical experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-sky-200">
                  <BriefcaseBusiness size={21} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Career Preparation
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-blue-100/75">
                    Get guidance for your professional journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="relative z-10 mt-12 border-t border-white/15 pt-6">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <ShieldCheck size={17} className="text-sky-300" />
              Your Learning Journey Starts Here
            </div>

            <p className="mt-2 text-xs leading-6 text-blue-100/65">
              Learn. Practice. Build. Grow.
            </p>
          </div>
        </aside>

        {/* Right Registration Form */}
        <section className="px-5 py-9 sm:px-9 sm:py-11 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-[650px]">

            {/* Form Heading */}
            <div className="mb-9">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
                <GraduationCap size={15} />
                Student Registration
              </div>

              <h2 className="text-[27px] font-extrabold tracking-[-0.8px] text-[#172943] sm:text-[34px]">
                {registrationData.heading}
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#778397]">
                {registrationData.subtitle}
              </p>

              <p className="mt-4 text-xs text-[#8b96a7]">
                Fields marked with{" "}
                <span className="font-bold text-red-500">*</span> are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-8">

              {/* Personal Information */}
              <div>
                <div className="mb-5 flex items-center gap-3 border-b border-[#edf1f6] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <UserRound size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-[#26364d]">
                      Personal Information
                    </h3>
                    <p className="mt-0.5 text-[11px] text-[#94a0b1]">
                      Enter your basic contact details
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                <div className="mb-5 flex items-center gap-3 border-b border-[#edf1f6] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <BookOpen size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-[#26364d]">
                      Course Information
                    </h3>
                    <p className="mt-0.5 text-[11px] text-[#94a0b1]">
                      Choose your preferred course and branch
                    </p>
                  </div>
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
                <div className="mb-5 flex items-center gap-3 border-b border-[#edf1f6] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-[#26364d]">
                      Address Information
                    </h3>
                    <p className="mt-0.5 text-[11px] text-[#94a0b1]">
                      Add your location details
                    </p>
                  </div>
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
                      className="w-full resize-y rounded-xl border border-[#e0e6ef] bg-[#f8fafd] px-4 py-3.5 text-sm text-[#26364d] outline-none transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-[#a0aaba] hover:border-[#c8d5e6] focus:border-[#2878ce] focus:bg-white focus:ring-4 focus:ring-[#2878ce]/10"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
              <div className="border-t border-[#edf1f6] pt-7">
                {submitted && (
                  <div className="mb-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-green-600"
                    />

                    <p className="text-sm font-medium leading-6 text-green-700">
                      {registrationData.successMessage}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#2169c5] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(33,105,197,0.18)] transition-[background-color,box-shadow] duration-200 hover:bg-[#1758ad] hover:shadow-[0_10px_24px_rgba(33,105,197,0.25)] focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2 sm:w-auto sm:min-w-[220px]"
                >
                  {registrationData.submitText}
                  <ArrowRight size={17} />
                </button>

                <p className="mt-4 text-xs leading-6 text-[#99a3b2]">
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
