
import React from "react";
import footerData from "../data/footerData.json";

export default function Footer() {
  const { sections, copyright } = footerData;

  return (
    <footer className="bg-[#081c3a] px-6 py-12 font-sans text-white md:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">

          {/* Popular Courses */}
          <div className="min-w-0 lg:col-span-7">
            <h3 className="mb-6 text-lg font-bold text-[#8ad3f8]">
              {sections[0].title}
            </h3>

            <div className="grid grid-cols-2 gap-x-8">
              {sections[0].columns.map((column, index) => (
                <ul key={index} className="min-w-0 space-y-3 text-sm sm:text-[15px]">
                  {column.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.url}
                        className="transition-colors duration-200 hover:text-[#8ad3f8]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="min-w-0 lg:col-span-5">
            <h3 className="mb-6 text-lg font-bold text-[#8ad3f8]">
              {sections[1].title}
            </h3>

            <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-5">
              {sections[1].columns.map((column, index) => (
                <ul key={index} className="min-w-0 space-y-3 text-sm sm:text-[15px]">
                  {column.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.url}
                        className="block break-words transition-colors duration-200 hover:text-[#8ad3f8]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/80">
          {copyright}
        </div>

      </div>
    </footer>
  );
}
