"use client";

import { X, Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function RequestProjectModal({
    isOpen,
    onClose,
}: Props) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/60 px-4 py-6">
            <div className="flex min-h-full items-center justify-center">
                <div
                    className="relative w-full max-w-5xl rounded-2xl p-5 sm:p-7 md:p-8 lg:p-10 xl:p-12"
                    style={{
                        background:
                            "linear-gradient(135deg, #F9A825 0%, #FF6900 100%)",
                    }}
                >
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-white transition hover:rotate-90 md:right-5 md:top-5"
                    >
                        <X size={24} />
                    </button>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.25fr]">
                        {/* Left */}
                        <div className="text-white">
                            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                Request Project
                                <br />
                                Estimation
                            </h2>

                            <p className="mt-4 text-sm leading-6 text-white/90 sm:text-base">
                                Fill in your details below to get a project estimation
                            </p>

                            <div className="mt-8 space-y-4 lg:mt-10">
                                <div className="flex min-h-[48px] items-center gap-3 rounded-lg border border-white/30 bg-white/15 px-4">
                                    <Mail size={18} />
                                    <span className="break-all text-sm sm:text-base">
                                        SaulDesign@gmail.com
                                    </span>
                                </div>

                                <div className="flex min-h-[48px] items-center gap-3 rounded-lg border border-white/30 bg-white/15 px-4">
                                    <Phone size={18} />
                                    <span className="text-sm sm:text-base">
                                        +123 456 789
                                    </span>
                                </div>

                                <div className="flex min-h-[48px] items-center gap-3 rounded-lg border border-white/30 bg-white/15 px-4">
                                    <MapPin size={18} />
                                    <span className="text-sm sm:text-base">
                                        123 Street 456 House
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-5 text-xl lg:mt-10">
                                <FaFacebookF className="cursor-pointer transition hover:opacity-80" />
                                <BsInstagram className="cursor-pointer transition hover:opacity-80" />
                                <BsTwitter className="cursor-pointer transition hover:opacity-80" />
                            </div>
                        </div>

                        {/* Right */}
                        <div className="rounded-2xl border border-white/40 bg-white/10 p-5 backdrop-blur-sm sm:p-6 md:p-7">
                            <form className="space-y-5">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-white">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="James Albert"
                                        className="h-11 w-full rounded-lg bg-white px-4 text-sm text-gray-700 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-white">
                                        Phone Number
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="+91 234567890"
                                        className="h-11 w-full rounded-lg bg-white px-4 text-sm text-gray-700 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-white">
                                        City
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Delhi"
                                        className="h-11 w-full rounded-lg bg-white px-4 text-sm text-gray-700 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-white">
                                        Project Start
                                    </label>

                                    <div className="relative">
                                        <select
                                            className="h-11 w-full appearance-none rounded-lg bg-white px-4 pr-12 text-sm text-gray-700 outline-none"
                                        >
                                            <option>Immediately</option>
                                            <option>Within 1 Month</option>
                                            <option>Within 3 Months</option>
                                        </select>

                                        <ChevronDown
                                            size={20}
                                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-white text-sm font-semibold text-[#ff8a00] transition hover:bg-gray-100 sm:w-40"
                                >
                                    <Send size={16} />
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}