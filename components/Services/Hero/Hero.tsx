"use client";

import Image from "next/image";

export default function Hero() {
    return (
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
                        Complete Construction
                        <br />
                        Solutions You Can Trust
                    </h1>

                    <p className="mx-auto mt-5 max-w-[620px] text-[20px] font-[400] leading-[32px] text-white/90">
                        We offer a full range of construction services designed to deliver quality, efficiency, and reliability. From planning and design to execution and finishing, our expert team ensures every project meets the highest standards.
                    </p>
                </div>
            </div>
        </section>
    );
}