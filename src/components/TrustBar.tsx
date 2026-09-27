"use client";
import { motion } from "framer-motion";

const STATS = [
  { n: "2.5M+", l: "Happy Travelers" },
  { n: "2500+", l: "Tour Packages" },
  { n: "150+",  l: "Destinations" },
  { n: "25+",   l: "Years of Trust" },
];

export default function TrustBar() {
  return (
    <div style={{ background: "var(--navy)", borderTop: "4px solid var(--yellow)" }}>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {STATS.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <p className="text-3xl font-black text-white">{s.n}</p>
            <p className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: "var(--yellow)" }}>
              {s.l}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
