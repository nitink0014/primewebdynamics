
import React from "react";
import { Link } from "react-router-dom";
import reviewsData from "../data/reviewsData.json";

export default function Reviews() {
  const { reviews } = reviewsData;

  return (
    <main className="min-h-screen bg-[#f4f8fc]">
      <section className="bg-[#081c3a] px-5 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          {reviewsData.title}
        </h1>

        <h2 className="mt-3 text-2xl font-bold text-[#8ad3f8]">
          {reviewsData.highlight}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-300">
          {reviewsData.subtitle}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        {reviews.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="rounded-2xl bg-white p-7 shadow-md"
              >
                <div className="mb-4 flex items-center gap-1 text-yellow-500">
                  {"★".repeat(review.rating)}
                </div>

                <p className="leading-7 text-gray-600">
                  "{review.message}"
                </p>

                <div className="mt-6 border-t pt-4">
                  <h3 className="font-bold text-[#173e70]">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {review.course}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-14 text-center shadow-md">
            <div className="mb-5 text-5xl text-[#f5b800]">★</div>

            <h2 className="text-2xl font-bold text-[#173e70]">
              {reviewsData.emptyMessage}
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              {reviewsData.emptyDescription}
            </p>

            <p className="mt-6 font-semibold text-gray-700">
              {reviewsData.contactText}
            </p>

            <Link
              to={reviewsData.contactLink}
              className="mt-5 inline-block rounded-lg bg-[#173e70] px-7 py-3 font-semibold text-white transition hover:bg-[#24538d]"
            >
              {reviewsData.contactButton}
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
