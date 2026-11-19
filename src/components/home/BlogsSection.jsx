
import { ArrowRight, CalendarDays } from "lucide-react";

import blogsData from "../../data/blogsData.json";

function BlogsSection() {
  return (
    <section className="w-full bg-[#f1f4f8] px-5 pb-[50px] pt-[35px] font-sans sm:px-8 lg:px-0">
      <div className="mx-auto w-full max-w-[1600px] lg:w-[92%]">

        {/* Section Heading */}
        <div className="mb-[22px]">
          <div className="flex items-center justify-between gap-4">

            {/* Badge */}
            <div className="flex h-[30px] items-center rounded-[9px] bg-[#dceaff] px-[11px] text-[12px] font-bold text-[#347fff]">
              {blogsData.badge}
            </div>

            {/* View All */}
            <a
              href="/blogs"
              className="flex shrink-0 items-center gap-[6px] text-[14px] font-bold text-[#347fff] transition-colors duration-300 hover:text-[#ff821f]"
            >
              {blogsData.viewAllText}
              <ArrowRight size={17} strokeWidth={2.8} />
            </a>
          </div>

          {/* Title */}
          <h2 className="mt-[14px] text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#151b2a] sm:text-[40px] lg:text-[50px]">
            {blogsData.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-[9px] text-[14px] font-medium text-[#647084] sm:text-[16px]">
            {blogsData.subtitle}
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">

          {blogsData.blogs.map((blog) => (
            <article
              key={blog.id}
              className="flex h-[390px] min-w-0 flex-col overflow-hidden rounded-[13px] border border-[#d0d8e3] bg-[#f9fafc]"
            >

              {/* Image */}
              <div className="relative h-[165px] w-full shrink-0 overflow-hidden bg-[#e2e8f0]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Category Badge */}
                <span className="absolute left-[10px] top-[10px] max-w-[calc(100%-20px)] truncate rounded-full bg-[#5ba2f8] px-[11px] py-[6px] text-[11px] font-bold text-white">
                  {blog.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex min-h-0 flex-1 flex-col px-[13px] pb-[12px] pt-[13px]">

                {/* Category and Date */}
                <div className="flex items-center gap-[6px] text-[12px] font-medium">
                  <span className="truncate text-[#347fff]">
                    {blog.category}
                  </span>

                  <span className="text-[#a0a9b7]">•</span>

                  <span className="flex shrink-0 items-center gap-[4px] text-[#8a96a9]">
                    <CalendarDays size={13} />
                    {blog.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-[10px] line-clamp-2 text-[15px] font-extrabold leading-[1.35] text-[#101b35]">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-[8px] line-clamp-3 text-[12px] font-normal leading-[1.5] text-[#45546a]">
                  {blog.description}
                </p>

                {/* Read More */}
                <a
                  href={blog.link}
                  className="mt-auto flex w-fit items-center gap-[6px] pt-[8px] text-[12px] font-semibold text-[#347fff] transition-colors duration-300 hover:text-[#ff821f]"
                >
                  Read More
                  <ArrowRight size={15} strokeWidth={2.8} />
                </a>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default BlogsSection;
