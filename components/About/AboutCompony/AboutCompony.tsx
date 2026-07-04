"use client";

import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="bg-white py-8 lg:py-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mb-10 text-center text-[28px] font-bold leading-tight text-[#FF6900] sm:text-[34px] lg:mb-14 lg:text-[38px]">
          Built for Contractors Who Want Scale
        </h2>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-4">
          {/* Left Image */}
          <div className="lg:col-span-5">
            <Image
              src="/Images/about-1.png"
              alt="Construction"
              width={520}
              height={640}
              className="
                h-[340px]
                w-full
                rounded-[30px]
                object-cover
                sm:h-[450px]
                md:h-[520px]
                lg:h-[640px]
                lg:rounded-tl-[133px]
                lg:rounded-bl-[133px]
                lg:rounded-tr-none
                lg:rounded-br-none
              "
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6 lg:col-span-7 lg:gap-4">
            {/* Top */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-4">
              <Image
                src="/Images/about-2.png"
                alt="Construction"
                width={340}
                height={280}
                className="
                  h-[260px]
                  w-full
                  rounded-[20px]
                  object-cover
                  sm:h-[300px]
                  lg:h-[280px]
                  lg:rounded-none
                "
              />

              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-[30px] font-normal text-black lg:mb-5 lg:text-[38px]">
                  About Us
                </h3>

                <p className="text-[18px] leading-8 text-[#626262] lg:text-[25px] lg:leading-[32px]">
                  Our Construction Company has been operating since 2024,
                  using modern digital systems and on-site growth strategies
                  to help companies dominate their local markets.
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-4">
              {/* Big Image */}
              <div className="lg:col-span-3">
                <Image
                  src="/Images/about-4.png"
                  alt="Construction"
                  width={700}
                  height={340}
                  className="
                    h-[300px]
                    w-full
                    rounded-[20px]
                    object-cover
                    sm:h-[360px]
                    lg:h-[340px]
                    lg:rounded-none
                  "
                />
              </div>

              {/* Small Images */}
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                <Image
                  src="/Images/about-3.png"
                  alt="Room"
                  width={180}
                  height={160}
                  className="
                    h-[180px]
                    w-full
                    rounded-[20px]
                    object-cover
                    sm:h-[200px]
                    lg:h-[160px]
                    lg:rounded-[0px]
                    lg:rounded-tr-[40px]
                  "
                />

                <Image
                  src="/Images/about-5.png"
                  alt="Hall"
                  width={180}
                  height={160}
                  className="
                    h-[180px]
                    w-full
                    rounded-[20px]
                    object-cover
                    sm:h-[200px]
                    lg:h-[160px]
                    lg:rounded-[0px]
                    lg:rounded-br-[40px]
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}