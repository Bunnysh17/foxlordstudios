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

const LEADERS = [
  {
    name: "VIVEK KUMAR",
    role: "Founder & CEO",
    company: "Foxlord Studio",
    desc: "Leading the team, strategy and operations behind Foxlord Studio.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    accent: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.2)",
    focus: ["Channel Strategy", "Editing Direction", "Creator Branding", "Executive Direction"],
  },
  {
    name: "Nirlambh Singh",
    role: "Founder’s Associate",
    company: "Foxlord Studio",
    desc: "Supporting the founder with daily operations, team coordination and overall management.",
    avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    accent: "#a855f7",
    accentGlow: "rgba(168, 85, 247, 0.2)",
    focus: ["Daily Operations", "Team Coordination", "Client Relations", "Workflow Systems"],
  },
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
        {/* Section Header */}
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

        {/* Leadership Profile Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {LEADERS.map((leader, i) => (
            <Reveal key={leader.name} delay={i * 0.12} className="h-full">
              <div
                className="group relative flex flex-col justify-between h-full rounded-3xl border border-white/10 bg-[#090910]/95 p-7 sm:p-9 backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:-translate-y-1"
                style={{
                  boxShadow: `0 20px 60px -20px ${leader.accentGlow}`,
                }}
              >
                <div>
                  {/* Avatar & Badges */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative">
                      <div
                        className="absolute -inset-1 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: leader.accent }}
                      />
                      <img
                        src={leader.avatar}
                        alt={leader.name}
                        className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover ring-2 ring-white/30 shadow-xl bg-[#090910]"
                      />
                      <div
                        className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-white text-[10px] font-black shadow-md ring-2 ring-[#090910]"
                        style={{ backgroundColor: leader.accent }}
                      >
                        ✓
                      </div>
                    </div>

                    {/* Role Pill */}
                    <span
                      className="rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-white border shadow-md"
                      style={{
                        backgroundColor: `${leader.accent}18`,
                        borderColor: `${leader.accent}50`,
                      }}
                    >
                      {leader.role}
                    </span>
                  </div>

                  {/* Name & Company */}
                  <div className="mt-6">
                    <h3 className="display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/50 mt-1">
                      {leader.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#c4c4d4]">
                    {leader.desc}
                  </p>

                  {/* Focus Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {leader.focus.map((f) => (
                      <span
                        key={f}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/70 transition-colors group-hover:border-white/20 group-hover:text-white"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
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
