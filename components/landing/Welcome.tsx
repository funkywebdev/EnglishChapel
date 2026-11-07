"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookMarked, Smile, Users } from "lucide-react";
import Link from "next/link";
import { Item, ParallaxImage, Reveal, SplitWords, Stagger, ease } from "../motion";

const MLink = motion.create(Link);
const pillars = [
  { icon: Smile, t: "Worship" },
  { icon: BookMarked, t: "Discipleship" },
  { icon: Users, t: "Community" },
];

export default function Welcome() {
  return (
    <section id="welcome" className="bg-white py-10 sm:py-20 lg:py-[6.5rem]">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.82fr_1fr] lg:gap-x-[7%]">
        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <ParallaxImage
            src="/images/landing/worship.jpg"
            alt="Worshippers lifting their hands during a service"
            className="aspect-[4/3.2] w-full sm:aspect-[4/4.6] shadow-2xl shadow-navy/15 lg:aspect-[0.86]"
            round={26}
            intensity={4}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
            className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-xl bg-white px-5 py-4 shadow-xl"
            >
              <p className="font-poppins text-[1rem] font-semibold italic text-navy sm:text-[1.15rem]">“Peace be unto this house”</p>
              <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-wider text-maroon sm:text-[0.7rem]">
                District Headquarters Sanctuary Motto
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div>
          <Reveal x={-30} y={0}>
            <p className="t-label flex items-center gap-3">
              <motion.span initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="block h-px bg-maroon" />
              Osogbo Heritage
            </p>
          </Reveal>
          <h2 className="t-h2 mt-3 [font-size:clamp(1.9rem,1.3rem+1.6vw,3rem)]">
            <SplitWords text="You’re Welcome Here." inView />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[0.92rem] leading-[1.7] text-[#52525b] sm:mt-5 sm:text-[1.05rem]">
              At the English Chapel Sanctuary of Peace, Osogbo District Headquarters, we believe every soul is divinely cherished. Whether you have walked with Christ for decades or are stepping into a sanctuary for the very first time, this is an oasis of renewal, spiritual grounding, and genuine Christian fellowship.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body mt-4 hidden text-[#52525b] sm:block">
              Anchored in profound biblical truth, heartfelt prayer, and active compassion, our mission across Osun State and beyond is to raise disciples grounded in the Word and equipped to impact their spheres of influence.
            </p>
          </Reveal>

          <Stagger className="mt-6 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-3" stagger={0.12}>
            {pillars.map((p) => (
              <Item key={p.t}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center gap-2 rounded-xl bg-mist px-2 py-3.5 text-center sm:items-start sm:px-5 sm:py-4 sm:text-left"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-navy-2 shadow-sm">
                    <p.icon size={19} />
                  </span>
                  <div>
                    <h3 className="font-poppins text-[0.85rem] font-medium text-navy sm:mt-3 sm:text-base">{p.t}</h3>
                    <p className="mt-1 hidden text-[0.78rem] leading-[1.6] text-ink sm:block">Spirit-filled devotion and reverence before God.</p>
                  </div>
                </motion.div>
              </Item>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <MLink
              href="/about"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="shimmer mt-6 inline-flex items-center gap-2 rounded-lg bg-maroon px-6 py-3 sm:mt-8 sm:px-7 sm:py-3.5 font-poppins text-[0.92rem] font-medium text-white shadow-lg shadow-maroon/25"
            >
              Learn More <ArrowRight size={17} />
            </MLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
