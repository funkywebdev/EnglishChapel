
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Reveal, SplitWords } from "../motion";
import { events } from "./data";

// Kept so any other file still importing these doesn't break
export const rail =
  "-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:gap-8";
export const railItem = "w-[84%] shrink-0 snap-center sm:w-[60%] md:w-auto";

export default function Events() {
  const reduce = useReducedMotion();

  return (
    <section id="events" className="bg-mist py-10 sm:py-20 lg:py-[5.5rem]">
      <div className="container-x">
        {/* Header: centered on mobile, row from sm up */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="w-full sm:w-auto">
            <Reveal x={-30} y={0}>
              <p className="t-label">Sanctuary Calendar</p>
            </Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
              <SplitWords text="Be Part of What’s Happening" inView />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-[0.85rem] font-semibold text-maroon underline-offset-4 hover:underline"
            >
              View All Events <CalendarDays size={16} />
            </a>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:mt-12 lg:gap-8">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={reduce ? false : { opacity: 0, y: 48, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                delay: (i % 3) * 0.12,
              }}
              whileHover={reduce ? undefined : { y: -8 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-[0_8px_24px_-12px_rgba(2,20,58,0.25)] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.4)] sm:p-6"
            >
              {/* Accent bar that grows in */}
              <motion.span
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.25 + (i % 3) * 0.12,
                }}
                style={{ originY: 0 }}
                className="absolute bottom-6 left-0 top-6 w-1 rounded-r-full bg-gradient-to-b from-maroon to-navy-2"
              />

              <div className="flex items-start justify-between gap-3 pl-2">
                {/* Date badge */}
                <motion.div
                  initial={reduce ? false : { scale: 0, rotate: -14 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 15,
                    delay: 0.3 + (i % 3) * 0.12,
                  }}
                  className="overflow-hidden rounded-xl bg-navy-2 text-center text-white shadow-md"
                >
                  <p className="bg-maroon px-5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider">
                    {e.month}
                  </p>
                  <p className="px-5 py-1.5 font-poppins text-[1.6rem] font-semibold leading-none">
                    {e.day}
                  </p>
                </motion.div>

                <div className="flex flex-col items-end gap-2">
                  <span className="rounded-md bg-mist px-3 py-1 text-[0.7rem] font-semibold text-navy-2">
                    {e.tag}
                  </span>
                  {i === 0 && (
                    <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-wide text-maroon">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-maroon opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-maroon" />
                      </span>
                      Next up
                    </span>
                  )}
                </div>
              </div>

              <h3 className="mt-5 pl-2 font-poppins text-[1.2rem] font-medium leading-snug text-navy sm:text-[1.35rem]">
                {e.title}
              </h3>
              <p className="mt-2 line-clamp-3 pl-2 text-[0.84rem] leading-[1.65] text-ink sm:mt-2.5 sm:line-clamp-none sm:text-[0.86rem] sm:leading-[1.7]">
                {e.desc}
              </p>

              {/* Time + place as chips */}
              <ul className="mt-4 space-y-2 pl-2 text-[0.8rem] text-navy-2">
                <li className="flex items-start gap-2.5 rounded-lg bg-mist/70 px-3 py-2">
                  <Clock size={15} className="mt-0.5 shrink-0 text-maroon" />
                  {e.when}
                </li>
                <li className="flex items-start gap-2.5 rounded-lg bg-mist/70 px-3 py-2">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-maroon" />
                  {e.where}
                </li>
              </ul>

              <motion.a
                href="#"
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="shimmer mt-auto flex items-center justify-center gap-2 rounded-xl bg-maroon py-3.5 text-center font-poppins text-[0.9rem] font-medium text-white"
                style={{ marginTop: "1.5rem" }}
              >
                {e.cta}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
