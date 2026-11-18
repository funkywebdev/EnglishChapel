"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal, SplitWords, Tilt } from "../motion";
import { stories } from "./data";

export default function Stories() {
  const loop = [...stories, ...stories]; // duplicated for a seamless loop

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

        {/* pt-6 keeps the quote badge from being clipped */}
        <div className="marquee mt-12 overflow-hidden pt-6 lg:mt-16">
          <div className="marquee-track">
            {loop.map((s, i) => {
              const maroon = s.tone === "maroon";
              const isClone = i >= stories.length;
              return (
                <div
                  key={`${s.name}-${i}`}
                  aria-hidden={isClone || undefined}
                  className="w-[85vw] shrink-0 pr-5 sm:w-[24rem] sm:pr-6 lg:w-[26rem]"
                >
                  <Tilt className="h-full" max={4} lift={-8}>
                    <figure
                      className={`relative flex h-full flex-col rounded-xl border bg-white p-6 pt-9 sm:p-7 sm:pt-10 ${maroon ? "border-maroon/50" : "border-navy-2/40"}`}
                    >
                      <motion.span
                        initial={{ scale: 0, rotate: -30 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 16,
                          delay: 0.4,
                        }}
                        className={`absolute -top-5 right-6 grid h-11 w-11 place-items-center rounded-lg text-white shadow-lg ${maroon ? "bg-maroon" : "bg-navy-2"}`}
                      >
                        <Quote size={18} fill="currentColor" />
                      </motion.span>
                      <blockquote className="text-[0.85rem] leading-[1.7] text-ink sm:text-[0.9rem] sm:leading-[1.8]">
                        {s.q}
                      </blockquote>
                      <figcaption className="mt-auto flex items-center justify-center gap-3.5 pt-6 lg:justify-start">
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-poppins text-[0.82rem] font-medium text-white ${maroon ? "bg-maroon" : "bg-navy-2"}`}
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
                  </Tilt>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
