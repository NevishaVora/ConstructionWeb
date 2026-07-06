import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#081122] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo */}
          <div>
            <h3 className="text-[24px] font-bold">
              Logo Here
            </h3>

            <p className="mt-4 max-w-[300px] text-[13px] leading-6 text-gray-400">
              Reference site about lorem ipsum, giving information on its
              origins, as well as a random lipsum generator.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:mx-auto">
            <h4 className="text-[18px] font-semibold">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2 text-[13px] text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FF6900] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FF6900] transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-[#FF6900] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-[#FF6900] transition"
                >
                  Testimonials
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FF6900] transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:ml-auto">
            <h4 className="text-[18px] font-semibold">
              Contact Us
            </h4>

            <div className="mt-4 space-y-3 text-[13px] text-gray-400">
              <div className="flex items-center gap-3">
                <Image
                  src="/Images/mailicon.png"
                  alt="Mail"
                  width={16}
                  height={16}
                />

                <span>Shaah@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/Images/orangephoneicon.png"
                  alt="Phone"
                  width={16}
                  height={16}
                />

                <span>+91 9705779991 / +91 9705779992</span>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/Images/locationicon.png"
                  alt="Location"
                  width={16}
                  height={16}
                />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Anantapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6900] transition"
                >
                  Anantapur
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-[12px] text-gray-500">
            © 2026 Shaah Infra. All rights reserved. Designed by Dunga
            Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}