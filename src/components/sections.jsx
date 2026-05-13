import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLocationDot, FaPhone, FaRegClock } from "react-icons/fa6";
import { GiBowlOfRice, GiChefToque, GiHotMeal } from "react-icons/gi";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import {
  Badge,
  Card,
  GlassButton,
  Rating,
  SectionGrid,
  SectionHeading,
  SectionShell,
  StatTile,
} from "./ui";
import {
  brand,
  combos,
  experienceCards,
  galleryImages,
  heroSlides,
  highlights,
  menuCategories,
  menuShowcase,
  signatureDishes,
  stats,
  testimonials,
} from "../data/siteData";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function BambooLogoMark() {
  return (
    <svg viewBox="0 0 56 56" className="h-6 w-6" aria-hidden="true" fill="none">
      <circle cx="28" cy="28" r="24" className="stroke-gold/60" strokeWidth="1.5" />
      <circle cx="28" cy="28" r="18" className="stroke-gold/15" strokeWidth="1" />
      <path d="M20 38V18" className="stroke-gold" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M28 38V14" className="stroke-gold" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M36 38V19" className="stroke-gold" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M22 22c4-3 8-3 12 0" className="stroke-gold/80" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M22 28c4-2 8-2 12 0" className="stroke-gold/65" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M22 34c4-1.5 8-1.5 12 0" className="stroke-gold/50" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M34 16c3 0 6 1 8 4" className="stroke-gold/60" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M38 20c2 1 4 3 5 6" className="stroke-gold/45" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Menu", "Reservations", "Experience", "Gallery", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-black/35 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-gold shadow-glow">
            <BambooLogoMark />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <div className="font-heading text-[1.1rem] font-semibold tracking-[0.04em] sm:text-[1.2rem]">
                <span className="bg-gradient-to-r from-warm via-[#f7e9c1] to-gold bg-clip-text text-transparent">
                  {brand.name}
                </span>
              </div>
            </div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold/75">Luxury dining</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/75 transition hover:text-gold"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <GlassButton href="#reservations" variant="ghost">
            Reserve
          </GlassButton>
          <GlassButton href="#ordering">Order Now</GlassButton>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-warm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="border-t border-white/10 bg-black/90 px-4 py-5 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-warm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % heroSlides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, slideIndex) => (
          <motion.div
            key={slide.image}
            initial={false}
            animate={{
              opacity: slideIndex === index ? 1 : 0,
              scale: slideIndex === index ? 1.08 : 1.16,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" loading="eager" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,15,0.2)_0%,rgba(15,15,15,0.84)_75%,rgba(15,15,15,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_36%)]" />
        <div className="absolute inset-0 overflow-hidden">
          {[
            ["left-[12%] top-[24%]", "h-2 w-2"],
            ["left-[20%] top-[66%]", "h-1.5 w-1.5"],
            ["right-[18%] top-[18%]", "h-2.5 w-2.5"],
            ["right-[12%] top-[58%]", "h-2 w-2"],
            ["left-[52%] top-[16%]", "h-1.5 w-1.5"],
            ["left-[74%] top-[76%]", "h-2 w-2"],
          ].map(([position, size], index) => (
            <span
              key={position}
              className={`absolute rounded-full bg-gold/80 shadow-[0_0_20px_rgba(212,175,55,0.5)] animate-float ${position} ${size}`}
              style={{ animationDelay: `${index * 0.7}s` }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-28">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          animate="show"
          className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="max-w-4xl">
            <Badge>Premium Indian dining</Badge>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12 }}
              className="mt-6 font-heading text-5xl leading-tight text-warm sm:text-6xl lg:text-8xl"
            >
              Taste Luxury
              <span className="block bg-gradient-to-r from-gold via-[#ffe08b] to-copper bg-[length:200%_200%] bg-clip-text text-transparent animate-shimmer">
                in Every Bite
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
            >
              Experience unforgettable dining with rich flavors, elegant ambiance, premium hospitality, and a smooth
              reservation flow built for modern food lovers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <GlassButton href="#reservations">Book Table</GlassButton>
              <GlassButton href="#ordering" variant="ghost">
                Order Online
              </GlassButton>
              <GlassButton href="#menu" variant="ghost">
                Explore Menu
              </GlassButton>
            </motion.div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatTile key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -right-6 bottom-6 h-36 w-36 rounded-full bg-copper/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
              <div className="aspect-[4/5] overflow-hidden rounded-[24px]">
                <img
                  src={heroSlides[index].image}
                  alt={heroSlides[index].alt}
                  className="h-full w-full object-cover transition duration-1000 hover:scale-110"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.34em] text-gold/80">Tonight's experience</div>
                  <div className="mt-1 font-heading text-2xl text-warm">Cinematic dining, softly lit</div>
                </div>
                <div className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-gold">
                  100% premium
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <SectionShell id="about">
      <SectionHeading
        eyebrow="About the restaurant"
        title="Warm luxury, family comfort, and a dining atmosphere that feels cinematic."
        description="Inspired by premium hospitality, the dining flow balances modern elegance with Indian warmth. Every detail is designed to feel refined, intimate, and easy to love."
      />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={sectionReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Card className="!p-0">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[340px]">
                <img
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1200&q=80"
                  alt="Elegant fine dining atmosphere"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,15,15,0.65))]" />
              </div>
              <div className="p-6 sm:p-8">
                <Badge>Chef-led hospitality</Badge>
                <h3 className="mt-5 font-heading text-3xl text-warm">Crafted for evenings that linger.</h3>
                <p className="mt-4 text-base leading-8 text-white/68">
                  From the first warm welcome to the final bite, the experience is shaped around generous service,
                  premium ingredients, and a dining room that feels both intimate and celebratory.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/78">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid gap-6">
          <SectionGrid className="sm:grid-cols-2">
            {[
              { title: "Signature ingredients", text: "Fresh produce, rich dairy, and hand-finished spice blends." },
              { title: "Experience badges", text: "Fine dining service, family seating, and celebration hosting." },
              { title: "Award-style polish", text: "Luxury plating, ambient music, and a polished premium identity." },
              { title: "Fast hospitality", text: "Quick online ordering and reservation support without the wait." },
            ].map((item) => (
              <StatTile key={item.title} value={item.title} label={item.text} />
            ))}
          </SectionGrid>

          <Card>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                <GiChefToque />
              </span>
              <div>
                <div className="text-lg font-semibold text-warm">Chef's philosophy</div>
                <div className="text-sm text-white/65">Elegant food, honest flavor, premium experience.</div>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["North Indian", "Chinese", "Mughlai"].map((tag) => (
                <div key={tag} className="rounded-2xl border border-gold/15 bg-gold/5 px-4 py-3 text-center text-sm text-gold">
                  {tag}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}

export function SignatureDishesSection() {
  return (
    <SectionShell id="signature">
      <SectionHeading
        eyebrow="Signature dishes"
        title="A cinematic lineup of beloved dishes, plated with confidence."
        description="Each featured dish combines premium visuals, an elegant description, and a direct order call to action."
      />

      <SectionGrid className="md:grid-cols-2 xl:grid-cols-4">
        {signatureDishes.map((dish) => (
          <Card key={dish.name} className="!p-0">
            <div className="overflow-hidden rounded-[28px]">
              <div className="relative h-64">
                <img src={dish.image} alt={dish.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,15,15,0.82))]" />
                <div className="absolute left-4 top-4">
                  <Badge>{dish.badge}</Badge>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading text-2xl text-warm">{dish.name}</h3>
                  <span className="text-xl font-semibold text-gold">{dish.price}</span>
                </div>
                <p className="mt-3 min-h-16 text-sm leading-7 text-white/68">{dish.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <GlassButton href="#ordering" variant="ghost" className="px-4 py-2 text-xs">
                    Order
                  </GlassButton>
                  <span className="text-xs uppercase tracking-[0.28em] text-white/45">Freshly prepared</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </SectionGrid>
    </SectionShell>
  );
}

export function MenuSection() {
  const tabs = Object.keys(menuCategories);
  const [active, setActive] = useState(tabs[0]);
  const items = useMemo(() => menuCategories[active], [active]);
  const showcase = menuShowcase[active];

  return (
    <SectionShell id="menu" className="bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_40%)]">
      <SectionHeading
        eyebrow="Menu showcase"
        title="An elegant menu that feels premium, organized, and easy to explore."
        description="Switch categories with a smooth animated interface built for both desktop browsing and touch-first mobile interactions."
      />

      <div className="mb-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <Card className="!p-0 overflow-hidden">
          <div className="relative min-h-[320px]">
            <img
              src={showcase.image}
              alt={active}
              className={`h-full w-full transition duration-700 hover:scale-105 ${
                active === "Chinese"
                  ? "object-cover object-center scale-[0.88] sm:scale-[0.92]"
                  : "object-cover"
              }`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,15,0.08),rgba(15,15,15,0.86))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <Badge>{active}</Badge>
              <h3 className="mt-4 max-w-xl font-heading text-3xl text-warm sm:text-4xl">{showcase.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{showcase.description}</p>
            </div>
          </div>
        </Card>

        <div className="grid gap-4">
          <Card>
            <div className="text-sm uppercase tracking-[0.3em] text-gold/75">Category vibe</div>
            <div className="mt-3 font-heading text-3xl text-warm">{active}</div>
            <p className="mt-3 text-sm leading-7 text-white/65">
              A visual-first menu lane that helps guests scan the style of the section before they open a dish.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3 text-white/70">
              <GiBowlOfRice className="text-gold" />
              <span className="text-sm uppercase tracking-[0.25em]">Relatable food imagery</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/65">
              Each tab swaps to a dish photo that matches the category, so the menu feels more inviting and food-led.
            </p>
          </Card>
        </div>
      </div>

      <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition ${
              active === tab
                ? "bg-gradient-to-r from-gold to-copper text-black shadow-glow"
                : "border border-white/10 bg-white/5 text-white/70 hover:border-gold/40 hover:text-gold"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.45 }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {items.map((item) => (
            <Card key={item.name}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl text-warm">{item.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{item.note}</p>
                </div>
                <span className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                  {item.price}
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/40">
                <GiBowlOfRice className="text-gold" />
                Premium plating
              </div>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionShell>
  );
}

export function ReservationSection() {
  return (
    <SectionShell id="reservations">
      <SectionHeading
        eyebrow="Reservation & party booking"
        title="Reserve a table, plan a birthday, or book a celebration with ease."
        description="A dark glassmorphism form, premium inputs, and a clear split between standard seating and party requests."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-6 sm:p-8">
          <form className="grid gap-4">
            {[
              ["Name", "text", "Your name"],
              ["Phone", "tel", "+91..."],
              ["Date", "date", ""],
              ["Time", "time", ""],
              ["Guests", "number", "2"],
            ].map(([label, type, placeholder]) => (
              <label key={label} className="grid gap-2">
                <span className="text-sm font-medium text-white/75">{label}</span>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-warm outline-none transition placeholder:text-white/30 focus:border-gold/55 focus:ring-2 focus:ring-gold/10"
                />
              </label>
            ))}
            <label className="grid gap-2">
              <span className="text-sm font-medium text-white/75">Occasion</span>
              <select className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-warm outline-none focus:border-gold/55 focus:ring-2 focus:ring-gold/10">
                <option>Table reservation</option>
                <option>Birthday celebration</option>
                <option>Corporate dinner</option>
                <option>Private party</option>
              </select>
            </label>
            <textarea
              rows="4"
              placeholder="Special request, seating preference, or celebration details"
              className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-warm outline-none transition placeholder:text-white/30 focus:border-gold/55 focus:ring-2 focus:ring-gold/10"
            />
            <div className="flex flex-wrap gap-3 pt-2">
              <GlassButton href="#contact">Book Your Table</GlassButton>
              <GlassButton href="#contact" variant="ghost">
                Reserve Party
              </GlassButton>
            </div>
          </form>
        </Card>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            {
              title: "Birthday styling",
              text: "Custom tables, gentle lighting, and celebration coordination.",
            },
            {
              title: "Fast booking support",
              text: "A smooth inquiry flow for same-day reservations and events.",
            },
            {
              title: "Family dining",
              text: "Comfortable layouts for groups, couples, and festive gatherings.",
            },
            {
              title: "Warm hospitality",
              text: "A premium experience from booking confirmation to final service.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold">
                  <FaRegClock />
                </span>
                <div>
                  <div className="text-lg font-semibold text-warm">{item.title}</div>
                  <p className="mt-1 text-sm leading-7 text-white/65">{item.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Dining experience"
        title="Indoor, outdoor, Wi-Fi, and celebration-ready spaces that feel polished."
        description="A split-screen layout keeps the premium story visual while the supporting text stays crisp and easy to scan."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {experienceCards.map((card) => (
          <Card key={card.title} className="!p-0">
            <div className="relative h-72">
              <img src={card.image} alt={card.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,15,15,0.85))]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-heading text-3xl text-warm">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{card.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionShell id="testimonials">
      <SectionHeading
        eyebrow="Customer testimonials"
        title="Guests remember the freshness, the speed, and the atmosphere."
        description="The reviews slide automatically in a calm, premium rhythm so the social proof feels lively without distracting from the design."
      />

      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <Card className="flex min-h-[300px] flex-col justify-between">
          <div>
            <Badge>4.9 average rating</Badge>
            <h3 className="mt-5 font-heading text-3xl text-warm">Loved by families, birthday groups, and regular diners.</h3>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-3">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gold/15 text-sm font-semibold text-gold"
                >
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
              ))}
            </div>
            <div className="text-sm text-white/65">Fast service, warm ambience, and polished hospitality.</div>
          </div>
        </Card>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0"
            >
              <Card className="h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-heading text-2xl text-warm">{testimonials[index].name}</div>
                    <div className="mt-1 text-sm text-white/50">{testimonials[index].role}</div>
                  </div>
                  <Rating value={testimonials[index].rating} />
                </div>
                <p className="mt-8 text-2xl leading-[1.75] text-white/82 sm:text-3xl">
                  “{testimonials[index].quote}”
                </p>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionShell>
  );
}

export function GallerySection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <SectionShell id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title="Cinematic imagery that captures the warmth of the dining experience."
        description="The masonry-like flow mixes wide and narrow cards, with an elegant lightbox-style preview on click."
      />

      <div className="columns-1 gap-5 space-y-5 md:columns-2 xl:columns-3">
        {galleryImages.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActiveImage(item)}
            className={`group relative block w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 text-left ${index % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"}`}
          >
            <img
              src={item.image}
              alt={item.label}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,15,15,0.72))]" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-gold/80">{item.label}</div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 24 }}
              className="max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-blacklux shadow-soft"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={activeImage.image} alt={activeImage.label} className="h-[70vh] w-full object-cover" />
              <div className="flex items-center justify-between gap-4 p-5">
                <div className="text-lg text-warm">{activeImage.label}</div>
                <button onClick={() => setActiveImage(null)} className="text-sm text-gold">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}

export function OrderingSection() {
  return (
    <SectionShell id="ordering">
      <SectionHeading
        eyebrow="Online ordering"
        title="Move from craving to checkout in one polished experience."
        description="Popular combos and a fast-order CTA keep the pathway focused on conversion, delivery, and ease of use."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-5 md:grid-cols-3">
          {combos.map((combo) => (
            <Card key={combo.title}>
              <div className="text-sm uppercase tracking-[0.28em] text-gold/80">Popular combo</div>
              <div className="mt-4 font-heading text-2xl text-warm">{combo.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/65">{combo.note}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-semibold text-gold">{combo.price}</span>
                <GlassButton variant="ghost" className="px-4 py-2 text-xs">
                  Add to cart
                </GlassButton>
              </div>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden !p-0">
          <div className="relative min-h-[380px] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
            <div className="relative">
              <Badge>Fast checkout</Badge>
              <h3 className="mt-5 font-heading text-4xl text-warm">Order your favorites with a luxury touch.</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
                Designed for mobile-first speed, the ordering area highlights a direct path to add items, view the full
                menu, and contact the restaurant instantly.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <GlassButton>Order Now</GlassButton>
                <GlassButton href="#menu" variant="ghost">
                  View Full Menu
                </GlassButton>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-white/60">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold">
                  <GiHotMeal />
                </span>
                <div>
                  <div className="font-semibold text-warm">Hot and fresh delivery</div>
                  <div>Premium packaging and rapid dispatch for online orders.</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}

export function ContactSection() {
  return (
    <SectionShell id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Find the restaurant, call ahead, or book a table in seconds."
        description="The contact area stays minimal and elegant, with the essentials presented clearly and a map for easy discovery."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="p-6 sm:p-8">
          <div className="grid gap-4">
            {[
              { icon: FaPhone, title: brand.phone, text: "Call for reservations or party bookings" },
              { icon: FaLocationDot, title: brand.address, text: "Premium dining location" },
              { icon: FaRegClock, title: "Open daily 11:00 AM - 11:30 PM", text: "Lunch, dinner, and late service" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold">
                  <item.icon />
                </span>
                <div>
                  <div className="font-semibold text-warm">{item.title}</div>
                  <div className="mt-1 text-sm leading-7 text-white/62">{item.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-warm" href="#">
              <FaInstagram />
            </a>
            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-warm" href="#">
              <FaFacebookF />
            </a>
            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-warm" href="#">
              <FaXTwitter />
            </a>
          </div>
        </Card>

        <div className="grid gap-6">
          <Card className="!p-0">
            <div className="h-[360px] overflow-hidden rounded-[28px]">
              <iframe
                title="The Bamboo Hut map"
                src="https://www.google.com/maps?q=restaurant&output=embed"
                className="h-full w-full border-0 grayscale-[0.15] contrast-110"
                loading="lazy"
              />
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <form
              className="grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-warm outline-none focus:border-gold/55"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-warm outline-none focus:border-gold/55"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-warm outline-none focus:border-gold/55"
                />
                <input
                  type="text"
                  placeholder="Reservation subject"
                  className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-warm outline-none focus:border-gold/55"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Message, booking details, or special request"
                className="mt-4 w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-warm outline-none focus:border-gold/55"
              />
              <div className="mt-4 flex flex-wrap gap-3">
                <GlassButton type="submit">Send Message</GlassButton>
                <GlassButton href={`tel:${brand.phone.replace(/\s/g, "")}`} variant="ghost">
                  Call Now
                </GlassButton>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto_auto] lg:px-8">
        <div>
          <div className="font-heading text-3xl text-warm">{brand.name}</div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">
            A premium restaurant website concept built to inspire online orders, reservation requests, and a lasting
            luxury dining identity.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-gold/80">Quick links</div>
          <div className="mt-4 grid gap-3 text-sm text-white/62">
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#reservations">Reservations</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-gold/80">Hours</div>
          <div className="mt-4 space-y-2 text-sm text-white/62">
            <div>Mon - Sun</div>
            <div>11:00 AM - 11:30 PM</div>
            <div>{brand.phone}</div>
            <div>{brand.email}</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.3em] text-white/35">
        Crafted for luxury dining experiences
      </div>
    </footer>
  );
}
