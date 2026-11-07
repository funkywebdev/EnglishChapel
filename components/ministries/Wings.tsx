"use client";
import { motion } from "framer-motion";
import { BookOpen, Clock, Flame, HandHeart, HeartHandshake, Home, User, Video } from "lucide-react";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { rail, railItem } from "../landing/Events";
import { wings } from "./data";
import { interest } from "./Fellowships";

const icons = { hand: HandHeart, video: Video, flame: Flame, book: BookOpen, care: HeartHandshake, decor: Home };

export default function Wings() {
  return (
    <section id="wings" className="bg-mist py-10 sm:py-16 lg:py-[5rem]">
      <div className="container-x">
        <Reveal x={-30} y={0}><p className="t-label">Sanctuary Operations</p></Reveal>
        <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]"><SplitWords text="Specialized Service Wings & Teams" inView /></h2>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-[40rem] text-[0.88rem] leading-[1.7] text-ink sm:text-[0.95rem]">
            The unseen and dedicated stewards ensuring seamless sanctuary order, technical excellence, relentless intercession, and hospitality for every worshipper.
          </p>
        </Reveal>

        <Stagger className={`mt-7 lg:mt-10 ${rail.replace("md:grid-cols-3", "md:grid-cols-2 lg:grid-cols-3")}`} stagger={0.1} amount={0.05}>
          {wings.map((w) => {
            const Icon = icons[w.icon];
            return (
              <Item key={w.title} className={`${railItem} md:h-full`}>
                <Tilt className="h-full" max={4} lift={-8}>
                  <article className="flex h-full flex-col rounded-xl bg-white p-5 shadow-[0_10px_30px_-16px_rgba(2,20,58,0.3)] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.4)] sm:p-6">
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-lg bg-mist text-navy-2"><Icon size={20} /></span>
                      <span className="rounded-full bg-navy-2 px-3 py-1 text-[0.64rem] font-medium text-white">{w.tag}</span>
                    </div>
                    <h3 className="mt-4 font-poppins text-[1.1rem] font-medium text-navy sm:text-[1.2rem]">{w.title}</h3>
                    <p className="mt-2 line-clamp-4 text-[0.8rem] leading-[1.65] text-ink sm:line-clamp-none">{w.desc}</p>
                    <ul className="mt-4 space-y-1.5 text-[0.74rem] text-navy-2">
                      <li className="flex items-center gap-2"><User size={13} />{w.lead}</li>
                      <li className="flex items-center gap-2"><Clock size={13} />{w.time}</li>
                    </ul>
                    <motion.button type="button" onClick={() => interest(w.title)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="shimmer mt-auto rounded-lg bg-maroon py-2.5 text-[0.82rem] font-medium text-white" style={{ marginTop: "1.25rem" }}>
                      Express Interest
                    </motion.button>
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
