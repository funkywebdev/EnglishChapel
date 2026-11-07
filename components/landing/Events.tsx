"use client";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { events } from "./data";

export const rail =
  "-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:gap-8";
export const railItem = "w-[84%] shrink-0 snap-center sm:w-[60%] md:w-auto";

export default function Events() {
  return (
    <section id="events" className="bg-mist py-10 sm:py-20 lg:py-[5.5rem]">
      <div className="container-x">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Reveal x={-30} y={0}><p className="t-label">Sanctuary Calendar</p></Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
              <SplitWords text="Be Part of What’s Happening" inView />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <a href="#" className="whitespace-nowrap text-[0.85rem] font-semibold text-maroon underline-offset-4 hover:underline">View All Events</a>
          </Reveal>
        </div>

        <Stagger className={`mt-7 lg:mt-12 ${rail}`} stagger={0.14} amount={0.05}>
          {events.map((e) => (
            <Item key={e.title} className={`${railItem} md:h-full`}>
              <Tilt className="h-full" max={4} lift={-8}>
                <article className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_8px_24px_-12px_rgba(2,20,58,0.25)] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.4)] sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="overflow-hidden rounded-xl bg-navy-2 text-center text-white">
                      <p className="bg-maroon px-4 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider">{e.month}</p>
                      <p className="px-4 py-1.5 font-poppins text-[1.5rem] font-semibold leading-none">{e.day}</p>
                    </div>
                    <span className="rounded-md bg-mist px-3 py-1 text-[0.7rem] font-semibold text-navy-2">{e.tag}</span>
                  </div>
                  <h3 className="mt-5 font-poppins text-[1.2rem] font-medium text-navy sm:text-[1.35rem]">{e.title}</h3>
                  <p className="mt-2 line-clamp-3 text-[0.84rem] leading-[1.65] text-ink sm:mt-2.5 sm:line-clamp-none sm:text-[0.86rem] sm:leading-[1.7]">{e.desc}</p>
                  <ul className="mt-4 space-y-2 text-[0.8rem] text-navy-2">
                    <li className="flex items-start gap-2.5"><Clock size={15} className="mt-0.5 shrink-0 text-maroon" />{e.when}</li>
                    <li className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 shrink-0 text-maroon" />{e.where}</li>
                  </ul>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="shimmer mt-auto block rounded-lg bg-maroon py-3 text-center font-poppins text-[0.88rem] font-medium text-white"
                    style={{ marginTop: "1.5rem" }}
                  >
                    {e.cta}
                  </motion.a>
                </article>
              </Tilt>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
