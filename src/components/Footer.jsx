
import React from "react";
import footerData from "../data/footerData.json";

const SocialIcon = ({ platform }) => {
  const iconClass = "w-6 h-6 fill-current";

  switch (platform) {
    case "facebook":
      return (
        <svg className={iconClass} viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={iconClass} viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={iconClass} viewBox="0 0 448 512">
          <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={iconClass} viewBox="0 0 448 512">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  const { sections, social, copyright } = footerData;

  return (
    <footer className="bg-[#081c3a] px-6 pt-12 pb-12 font-sans text-white md:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <h3 className="mb-5 text-lg font-bold text-[#8ad3f8]">
              {sections[0].title}
            </h3>

            <div className="grid grid-cols-2 gap-x-6">
              {sections[0].columns.map((col, colIdx) => (
                <ul key={colIdx} className="space-y-3 text-[15px]">
                  {col.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} className="text-white transition-colors hover:text-[#8ad3f8]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-5 text-lg font-bold text-[#8ad3f8]">
              {sections[1].title}
            </h3>

            <div className="grid grid-cols-2 gap-x-6">
              {sections[1].columns.map((col, colIdx) => (
                <ul key={colIdx} className="space-y-3 text-[15px]">
                  {col.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} className="block leading-snug text-white transition-colors hover:text-[#8ad3f8]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-lg font-bold text-[#8ad3f8]">
              {sections[2].title}
            </h3>

            <ul className="space-y-3 text-[15px]">
              {sections[2].columns[0].map((item, idx) => (
                <li key={idx}>
                  <a href={item.url} className="text-white transition-colors hover:text-[#8ad3f8]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-lg font-bold text-[#8ad3f8]">
              {social.title}
            </h3>

            <div className="flex items-center gap-4 text-[#f5b800]">
              {social.links.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="transition-opacity hover:opacity-70"
                >
                  <SocialIcon platform={item.platform} />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-white/20 pt-5 text-[15px] text-white">
          {copyright}
        </div>

      </div>
    </footer>
  );
}
