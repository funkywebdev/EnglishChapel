"use client";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useRef } from "react";
import { CountUp, Item, Reveal, SplitWords, Stagger, ease } from "../motion";
import { stats } from "./data";

// Edit this list to match your real ministries
const ministries = [
  "Choir",
  "Ushering",
  "Media & Tech",
  "Children",
  "Youth",
  "Prayer Team",
  "Evangelism",
  "Welfare",
  "Protocol",
  "Women",
  "Men",
  "Drama",
  "Counselling",
  "Follow-up",
];

export default function MinistriesHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 100]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.4]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-b from-mist via-[#f1f4ff] to-[#f4f6ff] pb-8 pt-8 sm:pb-12 sm:pt-14 "
    >
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(#0d4c9e22_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      {/* Aurora glows */}
      <motion.div
        style={{ y: yA }}
        aria-hidden
        className="absolute pointer-events-none -right-20 -top-20 -z-10 sm:-right-24 sm:-top-24"
      >
        <motion.div
          className="w-56 h-56 rounded-full bg-maroon/15 blur-2xl will-change-transform sm:h-80 sm:w-80 sm:blur-3xl"
          animate={
            reduce ? undefined : { scale: [1, 1.2, 1], rotate: [0, 20, 0] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        style={{ y: yB }}
        aria-hidden
        className="absolute hidden pointer-events-none -left-24 top-44 -z-10 sm:block"
      >
        <motion.div
          className="rounded-full h-72 w-72 bg-navy-2/10 blur-3xl will-change-transform"
          animate={reduce ? undefined : { scale: [1.15, 1, 1.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative container-x">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          {/* Headline */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2 rounded-full bg-maroon px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-wider text-white shadow-md shadow-maroon/25 sm:text-[0.7rem]"
            >
              <Sparkles size={13} aria-hidden />
              Over 14 arms of ministry
            </motion.p>

            <h1 className="mt-5 font-poppins font-semibold leading-[1.1] tracking-tight text-navy [font-size:clamp(2rem,1rem+4vw,4.4rem)] [text-wrap:balance] sm:mt-6">
              <span className="block">
                <SplitWords text="Find Your Calling." delay={0.2} />
              </span>
              <span className="relative inline-block">
                <span className="block bg-gradient-to-r from-[#0d4c9e] via-[#4a86e8] to-[#0d4c9e] bg-clip-text text-transparent">
                  <SplitWords text="Grow in Purpose." delay={0.55} />
                </span>
                {/* Hand-drawn underline that draws itself */}
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute left-0 w-full h-2 -bottom-1 sm:h-3"
                >
                  <motion.path
                    d="M2 8 C 60 2, 120 12, 180 5 S 270 3, 298 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-maroon"
                    initial={{ pathLength: reduce ? 1 : 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.5, duration: 0.9, ease: "easeOut" }}
                  />
                </svg>
              </span>
              <span className="block mt-1">
                <SplitWords text="Serve with Passion." delay={0.9} />
              </span>
            </h1>
          </div>

          {/* Copy + CTAs */}
          <div className="text-center lg:text-right">
            <Reveal delay={0.5}>
              <p className="mx-auto max-w-[34rem] text-[0.95rem] leading-[1.7] text-ink sm:text-[1.08rem] sm:leading-[1.75] lg:ml-auto lg:mr-0 lg:max-w-[40rem]">
                <span className="sm:hidden">
                  Every believer is empowered to discover their divine
                  endowments, nurture fellowship, and transform Osogbo through
                  faithful servant leadership.
                </span>
                <span className="hidden sm:inline">
                  At English Chapel Sanctuary of Peace, every believer is
                  empowered to discover their divine endowments, nurture
                  communal fellowship, and transform Osogbo and the nations
                  through faithful servant leadership. This is our core aim to
                  win souls for Christ by teaching the Word of God and saving
                  sinful lives.
                </span>
              </p>
            </Reveal>

            <Reveal
              delay={0.7}
              className="flex flex-col w-full max-w-sm gap-3 mx-auto mt-6 sm:mt-7 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 lg:justify-end"
            >
              <motion.a
                href="#volunteer"
                whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="shimmer group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-maroon px-7 py-3 font-poppins text-[0.95rem] font-medium text-white shadow-lg shadow-maroon/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon sm:px-9"
              >
                Join Our Team
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
              <motion.a
                href="#how"
                whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-maroon bg-white/70 px-7 py-3 font-poppins text-[0.95rem] font-medium text-maroon backdrop-blur transition-colors hover:bg-maroon hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon sm:px-9"
              >
                How it works
              </motion.a>
            </Reveal>
          </div>
        </div>

        {/* Ministries marquee (pauses on hover/touch; static and wrapped if reduced motion) */}
        <Reveal delay={0.9} className="mt-8 sm:mt-10">
          {reduce ? (
            <ul className="flex flex-wrap justify-center gap-2">
              {ministries.map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-navy/10 bg-white/80 px-4 py-1.5 text-[0.78rem] text-navy"
                >
                  {m}
                </li>
              ))}
            </ul>
          ) : (
            <div
              className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
              aria-label="Our ministries"
            >
              <motion.ul
                className="flex w-max gap-2.5 py-1 group-hover:[animation-play-state:paused]"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                whileHover={{ transition: { duration: 90 } }}
              >
                {[...ministries, ...ministries].map((m, i) => (
                  <li
                    key={`${m}-${i}`}
                    aria-hidden={i >= ministries.length}
                    className="whitespace-nowrap rounded-full border border-navy/10 bg-white/80 px-4 py-1.5 text-[0.78rem] font-medium text-navy shadow-sm backdrop-blur sm:text-[0.85rem]"
                  >
                    {m}
                  </li>
                ))}
              </motion.ul>
            </div>
          )}
        </Reveal>

        {/* Stats: 2x2 on mobile, 4 columns on desktop */}
        <Reveal y={50} delay={0.3} className="mt-6 sm:mt-8">
          <Stagger
            stagger={0.12}
            className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white/90 text-center shadow-[0_20px_50px_-25px_rgba(2,20,58,0.35)] ring-1 ring-navy/5 backdrop-blur lg:grid-cols-4 lg:px-6 lg:py-8 lg:text-left"
          >
            {stats.map((s) => (
              <Item
                key={s.title}
                className="border-maroon/30 px-3 py-5 sm:px-6 sm:py-7 max-lg:[&:nth-child(even)]:border-l-2 max-lg:[&:nth-child(n+3)]:border-t-2 lg:py-1 lg:[&:not(:first-child)]:border-l-2 lg:[&:not(:first-child)]:pl-8"
              >
                <p className="font-poppins font-semibold leading-none text-navy [font-size:clamp(1.7rem,1.2rem+1.8vw,2.7rem)]">
                  <CountUp to={s.to} />{" "}
                  <span className="text-maroon [font-size:0.55em]">
                    {s.suffix}
                  </span>
                </p>
                <p className="mt-2 text-[0.8rem] font-medium text-ink sm:text-[0.85rem]">
                  {s.title}
                </p>
                <p className="mt-0.5 text-[0.72rem] text-[#6f6f7a] sm:text-[0.76rem]">
                  {s.sub}
                </p>
              </Item>
            ))}
          </Stagger>
        </Reveal>

        {/* Scroll cue (desktop only) */}
        <motion.a
          href="#how"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="hidden mx-auto mt-8 w-fit text-maroon/70 hover:text-maroon lg:block"
        >
          <motion.span
            className="block"
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={26} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
