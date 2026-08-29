import { SERVICES } from "../lib/data";
import { Reveal } from "../components/Primitives";

export function Services() {
  return (
    <section id="services" className="relative z-10 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="text-center sm:text-left">
            <h2 className="display text-[clamp(2rem,6vw,4.4rem)] font-extrabold uppercase leading-[0.95] bg-gradient-to-b from-white to-white/45 bg-clip-text text-transparent">
              What we do.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.06}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d11]/80 p-1 transition-all duration-500 hover:border-white/25 hover:-translate-y-1">
                {/* white glow on hover */}
                <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-b from-white/60 to-transparent opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-30" />

                <div className="relative h-full rounded-[22px] bg-[#07070c] overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07070c] via-transparent to-black/10" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                      {s.num}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="display text-xl font-extrabold uppercase tracking-tight text-white transition-all duration-300 group-hover:tracking-[-0.02em] group-hover:[text-shadow:0_0_25px_rgba(255,255,255,0.35)]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#b8b8c8]">{s.desc}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
