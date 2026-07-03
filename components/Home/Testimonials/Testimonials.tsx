import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const reviews = [
    {
        name: "Sophie Moore",
        date: "18-02-2026",
        image: "/Images/sophie.png",
        text: "They gave me a very competitive bid, and were able to start quickly. The installation was fast and professional and they cleaned up after themselves so there was little evidence they were even there.",
    },
    {
        name: "Sophie Moore",
        date: "12-Dec-2025",
        image: "/Images/sophie.png",
        text: "They gave me a very competitive bid, and were able to start quickly. The installation was fast and professional and they cleaned up after themselves so there was little evidence they were even there.",
    },
];

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden mt-10">

            {/* Background */}
            <Image
                src="/Images/herobanner.png"
                alt=""
                fill
                priority
                className="object-cover"
            />


            <div className="relative max-w-[1240px] mx-auto px-6 py-16">

                {/* Top */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">

                    {/* Google Review */}
                    <div className="flex justify-center">

                        <Image
                            src="/Images/google.png"
                            alt="Google Reviews"
                            width={250}
                            height={130}
                            className="object-contain"
                        />

                    </div>

                    {/* Heading */}
                    <div className="text-center lg:text-left">

                        <h2 className="text-white text-[56px] font-bold leading-none">
                            Testimonials
                        </h2>

                        <p className="text-white text-[18px] mt-2 text-center">
                            from our local clients
                        </p>

                    </div>

                </div>

                {/* Google Reviews Text */}

                <div className="flex justify-center mt-8">

                    <p className="text-white text-[18px]">

                        — Over 100 Positive{" "}

                        <span className="border-b border-white pb-[2px]">
                            Google Reviews
                        </span>

                        {" "}—

                    </p>

                </div>

                {/* Reviews */}
<div className="relative mt-14">

    {/* Left Arrow */}
    <button
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.18)] border border-slate-200 transition hover:bg-slate-100"
    >
        <FiChevronLeft size={20} />
    </button>

    {/* Right Arrow */}
    <button
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.18)] border border-slate-200 transition hover:bg-slate-100"
    >
        <FiChevronRight size={20} />
    </button>

    {/* Cards */}
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 max-w-[920px] gap-6">
        {reviews.map((item, index) => (
            <div
                key={index}
                className="mx-auto w-full max-w-[420px] rounded-[22px] bg-white px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={54}
                        height={54}
                        className="rounded-full"
                    />

                    <div>
                        <h4 className="text-[20px] font-bold text-[#1E293B]">
                            {item.name}
                        </h4>

                        <div className="mt-1 items-center gap-3">
                            <div className="flex items-center gap-[2px] text-[#FFC107]">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={12} />
                                ))}
                            </div>

                            <span className="text-[12px] text-[#6F6C90]">
                                {item.date}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Review */}
                <p className="mt-6 text-[15px] leading-8 text-[#4B5563]">
                    “{item.text}”
                </p>
            </div>
        ))}
    </div>

</div>
            </div>
        </section>
    );
}