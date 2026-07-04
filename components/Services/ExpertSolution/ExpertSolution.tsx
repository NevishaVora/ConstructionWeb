"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Construction",
        image: "/Images/exp-1.png",
        slug: "/services/construction",
        description:
            "We provide reliable and high-quality construction services for residential, commercial, and industrial projects...",
    },
    {
        title: "Interior Designing",
        image: "/Images/exp-2.png",
        slug: "/services/interior-design",
        description:
            "Our interior designing services are focused on creating modern...",
    },
    {
        title: "Project Planning",
        image: "/Images/exp-3.png",
        slug: "/services/project-planning",
        description:
            "We provide detailed and strategic project planning...",
    },
    {
        title: "Project Analysis",
        image: "/Images/exp-4.png",
        slug: "/services/project-analysis",
        description:
            "We conduct detailed project analysis...",
    },
];

export default function ExpertSolution() {
    return (
        <section className="bg-[#F8F8F8] py-10">
            <div className="mx-auto max-w-[1200px] px-5">
                {/* Heading */}
                <div className="mb-10 text-center sm:mb-12 lg:mb-14">
                    <h2 className="text-[28px] font-bold leading-tight text-[#222] sm:text-[34px] md:text-[38px] lg:text-[42px]">
                        Our Expert Solutions
                    </h2>

                    <p className="mx-auto mt-3 max-w-full px-4 text-[14px] leading-6 text-[#7A7A7A] sm:max-w-[500px] sm:px-0 sm:text-[15px] md:max-w-[560px] md:text-[16px] md:leading-7">
                        We offer a full range of construction services designed to deliver
                        quality, efficiency, and reliability.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex flex-wrap justify-center gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[540px] overflow-hidden rounded-[18px] border border-[#ECECEC] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        >
                            {/* Image */}
                            <div className="relative h-[280px] w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="px-5 py-6 text-center sm:px-6 sm:py-7 lg:px-8 lg:py-8">
                                <h3 className="mb-3 text-[24px] font-bold leading-tight text-[#222] sm:mb-4 sm:text-[28px] lg:text-[34px]">
                                    {service.title}
                                </h3>

                                <p className="mb-6 text-[14px] leading-6 text-[#666] sm:mb-7 sm:text-[15px] sm:leading-7 lg:mb-8">
                                    {service.description}
                                </p>

                                <Link
                                    href={service.slug}
                                    className="inline-block rounded-md bg-[#FF6B00] px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#e65f00] sm:px-7 sm:py-3 lg:px-8 lg:py-3"
                                >
                                    Inquiry Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}