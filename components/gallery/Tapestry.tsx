"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronDown, Church, Clock, Maximize2, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { Reveal, SplitWords, ease } from "../motion";
import { IMG, moreTiles, tiles, type Tile } from "./data";

const icons = { pin: MapPin, clock: Clock, cal: Calendar, users: Users, church: Church };
const TOTAL = 142;

function Card({ t, i, onOpen }: { t: Tile; i: number; onOpen: (src: string, title: string) => void }) {
  return (
    <motion.button
      type="button"
      layout
      onClick={() => onOpen(IMG, t.title)}
      initial={{ opacity: 0, y: 60, scale: 0.94, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease, delay: (i % 3) * 0.08 }}
      whileHover="hover"
      className={`group relative min-h-[15rem] overflow-hidden rounded-[0.9rem] text-left shadow-[0_14px_30px_-20px_rgba(2,20,58,0.5)] ${t.tall ? "min-h-[26rem]" : ""} ${t.pos} lg:min-h-0`}
      aria-label={`Inspect ${t.title}`}
    >
      <motion.img
        src={IMG}
        alt={t.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        variants={{ hover: { scale: 1.08 } }}
        transition={{ duration: 0.9, ease }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-[#02143a]/90" />

      <motion.span
        variants={{ hover: { scale: 1.15, rotate: 90, backgroundColor: "#5c0012" } }}
        className="absolute right-4 top-auto bottom-4 grid h-9 w-9 place-items-center rounded-full bg-white/25 text-white backdrop-blur-sm sm:right-5 sm:h-11 sm:w-11"
        style={t.tall ? undefined : undefined}
      >
        <Maximize2 size={16} />
      </motion.span>

      <motion.div variants={{ hover: { y: -8 } }} transition={{ duration: 0.5, ease }} className="absolute inset-x-0 bottom-0 p-4 pr-16 sm:p-6 sm:pr-20 lg:pb-7">
        <span className="inline-block rounded-md bg-maroon px-2.5 py-1 font-poppins text-[0.64rem] font-medium text-white sm:text-[0.78rem]">{t.tag}</span>
        <h3 className="mt-2.5 font-poppins font-medium leading-[1.4] text-white [font-size:clamp(1rem,0.7rem+0.8vw,1.55rem)]">{t.title}</h3>
        {t.meta.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.68rem] text-white/80 sm:text-[0.82rem]">
            {t.meta.map((m) => {
              const I = icons[m.icon];
              return (
                <span key={m.text} className="flex items-center gap-1.5">
                  <I size={13} /> {m.text}
                </span>
              );
            })}
          </div>
        )}
      </motion.div>
    </motion.button>
  );
}

export default function Tapestry({ onOpen }: { onOpen: (src: string, title: string) => void }) {
  const [extra, setExtra] = useState(0);
  const shown = tiles.length + extra;
  const list = [...tiles, ...moreTiles.slice(0, extra)];
  return (
    <section id="tapestry" className="bg-white py-10 sm:py-14 lg:py-[4.2rem]">
      <div className="container-x">
        <div className="flex flex-col gap-3 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <Reveal x={-30} y={0}><p className="t-label">Curated Portfolio</p></Reveal>
            <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]"><SplitWords text="The Photography Tapestry" inView /></h2>
          </div>
          <Reveal delay={0.15}>
            <p className="mx-auto max-w-[27rem] text-[0.86rem] leading-[1.85] tracking-[0.01em] text-ink sm:text-[0.98rem] lg:mx-0 lg:mb-1">
              A living chronicle of life, devotion, and compassion. Hover any image to view event provenance or click to inspect high-resolution prints.
            </p>
          </Reveal>
        </div>

        <motion.div layout className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-12 lg:gap-[clamp(1rem,1.9vw,2.05rem)] lg:[grid-auto-rows:clamp(5.5rem,9.9vw,11.6rem)]">
          {list.map((t, i) => (
            <Card key={`${t.title}-${i}`} t={t} i={i} onOpen={onOpen} />
          ))}
        </motion.div>

        <Reveal className="mt-10 text-center" y={20}>
          <p className="text-[0.7rem] uppercase text-ink sm:text-[0.82rem]">Showing {shown} of {TOTAL} documented moments</p>
          <motion.button
            type="button"
            disabled={extra >= moreTiles.length}
            onClick={() => setExtra((e) => Math.min(moreTiles.length, e + 3))}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="shimmer mt-3 inline-flex items-center gap-2 rounded-lg bg-maroon px-9 py-3 font-medium text-white shadow-[0_14px_24px_-12px_rgba(92,0,18,0.7)] disabled:opacity-60 sm:text-[0.95rem]"
          >
            Load More Photos
            <motion.span animate={{ y: [0, 3, 0] }} transition={{ duration: 1.4, repeat: Infinity }}><ChevronDown size={16} /></motion.span>
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}

export function Lightbox({ item, onClose }: { item: { src: string; title: string } | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="lb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] grid place-items-center bg-[#02143a]/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <motion.figure
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 30, opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[min(92vw,62rem)] overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.title} className="max-h-[75vh] w-full object-contain bg-black" />
            <figcaption className="flex items-center justify-between gap-4 px-5 py-3 font-poppins text-[0.95rem] text-navy">
              {item.title}
              <button type="button" onClick={onClose} className="rounded-md bg-maroon px-4 py-1.5 text-[0.82rem] text-white">Close</button>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
