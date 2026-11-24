
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock3,
  UserRound,
  List,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import blogsData from "../data/blogsData.json";

const blogs = blogsData.blogs || [];

const createSectionId = (heading) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#f7f9fc] px-5 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-[#1760a4]">
          <BookOpen size={38} />
        </div>

        <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
          Blog Not Found
        </h1>

        <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
          The article you are looking for may have been moved or does not exist.
        </p>

        <Link
          to="/blogs"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1760a4] px-6 py-3 font-bold text-white transition-colors hover:bg-orange-500"
        >
          <ArrowLeft size={17} />
          Back to Blogs
        </Link>
      </main>
    );
  }

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.id !== blog.id &&
        item.category === blog.category
    )
    .slice(0, 3);

  const sections = [
    { title: "Introduction", id: "introduction" },
    ...(blog.sections || []).map((section) => ({
      title: section.heading,
      id: createSectionId(section.heading),
    })),
    { title: "Conclusion", id: "conclusion" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fc]">

      {/* Article Hero */}
      <section
        className="relative flex min-h-[340px] items-center justify-center bg-cover bg-center px-5 py-16 text-center sm:min-h-[390px]"
        style={{
          backgroundImage: `linear-gradient(110deg, rgba(3,17,40,0.94), rgba(10,48,91,0.85)), url('${blog.image}')`,
        }}
      >
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[45px] border-white/[0.04]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            to="/blogs"
            className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-blue-100 transition-colors hover:text-orange-400"
          >
            <ArrowLeft size={17} />
            Back to All Articles
          </Link>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-300 backdrop-blur-sm">
              <Sparkles size={14} />
              {blog.category}
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            {blog.title}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">
            {blog.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-blue-100 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <UserRound size={16} className="text-orange-300" />
              Prime Webdynamics Team
            </span>

            <span className="inline-flex items-center gap-2">
              <Clock3 size={16} className="text-orange-300" />
              {blog.readTime || "Technology & Learning"}
            </span>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="mx-auto max-w-[1350px] px-5 py-12 sm:px-8 sm:py-16">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
        >
          <Link to="/" className="transition-colors hover:text-orange-500">
            Home
          </Link>

          <span>/</span>

          <Link to="/blogs" className="transition-colors hover:text-orange-500">
            Blogs
          </Link>

          <span>/</span>

          <span className="font-semibold text-[#1760a4]">
            {blog.category}
          </span>
        </nav>

        <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,1fr)_340px]">

          {/* Article */}
          <article className="min-w-0">

            {/* Featured Image */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_8px_25px_rgba(15,35,65,0.05)]">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[250px] w-full rounded-xl object-cover sm:h-[380px] lg:h-[440px]"
              />
            </div>

            {/* Author Details */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf5ff] text-[#1760a4]">
                  <UserRound size={23} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-slate-800">
                    Prime Webdynamics Team
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Blog Author
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-[#1760a4]">
                <Clock3 size={15} />
                {blog.readTime || "Technology & Learning"}
              </span>
            </div>

            {/* Article Body */}
            <div className="mt-9 space-y-10">

              {/* Introduction */}
              <section
                id="introduction"
                className="scroll-mt-28"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                    <BookOpen size={20} />
                  </div>

                  <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    Introduction
                  </h2>
                </div>

                <p className="text-[15px] leading-8 text-slate-600">
                  {blog.introduction || blog.description}
                </p>
              </section>

              {/* Dynamic Sections */}
              {(blog.sections || []).map((section, index) => (
                <section
                  key={`${blog.id}-${index}`}
                  id={createSectionId(section.heading)}
                  className="scroll-mt-28 border-t border-slate-200 pt-9"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-sm font-extrabold text-[#1760a4]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="pt-1 text-xl font-extrabold leading-7 text-slate-900 sm:text-2xl">
                      {section.heading}
                    </h2>
                  </div>

                  {/* Paragraphs */}
                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="mt-5 text-[15px] leading-8 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* Points */}
                  {section.points?.length > 0 && (
                    <ul className="mt-6 space-y-4">
                      {section.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4"
                        >
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1760a4]">
                            <ArrowRight size={12} />
                          </span>

                          <span className="text-sm leading-7 text-slate-600">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Conclusion */}
              <section
                id="conclusion"
                className="scroll-mt-28 border-t border-slate-200 pt-9"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Sparkles size={20} />
                  </div>

                  <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    Conclusion
                  </h2>
                </div>

                <p className="text-[15px] leading-8 text-slate-600">
                  {blog.conclusion ||
                    "Keep learning and developing your skills to grow in your professional career."}
                </p>
              </section>
            </div>

            {/* Back to Blogs */}
            <div className="mt-12 border-t border-slate-200 pt-7">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1760a4] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange-500"
              >
                <ArrowLeft size={17} />
                Back to All Blogs
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">

            {/* Table of Contents */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_5px_20px_rgba(15,35,65,0.04)]">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                  <List size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#1760a4]">
                    Article Navigation
                  </p>

                  <h3 className="mt-1 text-lg font-extrabold text-slate-900">
                    Table of Contents
                  </h3>
                </div>
              </div>

              <nav className="mt-4 space-y-1" aria-label="Table of contents">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-start gap-3 rounded-lg px-3 py-3 text-sm text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-[#1760a4]"
                  >
                    <span className="shrink-0 text-xs font-extrabold text-orange-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-medium leading-5">
                      {section.title}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Card */}
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#102d67] to-[#1b579e] p-6 text-white shadow-[0_8px_25px_rgba(16,45,103,0.12)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                <MessageCircle size={24} />
              </div>

              <h3 className="mt-5 text-xl font-extrabold">
                Need Career Guidance?
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100">
                Get guidance from our team and explore courses that match your learning interests and career goals.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-orange-600"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16 border-t border-slate-200 pt-12 sm:mt-20">
            <div className="mb-8">
              <span className="text-xs font-extrabold uppercase tracking-[2px] text-orange-500">
                Keep Exploring
              </span>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Related Articles
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Discover more articles from the same category.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((item) => (
                <article
                  key={item.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_5px_20px_rgba(15,35,65,0.035)] transition-[border-color,box-shadow] duration-200 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,35,65,0.08)]"
                >
                  <Link
                    to={`/blogs/${item.slug}`}
                    className="block aspect-[16/10] overflow-hidden bg-blue-50"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-500">
                      {item.category}
                    </span>

                    <h3 className="mt-3 text-base font-extrabold leading-7 text-slate-900 transition-colors group-hover:text-[#1760a4]">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <Link
                      to={`/blogs/${item.slug}`}
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-extrabold text-orange-500 transition-colors hover:text-[#1760a4]"
                    >
                      Read Article
                      <ArrowRight size={16} />
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
