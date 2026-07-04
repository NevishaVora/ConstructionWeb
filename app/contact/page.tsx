import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Home/Contact/Contact";
import Image from "next/image";

export default function ContactPage() {
    return (
        <>
            <section className="relative h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[550px] w-full overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/Images/service.png"
                    alt="About Us"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Content */}
                <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-5 sm:px-6 lg:px-8">
                    <div className="max-w-[760px] text-center">
                        <h1 className="text-[32px] font-[700] leading-[40px]
                           sm:text-[42px] sm:leading-[50px]
                           lg:text-[50px] lg:leading-[58px]
                           xl:text-[58px] xl:leading-[65px] text-white">
                            Reach Us Now
                        </h1>

                        <p
                            className="mx-auto mt-4 max-w-[620px]
                           text-[15px] leading-[26px]
                           sm:mt-5 sm:text-[17px] sm:leading-[28px]
                           lg:text-[18px] lg:leading-[30px]
                           xl:text-[20px] xl:leading-[32px]
                           text-white/90"
                        >
                            Contact us today to discuss your construction needs. Our team is
                            ready to provide expert guidance, answer your questions, and help
                            bring your project vision to life.
                        </p>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    );
}