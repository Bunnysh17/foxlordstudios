import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal } from "../components/Primitives";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  { to: 7, suffix: "+", label: "Years Experience" },
  { to: 100, suffix: "+", label: "Happy Clients" },
  { to: 10000, suffix: "+", label: "Projects Delivered" },
  { to: 500, suffix: "%", label: "Peak Growth Scaling" },
];

export function Founder() {
  return (
    <section id="founder" className="relative z-10 px-5 pt-20 pb-8 sm:px-8 sm:pt-24 sm:pb-10">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <Reveal>
          <div className="text-center sm:text-left">
            <h2 className="display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.9] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              The Team.
            </h2>
          </div>
        </Reveal>

        {/* Main Leadership Grid: Vivek (Founder & CEO) & Nirlambh (Founder's Associate) */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 items-stretch">
          {/* Vivek Kumar — Founder & CEO */}
          <Reveal className="h-full">
            <div className="flex flex-col justify-between h-full rounded-3xl border border-white/10 bg-[#090910]/95 p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/25 hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-blue-500/15 border border-blue-500/40 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-blue-400">
                    Founder & CEO
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
                    Foxlord Studio
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                    VIVEK KUMAR
                  </h3>
                  <p className="text-sm font-semibold text-white/60 mt-1 uppercase tracking-wider">
                    Founder & CEO
                  </p>
                </div>

                <div className="h-px w-32 my-6 bg-gradient-to-r from-blue-400/40 to-transparent" />

                <p className="text-base sm:text-lg leading-relaxed text-white font-medium">
                  Leading the team, strategy and operations behind Foxlord Studio.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Nirlambh Singh — Founder's Associate */}
          <Reveal delay={0.12} className="h-full">
            <div className="flex flex-col justify-between h-full rounded-3xl border border-white/10 bg-[#090910]/95 p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/25 hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-purple-500/15 border border-purple-500/40 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-purple-400">
                    Founder’s Associate
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
                    Foxlord Studio
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                    NIRLAMBH SINGH
                  </h3>
                  <p className="text-sm font-semibold text-white/60 mt-1 uppercase tracking-wider">
                    Founder’s Associate
                  </p>
                </div>

                <div className="h-px w-32 my-6 bg-gradient-to-r from-purple-400/40 to-transparent" />

                <p className="text-base sm:text-lg leading-relaxed text-white font-medium">
                  Supporting the founder with daily operations, team coordination and overall management.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats Band: 7+ Years Experience, 100+ Happy Clients, 10,000+ Projects Delivered, 500% Peak Growth */}
        <Reveal>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[#08080c] p-6 sm:p-8 text-center sm:text-left">
                <p className="display text-4xl sm:text-5xl font-extrabold text-white">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] font-semibold leading-relaxed text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Pull Quote */}
        <Reveal>
          <p className="display mx-auto mt-10 max-w-3xl text-center text-[clamp(1.3rem,3.6vw,2.5rem)] font-bold uppercase leading-tight tracking-[-0.02em] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            “Creators Create. Foxlord Directs.”
          </p>
        </Reveal>
      </div>
    </section>
  );
}
