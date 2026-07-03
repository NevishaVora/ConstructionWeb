"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RequestProjectModal from "../RequestProjectModal";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Service", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="w-full border-t-[3px] border-gray-700 bg-white shadow-sm">
        <div className="mx-auto flex h-[70px] max-w-[1440px] items-center px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-[26px] font-[400] text-black"
          >
            Logo
          </Link>

          {/* Right Section */}
          <div className="ml-auto flex items-center gap-8">
            {/* Menu */}
            <nav className="flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[18px] font-[400] transition ${
                    pathname === item.href
                      ? "text-[#FF6900]"
                      : "text-[#3A3A3A] hover:text-[#FF6900]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Book a Call Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex h-[43px] items-center gap-2 rounded-[5px] bg-[#FF6900] px-6 text-white transition hover:bg-[#e85f00]"
            >
              <Image
                src="/Images/phoneicon.png"
                alt="Phone Icon"
                width={19}
                height={19}
              />

              <span className="text-[15px] font-[500]">
                Book a Call
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Modal */}
      <RequestProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}