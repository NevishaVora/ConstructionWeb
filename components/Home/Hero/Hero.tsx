import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="relative h-[650px] w-full overflow-hidden">

            {/* Background Image */}
            <Image
                src="/Images/herobanner.png"
                alt="Hero"
                fill
                priority
                className="object-cover"
            />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-between px-10">

                {/* Left Content */}
                <div className="max-w-[560px] text-white">

                    <h1 className="text-4xl font-bold leading-[1.05]">
                        Construct Your Dream
                        <br />
                        Home With Our Expert
                        <br />
                        Services
                    </h1>

                    <p className="mt-6 text-[20px] text-gray-200">
                        We turn your vision into reality with professional design,
                        planning, and construction services tailored to your needs.
                        From concept to completion, our expert team ensures quality,
                        reliability, and excellence in every detail.
                    </p>

                    <button className="mt-10 flex h-[56px] items-center gap-3 rounded-[7.56px] bg-[#FF6900] px-8 font-[500] text-white">
                        <Image
                            src="/Images/phoneicon.png"
                            alt="Phone Icon"
                            width={29}
                            height={29}
                        />
                        <span>Book a Free Consultation</span>
                    </button>

                </div>

                {/* Right Form */}
                <div className="w-[430px] rounded-[10px] bg-white p-8 shadow-2xl">

                    <h2 className="mb-6 text-[24px] font-[500] text-[#191818]">
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
                            className="mt-3 flex h-[54px] w-full items-center justify-center gap-3 rounded-[10px] bg-[#FF6900] font-bold text-white"
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