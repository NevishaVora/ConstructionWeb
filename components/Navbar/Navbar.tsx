"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-[24px] font-[400] text-black lg:text-[26px]"
          >
            Logo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-black lg:hidden"
          >
            <Menu size={24} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 ${
          mobileMenuOpen
            ? "visible bg-black/40 opacity-100"
            : "invisible bg-black/0 opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 top-0 h-full w-full bg-white transition-transform duration-500 ease-in-out ${
            mobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-5">
            <h2 className="text-[24px] font-[400] text-black lg:text-[26px]">
              Logo
            </h2>

            <button onClick={() => setMobileMenuOpen(false)}>
              <X
                size={22}
                strokeWidth={2.5}
                className="text-black"
              />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-6 pt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-gray-200 py-5 text-xl transition ${
                  pathname === item.href
                    ? "font-medium text-[#FF6900]"
                    : "text-[#3A3A3A] hover:text-[#FF6900]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book a Call */}
          <div className="mt-10 px-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="flex w-full items-center justify-center gap-3 rounded-md bg-[#FF6900] py-4 text-lg font-medium text-white transition hover:bg-[#e85f00]"
            >
              <Image
                src="/Images/phoneicon.png"
                alt="Phone"
                width={20}
                height={20}
              />

              Book a Call
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <RequestProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}