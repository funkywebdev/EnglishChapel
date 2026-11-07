"use client";
import { ArrowRight, GraduationCap, Landmark, Wheat } from "lucide-react";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { rail, railItem } from "./Events";
import { impact } from "./data";

const icons = { hub: Landmark, agro: Wheat, edu: GraduationCap };

export default function Impact() {
  return (
    <section id="business" className="bg-white pb-14 pt-2 sm:pb-20 lg:pb-[5.5rem]">
      <div className="container-x">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal x={-30} y={0}><p className="t-label">Socio-Economic Development</p></Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
              <SplitWords text="Building Opportunities. Creating Impact" inView />
            </h2>
          </div>
          <Reveal delay={0.15} className="hidden max-w-[28rem] sm:block">
            <p className="t-small text-[#52525b]">
              Empowering families, uplifting entrepreneurs, and fostering self-reliance across the Osogbo district through Kingdom stewardship.
            </p>
          </Reveal>
        </div>

        <Stagger className={`mt-7 lg:mt-12 ${rail}`} stagger={0.14} amount={0.05}>
          {impact.map((c) => {
            const Icon = icons[c.icon];
            return (
              <Item key={c.title} className={`${railItem} md:h-full`}>
                <Tilt className="h-full" max={4} lift={-8}>
                  <article className="group flex h-full flex-col rounded-2xl bg-mist p-6 transition-shadow duration-300 hover:shadow-[0_30px_50px_-22px_rgba(2,20,58,0.4)] sm:p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-navy-2 shadow-sm transition-colors duration-300 group-hover:bg-navy-2 group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 font-poppins text-[1.15rem] font-medium leading-snug text-navy sm:text-[1.3rem]">{c.title}</h3>
                    <p className="mt-2 line-clamp-3 text-[0.84rem] leading-[1.65] text-ink sm:mt-3 sm:line-clamp-none sm:text-[0.86rem] sm:leading-[1.7]">{c.desc}</p>
                    <p className="mt-5 break-all rounded-lg bg-white px-3.5 py-2.5 text-[0.74rem] text-navy-2">Inquiries: {c.mail}</p>
                    <a href="#" className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.85rem] font-semibold text-maroon">
                      Learn More <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </a>
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
