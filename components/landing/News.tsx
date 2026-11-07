"use client";
import { ArrowRight, Images } from "lucide-react";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { news } from "./data";

export default function News() {
  return (
    <section id="gallery" className="bg-white py-10 sm:py-20 lg:py-[5.5rem]">
      <div className="container-x">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="w-full sm:w-auto">
            <Reveal x={-30} y={0}>
              <p className="t-label">Headquarter Gazette</p>
            </Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
              <SplitWords text="The Latest from Our Church" inView />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <a
              href="#"
              className="inline-flex items-center gap-2 whitespace-nowrap text-[0.85rem] font-semibold text-maroon underline-offset-4 hover:underline"
            >
              View Full Gallery <Images size={16} />
            </a>
          </Reveal>
        </div>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
          stagger={0.14}
          amount={0.05}
        >
          {news.map((n) => (
            <Item key={n.title} className="h-full">
              <Tilt className="h-full" max={4} lift={-8}>
                <article className="group h-full overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_8px_24px_-14px_rgba(2,20,58,0.25)] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.35)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={n.img}
                      alt={n.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[0.68rem] font-semibold text-navy-2 backdrop-blur">
                      {n.tag}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[0.74rem] text-ink">{n.date}</p>
                    <h3 className="mt-1.5 font-poppins text-[1.2rem] font-medium text-navy sm:text-[1.35rem]">
                      {n.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-[0.84rem] leading-[1.65] text-ink sm:mt-2.5 sm:line-clamp-none sm:text-[0.86rem] sm:leading-[1.7]">
                      {n.desc}
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-maroon"
                    >
                      Read Full Story{" "}
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </a>
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
