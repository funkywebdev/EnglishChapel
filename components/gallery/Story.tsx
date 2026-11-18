"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Bookmark, Calendar, Camera, Images, Share2 } from "lucide-react";
import { useState } from "react";
import { ParallaxImage, Reveal, ease } from "../motion";
import { share } from "./data";

const snaps = [
  {
    src: "/images/landing/A4.jpeg",
    title: "Snapshot from the Bible Study archive",
  },
  {
    src: "/images/landing/ma3.jpeg",
    title: "Snapshot from the Prayer archive",
  },
  {
    src: "/images/landing/A1.jpeg",
    title: "Snapshot from the Evangelism archive",
  },
];

export default function Story({
  onOpen,
}: {
  onOpen: (src: string, title: string) => void;
}) {
  const [saved, setSaved] = useState(false);
  return (
    <section id="story" className="bg-white py-10 sm:py-14 lg:py-[3.6rem]">
      <div className="container-x">
        <Reveal x={-30} y={0} className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-[0.7rem] uppercase text-maroon sm:text-[0.88rem]">
            <motion.span
              className="h-2 w-2 rounded-full bg-maroon"
              animate={{ scale: [1, 1.7, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            Story of the Month
          </p>
          <p className="text-[0.68rem] text-[#6b7280] sm:text-[0.85rem]">
            Apostolic Archive Vol. 48
          </p>
        </Reveal>

        <div className="mt-5 grid overflow-hidden rounded-2xl lg:grid-cols-[1.4fr_1fr] lg:gap-0 lg:rounded-[1.1rem]">
          <button
            type="button"
            onClick={() =>
              onOpen(
                "/images/landing/p1.jpeg",
                "Annual Holy Ghost District Convocation 2024",
              )
            }
            className="group relative block min-h-[22rem] overflow-hidden rounded-2xl text-left lg:min-h-[28rem] lg:rounded-[1.1rem]"
            aria-label="Open Annual Holy Ghost District Convocation 2024"
          >
            <ParallaxImage
              src="/images/pages/gallery-dark.jpg"
              alt="Annual Holy Ghost District Convocation 2024"
              className="absolute inset-0 h-full w-full"
              round={18}
              intensity={5}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02143a]/85 via-[#02143a]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.3 }}
                className="flex flex-wrap items-center gap-2"
              >
                <span className="rounded-md bg-maroon px-2.5 py-1 text-[0.62rem] font-medium uppercase text-white sm:text-[0.78rem]">
                  Featured Series • 18 Photos
                </span>
                <span className="rounded-md bg-white/25 px-2.5 py-1 text-[0.62rem] font-medium text-white backdrop-blur sm:text-[0.78rem]">
                  Convocation Grounds
                </span>
              </motion.div>
              <h3 className="mt-3 max-w-[30rem] font-poppins font-semibold leading-[1.45] text-white [font-size:clamp(1.35rem,1rem+1.2vw,2.15rem)]">
                Annual Holy Ghost District Convocation 2024
              </h3>
            </div>
          </button>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="mt-4 bg-[#f3f5ff] lg:ml-6 lg:mt-0 lg:rounded-r-[1.1rem] lg:pr-12"
          >
            <div className="flex h-full flex-col rounded-2xl bg-white p-5 sm:p-8 lg:rounded-none lg:p-8 lg:pr-9">
              <div className="flex items-center justify-between border-b border-[#eef0f5] pb-4 text-[0.74rem] text-ink sm:text-[0.86rem]">
                <span className="flex items-center gap-2">
                  <Calendar size={15} /> November 15–17, 2024
                </span>
                <span className="flex items-center gap-2 font-medium text-navy">
                  <Camera size={15} /> Media Stewards Guild
                </span>
              </div>
              <p className="mt-5 text-[0.84rem] leading-[1.85] tracking-[0.01em] text-ink sm:text-[0.96rem]">
                Three glorious days of apostolic fervor, consecrated prayers,
                and deep personal renewal. Over 1,200 delegates and seekers
                convened under the sanctuary roof at Osogbo Headquarters,
                witnessing miraculous encounters and corporate breakthrough
                under the banner of divine serenity.
              </p>
              <blockquote className="mt-5 rounded-r-lg border-l-[3px] border-navy-2 bg-[#eef1ff] px-4 py-3 text-[0.8rem] italic leading-[1.7] text-ink sm:text-[0.9rem]">
                “The peace of God did not merely visit this assembly; it
                inhabited every prayer and saturated every chord.”
              </blockquote>
              <p className="mt-5 text-[0.66rem] font-medium uppercase text-ink sm:text-[0.76rem]">
                Snapshots from this archive
              </p>
              <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                {snaps.map((s, i) => (
                  <motion.button
                    key={s.src}
                    type="button"
                    onClick={() => onOpen(s.src, s.title)}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                      delay: 0.4 + i * 0.12,
                    }}
                    whileHover={{ scale: 1.06, y: -3 }}
                    className="aspect-[1.7/1] overflow-hidden rounded-lg"
                    aria-label={s.title}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.src}
                      alt={s.title}
                      className="h-full w-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
              <div className="mt-5 flex items-stretch gap-2.5 lg:mt-auto lg:pt-5">
                <motion.button
                  type="button"
                  onClick={() =>
                    onOpen(
                      "/images/pages/gallery-dark.jpg",
                      "Annual Holy Ghost District Convocation 2024",
                    )
                  }
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  className="shimmer flex flex-1 items-center justify-center gap-2.5 rounded-lg bg-maroon py-3 font-poppins text-[0.86rem] font-medium text-white sm:text-[0.95rem]"
                >
                  <Images size={17} /> Open Photo Story
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setSaved((v) => !v)}
                  whileTap={{ scale: 0.88 }}
                  aria-label="Bookmark story"
                  className="grid w-11 place-items-center rounded-lg bg-[#eef1ff] text-navy"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={String(saved)}
                      initial={{ scale: 0, rotate: -40 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 18,
                      }}
                    >
                      <Bookmark
                        size={17}
                        fill={saved ? "#5c0012" : "none"}
                        color={saved ? "#5c0012" : "currentColor"}
                      />
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() =>
                    share("Annual Holy Ghost District Convocation 2024")
                  }
                  whileHover={{ rotate: 12 }}
                  whileTap={{ scale: 0.88 }}
                  aria-label="Share story"
                  className="grid w-11 place-items-center rounded-lg bg-[#eef1ff] text-navy"
                >
                  <Share2 size={17} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
