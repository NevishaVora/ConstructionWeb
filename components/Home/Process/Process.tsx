import Image from "next/image";

type Step = {
    title: string;
    description: string;
    image: string;
    featured: boolean;
};

const steps: Step[] = [
    {
        title: "Connect with Us",
        description:
            "Share your basic details through a quick form. Our team contacts you within 20 minutes for a free technical consultation.",
        image: "/Images/approvedesign.png",
        featured: false,
    },
    {
        title: "Define Your Requirements",
        description:
            "Discuss your plot details, budget, and timeline with our experts. We craft a clear project plan tailored to your goals.",
        image: "/Images/requirement.png",
        featured: true,
    },
    {
        title: "Approve The Designs",
        description:
            "Review floor plans, drawings, and 3D views. Work closely with our architects until every detail is finalized.",
        image: "/Images/approvedesign.png",
        featured: false,
    },
    {
        title: "Track Live Progress",
        description:
            "Track construction in real time via our app with daily photos, quality reports, and payment updates.",
        image: "/Images/tracklive.png",
        featured: false,
    },
    {
        title: "Move In Forward",
        description:
            "Take possession of your fully completed home. Move in with confidence, backed by a 10-year warranty.",
        image: "/Images/moveForward.png",
        featured: true,
    },
];

function Card({ item }: { item: Step }) {
    return (
        <div
            className={`rounded-[11.34px] border-[1.42px]
  ${item.featured
                    ? "bg-[#FF6B00] text-white border-[#FF6B00]"
                    : "bg-white border-[#F1F1F6] text-[#11142D]"
                }
  px-10 pt-10 pb-10 flex flex-col`}
        >
            <div
                className={`p-2 w-[49px] rounded-[11.34px] flex items-center justify-center mb-8
  ${item.featured ? "bg-white" : "bg-[#FF690017]"}`}
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    width={26}
                    height={26}
                    className="object-contain"
                />
            </div>

            <h3 className="text-[30px] font-[700] leading-[40px] whitespace-pre-line">
                {item.title}
            </h3>

            <p
                className={`mt-5 text-[15px] leading-6 ${item.featured ? "text-white/90" : "text-[#92929D]"
                    }`}
            >
                {item.description}
            </p>
        </div>
    );
}

export default function Process() {
    return (
        <section className="bg-[#FAFAFA] py-20">
            <div className="max-w-[1220px] mx-auto px-5">
                {/* Heading */}

                <div className="text-center">
                    <h2 className="text-[48px] font-bold text-[#1D2033]">
                        Our Construction Process
                    </h2>

                    <p className="mt-2 text-[16px] text-[#A1A1AA]">
                        Plan. Build. Track. Move In
                    </p>
                </div>

                {/* Top Row */}

                <div className="grid md:grid-cols-3 gap-5 mt-14">
                    <Card item={steps[0]} />
                    <Card item={steps[1]} />
                    <Card item={steps[2]} />
                </div>

                {/* Bottom Row */}

                <div className="flex justify-center gap-5 mt-5 flex-wrap">
                    <div className="w-full md:w-[380px]">
                        <Card item={steps[3]} />
                    </div>

                    <div className="w-full md:w-[380px]">
                        <Card item={steps[4]} />
                    </div>
                </div>
            </div>
        </section>
    );
}