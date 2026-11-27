
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  BookOpen,
  Sparkles,
  X,
  Newspaper,
} from "lucide-react";

import blogsData from "../data/blogsData.json";

const blogs = blogsData.blogs || [];

const categories = [
  "All",
  ...new Set(blogs.map((blog) => blog.category)),
];

/* White Mouse-Following Tilt + Glow Card */
function TiltGlowCard({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.55)",
  ...props
}) {
  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2 || 1;
    const centerY = rect.height / 2 || 1;

    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = ((centerY - y) / centerY) * 4;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-3px)
    `;
  };

  const handleMouseLeave = (event) => {
    const card = event.currentTarget;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  };

  return (
    <div
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--card-glow": glowColor,
        ...props.style,
      }}
      className={`group relative [transform-style:preserve-3d] transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform ${className}`}
    >
      {/* White Mouse-Following Light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `
            radial-gradient(
              220px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(255, 255, 255, 0.65),
              rgba(255, 255, 255, 0.22) 35%,
              transparent 70%
            )
          `,
          filter: "blur(18px)",
        }}
      />

      {/* Soft White Border Light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `
            inset 0 0 18px rgba(255, 255, 255, 0.10),
            0 0 18px rgba(255, 255, 255, 0.12)
          `,
        }}
      />

      <div className="relative z-[1] h-full">
        {children}
      </div>
    </div>
  );
}

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    const searchTerm = search.toLowerCase().trim();

    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.description.toLowerCase().includes(searchTerm) ||
        blog.category.toLowerCase().includes(searchTerm);

      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fc]">
      {/* Hero Banner */}
      <section
        className="relative flex min-h-[310px] items-center justify-center bg-cover bg-center px-5 py-16 text-center sm:min-h-[360px]"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(3,17,40,0.94), rgba(10,48,91,0.82)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800')",
        }}
      >
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[45px] border-white/[0.04]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-blue-100 backdrop-blur-sm">
            <Sparkles size={14} className="text-orange-400" />
            Knowledge & Insights
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our <span className="text-orange-400">Blogs</span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Explore articles, learning resources and insights to help you grow
            your knowledge and develop practical skills.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="mx-auto max-w-[1450px] px-5 py-14 sm:px-8 sm:py-16">
        {/* Section Heading */}
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[2px] text-orange-500">
              Explore Our Articles
            </span>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Latest Articles
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Stay informed with useful knowledge and industry insights.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#1760a4]">
            <BookOpen size={17} />
            {filteredBlogs.length} Articles Found
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Blog Cards */}
          <div className="lg:col-span-9">
            {filteredBlogs.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredBlogs.map((blog, index) => (
                  <TiltGlowCard
                    key={blog.id}
                    className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_5px_20px_rgba(15,35,65,0.035)] hover:border-white/80 hover:shadow-[0_15px_35px_rgba(255,255,255,0.18)]"
                    glowColor="rgba(255, 255, 255, 0.55)"
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-2xl">
                      {/* Blog Image */}
                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="relative block aspect-[16/10] overflow-hidden bg-blue-50"
                      >
                        <img
                          src={blog.image}
                          alt={blog.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#061d38]/50 via-transparent to-transparent" />

                        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#061d38]/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                          {blog.category}
                        </span>
                      </Link>

                      {/* Blog Information */}
                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#1760a4]">
                            Article {String(index + 1).padStart(2, "0")}
                          </span>

                          <Newspaper
                            size={17}
                            className="shrink-0 text-slate-300 transition-colors duration-300 group-hover:text-slate-500"
                          />
                        </div>

                        <h3 className="mt-3 text-lg font-extrabold leading-7 text-slate-900 transition-colors duration-200 group-hover:text-[#1760a4]">
                          {blog.title}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                          {blog.description}
                        </p>

                        <div className="mt-auto border-t border-slate-100 pt-5">
                          <Link
                            to={`/blogs/${blog.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-extrabold text-orange-500 transition-colors duration-200 hover:text-[#1760a4]"
                          >
                            Read Article
                            <ArrowRight
                              size={17}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </TiltGlowCard>
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-white px-5 py-14 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#1760a4]">
                  <Search size={29} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                  No Blogs Found
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-7 text-slate-500">
                  We couldn't find any articles matching your search. Try
                  another keyword or select a different category.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1760a4] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500"
                >
                  <X size={16} />
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-3 lg:sticky lg:top-24">
            {/* Search */}
            <TiltGlowCard
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_20px_rgba(15,35,65,0.035)] hover:border-white/80 hover:shadow-[0_12px_30px_rgba(255,255,255,0.15)]"
              glowColor="rgba(255, 255, 255, 0.45)"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1760a4]">
                  <Search size={20} />
                </div>

                <h3 className="text-lg font-extrabold text-slate-900">
                  Search Articles
                </h3>
              </div>

              <form
                className="mt-5"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-colors focus-within:border-[#2878ce] focus-within:bg-white">
                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search keyword..."
                    aria-label="Search blogs"
                    className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      aria-label="Clear search"
                      className="px-2 text-slate-400 transition-colors hover:text-red-500"
                    >
                      <X size={16} />
                    </button>
                  )}

                  <button
                    type="submit"
                    aria-label="Search blogs"
                    className="flex items-center justify-center bg-[#1760a4] px-4 text-white transition-colors hover:bg-orange-500"
                  >
                    <Search size={19} />
                  </button>
                </div>
              </form>
            </TiltGlowCard>

            {/* Categories */}
            <TiltGlowCard
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_20px_rgba(15,35,65,0.035)] hover:border-white/80 hover:shadow-[0_12px_30px_rgba(255,255,255,0.15)]"
              glowColor="rgba(255, 255, 255, 0.45)"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <BookOpen size={20} />
                </div>

                <h3 className="text-lg font-extrabold text-slate-900">
                  Categories
                </h3>
              </div>

              <div className="mt-4 space-y-1">
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  const categoryCount =
                    category === "All"
                      ? blogs.length
                      : blogs.filter(
                          (blog) => blog.category === category
                        ).length;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={isActive}
                      className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-50 font-extrabold text-[#1760a4]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-[#1760a4]"
                      }`}
                    >
                      <span>{category}</span>

                      <span
                        className={`flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-bold ${
                          isActive
                            ? "bg-[#1760a4] text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {categoryCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </TiltGlowCard>

            {/* Clear Filters */}
            {(search || activeCategory !== "All") && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3.5 text-sm font-bold text-[#1760a4] transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
              >
                <X size={16} />
                Reset All Filters
              </button>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
