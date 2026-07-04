import Image from "next/image";

const projects = [
  "/Images/pro-1.png",
  "/Images/pro-2.png",
  "/Images/pro-3.png",
  "/Images/pro-4.png",
  "/Images/pro-5.png",
  "/Images/pro-6.png",
  "/Images/pro-7.png",
  "/Images/pro-8.png",
  "/Images/pro-9.png",
];

export default function Projects() {
  return (
    <section className="bg-[#F8F8F8] py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <h2 className="text-[28px] font-bold leading-tight text-[#1F1F1F] sm:text-[36px] lg:text-[44px]">
            Our Past Projects
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-[#7A7A7A] sm:text-[16px]">
            We offer a full range of construction services designed to deliver
            quality, efficiency, and reliability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {projects.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt={`Project ${index + 1}`}
                width={420}
                height={320}
                className="
                  h-[230px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                  sm:h-[260px]
                  lg:h-[300px]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}