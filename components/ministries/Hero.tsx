"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CountUp, Item, Reveal, SplitWords, Stagger, ease } from "../motion";
import { stats } from "./data";

export default function MinistriesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist to-[#f4f6ff] pb-10 pt-8 sm:pb-14 sm:pt-12">
      <motion.div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-maroon/10 blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden className="pointer-events-none absolute -left-20 top-40 h-64 w-64 rounded-full bg-navy-2/10 blur-3xl" animate={{ scale: [1.15, 1, 1.15] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />

      <div className="container-x relative">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div>
            <motion.p
              initial={{ opacity: 0, scale: 0.8, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-block rounded-full bg-maroon px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-wider text-white sm:text-[0.68rem]"
            >
              Over 14 arms of ministry
            </motion.p>
            <h1 className="mt-5 font-poppins font-semibold leading-[1.1] text-navy [font-size:clamp(1.9rem,1rem+3.6vw,4.4rem)] sm:mt-6">
              <span className="block"><SplitWords text="Find Your Calling." delay={0.2} /></span>
              <span className="block text-[#0d4c9e]"><SplitWords text="Grow in Purpose." delay={0.55} /></span>
              <span className="block"><SplitWords text="Serve with Passion." delay={0.9} /></span>
            </h1>
          </div>

          <div className="lg:text-right">
            <Reveal delay={0.5}>
              <p className="text-[0.92rem] leading-[1.7] text-ink sm:text-[1.1rem] sm:leading-[1.75] lg:ml-auto lg:max-w-[40rem]">
                <span className="sm:hidden">Every believer is empowered to discover their divine endowments, nurture fellowship, and transform Osogbo through faithful servant leadership.</span>
                <span className="hidden sm:inline">
                  At English Chapel Sanctuary of Peace, every believer is empowered to discover their divine endowments, nurture communal fellowship, and transform Osogbo and the nations through faithful servant leadership. This is our core aim to win souls for Christ by teaching the Word of God and saving sinful lives.
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.7} className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:flex sm:gap-4 lg:justify-end">
              <motion.a href="#volunteer" whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.96 }} className="shimmer inline-flex items-center justify-center gap-2 rounded-lg bg-maroon px-4 py-3 font-poppins text-[0.85rem] font-medium text-white shadow-lg shadow-maroon/30 sm:px-9 sm:text-[0.92rem]">
                Join Our Team <ArrowRight size={16} />
              </motion.a>
              <motion.a href="#how" whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.96 }} className="inline-flex items-center justify-center rounded-lg border border-maroon bg-white/60 px-4 py-3 font-poppins text-[0.85rem] font-medium text-maroon transition-colors hover:bg-maroon hover:text-white sm:px-9 sm:text-[0.92rem]">
                How it works
              </motion.a>
            </Reveal>
          </div>
        </div>

        <Reveal y={50} delay={0.3} className="mt-8 sm:mt-12">
          <Stagger className="grid grid-cols-2 gap-y-5 rounded-2xl bg-white p-5 shadow-[0_20px_50px_-25px_rgba(2,20,58,0.35)] sm:p-8 lg:grid-cols-4 lg:gap-y-0 lg:px-10 lg:py-9" stagger={0.12}>
            {stats.map((s, i) => (
              <Item key={s.title} className={`${i % 2 === 1 ? "border-l-2 pl-4 sm:pl-6" : ""} ${i === 2 ? "lg:border-l-2 lg:pl-8" : ""} ${i === 1 || i === 3 ? "lg:pl-8" : ""} border-maroon`}>
                <p className="font-poppins font-semibold leading-none text-navy [font-size:clamp(1.7rem,1.2rem+1.6vw,2.7rem)]">
                  <CountUp to={s.to} /> <span className="text-maroon [font-size:0.55em]">{s.suffix}</span>
                </p>
                <p className="mt-2 text-[0.72rem] text-ink sm:text-[0.8rem]">{s.title}</p>
                <p className="mt-0.5 text-[0.68rem] text-[#8b8b95] sm:text-[0.74rem]">{s.sub}</p>
              </Item>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
