// "use client";
// import { useRef } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useSpring,
//   useTransform,
//   type MotionValue,
// } from "framer-motion";
// import { Quote, ShieldCheck } from "lucide-react";
// import { ParallaxImage, Reveal, SplitWords, ease } from "./motion";

// /* ---------- Content ---------- */

// /* Words wrapped in ** ** are highlighted */
// const story = [
//   "English Chapel Sanctuary of Peace, Ogo-Oluwa, Osogbo, is rooted in the rich spiritual heritage of the **Cherubim and Seraphim** Christian movement, one of Nigeria's historic indigenous Christian movements.",
//   "The movement emerged in Nigeria in **1925** through the ministry of Saint Moses Orimolade Tunolase, popularly known as **Baba Aladura**, whose passion for evangelism, fervent prayers, holiness and spiritual revival contributed significantly to the growth of Christianity in Nigeria.",
//   "As the movement expanded across the country, it reached Osogbo in **April 1927**, spreading its distinctive tradition of prayer, worship, faith and total dependence on God.",
// ];

// const storyWords = story.map((p) =>
//   p
//     .split(/(\*\*[^*]+\*\*)/)
//     .filter(Boolean)
//     .flatMap((seg) => {
//       const hl = seg.startsWith("**");
//       const text = hl ? seg.slice(2, -2) : seg;
//       return text
//         .split(/\s+/)
//         .filter(Boolean)
//         .map((w) => ({ w, hl }));
//     }),
// );
// const totalWords = storyWords.flat().length;

// function Word({
//   children,
//   progress,
//   range,
//   hl,
//   reduce,
// }: {
//   children: string;
//   progress: MotionValue<number>;
//   range: [number, number];
//   hl: boolean;
//   reduce: boolean | null;
// }) {
//   const opacity = useTransform(progress, range, [0.18, 1]);
//   return (
//     <motion.span
//       style={{ opacity: reduce ? 1 : opacity }}
//       className={`mr-[0.28em] inline-block ${
//         hl ? "font-semibold text-[#f4a39b]" : ""
//       }`}
//     >
//       {children}
//     </motion.span>
//   );
// }

// const milestones = [
//   {
//     n: "01",
//     tag: "1996 · Foundation",
//     title: "The Mustard Seed",
//     desc: "Twelve pioneer families began regular Sunday expository services at Station Road, dedicated to uncompromising Scripture.",
//   },
//   {
//     n: "02",
//     tag: "2004 · Dedication",
//     title: "Haven Dedication",
//     desc: "The main auditorium was completed and solemnly dedicated as the Sanctuary of Peace, beginning daily intercessory watches.",
//   },
//   {
//     n: "03",
//     tag: "2015 · Elevation",
//     title: "District Headquarters",
//     desc: "Charters were ratified making English Chapel the administrative seat of Osogbo District, overseeing regional church plants and leadership schools.",
//   },
//   {
//     n: "04",
//     tag: "2024+ · Expansion",
//     title: "Empowerment Era",
//     desc: "Groundbreaking for the Multipurpose Youth Arena, a Digital Media Suite, and sustainable community welfare projects.",
//   },
// ];

// /* ---------- Component ---------- */

// export default function About() {
//   const reduce = useReducedMotion();

//   // Scroll-drawn timeline line for the milestones section
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: timelineRef,
//     offset: ["start 75%", "end 65%"],
//   });
//   const progress = useSpring(scrollYProgress, {
//     stiffness: 120,
//     damping: 28,
//     mass: 0.4,
//   });

//   // Scroll-linked word reveal + watermark parallax for the story
//   const storySectionRef = useRef<HTMLElement>(null);
//   const storyTextRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress: wordProgress } = useScroll({
//     target: storyTextRef,
//     offset: ["start 0.8", "end 0.6"],
//   });
//   const { scrollYProgress: sectionProgress } = useScroll({
//     target: storySectionRef,
//     offset: ["start end", "end start"],
//   });
//   const ghostY = useTransform(sectionProgress, [0, 1], [80, -80]);

//   return (
//     <>
//       {/* ───────── Our Story ───────── */}
//       <section
//         id="about"
//         ref={storySectionRef}
//         className="relative overflow-hidden bg-[#0b1f44] py-20 sm:py-24 lg:py-32"
//       >
//         {/* Ambient glow */}
//         <div
//           aria-hidden
//           className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#2d4fa3]/30 blur-[110px] sm:h-[620px] sm:w-[620px]"
//         />
//         {/* Ghost year watermark */}
//         <motion.span
//           aria-hidden
//           style={{ y: reduce ? 0 : ghostY }}
//           className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-poppins text-[8rem] font-bold leading-none text-white/[0.045] sm:text-[16rem] lg:text-[26rem]"
//         >
//           1925
//         </motion.span>

//         <div className="container-x relative">
//           <h2 className="t-h2 text-center !text-white">
//             <SplitWords text="Our Story," inView />{" "}
//             <SplitWords
//               text="His Glory"
//               inView
//               delay={0.2}
//               className="!text-[#f4a39b]"
//             />
//           </h2>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease, delay: 0.3 }}
//             className="mx-auto mt-6 h-px w-24 origin-center bg-gradient-to-r from-transparent via-[#f4a39b] to-transparent"
//           />

//           <div
//             ref={storyTextRef}
//             className="mx-auto mt-12 max-w-4xl text-left font-poppins text-[1.2rem] font-medium leading-[1.65] text-white sm:mt-16 sm:text-[1.5rem] md:text-center lg:text-[1.85rem] lg:leading-[1.6]"
//           >
//             {(() => {
//               let i = 0;
//               return storyWords.map((words, pi) => (
//                 <p key={pi} className={pi === 0 ? "" : "mt-7 sm:mt-9"}>
//                   {words.map((x, wi) => {
//                     const idx = i++;
//                     return (
//                       <Word
//                         key={wi}
//                         progress={wordProgress}
//                         range={[idx / totalWords, (idx + 1) / totalWords]}
//                         hl={x.hl}
//                         reduce={reduce}
//                       >
//                         {x.w}
//                       </Word>
//                     );
//                   })}
//                 </p>
//               ));
//             })()}
//           </div>
//         </div>
//       </section>

//       {/* ───────── Heritage & Origins ───────── */}
//       <section
//         id="gallery"
//         className="bg-white pb-10 sm:pb-20 lg:pb-15 py-8 lg:py-20"
//       >
//         <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-x-16">
//           {/* Text */}
//           <div className="order-2 lg:order-1">
//             <Reveal x={-40} y={0}>
//               <p className="t-label">Our Heritage &amp; Origins</p>
//             </Reveal>
//             <Reveal delay={0.1} x={-40} y={0}>
//               <h2 className="t-h2 mt-3 leading-[1.3]">
//                 From a Living Room Fellowship to District Headquarters
//               </h2>
//             </Reveal>
//             <Reveal delay={0.2}>
//               <p className="mt-6 text-[1rem] leading-[1.85] text-[#52525b] sm:text-[1.05rem]">
//                 In 1996, a devoted band of university lecturers, civil servants,
//                 and passionate young disciples gathered in a simple living room
//                 with an urgent calling: to build a bilingual, reverent sanctuary
//                 where the peace of Jesus Christ could transform Osun State.
//               </p>
//             </Reveal>
//             <Reveal delay={0.3}>
//               <p className="mt-4 text-[1rem] leading-[1.85] text-[#52525b] sm:text-[1.05rem]">
//                 Named{" "}
//                 <span className="font-semibold text-navy-2">
//                   English Chapel
//                 </span>{" "}
//                 to bridge ethnic and linguistic barriers, the church grew into a
//                 beacon of theological discipline and spiritual revival, and was
//                 later designated the Osogbo District Headquarters in recognition
//                 of its missionary impact.
//               </p>
//             </Reveal>

//             <Reveal delay={0.4}>
//               <motion.figure
//                 whileHover={reduce ? undefined : { x: 6 }}
//                 className="relative mt-8 overflow-hidden rounded-2xl border-l-4 border-maroon bg-[#e8edff] py-6 pl-6 pr-6 sm:pl-8"
//               >
//                 <Quote
//                   aria-hidden
//                   className="absolute right-4 top-3 text-navy/10"
//                   size={56}
//                   strokeWidth={1.5}
//                 />
//                 <blockquote className="relative text-[1rem] italic leading-[1.7] text-[#1f2937] sm:text-[1.05rem]">
//                   &ldquo;We built not merely with stone, but with tears of
//                   intercession, fervent worship, and an unbending thirst for
//                   sound doctrine.&rdquo;
//                 </blockquote>
//               </motion.figure>
//             </Reveal>
//           </div>

//           {/* Image + badge */}
//           <div className="relative order-1 lg:order-2">
//             <ParallaxImage
//               src="/images/landing/ch3.jpeg"
//               alt="Choir in white garments singing during the Anointing Service"
//               className="aspect-[4/3] w-full shadow-xl shadow-navy/10 sm:aspect-[848/598]"
//               round={24}
//               intensity={3}
//               priority
//             />

//             {/* Badge sits inside the image on mobile, overlaps the edge on desktop */}
//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9, ease, delay: 0.6 }}
//               className="relative mt-[-10px] flex justify-center lg:absolute lg:-bottom-6 lg:-left-10 lg:mt-0 lg:justify-start"
//             >
//               <motion.div
//                 animate={reduce ? undefined : { y: [0, -8, 0] }}
//                 transition={{
//                   duration: 4.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="flex items-center gap-3 rounded-xl bg-[#112a56]/95 px-4 py-3 shadow-[0_25px_40px_-12px_rgba(2,20,58,0.55)] backdrop-blur sm:gap-4 sm:px-6 sm:py-4"
//               >
//                 <ShieldCheck
//                   className="shrink-0 text-[#f4a39b]"
//                   size={30}
//                   strokeWidth={1.7}
//                 />
//                 <span>
//                   <span className="block text-[0.68rem] font-light uppercase tracking-wider text-[#d3d9ea] sm:text-[0.78rem]">
//                     Sanctuary Charter
//                   </span>
//                   <span className="block font-poppins text-[1rem] font-medium text-white sm:text-[1.2rem]">
//                     Osogbo District HQ
//                   </span>
//                 </span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ───────── Milestones ───────── */}
//       <section id="milestones" className="bg-mist py-16 sm:py-20 lg:py-24">
//         <div className="container-x">
//           <Reveal>
//             <p className="t-label">Our Journey</p>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <h2 className="t-h2 mt-3">Milestones in Our Journey</h2>
//           </Reveal>

//           <div ref={timelineRef} className="relative mt-12 lg:mt-16">
//             {/* Track + animated progress: vertical on mobile */}
//             <div className="absolute bottom-0 left-[25px] top-0 w-[2px] bg-navy/10 lg:hidden" />
//             <motion.div
//               style={{ scaleY: reduce ? 1 : progress }}
//               className="absolute bottom-0 left-[25px] top-0 w-[2px] origin-top bg-maroon lg:hidden"
//             />
//             {/* Track + animated progress: horizontal on desktop */}
//             <div className="absolute left-0 right-0 top-[25px] hidden h-[2px] bg-navy/10 lg:block" />
//             <motion.div
//               style={{ scaleX: reduce ? 1 : progress }}
//               className="absolute left-0 right-0 top-[25px] hidden h-[2px] origin-left bg-maroon lg:block"
//             />

//             <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
//               {milestones.map((m, i) => (
//                 <motion.li
//                   key={m.n}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.7, ease, delay: i * 0.1 }}
//                   className="relative pl-16 lg:pl-0 lg:pt-16"
//                 >
//                   {/* Number badge sits on the line */}
//                   <motion.span
//                     initial={{ scale: 0, rotate: -90 }}
//                     whileInView={{ scale: 1, rotate: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 260,
//                       damping: 16,
//                       delay: 0.25 + i * 0.1,
//                     }}
//                     className="absolute left-0 top-0 z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border-4 border-mist bg-navy-2 font-poppins text-[1.05rem] text-white shadow-md"
//                   >
//                     {m.n}
//                   </motion.span>

//                   <motion.div
//                     whileHover={reduce ? undefined : { y: -8 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 22 }}
//                     className="group h-full rounded-2xl bg-white p-6 shadow-[0_6px_14px_-4px_rgba(2,20,58,0.2)] transition-shadow duration-300 hover:shadow-[0_28px_45px_-14px_rgba(2,20,58,0.35)]"
//                   >
//                     <p className="text-[0.78rem] font-medium uppercase tracking-wider text-maroon sm:text-[0.82rem]">
//                       {m.tag}
//                     </p>
//                     <h3 className="mt-2 font-poppins font-medium text-navy [font-size:clamp(1.2rem,1rem+0.5vw,1.5rem)]">
//                       {m.title}
//                     </h3>
//                     <p className="mt-3 text-[0.95rem] leading-[1.75] text-[#52525b]">
//                       {m.desc}
//                     </p>
//                   </motion.div>
//                 </motion.li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Quote, ShieldCheck } from "lucide-react";
import { ParallaxImage, Reveal, SplitWords, ease } from "./motion";

/* ---------- Content ---------- */

/* Words wrapped in ** ** are highlighted */
const story = [
  "English Chapel Sanctuary of Peace, Ogo-Oluwa, Osogbo, is rooted in the rich spiritual heritage of the **Cherubim and Seraphim** Christian movement, one of Nigeria's historic indigenous Christian movements.",
  "The movement emerged in Nigeria in **1925** through the ministry of Saint Moses Orimolade Tunolase, popularly known as **Baba Aladura**, whose passion for evangelism, fervent prayers, holiness and spiritual revival contributed significantly to the growth of Christianity in Nigeria.",
  "As the movement expanded across the country, it reached Osogbo in **April 1927**, spreading its distinctive tradition of prayer, worship, faith and total dependence on God.",
];

const storyWords = story.map((p) =>
  p
    .split(/(\*\*[^*]+\*\*)/)
    .filter(Boolean)
    .flatMap((seg) => {
      const hl = seg.startsWith("**");
      const text = hl ? seg.slice(2, -2) : seg;
      return text
        .split(/\s+/)
        .filter(Boolean)
        .map((w) => ({ w, hl }));
    }),
);
const totalWords = storyWords.flat().length;

const years = [
  { y: "1925", t: "Movement begins" },
  { y: "1927", t: "Reaches Osogbo" },
  { y: "1996", t: "English Chapel founded" },
];

const milestones = [
  {
    n: "01",
    tag: "1996 · Foundation",
    title: "The Mustard Seed",
    desc: "Twelve pioneer families began regular Sunday expository services at Station Road, dedicated to uncompromising Scripture.",
  },
  {
    n: "02",
    tag: "2004 · Dedication",
    title: "Haven Dedication",
    desc: "The main auditorium was completed and solemnly dedicated as the Sanctuary of Peace, beginning daily intercessory watches.",
  },
  {
    n: "03",
    tag: "2015 · Elevation",
    title: "District Headquarters",
    desc: "Charters were ratified making English Chapel the administrative seat of Osogbo District, overseeing regional church plants and leadership schools.",
  },
  {
    n: "04",
    tag: "2024+ · Expansion",
    title: "Empowerment Era",
    desc: "Groundbreaking for the Multipurpose Youth Arena, a Digital Media Suite, and sustainable community welfare projects.",
  },
];

/* ---------- Word-by-word reveal ---------- */

function Word({
  children,
  progress,
  range,
  hl,
  reduce,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  hl: boolean;
  reduce: boolean | null;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span
      style={{ opacity: reduce ? 1 : opacity }}
      className={`mr-[0.26em] inline-block ${
        hl ? "font-semibold text-[#f4a39b]" : ""
      }`}
    >
      {children}
    </motion.span>
  );
}

/* ---------- Component ---------- */

export default function About() {
  const reduce = useReducedMotion();

  // Scroll-drawn timeline line
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  // Story: scroll-linked word reveal + watermark parallax + progress hairline
  const storySectionRef = useRef<HTMLElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: wordProgress } = useScroll({
    target: storyTextRef,
    // starts a little earlier / ends a little sooner so phones never sit on dim text
    offset: ["start 0.88", "end 0.55"],
  });
  const { scrollYProgress: sectionProgress } = useScroll({
    target: storySectionRef,
    offset: ["start end", "end start"],
  });
  const ghostY = useTransform(sectionProgress, [0, 1], [60, -60]);
  const readBar = useSpring(wordProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      {/* ───────── Our Story ───────── */}
      <section
        id="about"
        ref={storySectionRef}
        className="relative overflow-hidden bg-[#0b1f44] py-16 sm:py-24 lg:py-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#2d4fa3]/30 blur-[100px] sm:h-[620px] sm:w-[620px] sm:blur-[110px]"
        />
        <motion.span
          aria-hidden
          style={{ y: reduce ? 0 : ghostY }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-poppins text-[7rem] font-bold leading-none text-white/[0.05] sm:text-[16rem] lg:text-[26rem]"
        >
          1925
        </motion.span>

        <div className="container-x relative">
          <Reveal className="text-center">
            <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#f4a39b] ring-1 ring-white/15 sm:text-[0.75rem]">
              Who We Are
            </p>
          </Reveal>

          <h2 className="t-h2 mt-4 text-center !text-white">
            <SplitWords text="Our Story," inView />{" "}
            <SplitWords
              text="His Glory"
              inView
              delay={0.2}
              className="!text-[#f4a39b]"
            />
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="mx-auto mt-6 h-px w-24 origin-center bg-gradient-to-r from-transparent via-[#f4a39b] to-transparent"
          />

          {/* Reading progress hairline */}
          <div className="mx-auto mt-8 h-[3px] w-full max-w-4xl overflow-hidden rounded-full bg-white/10 sm:mt-12">
            <motion.div
              style={{ scaleX: reduce ? 1 : readBar }}
              className="h-full origin-left rounded-full bg-[#f4a39b]"
            />
          </div>

          <div
            ref={storyTextRef}
            className="mx-auto mt-8 max-w-4xl text-left font-poppins text-[1.08rem] font-medium leading-[1.7] text-white sm:mt-10 sm:text-[1.5rem] md:text-center lg:text-[1.85rem] lg:leading-[1.6]"
          >
            {(() => {
              let i = 0;
              return storyWords.map((words, pi) => (
                <p key={pi} className={pi === 0 ? "" : "mt-6 sm:mt-9"}>
                  {words.map((x, wi) => {
                    const idx = i++;
                    return (
                      <Word
                        key={wi}
                        progress={wordProgress}
                        range={[idx / totalWords, (idx + 1) / totalWords]}
                        hl={x.hl}
                        reduce={reduce}
                      >
                        {x.w}
                      </Word>
                    );
                  })}
                </p>
              ));
            })()}
          </div>

          {/* Year chips */}
          <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-2 sm:mt-14 sm:gap-4">
            {years.map((y, i) => (
              <motion.li
                key={y.y}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease, delay: i * 0.12 }}
                className="rounded-2xl bg-white/[0.07] px-2 py-4 text-center ring-1 ring-white/10 backdrop-blur sm:px-4 sm:py-5"
              >
                <p className="font-poppins text-[1.3rem] font-semibold text-[#f4a39b] sm:text-[2rem]">
                  {y.y}
                </p>
                <p className="mt-1 text-[0.66rem] leading-snug text-white/70 sm:text-[0.85rem]">
                  {y.t}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Heritage & Origins ───────── */}
      <section id="gallery" className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-x-16">
          {/* Image + badge (image first on phones) */}
          <div className="relative order-1 lg:order-2">
            <ParallaxImage
              src="/images/landing/ch3.jpeg"
              alt="Choir in white garments singing during the Anointing Service"
              className="aspect-[4/3] w-full shadow-xl shadow-navy/10 sm:aspect-[848/598]"
              round={24}
              intensity={3}
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0b1f44]/55 via-transparent to-transparent lg:hidden" />

            {/* Badge: inside the photo on phones, overlapping edge on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.5 }}
              className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-auto lg:-bottom-6 lg:-left-10"
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-3 rounded-2xl bg-[#112a56]/95 px-4 py-3 shadow-[0_25px_40px_-12px_rgba(2,20,58,0.55)] backdrop-blur sm:gap-4 sm:px-6 sm:py-4"
              >
                <ShieldCheck
                  className="shrink-0 text-[#f4a39b]"
                  size={28}
                  strokeWidth={1.7}
                />
                <span>
                  <span className="block text-[0.66rem] font-light uppercase tracking-wider text-[#d3d9ea] sm:text-[0.78rem]">
                    Sanctuary Charter
                  </span>
                  <span className="block font-poppins text-[1rem] font-medium text-white sm:text-[1.2rem]">
                    Osogbo District HQ
                  </span>
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Text */}
          <div className="order-2 lg:order-1">
            <Reveal x={-40} y={0}>
              <p className="t-label">Our Heritage &amp; Origins</p>
            </Reveal>
            <Reveal delay={0.1} x={-40} y={0}>
              <h2 className="t-h2 mt-3 leading-[1.25] sm:leading-[1.3]">
                From a Living Room Fellowship to District Headquarters
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-[0.98rem] leading-[1.8] text-[#52525b] sm:mt-6 sm:text-[1.05rem] sm:leading-[1.85]">
                In 1996, a devoted band of university lecturers, civil servants,
                and passionate young disciples gathered in a simple living room
                with an urgent calling: to build a bilingual, reverent sanctuary
                where the peace of Jesus Christ could transform Osun State.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-[0.98rem] leading-[1.8] text-[#52525b] sm:text-[1.05rem] sm:leading-[1.85]">
                Named{" "}
                <span className="font-semibold text-navy-2">
                  English Chapel
                </span>{" "}
                to bridge ethnic and linguistic barriers, the church grew into a
                beacon of theological discipline and spiritual revival, and was
                later designated the Osogbo District Headquarters in recognition
                of its missionary impact.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <motion.figure
                whileHover={reduce ? undefined : { x: 6 }}
                className="relative mt-7 overflow-hidden rounded-2xl border-l-4 border-maroon bg-[#e8edff] py-5 pl-5 pr-5 sm:mt-8 sm:py-6 sm:pl-8 sm:pr-6"
              >
                <Quote
                  aria-hidden
                  className="absolute right-3 top-2 text-navy/10"
                  size={52}
                  strokeWidth={1.5}
                />
                <blockquote className="relative text-[0.98rem] italic leading-[1.7] text-[#1f2937] sm:text-[1.05rem]">
                  &ldquo;We built not merely with stone, but with tears of
                  intercession, fervent worship, and an unbending thirst for
                  sound doctrine.&rdquo;
                </blockquote>
              </motion.figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── Milestones ───────── */}
      <section id="milestones" className="bg-mist py-14 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <p className="t-label">Our Journey</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="t-h2 mt-3">Milestones in Our Journey</h2>
          </Reveal>

          <div ref={timelineRef} className="relative mt-10 lg:mt-16">
            {/* Vertical track (phones) */}
            <div className="absolute bottom-0 left-[21px] top-0 w-[2px] bg-navy/10 lg:hidden" />
            <motion.div
              style={{ scaleY: reduce ? 1 : progress }}
              className="absolute bottom-0 left-[21px] top-0 w-[2px] origin-top bg-gradient-to-b from-maroon to-[#f4a39b] lg:hidden"
            />
            {/* Horizontal track (desktop) */}
            <div className="absolute left-0 right-0 top-[25px] hidden h-[2px] bg-navy/10 lg:block" />
            <motion.div
              style={{ scaleX: reduce ? 1 : progress }}
              className="absolute left-0 right-0 top-[25px] hidden h-[2px] origin-left bg-maroon lg:block"
            />

            <ol className="relative grid gap-6 lg:grid-cols-4 lg:gap-6">
              {milestones.map((m, i) => (
                <motion.li
                  key={m.n}
                  initial={{ opacity: 0, x: 36, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                    delay: i * 0.05,
                  }}
                  className="relative pl-14 lg:pl-0 lg:pt-16"
                >
                  {/* Number badge on the line */}
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 16,
                      delay: 0.2,
                    }}
                    className="absolute left-0 top-0 z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border-4 border-mist bg-navy-2 font-poppins text-[0.9rem] text-white shadow-md lg:h-[52px] lg:w-[52px] lg:text-[1.05rem]"
                  >
                    {m.n}
                  </motion.span>

                  <motion.div
                    whileHover={reduce ? undefined : { y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group relative h-full overflow-hidden rounded-2xl bg-white p-5 shadow-[0_6px_14px_-4px_rgba(2,20,58,0.2)] transition-shadow duration-300 hover:shadow-[0_28px_45px_-14px_rgba(2,20,58,0.35)] sm:p-6"
                  >
                    {/* big faded number */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-2 -top-3 select-none font-poppins text-[4.5rem] font-bold leading-none text-navy/[0.05]"
                    >
                      {m.n}
                    </span>
                    <p className="relative text-[0.74rem] font-medium uppercase tracking-wider text-maroon sm:text-[0.82rem]">
                      {m.tag}
                    </p>
                    <h3 className="relative mt-2 font-poppins font-medium text-navy [font-size:clamp(1.15rem,1rem+0.5vw,1.5rem)]">
                      {m.title}
                    </h3>
                    <p className="relative mt-2.5 text-[0.92rem] leading-[1.7] text-[#52525b] sm:mt-3 sm:text-[0.95rem] sm:leading-[1.75]">
                      {m.desc}
                    </p>
                  </motion.div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
