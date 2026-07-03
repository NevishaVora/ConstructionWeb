import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const branches = [
    {
        image: "/Images/Anantapur.png",
        city: "Anantapur",
        count: "25+",
    },
    {
        image: "/Images/vijayvada.png",
        city: "Vijayawada",
        count: "42+",
    },
    {
        image: "/Images/Penukonda.png",
        city: "Penukonda",
        count: "22+",
    },
    {
        image: "/Images/Satyasai.png",
        city: "Sri Satya Sai",
        count: "13+",
    },
    {
        image: "/Images/karnool.png",
        city: "Kurnool",
        count: "65+",
    },
    {
        image: "/Images/kadapa.png",
        city: "YSR Kadapa",
        count: "11+",
    },
];

export default function Branches() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-[1200px]">

                {/* Heading */}
                <h2 className="text-center text-[46.42px] font-bold text-[#1C1C1E]">
                    Explore our Branches
                </h2>

                <p className="mt-2 text-center text-[17.44px] text-[#8E8E93]">
                    We are available in 10+ cities
                </p>

                {/* Branch List */}
                <div className="mt-14 flex items-center justify-between">

                    {/* Left Arrow */}
                    <button className="flex h-11 w-11 -translate-y-8 items-center justify-center rounded-full border border-[#E5E5EA] text-[#3A3A3A] transition hover:bg-[#FF6900] hover:text-white">
                        <FiArrowLeft size={18} />
                    </button>

                    {/* Branches */}
                    <div className="flex items-center gap-8">
                        {branches.map((branch) => (
                            <div
                                key={branch.city}
                                className="flex flex-col items-center"
                            >
                                <div className="relative h-[119px] w-[119px] overflow-hidden rounded-full">
                                    <Image
                                        src={branch.image}
                                        alt={branch.city}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="mt-4 text-[18px] font-semibold text-[#1C1C1E]">
                                    {branch.city}
                                </h3>

                                <p className="mt-1 text-[14px] text-[#3A3A3C]">
                                    {branch.count}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button className="flex h-11 w-11 -translate-y-8 items-center justify-center rounded-full bg-[#FF6900] text-white">
                        <FiArrowRight size={18} />
                    </button>

                </div>
            </div>
        </section>
    );
}