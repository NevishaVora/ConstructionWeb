"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative
        h-[420px]
        sm:h-[480px]
        md:h-[520px]
        lg:h-[550px]
        w-full
        overflow-hidden
      "
    >
      {/* Background Image */}
      <Image
        src="/Images/service.png"
        alt="About Us"
        fill
        priority
        className="object-cover"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-5 sm:px-6 lg:px-8">
        <div className="max-w-[760px] text-center">
          <h1
            className="
              font-[700]
              text-white

              text-[30px]
              leading-[40px]

              sm:text-[38px]
              sm:leading-[48px]

              md:text-[46px]
              md:leading-[56px]

              lg:text-[52px]
              lg:leading-[60px]

              xl:text-[58px]
              xl:leading-[65px]
            "
          >
            Complete Construction
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              {" "}
              Solutions You Can Trust
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-4
              sm:mt-5
              max-w-[620px]
              text-white/90
              font-[400]

              text-[15px]
              leading-[26px]

              sm:text-[16px]
              sm:leading-[28px]

              md:text-[18px]
              md:leading-[30px]

              lg:text-[20px]
              lg:leading-[32px]
            "
          >
            We offer a full range of construction services designed to deliver
            quality, efficiency, and reliability. From planning and design to
            execution and finishing, our expert team ensures every project meets
            the highest standards.
          </p>
        </div>
      </div>
    </section>
  );
}