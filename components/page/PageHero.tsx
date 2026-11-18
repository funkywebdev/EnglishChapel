"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ParallaxImage, Reveal, SplitWords, ease } from "../motion";

export type HeroLine = { text: string; className?: string; br?: boolean };

/** Shared hero used by Gallery / Business / Donations: breadcrumb, split headline, copy, actions + framed photo. */
export default function PageHero({
  crumb,
  lines,
  body,
  image,
  imageAlt,
  imageClass = "aspect-[640/484]",
  size = "lg",
  children,
}: {
  size?: "lg" | "md";
  crumb: string;
  lines: HeroLine[];
  body: string;
  image: string;
  imageAlt: string;
  imageClass?: string;
  children?: ReactNode;
}) {
  let delay = 0.2;
  return (
    <section className="relative overflow-hidden bg-[#f3f5ff] pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-[3.4rem]">
      <motion.div aria-hidden className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-maroon/10 blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-navy-2/10 blur-3xl" animate={{ scale: [1.15, 1, 1.15] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />

      <div className="container-x relative grid items-start gap-8 lg:grid-cols-[1.72fr_1fr] lg:gap-[4.5rem]">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-[0.66rem] font-medium uppercase tracking-wide text-navy-2 sm:text-[0.8rem] lg:mt-3"
          >
            Osogbo District Headquarters <span className="mx-1">/</span>
            <span className="text-maroon">{crumb}</span>
          </motion.p>

          <h1 className={`mt-5 font-poppins font-semibold text-navy-2 ${size === "lg" ? "[font-size:clamp(1.95rem,1rem+3.55vw,5.2rem)]" : "[font-size:clamp(1.9rem,1rem+2.46vw,3.86rem)]"} [line-height:1.42] sm:mt-6`}>
            {lines.map((l) => {
              const d = delay;
              delay += l.text.split(" ").length * 0.07 + 0.15;
              return (
                <span key={l.text} className={`block ${l.br ? "" : "lg:inline"} ${l.className ?? ""}`}>
                  <SplitWords text={l.text} delay={d} />{" "}
                </span>
              );
            })}
          </h1>

          <Reveal delay={0.6} y={30}>
            <p className="mx-auto mt-5 max-w-[42rem] text-[0.95rem] leading-[1.75] text-ink sm:text-[1.1rem] lg:mx-0 lg:max-w-[58rem] lg:[font-size:clamp(1.1rem,0.7rem+0.7vw,1.4rem)]">
              {body}
            </p>
          </Reveal>
          {children && (
            <Reveal delay={0.8} y={24} className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
              {children}
            </Reveal>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[34rem] lg:max-w-none"
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
            <ParallaxImage src={image} alt={imageAlt} className={`w-full shadow-[0_30px_60px_-30px_rgba(2,20,58,0.45)] ${imageClass}`} round={26} intensity={4} priority />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
