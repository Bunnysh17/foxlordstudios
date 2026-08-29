import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { LogoMark } from "../components/Logo";
import { MaskReveal } from "../components/Primitives";
import { useSmooth } from "../lib/SmoothContext";
import { BRAND } from "../lib/data";

export function FinalCTA() {
  const scrollTo = useSmooth();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative z-10 overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 w-[70vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-10">
        <LogoMark className="w-full" />
      </div>

      {/* Heading */}
      <p className="eyebrow text-center">Let's talk</p>
      <h2 className="display mx-auto mt-6 max-w-4xl text-center text-[clamp(2rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] text-white">
        <MaskReveal lines={["Ready to grow", "your channel?"]} />
      </h2>

      {/* Contact Cards Row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${BRAND.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur-md transition-all duration-300 hover:border-[#25d366]/50 hover:bg-[#25d366]/10 hover:shadow-[0_0_40px_rgba(37,211,102,0.15)] hover:-translate-y-1"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366]/15 text-[#25d366] transition-transform duration-300 group-hover:scale-110">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/80 group-hover:text-[#25d366]">
            WhatsApp
          </span>
          <span className="text-[11px] text-white/50 font-medium">{BRAND.phone}</span>
        </a>

        {/* Phone / Call */}
        <a
          href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
          className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur-md transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-400/10 hover:shadow-[0_0_40px_rgba(96,165,250,0.15)] hover:-translate-y-1"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/15 text-blue-400 transition-transform duration-300 group-hover:scale-110">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/80 group-hover:text-blue-400">
            Call Us
          </span>
          <span className="text-[11px] text-white/50 font-medium">{BRAND.phone}</span>
        </a>

        {/* Gmail / Email */}
        <a
          href={`mailto:${BRAND.email}`}
          className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur-md transition-all duration-300 hover:border-red-400/50 hover:bg-red-400/10 hover:shadow-[0_0_40px_rgba(248,113,113,0.15)] hover:-translate-y-1"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-400/15 text-red-400 transition-transform duration-300 group-hover:scale-110">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/80 group-hover:text-red-400">
            Gmail
          </span>
          <span className="text-[11px] text-white/50 font-medium truncate max-w-full">{BRAND.email}</span>
        </a>
      </motion.div>

      {/* Direct Email Form */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-10 max-w-xl"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl">
          <p className="display text-center text-sm font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
            Send us a message directly
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20"
              />
            </div>
            <textarea
              placeholder="Tell us about your channel and goals..."
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20"
            />
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-full bg-white px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-black shadow-[0_12px_45px_rgba(255,255,255,0.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_60px_rgba(255,255,255,0.35)]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              {sent ? "✓ Opening Mail Client..." : "Send Message →"}
            </button>
          </form>
        </div>
      </motion.div>

      {/* View work button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 flex justify-center"
      >
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#work");
          }}
          className="rounded-full border border-white/20 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
        >
          View our work
        </a>
      </motion.div>
    </section>
  );
}
