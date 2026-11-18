"use client";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { fellowships } from "./data";

export const interest = (name: string) => {
  window.dispatchEvent(new CustomEvent("ministry-interest", { detail: name }));
  document
    .getElementById("volunteer")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Fellowships() {
  return (
    <section
      id="fellowships"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#f6f8ff] py-12 sm:py-16 lg:py-24"
    >
      {/* Soft decorative glow */}
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none -right-32 top-10 h-72 w-72 bg-maroon/5 blur-3xl"
      />

      <div className="relative container-x">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="max-w-[42rem]">
            <Reveal x={-30} y={0}>
              <p className="t-label">Foundational Pillars</p>
            </Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.6rem,1.05rem+1.9vw,2.8rem)] [text-wrap:balance]">
              <SplitWords text="Core Congregational Fellowships" inView />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-3 text-[0.9rem] leading-[1.7] text-ink sm:text-[0.98rem]">
                From childhood discipleship to senior spiritual fathers, our
                core demographic fellowships cultivate spiritual maturity,
                mutual accountability, and lifelong brotherhood.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="hidden items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-1.5 text-[0.8rem] font-semibold text-navy-2 shadow-sm sm:inline-flex">
              <span className="w-2 h-2 rounded-full bg-maroon" /> Primary
              department arms
            </p>
          </Reveal>
        </div>

        {/*
          Mobile: swipeable snap carousel with a peek of the next card.
          Tablet: 2 columns. Desktop: cards sit side by side in a responsive grid.
        */}
        <Stagger
          stagger={0.1}
          amount={0.05}
          className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 sm:[&>*:nth-child(3)]:col-span-2 lg:grid-cols-3 lg:gap-7 lg:[&>*:nth-child(3)]:col-span-1"
        >
          {fellowships.slice(0, 3).map((f) => (
            <Item key={f.title} className="h-full">
              <Tilt className="h-full" max={4} lift={-8}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_-16px_rgba(2,20,58,0.35)] ring-1 ring-navy/5 transition-shadow duration-300 hover:shadow-[0_32px_56px_-24px_rgba(2,20,58,0.5)]">
                  {/* Accent bar that sweeps in on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-maroon to-[#e0566b] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:scale-x-100"
                  />

                  <div className="relative aspect-[16/8] overflow-hidden sm:aspect-[16/9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.img}
                      alt={f.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110 motion-reduce:transition-none"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[0.66rem] font-semibold text-navy-2 shadow backdrop-blur">
                      {f.tag}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-full bg-maroon/90 px-2.5 py-1 text-[0.66rem] font-medium text-white backdrop-blur">
                      {f.verse}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-poppins text-[1.15rem] font-semibold leading-snug text-navy sm:text-[1.25rem]">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[0.85rem] leading-[1.65] text-ink">
                      {f.desc}
                    </p>

                    <ul className="my-4 space-y-2.5 border-t border-navy/10 pt-4 text-[0.78rem] text-navy-2">
                      <li className="flex items-start gap-2.5">
                        <span className="grid w-6 h-6 mt-px rounded-full shrink-0 place-items-center bg-maroon/10 text-maroon">
                          <Clock size={13} />
                        </span>
                        <span className="pt-0.5">{f.sched}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="grid w-6 h-6 mt-px rounded-full shrink-0 place-items-center bg-maroon/10 text-maroon">
                          <CalendarDays size={13} />
                        </span>
                        <span className="pt-0.5">{f.when}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="grid w-6 h-6 mt-px rounded-full shrink-0 place-items-center bg-maroon/10 text-maroon">
                          <MapPin size={13} />
                        </span>
                        <span className="pt-0.5">{f.where}</span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      onClick={() => interest(f.title)}
                      className="mt-auto inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl border border-maroon px-4 text-[0.85rem] font-semibold text-maroon transition-colors duration-300 hover:bg-maroon hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon active:scale-[0.98]"
                    >
                      Join Our Fellowship
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      />
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
