"use client";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { fellowships } from "./data";

export const interest = (name: string) => {
  window.dispatchEvent(new CustomEvent("ministry-interest", { detail: name }));
  document.getElementById("volunteer")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Fellowships() {
  return (
    <section id="fellowships" className="bg-white py-10 sm:py-16 lg:py-[5rem]">
      <div className="container-x">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[40rem]">
            <Reveal x={-30} y={0}><p className="t-label">Foundational Pillars</p></Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]"><SplitWords text="Core Congregational Fellowships" inView /></h2>
            <Reveal delay={0.1}>
              <p className="mt-3 text-[0.88rem] leading-[1.7] text-ink sm:text-[0.95rem]">
                From childhood discipleship to senior spiritual fathers, our core demographic fellowships cultivate spiritual maturity, mutual accountability, and lifelong brotherhood.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}><p className="hidden text-[0.85rem] font-semibold text-navy-2 sm:block">showing primary department arms</p></Reveal>
        </div>

        <Stagger className="mt-7 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-7" stagger={0.1} amount={0.08}>
          {fellowships.map((f) => (
            <Item key={f.title} className="h-full">
              <Tilt className="h-full" max={4} lift={-8}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-[#fafbff] shadow-[0_10px_30px_-14px_rgba(2,20,58,0.35)] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.45)]">
                  <div className="relative aspect-[16/8] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.img} alt={f.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                    <span className="absolute left-3 top-3 rounded-md bg-white px-2.5 py-1 text-[0.66rem] font-semibold text-navy-2 shadow">{f.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-2 text-[0.7rem] text-ink">
                      <span className="flex items-center gap-1.5"><Clock size={13} />{f.sched}</span>
                      <span className="shrink-0 font-medium text-navy-2">{f.verse}</span>
                    </div>
                    <h3 className="mt-2.5 font-poppins text-[1.15rem] font-medium text-navy sm:text-[1.25rem]">{f.title}</h3>
                    <p className="mt-1.5 line-clamp-3 text-[0.8rem] leading-[1.65] text-ink sm:line-clamp-none">{f.desc}</p>
                    <ul className="mt-3 space-y-1.5 text-[0.75rem] text-navy-2">
                      <li className="flex items-start gap-2"><CalendarDays size={14} className="mt-0.5 shrink-0" />{f.when}</li>
                      <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" />{f.where}</li>
                    </ul>
                    <button type="button" onClick={() => interest(f.title)} className="mt-4 inline-flex items-center gap-1.5 self-start text-[0.8rem] font-semibold text-maroon">
                      Join Our Fellowship <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </button>
                  </div>
                </article>
              </Tilt>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
