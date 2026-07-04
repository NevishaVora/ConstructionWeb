import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Construction",
  },
  {
    id: "02",
    title: "Interior Designing",
  },
  {
    id: "03",
    title: "Project Planning",
  },
  {
    id: "04",
    title: "Approvals",
  },
];

export default function Services() {
  return (
    <section className="bg-gradient-to-br from-[#FF8937] to-[#FF6900] py-14 lg:py-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-2">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}
          <div>
            <div className="text-center lg:ml-38 lg:text-left">
              <span className="text-lg font-bold uppercase tracking-[3px] text-white sm:text-xl lg:text-[25px] lg:tracking-[4px]">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="mt-4 text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:mt-3 lg:text-left lg:text-[54px] lg:leading-[64px]">
              We Offer Best Services
            </h2>

            {/* Services */}
            <div className="mt-10 w-full space-y-4 lg:w-[558px]">
              {services.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-[13px] bg-white p-4 shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[#FF6900] font-medium text-white">
                    {item.id}
                  </div>

                  <h3 className="text-lg font-medium text-[#191825] sm:text-xl lg:text-[23px]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-10 flex justify-center lg:ml-16 lg:justify-start">
              <button className="flex w-full max-w-md items-center justify-center gap-3 rounded-[9px] bg-white px-6 py-4 text-base font-medium text-[#FF6900] transition hover:bg-gray-100 sm:w-auto sm:px-8 sm:text-lg lg:text-[28px]">
                <Image
                  src="/Images/orangephoneicon.png"
                  alt="Phone Icon"
                  width={22}
                  height={22}
                />

                <span>Book a Free Consultation</span>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <Image
              src="/Images/constructor.png"
              alt="Construction"
              width={477}
              height={700}
              className="h-auto w-[260px] object-contain sm:w-[340px] md:w-[400px] lg:w-[477px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}