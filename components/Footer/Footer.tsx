import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
                <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
                    <div>
                        <h3 className="text-xl font-bold text-white">Logo Here</h3>
                        <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                            Reference site about lorem ipsum, giving information on its origins,
                            as well as a random lipsum generator.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="mt-6 space-y-3 text-sm text-slate-400">
                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            <li>
                                <Link href="/about">About</Link>
                            </li>

                            <li>
                                <Link href="/services">Services</Link>
                            </li>

                            <li>
                                <Link href="/testimonials">Testimonials</Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="transition hover:text-[#FF6900]"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <div className="mt-6 space-y-4 text-sm text-slate-400">
                            <p className="flex items-center gap-2">
                                <span className="inline-flex h-7 w-7 items-center justify-center">
                                    <Image
                                        src="/Images/mailicon.png"
                                        alt="Mail Icon"
                                        width={16}
                                        height={16}
                                        className="object-contain"
                                    />
                                </span>
                                Shaah@gmail.com
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="inline-flex h-7 w-7 items-center justify-center">
                                    <Image
                                        src="/Images/orangephoneicon.png"
                                        alt="Phone Icon"
                                        width={16}
                                        height={16}
                                        className="object-contain"
                                    />
                                </span>
                                +91 0000000000
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="inline-flex h-7 w-7 items-center justify-center">
                                    <Image
                                        src="/Images/locationicon.png"
                                        alt="Location Icon"
                                        width={16}
                                        height={16}
                                        className="object-contain"
                                    />
                                </span>
                                Anantapur
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
                    © 2026 Shadan Infra. All rights reserved. Designed by Dunga Technologies.
                </div>
            </div>
        </footer>
    );
}
