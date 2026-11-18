"use client";
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Eye, Handshake, Heart, Rocket, Shield } from "lucide-react";
import { Item, Reveal, Stagger, ease } from "./motion";

const pillars = [
  {
    icon: BookOpen,
    title: "Sound Doctrine",
    desc: "Uncompromising fidelity to the Holy Scriptures with systematic expository preaching and sound biblical education.",
  },
  {
    icon: Heart,
    title: "Sanctuary of Peace",
    desc: "Radical hospitality where wounded hearts find healing, families discover unity, and newcomers experience warmth.",
  },
  {
    icon: Shield,
    title: "Holiness & Integrity",
    desc: "A pursuit of clean hands and pure hearts in pastoral governance, public witness, financial transparency, and daily lifestyle.",
  },
  {
    icon: Handshake,
    title: "Transformative Action",
    desc: "Engaging the needy through community food pantries, university scholarships, vocational workshops, and hospital ministries.",
  },
];

const vision = {
  title: "Our Sacred Vision",
  quote:
    "To be a beacon of spiritual revival, peace, holistic transformation across Osogbo and Nigeria—nurturing believers who mirror Christ's character in society, marketplaces, and public leadership.",
  keys: ["Reverence", "Revival", "Reconciliation"],
};

const mission = {
  title: "Our Apostolic Mission",
  quote:
    "Preaching sound biblical doctrine, raising mature disciples, empowering families through radical love, and uplifting society through purposeful, compassionate welfare outreaches across all strata.",
  keys: ["Discipleship", "Compassion", "Stewardship"],
};

function Keys({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <div className="mt-7 flex flex-wrap gap-2.5">
      {items.map((k, i) => (
        <motion.span
          key={k}
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
            delay: 0.4 + i * 0.12,
          }}
          className={`rounded-full px-4 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.12em] sm:text-[0.78rem] ${
            dark
              ? "bg-white/10 text-[#e4e8f4] ring-1 ring-white/20"
              : "bg-white text-navy-2 ring-1 ring-navy/15"
          }`}
        >
          {k}
        </motion.span>
      ))}
    </div>
  );
}

export default function Foundation() {
  const reduce = useReducedMotion();

  return (
    <section id="foundation" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-x">
        {/* Heading */}
        <Reveal className="text-center">
          <p className="t-label">Our Foundation</p>
          <h2 className="t-h2 mt-2">Vision, Mission &amp; Guiding Pillars</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-[1.8] text-[#52525b] sm:text-[1.05rem]">
            The divine mandate steering our pastoral team and congregational
            initiatives.
          </p>
        </Reveal>

        {/* Vision + Mission: one joined panel */}
        <Reveal y={40} duration={0.9}>
          <div className="relative mt-10 overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-28px_rgba(2,20,58,0.5)] lg:mt-14 lg:grid lg:grid-cols-2">
            {/* Vision */}
            <div className="relative overflow-hidden bg-navy-3 p-8 text-white sm:p-12 lg:p-14">
              <Eye
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-10 text-white/[0.06]"
                size={220}
                strokeWidth={1.2}
              />
              <motion.span
                whileHover={reduce ? undefined : { rotate: 12, scale: 1.08 }}
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white"
              >
                <Eye size={28} strokeWidth={1.8} />
              </motion.span>
              <h3 className="relative mt-6 font-poppins font-medium [font-size:clamp(1.5rem,1.1rem+0.9vw,2.1rem)]">
                {vision.title}
              </h3>
              <p className="relative mt-4 text-[1.02rem] italic leading-[1.85] text-[#d6dcec] sm:text-[1.1rem]">
                &ldquo;{vision.quote}&rdquo;
              </p>
              <div className="relative">
                <Keys items={vision.keys} dark />
              </div>
            </div>

            {/* Mission */}
            <div className="relative overflow-hidden bg-mist p-8 sm:p-12 lg:p-14">
              <Rocket
                aria-hidden
                className="pointer-events-none absolute -bottom-8 -right-8 text-navy/[0.06]"
                size={220}
                strokeWidth={1.2}
              />
              <motion.span
                whileHover={reduce ? undefined : { rotate: -12, scale: 1.08 }}
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-maroon shadow-sm"
              >
                <Rocket size={28} strokeWidth={1.8} />
              </motion.span>
              <h3 className="relative mt-6 font-poppins font-medium text-navy-2 [font-size:clamp(1.5rem,1.1rem+0.9vw,2.1rem)]">
                {mission.title}
              </h3>
              <p className="relative mt-4 text-[1.02rem] italic leading-[1.85] text-[#52525b] sm:text-[1.1rem]">
                &ldquo;{mission.quote}&rdquo;
              </p>
              <div className="relative">
                <Keys items={mission.keys} />
              </div>
            </div>

            {/* Centre seam badge (desktop) */}
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 14,
                delay: 0.5,
              }}
              className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-maroon font-poppins text-lg text-white shadow-lg lg:flex"
            >
              +
            </motion.div>
          </div>
        </Reveal>

        {/* Four pillars */}
        <div id="pillars" className="pt-16 lg:pt-24">
          <Reveal className="text-center">
            <h2 className="t-h2">The Four Pillars of Our Sanctuary</h2>
          </Reveal>

          <Stagger
            stagger={0.14}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6"
          >
            {pillars.map((p, i) => (
              <Item key={p.title} className="h-full">
                <motion.div
                  whileHover={reduce ? undefined : { y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-2xl bg-white p-7 shadow-[0_6px_20px_-8px_rgba(2,20,58,0.25)] ring-1 ring-navy/[0.06] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(92,0,18,0.35)]"
                >
                  {/* Top accent bar draws in */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.12 }}
                    className="absolute inset-x-0 top-0 h-1 origin-left bg-maroon"
                  />
                  {/* Ghost number */}
                  <span
                    aria-hidden
                    className="absolute right-5 top-4 select-none font-poppins text-[3.5rem] font-bold leading-none text-navy/[0.06] transition-colors duration-300 group-hover:text-maroon/15"
                  >
                    0{i + 1}
                  </span>

                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 14,
                      delay: 0.35 + i * 0.1,
                    }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-2 text-white transition-colors duration-300 group-hover:bg-maroon"
                  >
                    <p.icon size={26} strokeWidth={1.8} />
                  </motion.span>
                  <h3 className="relative mt-6 font-poppins font-medium text-navy [font-size:clamp(1.2rem,1rem+0.5vw,1.55rem)]">
                    {p.title}
                  </h3>
                  <p className="relative mt-3 text-[0.95rem] leading-[1.8] text-[#52525b]">
                    {p.desc}
                  </p>
                </motion.div>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
