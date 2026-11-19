
import { useState } from "react";
import { CircleCheck } from "lucide-react";

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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Field change hone par uska previous error clear karo
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

    const phone = formData.phone.replace(/\D/g, "");

    if (!phone) {
      newErrors.phone = "Please enter your phone number";
    } else if (phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Enquiry details:", formData);

    // Successful submission ke baad form reset
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      branch: "",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-[#102653] px-5 pb-[45px] pt-[55px] font-sans sm:px-8 lg:px-0">
      <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-[40px] lg:w-[88%] lg:grid-cols-[1fr_1.05fr] lg:gap-[45px]">

        {/* Left Content */}
        <div className="w-full max-w-[620px] text-white">
          <p className="text-[13px] font-bold text-[#d7e2f5]">
            {enquiryData.eyebrow}
          </p>

          <h2 className="mt-[14px] text-[36px] font-extrabold leading-[1.12] tracking-[-1px] text-white sm:text-[46px] lg:text-[56px]">
            {enquiryData.title}
          </h2>

          <p className="mt-[18px] max-w-[580px] text-[15px] font-medium leading-[1.8] text-[#d4dced] sm:text-[16px]">
            {enquiryData.description}
          </p>

          {/* Benefits */}
          <div className="mt-[23px] flex flex-col gap-[15px]">
            {enquiryData.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-[11px]"
              >
                <CircleCheck
                  size={20}
                  strokeWidth={2.2}
                  className="shrink-0 text-[#ff861f]"
                />

                <span className="text-[16px] font-medium text-[#e1e8f5] sm:text-[18px]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="w-full rounded-[15px] bg-white px-[24px] py-[25px] shadow-[0_18px_45px_rgba(0,0,0,0.12)] sm:px-[35px] sm:py-[26px] lg:mr-[35px] lg:h-[510px] lg:px-[38px] lg:py-[27px]">
          <h3 className="text-[32px] font-extrabold leading-[1.15] tracking-[-1px] text-[#151b2a] sm:text-[40px]">
            {enquiryData.formTitle}
          </h3>

          <p className="mt-[4px] text-[14px] font-medium text-[#647084] sm:text-[16px]">
            {enquiryData.formSubtitle}
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-[30px] flex flex-col gap-[14px]"
          >
            {/* Full Name - Required */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={enquiryData.placeholders.name}
                className="h-[45px] w-full rounded-[11px] border border-[#cbd5e1] bg-white px-[14px] text-[14px] text-[#26364d] outline-none transition-colors placeholder:text-[#647084] focus:border-[#1d4b89]"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email - Optional */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={enquiryData.placeholders.email}
              className="h-[45px] w-full rounded-[11px] border border-[#cbd5e1] bg-white px-[14px] text-[14px] text-[#26364d] outline-none transition-colors placeholder:text-[#647084] focus:border-[#1d4b89]"
            />

            {/* Phone - Required */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={enquiryData.placeholders.phone}
                maxLength={10}
                inputMode="numeric"
                className="h-[45px] w-full rounded-[11px] border border-[#cbd5e1] bg-white px-[14px] text-[14px] text-[#26364d] outline-none transition-colors placeholder:text-[#647084] focus:border-[#1d4b89]"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Course - Optional */}
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="h-[45px] w-full rounded-[11px] border border-[#cbd5e1] bg-white px-[14px] text-[14px] text-[#26364d] outline-none transition-colors focus:border-[#1d4b89]"
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

            {/* Branch - Optional */}
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="h-[45px] w-full rounded-[11px] border border-[#cbd5e1] bg-white px-[14px] text-[14px] text-[#26364d] outline-none transition-colors focus:border-[#1d4b89]"
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

            {/* Submit */}
            <button
              type="submit"
              className="flex h-[45px] w-full items-center justify-center rounded-[11px] bg-[#204b89] text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#ff821f] hover:shadow-[0_8px_20px_rgba(255,130,31,0.22)]"
            >
              {enquiryData.submitText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EnquirySection;
