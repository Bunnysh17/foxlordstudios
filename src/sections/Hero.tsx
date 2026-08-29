import { motion } from "framer-motion";
import { LogoMark } from "../components/Logo";
import { MaskLines } from "../components/Primitives";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ ready }: { ready: boolean }) {
  const set = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.85, delay, ease: EASE },
  });

  return (
    <section id="top" className="relative z-10 flex min-h-screen flex-col justify-center overflow-hidden px-5 sm:px-8">
      {/* Ambient glow behind FoxLord header */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[380px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1100px] text-center">
        {/* Floating Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: EASE }}
          className="mx-auto w-20 sm:w-24 drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
          style={{ animation: ready ? "floaty 6s ease-in-out infinite" : undefined }}
        >
          <LogoMark className="w-full" />
        </motion.div>

        {/* Eyebrow: Turn Your Vision Into Reality */}
        <motion.div {...set(0.15)} className="mt-9 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
          <p className="eyebrow whitespace-nowrap text-[10px] sm:text-[11px] tracking-[0.45em] text-white/80 font-bold">
            TURN YOUR VISION INTO REALITY
          </p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
        </motion.div>

        {/* FOXLORD STUDIO'S with pure text glow — shine-sweep bar removed */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.15, delay: 0.25, ease: EASE }}
        >
          <h1 className="relative mt-6 text-[clamp(2.4rem,6.8vw,5.2rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em]">
            <span className="relative block bg-gradient-to-b from-white via-white to-[#a8a8b8] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.45)]">
              <MaskLines start={ready} lines={["FOXLORD STUDIO'S"]} base={0.35} />
            </span>
          </h1>
        </motion.div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a
            href="#contact"
            {...set(0.6)}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-black shadow-[0_10px_35px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_50px_rgba(255,255,255,0.4)]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Book a call
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
          <motion.a
            href="#work"
            {...set(0.7)}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:scale-105"
          >
            View our work
          </motion.a>
        </div>
      </div>
    </section>
  );
}
