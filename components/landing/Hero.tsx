"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BookOpen, Sun, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { ease } from "../motion";
import Typewriter from "./Typewriter";

const MLink = motion.create(Link);

export default function LandingHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const lift = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section id="home" ref={ref} className="relative isolate overflow-hidden bg-navy text-white">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src="/images/landing/hero.jpg"
          alt=""
          initial={{ scale: 1.28 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 2.6, ease }}
          className="h-[118%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-navy/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/25" />
      </motion.div>

      {/* drifting light motes */}
      {[...Array(7)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full bg-white/30 blur-[1px]"
          style={{ left: `${8 + i * 13}%`, top: `${20 + ((i * 17) % 55)}%`, width: 3 + (i % 3) * 2, height: 3 + (i % 3) * 2 }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        style={{ opacity: fade, y: lift }}
        className="container-x grid items-center gap-8 py-10 sm:min-h-[560px] sm:py-20 lg:min-h-[740px] lg:grid-cols-[1.35fr_0.75fr] lg:gap-12 2xl:min-h-[820px]"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2 text-[0.62rem] font-medium uppercase tracking-wide backdrop-blur-md sm:px-4 sm:text-[0.74rem]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a73] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5a73]" />
            </span>
            Osogbo District Headquarters • Osun State
          </motion.p>

          <h1 className="mt-5 font-poppins font-semibold leading-[1.15] text-white [font-size:clamp(1.9rem,1rem+4.2vw,5.4rem)] sm:mt-8">
            <Typewriter lines={["A Place of Peace.", "A People of Faith."]} delay={0.7} speed={0.065} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease, delay: 3.0 }}
            className="mt-4 max-w-[34rem] text-[0.92rem] leading-[1.65] text-white/85 sm:mt-7 sm:text-[1.12rem] sm:leading-[1.75] lg:text-[1.2rem]"
          >
            <span className="sm:hidden">A welcoming church family where faith grows and lives are transformed.</span>
            <span className="hidden sm:inline">Discover a welcoming church family where faith grows, lives are transformed, and everyone has a sacred place to belong.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 3.2 }}
            className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-10 sm:flex sm:gap-4"
          >
            <MLink
              href="/about#visit"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="shimmer inline-flex items-center justify-center gap-2 rounded-lg bg-maroon px-4 py-3 font-poppins text-[0.85rem] font-medium text-white shadow-lg shadow-maroon/40 sm:px-7 sm:py-3.5 sm:text-[0.95rem]"
            >
              Plan Your Visit <ArrowRight size={17} />
            </MLink>
            <MLink
              href="/ministries"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-3 font-poppins text-[0.85rem] font-medium text-navy-2 shadow-lg sm:px-7 sm:py-3.5 sm:text-[0.95rem]"
            >
              <span className="sm:hidden">Ministries</span><span className="hidden sm:inline">Explore Our Ministries</span>
            </MLink>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 70, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease, delay: 1.1 }}
          className="lg:justify-self-end lg:self-start lg:mt-[4.5rem] w-full lg:max-w-[26rem]"
          aria-label="Service times"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl bg-white/95 p-4 text-navy shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2.5 font-poppins text-[1.05rem] font-semibold">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-mist text-navy-2">
                  <BookOpen size={17} />
                </span>
                Service Times
              </h2>
              <span className="rounded-md bg-mist px-2.5 py-1 text-[0.68rem] font-semibold text-navy-2">Weekly</span>
            </div>

            <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
              {[
                { icon: <Sun size={16} />, t: "Sunday Worship Services", s: "1st Service 8:00 AM · 2nd Service 10:30 AM" },
                { icon: <BookOpen size={16} />, t: "Wednesday Mid-Week Service", s: "Bible Study & Prayer · 05:30 PM" },
              ].map((r, i) => (
                <motion.li
                  key={r.t}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease, delay: 1.6 + i * 0.15 }}
                  className="flex gap-3"
                >
                  <span className="mt-0.5 text-maroon">{r.icon}</span>
                  <span>
                    <span className="block font-poppins text-[0.92rem] font-medium">{r.t}</span>
                    <span className="block text-[0.8rem] text-ink">{r.s}</span>
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-4 flex items-end justify-between gap-4 border-t border-navy/10 pt-4">
              <div>
                <p className="text-[0.62rem] font-medium uppercase tracking-wider text-ink">Sanctuary Address</p>
                <p className="mt-1 font-poppins text-[0.9rem] font-medium">Osogbo District HQ, Osun State</p>
              </div>
              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Osogbo+Osun+State+Nigeria"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 3, y: -3 }}
                className="flex shrink-0 items-center gap-1 text-[0.82rem] font-semibold text-maroon"
              >
                Directions <ArrowUpRight size={15} />
              </motion.a>
            </div>
          </motion.div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
