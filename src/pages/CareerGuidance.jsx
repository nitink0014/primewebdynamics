
import React, { useState } from "react";

const courses = [
  { name: "Python", icon: "🐍" },
  { name: "Digital Marketing", icon: "📊" },
  { name: "Cloud", icon: "☁️" },
  { name: "Cyber Security", icon: "🛡️" },
  { name: "Full Stack", icon: "💻" },
  { name: "SAP", icon: "SAP" },
  { name: "CAD", icon: "CAD" },
  { name: "Networking", icon: "🌐" },
  { name: "Testing", icon: "⚙️" },
  { name: "Designing", icon: "✒️" },
  { name: "Programming Language", icon: "🧩" },
  { name: "Mobile Application", icon: "📱" },
  { name: "IOT & Robotics", icon: "🤖" },
  { name: "Generative AI", icon: "✨" },
  { name: "Others", icon: "OTHER" },
];

export default function CareerGuidance() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const toggleCourse = (name) => {
    setSelectedCourses((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const handleNext = () => {
    if (selectedCourses.length === 0) {
      alert("Please select at least one course");
      return;
    }

    console.log("Selected Courses:", selectedCourses);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Career Guidance",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(
          window.location.href
        );
        alert("Link copied!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error);
      }
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white font-[Arial,sans-serif] text-[#171717]">

      {/* Header */}
      <header className="flex h-[60px] w-full items-start justify-end bg-white px-[5.3%]">

        <button
          onClick={handleShare}
          className="h-[42px] min-w-[85px] rounded-b-[24px] bg-[#1760a4] text-[17px] text-white shadow-[0_4px_0_#f4a05d] transition hover:bg-[#154f87]"
        >
          Share
        </button>

      </header>

      {/* Announcement */}
      <div className="flex h-[47px] items-center justify-center bg-[#1c5e9e] px-3 text-center text-[16px] text-white">
        Your best match is just 2 minutes away!
      </div>

      {/* Main Section */}
      <section className="flex w-full flex-col items-center px-6 pt-11 pb-10 max-md:px-4">

        <h1 className="mb-[40px] text-center text-[29px] font-bold leading-tight text-[#171717] max-md:text-[23px]">
          In Which Course You Are Interested In?
        </h1>

        {/* Course Grid */}
        <div className="grid w-full max-w-[1260px] grid-cols-7 gap-x-[10px] gap-y-7 max-[1200px]:grid-cols-5 max-[950px]:grid-cols-4 max-md:grid-cols-2 max-md:gap-[14px]">

          {courses.map((course, index) => {
            const selected = selectedCourses.includes(course.name);

            return (
              <button
                key={course.name}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleCourse(course.name)}
                className={`
                  flex h-[124px] min-w-0 flex-col
                  items-center justify-center gap-[7px]
                  rounded-[25px] border bg-[#fafafa]
                  px-2 shadow-[0_1px_3px_rgba(0,0,0,0.22)]
                  transition-all duration-200
                  hover:-translate-y-1 hover:shadow-lg
                  max-md:h-[112px]
                  ${
                    selected
                      ? "border-2 border-[#1766ad] bg-[#eaf4ff]"
                      : "border-[#a9c9e6]"
                  }
                  ${
                    index === 14
                      ? "col-span-7 mx-auto w-[172px] max-[1200px]:col-span-5 max-[950px]:col-span-4 max-md:col-span-2"
                      : ""
                  }
                `}
              >

                {/* Course Icon */}
                <span
                  className={`
                    flex h-[49px] w-[54px]
                    items-center justify-center
                    text-center text-[34px] leading-none

                    ${
                      course.name === "SAP"
                        ? "bg-[#0876c9] text-[18px] font-bold italic text-white"
                        : ""
                    }

                    ${
                      course.name === "CAD"
                        ? "bg-[#a90000] text-[20px] text-white"
                        : ""
                    }

                    ${
                      course.name === "Full Stack"
                        ? "bg-[#171717] text-[10px] font-bold text-[#e8c56b]"
                        : ""
                    }

                    ${
                      course.name === "Others"
                        ? "text-[16px] font-extrabold text-[#222]"
                        : ""
                    }

                    ${
                      course.name === "Generative AI"
                        ? "rounded-full bg-[#edf4f8] text-[#4386a9]"
                        : ""
                    }
                  `}
                >
                  {course.icon}
                </span>

                {/* Course Name */}
                <span className="max-w-full text-center text-[14px] font-normal leading-[20px] text-[#0755a2]">
                  {course.name}
                </span>

              </button>
            );
          })}

        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="mt-[110px] h-[56px] w-[min(872px,72vw)] rounded-t-[6px] bg-[#1c5e9e] text-[17px] text-white transition hover:bg-[#154f87] max-[1200px]:mt-20 max-md:mt-12 max-md:w-full max-md:rounded-md"
        >
          Next
        </button>

      </section>

      {/* Floating Contact Buttons */}
      <aside className="fixed right-0 top-[21%] z-10 flex flex-col gap-2 rounded-l-[26px] bg-[#1b5d9c] py-3 pl-3 shadow-xl max-md:top-auto max-md:bottom-5">

        <a
          href="tel:+911234567890"
          aria-label="Call us"
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4289bd] text-2xl text-white"
        >
          ☎
        </a>

        <a
          href="https://wa.me/"
          aria-label="WhatsApp"
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#24d366] text-2xl text-white"
        >
          ◉
        </a>

        <a
          href="mailto:info@example.com"
          aria-label="Email us"
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f28b36] text-2xl text-white"
        >
          ✉
        </a>

      </aside>

    </main>
  );
}
