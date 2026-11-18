
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blog";

const categories = [
  "All",
  "Software Testing",
  "Web Designing",
  "PHP",
  "Machine Learning",
  "CCNA",
  "AutoCAD",
  "Summer Training",
  "Data Analytics",
  "Digital Marketing",
  "Python",
  "Mobile Application Development",
  "Programming",
  "Cloud Computing",
  "Java",
  "DevOps",
];

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Search and category filtering
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Banner */}
      <section
        className="relative flex h-[250px] items-start justify-center bg-cover bg-center px-4 pt-10 md:h-[295px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800')",
        }}
      >
        <h1 className="text-center text-4xl font-bold text-orange-500 md:text-5xl">
          OUR BLOGS
        </h1>
      </section>

      {/* Blog Content */}
      <section className="mx-auto max-w-[1450px] px-5 py-14 md:px-8">

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Blog Cards */}
          <div className="lg:col-span-9">

            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-blue-900">
                Latest Articles
              </h2>

              <p className="text-sm text-gray-500">
                {filteredBlogs.length} articles found
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Blog Image */}
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="block h-[200px] overflow-hidden rounded-xl bg-blue-50"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Blog Information */}
                  <div className="flex flex-1 flex-col px-3 pb-2 pt-5">

                    <span className="mb-3 text-xs font-semibold uppercase tracking-wide text-orange-500">
                      {blog.category}
                    </span>

                    <h3 className="text-base font-bold leading-7 text-blue-800">
                      {blog.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                      {blog.description}
                    </p>

                    {/* Read More */}
                    <div className="mt-auto flex justify-end pt-5">
                      <Link
                        to={`/blogs/${blog.id}`}
                        className="font-semibold text-orange-500 transition hover:text-blue-800"
                      >
                        read more ...
                      </Link>
                    </div>

                  </div>
                </article>
              ))}

            </div>

            {/* No Results */}
            {filteredBlogs.length === 0 && (
              <div className="rounded-xl bg-blue-50 py-16 text-center">

                <h3 className="text-xl font-bold text-gray-800">
                  No blogs found
                </h3>

                <p className="mt-2 text-gray-500">
                  Try another keyword or category.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="mt-5 rounded-lg bg-blue-800 px-5 py-2 text-white transition hover:bg-orange-500"
                >
                  Clear Filters
                </button>

              </div>
            )}

          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:col-span-3">

            {/* Search */}
            <div className="bg-[#edf6ff] p-5">

              <h3 className="border-b border-blue-100 pb-4 text-2xl font-bold text-gray-900">
                Search
              </h3>

              <div className="mt-3 flex">

                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Keyword"
                  className="min-w-0 flex-1 border border-blue-100 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600"
                />

                <button
                  type="button"
                  aria-label="Search blogs"
                  className="bg-blue-800 px-4 text-xl text-white transition hover:bg-orange-500"
                >
                  🔍
                </button>

              </div>
            </div>

            {/* Categories */}
            <div className="bg-[#edf6ff] p-5">

              <h3 className="border-b border-blue-100 pb-4 text-2xl font-bold text-gray-900">
                Category
              </h3>

              <div className="mt-3">

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full border-b border-blue-100 py-3 text-left transition ${
                      activeCategory === category
                        ? "font-bold text-orange-500"
                        : "text-blue-800 hover:pl-2 hover:text-orange-500"
                    }`}
                  >
                    {category}
                  </button>
                ))}

              </div>
            </div>

          </aside>

        </div>
      </section>
    </main>
  );
}
