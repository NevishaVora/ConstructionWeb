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
      className={`flex min-h-[340px] flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 lg:min-h-[380px] lg:px-10 lg:py-10 ${
        item.featured
          ? "border-[#FF6B00] bg-[#FF6B00] text-white"
          : "border-[#F1F1F6] bg-white text-[#11142D]"
      }`}
    >
      {/* Icon */}
      <div
        className={`mb-8 flex h-14 w-14 items-center justify-center rounded-xl ${
          item.featured ? "bg-white" : "bg-[#FFF1E8]"
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-[26px] font-bold leading-tight lg:text-[32px]">
        {item.title}
      </h3>

      {/* Description */}
      <p
        className={`mt-6 text-[15px] leading-7 ${
          item.featured ? "text-white/90" : "text-[#92929D]"
        }`}
      >
        {item.description}
      </p>
    </div>
  );
}

export default function Process() {
  return (
    <section className="bg-[#FAFAFA] py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-[1220px] px-5 sm:px-6 lg:px-5">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1D2033] sm:text-4xl lg:text-[48px]">
            Our Construction Process
          </h2>

          <p className="mt-3 text-base text-[#A1A1AA] lg:text-[16px]">
            Plan. Build. Track. Move In
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 space-y-5 lg:mt-16">
          {/* First Row */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Card item={steps[0]} />
            <Card item={steps[1]} />
            <Card item={steps[2]} />
          </div>

          {/* Second Row */}
          <div className="flex justify-center">
            <div className="grid w-full gap-5 sm:grid-cols-2 lg:max-w-[820px]">
              <Card item={steps[3]} />
              <Card item={steps[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}