"use client";
import AutoRail from "../AutoRail";
import { ArrowRight } from "lucide-react";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { rail, railItem } from "./Events";
import { news } from "./data";

/* Material "photo_library" outline, the icon used in the design */
function GalleryIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`shrink-0 fill-current ${className}`}
    >
      <path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
    </svg>
  );
}

export default function News() {
  return (
    <section
      id="gallery"
      className="bg-white py-10 sm:py-20 lg:pb-20 lg:pt-[53px]"
    >
      <div className="container-x">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:text-left">
          <div className="lg:pl-0.5">
            <Reveal x={-30} y={0}>
              <p className="t-label lg:text-base lg:leading-6">
                Headquarter Gazette
              </p>
            </Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.5rem)] lg:mt-[15px] lg:leading-[48px]">
              <SplitWords text="The Latest from Our Church" inView />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <a
              href="#"
              className="inline-flex items-center gap-2 whitespace-nowrap font-poppins text-[0.85rem] font-medium text-maroon underline-offset-4 hover:underline sm:mt-3 lg:mt-[33px] lg:gap-1 lg:text-[18.6px] lg:leading-7"
            >
              View Full Gallery <GalleryIcon className="size-4 lg:size-6" />
            </a>
          </Reveal>
        </div>

        <AutoRail>
          <Stagger
            className={`mt-7 lg:mt-[94px] ${rail} lg:!grid lg:grid-cols-3 lg:!gap-[68px] lg:!overflow-visible`}
            stagger={0.14}
            amount={0.05}
          >
            {news.map((n) => (
              <Item
                key={n.title}
                className={`${railItem} lg:h-full lg:!w-auto lg:!min-w-0`}
              >
                <Tilt className="h-full" max={4} lift={-8}>
                  <article className="group h-full overflow-hidden rounded-[18px] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.35)]">
                    <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-64">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={n.img}
                        alt={n.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                      />
                      <span className="absolute left-3 top-3 inline-flex h-7 items-center rounded-full bg-[#e8edff] px-3 font-poppins text-[0.8rem] font-medium leading-none text-navy-2 lg:left-6 lg:top-5 lg:h-8 lg:px-[13.5px] lg:text-base">
                        {n.tag}
                      </span>
                    </div>
                    <div className="p-5 sm:p-6 lg:pb-[22px] lg:pl-6 lg:pr-[22px] lg:pt-[30px]">
                      <p className="text-[0.74rem] text-ink lg:text-base lg:leading-6 lg:text-[#0b0a0a]">
                        {n.date}
                      </p>
                      <h3 className="mt-1.5 font-poppins text-[1.2rem] font-medium text-navy-2 sm:text-[1.35rem] lg:mt-3 lg:text-[26.7px] lg:leading-[34px]">
                        {n.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-[0.84rem] leading-[1.65] text-ink sm:mt-2.5 sm:line-clamp-none sm:text-[0.86rem] sm:leading-[1.7] lg:mt-[15px] lg:text-base lg:leading-[29.33px] lg:text-[#565f69]">
                        {n.desc}
                      </p>
                      <a
                        href="#"
                        className="mt-4 inline-flex items-center gap-1.5 font-poppins text-[0.85rem] font-medium text-maroon lg:mt-[29px] lg:gap-2.5 lg:text-base lg:leading-6"
                      >
                        Read Full Story
                        <ArrowRight
                          strokeWidth={2}
                          className="size-[15px] transition-transform duration-300 group-hover:translate-x-1.5 lg:size-[18px]"
                        />
                      </a>
                    </div>
                  </article>
                </Tilt>
              </Item>
            ))}
          </Stagger>
        </AutoRail>
      </div>
    </section>
  );
}
