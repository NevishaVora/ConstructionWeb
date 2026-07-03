import Projects from "@/components/About/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Home/Contact/Contact";
import Process from "@/components/Home/Process/Process";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Image from "next/image";

export default function InteriorDesignPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[500px]">
                {/* Background Image */}
                <Image
                    src="/Images/interior.png"
                    alt="interior"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Content */}
                <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-6">
                    <div className="max-w-[760px] text-center">
                        <h1 className="text-[58px] font-[700] leading-[65px] text-white">
                            Designing Interiors That
                            <br />
                            Reflect Your Lifestyle
                        </h1>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-4xl font-bold mb-8 text-[#000000]">
                            Complete Interior Design
                            <br />
                            Solutions Tailored to
                            <br />
                            Your Vision
                        </h2>

                        <p className="text-[#00000099] leading-8 mb-10">
                            We provide end-to-end interior design services, from concept planning and space design to material selection and final execution. Our team ensures every space reflects your style while maintaining functionality, and elegance. Because we don’t just design , We Provide
                        </p>

                        <div className="grid grid-cols-2 gap-6">

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 text-white w-12 h-12 rounded flex items-center justify-center font-bold">
                                    01
                                </div>

                                <span className="text-[#00000099]">Experienced Engineers</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 text-white w-12 h-12 rounded flex items-center justify-center font-bold">
                                    02
                                </div>

                                <span className="text-[#00000099]">High Quality Materials</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 text-white w-12 h-12 rounded flex items-center justify-center font-bold">
                                    03
                                </div>

                                <span className="text-[#00000099]">On-Time Project Delivery</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 text-white w-12 h-12 rounded flex items-center justify-center font-bold">
                                    04
                                </div>

                                <span className="text-[#00000099]">24/7 Support</span>
                            </div>

                        </div>
                    </div>

                    <div className="relative h-[500px] rounded-3xl overflow-hidden">
                        <Image
                            src="/Images/completeinterior.png"
                            alt=""
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