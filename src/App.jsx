import { useEffect, useState } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  Footer,
  GallerySection,
  Header,
  HeroSection,
  MenuSection,
  OrderingSection,
  ReservationSection,
  SignatureDishesSection,
  TestimonialsSection,
} from "./components/sections";
import { BackToTop, FloatingCursor, LoadingScreen, ScrollProgress } from "./components/ui";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, lerp: 0.08 });
    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    gsap.to(".gold-orb", {
      y: -18,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-blacklux font-body text-white">
      <ScrollProgress />
      <FloatingCursor />
      <AnimatePresence mode="wait">{!ready ? <LoadingScreen onDone={() => setReady(true)} /> : null}</AnimatePresence>
      {ready ? (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-x-hidden"
        >
          <Header />
          <HeroSection />
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <span className="gold-orb absolute left-[7%] top-[15%] h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
            <span className="gold-orb absolute right-[6%] top-[40%] h-44 w-44 rounded-full bg-copper/10 blur-3xl" />
            <span className="gold-orb absolute bottom-[12%] left-[30%] h-52 w-52 rounded-full bg-white/5 blur-3xl" />
          </div>
          <AboutSection />
          <SignatureDishesSection />
          <MenuSection />
          <ReservationSection />
          <ExperienceSection />
          <TestimonialsSection />
          <GallerySection />
          <OrderingSection />
          <ContactSection />
          <Footer />
          <BackToTop />
        </motion.main>
      ) : null}
    </div>
  );
}
