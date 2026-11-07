
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, GraduationCap, Landmark, Wheat } from "lucide-react";
import { Reveal, SplitWords } from "../motion";
import { impact } from "./data";

const icons = { hub: Landmark, agro: Wheat, edu: GraduationCap };

export default function Impact() {
  const reduce = useReducedMotion();
  // Two identical copies so the loop is seamless
  const loop = [...impact, ...impact];

  return (
    <section
      id="business"
      className="bg-white pb-14 pt-2 sm:pb-20 lg:pb-[5.5rem]"
    >
      <div className="container-x">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal x={-30} y={0}>
              <p className="t-label">Socio-Economic Development</p>
            </Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
              <SplitWords
                text="Building Opportunities. Creating Impact"
                inView
              />
            </h2>
          </div>
          <Reveal delay={0.15} className="hidden max-w-[28rem] sm:block">
            <p className="t-small text-[#52525b]">
              Empowering families, uplifting entrepreneurs, and fostering
              self-reliance across the Osogbo district through Kingdom
              stewardship.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-width marquee with faded edges */}
      <div
        className="mt-7 overflow-hidden py-4 lg:mt-12"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <motion.div
          className="flex w-max items-stretch"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{
            duration: impact.length * 9, // raise for slower, lower for faster
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {loop.map((c, i) => {
            const Icon = icons[c.icon];
            const isClone = i >= impact.length;
            return (
              <div
                key={`${c.title}-${i}`}
                aria-hidden={isClone || undefined}
                className="mr-5 w-[290px] shrink-0 sm:mr-6 sm:w-[380px]"
              >
                <article className="group flex h-full flex-col rounded-2xl bg-mist p-6 transition-shadow duration-300 hover:shadow-[0_30px_50px_-22px_rgba(2,20,58,0.4)] sm:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-navy-2 shadow-sm transition-colors duration-300 group-hover:bg-navy-2 group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-poppins text-[1.15rem] font-medium leading-snug text-navy sm:text-[1.3rem]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] leading-[1.65] text-ink sm:mt-3 sm:text-[0.86rem] sm:leading-[1.7]">
                    {c.desc}
                  </p>
                  <p className="mt-5 break-all rounded-lg bg-white px-3.5 py-2.5 text-[0.74rem] text-navy-2">
                    Inquiries: {c.mail}
                  </p>
                  <a
                    href="#"
                    tabIndex={isClone ? -1 : undefined}
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.85rem] font-semibold text-maroon"
                  >
                    Learn More{" "}
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </a>
                </article>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
