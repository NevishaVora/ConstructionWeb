"use client";

import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";

const branches = [
  { image: "/Images/Anantapur.jpg", city: "Anantapur", count: "25+" },
  { image: "/Images/Hindupur.jpg", city: "Hindupur", count: "10+" },
  { image: "/Images/Puttaparthi.jpg", city: "Puttaparthi", count: "10+" },
  { image: "/Images/Penukonda.jpg", city: "Penukonda", count: "22+" },
  { image: "/Images/Kadiri.jpg", city: "Kadiri", count: "10+" },
  { image: "/Images/Guntakal.jpg", city: "Guntakal", count: "10+" },
  { image: "/Images/Kalyandurgam.jpg", city: "Kalyandurgam", count: "10+" },
  { image: "/Images/Rayadurgam.jpg", city: "Rayadurgam", count: "10+" },
  { image: "/Images/Uravakonda.jpg", city: "Uravakonda", count: "10+" },
  { image: "/Images/Tadipatri.jpg", city: "Tadipatri", count: "10+" },
  { image: "/Images/Kurnool.jpg", city: "Kurnool", count: "65+" },
  { image: "/Images/Nandyal.jpg", city: "Nandyal", count: "10+" },
  { image: "/Images/Tirupati.jpg", city: "Tirupati", count: "10+" },
  { image: "/Images/Bangalore.jpg", city: "Bangalore", count: "10+" },
  { image: "/Images/Hyderabad.jpg", city: "Hyderabad", count: "10+" },
];

export default function Branches() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    slidesToScroll: 1,
  });

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-center text-3xl font-bold text-[#1C1C1E] sm:text-4xl lg:text-[46px]">
          Explore our Branches
        </h2>

        <p className="mt-3 text-center text-[#8E8E93]">
          We are available in 10+ cities
        </p>

        <div className="mt-12 flex items-center gap-4">
          {/* Left Arrow - Desktop Only */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="hidden lg:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E5E5EA] bg-white text-black transition hover:bg-[#FF6900] hover:text-white"
          >
            <FiArrowLeft size={20} />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex">
              {branches.map((branch) => (
                <div
                  key={branch.city}
                  className="
                    shrink-0
                    basis-1/2
                    md:basis-1/3
                    lg:basis-1/5
                    px-3
                  "
                >
                  <div className="text-center">
                    <div className="relative mx-auto h-[90px] w-[90px] overflow-hidden rounded-full sm:h-[105px] sm:w-[105px] lg:h-[119px] lg:w-[119px]">
                      <Image
                        src={branch.image}
                        alt={branch.city}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-[#1C1C1E]">
                      {branch.city}
                    </h3>

                    <p className="text-[#555]">{branch.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow - Desktop Only */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="hidden lg:flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF6900] text-white transition hover:bg-[#e85d00]"
          >
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}