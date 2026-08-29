import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[110] h-[3px] w-full origin-left bg-gradient-to-r from-white via-white/70 to-white/30"
    />
  );
}

/** Soft white/gray moving lights + drifting grid behind the whole site. */
export function AmbientBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#060608]" aria-hidden>
      {/* drifting digital grid */}
      <div className="grid-bg absolute inset-0" />

      {/* monochrome glowing orbs */}
      <div
        className="orb absolute -left-24 top-[-10%] h-[560px] w-[520px] rounded-full blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.07), transparent 70%)",
          animation: "drift 24s ease-in-out infinite",
        }}
      />
      <div
        className="orb absolute right-[-8%] top-[20%] h-[480px] w-[460px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(180,180,195,0.08), transparent 70%)",
          animation: "drift2 28s ease-in-out infinite",
        }}
      />
      <div
        className="orb absolute bottom-[-12%] left-[30%] h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%)",
          animation: "drift 32s ease-in-out infinite",
        }}
      />
    </div>
  );
}
