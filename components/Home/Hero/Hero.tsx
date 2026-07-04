import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden lg:h-[650px]">
      {/* Background Image */}
      <Image
        src="/Images/herobanner.png"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-12 px-5 py-14 sm:px-8 md:px-10 lg:h-[650px] lg:flex-row lg:gap-10 lg:py-0">
        {/* Left Content */}
        <div className="max-w-[560px] text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-4xl lg:text-[46px] lg:leading-[1.05]">
            Construct Your Dream
            <br />
            Home With Our Expert
            <br />
            Services
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-200 sm:text-lg lg:text-[20px]">
            We turn your vision into reality with professional design,
            planning, and construction services tailored to your needs.
            From concept to completion, our expert team ensures quality,
            reliability, and excellence in every detail.
          </p>

          <button className="mt-8 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#FF6900] px-6 text-white transition hover:bg-[#e85f00] sm:w-fit sm:px-8 lg:mt-10 lg:h-[56px]">
            <Image
              src="/Images/phoneicon.png"
              alt="Phone Icon"
              width={26}
              height={26}
            />
            <span className="text-sm font-medium sm:text-base">
              Book a Free Consultation
            </span>
          </button>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-[430px] rounded-[10px] bg-white p-6 shadow-2xl sm:p-8">
          <h2 className="mb-6 text-center text-[24px] font-[500] text-[#191818] sm:text-left">
            Book a Free Consultation
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="h-14 w-full rounded-[10px] border border-[#E5E5EA] px-4 outline-none placeholder:text-[#3A3A3C] focus:border-orange-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="h-14 w-full rounded-[10px] border border-[#E5E5EA] px-4 outline-none placeholder:text-[#3A3A3C] focus:border-orange-500"
            />

            <input
              type="text"
              placeholder="Location"
              className="h-14 w-full rounded-[10px] border border-[#E5E5EA] px-4 outline-none placeholder:text-[#3A3A3C] focus:border-orange-500"
            />

            <button
              type="submit"
              className="mt-3 flex h-[54px] w-full items-center justify-center gap-3 rounded-[10px] bg-[#FF6900] font-bold text-white transition hover:bg-[#e85f00]"
            >
              <Image
                src="/Images/phoneicon.png"
                alt="Phone Icon"
                width={22}
                height={22}
              />

              <span>Get a Free Consultation</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}