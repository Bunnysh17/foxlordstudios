import { CHANNELS } from "../lib/data";
import { Reveal } from "../components/Primitives";

export function Work() {
  return (
    <section id="work" className="relative z-10 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">
                <span className="text-white/40">01 /</span> Case Studies
              </p>
              <h2 className="display mt-4 text-[clamp(2.2rem,6.5vw,4.8rem)] font-extrabold uppercase leading-[0.92] bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                Channels We Direct.
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#9e9eb0]">
              Real top-tier creators. Scaled with custom editing language, weekly systems, and brand positioning.
            </p>
          </div>
        </Reveal>

        {/* Side-by-Side Creator Cards (2 columns on desktop) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.12} className="h-full">
              <article
                className="group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-white/10 bg-[#090910]/95 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_20px_80px_rgba(255,255,255,0.05)] hover:-translate-y-1"
                style={{
                  boxShadow: `0 20px 60px -15px ${c.accentGlow}`,
                }}
              >
                {/* Real YouTube Channel Banner */}
                <div className="relative aspect-[3/1] w-full overflow-hidden bg-black/90 border-b border-white/10">
                  <img
                    src={c.banner}
                    alt={`${c.name} official banner`}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-black/20" />
                  
                  {/* Category / Niche pill on banner */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white backdrop-blur-md border border-white/20 shadow-lg"
                      style={{ backgroundColor: `${c.accent}30` }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: c.accent }} />
                      {c.badge}
                    </span>
                  </div>

                  {/* Channel Tag on Right */}
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-white/90 border border-white/15">
                      {c.niche}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="relative -mt-10 px-6 sm:px-8 pb-8 pt-0 flex-1 flex flex-col justify-between">
                  {/* Real Creator Avatar & Basic Details Header */}
                  <div>
                    <div className="flex items-end justify-between gap-4">
                      <div className="relative">
                        <div
                          className="absolute -inset-1 rounded-2xl blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: c.accent }}
                        />
                        <img
                          src={c.avatar}
                          alt={c.creator}
                          className="relative h-22 w-22 sm:h-28 sm:w-28 rounded-2xl object-cover ring-2 ring-white/40 shadow-2xl bg-[#090910]"
                        />
                        {/* Verified badge checkmark */}
                        <div
                          className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-white text-[11px] font-black shadow-lg ring-2 ring-[#090910]"
                          style={{ backgroundColor: c.accent }}
                          title="Verified Creator"
                        >
                          ✓
                        </div>
                      </div>

                      {/* Quick social links — only show YouTube if link exists */}
                      <div className="flex items-center gap-2 pb-1">
                        {c.youtube && (
                          <a
                            href={c.youtube}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-bold text-white backdrop-blur border border-white/10 transition-all hover:bg-white hover:text-black hover:scale-105"
                          >
                            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            <span>YouTube</span>
                          </a>
                        )}
                        <a
                          href={c.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-bold text-white backdrop-blur border border-white/10 transition-all hover:bg-white hover:text-black hover:scale-105"
                        >
                          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <span>IG</span>
                        </a>
                      </div>
                    </div>

                    {/* Titles */}
                    <div className="mt-4">
                      <div className="flex items-center gap-2">
                        <h3 className="display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white group-hover:text-white">
                          {c.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-[#8d8da0] mt-0.5">
                        <span className="text-white/80 font-semibold">{c.creator}</span> · {c.handle} · {c.igHandle}
                      </p>
                    </div>

                    {/* Highlight Badge — e.g. "50M+ Views in 25 Days" */}
                    {c.highlight && (
                      <div className="mt-3">
                        <span
                          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-wider text-white border shadow-lg"
                          style={{
                            backgroundColor: `${c.accent}18`,
                            borderColor: `${c.accent}50`,
                          }}
                        >
                          <span className="relative flex h-2 w-2">
                            <span
                              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                              style={{ backgroundColor: c.accent }}
                            />
                            <span
                              className="relative inline-flex h-2 w-2 rounded-full"
                              style={{ backgroundColor: c.accent }}
                            />
                          </span>
                          {c.highlight}
                        </span>
                      </div>
                    )}

                    {/* Core Description */}
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#b5b5c6] font-normal">
                      {c.desc}
                    </p>

                    {/* 4 Stats Grid Matrix */}
                    <div className="mt-5 grid grid-cols-4 gap-2">
                      {c.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5 text-center transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                        >
                          <p className="display text-base sm:text-lg font-black text-white">{m.val}</p>
                          <p className="text-[9px] uppercase tracking-wider text-[#757588] font-bold mt-0.5 truncate">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Before vs With FoxLord Transformation */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[#777]">Previous State</p>
                        <p className="mt-1 text-sm font-bold text-white/50">{c.before.subs}</p>
                        <p className="text-[11px] text-[#666]">{c.before.views}</p>
                      </div>
                      <div
                        className="rounded-xl border p-3"
                        style={{
                          backgroundColor: `${c.accent}12`,
                          borderColor: `${c.accent}40`,
                        }}
                      >
                        <p className="text-[9px] font-black uppercase tracking-widest" style={{ color: c.accent }}>
                          Directed by FoxLord
                        </p>
                        <p className="mt-1 text-sm font-black text-white">{c.after.subs}</p>
                        <p className="text-[11px] text-white/70">{c.after.ig}</p>
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] font-semibold text-[#8d8da0]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <blockquote
                      className="border-l-2 pl-3.5 py-1 text-xs italic leading-relaxed text-[#c4c4d4] rounded-r-lg bg-white/[0.015]"
                      style={{ borderColor: c.accent }}
                    >
                      &ldquo;{c.quote}&rdquo;
                    </blockquote>
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


