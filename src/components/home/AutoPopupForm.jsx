
import { useState } from "react";
import content from "../../data/autoPopupForm.json";

const AutoPopupForm = ({ onSubmit, isOpen, onClose }) => {
  const [errors, setErrors] = useState({});

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

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    data.phone = phoneDigits;

    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log("Enquiry Form Data:", data);
    }

    e.target.reset();
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07152f]/65 backdrop-blur-[5px] p-4">

      {/* Main Modal */}
      <div className="relative flex w-full max-w-[900px] h-[500px] overflow-hidden rounded-[26px] bg-white shadow-2xl max-md:h-auto max-md:max-h-[90vh] max-md:flex-col max-md:overflow-y-auto">

        {/* LEFT BLUE SECTION */}
        <div className="w-[47.7%] h-full bg-gradient-to-br from-[#233f91] via-[#294bb5] to-[#2860df] px-[32px] py-[32px] text-white flex flex-col justify-between max-md:w-full max-md:h-auto max-md:gap-6 max-md:px-6 max-md:py-7">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/50 bg-orange-400/20 px-3 py-1.5 text-[12px] font-semibold text-orange-100">
              <span>☆</span>
              {content.badge}
            </div>

            <h2 className="mt-[35px] text-[32px] leading-[1.15] font-extrabold tracking-tight max-md:mt-6 max-md:text-[28px]">
              {content.headingLine1}
              <br />
              {content.headingLine2}
              <span className="text-[#ff861f]">
                {content.highlight}
              </span>
              <br />
              {content.headingLine3}
            </h2>

            <p className="mt-[30px] text-[14px] leading-[1.6] text-blue-100 max-md:mt-5">
              {content.description}
            </p>
          </div>

          <div>
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-[12px]">
              {content.stats.map((stat, index) => (
                <div
                  key={index}
                  className="h-[80px] rounded-[15px] border border-white/20 bg-white/10 flex flex-col items-center justify-center text-center"
                >
                  <h3 className="text-[21px] font-extrabold">
                    {stat.value}
                  </h3>

                  <p className="text-[11px] leading-4 font-semibold text-blue-100">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Company Badges */}
            <div className="mt-[14px] flex flex-wrap gap-[8px]">
              {content.companies.map((company, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/25 bg-white/10 px-[12px] py-[5px] text-[11px] font-bold text-white"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT WHITE SECTION */}
        <div className="relative w-[52.3%] h-full bg-white px-[48px] pt-[32px] max-md:w-full max-md:h-auto max-md:px-6 max-md:py-7">

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="absolute right-[15px] top-[14px] h-[38px] w-[38px] rounded-full bg-white shadow-lg flex items-center justify-center text-[#64748b] text-[23px] hover:bg-gray-100 transition"
          >
            ×
          </button>

          {/* Form Header */}
          <div className="flex items-center gap-[13px] mb-[30px] max-md:mb-6">
            <div className="h-[48px] w-[48px] shrink-0 rounded-[14px] bg-[#3478f6] shadow-lg shadow-blue-200 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 3 3 5-6" />
              </svg>
            </div>

            <div>
              <h2 className="text-[20px] font-extrabold text-[#111827] leading-tight max-md:text-[18px]">
                {content.formTitle}
              </h2>

              <p className="mt-1 text-[13px] text-[#64748b]">
                {content.formSubtitle}
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-[13px]"
          >

            {/* Name - Required */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder={content.fields.name}
                className="h-[43px] w-full rounded-[11px] border border-[#cbd5e1] bg-[#f8fafc] px-[15px] text-[14px] text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                onChange={() =>
                  setErrors((prev) => ({ ...prev, fullName: "" }))
                }
              />

              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Mobile - Required */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder={content.fields.phone}
                maxLength={10}
                inputMode="numeric"
                className="h-[43px] w-full rounded-[11px] border border-[#cbd5e1] bg-[#f8fafc] px-[15px] text-[14px] text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                onChange={() =>
                  setErrors((prev) => ({ ...prev, phone: "" }))
                }
              />

              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email - Optional */}
            <input
              type="email"
              name="email"
              placeholder={content.fields.email}
              className="h-[43px] w-full rounded-[11px] border border-[#cbd5e1] bg-[#f8fafc] px-[15px] text-[14px] text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {/* Course - Optional */}
            <select
              name="course"
              defaultValue=""
              className="h-[43px] w-full rounded-[11px] border border-[#cbd5e1] bg-[#f8fafc] px-[15px] text-[14px] text-[#4b5563] outline-none focus:border-blue-500"
            >
              <option value="">
                {content.fields.course}
              </option>

              {content.courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>

            {/* Branch - Optional */}
            <select
              name="branch"
              defaultValue=""
              className="h-[43px] w-full rounded-[11px] border border-[#cbd5e1] bg-[#f8fafc] px-[15px] text-[14px] text-[#4b5563] outline-none focus:border-blue-500"
            >
              <option value="">
                {content.fields.branch}
              </option>

              {content.branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="h-[45px] w-full rounded-[11px] bg-gradient-to-r from-[#3983f8] to-[#2460ed] text-[15px] font-bold text-white shadow-lg shadow-blue-200 hover:brightness-105 transition"
            >
              {content.submitButton}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AutoPopupForm;
