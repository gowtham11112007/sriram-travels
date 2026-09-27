"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const SOCIAL = [
  { label: "Facebook",  path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z" },
  { label: "YouTube",   path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
  { label: "X/Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", borderTop: "4px solid var(--yellow)" }}>
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image
              src="/sriram_logo.png"
              alt="SriRam Travels"
              width={160}
              height={52}
              style={{ height: 52, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>
            Award-winning travel agency with 25+ years of experience. Your trusted partner for unforgettable holidays.
          </p>
          <div className="flex gap-3 mt-1">
            {SOCIAL.map(({ label, path }) => (
              <a key={label} href="#" aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,.1)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--yellow)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.1)")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ width: 15, height: 15 }}>
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: "var(--yellow)" }}>Destinations</h4>
          <ul className="flex flex-col gap-2.5">
            {["India Tours","Kerala","Kashmir","Rajasthan","Andaman","Europe","Bali","Dubai","Singapore"].map((d) => (
              <li key={d}>
                <Link href="#" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,.65)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--yellow)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.65)")}
                >{d}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: "var(--yellow)" }}>Company</h4>
          <ul className="flex flex-col gap-2.5">
            {["About Us","Careers","Testimonials","Blog","Corporate Travel","NRI Tours","Privacy Policy","Terms & Conditions"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,.65)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--yellow)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.65)")}
                >{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: "var(--yellow)" }}>Contact Us</h4>
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-3">
              <Phone size={16} style={{ color: "var(--yellow)", marginTop: 2, flexShrink: 0 }} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "rgba(255,255,255,.45)" }}>Toll Free</p>
                <a href="tel:18003135555" className="text-sm font-bold text-white hover:underline">1800-313-5555</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} style={{ color: "var(--yellow)", marginTop: 2, flexShrink: 0 }} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "rgba(255,255,255,.45)" }}>Email</p>
                <a href="mailto:info@sriramtravels.com" className="text-sm font-bold text-white hover:underline">
                  info@sriramtravels.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} style={{ color: "var(--yellow)", marginTop: 2, flexShrink: 0 }} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "rgba(255,255,255,.45)" }}>Office</p>
                <p className="text-sm text-white">Mumbai, Maharashtra, India</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,.4)" }}>
            © {new Date().getFullYear()} SriRam Travels. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,.4)" }}>
            Trusted by 2.5M+ travelers across India.
          </p>
        </div>
      </div>
    </footer>
  );
}
