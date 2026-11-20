
import React from "react";

export default function PolicyPage({ data }) {
  return (
    <main className="min-h-screen bg-[#f4f8fc] font-sans">

      {/* Page Header */}
      <section className="bg-[#081c3a] px-5 py-20 text-center">
        <div className="mx-auto max-w-4xl">

          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            {data.title}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
            {data.subtitle}
          </p>

          <p className="mt-5 text-sm text-[#8ad3f8]">
            Last Updated: {data.lastUpdated}
          </p>

        </div>
      </section>

      {/* Policy Content */}
      <section className="mx-auto max-w-5xl px-5 py-14">

        <div className="space-y-6">

          {data.sections.map((section, index) => (
            <article
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
            >

              <h2 className="mb-4 text-xl font-bold text-[#173e70] sm:text-2xl">
                {section.heading}
              </h2>

              <div className="space-y-3">

                {section.content.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-sm leading-7 text-gray-600 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

              </div>

            </article>
          ))}

        </div>

        {/* Contact Information */}
        <div className="mt-8 rounded-xl border border-blue-100 bg-[#e2f1ff] p-6 sm:p-8">

          <h2 className="mb-5 text-xl font-bold text-[#173e70] sm:text-2xl">
            Contact Primeweb Dynamics
          </h2>

          <div className="space-y-4 text-sm leading-7 text-gray-700 sm:text-base">

            {data.contact.company && (
              <p>
                <strong>Company:</strong>{" "}
                {data.contact.company}
              </p>
            )}

            {data.contact.phone && (
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
                  className="text-blue-700 transition hover:underline"
                >
                  {data.contact.phone}
                </a>
              </p>
            )}

            {data.contact.email && (
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${data.contact.email}`}
                  className="text-blue-700 transition hover:underline"
                >
                  {data.contact.email}
                </a>
              </p>
            )}

            {data.contact.website && (
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={data.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 transition hover:underline"
                >
                  www.primewebdynamics.in
                </a>
              </p>
            )}

            {data.contact.address && (
              <p>
                <strong>Address:</strong>{" "}
                {data.contact.address}
              </p>
            )}

          </div>

        </div>

      </section>

    </main>
  );
}
