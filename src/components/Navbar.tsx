import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { LogoMark } from "./Logo";
import { NAV_LINKS, SOCIALS } from "../lib/data";
import { useSmooth } from "../lib/SmoothContext";
import { cn } from "../utils/cn";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const scrollTo = useSmooth();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollTo(href), open ? 200 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[90] transition-all duration-500",
          scrolled ? "border-b border-white/10 bg-[#07070c]/80 backdrop-blur-xl" : ""
        )}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8">
          <button onClick={(e) => go(e, "#top")} className="flex items-center gap-3" aria-label="Home">
            <LogoMark className="w-8" />
            <span className="display text-sm tracking-[0.14em] text-white">
              FOXLORD <span className="text-white/50">STUDIO'S</span>
            </span>
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="hidden rounded-full bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] lg:inline-flex"
            >
              Book a call →
            </a>
            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className={cn("h-px w-4 bg-white transition", open && "translate-y-[6px] rotate-45")} />
              <span className={cn("h-px w-4 bg-white transition", open && "opacity-0")} />
              <span className={cn("h-px w-4 bg-white transition", open && "-translate-y-[6px] -rotate-45")} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[85] flex flex-col justify-between bg-[#07070c]/95 px-6 pb-10 pt-28 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className="display text-4xl text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-5">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
