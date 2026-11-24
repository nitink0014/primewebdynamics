
import {
  ShieldCheck,
  FileText,
  CalendarDays,
  Building2,
  Phone,
  Mail,
  Globe,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function PolicyPage({ data }) {
  const contact = data.contact || {};

  return (
    <main className="min-h-screen bg-[#f7f9fc] font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071a36] via-[#102f5d] to-[#174f8e] px-5 py-16 text-center sm:py-20">

        <div className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full border-[45px] border-white/[0.04]" />

        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-400/[0.08] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#8ad3f8]/30 bg-[#8ad3f8]/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#8ad3f8]">
            <ShieldCheck size={15} />
            Prime Webdynamics
          </span>

          <h1 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            {data.title}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">
            {data.subtitle}
          </p>

          {data.lastUpdated && (
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-medium text-blue-100">
              <CalendarDays size={15} className="text-[#8ad3f8]" />
              Last Updated: {data.lastUpdated}
            </div>
          )}

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-orange-500" />

        </div>
      </section>

      {/* Policy Content */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">

        {/* Intro Label */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
            <FileText size={22} />
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[2px] text-orange-500">
              Important Information
            </p>

            <h2 className="mt-1 text-lg font-extrabold text-slate-900">
              Please Read Carefully
            </h2>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-5">

          {(data.sections || []).map((section, index) => (
            <article
              key={`${section.heading}-${index}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_5px_20px_rgba(15,35,65,0.035)] transition-[border-color,box-shadow] duration-200 hover:border-blue-200 hover:shadow-[0_10px_25px_rgba(15,35,65,0.06)]"
            >
              <div className="flex items-start gap-4 p-5 sm:p-7">

                {/* Section Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-sm font-extrabold text-[#1760a4]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">

                  <h2 className="text-lg font-extrabold leading-7 text-slate-900 sm:text-xl">
                    {section.heading}
                  </h2>

                  <div className="mt-4 space-y-4">
                    {(section.content || []).map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-sm leading-8 text-slate-600 sm:text-[15px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Contact Information */}
        {Object.values(contact).some(Boolean) && (
          <section className="relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b2342] to-[#174f8e] p-6 text-white shadow-[0_10px_30px_rgba(11,35,66,0.12)] sm:p-9">

            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[35px] border-white/[0.05]" />

            <div className="relative z-10">

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[#8ad3f8]">
                  <Building2 size={23} />
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#8ad3f8]">
                    Get in Touch
                  </p>

                  <h2 className="mt-1 text-xl font-extrabold sm:text-2xl">
                    Contact {contact.company || "Us"}
                  </h2>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100">
                If you have any questions or concerns, feel free to contact our team using the details below.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {contact.company && (
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <Building2 size={19} className="mt-0.5 shrink-0 text-[#8ad3f8]" />

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-blue-200">
                        Company
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        {contact.company}
                      </p>
                    </div>
                  </div>
                )}

                {contact.phone && (
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <Phone size={19} className="mt-0.5 shrink-0 text-[#8ad3f8]" />

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-blue-200">
                        Phone
                      </p>

                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="mt-1 inline-block text-sm font-semibold text-white transition-colors hover:text-[#8ad3f8]"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contact.email && (
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <Mail size={19} className="mt-0.5 shrink-0 text-[#8ad3f8]" />

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-blue-200">
                        Email
                      </p>

                      <a
                        href={`mailto:${contact.email}`}
                        className="mt-1 inline-block break-all text-sm font-semibold text-white transition-colors hover:text-[#8ad3f8]"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                )}

                {contact.website && (
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <Globe size={19} className="mt-0.5 shrink-0 text-[#8ad3f8]" />

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-blue-200">
                        Website
                      </p>

                      <a
                        href={contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 break-all text-sm font-semibold text-white transition-colors hover:text-[#8ad3f8]"
                      >
                        {contact.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        <ArrowUpRight size={14} className="shrink-0" />
                      </a>
                    </div>
                  </div>
                )}

                {contact.address && (
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 sm:col-span-2">
                    <MapPin size={19} className="mt-0.5 shrink-0 text-[#8ad3f8]" />

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-blue-200">
                        Address
                      </p>

                      <p className="mt-1 text-sm font-semibold leading-7 text-white">
                        {contact.address}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </section>
        )}

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-xs leading-6 text-slate-400">
            Thank you for visiting Prime Webdynamics.
          </p>
        </div>

      </section>
    </main>
  );
}
