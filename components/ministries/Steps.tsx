"use client";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, UserRoundCheck } from "lucide-react";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { steps } from "./data";

const icons = {
  user: UserRoundCheck,
  shield: ShieldCheck,
  heart: HeartHandshake,
};

export default function Steps() {
  return (
    <section
      id="how"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#f6f8ff] to-white py-12 sm:py-16 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none -left-32 top-16 h-72 w-72 bg-navy-2/5 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none -right-32 bottom-10 h-72 w-72 bg-maroon/5 blur-3xl"
      />

      <div className="relative container-x">
        {/* Header */}
        <div className="text-center">
          <Reveal>
            <p className="t-label">Doctrinal Creed</p>
          </Reveal>
          <h2 className="t-h2 mt-2 [font-size:clamp(1.6rem,1.05rem+1.9vw,2.8rem)] [text-wrap:balance]">
            <SplitWords text="What we believe & Preach" inView />
          </h2>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-3 max-w-[36rem] text-[0.9rem] leading-[1.7] text-ink sm:text-[0.98rem]">
              Our confession of faith rooted strictly in the infallible Word of
              God.
            </p>
          </Reveal>
        </div>

        {/* Mobile: stacked. Tablet: 2x2. Desktop: all four side by side */}
        <Stagger
          stagger={0.14}
          amount={0.05}
          className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 sm:[&>*:nth-child(3)]:col-span-2 lg:grid-cols-3 lg:gap-6 lg:[&>*:nth-child(3)]:col-span-1"
        >
          {steps.slice(0, 3).map((s, i) => {
            const Icon = icons[s.icon];
            const maroon = s.tone === "maroon";
            const last = i === 2;
            return (
              <Item key={s.n} className="relative h-full">
                {/* Dashed connector joining this card to the next (desktop only) */}
                {!last && (
                  <span
                    aria-hidden
                    className="absolute left-full top-[3.25rem] z-0 hidden h-0 w-6 border-t-2 border-dashed border-maroon/40 lg:block"
                  />
                )}

                <Tilt className="h-full" max={4} lift={-8}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_12px_32px_-16px_rgba(2,20,58,0.35)] ring-1 ring-navy/5 transition-shadow duration-300 hover:shadow-[0_32px_56px_-24px_rgba(2,20,58,0.5)] sm:p-7 lg:p-6">
                    {/* Accent bar sweeping in on hover */}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:scale-x-100 ${maroon ? "bg-gradient-to-r from-maroon to-[#e0566b]" : "bg-gradient-to-r from-navy-2 to-[#4a86e8]"}`}
                    />
                    {/* Big faded number watermark */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-1 -top-3 select-none font-poppins text-[6.5rem] font-bold leading-none text-navy/[0.045]"
                    >
                      {s.n}
                    </span>

                    <motion.span
                      initial={{ scale: 0, rotate: -40 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 15,
                        delay: 0.2,
                      }}
                      className={`relative grid h-14 w-14 place-items-center rounded-full font-poppins text-[1.15rem] font-semibold text-white shadow-lg ${maroon ? "bg-maroon shadow-maroon/30" : "bg-navy-2 shadow-navy-2/30"}`}
                    >
                      {s.n}
                    </motion.span>

                    <h3 className="relative mt-5 font-poppins text-[1.2rem] font-semibold leading-snug text-navy sm:text-[1.3rem] lg:text-[1.35rem]">
                      {s.title}
                    </h3>
                    <p className="relative mt-2.5 text-[0.88rem] leading-[1.7] text-ink lg:text-[0.9rem]">
                      {s.desc}
                    </p>

                    <p
                      className={`relative mt-auto flex items-center gap-2.5 border-t border-navy/10 pt-4 text-[0.78rem] ${maroon ? "font-medium text-maroon" : "text-navy-2"}`}
                    >
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${maroon ? "bg-maroon/10" : "bg-navy-2/10"}`}
                      >
                        <Icon size={15} />
                      </span>
                      {s.foot}
                    </p>
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
