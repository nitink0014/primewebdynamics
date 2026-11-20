
import React from "react";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight } from "lucide-react";
import reviewsData from "../data/reviewsData.json";

export default function Reviews() {
  const { reviews } = reviewsData;

  return (
    <main className="min-h-screen bg-[#f4f8fc]">
      {/* Hero Section */}
      <section className="bg-[#081c3a] px-5 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-[#8ad3f8]/30 bg-[#8ad3f8]/10 px-5 py-2 text-sm font-semibold text-[#8ad3f8]">
            Student Experiences
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            {reviewsData.title}
          </h1>

          <h2 className="mt-3 text-2xl font-bold text-[#8ad3f8]">
            {reviewsData.highlight}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
            {reviewsData.subtitle}
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#173e70]">
            {reviewsData.sampleLabel}
          </span>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            {reviewsData.sampleNotice}
          </p>
        </div>

        {reviews.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Quote Icon */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#173e70]">
                    <Quote size={23} />
                  </div>

                  <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
                    Sample
                  </span>
                </div>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-1">
                  {Array.from(
                    { length: 5 },
                    (_, index) => (
                      <Star
                        key={index}
                        size={17}
                        className={
                          index < review.rating
                            ? "text-yellow-400"
                            : "text-gray-200"
                        }
                        fill={
                          index < review.rating
                            ? "currentColor"
                            : "none"
                        }
                      />
                    )
                  )}
                </div>

                {/* Review */}
                <p className="flex-grow text-[15px] leading-7 text-gray-600">
                  "{review.message}"
                </p>

                {/* Student Details */}
                <div className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#173e70] text-lg font-bold text-white">
                    {review.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate font-bold text-[#173e70]">
                      {review.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {review.course}
                    </p>
                  </div>
                </div>
              </article>
            )
            )}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-14 text-center shadow-md">
            <h2 className="text-2xl font-bold text-[#173e70]">
              No reviews available
            </h2>

            <p className="mt-4 text-gray-500">
              Student reviews will be displayed here soon.
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#081c3a] px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold text-white">
            Ready to Build Your Future in IT?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Explore our industry-focused courses and take your first step
            towards developing practical technology skills.
          </p>

          <Link
            to={reviewsData.contactLink}
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#8ad3f8] px-7 py-3.5 font-bold text-[#081c3a] transition hover:bg-white"
          >
            {reviewsData.contactButton}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
