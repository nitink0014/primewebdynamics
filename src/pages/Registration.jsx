
import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Business Analytics",
    branch: "Noida Sector 16",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    amount: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const labelClass = "mb-1.5 block text-sm text-slate-600";

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-8 md:py-12">

      <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-xl bg-slate-100 shadow-sm lg:grid-cols-[33%_67%]">

        {/* Left Branding Section */}
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-sky-100 to-sky-400 px-6 py-12 lg:min-h-[700px]">

          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/50 blur-3xl" />

          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />

          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-blue-500/40 to-transparent" />

          <div className="relative z-10 text-center">

            <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl">
              Prime
              <span className="text-slate-800">web</span>
            </h1>

            <h2 className="mt-1 text-3xl font-bold text-slate-800 sm:text-4xl">
              dynamics
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-orange-400" />

            <p className="mt-4 text-sm font-semibold tracking-[3px] text-blue-900">
              LEARN • BUILD • GROW
            </p>

          </div>
        </div>

        {/* Right Registration Form */}
        <div className="bg-slate-100 px-5 py-8 sm:px-10 lg:px-12 lg:py-9">

          <div className="mx-auto max-w-3xl">

            <h2 className="text-2xl font-semibold text-blue-700">
              Online Registration Form
            </h2>

            <p className="mb-6 text-sm text-slate-500 sm:text-base">
              Register online today and take the first step towards success!
            </p>

            <form
              onSubmit={handleSubmit}
              className="rounded-md border border-slate-300 p-5 sm:p-8"
            >

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">

                {/* Name */}
                <div className="sm:col-span-2">
                  <label className={labelClass}>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    pattern="[0-9]{10}"
                    title="Enter a valid 10 digit phone number"
                    required
                  />
                </div>

                {/* Course */}
                <div>
                  <label className={labelClass}>Course</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option>Business Analytics</option>
                    <option>Data Analytics</option>
                    <option>Full Stack Development</option>
                    <option>Python Development</option>
                    <option>Java Development</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>

                {/* Branch */}
                <div>
                  <label className={labelClass}>Branch</label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option>Noida Sector 16</option>
                    <option>Noida Sector 63</option>
                    <option>Gurugram</option>
                    <option>Ghaziabad</option>
                    <option>Online</option>
                  </select>
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label className={labelClass}>Address</label>
                  <textarea
                    name="address"
                    placeholder="Enter Address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className={`${inputClass} resize-y`}
                    required
                  />
                </div>

                {/* City */}
                <div>
                  <label className={labelClass}>City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City Name"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                {/* Country */}
                <div>
                  <label className={labelClass}>Country</label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Enter Country Name"
                    value={formData.country}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                {/* Zipcode */}
                <div>
                  <label className={labelClass}>Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="Enter ZIP Code"
                    value={formData.zipcode}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                {/* Amount */}
                <div>
                  <label className={labelClass}>Amount</label>
                  <input
                    type="number"
                    name="amount"
                    placeholder="Enter Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className={inputClass}
                    min="0"
                    required
                  />
                </div>

              </div>
            </form>

            <button
              type="button"
              onClick={() => {
                const form = document.querySelector("#registration-form");
              }}
              className="hidden"
            />

            <button
              type="submit"
              form="registration-form"
              className="mt-5 rounded-xl bg-blue-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Submit
            </button>

            {submitted && (
              <p className="mt-4 text-sm font-medium text-green-700">
                Registration submitted successfully!
              </p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
