"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[420px] md:h-[480px] lg:h-[550px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/aboutus.png"
        alt="About Us"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-5 md:px-8 lg:px-6">
        <div className="max-w-[760px] text-center">
          <h1
            className="
              text-[34px]
              leading-[42px]
              font-[700]
              text-white
              sm:text-[42px]
              sm:leading-[50px]
              md:text-[50px]
              md:leading-[58px]
              lg:text-[58px]
              lg:leading-[65px]
            "
          >
            Building Trust.
            <br />
            Delivering Excellence.
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-[620px]
              text-[15px]
              leading-[26px]
              font-[400]
              text-white/90
              sm:text-[17px]
              sm:leading-[30px]
              md:text-[18px]
              md:leading-[30px]
              lg:mt-5
              lg:text-[20px]
              lg:leading-[32px]
            "
          >
            We are a dedicated construction company committed to
            delivering high-quality, reliable, and innovative building
            solutions. With years of experience and a passion for excellence.
          </p>
        </div>
      </div>
    </section>
  );
}