import Projects from "@/components/About/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Home/Contact/Contact";
import Process from "@/components/Home/Process/Process";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Image from "next/image";

export default function ConstructionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px]">
        {/* Background Image */}
        <Image
          src="/Images/construction.png"
          alt="Construction"
          fill
          priority
          className="object-cover"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="max-w-[760px] text-center">
            <h1 className="text-[28px] font-[700] leading-[36px] text-white sm:text-[38px] sm:leading-[46px] md:text-[48px] md:leading-[56px] lg:text-[58px] lg:leading-[65px]">
              Professional Construction
              <br />
              Services Built on Quality and Trust
            </h1>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-10 md:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-[28px] font-bold leading-[38px] text-[#000000] sm:text-[34px] sm:leading-[44px] md:mb-8 md:text-[42px] md:leading-[52px] lg:text-4xl lg:leading-[52px]">
              Complete Construction
              <br />
              Solutions For Residential
              <br />
              & Commercial Projects
            </h2>

            <p className="mb-8 text-[15px] leading-7 text-[#00000099] md:mb-10 md:text-base md:leading-8">
              We provide end-to-end construction services from planning
              and design to execution and final delivery. Our experienced
              engineers ensure every project is completed with quality,
              safety and precision.
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                  01
                </div>
                <span className="text-sm text-[#00000099] sm:text-base">
                  Experienced Engineers
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                  02
                </div>
                <span className="text-sm text-[#00000099] sm:text-base">
                  High Quality Materials
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                  03
                </div>
                <span className="text-sm text-[#00000099] sm:text-base">
                  On-Time Project Delivery
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                  04
                </div>
                <span className="text-sm text-[#00000099] sm:text-base">
                  24/7 Support
                </span>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[260px] overflow-hidden rounded-2xl sm:h-[350px] md:h-[420px] lg:h-[500px] lg:rounded-3xl">
            <Image
              src="/Images/completeconstruction.png"
              alt="Complete Construction"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      <Process />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}