
import { Link } from "react-router-dom";
import {
  Star,
  Quote,
  ArrowRight,
  MessageSquareQuote,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import reviewsData from "../data/reviewsData.json";

export default function Reviews() {
  const reviews = reviewsData.reviews || [];

  return (
    <main className="min-h-screen bg-[#f7f9fc]">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071a36] via-[#102f5d] to-[#174f8e] px-5 py-20 text-center sm:py-24">
        <div className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full border-[45px] border-white/[0.04]" />

        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-400/[0.08] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8ad3f8]/30 bg-[#8ad3f8]/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#8ad3f8]">
            <MessageSquareQuote size={15} />
            Student Experiences
          </span>

          <h1 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            {reviewsData.title}
          </h1>

          <h2 className="mt-3 text-2xl font-extrabold text-[#8ad3f8] sm:text-3xl">
            {reviewsData.highlight}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            {reviewsData.subtitle}
          </p>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-orange-500" />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mx-auto max-w-[1350px] px-5 py-14 sm:px-8 sm:py-16">

        {/* Sample Notice */}
        <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-[0_5px_20px_rgba(15,35,65,0.04)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
            <GraduationCap size={25} />
          </div>

          <span className="mt-4 inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-orange-600">
            {reviewsData.sampleLabel}
          </span>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {reviewsData.sampleNotice}
          </p>
        </div>

        {/* Reviews Grid */}
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_5px_20px_rgba(15,35,65,0.035)] transition-[border-color,box-shadow] duration-200 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,35,65,0.08)] sm:p-7"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#1760a4] to-[#8ad3f8]" />

                {/* Card Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                    <Quote size={24} />
                  </div>

                  <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-orange-600">
                    Sample
                  </span>
                </div>

                {/* Rating */}
                <div
                  className="mb-5 flex items-center gap-1"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      size={17}
                      className={
                        index < review.rating
                          ? "text-amber-400"
                          : "text-slate-200"
                      }
                      fill={
                        index < review.rating
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>

                {/* Review Message */}
                <p className="flex-1 text-[15px] leading-8 text-slate-600">
                  "{review.message}"
                </p>

                {/* Student Details */}
                <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1760a4] to-[#0c315f] text-lg font-extrabold text-white">
                    {review.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-extrabold text-slate-900">
                      {review.name}
                    </h3>

                    <p className="mt-1 truncate text-xs font-medium text-slate-500">
                      {review.course}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1760a4]">
              <MessageSquareQuote size={27} />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
              No Reviews Available
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
              Student reviews will be displayed here soon.
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b2342] via-[#123d70] to-[#1760a4] px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border-[40px] border-white/[0.05]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-orange-300">
              <Sparkles size={27} />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
              Ready to Build Your Future in IT?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Explore our industry-focused courses and take your first step towards developing practical technology skills.
            </p>

            <Link
              to={reviewsData.contactLink}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#8ad3f8] px-7 py-3.5 text-sm font-extrabold text-[#081c3a] transition-colors duration-200 hover:bg-white"
            >
              {reviewsData.contactButton}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
