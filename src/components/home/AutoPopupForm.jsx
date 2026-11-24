
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  X,
} from "lucide-react";

import content from "../../data/autoPopupForm.json";

const AutoPopupForm = ({ onSubmit, isOpen, onClose }) => {
  const [errors, setErrors] = useState({});

  // Close popup using Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Reset errors whenever popup closes
  useEffect(() => {
    if (!isOpen) {
      setErrors({});
    }
  }, [isOpen]);

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    e.target.value = digits;

    setErrors((prev) => ({
      ...prev,
      phone: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const phoneDigits = data.phone.replace(/\D/g, "");
    const newErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!phoneDigits) {
      newErrors.phone = "Phone number is required";
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = "Please enter a valid 10 digit phone number";
    }

    if (
      data.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    data.fullName = data.fullName.trim();
    data.phone = phoneDigits;
    data.email = data.email.trim();

    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log("Enquiry Form Data:", data);
    }

    e.target.reset();
    setErrors({});
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#07152f]/70 p-3 backdrop-blur-[5px] sm:p-5"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose?.();
        }
      }}
    >
      {/* Main Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        className="relative my-auto flex w-full max-w-[920px] overflow-hidden rounded-2xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:rounded-[26px] md:min-h-[530px]"
      >
        {/* LEFT BLUE SECTION */}
        <div className="relative hidden w-[45%] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#172e70] via-[#2549a9] to-[#2866df] p-8 text-white md:flex lg:p-9">

          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full border-[35px] border-white/[0.06]" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-300/[0.12] blur-3xl" />

          <div className="relative z-10">

            <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-400/15 px-3 py-1.5 text-xs font-bold text-orange-100">
              <Sparkles size={14} />
              {content.badge}
            </span>

            <h2 className="mt-9 text-[34px] font-extrabold leading-[1.2] tracking-tight lg:text-[38px]">
              {content.headingLine1}
              <br />
              {content.headingLine2}
              <span className="text-[#ff922e]">
                {content.highlight}
              </span>
              <br />
              {content.headingLine3}
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100">
              {content.description}
            </p>
          </div>

          <div className="relative z-10">

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-2">
              {(content.stats || []).map((stat, index) => (
                <div
                  key={index}
                  className="flex min-h-[82px] flex-col items-center justify-center rounded-xl border border-white/15 bg-white/[0.09] px-2 text-center"
                >
                  <h3 className="text-xl font-extrabold">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-[10px] font-semibold leading-4 text-blue-100">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Company Badges */}
            {(content.companies || []).length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {content.companies.map((company, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 text-[10px] font-bold text-white"
                  >
                    {company}
                  </span>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* RIGHT WHITE SECTION */}
        <div className="relative w-full bg-white px-5 py-7 sm:px-8 sm:py-9 md:w-[55%] md:px-10 lg:px-12">

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors duration-200 hover:bg-red-50 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:right-5 sm:top-5"
          >
            <X size={19} />
          </button>

          {/* Form Header */}
          <div className="mb-7 flex items-center gap-3 pr-8">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3983f8] to-[#2460ed] text-white shadow-lg shadow-blue-200">
              <CheckCircle2 size={25} />
            </div>

            <div>
              <h2
                id="enquiry-modal-title"
                className="text-xl font-extrabold leading-tight text-[#111827] sm:text-2xl"
              >
                {content.formTitle}
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                {content.formSubtitle}
              </p>
            </div>

          </div>

          {/* Mobile Intro */}
          <div className="mb-6 rounded-xl bg-[#f1f6ff] p-4 md:hidden">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2866df]">
              <Sparkles size={13} />
              {content.badge}
            </span>

            <h3 className="mt-2 text-lg font-extrabold leading-snug text-[#173568]">
              {content.headingLine1} {content.headingLine2}
              <span className="text-orange-500">
                {content.highlight}
              </span>{" "}
              {content.headingLine3}
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-600">
              {content.description}
            </p>
          </div>

          {/* Enquiry Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >

            {/* Name - Required */}
            <div>
              <label
                htmlFor="popup-fullName"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                id="popup-fullName"
                type="text"
                name="fullName"
                placeholder={content.fields.name}
                autoComplete="name"
                required
                className={`h-11 w-full rounded-xl border bg-[#f8fafc] px-4 text-sm text-slate-800 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
                  errors.fullName
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
                onChange={() =>
                  setErrors((prev) => ({
                    ...prev,
                    fullName: "",
                  }))
                }
              />

              {errors.fullName && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone - Required */}
            <div>
              <label
                htmlFor="popup-phone"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                id="popup-phone"
                type="tel"
                name="phone"
                placeholder={content.fields.phone}
                autoComplete="tel"
                maxLength={10}
                inputMode="numeric"
                required
                className={`h-11 w-full rounded-xl border bg-[#f8fafc] px-4 text-sm text-slate-800 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
                  errors.phone
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
                onChange={handlePhoneChange}
              />

              {errors.phone && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email - Optional */}
            <div>
              <label
                htmlFor="popup-email"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                Email Address <span className="font-normal text-slate-400">(Optional)</span>
              </label>

              <input
                id="popup-email"
                type="email"
                name="email"
                placeholder={content.fields.email}
                autoComplete="email"
                className={`h-11 w-full rounded-xl border bg-[#f8fafc] px-4 text-sm text-slate-800 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
                  errors.email
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
                onChange={() =>
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }))
                }
              />

              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Course - Optional */}
            <div>
              <label
                htmlFor="popup-course"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                Course <span className="font-normal text-slate-400">(Optional)</span>
              </label>

              <select
                id="popup-course"
                name="course"
                defaultValue=""
                className="h-11 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 text-sm text-slate-600 outline-none transition-[border-color,box-shadow] duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              >
                <option value="">
                  {content.fields.course}
                </option>

                {(content.courses || []).map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Branch - Optional */}
            <div>
              <label
                htmlFor="popup-branch"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                Branch <span className="font-normal text-slate-400">(Optional)</span>
              </label>

              <select
                id="popup-branch"
                name="branch"
                defaultValue=""
                className="h-11 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 text-sm text-slate-600 outline-none transition-[border-color,box-shadow] duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              >
                <option value="">
                  {content.fields.branch}
                </option>

                {(content.branches || []).map((branch, index) => (
                  <option key={index} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3983f8] to-[#2460ed] text-sm font-bold text-white shadow-lg shadow-blue-200 transition-[box-shadow,filter] duration-200 hover:brightness-105 hover:shadow-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              {content.submitButton}
              <ArrowRight size={17} />
            </button>

            <p className="text-center text-[11px] leading-5 text-slate-400">
              By submitting this form, you agree to be contacted regarding your enquiry.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AutoPopupForm;
