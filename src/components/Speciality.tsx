"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";

const BANNERS = [
  {
    id: "womens-special",
    title: "Women's Special Tours",
    desc: "Safe, curated and fun — tours designed exclusively for the modern woman traveler.",
    tag: "MOST POPULAR",
    tagColor: "#e63946",
    img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "honeymoon",
    title: "Romantic Honeymoon Tours",
    desc: "Celebrate love with handpicked romantic getaways and luxury stays.",
    tag: "TRENDING",
    tagColor: "var(--navy)",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Speciality() {
  const [dest, setDest] = useState<string | null>(null);

  return (
    <section id="speciality" className="py-14 max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-black" style={{ color: "var(--navy)" }}>Speciality Tours</h2>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Tailor-made experiences for every kind of traveler.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BANNERS.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
            style={{ minHeight: 300 }}
            onClick={() => setDest(b.title)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={b.img}
              alt={b.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,39,68,.88) 0%, rgba(15,39,68,.4) 100%)" }} />
            <div className="relative p-8 flex flex-col justify-end" style={{ minHeight: 300 }}>
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 self-start text-white"
                style={{ background: b.tagColor }}>
                {b.tag}
              </span>
              <h3 className="text-2xl font-black text-white mb-2">{b.title}</h3>
              <p className="text-white/80 text-sm mb-6 max-w-sm">{b.desc}</p>
              <button
                className="self-start px-6 py-2.5 rounded-full text-sm font-black transition-all"
                style={{ background: "var(--yellow)", color: "var(--navy)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--yellow-hover)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--yellow)")}
              >
                Explore Tours →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {dest && <BookingModal destination={dest} onClose={() => setDest(null)} />}
    </section>
  );
}
