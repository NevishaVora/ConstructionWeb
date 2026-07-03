"use client";

import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1440px] px-8">

        {/* Heading */}
        <h2 className="mb-14 text-center text-[38px] font-[700] leading-tight text-[#FF6900]">
          Built for Contractors Who Want Scale
        </h2>

        {/* Content */}
        <div className="grid grid-cols-12 gap-4">

          {/* Left Large Image */}
          <div className="col-span-5">
            <Image
              src="/Images/about-1.png"
              alt="Construction"
              width={520}
              height={500}
              className="h-[640px] w-full rounded-tl-[133px] rounded-bl-[133px] object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="col-span-7 flex flex-col gap-4">

            {/* Top */}
            <div className="grid grid-cols-2 gap-4">

              <Image
                src="/Images/about-2.png"
                alt="Construction"
                width={340}
                height={280}
                className="h-[280px] w-full object-cover"
              />

              <div className="flex flex-col justify-center">
                <h3 className="mb-5 text-[38px] font-[400] text-[#000000]">
                  About Us
                </h3>

                <p className="text-[25px] leading-[32px] text-[#626262]">
                  Our Construction Company has been operating since
                  2024, using modern digital systems and on-site growth
                  strategies to help companies dominate their local
                  markets.
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="grid grid-cols-4 gap-4">

              <div className="col-span-3">
                <Image
                  src="/Images/about-4.png"
                  alt="Construction"
                  width={700}
                  height={380}
                  className="h-[340px] w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">

                <Image
                  src="/Images/about-3.png"
                  alt="Room"
                  width={180}
                  height={160}
                  className="h-[160px] w-full rounded-tr-[40px] object-cover"
                />

                <Image
                  src="/Images/about-5.png"
                  alt="Hall"
                  width={180}
                  height={160}
                  className="h-[160px] w-full rounded-br-[40px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}