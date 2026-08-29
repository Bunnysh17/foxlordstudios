import { PROCESS } from "../lib/data";
import { Reveal } from "../components/Primitives";

export function Process() {
  return (
    <section className="relative z-10 px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="eyebrow">
            <span className="text-white/40">04 /</span> Process
          </p>
          <h2 className="display mt-4 text-[clamp(2rem,6vw,4.4rem)] font-extrabold uppercase leading-[0.95] bg-gradient-to-b from-white to-white/45 bg-clip-text text-transparent">
            How we work
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="display text-3xl font-bold text-white [text-shadow:0_0_25px_rgba(255,255,255,0.35)]">{s.num}</p>
                <h3 className="display mt-4 text-xl uppercase text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-[#b8b8c8]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
