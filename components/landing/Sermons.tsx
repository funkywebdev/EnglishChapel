"use client";
import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import { Item, ParallaxImage, Reveal, SplitWords, Stagger } from "../motion";
import { sermons } from "./data";

export default function Sermons() {
  return (
    <section id="sermons" className="bg-white py-10 sm:py-20 lg:py-[5.5rem]">
      <div className="container-x">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal x={-30} y={0}>
              <p className="t-label flex items-center gap-2.5"><span className="h-2 w-2 rounded-full bg-maroon" />District Media Pulpit</p>
            </Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
              <SplitWords text="Grow in the Word." inView />
            </h2>
          </div>
          <Reveal delay={0.15} className="flex flex-wrap gap-3">
            <motion.a href="#" whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-2.5 rounded-lg bg-maroon px-6 py-3 font-poppins text-[0.85rem] font-medium text-white shadow-lg shadow-maroon/25">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" /><span className="relative h-2 w-2 rounded-full bg-white" /></span>
              Watch Live Stream
            </motion.a>
            <motion.a href="#" whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }} className="rounded-lg border border-maroon px-6 py-3 font-poppins text-[0.85rem] font-medium text-maroon transition-colors hover:bg-maroon hover:text-white">
              Explore All Sermons
            </motion.a>
          </Reveal>
        </div>

        <div className="mt-9 grid gap-6 lg:mt-12 lg:grid-cols-[1.55fr_1fr] lg:gap-8">
          <Reveal y={50}>
            <article className="h-full overflow-hidden rounded-3xl bg-navy-2 text-white shadow-2xl shadow-navy/25">
              <div className="relative">
                <ParallaxImage src="/images/landing/sermon-featured.jpg" alt="Featured message" className="aspect-[16/9] w-full lg:aspect-[16/8.2]" round={0} intensity={3} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-2/80 via-navy/10 to-navy/30" />
                <span className="absolute left-4 top-4 rounded-md bg-maroon px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-wider sm:left-6 sm:top-6">Featured Message</span>
                <motion.button
                  type="button"
                  aria-label="Play featured message"
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                  className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-maroon shadow-2xl sm:h-20 sm:w-20"
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-white/50" />
                  <Play size={26} fill="currentColor" className="relative ml-1" />
                </motion.button>
                <div className="absolute inset-x-4 bottom-3 flex flex-wrap items-center justify-between gap-x-4 text-[0.72rem] text-white/90 sm:inset-x-6 sm:bottom-4 sm:text-[0.82rem]">
                  <span>Scripture: Philippians 4:6-9</span>
                  <span>Sunday, Last Lord’s Day</span>
                </div>
              </div>
              <div className="p-4 sm:p-8">
                <p className="text-[0.68rem] font-medium uppercase tracking-wider text-[#f4a39b] sm:text-[0.78rem]">Series: Overcoming Anxiety by Grace</p>
                <h3 className="mt-2 font-poppins font-semibold [font-size:clamp(1.4rem,1rem+1.1vw,2.1rem)]">Walking in Divine Peace &amp; Victory</h3>
                <p className="mt-2 line-clamp-2 max-w-[42rem] text-[0.85rem] leading-[1.65] text-white/80 sm:mt-3 sm:line-clamp-none sm:text-[0.9rem] sm:leading-[1.7]">
                  An expository teaching by our District Pastor on claiming the peace of God amid turbulent personal and national seasons.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 text-[0.82rem]">
                  <span className="text-white/90">Speaker: Rev. District Overseer</span>
                  <a href="#" className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-white"><Download size={15} />Audio (MP3)</a>
                </div>
              </div>
            </article>
          </Reveal>

          <Stagger className="flex flex-col gap-4 lg:gap-5" stagger={0.14}>
            {sermons.map((s) => (
              <Item key={s.title} className="flex-1">
                <motion.a
                  href="#"
                  whileHover={{ x: 6, backgroundColor: "#e6ebff" }}
                  className="group flex h-full items-center gap-4 rounded-2xl bg-mist p-3.5 sm:gap-5 sm:p-4"
                >
                  <div className="relative aspect-[4/3] w-[7.2rem] shrink-0 overflow-hidden rounded-xl sm:w-[9.5rem]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute inset-0 grid place-items-center bg-navy/30">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-maroon transition-transform duration-300 group-hover:scale-110"><Play size={14} fill="currentColor" className="ml-0.5" /></span>
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.66rem] font-medium text-maroon sm:text-[0.74rem]">{s.series}</p>
                    <h3 className="mt-0.5 font-poppins text-[0.95rem] font-medium leading-snug text-navy sm:text-[1.1rem]">{s.title}</h3>
                    <p className="mt-1.5 text-[0.72rem] text-ink sm:text-[0.8rem]">{s.by} • {s.mins} mins</p>
                    <p className="text-[0.72rem] text-ink sm:text-[0.8rem]">{s.date} • {s.verse}</p>
                  </div>
                </motion.a>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
