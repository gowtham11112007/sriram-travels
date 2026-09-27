"use client";
import { useState } from "react";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props { destination?: string; onClose: () => void; }

export default function BookingModal({ destination = "", onClose }: Props) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    destination, travelDate: "", travelers: "2", message: "",
  });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "success" : "error");
  };

  const inp = "w-full px-4 py-2.5 rounded-lg border text-sm font-medium outline-none transition-all";
  const foc = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    (e.target.style.borderColor = "var(--navy)");
  const blr = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    (e.target.style.borderColor = "#ddd");

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
        style={{ background: "rgba(0,0,0,0.6)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4" style={{ background: "var(--navy)" }}>
            <div>
              <h2 className="text-lg font-black text-white">Book Your Holiday</h2>
              {destination && <p className="text-sm" style={{ color: "var(--yellow)" }}>{destination}</p>}
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center py-14 px-6 text-center gap-4">
              <CheckCircle size={64} style={{ color: "#22c55e" }} />
              <h3 className="text-xl font-black" style={{ color: "var(--navy)" }}>Booking Request Sent!</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Our expert will call you within 24 hours. Check your email too!
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 rounded-full text-sm font-bold"
                style={{ background: "var(--yellow)", color: "var(--navy)" }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="p-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Name *</label>
                  <input name="name" required value={form.name} onChange={set} placeholder="Full name"
                    className={inp} style={{ borderColor: "#ddd" }} onFocus={foc} onBlur={blr} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Phone *</label>
                  <input name="phone" type="tel" required value={form.phone} onChange={set} placeholder="+91 98765 43210"
                    className={inp} style={{ borderColor: "#ddd" }} onFocus={foc} onBlur={blr} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Email *</label>
                <input name="email" type="email" required value={form.email} onChange={set} placeholder="you@email.com"
                  className={inp} style={{ borderColor: "#ddd" }} onFocus={foc} onBlur={blr} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Destination</label>
                  <input name="destination" value={form.destination} onChange={set} placeholder="Kerala, Bali…"
                    className={inp} style={{ borderColor: "#ddd" }} onFocus={foc} onBlur={blr} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Travel Date</label>
                  <input name="travelDate" type="date" value={form.travelDate} onChange={set}
                    className={inp} style={{ borderColor: "#ddd" }} onFocus={foc} onBlur={blr} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Travelers</label>
                <select name="travelers" value={form.travelers} onChange={set}
                  className={inp} style={{ borderColor: "#ddd", background: "white" }}
                  onFocus={foc} onBlur={blr}
                >
                  {["1","2","3","4","5","6","7","8+"].map((n) => <option key={n}>{n}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Message</label>
                <textarea name="message" value={form.message} onChange={set} rows={3}
                  placeholder="Budget, preferences, special requests…"
                  className={inp} style={{ borderColor: "#ddd", resize: "none" }}
                  onFocus={foc} onBlur={blr}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600 font-medium">
                  Something went wrong. Please call us at 1800-313-5555.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-70"
                style={{ background: "var(--yellow)", color: "var(--navy)" }}
              >
                {status === "loading"
                  ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  : <><Send size={16} /> Send Booking Request</>}
              </button>

              <p className="text-xs text-center text-gray-400">
                We never spam. Our experts will contact you within 24 hours.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
