"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CloudUpload,
  Download,
  FolderArchive,
  ImagePlus,
  Play,
  Share2,
} from "lucide-react";
import AutoRail from "../AutoRail";
import { Item, Reveal, SplitWords, Stagger, Tilt, ease } from "../motion";
import { share, videos } from "./data";

/* ───────────────────────── Videos ───────────────────────── */

/*
  Layout:
  - mobile / tablet: cards sit beside each other in ONE horizontal swipe row
  - desktop (lg+):   3 equal columns, no scrolling
*/
const videoRow =
  "mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 " +
  "lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible lg:px-0 lg:pb-0";

const videoItem =
  "w-[72%] shrink-0 snap-center sm:w-[44%] lg:h-full lg:w-auto lg:min-w-0 lg:shrink";

export function Videos() {
  return (
    <section id="videos" className="bg-white pb-12 pt-6 sm:pb-16 lg:pb-24">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <Reveal x={-30} y={0}>
              <p className="t-label">Motion &amp; Audio Visuals</p>
            </Reveal>
            <h2 className="t-h2 mt-1 [font-size:clamp(1.6rem,1.1rem+1.8vw,2.8rem)]">
              <SplitWords text="Echoes of Praise & Living Sermon" inView />
            </h2>
          </div>

          <Reveal delay={0.15}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-maroon/20 px-5 py-2.5 font-poppins text-sm font-medium text-maroon transition-colors hover:bg-maroon hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
            >
              Visit YouTube Channel
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        {/* Cards */}
        <AutoRail>
          <Stagger className={videoRow} stagger={0.12} amount={0.05}>
            {videos.map((v) => (
              <Item key={v.title} className={videoItem}>
                <Tilt className="h-full" max={2.5} lift={-6}>
                  <motion.article
                    initial="rest"
                    whileHover="hover"
                    whileTap="hover"
                    animate="rest"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-[0_10px_30px_-12px_rgba(2,20,58,0.35)] ring-1 ring-[#e6eaf4] transition-shadow duration-500 hover:shadow-[0_24px_50px_-16px_rgba(2,20,58,0.45)]"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-navy-2">
                      <motion.img
                        src={v.img}
                        alt={v.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.07 },
                        }}
                        transition={{ duration: 0.9, ease }}
                      />

                      {/* Scrim: darker at the bottom for legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02143a]/70 via-[#02143a]/10 to-transparent" />

                      {/* Tag */}
                      <span
                        className={`absolute left-3 top-3 rounded-full px-3 py-1 font-poppins text-xs font-medium backdrop-blur-sm ${v.tagClass}`}
                      >
                        {v.tag}
                      </span>

                      {/* Play button: ring ripples only when the card is engaged */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-white/40"
                          variants={{
                            rest: { scale: 1, opacity: 0 },
                            hover: {
                              scale: [1, 1.9],
                              opacity: [0.55, 0],
                              transition: {
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeOut",
                              },
                            },
                          }}
                        />
                        <motion.span
                          variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.12 },
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 20,
                          }}
                          className="relative grid h-12 w-12 place-items-center rounded-full bg-white text-navy-2 shadow-xl sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                        >
                          <Play
                            size={20}
                            fill="currentColor"
                            className="ml-0.5"
                          />
                        </motion.span>
                      </div>

                      {/* Duration */}
                      <span className="absolute bottom-3 right-3 rounded-md bg-black/65 px-2 py-1 font-poppins text-xs font-medium text-white backdrop-blur-sm">
                        {v.dur}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                      <p className="text-xs font-medium text-ink/70 sm:text-sm">
                        {v.views}
                      </p>
                      <h3 className="mt-2 line-clamp-2 font-poppins text-base font-medium leading-snug text-navy sm:text-lg lg:text-xl">
                        {v.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink sm:line-clamp-3 sm:text-[0.95rem]">
                        {v.desc}
                      </p>

                      <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#eceff5] pt-4">
                        <span className="truncate text-xs font-medium text-ink sm:text-sm">
                          {v.foot}
                        </span>
                        <motion.button
                          type="button"
                          aria-label={`Share ${v.title}`}
                          onClick={() => share(v.title)}
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.92 }}
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-maroon transition-colors hover:bg-maroon/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-maroon sm:text-sm"
                        >
                          <Share2 size={14} /> Share
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                </Tilt>
              </Item>
            ))}
          </Stagger>
        </AutoRail>
      </div>
    </section>
  );
}

/* ───────────────────────── Contribute ───────────────────────── */

const tile =
  "group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-center backdrop-blur-sm transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.1] sm:p-8 lg:items-start lg:text-left";

const btnBase =
  "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-poppins text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto";

export function Contribute() {
  return (
    <section id="contribute" className="bg-white pb-14 sm:pb-20 lg:pb-24">
      <div className="container-x">
        <Reveal y={40}>
          <div className="relative overflow-hidden rounded-3xl bg-navy-2 p-5 shadow-[0_30px_60px_-30px_rgba(2,20,58,0.7)] sm:p-8 lg:p-12">
            {/* Static atmosphere: one warm glow, one cool glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-maroon/40 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#4663c7]/30 blur-3xl"
            />

            <div className="relative">
              <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
                <h3 className="font-poppins font-medium text-white [font-size:clamp(1.4rem,1rem+1.2vw,2.2rem)]">
                  Help us preserve the history of grace
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                  Share your photographs, or download our official media kit.
                </p>
              </div>

              <Stagger
                className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-2 lg:gap-6"
                stagger={0.15}
                amount={0.1}
              >
                {/* Contribute */}
                <Item>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.4, ease }}
                    className={tile}
                  >
                    <motion.span
                      whileHover={{ rotate: -8, scale: 1.08 }}
                      className="grid h-12 w-12 place-items-center rounded-xl bg-white text-navy-2"
                    >
                      <CloudUpload size={22} />
                    </motion.span>
                    <h4 className="mt-5 font-poppins text-lg font-medium text-white sm:text-xl">
                      Contribute to the Archive
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                      Were you at a recent convention, wedding, or community
                      event?
                      <span className="hidden sm:inline">
                        {" "}
                        Send us your high-resolution JPEG or RAW files.
                      </span>
                    </p>
                    <motion.a
                      href="/about#visit"
                      whileTap={{ scale: 0.97 }}
                      className={`${btnBase} shimmer bg-white text-maroon hover:bg-[#f3f5ff]`}
                    >
                      <ImagePlus size={16} /> Submit Your Media
                    </motion.a>
                  </motion.div>
                </Item>

                {/* Media kit */}
                <Item>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.4, ease }}
                    className={tile}
                  >
                    <motion.span
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className="grid h-12 w-12 place-items-center rounded-xl bg-maroon text-white"
                    >
                      <FolderArchive size={22} />
                    </motion.span>
                    <h4 className="mt-5 font-poppins text-lg font-medium text-white sm:text-xl">
                      Press &amp; Media Kit
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                      Church seals, leadership portraits, and approved
                      typography
                      <span className="hidden sm:inline">
                        {" "}
                        for bulletins and news coverage
                      </span>
                      .
                    </p>
                    <motion.a
                      href="#"
                      whileTap={{ scale: 0.97 }}
                      className={`${btnBase} border border-white/30 text-white hover:bg-white/10`}
                    >
                      <Download size={16} /> Download Kit (ZIP, 84MB)
                    </motion.a>
                  </motion.div>
                </Item>
              </Stagger>

              {/* Policy: collapsed by default so it never crowds the cards */}
              <details className="group mt-6 border-t border-white/10 pt-4 text-center lg:text-left">
                <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white sm:text-sm [&::-webkit-details-marker]:hidden">
                  Archival &amp; privacy policy
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-white/60 sm:text-sm lg:mx-0">
                  All media gathered at English Chapel Sanctuary of Peace is
                  subject to District Secretariat governance. We prioritize holy
                  decorum, personal discretion, and non-commercial reverence in
                  all documentation.
                </p>
              </details>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
