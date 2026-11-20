import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  ExternalLink,
  Globe,
} from "lucide-react";

const branches = [
  {
    name: "Primeweb Dynamics – Agra",
    phone: "7902170568",
    whatsapp: "7902170568",
    email: "hello@primewebdynamics.com",
    website: "https://www.primewebdynamics.in",
    address:
      "1st Floor, Friends Tower, Opp. MAX Mall, Sanjay Palace, Agra, Uttar Pradesh, India",
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

              {/* NAME - REQUIRED */}
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

              {/* EMAIL - OPTIONAL */}
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

              {/* PHONE - REQUIRED */}
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

              {/* CENTER - OPTIONAL */}
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
                  <option value="Sanjay Palace Agra">
                    Sanjay Palace, Agra
                  </option>
                </select>
              </div>

              {/* COURSE - OPTIONAL */}
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
                  <option value="Full Stack Development">
                    Full Stack Development
                  </option>
                  <option value="Data Analytics">
                    Data Analytics
                  </option>
                  <option value="Business Analytics">
                    Business Analytics
                  </option>
                  <option value="Python Development">
                    Python Development
                  </option>
                  <option value="Java Development">
                    Java Development
                  </option>
                  <option value="MERN Stack">
                    MERN Stack
                  </option>
                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>
                </select>
              </div>

            </div>

            {/* MESSAGE - OPTIONAL */}
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

      {/* OUR OFFICE */}
      <section className="bg-[#f4f8fc] px-5 py-12 sm:px-10 sm:py-16">

        <div className="mx-auto max-w-[1400px]">

          <h2 className="mb-10 text-center text-4xl font-bold text-[#245b9c] sm:text-5xl">
            Our Office
          </h2>

          <div className="grid grid-cols-1 gap-8">

            {branches.map((branch, index) => (
              <div
                key={index}
                className="min-h-[230px] rounded-xl bg-[#e2f1ff] px-8 py-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-12"
              >

                <h3 className="mb-4 text-2xl font-bold text-[#24538d]">
                  {branch.name}
                </h3>

                <div className="space-y-3 text-base leading-6 text-gray-900">

                  <p className="flex flex-wrap items-center gap-2">
                    <Phone size={17} className="text-[#24538d]" />
                    <span>Phone:</span>

                    <a
                      href={`tel:+91${branch.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      +91 {branch.phone}
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <MessageCircle size={17} className="text-[#25D366]" />
                    <span>WhatsApp:</span>

                    <a
                      href={`https://wa.me/91${branch.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      +91 {branch.whatsapp}
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <Mail size={17} className="text-[#24538d]" />
                    <span>Email:</span>

                    <a
                      href={`mailto:${branch.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {branch.email}
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <Globe size={17} className="text-[#24538d]" />
                    <span>Website:</span>

                    <a
                      href={branch.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      www.primewebdynamics.in
                    </a>
                  </p>

                  <p className="flex flex-wrap items-start gap-2">
                    <ExternalLink size={17} className="mt-1 text-[#24538d]" />
                    <span>Address:</span>
                    <span>{branch.address}</span>
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* GOOGLE MAP - SANJAY PALACE AGRA */}
      <section className="bg-[#f4f8fc] px-5 pb-14">

        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-lg shadow-md">

          <div className="flex items-center justify-between bg-white px-4 py-3">

            <h3 className="font-semibold text-slate-800">
              Find Our Location
            </h3>

            <a
              href="https://www.google.com/maps/search/?api=1&query=1st+Floor+Friends+Tower+Opp+MAX+Mall+Sanjay+Palace+Agra"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm font-semibold text-blue-600"
            >
              Open in Maps
              <ExternalLink size={15} />
            </a>

          </div>

          <iframe
            title="Primewebdynamics Office Location - Agra"
            src="https://maps.google.com/maps?q=Friends%20Tower%2C%20Sanjay%20Palace%2C%20Agra%2C%20India&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
          href="tel:+917902170568"
          aria-label="Call us"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3188bd] text-white transition hover:scale-110"
        >
          <Phone size={21} />
        </a>

        <a
          href="https://wa.me/917902170568"
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