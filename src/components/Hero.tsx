"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Navigation2, Globe2, BedDouble, Plane } from "lucide-react";

const TABS = [
  { id: "packages", label: "Holiday Packages", Icon: Navigation2 },
  { id: "custom",   label: "Customized Holidays", Icon: Globe2 },
  { id: "hotels",   label: "Hotels",  Icon: BedDouble },
  { id: "flights",  label: "Flights", Icon: Plane },
];

const MONTHS = ["Any Month","Oct 2026","Nov 2026","Dec 2026","Jan 2027","Feb 2027","Mar 2027","Apr 2027","May 2027"];

export default function Hero() {
  const [tab, setTab] = useState("packages");
  const [query, setQuery] = useState("");
  const [month, setMonth] = useState("Any Month");

  return (
    <section
      className="relative flex items-center justify-center"
      style={{ minHeight: 560 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506461883276-594c397e438b?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(15,39,68,.7) 0%, rgba(15,39,68,.5) 60%, rgba(15,39,68,.65) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16 flex flex-col items-center gap-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
            Chalo, Bag Bharo,{" "}
            <span style={{ color: "var(--yellow)" }}>Nikal Pado!</span>
          </h1>
          <p className="mt-3 text-lg text-white/85 font-medium drop-shadow">
            2500+ holiday packages to domestic &amp; international destinations.
          </p>
        </motion.div>

        {/* Search card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl bg-white"
        >
          {/* Tabs */}
          <div className="flex" style={{ background: "#f0f0f0", borderBottom: "1px solid #ddd" }}>
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-3 px-1 text-xs sm:text-sm font-bold uppercase tracking-wide transition-all"
                style={{
                  background: tab === id ? "#fff" : "transparent",
                  color: tab === id ? "var(--navy)" : "#666",
                  borderBottom: tab === id ? "3px solid var(--yellow)" : "3px solid transparent",
                }}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="flex flex-col sm:flex-row items-end gap-4 p-5 sm:p-6">
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#888" }}>
                Destination / Package
              </label>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--navy)" }} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Where do you want to go?"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm font-medium outline-none"
                  style={{ borderColor: "#ddd" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--navy)")}
                  onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                />
              </div>
            </div>

            <div className="w-full sm:w-52">
              <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#888" }}>
                Month of Travel
              </label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--navy)" }} />
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm font-medium appearance-none outline-none bg-white"
                  style={{ borderColor: "#ddd" }}
                >
                  {MONTHS.map((m) => <option key={m}>{m}</option>)}
                </select>
              </div>
            </div>

            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-sm font-black uppercase tracking-widest transition-all active:scale-95"
              style={{ background: "var(--yellow)", color: "var(--navy)", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--yellow-hover)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--yellow)")}
            >
              <Search size={16} /> Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
