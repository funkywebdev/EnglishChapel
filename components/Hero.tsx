"use client";
import { motion } from "framer-motion";
import { CountUp, Item, SplitWords, Stagger, ease } from "./motion";

const stats = [
  { n: 28, suffix: "+", title: "Years of Ministry", desc: "Continuous pastoral stewardship in the ancient city of Osogbo." },
  { n: 4500, suffix: "+", title: "Covenant Members", desc: "Vibrant intergenerational families worshipping weekly." },
  { n: 4500, suffix: "Outreaches", title: "House Fellowships", desc: "Community care cells bridging neighborhoods across the district." },
  { n: 12, suffix: "Projects", title: "Welfare Scheme", desc: "Scholarships, medical outreaches & vocational training initiatives." },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-mist">
      {/* Ambient drifting light */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#c9d3ff] opacity-35 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-40 h-64 w-64 rounded-full bg-[#e9c7cf] opacity-30 blur-3xl sm:h-[26rem] sm:w-[26rem]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#9aa8e0_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="container-x relative flex flex-col items-center pt-10 text-center sm:pt-14 lg:pt-[4.5rem] 2xl:pt-[4.2rem]">
        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="rounded-lg bg-[#eaeefe] px-4 py-2 text-[0.64rem] font-medium uppercase leading-snug tracking-wide text-maroon sm:px-6 sm:text-[0.8rem] 2xl:text-[14.6px]"
        >
          Osogbo District Headquarters <span className="mx-1">•</span>
          <span className="normal-case">Established 1996</span>
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="shimmer mt-5 rounded-lg bg-navy-2 px-5 py-3 text-[0.68rem] font-medium uppercase tracking-wide text-white shadow-lg shadow-navy-2/25 sm:mt-7 sm:px-6 sm:py-3.5 sm:text-[0.82rem] 2xl:px-8 2xl:py-[1.05rem] 2xl:text-[14.3px]"
        >
          About Our Sanctuary
        </motion.a>

        <h1 className="mt-8 2xl:mt-[18px] font-poppins font-semibold leading-[1.22] text-navy [font-size:clamp(2.1rem,1.2rem+3.4vw,5.15rem)] sm:mt-10 md:leading-[1.45] 2xl:leading-[1.52]">
          <span className="block">
            <SplitWords text="Rooted in Faith. Bound by Peace." delay={0.5} />
          </span>
          <span className="block">
            <SplitWords text="Serving Osogbo" className="text-maroon" delay={0.95} />{" "}
            <SplitWords text="and Beyond." delay={1.15} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease, delay: 1.35 }}
          className="mt-6 2xl:mt-5 w-full text-[#52525b] [font-size:clamp(1rem,0.72rem+0.57vw,1.55rem)] leading-[1.65] tracking-[0.025em] sm:mt-8"
        >
          Welcome to English Chapel Sanctuary of Peace—an apostolic haven dedicated to biblical holiness,
          compassionate community and Christ centered worship across Osun State and the federal republic of Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 1.55 }}
          className="mt-12 w-full pb-10 sm:mt-16 lg:mt-[4.5rem] 2xl:mt-[7.9rem] 2xl:pb-[3.3rem]"
        >
          <Stagger
            delay={0.1}
            stagger={0.12}
            className="grid grid-cols-2 gap-x-5 gap-y-8 rounded-[1.4rem] bg-white p-6 text-left shadow-[0_20px_60px_-25px_rgba(2,20,58,0.25)] sm:gap-x-6 sm:p-8 lg:grid-cols-4 lg:gap-x-8 lg:rounded-[1.8rem] lg:px-[3.25rem] lg:py-12"
          >
            {stats.map((s) => (
              <Item key={s.title}>
                <p className="flex flex-wrap items-baseline gap-x-2 font-poppins leading-tight">
                  <span className="font-semibold text-navy [font-size:clamp(1.55rem,1rem+1.21vw,2.5rem)]">
                    <CountUp to={s.n} />
                  </span>
                  <span className="font-medium text-maroon [font-size:clamp(0.95rem,0.7rem+0.97vw,1.9rem)]">
                    {s.suffix}
                  </span>
                </p>
                <h3 className="mt-2 font-poppins text-navy [font-size:clamp(0.88rem,0.7rem+0.5vw,1.3rem)] sm:mt-3">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.74rem] leading-[1.65] text-[#52525b] sm:text-[0.85rem] 2xl:text-[15.5px] 2xl:leading-[1.8]">
                  {s.desc}
                </p>
              </Item>
            ))}
          </Stagger>
        </motion.div>
      </div>
    </section>
  );
}
