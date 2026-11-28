
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  X,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import content from "../../data/autoPopupForm.json";

const AutoPopupForm = ({ onSubmit, isOpen, onClose }) => {
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;

    if (!form) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const phoneDigits = data.phone.replace(/\D/g, "");
    const newErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!phoneDigits) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number";
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

    try {
      // Submit form data
      if (onSubmit) {
        await onSubmit(data);
      } else {
        console.log("Enquiry Form Data:", data);
      }

      // Reset all form fields
      form.reset();

      // Clear validation errors
      setErrors({});

      // Popup remains open after submission
    } catch (error) {
      console.error("Enquiry form submission failed:", error);
    }
  };

  if (!isOpen) return null;

  const fieldClass =
    "h-11 w-full rounded-xl border bg-slate-50 px-4 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-4";

  const labelClass =
    "mb-1.5 block text-xs font-bold text-slate-700";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#07152f]/65 p-3 backdrop-blur-md sm:p-5"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose?.();
        }
      }}
    >
      {/* Premium Medium Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        className="relative my-auto flex w-full max-w-[760px] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_30px_100px_rgba(4,18,48,0.30)] sm:rounded-[24px] md:min-h-[480px]"
      >
        {/* LEFT PREMIUM PANEL */}
        <div className="relative hidden w-[39%] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#102653] via-[#19499a] to-[#286be0] p-6 text-white md:flex lg:p-7">
          {/* Background Decorations */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border-[28px] border-white/[0.06]" />

          <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-sky-300/[0.13] blur-3xl" />

          <div className="pointer-events-none absolute right-8 top-32 h-24 w-24 rounded-full bg-blue-300/[0.08] blur-2xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1.5 text-[10px] font-bold tracking-wide text-orange-100">
              <Sparkles size={13} />
              {content.badge}
            </span>

            <h2 className="mt-7 text-[27px] font-extrabold leading-[1.2] tracking-tight lg:text-[30px]">
              {content.headingLine1}
              <br />
              {content.headingLine2}
              <span className="text-[#ffad57]">
                {content.highlight}
              </span>
              <br />
              {content.headingLine3}
            </h2>

            <div className="mt-4 h-1 w-10 rounded-full bg-orange-400" />

            <p className="mt-4 max-w-[240px] text-xs leading-6 text-blue-100/85">
              {content.description}
            </p>
          </div>

          <div className="relative z-10 mt-7">
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-2">
              {(content.stats || []).map((stat, index) => (
                <div
                  key={index}
                  className="flex min-h-[70px] flex-col items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] px-1.5 text-center backdrop-blur-sm"
                >
                  <h3 className="text-lg font-extrabold">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-[9px] font-semibold leading-3.5 text-blue-100/85">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Company Badges */}
            {(content.companies || []).length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {content.companies.map((company, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/15 bg-white/[0.07] px-2.5 py-1 text-[9px] font-semibold text-blue-50"
                  >
                    {company}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 flex items-center gap-2 border-t border-white/15 pt-4 text-[10px] font-semibold text-blue-100/80">
              <ShieldCheck size={14} className="text-sky-300" />
              Your learning journey starts here
            </div>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="relative w-full bg-white px-5 py-6 sm:px-7 sm:py-7 md:w-[61%] lg:px-8">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-500 transition-all duration-200 hover:border-red-100 hover:bg-red-50 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:right-5 sm:top-5"
          >
            <X size={17} />
          </button>

          {/* Form Header */}
          <div className="mb-5 flex items-center gap-3 pr-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md shadow-blue-200/70">
              <GraduationCap size={23} />
            </div>

            <div>
              <h2
                id="enquiry-modal-title"
                className="text-xl font-extrabold tracking-tight text-[#14233d] sm:text-[22px]"
              >
                {content.formTitle}
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {content.formSubtitle}
              </p>
            </div>
          </div>

          {/* Mobile Intro */}
          <div className="mb-5 rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50 to-indigo-50 p-3.5 md:hidden">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-700">
              <Sparkles size={12} />
              {content.badge}
            </span>

            <h3 className="mt-1.5 text-base font-extrabold leading-snug text-[#173568]">
              {content.headingLine1} {content.headingLine2}
              <span className="text-orange-500">
                {content.highlight}
              </span>{" "}
              {content.headingLine3}
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-slate-600">
              {content.description}
            </p>
          </div>

          {/* Enquiry Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-3.5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="popup-fullName"
                className={labelClass}
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
                className={`${fieldClass} ${
                  errors.fullName
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                }`}
                onChange={() =>
                  setErrors((prev) => ({
                    ...prev,
                    fullName: "",
                  }))
                }
              />

              {errors.fullName && (
                <p className="mt-1 text-xs font-medium text-red-500">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="popup-phone"
                className={labelClass}
              >
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                id="popup-phone"
                type="tel"
                name="phone"
                placeholder={content.fields.phone}
                autoComplete="tel-national"
                maxLength={10}
                inputMode="numeric"
                required
                className={`${fieldClass} ${
                  errors.phone
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                }`}
                onChange={handlePhoneChange}
              />

              {errors.phone && (
                <p className="mt-1 text-xs font-medium text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="popup-email"
                className={labelClass}
              >
                Email Address{" "}
                <span className="font-normal text-slate-400">
                  (Optional)
                </span>
              </label>

              <input
                id="popup-email"
                type="email"
                name="email"
                placeholder={content.fields.email}
                autoComplete="email"
                className={`${fieldClass} ${
                  errors.email
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                }`}
                onChange={() =>
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }))
                }
              />

              {errors.email && (
                <p className="mt-1 text-xs font-medium text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Course and Branch */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="popup-course"
                  className={labelClass}
                >
                  Course{" "}
                  <span className="font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <select
                  id="popup-course"
                  name="course"
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-600 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
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

              <div>
                <label
                  htmlFor="popup-branch"
                  className={labelClass}
                >
                  Branch{" "}
                  <span className="font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <select
                  id="popup-branch"
                  name="branch"
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-600 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
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
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3479ee] to-[#245be0] text-sm font-bold text-white shadow-[0_7px_18px_rgba(37,99,235,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(37,99,235,0.30)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              {content.submitButton}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            <p className="text-center text-[10px] leading-4 text-slate-400">
              By submitting this form, you agree to be contacted regarding your enquiry.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AutoPopupForm;
