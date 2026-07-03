"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[550px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/aboutus.png"
        alt="About Us"
        fill
        priority
        className="object-cover"
      />
      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-6">
        <div className="max-w-[760px] text-center">
          <h1 className="text-[58px] font-[700] leading-[65px] text-white">
            Building Trust.
            <br />
            Delivering Excellence.
          </h1>

          <p className="mx-auto mt-5 max-w-[620px] text-[20px] font-[400] leading-[32px] text-white/90">
            We are a dedicated construction company committed to
            delivering high-quality, reliable, and innovative building
            solutions. With years of experience and a passion for excellence.
          </p>
        </div>
      </div>
    </section>
  );
}