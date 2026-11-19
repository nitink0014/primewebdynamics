
import { useState } from "react";
import registrationData from "../data/registrationData.json";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: registrationData.courses[0],
    branch: registrationData.branches[0],
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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }

    // Phone validation
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
    "w-full h-[34px] rounded-md border border-slate-300 bg-white px-3 text-[12px] text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const labelClass =
    "mb-1 block text-[11px] font-semibold text-slate-600";

  return (
    <section className="min-h-screen bg-white px-3 py-5 font-sans sm:px-6 sm:py-8">

      <div className="mx-auto grid w-full max-w-[900px] overflow-hidden rounded-xl bg-slate-100 shadow-[0_5px_25px_rgba(15,35,75,0.08)] lg:grid-cols-[25%_75%]">

        {/* Left Branding Section */}
        <div className="relative flex min-h-[160px] items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-sky-100 to-sky-400 px-4 py-5 lg:min-h-[500px]">

          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/50 blur-3xl" />

          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />

          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-blue-500/40 to-transparent" />

          <div className="relative z-10 text-center">

            <h1 className="text-2xl font-extrabold tracking-tight text-blue-800 sm:text-3xl">
              {registrationData.brand.firstLine}
              <span className="text-slate-800">
                {registrationData.brand.highlight}
              </span>
            </h1>

            <h2 className="mt-1 text-xl font-bold text-slate-800 sm:text-2xl">
              {registrationData.brand.secondLine}
            </h2>

            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-orange-400" />

            <p className="mt-3 text-[9px] font-bold tracking-[2px] text-blue-900">
              {registrationData.brand.tagline}
            </p>

          </div>
        </div>

        {/* Right Registration Section */}
        <div className="bg-slate-100 px-3 py-4 sm:px-5 sm:py-5 lg:px-6">

          <div className="mx-auto max-w-[550px]">

            {/* Heading */}
            <div className="mb-3">

              <h2 className="text-lg font-bold text-blue-700 sm:text-xl">
                {registrationData.heading}
              </h2>

              <p className="mt-1 text-[11px] text-slate-500 sm:text-[12px]">
                {registrationData.subtitle}
              </p>

            </div>

            {/* Registration Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-lg border border-slate-300 bg-white p-3 sm:p-4"
            >

              <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">

                {/* Name - Required */}
                <div className="sm:col-span-2">
                  <label className={labelClass}>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />

                  {errors.name && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email - Optional */}
                <div>
                  <label className={labelClass}>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Phone - Required */}
                <div>
                  <label className={labelClass}>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter 10 digit number"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    inputMode="numeric"
                    className={inputClass}
                  />

                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Course - Optional */}
                <div>
                  <label className={labelClass}>
                    Select Course
                  </label>

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Course</option>

                    {registrationData.courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Branch - Optional */}
                <div>
                  <label className={labelClass}>
                    Select Branch
                  </label>

                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Branch</option>

                    {registrationData.branches.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Address - Optional */}
                <div className="sm:col-span-2">
                  <label className={labelClass}>
                    Address
                  </label>

                  <textarea
                    name="address"
                    placeholder="Enter your complete address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={2}
                    className="w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 text-[12px] text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* City - Optional */}
                <div>
                  <label className={labelClass}>
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Country - Optional */}
                <div>
                  <label className={labelClass}>
                    Country
                  </label>

                  <input
                    type="text"
                    name="country"
                    placeholder="Enter country"
                    value={formData.country}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Zipcode - Optional */}
                <div>
                  <label className={labelClass}>
                    Zipcode
                  </label>

                  <input
                    type="text"
                    name="zipcode"
                    placeholder="Enter ZIP code"
                    value={formData.zipcode}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Amount - Optional */}
                <div>
                  <label className={labelClass}>
                    Amount
                  </label>

                  <input
                    type="number"
                    name="amount"
                    placeholder="Enter amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className={inputClass}
                    min="0"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <div className="mt-4 flex flex-wrap items-center gap-3">

                <button
                  type="submit"
                  className="rounded-lg bg-blue-700 px-5 py-2 text-[12px] font-semibold text-white transition duration-200 hover:bg-blue-800"
                >
                  {registrationData.submitText}
                </button>

                {submitted && (
                  <p className="text-[11px] font-semibold text-green-700">
                    {registrationData.successMessage}
                  </p>
                )}

              </div>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Registration;
