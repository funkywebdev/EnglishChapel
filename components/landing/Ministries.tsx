"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { rail, railItem } from "./Events";
import { ministries } from "./data";

const MLink = motion.create(Link);

export default function Ministries() {
  return (
    <section id="ministries" className="bg-mist py-10 sm:py-20 lg:py-[5.5rem]">
      <div className="container-x">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal x={-30} y={0}><p className="t-label">Active Fellowships</p></Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
              <SplitWords text="Find Your Place. Grow in Faith." inView />
            </h2>
          </div>
          <Reveal delay={0.15} className="hidden max-w-[26rem] sm:block lg:text-left">
            <p className="t-small text-[#52525b]">
              Explore specialized ministries curated to nurture every age, life season, and spiritual calling within our district.
            </p>
          </Reveal>
        </div>

        <Stagger className={`mt-7 lg:mt-12 ${rail}`} stagger={0.1} amount={0.05}>
          {ministries.map((m) => (
            <Item key={m.title} className={`${railItem} md:h-full`}>
              <Tilt className="h-full" max={4} lift={-8}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_-12px_rgba(2,20,58,0.25)] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.4)]">
                  <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[16/8.5]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.img} alt={m.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[0.68rem] font-semibold text-navy-2 backdrop-blur">{m.tag}</span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="t-card-title">{m.title}</h3>
                    <p className="mt-2 line-clamp-3 text-[0.85rem] leading-[1.65] text-ink sm:mt-2.5 sm:line-clamp-none sm:text-[0.88rem] sm:leading-[1.7]">{m.desc}</p>
                    <Link href="/ministries" className="mt-3 inline-flex sm:mt-4 items-center gap-1.5 text-[0.85rem] font-semibold text-maroon">
                      Get Connected
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </article>
              </Tilt>
            </Item>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex justify-center">
          <MLink
            href="/ministries"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="shimmer inline-flex items-center gap-2 rounded-lg bg-maroon px-8 py-3.5 font-poppins text-[0.92rem] font-medium text-white shadow-lg shadow-maroon/25"
          >
            View More <ArrowRight size={17} />
          </MLink>
        </Reveal>
      </div>
    </section>
  );
}
