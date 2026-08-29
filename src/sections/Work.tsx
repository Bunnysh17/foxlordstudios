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
                Latest Top Performers.
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#9e9eb0]">
              Real top-tier creators scaled with custom editing systems, high-retention cuts, and explosive multi-platform reach.
            </p>
          </div>
        </Reveal>

        {/* Creator Performance Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.12} className="h-full">
              <article
                className="group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-white/10 bg-[#090910]/95 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_20px_80px_rgba(255,255,255,0.05)] hover:-translate-y-1"
                style={{
                  boxShadow: `0 20px 60px -15px ${c.accentGlow}`,
                }}
              >
                <div>
                  {/* Top Avatar & Social Links */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="relative">
                      <div
                        className="absolute -inset-1 rounded-2xl blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: c.accent }}
                      />
                      <img
                        src={c.avatar}
                        alt={c.creator}
                        className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover ring-2 ring-white/40 shadow-2xl bg-[#090910]"
                      />
                      {/* Verified badge */}
                      <div
                        className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-white text-[11px] font-black shadow-lg ring-2 ring-[#090910]"
                        style={{ backgroundColor: c.accent }}
                        title="Verified Creator"
                      >
                        ✓
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-2">
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

                  {/* Channel Title */}
                  <div className="mt-5">
                    <h3 className="display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                      {c.name}
                    </h3>
                  </div>

                  {/* Highlight Badge with Animated Ping */}
                  {c.highlight && (
                    <div className="mt-3">
                      <span
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white border shadow-lg"
                        style={{
                          backgroundColor: `${c.accent}18`,
                          borderColor: `${c.accent}60`,
                        }}
                      >
                        <span className="relative flex h-2.5 w-2.5">
                          <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                            style={{ backgroundColor: c.accent }}
                          />
                          <span
                            className="relative inline-flex h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: c.accent }}
                          />
                        </span>
                        {c.highlight}
                      </span>
                    </div>
                  )}

                  {/* 4 Stats Grid Matrix */}
                  <div className="mt-6 grid grid-cols-4 gap-2.5">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                      >
                        <p className="display text-base sm:text-xl font-black text-white">{m.val}</p>
                        <p className="text-[9px] uppercase tracking-wider text-[#8a8a9e] font-bold mt-1 truncate">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Highlighted Separate Creator Reviews Section */}
        <div className="mt-20">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="eyebrow">
                <span className="text-white/40">02 /</span> Client Feedback
              </p>
              <h3 className="display mt-3 text-[clamp(1.8rem,4vw,3.2rem)] font-extrabold uppercase text-white">
                What Creators Say.
              </h3>
              <p className="text-sm text-[#8d8da0] mt-2">
                Direct reviews from the creators we work with every day.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {CHANNELS.map((c, i) => (
              <Reveal key={`review-${c.id}`} delay={i * 0.15} className="h-full">
                <div
                  className="relative flex flex-col justify-between h-full rounded-3xl border p-7 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: `${c.accent}08`,
                    borderColor: `${c.accent}35`,
                    boxShadow: `0 20px 50px -20px ${c.accentGlow}`,
                  }}
                >
                  <div>
                    {/* Header with Creator Info & 5 Gold Stars */}
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={c.avatar}
                          alt={c.creator}
                          className="h-12 w-12 rounded-xl object-cover ring-2 ring-white/20"
                        />
                        <div>
                          <p className="text-sm font-bold text-white flex items-center gap-1.5">
                            {c.creator}
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                              {c.name}
                            </span>
                          </p>
                          <p className="text-xs text-[#8a8a9c]">{c.niche}</p>
                        </div>
                      </div>

                      {/* 5 Stars */}
                      <div className="flex text-amber-400 text-sm tracking-wider">
                        ★★★★★
                      </div>
                    </div>

                    {/* Review Quote Body */}
                    <blockquote className="mt-5 text-sm sm:text-base leading-relaxed text-[#eaeaf2] font-normal italic">
                      &ldquo;{c.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Bottom Tag */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50">
                    <span className="font-medium">Verified Client Feedback</span>
                    <span className="font-bold" style={{ color: c.accent }}>{c.highlight}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
