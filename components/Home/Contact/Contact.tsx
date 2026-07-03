"use client";

import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

export default function Contact() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-[46px] font-bold text-[#1C1C1E]">
                        Contact Our Team
                    </h2>

                    <p className="mt-3 text-[17px] leading-7 text-[#8E8E93]">
                        Get in touch with our experts today to discuss your project and
                        receive professional guidance tailored to your needs.
                    </p>
                </div>

                {/* Contact Card */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-6 mt-8 px-4 md:px-12">

                    {/* Left Map */}
                    <div className="overflow-hidden rounded-2xl h-full min-h-[300px] md:min-h-[620px]">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps?q=Dallas,Texas&output=embed"
                            loading="lazy"
                            className="w-full h-full border-0"
                        />
                    </div>

                    {/* Right Card */}
                    <div className="bg-white rounded-[17px] border border-[#0000001C] shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
                        <div className="max-w-[520px] mx-auto text-center px-6 py-8">

                            <p className="text-[#FF6900] text-[16px] sm:text-[18px] font-medium">
                                Don't miss out!
                            </p>

                            <h2 className="mt-3 text-2xl sm:text-3xl leading-tight font-bold text-[#000000]">
                                Call Us Today for Free Estimate
                            </h2>

                            <p className="mt-3 text-base sm:text-[18px] leading-7 text-[#626262]">
                                Let's start the conversation. Reach out to us today with any
                                questions, comments, or concerns. We're here to assist you every
                                step of the way and we look forward to working with you.
                            </p>

                            {/* Phone */}
                            <div className="flex justify-center items-center gap-4 mt-4">

                                <div className="w-11 h-11 rounded-full bg-[#FF7A00] flex items-center justify-center">
                                    <Image src="/Images/phoneicon.png" alt="Phone Icon" width={20} height={20} />
                                </div>

                                <span className="text-[18px] text-[#666] font-medium">+91 0000000000</span>

                            </div>

                            {/* Button */}
                            <button className="mt-6 h-[50px] px-6 rounded-md bg-[#FF7A00] text-white text-[16px] sm:text-[18px] font-[500] transition hover:bg-[#f56b00]">
                                <span className="flex items-center gap-3 justify-center">
                                    <Image src="/Images/phoneicon.png" alt="Phone Icon" width={18} height={18} />
                                    Book a Free Consultation
                                </span>
                            </button>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}