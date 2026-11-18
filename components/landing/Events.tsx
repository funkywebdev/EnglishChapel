// // "use client";
// // import { motion, useReducedMotion, type Variants } from "framer-motion";
// // import { ArrowRight } from "lucide-react";
// // import { Reveal, SplitWords, Tilt, ease } from "../motion";
// // import { events } from "./data";

// // /* Kept as exports in case another file imports them. */
// // export const rail = "flex flex-col gap-0";
// // export const railItem = "w-full text-center";

// // /* Tight outline icons used in the design (clock = maroon, pin = navy). */
// // function ClockIcon({ className = "" }: { className?: string }) {
// //   return (
// //     <svg
// //       viewBox="0 0 20 20"
// //       aria-hidden="true"
// //       className={`shrink-0 fill-none stroke-current ${className}`}
// //       strokeWidth={1.6}
// //     >
// //       <circle cx="10" cy="10" r="9.1" />
// //       <path d="M9.7 5V9.3L13.9 13.6" />
// //     </svg>
// //   );
// // }

// // function PinIcon({ className = "" }: { className?: string }) {
// //   return (
// //     <svg
// //       viewBox="0 0 17 20"
// //       aria-hidden="true"
// //       className={`shrink-0 fill-none stroke-current ${className}`}
// //       strokeWidth={1.6}
// //     >
// //       <path d="M8 19C8 19 1 12.8 1 7.8a7 7 0 0 1 14 0C15 12.8 8 19 8 19Z" />
// //       <circle cx="8" cy="7.8" r="1.9" className="fill-current stroke-none" />
// //     </svg>
// //   );
// // }

// // export default function Events() {
// //   const reduce = useReducedMotion();

// //   /* card: rises in, then its children appear one after another */
// //   const card: Variants = {
// //     hidden: reduce
// //       ? { opacity: 0 }
// //       : { opacity: 0, y: 70, scale: 0.94, filter: "blur(8px)" },
// //     show: {
// //       opacity: 1,
// //       y: 0,
// //       scale: 1,
// //       filter: "blur(0px)",
// //       transition: {
// //         duration: 0.9,
// //         ease,
// //         when: "beforeChildren",
// //         staggerChildren: 0.11,
// //       },
// //     },
// //   };

// //   const child: Variants = {
// //     hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
// //     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
// //   };

// //   const pop: Variants = {
// //     hidden: reduce ? { opacity: 0 } : { opacity: 0, scale: 0, rotate: -25 },
// //     show: {
// //       opacity: 1,
// //       scale: 1,
// //       rotate: 0,
// //       transition: { type: "spring", stiffness: 260, damping: 15 },
// //     },
// //   };

// //   return (
// //     <section
// //       id="events"
// //       className="relative overflow-hidden bg-mist py-12 sm:py-20 lg:pb-[5.5rem] lg:pt-[53px]"
// //     >
// //       {/* drifting glows */}
// //       <motion.div
// //         aria-hidden
// //         animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 24, 0] }}
// //         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute rounded-full pointer-events-none -left-24 top-20 h-72 w-72 bg-maroon/10 blur-3xl"
// //       />
// //       <motion.div
// //         aria-hidden
// //         animate={reduce ? undefined : { x: [0, -30, 0], y: [0, -24, 0] }}
// //         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute bottom-10 rounded-full pointer-events-none -right-24 h-80 w-80 bg-navy/10 blur-3xl"
// //       />

// //       {/* floating dots */}
// //       {!reduce &&
// //         [...Array(6)].map((_, i) => (
// //           <motion.span
// //             key={i}
// //             aria-hidden
// //             className="absolute rounded-full pointer-events-none bg-maroon/30"
// //             style={{
// //               left: `${10 + i * 15}%`,
// //               top: `${12 + ((i * 23) % 70)}%`,
// //               width: 4 + (i % 3) * 2,
// //               height: 4 + (i % 3) * 2,
// //             }}
// //             animate={{ y: [0, -28, 0], opacity: [0, 0.8, 0] }}
// //             transition={{
// //               duration: 6 + i,
// //               repeat: Infinity,
// //               delay: i * 0.9,
// //               ease: "easeInOut",
// //             }}
// //           />
// //         ))}

// //       <div className="container-x relative">
// //         {/* header: centred on small screens, label + title left and link right on desktop */}
// //         <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-4 lg:text-left">
// //           <div className="flex flex-col items-center gap-3 lg:items-start lg:gap-0 lg:pl-0.5">
// //             <Reveal y={20}>
// //               <p className="flex items-center justify-center gap-3 t-label lg:justify-start lg:text-base lg:leading-6">
// //                 <motion.span
// //                   initial={{ width: 0 }}
// //                   whileInView={{ width: 28 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.8, ease }}
// //                   className="block h-px bg-maroon lg:hidden"
// //                 />
// //                 Sanctuary Calendar
// //                 <motion.span
// //                   initial={{ width: 0 }}
// //                   whileInView={{ width: 28 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.8, ease }}
// //                   className="block h-px bg-maroon lg:hidden"
// //                 />
// //               </p>
// //             </Reveal>
// //             <h2 className="t-h2 mt-1 [font-size:clamp(1.6rem,1.05rem+1.8vw,2.5rem)] lg:mt-[15px] lg:leading-[48px]">
// //               <SplitWords text="Be Part of What’s Happening" inView />
// //             </h2>
// //           </div>
// //           <Reveal delay={0.15}>
// //             <a
// //               href="#"
// //               className="whitespace-nowrap text-[0.85rem] font-semibold text-maroon underline-offset-4 hover:underline lg:mt-8 lg:font-poppins lg:text-[18.7px] lg:font-medium lg:leading-7"
// //             >
// //               View All Events
// //             </a>
// //           </Reveal>
// //         </div>

// //         {/* cards: one column on small screens, three columns on desktop */}
// //         <div className="grid grid-cols-1 mx-auto mt-9 max-w-3xl lg:mt-[60px] lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-x-[68px]">
// //           {events.map((e, i) => (
// //             <div
// //               key={e.title}
// //               className="flex flex-col items-center lg:items-stretch"
// //             >
// //               <motion.div
// //                 variants={card}
// //                 initial="hidden"
// //                 whileInView="show"
// //                 viewport={{ once: true, amount: 0.2 }}
// //                 className="w-full"
// //               >
// //                 <Tilt className="h-full" max={3} lift={-6}>
// //                   <article className="relative flex flex-col items-center p-5 overflow-hidden text-center transition-shadow duration-300 bg-white group rounded-2xl shadow-[0_8px_24px_-12px_rgba(2,20,58,0.25)] hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.4)] sm:p-7 lg:items-stretch lg:rounded-[18px] lg:p-8 lg:text-left">
// //                     {/* top accent line draws from the centre (small screens only) */}
// //                     <motion.span
// //                       aria-hidden
// //                       variants={{
// //                         hidden: { scaleX: 0 },
// //                         show: {
// //                           scaleX: 1,
// //                           transition: { duration: 1, ease },
// //                         },
// //                       }}
// //                       className="absolute inset-x-0 top-0 h-[3px] origin-center bg-gradient-to-r from-maroon via-navy-2 to-maroon lg:hidden"
// //                     />

// //                     {/* date badge (left) and tag pill (right) */}
// //                     <div className="flex flex-col items-center lg:w-full lg:flex-row lg:items-start lg:justify-between">
// //                       {/* date badge with pulsing ring */}
// //                       <motion.div
// //                         variants={pop}
// //                         className="relative lg:w-[85px]"
// //                       >
// //                         {!reduce && (
// //                           <motion.span
// //                             aria-hidden
// //                             animate={{ scale: [1, 1.35], opacity: [0.35, 0] }}
// //                             transition={{
// //                               duration: 2.4,
// //                               repeat: Infinity,
// //                               ease: "easeOut",
// //                             }}
// //                             className="absolute inset-0 rounded-xl bg-maroon lg:rounded-[10px]"
// //                           />
// //                         )}
// //                         <div className="relative overflow-hidden text-center text-white shadow-lg rounded-xl bg-navy-2 shadow-navy/20 lg:rounded-[10px] lg:bg-navy lg:shadow-none">
// //                           <p className="bg-maroon px-6 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider lg:flex lg:h-6 lg:items-center lg:justify-center lg:py-0 lg:text-[14px] lg:font-bold">
// //                             {e.month}
// //                           </p>
// //                           <p className="px-6 py-1.5 font-poppins text-[1.7rem] font-semibold leading-none lg:flex lg:h-[53px] lg:items-center lg:justify-center lg:py-0 lg:text-[33px] lg:font-bold">
// //                             {e.day}
// //                           </p>
// //                         </div>
// //                       </motion.div>

// //                       <motion.span
// //                         variants={child}
// //                         className="mt-3 rounded-md bg-mist px-3 py-1 text-[0.7rem] font-semibold text-navy-2 lg:mt-0 lg:inline-flex lg:h-[34.7px] lg:min-w-[129px] lg:items-center lg:justify-center lg:rounded-full lg:bg-navy-2 lg:px-5 lg:py-0 lg:font-poppins lg:text-base lg:font-medium lg:text-white"
// //                       >
// //                         {e.tag}
// //                       </motion.span>
// //                     </div>

// //                     <motion.h3
// //                       variants={child}
// //                       className="mt-4 font-poppins text-[1.25rem] font-medium leading-snug text-navy sm:text-[1.4rem] lg:mt-[30.7px] lg:text-[26.9px] lg:leading-[34px]"
// //                     >
// //                       {e.title}
// //                     </motion.h3>

// //                     <motion.p
// //                       variants={child}
// //                       className="mt-2 max-w-[34rem] text-[0.86rem] leading-[1.7] text-ink sm:mt-2.5 sm:text-[0.92rem] lg:mt-[13.4px] lg:max-w-none lg:text-[16.1px] lg:leading-[29.33px] lg:text-[#333]"
// //                     >
// //                       {e.desc}
// //                     </motion.p>

// //                     {/* time + place: stacked, icon above text on mobile */}
// //                     <ul className="flex flex-col w-full gap-4 mt-5 text-navy-2 sm:gap-3 lg:mt-[7px] lg:gap-0">
// //                       {[
// //                         {
// //                           icon: (
// //                             <ClockIcon className="h-[15px] w-[15px] lg:h-5 lg:w-5" />
// //                           ),
// //                           tone: "text-maroon",
// //                           text: e.when,
// //                         },
// //                         {
// //                           icon: (
// //                             <PinIcon className="h-[15px] w-[13px] lg:h-5 lg:w-[17px]" />
// //                           ),
// //                           tone: "text-maroon lg:text-navy",
// //                           text: e.where,
// //                         },
// //                       ].map(({ icon, tone, text }, k) => (
// //                         <motion.li
// //                           key={k}
// //                           variants={child}
// //                           className="flex flex-col items-center gap-1.5 sm:flex-row sm:justify-center sm:gap-2.5 lg:h-7 lg:justify-start"
// //                         >
// //                           <span
// //                             className={`grid w-8 h-8 rounded-full shrink-0 place-items-center bg-mist lg:h-auto lg:w-auto lg:bg-transparent ${tone}`}
// //                           >
// //                             {icon}
// //                           </span>
// //                           <span className="text-[0.84rem] sm:text-[0.88rem] lg:text-[16.2px] lg:leading-6 lg:text-[#44474f]">
// //                             {text}
// //                           </span>
// //                         </motion.li>
// //                       ))}
// //                     </ul>

// //                     <motion.a
// //                       variants={child}
// //                       href="#"
// //                       whileHover={{ scale: 1.03 }}
// //                       whileTap={{ scale: 0.97 }}
// //                       className="shimmer group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-maroon py-3.5 font-poppins text-[0.9rem] font-medium text-white shadow-lg shadow-maroon/25 sm:w-auto sm:px-10 lg:mt-[21px] lg:h-[45.5px] lg:w-full lg:rounded-[10px] lg:py-0 lg:text-base lg:shadow-none"
// //                     >
// //                       {e.cta}
// //                       <motion.span
// //                         animate={reduce ? undefined : { x: [0, 4, 0] }}
// //                         transition={{
// //                           duration: 1.6,
// //                           repeat: Infinity,
// //                           ease: "easeInOut",
// //                         }}
// //                         className="inline-flex lg:hidden"
// //                       >
// //                         <ArrowRight size={16} />
// //                       </motion.span>
// //                     </motion.a>
// //                   </article>
// //                 </Tilt>
// //               </motion.div>

// //               {/* connector between stacked cards (small screens only) */}
// //               {i < events.length - 1 && (
// //                 <div
// //                   aria-hidden
// //                   className="flex flex-col items-center py-1 lg:hidden"
// //                 >
// //                   <motion.span
// //                     initial={{ scaleY: 0 }}
// //                     whileInView={{ scaleY: 1 }}
// //                     viewport={{ once: true, amount: 0.8 }}
// //                     transition={{ duration: 0.7, ease }}
// //                     className="block h-8 w-px origin-top bg-gradient-to-b from-maroon/60 to-maroon/10"
// //                   />
// //                   <motion.span
// //                     animate={
// //                       reduce
// //                         ? undefined
// //                         : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }
// //                     }
// //                     transition={{
// //                       duration: 2,
// //                       repeat: Infinity,
// //                       ease: "easeInOut",
// //                     }}
// //                     className="block w-2 h-2 rounded-full bg-maroon"
// //                   />
// //                   <span className="block h-8 w-px bg-gradient-to-b from-maroon/10 to-transparent" />
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";
// import { motion, useReducedMotion, type Variants } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Reveal, SplitWords, Tilt, ease } from "../motion";
// import { events } from "./data";

// /* Kept as exports in case another file imports them. */
// export const rail = "flex flex-col gap-0";
// export const railItem = "w-full text-center";

// function ClockIcon({ className = "" }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 20 20"
//       aria-hidden="true"
//       className={`shrink-0 fill-none stroke-current ${className}`}
//       strokeWidth={1.6}
//     >
//       <circle cx="10" cy="10" r="9.1" />
//       <path d="M9.7 5V9.3L13.9 13.6" />
//     </svg>
//   );
// }

// function PinIcon({ className = "" }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 17 20"
//       aria-hidden="true"
//       className={`shrink-0 fill-none stroke-current ${className}`}
//       strokeWidth={1.6}
//     >
//       <path d="M8 19C8 19 1 12.8 1 7.8a7 7 0 0 1 14 0C15 12.8 8 19 8 19Z" />
//       <circle cx="8" cy="7.8" r="1.9" className="fill-current stroke-none" />
//     </svg>
//   );
// }

// export default function Events() {
//   const reduce = useReducedMotion();

//   const card: Variants = {
//     hidden: reduce
//       ? { opacity: 0 }
//       : { opacity: 0, y: 70, scale: 0.94, filter: "blur(8px)" },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       filter: "blur(0px)",
//       transition: {
//         duration: 0.9,
//         ease,
//         when: "beforeChildren",
//         staggerChildren: 0.11,
//       },
//     },
//   };

//   const child: Variants = {
//     hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
//   };

//   const pop: Variants = {
//     hidden: reduce ? { opacity: 0 } : { opacity: 0, scale: 0, rotate: -25 },
//     show: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: { type: "spring", stiffness: 260, damping: 15 },
//     },
//   };

//   return (
//     <section
//       id="events"
//       className="relative overflow-hidden bg-mist py-12 sm:py-20 lg:pb-[5.5rem] lg:pt-[53px]"
//     >
//       {/* drifting glows */}
//       <motion.div
//         aria-hidden
//         animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 24, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute rounded-full pointer-events-none -left-24 top-20 h-72 w-72 bg-maroon/10 blur-3xl"
//       />
//       <motion.div
//         aria-hidden
//         animate={reduce ? undefined : { x: [0, -30, 0], y: [0, -24, 0] }}
//         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-10 rounded-full pointer-events-none -right-24 h-80 w-80 bg-navy/10 blur-3xl"
//       />

//       {/* floating dots */}
//       {!reduce &&
//         [...Array(6)].map((_, i) => (
//           <motion.span
//             key={i}
//             aria-hidden
//             className="absolute rounded-full pointer-events-none bg-maroon/30"
//             style={{
//               left: `${10 + i * 15}%`,
//               top: `${12 + ((i * 23) % 70)}%`,
//               width: 4 + (i % 3) * 2,
//               height: 4 + (i % 3) * 2,
//             }}
//             animate={{ y: [0, -28, 0], opacity: [0, 0.8, 0] }}
//             transition={{
//               duration: 6 + i,
//               repeat: Infinity,
//               delay: i * 0.9,
//               ease: "easeInOut",
//             }}
//           />
//         ))}

//       <div className="container-x relative">
//         {/* header: left-aligned row on mobile (title + link), same as desktop */}
//         <div className="flex items-end justify-between gap-4 lg:items-start">
//           <div className="flex flex-col gap-1 lg:gap-0 lg:pl-0.5">
//             <Reveal y={20}>
//               <p className="flex items-center gap-3 t-label lg:text-base lg:leading-6">
//                 <motion.span
//                   initial={{ width: 0 }}
//                   whileInView={{ width: 24 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, ease }}
//                   className="block h-px bg-maroon lg:hidden"
//                 />
//                 Sanctuary Calendar
//               </p>
//             </Reveal>
//             <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.8vw,2.5rem)] lg:mt-[15px] lg:leading-[48px]">
//               <SplitWords text="Be Part of What’s Happening" inView />
//             </h2>
//           </div>
//           <Reveal delay={0.15}>
//             <a
//               href="#"
//               className="inline-flex items-center gap-1 pb-1 text-[0.85rem] font-semibold whitespace-nowrap text-maroon underline-offset-4 hover:underline lg:mt-8 lg:pb-0 lg:font-poppins lg:text-[18.7px] lg:font-medium lg:leading-7"
//             >
//               View All
//               <span className="lg:hidden">
//                 <ArrowRight size={14} />
//               </span>
//               <span className="hidden lg:inline"> Events</span>
//             </a>
//           </Reveal>
//         </div>

//         {/* cards: compact left-aligned stack on mobile, three columns on desktop */}
//         <div className="grid grid-cols-1 gap-4 mx-auto mt-7 max-w-3xl lg:mt-[60px] lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-x-[68px] lg:gap-y-0">
//           {events.map((e) => (
//             <motion.div
//               key={e.title}
//               variants={card}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="w-full"
//             >
//               <Tilt className="h-full" max={3} lift={-6}>
//                 <article className="relative flex flex-col p-4 overflow-hidden text-left transition-shadow duration-300 bg-white border-l-4 group rounded-2xl border-maroon shadow-[0_8px_24px_-12px_rgba(2,20,58,0.25)] hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.4)] sm:p-6 lg:items-stretch lg:rounded-[18px] lg:border-l-0 lg:p-8">
//                   {/* date badge (left) and tag pill (right) */}
//                   <div className="flex items-center justify-between w-full lg:items-start">
//                     <motion.div variants={pop} className="relative lg:w-[85px]">
//                       {!reduce && (
//                         <motion.span
//                           aria-hidden
//                           animate={{ scale: [1, 1.35], opacity: [0.35, 0] }}
//                           transition={{
//                             duration: 2.4,
//                             repeat: Infinity,
//                             ease: "easeOut",
//                           }}
//                           className="absolute inset-0 rounded-lg bg-maroon lg:rounded-[10px]"
//                         />
//                       )}
//                       {/* mobile: compact horizontal chip (month | day); desktop: stacked badge */}
//                       <div className="relative flex items-stretch overflow-hidden text-white rounded-lg bg-navy-2 lg:block lg:rounded-[10px] lg:bg-navy lg:text-center">
//                         <p className="flex items-center bg-maroon px-3 text-[0.68rem] font-semibold uppercase tracking-wider lg:h-6 lg:justify-center lg:px-6 lg:text-[14px] lg:font-bold">
//                           {e.month}
//                         </p>
//                         <p className="px-3 py-1.5 font-poppins text-[1.3rem] font-semibold leading-none lg:flex lg:h-[53px] lg:items-center lg:justify-center lg:px-6 lg:py-0 lg:text-[33px] lg:font-bold">
//                           {e.day}
//                         </p>
//                       </div>
//                     </motion.div>

//                     <motion.span
//                       variants={child}
//                       className="rounded-full bg-mist px-3 py-1 text-[0.7rem] font-semibold text-navy-2 lg:inline-flex lg:h-[34.7px] lg:min-w-[129px] lg:items-center lg:justify-center lg:bg-navy-2 lg:px-5 lg:py-0 lg:font-poppins lg:text-base lg:font-medium lg:text-white"
//                     >
//                       {e.tag}
//                     </motion.span>
//                   </div>

//                   <motion.h3
//                     variants={child}
//                     className="mt-3.5 font-poppins text-[1.15rem] font-medium leading-snug text-navy sm:text-[1.3rem] lg:mt-[30.7px] lg:text-[26.9px] lg:leading-[34px]"
//                   >
//                     {e.title}
//                   </motion.h3>

//                   <motion.p
//                     variants={child}
//                     className="mt-1.5 text-[0.86rem] leading-[1.6] text-ink line-clamp-3 sm:text-[0.92rem] lg:mt-[13.4px] lg:line-clamp-none lg:text-[16.1px] lg:leading-[29.33px] lg:text-[#333]"
//                   >
//                     {e.desc}
//                   </motion.p>

//                   {/* time + place: one tinted info box on mobile */}
//                   <ul className="flex flex-col gap-2 p-3 mt-4 rounded-xl bg-mist text-navy-2 lg:mt-[7px] lg:gap-0 lg:bg-transparent lg:p-0">
//                     {[
//                       {
//                         icon: (
//                           <ClockIcon className="h-[14px] w-[14px] lg:h-5 lg:w-5" />
//                         ),
//                         tone: "text-maroon",
//                         text: e.when,
//                       },
//                       {
//                         icon: (
//                           <PinIcon className="h-[14px] w-[12px] lg:h-5 lg:w-[17px]" />
//                         ),
//                         tone: "text-maroon lg:text-navy",
//                         text: e.where,
//                       },
//                     ].map(({ icon, tone, text }, k) => (
//                       <motion.li
//                         key={k}
//                         variants={child}
//                         className="flex items-center gap-2.5 lg:h-7"
//                       >
//                         <span
//                           className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white lg:h-auto lg:w-auto lg:bg-transparent ${tone}`}
//                         >
//                           {icon}
//                         </span>
//                         <span className="text-[0.84rem] leading-snug sm:text-[0.88rem] lg:text-[16.2px] lg:leading-6 lg:text-[#44474f]">
//                           {text}
//                         </span>
//                       </motion.li>
//                     ))}
//                   </ul>

//                   <motion.a
//                     variants={child}
//                     href="#"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.97 }}
//                     className="shimmer group/btn mt-4 inline-flex w-full items-center justify-between gap-2 rounded-lg bg-maroon px-5 py-3 font-poppins text-[0.9rem] font-medium text-white shadow-lg shadow-maroon/25 lg:mt-[21px] lg:h-[45.5px] lg:justify-center lg:rounded-[10px] lg:px-0 lg:py-0 lg:text-base lg:shadow-none"
//                   >
//                     {e.cta}
//                     <motion.span
//                       animate={reduce ? undefined : { x: [0, 4, 0] }}
//                       transition={{
//                         duration: 1.6,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className="inline-flex lg:hidden"
//                     >
//                       <ArrowRight size={16} />
//                     </motion.span>
//                   </motion.a>
//                 </article>
//               </Tilt>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, SplitWords, Tilt, ease } from "../motion";
import { events } from "./data";

/* Kept as exports in case another file imports them. */
export const rail = "flex flex-col gap-0";
export const railItem = "w-full text-center";

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`shrink-0 fill-none stroke-current ${className}`}
      strokeWidth={1.6}
    >
      <circle cx="10" cy="10" r="9.1" />
      <path d="M9.7 5V9.3L13.9 13.6" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 17 20"
      aria-hidden="true"
      className={`shrink-0 fill-none stroke-current ${className}`}
      strokeWidth={1.6}
    >
      <path d="M8 19C8 19 1 12.8 1 7.8a7 7 0 0 1 14 0C15 12.8 8 19 8 19Z" />
      <circle cx="8" cy="7.8" r="1.9" className="fill-current stroke-none" />
    </svg>
  );
}

export default function Events() {
  const reduce = useReducedMotion();

  const card: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y: 70, scale: 0.94, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease,
        when: "beforeChildren",
        staggerChildren: 0.11,
      },
    },
  };

  const child: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  };

  const pop: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, scale: 0, rotate: -25 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 15 },
    },
  };

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-mist py-12 sm:py-20 lg:pb-[5.5rem] lg:pt-[53px]"
    >
      {/* drifting glows */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 24, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full pointer-events-none -left-24 top-20 h-72 w-72 bg-maroon/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { x: [0, -30, 0], y: [0, -24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 rounded-full pointer-events-none -right-24 h-80 w-80 bg-navy/10 blur-3xl"
      />

      {/* floating dots */}
      {!reduce &&
        [...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute rounded-full pointer-events-none bg-maroon/30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${12 + ((i * 23) % 70)}%`,
              width: 4 + (i % 3) * 2,
              height: 4 + (i % 3) * 2,
            }}
            animate={{ y: [0, -28, 0], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.9,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="container-x relative">
        {/* header: left-aligned row on mobile (title + link), same as desktop */}
        <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-4 lg:text-left">
          <div className="flex flex-col items-center gap-1 lg:items-start lg:gap-0 lg:pl-0.5">
            <Reveal y={20}>
              <p className="flex items-center justify-center gap-3 t-label lg:justify-start lg:text-base lg:leading-6">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease }}
                  className="block h-px bg-maroon lg:hidden"
                />
                Sanctuary Calendar
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease }}
                  className="block h-px bg-maroon lg:hidden"
                />
              </p>
            </Reveal>
            <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.8vw,2.5rem)] lg:mt-[15px] lg:leading-[48px]">
              <SplitWords text="Be Part of What’s Happening" inView />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-1 text-[0.85rem] font-semibold whitespace-nowrap text-maroon underline-offset-4 hover:underline lg:mt-8 lg:font-poppins lg:text-[18.7px] lg:font-medium lg:leading-7"
            >
              View All
              <span className="lg:hidden">
                <ArrowRight size={14} />
              </span>
              <span className="hidden lg:inline"> Events</span>
            </a>
          </Reveal>
        </div>

        {/* cards: compact left-aligned stack on mobile, three columns on desktop */}
        <div className="grid grid-cols-1 gap-4 mx-auto mt-7 max-w-3xl lg:mt-[60px] lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-x-[68px] lg:gap-y-0">
          {events.map((e) => (
            <motion.div
              key={e.title}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full"
            >
              <Tilt className="h-full" max={3} lift={-6}>
                <article className="relative flex flex-col p-4 overflow-hidden text-left transition-shadow duration-300 bg-white border-l-4 group rounded-2xl border-maroon shadow-[0_8px_24px_-12px_rgba(2,20,58,0.25)] hover:shadow-[0_30px_50px_-20px_rgba(2,20,58,0.4)] sm:p-6 lg:items-stretch lg:rounded-[18px] lg:border-l-0 lg:p-8">
                  {/* date badge (left) and tag pill (right) */}
                  <div className="flex items-center justify-between w-full lg:items-start">
                    <motion.div variants={pop} className="relative lg:w-[85px]">
                      {!reduce && (
                        <motion.span
                          aria-hidden
                          animate={{ scale: [1, 1.35], opacity: [0.35, 0] }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                          className="absolute inset-0 rounded-lg bg-maroon lg:rounded-[10px]"
                        />
                      )}
                      {/* mobile: compact horizontal chip (month | day); desktop: stacked badge */}
                      <div className="relative flex items-stretch overflow-hidden text-white rounded-lg bg-navy-2 lg:block lg:rounded-[10px] lg:bg-navy lg:text-center">
                        <p className="flex items-center bg-maroon px-3 text-[0.68rem] font-semibold uppercase tracking-wider lg:h-6 lg:justify-center lg:px-6 lg:text-[14px] lg:font-bold">
                          {e.month}
                        </p>
                        <p className="px-3 py-1.5 font-poppins text-[1.3rem] font-semibold leading-none lg:flex lg:h-[53px] lg:items-center lg:justify-center lg:px-6 lg:py-0 lg:text-[33px] lg:font-bold">
                          {e.day}
                        </p>
                      </div>
                    </motion.div>

                    <motion.span
                      variants={child}
                      className="rounded-full bg-mist px-3 py-1 text-[0.7rem] font-semibold text-navy-2 lg:inline-flex lg:h-[34.7px] lg:min-w-[129px] lg:items-center lg:justify-center lg:bg-navy-2 lg:px-5 lg:py-0 lg:font-poppins lg:text-base lg:font-medium lg:text-white"
                    >
                      {e.tag}
                    </motion.span>
                  </div>

                  <motion.h3
                    variants={child}
                    className="mt-3.5 font-poppins text-[1.15rem] font-medium leading-snug text-navy sm:text-[1.3rem] lg:mt-[30.7px] lg:text-[26.9px] lg:leading-[34px]"
                  >
                    {e.title}
                  </motion.h3>

                  <motion.p
                    variants={child}
                    className="mt-1.5 text-[0.86rem] leading-[1.6] text-ink line-clamp-3 sm:text-[0.92rem] lg:mt-[13.4px] lg:line-clamp-none lg:text-[16.1px] lg:leading-[29.33px] lg:text-[#333]"
                  >
                    {e.desc}
                  </motion.p>

                  {/* time + place: one tinted info box on mobile */}
                  <ul className="flex flex-col gap-2 p-3 mt-4 rounded-xl bg-mist text-navy-2 lg:mt-[7px] lg:gap-0 lg:bg-transparent lg:p-0">
                    {[
                      {
                        icon: (
                          <ClockIcon className="h-[14px] w-[14px] lg:h-5 lg:w-5" />
                        ),
                        tone: "text-maroon",
                        text: e.when,
                      },
                      {
                        icon: (
                          <PinIcon className="h-[14px] w-[12px] lg:h-5 lg:w-[17px]" />
                        ),
                        tone: "text-maroon lg:text-navy",
                        text: e.where,
                      },
                    ].map(({ icon, tone, text }, k) => (
                      <motion.li
                        key={k}
                        variants={child}
                        className="flex items-center gap-2.5 lg:h-7"
                      >
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white lg:h-auto lg:w-auto lg:bg-transparent ${tone}`}
                        >
                          {icon}
                        </span>
                        <span className="text-[0.84rem] leading-snug sm:text-[0.88rem] lg:text-[16.2px] lg:leading-6 lg:text-[#44474f]">
                          {text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    variants={child}
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="shimmer group/btn mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-maroon px-5 py-3 font-poppins text-[0.9rem] font-medium text-white shadow-lg shadow-maroon/25 lg:mt-[21px] lg:h-[45.5px] lg:rounded-[10px] lg:px-0 lg:py-0 lg:text-base lg:shadow-none"
                  >
                    {e.cta}
                    <motion.span
                      animate={reduce ? undefined : { x: [0, 4, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="inline-flex lg:hidden"
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </motion.a>
                </article>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
