"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, User, Menu, X, ChevronDown, Search } from "lucide-react";

const NAV = [
  { label: "India", dropdown: true },
  { label: "World", dropdown: true },
  { label: "Speciality Tours", dropdown: true },
  { label: "Customized Holidays", highlight: true },
  { label: "Corporate Travel" },
  { label: "NRI Tours" },
  { label: "Forex", dropdown: true },
  { label: "Gift Cards" },
  { label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>
      {/* ── Top bar ── */}
      <div style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 h-[70px]">
          {/* Hamburger (mobile) */}
          <button className="lg:hidden text-white mr-1" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo — always links home */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/sriram_logo.png"
              alt="SriRam Travels"
              width={180}
              height={55}
              priority
              style={{ height: 55, width: "auto", objectFit: "contain", objectPosition: "left" }}
            />
          </Link>

          {/* Search bar (desktop) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder='Search "Europe"'
              className="w-full pl-9 pr-4 py-2 rounded-full text-sm outline-none border-0"
              style={{ background: "#fff", color: "#111" }}
            />
          </div>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-4">
            {/* Phone */}
            <a
              href="tel:18003135555"
              className="hidden md:flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold text-white"
              style={{ background: "#1a3a5c" }}
            >
              <Phone size={14} style={{ color: "var(--yellow)" }} />
              1800 123 4567
            </a>
            {/* Login */}
            <button className="hidden md:flex flex-col items-center text-white text-xs font-bold gap-0.5">
              <User size={18} />
              Login
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom nav bar (desktop) ── */}
      <div className="hidden lg:block" style={{ background: "var(--navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center h-10">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-0.5 px-3 h-full text-sm font-bold whitespace-nowrap transition-colors"
              style={{ color: item.highlight ? "var(--yellow)" : "rgba(255,255,255,0.9)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
            >
              {item.label}
              {item.dropdown && <ChevronDown size={12} className="opacity-60" />}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mobile slide menu ── */}
      {open && (
        <div className="lg:hidden" style={{ background: "var(--navy)" }}>
          <div className="px-4 pb-4 pt-2 flex flex-col gap-1">
            {/* Mobile search */}
            <div className="relative mb-3">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tours..."
                className="w-full pl-9 pr-4 py-2.5 rounded-full text-sm outline-none"
                style={{ background: "#fff" }}
              />
            </div>
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-sm font-bold border-b"
                style={{
                  color: item.highlight ? "var(--yellow)" : "rgba(255,255,255,0.9)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:18003135555" className="mt-3 flex items-center gap-2 text-white text-sm font-bold">
              <Phone size={14} style={{ color: "var(--yellow)" }} />
              1800-313-5555 (Toll Free)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
