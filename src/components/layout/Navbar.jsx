"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, UserCheck } from "lucide-react";

const PHONE = "+917000841676";
const WA_LINK = `https://wa.me/917000841676`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const menuItems = [
    { name: "Home", slug: "/" },
    { name: "LIC Plans", slug: "/lic-plans" },
    { name: "Blogs", slug: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div
            aria-hidden
            className="w-10 h-10 rounded-md flex items-center justify-center shadow-sm"
            style={{ background: "#E8B44C" }}
          >
            <span className="text-sm font-bold text-white">AS</span>
          </div>
          <div className="leading-tight">
            <div className="text-lg font-semibold text-[#1A1A1A]">Lic Ambikapur</div>
            <div className="text-xs text-[#6F7787]">Ajay Satnami - Development Officer</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.slug}>
              <span
                className={`px-3 py-1 rounded transition-colors duration-150 ${
                  isActive(item.slug)
                    ? "text-[#1A4D8F] border-b-2 border-[#E8B44C] pb-1"
                    : "text-[#1A1A1A] hover:text-[#1A4D8F]"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}

          {/* CTA Buttons */}
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#1A4D8F] to-[#163f78] text-white font-semibold shadow hover:scale-105 transition-transform duration-200"
          >
            <Phone className="w-4 h-4" /> Call
          </a>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#6F78A0] to-[#596190] text-white font-semibold shadow hover:scale-105 transition-transform duration-200"
          >
            <UserCheck className="w-4 h-4" /> Become Agent
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <a href={`tel:${PHONE}`} className="p-2 rounded-md bg-[#1A4D8F] text-white">
            <Phone className="w-5 h-5" />
          </a>

          <Menu
            className="w-7 h-7 cursor-pointer text-[#1A1A1A]"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] h-screen bg-white flex flex-col px-6 pt-6 animate-slide-in-right">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center"
                style={{ background: "#E8B44C" }}
              >
                <span className="text-xs font-semibold text-white">AS</span>
              </div>
              <div>
                <div className="text-base font-semibold text-[#1A1A1A]">Lic Ambikapur</div>
                <div className="text-xs text-[#6F7787]">Ajay Satnami</div>
              </div>
            </div>
            <X className="w-6 h-6 cursor-pointer text-gray-600" onClick={() => setIsMenuOpen(false)} />
          </div>

          <hr className="border-gray-200 mb-4" />

          <nav className="flex flex-col w-full space-y-2 font-medium text-base flex-1 overflow-y-auto pb-32">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.slug} onClick={() => setIsMenuOpen(false)}>
                <span
                  className={`block px-4 py-3 rounded-md transition-all ${
                    isActive(item.slug)
                      ? "bg-[#F6F8FC] text-[#1A4D8F] font-semibold"
                      : "text-[#1A1A1A] hover:bg-[#F6F8FC] hover:text-[#1A4D8F]"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex justify-center space-x-6 mt-2 mb-6">
            <a aria-label="WhatsApp" href={WA_LINK} target="_blank" className="text-[#1A4D8F]">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          {/* Bottom Fixed Buttons */}
          <div className="fixed left-0 right-0 bottom-0 px-6 pb-6 bg-white/95 border-t border-gray-200">
            <div className="flex gap-3">
              <a
                href={`tel:${PHONE}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#1A4D8F] text-white font-semibold shadow"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" /> Call
              </a>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#E8B44C] text-[#1A1A1A] font-semibold shadow"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>

              <a
                href={`tel:${PHONE}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#6F78A0] text-white font-semibold shadow"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserCheck className="w-4 h-4" /> Become Agent
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.25s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
