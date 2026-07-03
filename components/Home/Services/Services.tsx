import Image from "next/image";
import { FiPhone } from "react-icons/fi";

const services = [
    {
        id: "01",
        title: "Construction",
    },
    {
        id: "02",
        title: "Interior Designing",
    },
    {
        id: "03",
        title: "Project Planning",
    },
    {
        id: "04",
        title: "Approvals",
    },
];

export default function Services() {
    return (
        <section className="bg-gradient-to-br from-[#FF8937] to-[#FF6900] py-8">
            <div className="max-w-[1440px] mx-auto px-2">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}

                    <div>

                        <div className="ml-38">
                            <span className="text-white tracking-[4px] font-bold uppercase text-[25px]">
                                WHY CHOOSE US
                            </span>
                        </div>

                        <h2 className="text-white text-[54px] font-bold leading-[64px] mt-3">
                            We Offer Best Services
                        </h2>

                        <div className="mt-10 space-y-4 w-[558px]">

                            {services.map((item) => (

                                <div
                                    key={item.id}
                                    className="bg-white rounded-[13px] p-4 flex items-center gap-5"
                                >

                                    <div className="w-12 h-12 rounded-[13px] bg-[#FF6900] text-white font-[500] flex items-center justify-center">
                                        {item.id}
                                    </div>

                                    <h3 className="text-[#191825] text-[23px] font-[500]">
                                        {item.title}
                                    </h3>

                                </div>

                            ))}

                        </div>

                        <button
                            className="mt-10 ml-16 flex items-center gap-3 rounded-[9px] bg-white px-8 py-4 text-[28px] font-[500] text-[#FF6900]"
                        >
                            <Image
                                src="/Images/orangephoneicon.png"
                                alt="Phone Icon"
                                width={22}
                                height={22}
                            />

                            <span>Book a Free Consultation</span>
                        </button>

                    </div>

                    {/* RIGHT */}

                    <div className="flex justify-center">

                        <Image
                            src="/Images/constructor.png"
                            alt="Construction"
                            width={477}
                            height={700}
                            className="object-contain"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}