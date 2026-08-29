import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../utils/cn";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/* Scroll reveal (fade + rise + blur)                                  */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 34,
  blur = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.95, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Mask reveal — each line slides up out of an overflow mask           */
/* ------------------------------------------------------------------ */
export function MaskLines({
  lines,
  className,
  lineClass,
  stagger = 0.1,
  base = 0,
  start = true,
}: {
  lines: string[];
  className?: string;
  lineClass?: string;
  stagger?: number;
  base?: number;
  start?: boolean;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={cn("block will-change-transform", lineClass)}
            initial={{ y: "118%" }}
            animate={start ? { y: "0%" } : { y: "118%" }}
            transition={{ duration: 1, delay: base + i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Scroll-triggered version of the mask reveal */
export function MaskReveal({
  lines,
  className,
  lineClass,
  stagger = 0.09,
}: {
  lines: string[];
  className?: string;
  lineClass?: string;
  stagger?: number;
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={cn("block will-change-transform", lineClass)}
            initial={{ y: "118%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.9, delay: i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Clip-path image reveal (blur-to-sharp)                              */
/* ------------------------------------------------------------------ */
export function ImageReveal({
  src,
  alt = "",
  className,
  imgClass,
  from = "inset(0 0 100% 0)",
}: {
  src: string;
  alt?: string;
  className?: string;
  imgClass?: string;
  from?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("h-full w-full object-cover will-change-transform", imgClass)}
        initial={{ clipPath: from, scale: 1.22 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.25, ease: EASE }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic hover wrapper                                              */
/* ------------------------------------------------------------------ */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Subtle 3D tilt card                                                 */
/* ------------------------------------------------------------------ */
export function TiltCard({
  children,
  className,
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 16, mass: 0.2 });
  const sry = useSpring(ry, { stiffness: 150, damping: 16, mass: 0.2 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rx.set(py * -max);
    ry.set(px * max);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1100, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Infinite marquee                                                    */
/* ------------------------------------------------------------------ */
export function Marquee({
  children,
  className,
  reverse = false,
  animate = true,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  animate?: boolean;
}) {
  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap", className)}>
      <div
        className={cn(
          "flex shrink-0 will-change-transform",
          animate && "marquee-track",
          animate && reverse && "[animation-direction:reverse]"
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
