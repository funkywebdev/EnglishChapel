"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal, SplitWords } from "../motion";
import { stories } from "./data";

export default function Stories() {
  const reduce = useReducedMotion();
  // Two identical copies so the loop is seamless
  const loop = [...stories, ...stories];

  return (
    <section
      id="stories"
      className="bg-white pb-14 pt-4 sm:pb-20 lg:pb-[5.5rem]"
    >
      <div className="container-x">
        <div className="text-center">
          <Reveal>
            <p className="t-label">Changed Lives</p>
          </Reveal>
          <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
            <SplitWords text="Stories of Faith and Transformation" inView />
          </h2>
          <Reveal delay={0.15}>
            <p className="t-small mx-auto mt-3 max-w-[40rem] text-[#52525b]">
              Read genuine expressions from men, women, and youth who discovered
              spiritual solace and divine renewal in our chapel.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-width marquee with faded edges */}
      <div
        className="mt-12 overflow-hidden pt-8 lg:mt-16"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <motion.div
          className="flex w-max"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{
            duration: stories.length * 9, // raise for slower, lower for faster
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {loop.map((s, i) => {
            const maroon = s.tone === "maroon";
            const isClone = i >= stories.length;
            return (
              <div
                key={`${s.name}-${i}`}
                aria-hidden={isClone || undefined}
                className="mr-5 w-[290px] shrink-0 sm:mr-6 sm:w-[380px]"
              >
                <figure
                  className={`relative flex h-full flex-col rounded-xl border bg-white p-6 pt-9 sm:p-7 sm:pt-10 ${
                    maroon ? "border-maroon/50" : "border-navy-2/40"
                  }`}
                >
                  <span
                    className={`absolute -top-5 right-6 grid h-11 w-11 place-items-center rounded-lg text-white shadow-lg ${
                      maroon ? "bg-maroon" : "bg-navy-2"
                    }`}
                  >
                    <Quote size={18} fill="currentColor" />
                  </span>
                  <blockquote className="text-[0.85rem] leading-[1.7] text-ink sm:text-[0.9rem] sm:leading-[1.8]">
                    {s.q}
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3.5 pt-6">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-poppins text-[0.82rem] font-medium text-white ${
                        maroon ? "bg-maroon" : "bg-navy-2"
                      }`}
                    >
                      {s.ini}
                    </span>
                    <span>
                      <span className="block font-poppins text-[0.9rem] font-semibold text-navy">
                        {s.name}
                      </span>
                      <span className="block text-[0.72rem] text-ink">
                        {s.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
