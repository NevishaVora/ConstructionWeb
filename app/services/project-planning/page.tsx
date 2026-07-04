import Projects from "@/components/About/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Home/Contact/Contact";
import Process from "@/components/Home/Process/Process";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Image from "next/image";

export default function ProjectPlanningPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px]">
                {/* Background Image */}
                <Image
                    src="/Images/project.png"
                    alt="interior"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Content */}
                <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-4 sm:px-6 md:px-8">
                    <div className="max-w-[760px] text-center">
                        <h1 className="text-[28px] font-[700] leading-[36px] text-white sm:text-[40px] sm:leading-[48px] md:text-[50px] md:leading-[58px] lg:text-[58px] lg:leading-[65px]">
                            Smart Planning for
                            <br />
                            Stronger Project Execution
                        </h1>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="bg-white py-10 md:py-14 lg:py-16">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div>
                        <h2 className="mb-6 text-[28px] font-bold leading-[36px] text-[#000000] sm:text-[34px] sm:leading-[44px] md:mb-8 md:text-[40px] md:leading-[50px] lg:text-4xl lg:leading-[52px]">
                            Complete Project
                            <br />
                            Planning Solutions
                            <br />
                            Tailored to Your Vision
                        </h2>

                        <p className="mb-8 text-[15px] leading-7 text-[#00000099] sm:text-base sm:leading-8 md:mb-10">
                            We provide end-to-end project planning services, from initial
                            concept and strategy to execution and delivery. Our team ensures
                            every project is organized, efficient, and aligned with your
                            goals. Because we don’t just plan, we deliver success.
                        </p>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded bg-orange-500 font-bold text-white">
                                    01
                                </div>

                                <span className="text-sm text-[#00000099] sm:text-base">
                                    Experienced Engineers
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded bg-orange-500 font-bold text-white">
                                    02
                                </div>

                                <span className="text-sm text-[#00000099] sm:text-base">
                                    High Quality Materials
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded bg-orange-500 font-bold text-white">
                                    03
                                </div>

                                <span className="text-sm text-[#00000099] sm:text-base">
                                    On-Time Project Delivery
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded bg-orange-500 font-bold text-white">
                                    04
                                </div>

                                <span className="text-sm text-[#00000099] sm:text-base">
                                    24/7 Support
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[380px] md:h-[450px] lg:h-[500px] lg:rounded-3xl">
                        <Image
                            src="/Images/completeproject.png"
                            alt="Complete Project Planning"
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