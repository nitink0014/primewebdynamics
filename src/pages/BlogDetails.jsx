
import { useParams, Link } from "react-router-dom";
import blogsData from "../data/blogsData.json";

const blogs = blogsData.blogs;

const createSectionId = (heading) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function BlogDetails() {
  const { slug } = useParams();

  // Find blog using its slug
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Blog Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          The blog you are looking for does not exist.
        </p>

        <Link
          to="/blogs"
          className="mt-6 rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-orange-500"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.id !== blog.id &&
        item.category === blog.category
    )
    .slice(0, 3);

  // Dynamic Table of Contents
  const sections = [
    { title: "Introduction", id: "introduction" },
    ...(blog.sections || []).map((section) => ({
      title: section.heading,
      id: createSectionId(section.heading),
    })),
    { title: "Conclusion", id: "conclusion" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section
        className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center px-5 py-12 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(3,18,39,0.85), rgba(3,18,39,0.85)), url(${blog.image})`,
        }}
      >
        <div className="max-w-4xl">

          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
            {blog.category}
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            {blog.title}
          </h1>

          <p className="mt-5 text-gray-300">
            {blog.description}
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-5 py-12">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

          {/* Article Content */}
          <article className="min-w-0 lg:col-span-2">

            {/* Breadcrumb */}
            <div className="mb-6 flex flex-wrap gap-2 text-sm text-gray-500">

              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>

              <span>/</span>

              <Link to="/blogs" className="hover:text-orange-500">
                Blogs
              </Link>

              <span>/</span>

              <span className="text-blue-700">
                {blog.category}
              </span>

            </div>

            {/* Featured Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="h-[280px] w-full rounded-2xl object-cover shadow-md md:h-[430px]"
            />

            {/* Author Information */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
                  P
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    Primewebdynamics Team
                  </p>

                  <p className="text-sm text-gray-500">
                    Blog Author
                  </p>
                </div>

              </div>

              <span className="text-sm text-gray-500">
                {blog.readTime || "Technology & Learning"}
              </span>

            </div>

            {/* Dynamic Blog Article */}
            <div className="mt-8 space-y-8 text-gray-700">

              {/* Introduction */}
              <section
                id="introduction"
                className="scroll-mt-24"
              >

                <h2 className="text-2xl font-bold text-[#174f8e]">
                  Introduction
                </h2>

                <p className="mt-4 text-base leading-8">
                  {blog.introduction || blog.description}
                </p>

              </section>

              {/* Dynamic Sections */}
              {(blog.sections || []).map((section, index) => (
                <section
                  key={`${blog.id}-${index}`}
                  id={createSectionId(section.heading)}
                  className="scroll-mt-24"
                >

                  <h2 className="text-2xl font-bold text-[#174f8e]">
                    {section.heading}
                  </h2>

                  {/* Section Paragraphs */}
                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="mt-4 text-base leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* Section Points */}
                  {section.points?.length > 0 && (
                    <ul className="mt-5 list-disc space-y-3 pl-6 leading-7">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                </section>
              ))}

              {/* Conclusion */}
              <section
                id="conclusion"
                className="scroll-mt-24"
              >

                <h2 className="text-2xl font-bold text-[#174f8e]">
                  Conclusion
                </h2>

                <p className="mt-4 text-base leading-8">
                  {blog.conclusion ||
                    "Keep learning and developing your skills to grow in your professional career."}
                </p>

              </section>

            </div>

            {/* Back Button */}
            <div className="mt-10 border-t border-gray-200 pt-6">

              <Link
                to="/blogs"
                className="inline-flex rounded-lg bg-[#15569b] px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
              >
                ← Back to All Blogs
              </Link>

            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-7">

            {/* Table of Contents */}
            <div className="rounded-xl bg-[#edf5ff] p-6">

              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Table of Contents
              </h3>

              <div className="space-y-4">

                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block border-b border-blue-100 pb-3 text-sm text-[#15569b] transition hover:pl-2 hover:text-orange-500"
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}

              </div>

            </div>

            {/* Contact Card */}
            <div className="rounded-xl bg-[#0b2342] p-6 text-white">

              <h3 className="text-xl font-bold">
                Need Career Guidance?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                Get expert guidance and explore courses that match
                your career goals.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Contact Us
              </Link>

            </div>

          </aside>

        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="mt-20">

            <h2 className="mb-8 text-3xl font-bold text-[#174f8e]">
              Related Blogs
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {relatedBlogs.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-5">

                    <span className="text-xs font-semibold uppercase text-orange-500">
                      {item.category}
                    </span>

                    <h3 className="mt-3 font-bold leading-6 text-[#15569b]">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>

                    <Link
                      to={`/blogs/${item.slug}`}
                      className="mt-5 inline-block text-sm font-semibold text-orange-500 hover:text-blue-700"
                    >
                      Read More →
                    </Link>

                  </div>

                </article>
              ))}

            </div>

          </section>
        )}

      </section>

    </main>
  );
}
