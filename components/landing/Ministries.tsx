// "use client";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
// import { rail, railItem } from "./Events";
// import { ministries } from "./data";

// const MLink = motion.create(Link);

// export default function Ministries() {
//   return (
//     <section id="ministries" className="bg-mist py-10 sm:py-20 lg:py-[5.5rem]">
//       <div className="container-x">
//         <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <Reveal x={-30} y={0}>
//               <p className="t-label">Active Fellowships</p>
//             </Reveal>
//             <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
//               <SplitWords text="Find Your Place. Grow in Faith." inView />
//             </h2>
//           </div>
//           <Reveal
//             delay={0.15}
//             className="hidden max-w-[26rem] sm:block lg:text-left"
//           >
//             <p className="t-small text-[#52525b]">
//               Explore specialized ministries curated to nurture every age, life
//               season, and spiritual calling within our district.
//             </p>
//           </Reveal>
//         </div>

//         <Stagger
//           className={`mt-7 lg:mt-12 ${rail}`}
//           stagger={0.1}
//           amount={0.05}
//         >
//           {ministries.map((m) => (
//             <Item key={m.title} className={`${railItem} md:h-full`}>
//               <Tilt className="h-full" max={4} lift={-8}>
//                 <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_-12px_rgba(2,20,58,0.25)] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.4)]">
//                   <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[16/8.5]">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={m.img}
//                       alt={m.title}
//                       loading="lazy"
//                       className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
//                     <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[0.68rem] font-semibold text-navy-2 backdrop-blur">
//                       {m.tag}
//                     </span>
//                   </div>
//                   <div className="p-5 sm:p-6">
//                     <h3 className="t-card-title">{m.title}</h3>
//                     <p className="mt-2 line-clamp-3 text-[0.85rem] leading-[1.65] text-ink sm:mt-2.5 sm:line-clamp-none sm:text-[0.88rem] sm:leading-[1.7]">
//                       {m.desc}
//                     </p>
//                     <Link
//                       href="/ministries"
//                       className="mt-3 inline-flex sm:mt-4 items-center gap-1.5 text-[0.85rem] font-semibold text-maroon"
//                     >
//                       Get Connected
//                       <ArrowRight
//                         size={15}
//                         className="transition-transform duration-300 group-hover:translate-x-1.5"
//                       />
//                     </Link>
//                   </div>
//                 </article>
//               </Tilt>
//             </Item>
//           ))}
//         </Stagger>

//         <Reveal className="mt-10 flex justify-center">
//           <MLink
//             href="/ministries"
//             whileHover={{ y: -3, scale: 1.04 }}
//             whileTap={{ scale: 0.96 }}
//             className="shimmer inline-flex items-center gap-2 rounded-lg bg-maroon px-8 py-3.5 font-poppins text-[0.92rem] font-medium text-white shadow-lg shadow-maroon/25"
//           >
//             View More <ArrowRight size={17} />
//           </MLink>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Item, Reveal, SplitWords, Stagger, Tilt } from "../motion";
import { ministries } from "./data";

const MLink = motion.create(Link);

type Ministry = (typeof ministries)[number];

function MinistryCard({
  m,
  hidden = false,
}: {
  m: Ministry;
  hidden?: boolean;
}) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_-12px_rgba(2,20,58,0.25)] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.4)]">
      <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[16/8.5]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={m.img}
          alt={m.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
        <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[0.68rem] font-semibold text-navy-2 backdrop-blur">
          {m.tag}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="t-card-title">{m.title}</h3>
        <p className="mt-2 line-clamp-3 text-[0.85rem] leading-[1.65] text-ink sm:mt-2.5 sm:line-clamp-none sm:text-[0.88rem] sm:leading-[1.7]">
          {m.desc}
        </p>
        <Link
          href="/ministries"
          tabIndex={hidden ? -1 : undefined}
          className="mt-3 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-maroon sm:mt-4"
        >
          Get Connected
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </Link>
      </div>
    </article>
  );
}

export default function Ministries() {
  const reduce = useReducedMotion();
  // Two identical copies so the loop is seamless
  const loop = [...ministries, ...ministries];

  return (
    <section id="ministries" className="bg-mist py-10 sm:py-20 lg:py-[5.5rem]">
      <div className="container-x">
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <Reveal x={-30} y={0}>
              <p className="t-label">Active Fellowships</p>
            </Reveal>
            <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
              <SplitWords text="Find Your Place. Grow in Faith." inView />
            </h2>
          </div>
          <Reveal
            delay={0.15}
            className="hidden max-w-[26rem] sm:block lg:text-left"
          >
            <p className="t-small text-[#52525b]">
              Explore specialized ministries curated to nurture every age, life
              season, and spiritual calling within our district.
            </p>
          </Reveal>
        </div>
      </div>

      {/* MOBILE: non-stop marquee, full width with faded edges */}
      <div
        className="mt-7 overflow-hidden py-4 md:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)",
        }}
      >
        <motion.div
          className="flex w-max items-stretch"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{
            duration: ministries.length * 7, // raise for slower, lower for faster
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {loop.map((m, i) => {
            const isClone = i >= ministries.length;
            return (
              <div
                key={`${m.title}-${i}`}
                aria-hidden={isClone || undefined}
                className="mr-4 w-[280px] shrink-0 sm:w-[340px]"
              >
                <MinistryCard m={m} hidden={isClone} />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* DESKTOP / TABLET: original grid with stagger + tilt */}
      <div className="container-x hidden md:block">
        <Stagger
          className="mt-12 grid grid-cols-3 gap-6 lg:gap-8"
          stagger={0.1}
          amount={0.05}
        >
          {ministries.map((m) => (
            <Item key={m.title} className="h-full">
              <Tilt className="h-full" max={4} lift={-8}>
                <MinistryCard m={m} />
              </Tilt>
            </Item>
          ))}
        </Stagger>
      </div>

      <div className="container-x">
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
