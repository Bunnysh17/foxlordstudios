import { LogoMark } from "../components/Logo";
import { NAV_LINKS, SOCIALS, BRAND } from "../lib/data";
import { useSmooth } from "../lib/SmoothContext";

export function Footer() {
  const scrollTo = useSmooth();
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-10 md:flex-row">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="w-10" />
            <span className="display text-white">FOXLORD STUDIO'S</span>
          </div>
          <p className="mt-4 text-sm text-[#9a9aac]">{BRAND.footerTagline}</p>
          <div className="mt-3 flex flex-col gap-1">
            <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="text-xs text-white/40 hover:text-white transition-colors">
              {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="text-xs text-white/40 hover:text-white transition-colors">
              {BRAND.email}
            </a>
          </div>
        </div>
        <div className="flex gap-16">
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.href);
                  }}
                  className="text-sm text-white/60 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noreferrer" : undefined} className="text-sm text-white/60 hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-[1200px] text-[11px] uppercase tracking-[0.2em] text-white/35">{BRAND.year}</p>
    </footer>
  );
}
