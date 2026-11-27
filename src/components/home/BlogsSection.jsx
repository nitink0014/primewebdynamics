
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import blogsData from "../../data/blogsData.json";

function BlogsSection() {
  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 2.2;
    const rotateX = ((centerY - y) / centerY) * 2.2;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-3px)
    `;
  };

  const handleCardLeave = (event) => {
    event.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f9fc] px-5 py-16 font-sans sm:px-8 lg:py-20">
      {/* Background Accent */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#dceaff]/40 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-[1250px]">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5e5fb] bg-[#eaf3ff] px-4 py-2 text-[12px] font-extrabold tracking-[1.2px] text-[#2878ce]">
              <BookOpen size={15} />
              {blogsData.badge}
            </div>

            <h2 className="mt-5 text-[30px] font-extrabold leading-[1.15] tracking-[-1px] text-[#14243d] sm:text-[40px] lg:text-[46px]">
              {blogsData.title}
            </h2>

            <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-[#68778c] sm:text-[16px]">
              {blogsData.subtitle}
            </p>
          </div>

          <Link
            to="/blogs"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-[#cbdcf0] bg-white px-5 py-3 text-[13px] font-bold text-[#2878ce] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2878ce] hover:bg-[#edf5ff] hover:shadow-[0_8px_20px_rgba(40,120,206,0.08)] focus:outline-none focus:ring-2 focus:ring-[#2878ce] focus:ring-offset-2"
          >
            {blogsData.viewAllText}
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogsData.blogs.map((blog) => (
            <article
              key={blog.id}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              style={{
                "--card-glow": "rgba(40, 120, 206, 0.09)",
              }}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e1e7ef] bg-white shadow-[0_4px_18px_rgba(20,36,61,0.04)] transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform hover:border-[#c5d9ef] hover:shadow-[0_14px_35px_rgba(20,36,61,0.08)]"
            >
              {/* Subtle Cursor Glow */}
              <div
                className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(230px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--card-glow), transparent 75%)",
                }}
              />

              {/* Image */}
              <Link
                to={`/blogs/${blog.slug}`}
                className="relative block aspect-[16/10] w-full overflow-hidden bg-[#e8eef6] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2878ce]"
                aria-label={`Read ${blog.title}`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <span className="absolute left-4 top-4 max-w-[calc(100%-32px)] truncate rounded-md border border-white/20 bg-[#102653]/85 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.8px] text-white backdrop-blur-sm">
                  {blog.category}
                </span>
              </Link>

              {/* Card Content */}
              <div className="relative z-10 flex flex-1 flex-col p-5">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[#7c8ba0]">
                  <span className="text-[#2878ce]">
                    {blog.category}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#b6c0ce]" />

                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} />
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 line-clamp-2 text-[17px] font-extrabold leading-[1.4] tracking-[-0.3px] text-[#172943] transition-colors duration-300 group-hover:text-[#2878ce]">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-[13px] leading-[1.8] text-[#68778c]">
                  {blog.description}
                </p>

                {/* Read More */}
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-[12px] font-extrabold text-[#2878ce] transition-[gap,color,border-color] duration-300 hover:gap-3 hover:border-[#2878ce] hover:text-[#f58227] focus:outline-none focus:ring-2 focus:ring-[#2878ce]"
                >
                  Read Article
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogsSection;
