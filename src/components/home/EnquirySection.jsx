
import { useState } from "react";
import {
  CircleCheck,
  ArrowRight,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

import enquiryData from "../../data/enquiryData.json";

function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    branch: "",
  });

  const [errors, setErrors] = useState({});

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
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.phone) {
      newErrors.phone = "Please enter your phone number";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // API integration will be added after receiving backend specifications.
    console.log("Enquiry details:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      branch: "",
    });
  };

  const inputClass =
    "h-[50px] w-full rounded-xl border border-[#dce3ed] bg-[#f9fbfe] px-4 text-[14px] font-medium text-[#172b49] outline-none transition-[border-color,background-color,box-shadow] duration-200 placeholder:font-normal placeholder:text-[#8793a5] focus:border-[#2878ce] focus:bg-white focus:shadow-[0_0_0_3px_rgba(40,120,206,0.10)]";

  return (
    <section className="relative w-full overflow-hidden bg-[#0b1b35] px-5 py-16 font-sans sm:px-8 lg:py-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#0785ff]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f59e0b]/10 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-[1250px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

        {/* Left Content */}
        <div className="w-full text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0785ff]/30 bg-[#0785ff]/10 px-4 py-2 text-[12px] font-bold tracking-[1.2px] text-[#70baff]">
            <MessageCircle size={15} />
            {enquiryData.eyebrow}
          </div>

          <h2 className="mt-6 max-w-[620px] text-[34px] font-extrabold leading-[1.15] tracking-[-1px] text-white sm:text-[44px] lg:text-[52px]">
            {enquiryData.title}
          </h2>

          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.9] text-[#b8c7dc] sm:text-base">
            {enquiryData.description}
          </p>

          {/* Benefits */}
          <div className="mt-9 flex flex-col gap-5">
            {enquiryData.benefits.map((benefit, index) => (
              <div key={benefit} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#ff861f]/25 bg-[#ff861f]/10 text-[#ff9b45]">
                  <CircleCheck size={18} strokeWidth={2.2} />
                </div>

                <span className="pt-1 text-[14px] font-medium leading-6 text-[#e0e8f4] sm:text-[15px]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Supporting Note */}
          <div className="mt-10 flex items-center gap-4 border-t border-[#ffffff]/15 pt-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0785ff]/15 text-[#65b5ff]">
              <GraduationCap size={25} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Let's plan your learning journey
              </p>
              <p className="mt-1 text-xs leading-5 text-[#aebdd2]">
                Get guidance to explore the right course for your goals.
              </p>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="w-full rounded-[22px] border border-[#e6ebf2] bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.25)] sm:p-9 lg:p-10">
          {/* Form Heading */}
          <div className="mb-7 border-b border-[#edf0f5] pb-6">
            <span className="text-[12px] font-extrabold tracking-[1.8px] text-[#2878ce]">
              GET IN TOUCH
            </span>

            <h3 className="mt-2 text-[30px] font-extrabold tracking-[-0.8px] text-[#15243c] sm:text-[36px]">
              {enquiryData.formTitle}
            </h3>

            <p className="mt-2 text-[14px] leading-6 text-[#778397]">
              {enquiryData.formSubtitle}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="enquiry-name"
                className="mb-2 block text-[13px] font-bold text-[#26364d]"
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                id="enquiry-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={enquiryData.placeholders.name}
                autoComplete="name"
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
                htmlFor="enquiry-email"
                className="mb-2 block text-[13px] font-bold text-[#26364d]"
              >
                Email Address{" "}
                <span className="font-normal text-[#929daf]">(Optional)</span>
              </label>

              <input
                id="enquiry-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={enquiryData.placeholders.email}
                autoComplete="email"
                className={inputClass}
              />

              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="enquiry-phone"
                className="mb-2 block text-[13px] font-bold text-[#26364d]"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                id="enquiry-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={enquiryData.placeholders.phone}
                maxLength={10}
                inputMode="numeric"
                autoComplete="tel"
                className={inputClass}
              />

              {errors.phone && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Course and Location */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="enquiry-course"
                  className="mb-2 block text-[13px] font-bold text-[#26364d]"
                >
                  Interested Course
                </label>

                <select
                  id="enquiry-course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">
                    {enquiryData.placeholders.course}
                  </option>

                  {enquiryData.courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="enquiry-branch"
                  className="mb-2 block text-[13px] font-bold text-[#26364d]"
                >
                  Location
                </label>

                <select
                  id="enquiry-branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">
                    {enquiryData.placeholders.branch}
                  </option>

                  {enquiryData.branches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-1 flex h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#1764ad] text-[14px] font-bold text-white transition-[background-color,box-shadow] duration-300 hover:bg-[#f58227] hover:shadow-[0_8px_22px_rgba(245,130,39,0.22)] focus:outline-none focus:ring-2 focus:ring-[#1764ad] focus:ring-offset-2"
            >
              {enquiryData.submitText}
              <ArrowRight size={18} />
            </button>

            <p className="text-center text-[11px] leading-5 text-[#929daf]">
              * Name and phone number are required to submit your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EnquirySection;
