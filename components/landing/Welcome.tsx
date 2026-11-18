

"use client";
import { motion, useReducedMotion } from "framer-motion";
import { BookMarked, Quote, Smile, Users } from "lucide-react";
import {
  Item,
  ParallaxImage,
  Reveal,
  SplitWords,
  Stagger,
  ease,
} from "../motion";

const pillars = [
  {
    icon: Smile,
    t: "Worship",
    d: "Spirit-filled devotion and reverence before God.",
  },
  {
    icon: BookMarked,
    t: "Discipleship",
    d: "Growing deeper in the Word and in prayer.",
  },
  {
    icon: Users,
    t: "Community",
    d: "Fellowship, care and compassion for one another.",
  },
];

export default function Welcome() {
  const reduce = useReducedMotion();

  return (
    <section
      id="welcome"
      className="relative overflow-hidden bg-white py-10 sm:py-20 lg:py-[6.5rem]"
    >
      {/* soft background glow, drifting slowly */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full pointer-events-none -left-32 top-10 h-80 w-80 bg-maroon/5 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 rounded-full pointer-events-none -right-24 h-72 w-72 bg-navy/5 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.82fr_1fr] lg:gap-x-[7%]">
        {/* ───────── Text column (TOP on mobile, right on desktop) ───────── */}
        <div className="order-1 text-left lg:order-2 lg:pl-4">
          <Reveal x={-30} y={0}>
            <p className="flex items-center gap-3 t-label">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
                className="block h-px bg-maroon"
              />
              Osogbo Heritage
            </p>
          </Reveal>

          <h2 className="t-h2 mt-3 [font-size:clamp(1.9rem,1.3rem+1.6vw,3rem)]">
            <SplitWords text="You’re Welcome Here." inView />
          </h2>

          {/* animated underline under the heading */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.5 }}
            className="mt-3 block h-[3px] w-16 origin-left rounded-full bg-maroon"
          />

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-[34rem] text-[0.95rem] leading-[1.75] text-[#52525b] sm:mt-5 sm:text-[1.05rem]">
              At the English Chapel Sanctuary of Peace, Osogbo District
              Headquarters, we believe every soul is divinely cherished. Whether
              you have walked with Christ for decades or are stepping into a
              sanctuary for the very first time, this is an oasis of renewal,
              spiritual grounding, and genuine Christian fellowship.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="t-body mt-4 hidden max-w-[34rem] text-[#52525b] sm:block">
              Anchored in profound biblical truth, heartfelt prayer, and active
              compassion, our mission across Osun State and beyond is to raise
              disciples grounded in the Word and equipped to impact their
              spheres of influence.
            </p>
          </Reveal>

          {/* pillars */}
          <Stagger
            className="mt-7 grid grid-cols-3 gap-2.5 sm:mt-8 sm:gap-4"
            stagger={0.12}
          >
            {pillars.map((p) => (
              <Item key={p.t}>
                <motion.div
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative flex flex-col items-start h-full gap-2 px-3 py-4 overflow-hidden text-left transition-shadow duration-300 border group rounded-2xl border-navy/5 bg-mist hover:shadow-xl hover:shadow-navy/10 sm:px-5 sm:py-5"
                >
                  {/* accent bar that grows on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-maroon transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <motion.span
                    whileHover={
                      reduce ? undefined : { rotate: [0, -12, 12, 0] }
                    }
                    transition={{ duration: 0.6 }}
                    className="grid transition-colors duration-300 bg-white rounded-full shadow-sm h-11 w-11 shrink-0 place-items-center text-navy-2 group-hover:bg-navy group-hover:text-white"
                  >
                    <p.icon size={20} />
                  </motion.span>
                  <div>
                    <h3 className="font-poppins text-[0.85rem] font-medium text-navy sm:mt-2 sm:text-base">
                      {p.t}
                    </h3>
                    <p className="mt-1 hidden text-[0.78rem] leading-[1.6] text-ink sm:block">
                      {p.d}
                    </p>
                  </div>
                </motion.div>
              </Item>
            ))}
          </Stagger>
        </div>

        {/* ───────── Image column (BOTTOM on mobile, left on desktop) ───────── */}
        <div className="relative order-2 mx-auto w-full max-w-[34rem] pb-2 lg:order-1 lg:max-w-none lg:pb-0">
          {/* offset outline frame (desktop only) */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: -14, y: -14 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="absolute -left-4 -top-4 hidden h-full w-full rounded-[26px] border-2 border-maroon/30 lg:block"
          />

          {/* slowly rotating dashed ring accent */}
          <motion.div
            aria-hidden
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -right-5 -top-5 z-0 h-20 w-20 rounded-full border-2 border-dashed border-maroon/30 sm:h-24 sm:w-24"
          />

          {/* image rises into view */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease }}
            className="relative z-[1]"
          >
            <ParallaxImage
              src="/images/landing/mosesorimolade.png"
              alt="Worshippers lifting their hands during a service"
              className="aspect-[4/3.2] w-full shadow-2xl shadow-navy/20 sm:aspect-[4/4.2] lg:aspect-[0.86]"
              round={26}
              intensity={4}
            />

            {/* Motto card:
                mobile/tablet → sits below the photo, overlapping a sliver
                desktop       → hangs off the bottom-right corner */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.6 }}
              className="relative z-10 -mt-8 px-4 sm:px-8 lg:absolute lg:-bottom-9 lg:-right-9 lg:mt-0 lg:w-[74%] lg:px-0"
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex items-start gap-3.5 overflow-hidden rounded-2xl border-l-4 border-maroon bg-white/95 px-5 py-4 shadow-2xl shadow-navy/20 backdrop-blur sm:gap-4 sm:px-6 sm:py-5"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                    delay: 1,
                  }}
                  className="grid text-white rounded-full shadow-md h-9 w-9 shrink-0 place-items-center bg-maroon shadow-maroon/30 sm:h-10 sm:w-10"
                >
                  <Quote size={17} className="fill-white" />
                </motion.span>
                <div>
                  <p className="font-poppins text-[1rem] font-semibold italic leading-snug text-navy sm:text-[1.15rem]">
                    “Where God we serve is tested and trusted!”
                  </p>
                  <p className="mt-1.5 text-[0.62rem] font-medium uppercase tracking-wider text-maroon sm:text-[0.7rem]">
                    District Headquarters Sanctuary Motto
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
