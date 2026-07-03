"use client";

import { X, Mail, Phone, MapPin, Send } from "lucide-react";
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6">
            <div
                className="relative w-full max-w-[780px] rounded-2xl p-12"
                style={{
                    background: "linear-gradient(135deg, #F9A825 0%, #FF6900 100%)",
                }}
            >

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 text-white transition hover:rotate-90"
                >
                    <X size={24} />
                </button>

                <div className="grid gap-8 md:grid-cols-[0.9fr_1.25fr]">

                    {/* Left */}
                    <div className="text-white">

                        <h2 className="text-4xl font-bold leading-tight">
                            Request Project
                            <br />
                            Estimation
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-white/90">
                            Fill in your details below to get a project estimation
                        </p>

                        <div className="mt-10 space-y-4">

                            <div className="flex h-11 items-center gap-3 rounded-lg border border-white/30 bg-white/15 px-4">
                                <Mail size={18} />
                                <span className="text-sm">
                                    SaulDesign@gmail.com
                                </span>
                            </div>

                            <div className="flex h-11 items-center gap-3 rounded-lg border border-white/30 bg-white/15 px-4">
                                <Phone size={18} />
                                <span className="text-sm">
                                    +123 456 789
                                </span>
                            </div>

                            <div className="flex h-11 items-center gap-3 rounded-lg border border-white/30 bg-white/15 px-4">
                                <MapPin size={18} />
                                <span className="text-sm">
                                    123 Street 456 House
                                </span>
                            </div>

                        </div>

                        <div className="mt-10 flex items-center gap-5 text-lg">

                            <FaFacebookF className="cursor-pointer hover:opacity-80" />

                            <BsInstagram className="cursor-pointer hover:opacity-80" />

                            <BsTwitter className="cursor-pointer hover:opacity-80" />

                        </div>

                    </div>

                    {/* Right */}

                    <div className="rounded-2xl border border-white/40 p-6">

                        <form className="space-y-5">

                            <div>

                                <label className="mb-2 block text-[13px] font-medium text-white">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="James Albert"
                                    className="h-10 w-full rounded-lg bg-white px-4 text-sm text-gray-700 outline-none"
                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-[13px] font-medium text-white">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    placeholder="+91234567890"
                                    className="h-10 w-full rounded-lg bg-white px-4 text-sm text-gray-700 outline-none"
                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-[13px] font-medium text-white">
                                    City
                                </label>

                                <input
                                    type="text"
                                    placeholder="Delhi"
                                    className="h-10 w-full rounded-lg bg-white px-4 text-sm text-gray-700 outline-none"
                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-[13px] font-medium text-white">
                                    Project Start
                                </label>

                                <select className="h-10 w-full rounded-lg bg-white px-4 text-sm text-gray-700 outline-none">

                                    <option>Immediately</option>
                                    <option>Within 1 Month</option>
                                    <option>Within 3 Months</option>

                                </select>

                            </div>

                            <button
                                type="submit"
                                className="mt-2 flex h-10 w-[125px] items-center justify-center gap-2 rounded-lg bg-white text-sm font-semibold text-[#ff8a00] transition hover:bg-gray-100"
                            >
                                <Send size={14} />
                                Submit
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}