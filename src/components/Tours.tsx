"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";

interface Tour { name: string; tag: string; price: string; nights: string; img: string; }

const INDIA: Tour[] = [
  { name: "Kerala",    tag: "God's Own Country", price: "₹24,990", nights: "5N/6D", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop" },
  { name: "Kashmir",   tag: "Paradise on Earth", price: "₹32,500", nights: "6N/7D", img: "https://images.unsplash.com/photo-1595815771614-ade9d652765d?q=80&w=800&auto=format&fit=crop" },
  { name: "Rajasthan", tag: "Land of Kings",     price: "₹18,990", nights: "4N/5D", img: "https://images.unsplash.com/photo-1570169084408-e83c5c86d7ce?q=80&w=800&auto=format&fit=crop" },
  { name: "Andaman",   tag: "Island Paradise",   price: "₹45,000", nights: "5N/6D", img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop" },
];

const WORLD: Tour[] = [
  { name: "Bali",      tag: "Island of the Gods", price: "₹59,990",  nights: "5N/6D",  img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop" },
  { name: "Dubai",     tag: "City of Gold",       price: "₹52,500",  nights: "4N/5D",  img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop" },
  { name: "Europe",    tag: "Timeless Splendour", price: "₹1,25,000",nights: "10N/11D",img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop" },
  { name: "Singapore", tag: "The Lion City",      price: "₹49,990",  nights: "4N/5D",  img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop" },
];

function Card({ t, onBook }: { t: Tour; onBook: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
      className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md"
      style={{ height: 280 }}
      onClick={onBook}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={t.img}
        alt={t.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,.88) 0%, rgba(0,0,0,.15) 55%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-xl font-black">{t.name}</h3>
        <p className="text-white/70 text-sm">{t.tag}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs font-bold px-2 py-0.5 rounded-full border" style={{ color: "var(--yellow)", borderColor: "var(--yellow)", background: "rgba(255,213,0,.15)" }}>
            {t.nights}
          </span>
          <span className="text-sm font-black" style={{ color: "var(--yellow)" }}>From {t.price}</span>
        </div>
      </div>
      {/* Hover CTA */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg"
          style={{ background: "var(--yellow)", color: "var(--navy)" }}>
          Book Now <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

function Section({ id, title, sub, tours }: { id: string; title: string; sub: string; tours: Tour[] }) {
  const [dest, setDest] = useState<string | null>(null);
  return (
    <section id={id} className="py-14 max-w-7xl mx-auto px-4">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black" style={{ color: "var(--navy)" }}>{title}</h2>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{sub}</p>
        </div>
        <button className="hidden sm:flex items-center gap-1 text-sm font-bold" style={{ color: "var(--navy)" }}>
          View All <ArrowRight size={14} />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tours.map((t) => <Card key={t.name} t={t} onBook={() => setDest(t.name)} />)}
      </div>
      {dest && <BookingModal destination={dest} onClose={() => setDest(null)} />}
    </section>
  );
}

export default function Tours() {
  return (
    <>
      <Section id="india" title="Popular India Tours" sub="Explore the beauty of Incredible India." tours={INDIA} />
      <div style={{ borderTop: "1px solid var(--gray-border)" }} />
      <Section id="world" title="International Tours" sub="Discover the wonders of the world." tours={WORLD} />
    </>
  );
}
