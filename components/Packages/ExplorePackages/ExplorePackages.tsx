"use client";

import { BsFillCheckCircleFill } from "react-icons/bs";

const packages = [
  {
    title: "Basic",
    image: "/Images/basic.png",
    price: "$19",
    oldPrice: "$29",
    features: [
      "Structure",
      "10 inventory locations",
      "24/7 chat support",
      "Localized global selling",
      "POS Lite",
    ],
    active: false,
  },
  {
    title: "Advanced",
    image: "/Images/advanced.png",
    price: "$299",
    oldPrice: "$399",
    features: [
      "Structure",
      "Custom reports and analytics",
      "10 inventory locations",
      "Enhanced 24/7 chat support",
      "Localized global selling",
      "15 additional staff accounts",
      "10x checkout capacity",
      "POS Lite",
    ],
    active: false,
  },
  {
    title: "Plus",
    image: "/Images/plus.png",
    price: "$2,299",
    oldPrice: "$129",
    features: [
      "Competitive rates for high-volume merchants",
      "Custom reports and analytics",
      "Priority 24/7 phone support",
      "Localized global selling",
      "Unlimited staff accounts",
      "Fully customizable checkout with 40x capacity",
      "200 POS Pro",
      "Sell wholesale/B2B",
    ],
    active: true,
  },
];

export default function ExplorePackages() {
  return (
    <section className="bg-[#f8f8f8] py-10 sm:py-12 lg:py-12">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[30px] font-bold leading-tight text-[#1D1D1D] sm:text-[36px] md:text-[42px] lg:text-[46px]">
            Explore Our Packages
          </h2>

          <p className="mt-3 text-[15px] text-gray-500 sm:text-[16px] lg:text-[17px]">
            Find the best home construction packages.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`rounded-[14px] p-6 shadow-lg transition-all duration-300 sm:p-7 lg:p-8 ${
                item.active
                  ? "bg-[#FF6900] text-white"
                  : "bg-white text-[#1D1D1D]"
              }`}
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14 ${
                  item.active ? "bg-white/20" : "bg-[#FF6900]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`object-contain ${
                    index === 0
                      ? "h-7 w-7 sm:h-9 sm:w-9"
                      : "h-7 w-7 translate-x-[1px] sm:h-8 sm:w-8"
                  }`}
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-[30px] font-bold sm:mt-6 sm:text-[34px] lg:mt-7 lg:text-[38px]">
                {item.title}
              </h3>

              {/* Price */}
              <div className="mt-5 flex items-end gap-2">
                <span className="text-[38px] font-bold leading-none sm:text-[44px] lg:text-[50px]">
                  {item.price}
                </span>

                <div className="pb-1">
                  <p
                    className={`text-xs line-through sm:text-sm ${
                      item.active ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {item.oldPrice}
                  </p>

                  <p
                    className={`text-xs sm:text-sm ${
                      item.active ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    /per month
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-3 lg:mt-10 lg:space-y-4">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <BsFillCheckCircleFill
                      className={`mt-1 h-5 w-5 flex-shrink-0 ${
                        item.active ? "text-white" : "text-[#FF6900]"
                      }`}
                    />

                    <span
                      className={`text-[14px] leading-6 sm:text-[15px] ${
                        item.active ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-8 w-full rounded-lg py-3.5 text-[14px] font-semibold transition sm:mt-10 sm:py-4 sm:text-[15px] lg:mt-12 ${
                  item.active
                    ? "bg-white text-[#101828] hover:bg-gray-100"
                    : "bg-[#FF6900] text-white hover:bg-orange-600"
                }`}
              >
                Start 7-day free trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}