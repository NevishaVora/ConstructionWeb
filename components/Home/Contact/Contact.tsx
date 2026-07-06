"use client";

import Image from "next/image";

export default function Contact() {
    return (
        <section className="bg-white py-6 sm:py-8 lg:py-10">
            <div className="container mx-auto px-5 lg:px-8">
                {/* Heading */}
                <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
                    <h2 className="text-3xl font-bold text-[#1C1C1E] sm:text-4xl lg:text-[46px]">
                        Contact Our Team
                    </h2>

                    <p className="mt-3 text-base leading-7 text-[#8E8E93] lg:text-[17px]">
                        Get in touch with our experts today to discuss your project and
                        receive professional guidance tailored to your needs.
                    </p>
                </div>

                {/* Contact Card */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[45%_55%] lg:gap-2 lg:px-12">
                    {/* Map */}
                    <div className="overflow-hidden rounded-2xl h-[320px] sm:h-[420px] lg:h-auto lg:min-h-[620px]">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps?q=Dallas,Texas&output=embed"
                            loading="lazy"
                            className="h-full w-full border-0"
                        />
                    </div>

                    {/* Right Card */}
                    <div
                        className="
              flex items-center justify-center
              rounded-[17px]
              border border-[#0000001C]
              bg-white
              p-8
              shadow-[0_6px_24px_rgba(0,0,0,0.08)]
              sm:p-10
              lg:p-12
            "
                    >
                        <div className="max-w-[470px] text-center">
                            <p className="text-lg font-normal text-[#FF6900] lg:text-[20px]">
                                Don't miss out!
                            </p>

                            <h2 className="mt-3 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[30px] lg:leading-[52px]">
                                Call Us Today for Free Estimate
                            </h2>

                            <p className="mt-4 text-base leading-8 text-[#626262] lg:text-[20px] lg:leading-[34px]">
                                Let's start the conversation. Reach out to us today with any
                                questions, comments, or concerns. We're here to assist you every
                                step of the way and we look forward to working with you.
                            </p>

                            {/* Phone */}
                            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]">
                                    <Image
                                        src="/Images/phoneicon.png"
                                        alt="Phone Icon"
                                        width={22}
                                        height={22}
                                    />
                                </div>

                                <span className="text-xl font-medium text-[#666] lg:text-[22px]">
                                    +91 9705779991
                                </span>
                            </div>

                            {/* Button */}
                            <div className="mt-8 flex justify-center">
                                <button
                                    className="
      flex
      w-full
      max-w-[420px]
      items-center
      justify-center
      gap-3
      rounded-[7px]
      bg-[#FF7A00]
      px-5
      py-4
      text-white
      transition
      hover:bg-[#f56b00]
      sm:w-auto
      sm:px-9
    "
                                >
                                    <Image
                                        src="/Images/phoneicon.png"
                                        alt="Phone Icon"
                                        width={22}
                                        height={22}
                                        className="h-5 w-5 flex-shrink-0"
                                    />

                                    <span className="text-center text-[15px] font-medium leading-6 sm:text-base">
                                        Book a Free Consultation
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}