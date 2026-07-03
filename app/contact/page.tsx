import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Home/Contact/Contact";
import Image from "next/image";

export default function ContactPage() {
    return (
        <>
            <section className="relative h-[550px] w-full overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/Images/service.png"
                    alt="About Us"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Content */}
                <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-6">
                    <div className="max-w-[760px] text-center">
                        <h1 className="text-[58px] font-[700] leading-[65px] text-white">
                            Reach Us Now
                        </h1>

                        <p className="mx-auto mt-5 max-w-[620px] text-[20px] font-[400] leading-[32px] text-white/90">
                            Contact us today to discuss your construction needs. Our team is ready to provide expert guidance, answer your questions, and help bring your project vision to life.
                        </p>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    );
}