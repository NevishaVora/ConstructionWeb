    "use client";

    import {
        CheckCircle,
        Sparkles,
        Flower2,
        BadgePlus,
    } from "lucide-react";
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
            <section className="bg-[#f8f8f8] py-12">
                <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="text-[46px] font-bold text-[#1D1D1D]">
                            Explore Our Packages
                        </h2>

                        <p className="mt-3 text-[17px] text-gray-500">
                            Find the best home construction packages.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {packages.map((item, index) => (
                            <div
                                key={index}
                                className={`rounded-[14px] p-8 shadow-lg ${item.active
                                        ? "bg-[#FF6900] text-white"
                                        : "bg-white text-[#1D1D1D]"
                                    }`}
                            >
                                {/* Icon */}
                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-full ${item.active ? "bg-white/20" : "bg-[#FF6900]"
                                        }`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`object-contain ${index === 0
                                                ? "h-9 w-9"
                                                : index === 1
                                                    ? "h-8 w-8 translate-x-[1px]"
                                                    : "h-8 w-8 translate-x-[1px]"
                                            }`}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="mt-7 text-[38px] font-bold">{item.title}</h3>

                                {/* Price */}
                                <div className="mt-5 flex items-end gap-2">
                                    <span className="text-[50px] font-bold leading-none">
                                        {item.price}
                                    </span>

                                    <div className="pb-1">
                                        <p
                                            className={`text-sm line-through ${item.active ? "text-white/80" : "text-gray-500"
                                                }`}
                                        >
                                            {item.oldPrice}
                                        </p>

                                        <p
                                            className={`text-sm ${item.active ? "text-white/80" : "text-gray-500"
                                                }`}
                                        >
                                            /per month
                                        </p>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="mt-10 space-y-4">
                                    {item.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <BsFillCheckCircleFill
                                                className={`mt-1 h-5 w-5 ${item.active ? "text-white" : "text-[#FF6900]"
                                                    }`}
                                            />

                                            <span
                                                className={`text-[15px] leading-6 ${item.active ? "text-white" : "text-gray-700"
                                                    }`}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button
                                    className={`mt-12 w-full rounded-lg py-4 text-[15px] font-semibold transition ${item.active
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