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
        <section className="bg-[#F8F8F8] py-20">
            <div className="mx-auto max-w-[1200px] px-5">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <h2 className="text-[42px] font-bold text-[#222]">
                        Our Expert Solutions
                    </h2>

                    <p className="mx-auto mt-3 max-w-[560px] text-[16px] leading-7 text-[#7A7A7A]">
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
                            <div className="px-8 py-8 text-center">
                                <h3 className="mb-4 text-[34px] font-bold text-[#222]">
                                    {service.title}
                                </h3>

                                <p className="mb-8 text-[15px] leading-7 text-[#666]">
                                    {service.description}
                                </p>

                                <Link
                                    href={service.slug}
                                    className="inline-block rounded-md bg-[#FF6B00] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#e65f00]"
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