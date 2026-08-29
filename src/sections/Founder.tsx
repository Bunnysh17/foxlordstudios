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

const SKILLS = [
  "Channel Strategy",
  "Editing Direction",
  "Shorts Systems",
  "Thumbnail Packaging",
  "Sound Design",
  "Creator Branding",
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
        {/* header */}
        <Reveal>
          <p className="eyebrow">
            <span className="text-white/40">03 /</span> Founder
          </p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="display text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.9] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              Vivek
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-white/50 md:text-right">
              The person behind every frame, every cut and every upload of FOXLORD STUDIO'S.
            </p>
          </div>
        </Reveal>

        {/* intro + directing panel */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white font-medium sm:text-xl">
                Vivek started <span className="font-black tracking-tight text-white">FOXLORD STUDIO'S</span> to
                treat YouTube like a real brand — not a random upload machine. He directs how a creator
                looks, sounds and grows: the edit, the packaging, the weekly system.
              </p>
              <div className="h-px w-40 bg-gradient-to-r from-white/60 to-transparent" />
              <p className="text-base leading-relaxed text-[#b8b8c4]">
                A <strong className="text-white">Creative Director</strong> is the person who owns the entire
                vision of your channel. Not just “make the video nicer” — he decides the identity, the
                pacing, the thumbnails, the content calendar and how every piece of content should feel on
                the timeline.
              </p>
              <p className="text-base leading-relaxed text-[#b8b8c4]">
                Day to day he handles YouTube management, channel strategy, editing direction, shorts
                systems and creator branding — working with channels like{" "}
                <span className="text-white font-semibold">Gaming With Riya</span> and{" "}
                <span className="text-white font-semibold">The Motor Mouth</span>.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 transition-colors duration-300 hover:border-white/40 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="relative h-full rounded-3xl border border-white/15 bg-[#0d0d11]/90 p-1 transition-colors duration-500 hover:border-white/30">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-white/20 to-transparent blur-sm" />
              <div className="relative h-full rounded-[22px] bg-[#08080c] p-6 sm:p-7">
                <p className="display text-xs uppercase tracking-[0.25em] text-white/70 font-bold">
                  What Vivek directs
                </p>
                <div className="mt-5 grid h-[calc(100%-2.5rem)] grid-cols-2 gap-4">
                  {[
                    ["YouTube Ops", "Full channel systems, analytics & publishing"],
                    ["Cinematic Editing", "High-retention rhythmic cuts + sound"],
                    ["Shorts Systems", "First-second hooks, pacing & formats"],
                    ["Creator Branding", "Look, thumbnails & identity that clicks"],
                  ].map(([t, d]) => (
                    <div
                      key={t}
                      className="flex flex-col justify-center rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <p className="display text-sm font-bold text-white">{t}</p>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-[#8a8a9a]">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* stats band */}
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

        {/* pull quote */}
        <Reveal>
          <p className="display mx-auto mt-16 max-w-3xl text-center text-[clamp(1.3rem,3.6vw,2.5rem)] font-bold uppercase leading-tight tracking-[-0.02em] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            “Editors execute. Vivek directs.”
          </p>
        </Reveal>
      </div>
    </section>
  );
}
