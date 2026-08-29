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
      {/* soft white glow behind the headline */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[340px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-[110px]" />

      <div className="relative mx-auto w-full max-w-[1100px] text-center">
        {/* floating logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: EASE }}
          className="mx-auto w-20 sm:w-24"
          style={{ animation: ready ? "floaty 6s ease-in-out infinite" : undefined }}
        >
          <LogoMark className="w-full" />
        </motion.div>

        {/* eyebrow with side lines */}
        <motion.div {...set(0.15)} className="mt-9 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
          <p className="eyebrow whitespace-nowrap text-[10px] tracking-[0.45em] text-white/70">
            CREATIVE STUDIO FOR YOUTUBERS
          </p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
        </motion.div>

        {/* clean premium wordmark — gradient fill, soft glow, light sweep */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.15, delay: 0.25, ease: EASE }}
        >
          <h1 className="relative mt-6 text-[clamp(2.2rem,6.2vw,4.7rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em]">
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.09] blur-[70px]"
              aria-hidden
            />
            <span className="relative block bg-gradient-to-b from-white via-white to-[#8f8f9c] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)]">
              <MaskLines start={ready} lines={["FOXLORD STUDIO'S"]} base={0.35} />
            </span>
            <span
              className="shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-soft-light"
              aria-hidden
            />
          </h1>
        </motion.div>

        <motion.p
          {...set(0.75)}
          className="display mt-7 text-[clamp(0.8rem,1.8vw,1.25rem)] font-semibold uppercase tracking-[0.28em] text-white/85"
        >
          We turn creators into brands.
        </motion.p>

        <motion.p {...set(0.9)} className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#a0a0ac] font-medium">
          YouTube management, high-end cinematic editing and custom growth systems — built so your content
          is impossible to ignore.
        </motion.p>

        {/* CTAs */}
        <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a
            href="#contact"
            {...set(1.05)}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-black shadow-[0_10px_35px_rgba(255,255,255,0.18)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_50px_rgba(255,255,255,0.3)]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Book a call
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
          <motion.a
            href="#work"
            {...set(1.15)}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:scale-105"
          >
            View our work
          </motion.a>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">Scroll</span>
        <span
          className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent"
          style={{ animation: "pulse-soft 2s ease-in-out infinite" }}
        />
      </motion.div>
    </section>
  );
}
