import successStoriesData from "../../data/successStoriesData.json";

function SuccessStoriesSection() {
  return (
    <section className="w-full bg-[#f1f4f8] px-5 pb-14 pt-8 font-sans sm:px-8 lg:px-0">

      <div className="mx-auto w-full max-w-[1325px] lg:w-[77%] xl:w-[77%]">

        {/* Section Heading */}
        <div className="mb-[32px] flex flex-col items-center text-center">

          {/* Badge */}
          <div className="flex h-[40px] items-center rounded-full border border-[#ffd0c9] bg-[#fff5f3] px-5 text-[14px] font-bold text-[#ff513f] shadow-[0_8px_25px_rgba(255,90,70,0.08)]">
            {successStoriesData.badge}
          </div>

          {/* Heading */}
          <h2 className="mt-[17px] text-[36px] font-extrabold leading-[1.15] tracking-[-1.3px] text-[#151b2a] sm:text-[48px] lg:text-[60px]">
            {successStoriesData.title}{" "}
            <span className="text-[#5099fa]">
              {successStoriesData.highlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-[8px] text-[15px] font-medium text-[#647084] sm:text-[17px]">
            {successStoriesData.subtitle}
          </p>

        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {successStoriesData.students.map((student) => (

            <div
              key={student.id}
              className="flex h-[265px] min-w-0 flex-col rounded-[16px] border border-[#dce4ef] bg-white p-[19px] shadow-[0_8px_22px_rgba(15,35,75,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,35,75,0.12)]"
            >

              {/* Student Details */}
              <div className="flex min-w-0 items-center gap-[11px]">

                {/* Profile Image */}
                <div className="h-[55px] w-[55px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#5099fa]">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name and Role */}
                <div className="min-w-0 flex-1">

                  <h3 className="truncate text-[18px] font-extrabold leading-[1.25] text-[#101b35]">
                    {student.name}
                  </h3>

                  <p className="mt-[3px] truncate text-[14px] font-medium text-[#647084]">
                    {student.role}
                  </p>

                  {/* Small Green Indicator */}
                  <div className="mt-[8px] h-[9px] w-[21px] rounded-full bg-[#e5f8ef]" />

                </div>

              </div>

              {/* Course and Package */}
              <div className="mt-[21px] grid grid-cols-2 items-stretch gap-[11px]">

                {/* Course Box */}
                <div className="flex min-h-[68px] flex-col items-center justify-center rounded-[11px] bg-[#f1f2f4] px-2 py-2 text-center">

                  <span className="text-[12px] font-medium text-[#8a96a9]">
                    Course
                  </span>

                  <h4 className="mt-[5px] text-[18px] font-extrabold leading-[1.12] text-[#101b35]">
                    {student.course}
                  </h4>

                </div>

                {/* Package Box */}
                <div className="flex min-h-[68px] flex-col items-center justify-center rounded-[11px] bg-[#e8f7ed] px-2 py-2 text-center">

                  <span className="text-[12px] font-medium text-[#8a96a9]">
                    Package
                  </span>

                  <h4 className="mt-[5px] text-[19px] font-extrabold leading-[1.15] text-[#00a653]">
                    <span className="mr-1 text-[14px]">↗</span>
                    {student.package}
                  </h4>

                </div>

              </div>

              {/* Company */}
              <p className="mt-[13px] text-center text-[14px] font-medium leading-[1.5] text-[#647084]">
                Placed In{" "}
                <span className="font-bold text-[#347fff]">
                  {student.company}
                </span>
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default SuccessStoriesSection;