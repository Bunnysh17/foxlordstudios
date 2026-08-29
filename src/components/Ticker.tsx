import { Marquee } from "./Primitives";

const ITEMS = [
  "YouTube Management",
  "Cinematic Editing",
  "Shorts & Reels",
  "Thumbnail Design",
  "Creator Branding",
  "Growth Strategy",
];

/** Thin infinite ticker strip — editorial separator between hero and work. */
export function Ticker() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-white/10 bg-white/[0.02] py-4 backdrop-blur-sm">
      <Marquee>
        {ITEMS.map((item) => (
          <span
            key={item}
            className="display mx-10 flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.35em] text-white/40"
          >
            {item}
            <span className="inline-block h-1 w-1 rotate-45 bg-white/30" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
