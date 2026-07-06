"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sophie Moore",
    date: "18-02-2026",
    image: "/Images/Avtar.jpg",
    text: "They gave me a very competitive bid, and were able to start quickly. The installation was fast and professional and they cleaned up after themselves so there was little evidence they were even there.",
  },
  {
    name: "Sophie Moore",
    date: "12-Dec-2025",
    image: "/Images/Avtar.jpg",
    text: "They gave me a very competitive bid, and were able to start quickly. The installation was fast and professional and they cleaned up after themselves so there was little evidence they were even there.",
  },
  {
    name: "Sophie Moore",
    date: "03-Jan-2026",
    image: "/Images/Avtar.jpg",
    text: "They gave me a very competitive bid, and were able to start quickly. The installation was fast and professional and they cleaned up after themselves so there was little evidence they were even there.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Desktop -> clone first card
  const sliderItems = isDesktop ? [...reviews, reviews[0]] : reviews;

  const next = () => {
    if (isDesktop) {
      if (current < reviews.length) {
        setCurrent((prev) => prev + 1);
      }
    } else {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }
  };

  const prev = () => {
    if (isDesktop) {
      if (current === 0) {
        setTransition(false);
        setCurrent(reviews.length);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTransition(true);
            setCurrent(reviews.length - 1);
          });
        });
      } else {
        setCurrent((prev) => prev - 1);
      }
    } else {
      setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    }
  };

  const handleTransitionEnd = () => {
    if (isDesktop && current === reviews.length) {
      setTransition(false);
      setCurrent(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }
  };

  return (
    <section className="relative mt-10 overflow-hidden">
      <Image
        src="/Images/herobanner.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-20">
          <Image
            src="/Images/google.png"
            alt="Google"
            width={250}
            height={130}
            className="h-auto w-[180px] sm:w-[220px] lg:w-[250px]"
          />

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-5xl lg:text-[56px]">
              Testimonials
            </h2>

            <p className="mt-2 text-white lg:text-[18px]">
              from our local clients
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <p className="text-center text-white lg:text-[18px]">
            — Over 100 Positive{" "}
            <span className="border-b border-white">
              Google Reviews
            </span>{" "}
            —
          </p>
        </div>

        <div className="relative mt-14">

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-gray-100 lg:left-0 lg:h-12 lg:w-12 lg:-translate-x-1/2"
          >
            <FiChevronLeft size={22} />
          </button>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-gray-100 lg:right-0 lg:h-12 lg:w-12 lg:translate-x-1/2"
          >
            <FiChevronRight size={22} />
          </button>

          <div className="mx-auto max-w-[1080px] overflow-hidden">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${
                transition
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${
                  current * (isDesktop ? 50 : 100)
                }%)`,
              }}
            >
              {sliderItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 px-2 lg:w-1/2 lg:px-3"
                >
                  <div className="rounded-[22px] bg-white p-6 shadow-xl sm:p-8">
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={54}
                        height={54}
                        className="rounded-full"
                      />

                      <div>
                        <h4 className="text-lg font-bold text-[#1E293B]">
                          {item.name}
                        </h4>

                        <div className="mt-1 flex items-center gap-2">
                          <div className="flex gap-[2px] text-[#FFC107]">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} size={12} />
                            ))}
                          </div>

                          <span className="text-xs text-[#6F6C90]">
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[#4B5563] sm:text-[15px] sm:leading-8">
                      "{item.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}