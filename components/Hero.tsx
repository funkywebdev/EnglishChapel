// "use client";
// import { motion } from "framer-motion";
// import AutoRail from "./AutoRail";
// import { CountUp, Item, SplitWords, Stagger, ease } from "./motion";

// const stats = [
//   {
//     n: 28,
//     suffix: "+",
//     title: "Years of Ministry",
//     desc: "Continuous pastoral stewardship in the ancient city of Osogbo.",
//   },
//   {
//     n: 4500,
//     suffix: "+",
//     title: "Covenant Members",
//     desc: "Vibrant intergenerational families worshipping weekly.",
//   },
//   {
//     n: 4500,
//     suffix: "Outreaches",
//     title: "House Fellowships",
//     desc: "Community care cells bridging neighborhoods across the district.",
//   },
//   {
//     n: 12,
//     suffix: "Projects",
//     title: "Welfare Scheme",
//     desc: "Scholarships, medical outreaches & vocational training initiatives.",
//   },
// ];

// export default function Hero() {
//   return (
//     <section id="home" className="relative overflow-hidden bg-mist">
//       {/* Ambient drifting light */}
//       <motion.div
//         aria-hidden
//         className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#c9d3ff] opacity-35 blur-3xl sm:h-[28rem] sm:w-[28rem]"
//         animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
//         transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         aria-hidden
//         className="pointer-events-none absolute -right-20 top-40 h-64 w-64 rounded-full bg-[#e9c7cf] opacity-30 blur-3xl sm:h-[26rem] sm:w-[26rem]"
//         animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
//         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#9aa8e0_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
//       />

//       <div className="container-x relative flex flex-col items-center pt-8 text-center sm:pt-14 lg:pt-[4.5rem] 2xl:pt-[4.2rem]">
//         <motion.p
//           initial={{ opacity: 0, y: 20, scale: 0.9 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.8, ease, delay: 0.2 }}
//           className="max-w-[20rem] rounded-full bg-[#eaeefe] px-4 py-2 text-[0.68rem] font-medium uppercase leading-snug tracking-wide text-maroon sm:max-w-none sm:rounded-lg sm:px-6 sm:text-[0.8rem] 2xl:text-[14.6px]"
//         >
//           Osogbo District Headquarters <span className="mx-1">•</span>
//           <span className="normal-case">Established 1996</span>
//         </motion.p>

//         <h1 className="mt-6 text-balance font-poppins font-semibold leading-[1.18] text-navy [font-size:clamp(2.1rem,1.2rem+3.4vw,5.15rem)] sm:mt-10 md:leading-[1.45] 2xl:mt-[18px] 2xl:leading-[1.52]">
//           <span className="block">
//             <SplitWords text="Rooted in Faith. Bound by Peace." delay={0.5} />
//           </span>
//           <span className="mt-1 block sm:mt-0">
//             <SplitWords
//               text="Serving Osogbo"
//               className="text-maroon"
//               delay={0.95}
//             />{" "}
//             <SplitWords text="and Beyond." delay={1.15} />
//           </span>
//         </h1>

//         <motion.p
//           initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
//           animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           transition={{ duration: 1, ease, delay: 1.35 }}
//           className="mx-auto mt-5 w-full max-w-[34rem] text-[#52525b] [font-size:clamp(1rem,0.72rem+0.57vw,1.55rem)] leading-[1.7] sm:mt-8 sm:max-w-none sm:leading-[1.65] sm:tracking-[0.025em] 2xl:mt-5"
//         >
//           Welcome to English Chapel Sanctuary of Peace—an apostolic haven
//           dedicated to biblical holiness, compassionate community and
//           Christ-centered worship across Osun State and the Federal Republic of
//           Nigeria.
//         </motion.p>

//         <motion.a
//           href="#about"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease, delay: 1.45 }}
//           whileHover={{ y: -3, scale: 1.04 }}
//           whileTap={{ scale: 0.96 }}
//           className="shimmer mt-7 inline-flex h-12 w-full max-w-[20rem] items-center justify-center rounded-xl bg-navy-2 px-6 text-[0.78rem] font-medium uppercase tracking-wide text-white shadow-lg shadow-navy-2/25 sm:mt-8 sm:h-auto sm:w-auto sm:max-w-none sm:rounded-lg sm:py-3.5 sm:text-[0.82rem] 2xl:px-8 2xl:py-[1.05rem] 2xl:text-[14.3px]"
//         >
//           About Our Sanctuary
//         </motion.a>

//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.1, ease, delay: 1.55 }}
//           className="mt-10 w-full pb-10 sm:mt-16 lg:mt-[4.5rem] 2xl:mt-[7.9rem] 2xl:pb-[3.3rem]"
//         >
//           <AutoRail>
//             <Stagger
//               delay={0.1}
//               stagger={0.12}
//               className="grid grid-cols-2 gap-3 rounded-[1.4rem] bg-white p-3 text-left shadow-[0_20px_60px_-25px_rgba(2,20,58,0.25)] sm:gap-4 sm:p-6 md:grid-cols-4 lg:gap-x-8 lg:rounded-[1.8rem] lg:px-[3.25rem] lg:py-12"
//             >
//               {stats.map((s) => (
//                 <Item
//                   key={s.title}
//                   className="rounded-2xl bg-[#f3f5fd] p-4 sm:p-5 md:bg-transparent md:p-0"
//                 >
//                   <p className="flex flex-wrap items-baseline gap-x-1.5 font-poppins leading-tight">
//                     <span className="font-semibold text-navy [font-size:clamp(1.55rem,1rem+1.21vw,2.5rem)]">
//                       <CountUp to={s.n} />
//                     </span>
//                     <span className="font-medium text-maroon [font-size:clamp(0.8rem,0.7rem+0.97vw,1.9rem)]">
//                       {s.suffix}
//                     </span>
//                   </p>
//                   <h3 className="mt-2 font-poppins font-medium text-navy [font-size:clamp(0.9rem,0.7rem+0.5vw,1.3rem)] sm:mt-3">
//                     {s.title}
//                   </h3>
//                   <p className="mt-1.5 text-[0.78rem] leading-[1.6] text-[#52525b] sm:text-[0.85rem] 2xl:text-[15.5px] 2xl:leading-[1.8]">
//                     {s.desc}
//                   </p>
//                 </Item>
//               ))}
//             </Stagger>
//           </AutoRail>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, CalendarDays, ChevronDown } from "lucide-react";
import { CountUp, Item, SplitWords, Stagger, ease } from "./motion";

// NOTE: check the numbers for "House Fellowships" and "Welfare Scheme".
// "4500 Outreaches" is probably a copy/paste slip from the line above.
const stats = [
  {
    n: 28,
    suffix: "+",
    title: "Years of Ministry",
    desc: "Continuous pastoral stewardship in the ancient city of Osogbo.",
  },
  {
    n: 4500,
    suffix: "+",
    title: "Covenant Members",
    desc: "Vibrant intergenerational families worshipping weekly.",
  },
  {
    n: 4500,
    suffix: "Outreaches",
    title: "House Fellowships",
    desc: "Community care cells bridging neighborhoods across the district.",
  },
  {
    n: 12,
    suffix: "Projects",
    title: "Welfare Scheme",
    desc: "Scholarships, medical outreaches & vocational training initiatives.",
  },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Parallax: the glow orbs drift at different speeds as you scroll.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 50]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-mist via-[#f4f6ff] to-white"
    >
      {/* ───────── Background ───────── */}
      <motion.div
        aria-hidden
        style={{ y: orbY1 }}
        className="pointer-events-none absolute -left-28 top-0 h-72 w-72 sm:h-[28rem] sm:w-[28rem]"
      >
        <motion.div
          className="h-full w-full rounded-full bg-[#c9d3ff] opacity-50 blur-3xl"
          animate={reduce ? undefined : { x: [0, 50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: orbY2 }}
        className="pointer-events-none absolute -right-24 top-44 h-64 w-64 sm:h-[26rem] sm:w-[26rem]"
      >
        <motion.div
          className="h-full w-full rounded-full bg-[#e9c7cf] opacity-45 blur-3xl"
          animate={
            reduce ? undefined : { x: [0, -40, 0], scale: [1.1, 1, 1.1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(#9aa8e0_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_70%)]"
      />

      <motion.div
        style={{ y: contentY }}
        className="container-x relative flex flex-col items-center pt-10 text-center sm:pt-14 lg:pt-[4.5rem]"
      >
        {/* ───────── Badge ───────── */}
        <motion.p
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-0.5 rounded-full bg-white/80 px-4 py-2 text-[0.66rem] font-medium uppercase leading-snug tracking-[0.1em] text-maroon shadow-sm ring-1 ring-maroon/15 backdrop-blur sm:px-6 sm:text-[0.78rem]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-maroon/50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-maroon" />
          </span>
          Osogbo District HQ
          <span className="opacity-50">•</span>
          <span className="normal-case tracking-normal">Est. 1996</span>
        </motion.p>

        {/* ───────── Headline ───────── */}
        <h1 className="mt-6 text-balance font-poppins font-semibold text-navy [font-size:clamp(2.15rem,1.2rem+3.6vw,5rem)] leading-[1.12] sm:mt-9 md:leading-[1.3]">
          <span className="block">
            <SplitWords text="Rooted in Faith. Bound by Peace." delay={0.45} />
          </span>
          <span className="relative mt-2 block sm:mt-0">
            <span className="relative inline-block">
              <SplitWords
                text="Serving Osogbo"
                className="text-maroon"
                delay={0.95}
              />
              {/* Hand-drawn style underline that draws itself */}
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2 w-full sm:-bottom-2 sm:h-3"
              >
                <motion.path
                  d="M2 8 C 60 2, 120 12, 180 6 S 270 4, 298 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-maroon/60"
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.1, ease: "easeOut", delay: 1.7 }}
                />
              </svg>
            </span>{" "}
            <SplitWords text="and Beyond." delay={1.15} />
          </span>
        </h1>

        {/* ───────── Intro ───────── */}
        <motion.p
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease, delay: 1.3 }}
          className="mx-auto mt-6 max-w-[32rem] text-[#52525b] [font-size:clamp(0.98rem,0.8rem+0.5vw,1.45rem)] leading-[1.7] sm:mt-8 sm:max-w-3xl"
        >
          Welcome to English Chapel Sanctuary of Peace—an apostolic haven
          dedicated to biblical holiness, compassionate community and
          Christ-centered worship across Osun State and the Federal Republic of
          Nigeria.
        </motion.p>

        {/* ───────── Buttons ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.45 }}
          className="mt-8 flex w-full max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
        >
          <motion.a
            href="#about"
            whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-2 px-7 text-[0.8rem] font-medium uppercase tracking-wide text-white shadow-lg shadow-navy-2/25 sm:h-[3.25rem]"
          >
            About Our Sanctuary
            <ArrowRight size={17} />
          </motion.a>
          <motion.a
            href="#visit"
            whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-[0.8rem] font-medium uppercase tracking-wide text-navy ring-1 ring-navy/15 transition-colors hover:text-maroon sm:h-[3.25rem]"
          >
            <CalendarDays size={17} />
            Plan a Visit
          </motion.a>
        </motion.div>

        {/* ───────── Scroll cue (phones) ───────── */}
        <motion.a
          href="#stats"
          aria-label="Scroll to stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-8 flex h-10 w-10 items-center justify-center rounded-full text-navy/60 sm:hidden"
        >
          <motion.span
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={22} />
          </motion.span>
        </motion.a>

        {/* ───────── Stats ───────── */}
        <motion.div
          id="stats"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease }}
          className="mt-4 w-full scroll-mt-20 pb-10 sm:mt-14 lg:mt-[4.5rem] 2xl:mt-[6rem] 2xl:pb-[3.3rem]"
        >
          <Stagger
            delay={0.1}
            stagger={0.12}
            className="grid grid-cols-2 gap-3 text-left sm:gap-4 md:grid-cols-4 md:gap-x-8 md:rounded-[1.8rem] md:bg-white md:px-12 md:py-12 md:shadow-[0_20px_60px_-25px_rgba(2,20,58,0.25)]"
          >
            {stats.map((s) => {
              const longSuffix = s.suffix.length > 1;
              return (
                <Item
                  key={s.title}
                  className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-[0_10px_30px_-18px_rgba(2,20,58,0.35)] ring-1 ring-navy/[0.06] md:rounded-none md:bg-transparent md:p-0 md:shadow-none md:ring-0"
                >
                  {/* maroon accent tick (phones) */}
                  <span className="absolute left-0 top-4 h-8 w-1 rounded-r-full bg-maroon md:hidden" />

                  <p className="flex flex-wrap items-baseline gap-x-1.5 pl-1 font-poppins leading-tight md:pl-0">
                    <span className="font-semibold text-navy [font-size:clamp(1.7rem,1rem+1.2vw,2.6rem)]">
                      <CountUp to={s.n} />
                    </span>
                    {!longSuffix && (
                      <span className="font-medium text-maroon [font-size:clamp(1.1rem,0.8rem+0.9vw,1.9rem)]">
                        {s.suffix}
                      </span>
                    )}
                  </p>
                  {longSuffix && (
                    <p className="mt-1 pl-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-maroon md:pl-0 md:text-[0.72rem]">
                      {s.suffix}
                    </p>
                  )}
                  <h3 className="mt-2 pl-1 font-poppins font-medium text-navy [font-size:clamp(0.88rem,0.7rem+0.45vw,1.25rem)] md:mt-3 md:pl-0">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 pl-1 text-[0.76rem] leading-[1.55] text-[#52525b] sm:text-[0.84rem] md:pl-0 2xl:text-[15.5px] 2xl:leading-[1.8]">
                    {s.desc}
                  </p>
                </Item>
              );
            })}
          </Stagger>
        </motion.div>
      </motion.div>
    </section>
  );
}
