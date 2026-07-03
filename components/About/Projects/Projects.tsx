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
    <section className="bg-[#F8F8F8] py-10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-[44px] font-bold leading-tight text-[#1F1F1F]">
            Our Past Projects
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-7 text-[#7A7A7A]">
            We offer a full range of construction services designed to deliver
            quality, efficiency, and reliability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[18px]"
            >
              <Image
                src={image}
                alt={`Project ${index + 1}`}
                width={420}
                height={320}
                className="h-[300px] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}