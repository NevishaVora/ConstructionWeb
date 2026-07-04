"use client";

import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";

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
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % branches.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? branches.length - 1 : prev - 1
    );
  };

  const visible = [];

  for (let i = 0; i < visibleCards; i++) {
    visible.push(branches[(current + i) % branches.length]);
  }

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-5">

        <h2 className="text-center text-3xl font-bold text-[#1C1C1E] sm:text-4xl lg:text-[46px]">
          Explore our Branches
        </h2>

        <p className="mt-3 text-center text-[#8E8E93]">
          We are available in 10+ cities
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
<button
  onClick={prev}
  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E5EA] bg-white text-black transition hover:bg-[#FF6900] hover:text-white"
>
  <FiArrowLeft size={20} />
</button>

          <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">

            {visible.map((branch) => (
              <div
                key={branch.city}
                className="text-center"
              >
                <div className="relative mx-auto h-[90px] w-[90px] overflow-hidden rounded-full sm:h-[105px] sm:w-[105px] lg:h-[119px] lg:w-[119px]">

                  <Image
                    src={branch.image}
                    alt={branch.city}
                    fill
                    className="object-cover"
                  />

                </div>

                <h3 className="mt-4 font-semibold text-lg text-[#1C1C1E]">
                  {branch.city}
                </h3>

                <p className="text-[#555]">
                  {branch.count}
                </p>
              </div>
            ))}

          </div>

          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6900] text-white hover:bg-[#e85d00] transition"
          >
            <FiArrowRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}