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
      {val}
      {suffix}
    </span>
  );
}

const VIVEK_SKILLS = [
  "Executive Direction",
  "Channel Strategy",
  "Editing Direction",
  "Creator Branding",
  "Retention Systems",
  "Growth Architecture",
];

const NIRLAMBH_AREAS = [
  ["Daily Operations", "Full workflow execution, publishing & scheduling"],
  ["Team Coordination", "Managing editors, thumbnail artists & GFX team"],
  ["Client Relations", "Direct communication & creator day-to-day sync"],
  ["Overall Management", "Ensuring quality control & milestone delivery"],
];

const STATS = [
  { to: 7, suffix: ".7M+", label: "Combined YouTube Subscribers" },
  { to: 3, suffix: ".2M+", label: "Total Instagram Community" },
  { to: 4, suffix: ".2K+", label: "Videos Directed & Packaged" },
  { to: 500, suffix: "%", label: "Peak Growth Scaling" },
];

export function Founder() {
  return (
    <section id="founder" className="relative z-10 px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">
                <span className="text-white/40">03 /</span> Leadership
              </p>
              <h2 className="display mt-4 text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.9] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                The Team.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#9e9eb0] md:text-right">
              The driving force behind every frame, strategy and upload at FOXLORD STUDIO'S.
            </p>
          </div>
        </Reveal>

        {/* Main Leadership Grid: Vivek (Main) + Nirlambh (Associate) */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Vivek Kumar — Founder & CEO */}
          <Reveal className="lg:col-span-7 h-full">
            <div className="flex flex-col justify-between h-full rounded-3xl border border-white/10 bg-[#090910]/95 p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/25">
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
                    Creative Director &bull; Founder & CEO
                  </p>
                </div>

                <div className="h-px w-32 my-6 bg-gradient-to-r from-white/40 to-transparent" />

                <p className="text-base sm:text-lg leading-relaxed text-white font-medium">
                  Leading the team, strategy and operations behind Foxlord Studio.
                </p>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#b5b5c6]">
                  Vivek treats creator channels like premium media brands — directing the entire visual language,
                  high-retention edits, packaging and weekly growth systems so content becomes impossible to ignore.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {VIVEK_SKILLS.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:border-white/40 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Nirlambh Singh — Founder's Associate */}
          <Reveal delay={0.12} className="lg:col-span-5 h-full">
            <div className="flex flex-col justify-between h-full rounded-3xl border border-white/10 bg-[#090910]/95 p-8 sm:p-9 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/25">
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
                  <h3 className="display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                    NIRLAMBH SINGH
                  </h3>
                  <p className="text-sm font-semibold text-white/60 mt-1 uppercase tracking-wider">
                    Operations &bull; Management
                  </p>
                </div>

                <div className="h-px w-24 my-5 bg-gradient-to-r from-purple-400/40 to-transparent" />

                <p className="text-sm sm:text-base leading-relaxed text-[#dcdce8] font-medium">
                  Supporting the founder with daily operations, team coordination and overall management.
                </p>

                {/* Coordination Area Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {NIRLAMBH_AREAS.map(([title, detail]) => (
                    <div
                      key={title}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
                    >
                      <p className="display text-xs font-bold text-white uppercase tracking-wider">{title}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#8a8a9a]">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats Band */}
        <Reveal>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[#08080c] p-6 sm:p-8">
                <p className="display text-4xl font-extrabold text-white sm:text-5xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] leading-relaxed text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Pull Quote */}
        <Reveal>
          <p className="display mx-auto mt-16 max-w-3xl text-center text-[clamp(1.3rem,3.6vw,2.5rem)] font-bold uppercase leading-tight tracking-[-0.02em] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            “Creators Create. Foxlord Directs.”
          </p>
        </Reveal>
      </div>
    </section>
  );
}
