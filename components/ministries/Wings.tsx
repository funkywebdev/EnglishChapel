"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Flame,
  HandHeart,
  HeartHandshake,
  Home,
  User,
  Video,
} from "lucide-react";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { wings } from "./data";
import { interest } from "./Fellowships";

const icons = {
  hand: HandHeart,
  video: Video,
  flame: Flame,
  book: BookOpen,
  care: HeartHandshake,
  decor: Home,
};

export default function Wings() {
  return (
    <section
      id="wings"
      className="relative py-12 overflow-hidden bg-mist sm:py-16 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none -right-28 top-20 h-72 w-72 bg-maroon/5 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none -left-28 bottom-10 h-72 w-72 bg-navy-2/10 blur-3xl"
      />

      <div className="relative text-center container-x lg:text-left">
        {/* Header */}
        <Reveal x={-30} y={0}>
          <p className="t-label">Sanctuary Operations</p>
        </Reveal>
        <h2 className="t-h2 mt-2 [font-size:clamp(1.6rem,1.05rem+1.9vw,2.8rem)] [text-wrap:balance]">
          <SplitWords text="Specialized Service Wings & Teams" inView />
        </h2>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-3 max-w-[40rem] text-[0.9rem] leading-[1.7] text-ink sm:text-[0.98rem] lg:mx-0">
            The unseen and dedicated stewards ensuring seamless sanctuary order,
            technical excellence, relentless intercession, and hospitality for
            every worshipper.
          </p>
        </Reveal>

        {/* Mobile: stacked. Tablet: 2 columns. Desktop: 3 side by side */}
        <Stagger
          stagger={0.1}
          amount={0.05}
          className="grid grid-cols-1 gap-5 mt-8 text-left sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {wings.map((w) => {
            const Icon = icons[w.icon];
            return (
              <Item key={w.title} className="h-full">
                <Tilt className="h-full" max={4} lift={-8}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-[0_12px_32px_-16px_rgba(2,20,58,0.35)] ring-1 ring-navy/5 transition-shadow duration-300 hover:shadow-[0_32px_56px_-24px_rgba(2,20,58,0.5)] sm:p-6">
                    {/* Accent bar sweeping in on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-maroon to-[#e0566b] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:scale-x-100"
                    />

                    <div className="flex items-start justify-between gap-3">
                      <motion.span
                        initial={{ scale: 0, rotate: -30 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 240,
                          damping: 15,
                          delay: 0.15,
                        }}
                        className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-navy-2 to-[#4a86e8] text-white shadow-lg shadow-navy-2/25 transition-transform duration-300 group-hover:rotate-6"
                      >
                        <Icon size={22} />
                      </motion.span>
                      <span className="rounded-full bg-maroon/10 px-3 py-1 text-[0.66rem] font-semibold text-maroon">
                        {w.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-poppins text-[1.15rem] font-semibold leading-snug text-navy sm:text-[1.25rem]">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-[0.85rem] leading-[1.65] text-ink">
                      {w.desc}
                    </p>

                    <ul className="my-4 space-y-2.5 border-t border-navy/10 pt-4 text-[0.78rem] text-navy-2">
                      <li className="flex items-start gap-2.5">
                        <span className="grid w-6 h-6 mt-px rounded-full shrink-0 place-items-center bg-navy-2/10 text-navy-2">
                          <User size={13} />
                        </span>
                        <span className="pt-0.5">{w.lead}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="grid w-6 h-6 mt-px rounded-full shrink-0 place-items-center bg-navy-2/10 text-navy-2">
                          <Clock size={13} />
                        </span>
                        <span className="pt-0.5">{w.time}</span>
                      </li>
                    </ul>

                    <motion.button
                      type="button"
                      onClick={() => interest(w.title)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="shimmer mt-auto inline-flex min-h-[46px] w-full items-center justify-center rounded-xl bg-maroon px-4 text-[0.85rem] font-semibold text-white shadow-md shadow-maroon/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
                    >
                      Express Interest
                    </motion.button>
                  </article>
                </Tilt>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
