
import { useState } from "react";

const courses = [
  "Full Stack Development",
  "MERN Stack Development",
  "Java + AI",
  "Data Analytics",
  "Data Science",
  "Python Programming",
  "Cloud Computing",
  "DevOps",
  "Software Testing",
  "Generative AI",
  "Cyber Security",
  "UI / UX Design",
];

const partners = [
  "Google", "Microsoft", "Amazon", "Infosys",
  "TCS", "Accenture", "IBM", "Wipro",
];

const stats = [
  { number: "10+", label: "Industry-focused Programs" },
  { number: "500+", label: "Learning Opportunities" },
  { number: "50+", label: "Expert Mentors" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "Full Stack Development",
    review:
      "The practical learning approach helped me understand web development and build real-world projects.",
  },
  {
    name: "Priya Verma",
    course: "Data Analytics",
    review:
      "The learning experience was excellent. I gained confidence in working with real-world datasets.",
  },
  {
    name: "Aman Kumar",
    course: "MERN Stack Development",
    review:
      "A great learning environment with practical projects and helpful guidance.",
  },
];

function SectionTitle({ children }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold uppercase text-slate-900 md:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-orange-500" />
    </div>
  );
}

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

    const phone = formData.phone.replace(/\D/g, "");

    if (!phone) {
      newErrors.phone = "Please enter your phone number";
    } else if (phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log("About Inquiry Details:", formData);

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
    });
  };

  return (
    <main className="overflow-hidden bg-white">

      {/* Hero Section */}
      <section
        className="relative flex min-h-[320px] items-center justify-center bg-cover bg-center px-5 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(3, 17, 40, 0.82), rgba(3, 17, 40, 0.82)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="relative z-10">
          <span className="inline-block bg-blue-700 px-4 py-2 text-4xl font-extrabold text-white md:text-5xl">
            ABOUT US
          </span>
          <h1 className="mt-5 text-2xl font-bold text-white md:text-4xl">
            Building Skills. Creating Opportunities.
          </h1>
          <p className="mt-4 text-base text-gray-200 md:text-lg">
            Empowering the next generation with industry-ready skills.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle>Our Mission</SectionTitle>
        <p className="text-justify text-base leading-8 text-gray-700 md:text-lg">
          At Primewebdynamics, our mission is to empower students and
          aspiring professionals with practical, industry-relevant
          technology skills. We aim to bridge the gap between academic
          knowledge and industry requirements through structured learning,
          hands-on projects and expert guidance. Our goal is to help
          learners build confidence and prepare for successful careers
          in the technology industry.
        </p>
      </section>

      {/* Vision */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle>Our Vision</SectionTitle>
          <p className="text-center text-lg leading-8 text-gray-700">
            To become a trusted learning and technology partner that
            creates skilled professionals, encourages innovation and
            makes quality technology education accessible to everyone.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle>What We Do</SectionTitle>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Practical Learning",
              description:
                "Learn through hands-on assignments, practical exercises and real-world projects.",
              icon: "💻",
            },
            {
              title: "Industry Skills",
              description:
                "Develop technical skills and knowledge aligned with modern industry requirements.",
              icon: "🚀",
            },
            {
              title: "Career Guidance",
              description:
                "Get guidance to improve your technical knowledge, portfolio and interview readiness.",
              icon: "🎯",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">{item.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-blue-800">
                {item.title}
              </h3>
              <p className="leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="bg-[#061d38] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold uppercase">
              Industry Connections
            </h2>
            <div className="mt-3 h-1 w-64 bg-orange-500" />
            <h3 className="mt-8 text-xl font-semibold text-orange-400">
              Learn Skills That Matter!
            </h3>
            <p className="mt-5 leading-8 text-gray-300">
              We focus on helping learners understand current
              technology trends and prepare for opportunities in
              the digital industry through practical learning
              and career-focused guidance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex h-24 items-center justify-center rounded-lg border-2 border-orange-500 bg-white p-3 text-center text-lg font-bold text-blue-900 transition hover:scale-105"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-700 px-6 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-3 text-blue-100">
              Take the next step towards building your technology career.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-md bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            CONTACT US →
          </a>
        </div>
      </section>

      {/* Top Courses */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle>Top Courses</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <a
              href="/courses"
              key={course}
              className="rounded-md border border-blue-200 px-5 py-5 font-semibold text-blue-800 shadow-md transition hover:bg-blue-800 hover:text-white"
            >
              {course} →
            </a>
          ))}
        </div>
      </section>

      {/* Success Stats */}
      <section className="bg-gradient-to-r from-[#263b75] to-[#54136d] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-extrabold text-orange-400 md:text-6xl">
                {stat.number}
              </h3>
              <p className="mt-4 text-lg text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Section */}
      <section
        className="bg-cover bg-center px-6 py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2, 15, 30, 0.88), rgba(2, 15, 30, 0.88)), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="text-white">
            <h2 className="text-3xl font-bold text-orange-500 md:text-4xl">
              Ready to Empower Your Future?
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-200">
              Connect with our team to explore learning opportunities,
              courses and career guidance.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <span className="text-3xl">☎</span>
                <h3 className="mt-2 font-bold text-orange-400">Phone</h3>
                <p>Contact details coming soon</p>
              </div>
              <div>
                <span className="text-3xl">✉</span>
                <h3 className="mt-2 font-bold text-orange-400">Email</h3>
                <p>Contact details coming soon</p>
              </div>
            </div>
          </div>

          {/* About Inquiry Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 rounded-2xl bg-white p-7 shadow-2xl md:p-10"
          >
            <h3 className="mb-5 text-2xl font-bold text-blue-900">
              Get In Touch
            </h3>

            {/* Name - Required */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email - Optional */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
            />

            {/* Phone - Required */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                maxLength={10}
                inputMode="numeric"
                className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Course - Optional */}
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-4 text-gray-500 outline-none focus:border-blue-600"
            >
              <option value="">Select a Course</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-900 py-4 font-bold text-white transition hover:bg-orange-500"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle>Testimonials & Reviews</SectionTitle>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-white p-8 shadow-lg"
              >
                <div className="text-5xl font-bold text-orange-400">“</div>
                <p className="min-h-28 leading-7 text-gray-600">
                  {item.review}
                </p>
                <div className="mt-6 border-t pt-5">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-blue-700">{item.course}</p>
                  <p className="mt-2 text-lg text-yellow-500">★★★★★</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
