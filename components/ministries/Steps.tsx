"use client";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, UserRoundCheck } from "lucide-react";
import { Item, Reveal, SplitWords, Stagger, Tilt, ease } from "../motion";
import { rail, railItem } from "../landing/Events";
import { steps } from "./data";

const icons = { user: UserRoundCheck, shield: ShieldCheck, heart: HeartHandshake };

export default function Steps() {
  return (
    <section id="how" className="scroll-mt-20 bg-white py-10 sm:py-16 lg:py-[5rem]">
      <div className="container-x">
        <div className="text-center">
          <Reveal><p className="t-label">Doctrinal Creed</p></Reveal>
          <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]"><SplitWords text="What we believe & Preach" inView /></h2>
          <Reveal delay={0.1}><p className="mx-auto mt-3 max-w-[36rem] text-[0.88rem] text-ink sm:text-[0.95rem]">Our confession of faith rooted strictly in the infallible Word of God.</p></Reveal>
        </div>
        <Stagger className={`mt-8 lg:mt-12 ${rail}`} stagger={0.14} amount={0.05}>
          {steps.map((s) => {
            const Icon = icons[s.icon];
            const maroon = s.tone === "maroon";
            return (
              <Item key={s.n} className={`${railItem} md:h-full`}>
                <Tilt className="h-full" max={4} lift={-8}>
                  <article className="flex h-full flex-col rounded-xl bg-[#fafbff] p-6 shadow-[0_10px_30px_-16px_rgba(2,20,58,0.3)] sm:p-8">
                    <motion.span
                      initial={{ scale: 0, rotate: -40 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 240, damping: 15, delay: 0.2 }}
                      className={`grid h-12 w-12 place-items-center rounded-full font-poppins text-[1.05rem] font-semibold text-white ${maroon ? "bg-maroon" : "bg-navy-2"}`}
                    >
                      {s.n}
                    </motion.span>
                    <h3 className="mt-5 font-poppins text-[1.2rem] font-medium text-navy sm:text-[1.4rem]">{s.title}</h3>
                    <p className="mt-2.5 line-clamp-4 text-[0.84rem] leading-[1.7] text-ink sm:line-clamp-none sm:text-[0.9rem]">{s.desc}</p>
                    <p className={`mt-auto flex items-center gap-2 pt-5 text-[0.76rem] ${maroon ? "font-medium text-maroon" : "text-navy-2"}`}><Icon size={15} />{s.foot}</p>
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
