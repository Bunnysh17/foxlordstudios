import { useEffect, useRef } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

import { SmoothContext } from "./lib/SmoothContext";
import { AmbientBg, ScrollProgress } from "./components/Effects";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { Services } from "./sections/Services";
import { Founder } from "./sections/Founder";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

export default function App() {
  const ready = true;
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  const scrollTo = (target: string) => {
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.2 });
    else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SmoothContext.Provider value={scrollTo}>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen bg-[#07070c] text-white">
          <AmbientBg />
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10">
            <Hero ready={ready} />
            <Work />
            <Services />
            <Founder />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </SmoothContext.Provider>
  );
}
