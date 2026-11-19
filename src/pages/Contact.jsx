
import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  ExternalLink,
} from "lucide-react";

const branches = [
  {
    name: "Noida Sector 16",
    phone: "7070905090",
    whatsapp: "9999993213",
    email: "hello@primewebdynamics.com",
    address: "A-43 & A-52, Noida Sector 16, Uttar Pradesh, India",
  },
  {
    name: "Sector 63, Noida",
    phone: "7070905090",
    whatsapp: "7042175774",
    email: "hello@primewebdynamics.com",
    address: "H-43, Sector 63, Noida, Uttar Pradesh, India",
  },
  {
    name: "South Ex.",
    phone: "7070905090",
    whatsapp: "9899866334",
    email: "hello@primewebdynamics.com",
    address: "D-27, South Extension-1, New Delhi, India",
  },
  {
    name: "Noida Extension",
    phone: "7070905090",
    whatsapp: "7289886655",
    email: "hello@primewebdynamics.com",
    address: "TechZone 4, Greater Noida West, Uttar Pradesh, India",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    center: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);

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
      newErrors.name = "Please enter your name";
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

    console.log("Contact Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      center: "",
      course: "",
      message: "",
    });
  };

  const inputStyle =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const labelStyle =
    "mb-2 block text-sm font-semibold text-gray-800";

  return (
    <div className="min-h-screen bg-[#f4f8fc]">

      {/* HERO BANNER */}
      <section
        className="relative flex min-h-[440px] items-center justify-center bg-cover bg-center px-5 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8, 25, 55, 0.78), rgba(8, 25, 55, 0.78)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=85')",
        }}
      >
        <div>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl">
            Contact Us
          </h1>

          <p className="mt-5 text-base text-gray-200 sm:text-lg">
            Talk to our team about courses, centres, admissions, and partnerships.
          </p>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="px-4 py-12 sm:px-8 sm:py-16">

        <div className="mx-auto max-w-[1010px] rounded-[22px] bg-white px-5 py-10 shadow-[0_15px_50px_rgba(0,0,0,0.08)] sm:px-10 md:px-14">

          <div className="mb-7 text-center">
            <h2 className="text-3xl font-bold text-[#24538d] sm:text-4xl">
              Send Us a Message
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#64748b] sm:text-base">
              For further details, including questions and partnership
              opportunities, please email{" "}
              <a
                href="mailto:hello@primewebdynamics.com"
                className="font-bold text-black"
              >
                hello@primewebdynamics.com
              </a>{" "}
              or use our contact form.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4"
          >

            {/* NAME AND EMAIL */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Name - Required */}
              <div>
                <label className={labelStyle}>
                  Name<span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyle}
                />

                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email - Optional */}
              <div>
                <label className={labelStyle}>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

            </div>

            {/* PHONE, CENTER, COURSE */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {/* Phone - Required */}
              <div>
                <label className={labelStyle}>
                  Phone<span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  className={inputStyle}
                />

                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Center - Optional */}
              <div>
                <label className={labelStyle}>
                  Center / Branch
                </label>

                <select
                  name="center"
                  value={formData.center}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="">Select Branch</option>
                  <option value="Noida Sector 16">Noida Sector 16</option>
                  <option value="Sector 63 Noida">Sector 63, Noida</option>
                  <option value="South Extension">South Extension</option>
                  <option value="Noida Extension">Noida Extension</option>
                </select>
              </div>

              {/* Course - Optional */}
              <div>
                <label className={labelStyle}>
                  Course
                </label>

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="">Select a Course</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Business Analytics">Business Analytics</option>
                  <option value="Python Development">Python Development</option>
                  <option value="Java Development">Java Development</option>
                  <option value="MERN Stack">MERN Stack</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>

            </div>

            {/* MESSAGE - Optional */}
            <div>
              <label className={labelStyle}>
                How can we help you?
              </label>

              <textarea
                name="message"
                rows="4"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                className={`${inputStyle} resize-y`}
              />
            </div>

            {/* SUBMIT */}
            <div className="pt-4 text-center">

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#39446e] to-[#171c31] px-6 py-4 text-sm font-bold uppercase text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Send Message
                <Send size={17} />
              </button>

              {submitted && (
                <p className="mt-4 text-sm font-semibold text-green-600">
                  Thank you! Your enquiry has been submitted successfully.
                </p>
              )}

            </div>

          </form>
        </div>
      </section>

      {/* OUR BRANCHES */}
      <section className="bg-[#f4f8fc] px-5 py-12 sm:px-10 sm:py-16">

        <div className="mx-auto max-w-[1400px]">

          <h2 className="mb-10 text-center text-4xl font-bold text-[#245b9c] sm:text-5xl">
            Our Branches
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {branches.map((branch, index) => (
              <div
                key={index}
                className="min-h-[230px] rounded-xl bg-[#e2f1ff] px-8 py-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-12"
              >

                <h3 className="mb-2 text-2xl font-bold text-[#24538d]">
                  {branch.name}
                </h3>

                <div className="space-y-2 text-base leading-6 text-gray-900">

                  <p>
                    Phone :{" "}
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {branch.phone}
                    </a>
                  </p>

                  <p>
                    WhatsApp :{" "}
                    <a
                      href={`https://wa.me/91${branch.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {branch.whatsapp}
                    </a>
                  </p>

                  <p>
                    Email : {branch.email}
                  </p>

                  <p>
                    Address : {branch.address}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="bg-[#f4f8fc] px-5 pb-14">

        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-lg shadow-md">

          <div className="flex items-center justify-between bg-white px-4 py-3">
            <h3 className="font-semibold text-slate-800">
              Find Our Location
            </h3>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Noida+Sector+16+Uttar+Pradesh+India"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm font-semibold text-blue-600"
            >
              Open in Maps
              <ExternalLink size={15} />
            </a>
          </div>

          <iframe
            title="Primewebdynamics Office Location"
            src="https://maps.google.com/maps?q=Noida%20Sector%2016%2C%20Uttar%20Pradesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
      </section>

      {/* FLOATING CONTACT BUTTONS */}
      <div className="fixed right-0 top-[35%] z-50 flex flex-col gap-2 rounded-l-2xl bg-[#164c7e] p-2 shadow-xl">

        <a
          href="tel:+910000000000"
          aria-label="Call us"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3188bd] text-white transition hover:scale-110"
        >
          <Phone size={21} />
        </a>

        <a
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-110"
        >
          <MessageCircle size={22} />
        </a>

        <a
          href="mailto:hello@primewebdynamics.com"
          aria-label="Email us"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff963f] text-white transition hover:scale-110"
        >
          <Mail size={21} />
        </a>

      </div>

    </div>
  );
}

export default Contact;
