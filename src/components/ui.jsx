import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp, FaStar } from "react-icons/fa6";

const reveal = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SectionShell({ children, id, className = "" }) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 sm:py-24 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_38%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.38em] text-gold/80">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl leading-tight text-warm sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}

export function GlassButton({ children, href, onClick, type = "button", variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-gold via-[#f4d47b] to-copper text-black shadow-glow hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
      : "border border-white/15 bg-white/5 text-warm backdrop-blur-md hover:border-gold/50 hover:bg-gold/10 hover:text-gold";

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

    return (
      <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.button>
  );
}

export function StatTile({ value, label }) {
  return (
    <motion.div
      variants={reveal}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className="font-heading text-3xl text-gold sm:text-4xl">{value}</div>
      <p className="mt-2 text-sm leading-6 text-white/65">{label}</p>
    </motion.div>
  );
}

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
      {children}
    </span>
  );
}

export function Card({ children, className = "" }) {
  return (
    <motion.div
      variants={reveal}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.11),transparent_35%,transparent_65%,rgba(201,123,54,0.08))] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export function SectionGrid({ children, className = "" }) {
  return <div className={`grid gap-6 ${className}`}>{children}</div>;
}

export function Rating({ value = 5 }) {
  return (
    <div className="flex items-center gap-1 text-gold">
      {Array.from({ length: value }).map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>
  );
}

export function FloatingCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),rgba(212,175,55,0)_68%)] blur-2xl lg:block"
      style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }}
    />
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-gold via-[#ffd77a] to-copper"
      style={{ scaleX }}
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -4 }}
      className="fixed bottom-5 right-5 z-40 rounded-full border border-white/10 bg-black/70 p-4 text-warm shadow-soft backdrop-blur-md transition hover:border-gold/40 hover:text-gold"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </motion.button>
  );
}

export function LoadingScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-blacklux"
    >
      <div className="relative flex flex-col items-center gap-5">
        <div className="absolute h-40 w-40 rounded-full bg-gold/10 blur-3xl animate-pulse" />
        <div className="relative h-20 w-20 rounded-full border border-gold/40 bg-white/5 backdrop-blur-xl">
          <div className="absolute inset-3 rounded-full border border-gold/20" />
          <div className="absolute inset-[18px] rounded-full bg-gradient-to-br from-gold to-copper opacity-90" />
        </div>
        <p className="font-heading text-3xl text-warm">The Bamboo Hut</p>
        <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Preparing the table</p>
      </div>
    </motion.div>
  );
}
