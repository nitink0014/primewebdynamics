
import { useState } from "react";
import { CalendarDays } from "lucide-react";

import liveClassesData from "../../data/liveClassesData.json";
import AutoPopupForm from "./AutoPopupForm";

function LiveClassesSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="w-full bg-white px-5 pb-10 pt-8 font-sans sm:px-8 lg:px-0">

      <div className="mx-auto w-full max-w-[1450px] lg:w-[88%]">

        {/* Section Heading */}
        <div className="mb-[30px] flex flex-col items-center text-center">

          {/* Live Badge */}
          <div className="flex h-[40px] items-center gap-2 rounded-full border border-[#ffd0c9] bg-[#fff5f3] px-4 text-[14px] font-bold text-[#ff513f] shadow-[0_8px_25px_rgba(255,90,70,0.08)]">
            <span className="relative flex h-[10px] w-[10px] items-center justify-center">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#ff5252]/40" />
              <span className="relative h-[9px] w-[9px] rounded-full bg-[#ff5252]" />
            </span>
            {liveClassesData.badge}
          </div>

          {/* Heading */}
          <h2 className="mt-[18px] text-[36px] font-extrabold leading-[1.15] tracking-[-1.3px] text-[#151b2a] sm:text-[48px] lg:text-[58px]">
            {liveClassesData.title}{" "}
            <span className="text-[#5099fa]">
              {liveClassesData.highlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-[8px] text-[15px] font-medium text-[#647084] sm:text-[17px]">
            {liveClassesData.subtitle}
          </p>

        </div>

        {/* Classes Table */}
        <div className="mx-auto w-full overflow-hidden rounded-[17px] shadow-[0_12px_30px_rgba(15,23,42,0.09)]">

          <div className="w-full overflow-x-auto">

            <table className="w-full min-w-[700px] border-collapse text-left">

              {/* Table Header */}
              <thead>
                <tr className="h-[54px] bg-[#5099fa] text-white">

                  <th className="w-[34%] px-[20px] text-[15px] font-bold">
                    {liveClassesData.columns.course}
                  </th>

                  <th className="w-[28%] px-[20px] text-[15px] font-bold">
                    {liveClassesData.columns.date}
                  </th>

                  <th className="w-[16%] px-[20px] text-[15px] font-bold">
                    {liveClassesData.columns.seats}
                  </th>

                  <th className="w-[22%] px-[20px] text-[15px] font-bold">
                    {liveClassesData.columns.action}
                  </th>

                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {liveClassesData.classes.map((item) => (

                  <tr
                    key={item.id}
                    className="group h-[76px] bg-white transition-all duration-300 hover:bg-[#f7faff] hover:shadow-[0_5px_18px_rgba(15,35,75,0.08)]"
                  >

                    {/* Course */}
                    <td className="px-[20px] text-[15px] font-bold text-[#10213d]">
                      {item.course}
                    </td>

                    {/* Date */}
                    <td className="px-[20px]">
                      <div className="flex items-center gap-2 whitespace-nowrap text-[14px] font-medium text-[#647084]">
                        <CalendarDays
                          size={15}
                          className="shrink-0 text-[#5099fa]"
                        />
                        {item.date}
                      </div>
                    </td>

                    {/* Seats Left */}
                    <td className="px-[20px]">
                      <span
                        className={`inline-flex h-[32px] min-w-[60px] items-center justify-center rounded-full px-3 text-[13px] font-bold ${
                          item.seats > 20
                            ? "bg-[#e5f4ef] text-[#00a76f]"
                            : item.seats > 10
                            ? "bg-[#fff8e7] text-[#e5a500]"
                            : "bg-[#fff1e9] text-[#ff671f]"
                        }`}
                      >
                        {item.seats} left
                      </span>
                    </td>

                    {/* Register Button */}
                    <td className="px-[20px]">
                      <button
                        type="button"
                        onClick={() => setIsPopupOpen(true)}
                        className="flex h-[38px] items-center justify-center rounded-[9px] bg-[#ff821f] px-[16px] text-[13px] font-bold text-white shadow-[0_5px_14px_rgba(255,130,31,0.10)] transition-all duration-300 ease-out hover:scale-105 hover:bg-[#ff6b0b] hover:shadow-[0_8px_20px_rgba(255,110,20,0.28)] active:scale-95"
                      >
                        Register Free
                      </button>
                    </td>

                  </tr>

                ))}
              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* Existing Registration Popup */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

    </section>
  );
}

export default LiveClassesSection;
