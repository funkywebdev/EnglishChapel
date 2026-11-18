// "use client";
// import { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { ArrowRight, ChevronDown, MailCheck, Users } from "lucide-react";
// import { Reveal } from "./motion";

// const lead =
//   "We welcome you in the matchless and glorious name of our Lord and Saviour, Jesus Christ!";

// const paragraphs = [
//   "English Chapel Sanctuary of Peace is not just an assembly of people; it is a spiritual greenhouse designed to anchor your soul in truth, strengthen your marriage, inspire your children, nurture your faith, and release you into your divine purpose. We are a family of believers united by our love for God, our commitment to His Word, and our desire to see lives transformed through the power of the Holy Spirit. Here, we believe that everyone has a place, every life has value, and every individual carries a God-given purpose waiting to be discovered and fulfilled.",
//   "Whether you are taking your first steps in faith, seeking a deeper relationship with God, navigating a challenging season, or simply longing for a place to belong, you are welcome here. You will find an atmosphere of genuine love, heartfelt worship, biblical teaching, meaningful fellowship, and spiritual encouragement to help you grow in your walk with Christ.",
//   "At Sanctuary of Peace, we are committed to raising a generation rooted in God's truth, established in His love, strengthened in faith, and equipped to make a lasting difference in their homes, communities, and the world. We believe that families can flourish, destinies can be awakened, broken hearts can be restored, and lives can be renewed in the presence of God.",
//   "Our prayer is that every time you walk through our doors, you encounter more than a church service; may you experience the warmth of God's family, the transforming power of His Word, and the peace that comes only through Christ.",
// ];

// const team = [
//   {
//     img: "/images/landing/news-1.jpg",
//     pos: "50% 0%",
//     tag: "Pastoral Ministry",
//     role: "Special Apostle Pastor",
//     bio: "A father, teacher, mentor, and a pastor — shepherding the flock with the Word and a servant's heart.",
//     name: "Joshua Oladunjoye",
//     alt: "Special Apostle Pastor Joshua Oladunjoye ministering with a microphone",
//   },
//   {
//     img: "/images/landing/news-1.jpg",
//     pos: "50% 30%",
//     tag: "Christian Education",
//     role: "Associate Pastor (Discipleship & Family Life)",
//     bio: "Leading the Believers' Foundation School, Sunday Bible School curriculum, and marriage counseling ministry.",
//     name: "Pastor David O. Oladipo",
//     alt: "Members in white garments reading their Bibles during service",
//   },
//   {
//     img: "/images/landing/news-1.jpg",
//     pos: "88% 50%",
//     tag: "Secretariat & Welfare",
//     role: "District Secretary & Welfare Coordinator",
//     bio: "Overseeing the district secretariat, member records, and the welfare outreach to widows, students, and families in need.",
//     name: "Deaconess Folashade Ajayi",
//     alt: "A minister teaching a class of members in white garments",
//   },
//   {
//     img: "/images/landing/news-1.jpg",
//     pos: "50% 35%",
//     tag: "Pastoral Care & Prayer",
//     role: "Associate Pastor (Pastoral Care & Intercession)",
//     bio: "Shepherding house fellowships, coordinating the intercessory watches, and visiting the sick and the bereaved.",
//     name: "Pastor Samuel K. Adeleke",
//     alt: "Members seated in rows with Bibles during the service",
//   },
// ];

// /** true below the `sm` breakpoint (640px) */
// function useIsMobile() {
//   const [mobile, setMobile] = useState(false);
//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 639px)");
//     const update = () => setMobile(mq.matches);
//     update();
//     mq.addEventListener("change", update);
//     return () => mq.removeEventListener("change", update);
//   }, []);
//   return mobile;
// }

// type Member = (typeof team)[number];

// function TeamCard({
//   t,
//   i,
//   total,
//   mobile,
//   reduce,
// }: {
//   t: Member;
//   i: number;
//   total: number;
//   mobile: boolean;
//   reduce: boolean | null;
// }) {
//   const ref = useRef<HTMLLIElement>(null);
//   const isLast = i === total - 1;

//   // As the next card slides over this one on phones, this one shrinks + dims.
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const stackScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
//   const stackDim = useTransform(scrollYProgress, [0, 1], [0, 0.35]);

//   const stack = mobile && !reduce && !isLast;

//   return (
//     <li
//       ref={ref}
//       // Sticky stack on phones only. Raise `top-24` if you have a taller fixed header.
//       className="sticky top-24 sm:static"
//       style={mobile ? { top: `${96 + i * 12}px` } : undefined}
//     >
//       <motion.article
//         style={
//           stack
//             ? { scale: stackScale, transformOrigin: "top center" }
//             : undefined
//         }
//         initial={reduce ? false : { opacity: 0, y: 48 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.15 }}
//         transition={{
//           type: "spring",
//           stiffness: 90,
//           damping: 18,
//           delay: mobile ? 0 : (i % 2) * 0.1,
//         }}
//         className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-12px_rgba(2,20,58,0.35)] ring-1 ring-navy/[0.06] transition-shadow duration-300 sm:rounded-2xl sm:hover:shadow-[0_24px_44px_-16px_rgba(2,20,58,0.45)]"
//       >
//         {/* Photo */}
//         <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[4/5]">
//           <motion.div
//             className="h-full w-full"
//             initial={reduce ? false : { scale: 1.2 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
//           >
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={t.img}
//               alt={t.alt}
//               loading="lazy"
//               draggable={false}
//               style={{ objectPosition: t.pos }}
//               className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//             />
//           </motion.div>
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f44]/70 via-transparent to-transparent" />

//           <motion.span
//             initial={reduce ? false : { opacity: 0, scale: 0.8, x: -12 }}
//             whileInView={{ opacity: 1, scale: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               delay: 0.25,
//               type: "spring",
//               stiffness: 220,
//               damping: 18,
//             }}
//             className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-poppins text-[0.66rem] font-medium uppercase tracking-[0.08em] text-maroon backdrop-blur"
//           >
//             {t.tag}
//           </motion.span>

//           {/* Index badge */}
//           <span className="absolute right-4 top-3 font-poppins text-[2rem] font-semibold leading-none text-white/70 sm:hidden">
//             0{i + 1}
//           </span>
//         </div>

//         {/* Text */}
//         <div className="flex flex-1 flex-col border-t-4 border-maroon p-5 text-center sm:p-5">
//           <motion.h4
//             initial={reduce ? false : { opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.15, duration: 0.5 }}
//             className="font-poppins text-[1.15rem] font-semibold text-navy sm:text-[1.1rem]"
//           >
//             {t.name}
//           </motion.h4>
//           <motion.p
//             initial={reduce ? false : { opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.25, duration: 0.5 }}
//             className="mt-1 text-[0.85rem] font-medium leading-snug text-maroon sm:text-[0.82rem]"
//           >
//             {t.role}
//           </motion.p>
//           <motion.p
//             initial={reduce ? false : { opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.35, duration: 0.5 }}
//             className="mt-3 text-[0.92rem] leading-[1.65] text-[#52525b] sm:text-[0.88rem]"
//           >
//             {t.bio}
//           </motion.p>
//         </div>

//         {/* Dim overlay while the next card covers this one (phones) */}
//         {stack && (
//           <motion.div
//             aria-hidden
//             style={{ opacity: stackDim }}
//             className="pointer-events-none absolute inset-0 rounded-3xl bg-[#0b1f44]"
//           />
//         )}
//       </motion.article>
//     </li>
//   );
// }

// export default function Leadership() {
//   const reduce = useReducedMotion();
//   const mobile = useIsMobile();
//   const [open, setOpen] = useState(false);

//   return (
//     <section id="ministries" className="bg-white">
//       <div className="container-x">
//         {/* ───────── Header ───────── */}
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 font-poppins text-[0.78rem] font-medium text-navy ring-1 ring-navy/10 sm:text-[0.85rem]">
//             <Users size={16} strokeWidth={1.8} />
//             Osogbo District Secretariat
//           </span>
//           <p className="t-label mt-5">Pastoral Stewardship</p>
//           <h2 className="t-h2 mt-2 text-balance">
//             District Leadership &amp; Pastoral Council
//           </h2>
//         </Reveal>

//         {/* ───────── Overseer ───────── */}
//         <div className="mt-10 overflow-hidden rounded-3xl bg-[#f6f8ff] ring-1 ring-navy/[0.06] sm:mt-14 lg:grid lg:grid-cols-[0.85fr_1.15fr]">
//           {/* Photo */}
//           <div className="relative">
//             <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[560px]">
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src="/images/landing/ch7.jpeg"
//                 alt="Rev. & Pastor (Mr.) Oladunjoye Joshua, District Overseer"
//                 className="absolute inset-0 h-full w-full object-cover [object-position:50%_0%] lg:[object-position:50%_20%]"
//               />
//             </div>
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1f44]/75 via-[#0b1f44]/10 to-transparent lg:hidden" />
//             {/* Name overlay on mobile */}
//             <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8 lg:hidden">
//               <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/80">
//                 Message from the Overseer
//               </p>
//               <h3 className="mt-1 font-poppins text-[1.35rem] font-semibold leading-tight sm:text-[1.8rem]">
//                 Rev. &amp; Pastor (Mr.) Oladunjoye Joshua
//               </h3>
//             </div>
//           </div>

//           {/* Message */}
//           <div className="p-6 sm:p-8 lg:p-12">
//             {/* Desktop heading */}
//             <div className="hidden lg:block">
//               <p className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-maroon">
//                 Message from the Overseer
//               </p>
//               <h3 className="mt-3 font-poppins font-semibold leading-[1.2] text-navy-2 [font-size:clamp(1.9rem,1.4rem+1vw,2.6rem)]">
//                 Rev. &amp; Pastor (Mr.) Oladunjoye Joshua
//               </h3>
//             </div>
//             <p className="text-[0.9rem] text-[#4a5878] sm:text-[0.95rem] lg:mt-2">
//               District Overseer &amp; Senior Pastor, Osogbo Headquarters
//             </p>
//             <div className="mt-4 h-[3px] w-16 rounded-full bg-maroon" />

//             <p className="mt-6 border-l-4 border-maroon pl-4 font-poppins text-[1.05rem] font-medium leading-[1.6] text-navy sm:pl-5 sm:text-[1.2rem]">
//               {lead}
//             </p>

//             <div
//               className={`relative mt-5 space-y-4 transition-[max-height] duration-500 ${
//                 open ? "" : "max-h-44 overflow-hidden lg:max-h-none"
//               }`}
//             >
//               {paragraphs.map((p, i) => (
//                 <p
//                   key={i}
//                   className="text-[0.97rem] leading-[1.8] text-[#52525b] sm:text-[1.02rem]"
//                 >
//                   {p}
//                 </p>
//               ))}
//               {!open && (
//                 <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f6f8ff] to-transparent lg:hidden" />
//               )}
//             </div>

//             <button
//               type="button"
//               onClick={() => setOpen((v) => !v)}
//               aria-expanded={open}
//               className="mt-3 inline-flex min-h-11 items-center gap-2 font-poppins text-[0.92rem] font-medium text-maroon lg:hidden"
//             >
//               {open ? "Show less" : "Read the full message"}
//               <ChevronDown
//                 size={18}
//                 className={`transition-transform duration-300 ${
//                   open ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Contact card */}
//             <motion.div
//               whileHover={reduce ? undefined : { y: -3 }}
//               className="mt-6 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy/[0.08] sm:p-5 lg:mt-8"
//             >
//               <div className="flex items-center gap-3">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-navy">
//                   <MailCheck size={22} strokeWidth={1.7} />
//                 </span>
//                 <div className="min-w-0">
//                   <p className="text-[0.68rem] uppercase tracking-[0.14em] text-[#4b5563]">
//                     Overseer&apos;s Desk
//                   </p>
//                   <a
//                     href="mailto:overseer@englishchapelosogbo.org"
//                     className="block truncate font-poppins text-[0.88rem] font-medium text-navy hover:text-maroon sm:text-[0.98rem]"
//                   >
//                     overseer@englishchapelosogbo.org
//                   </a>
//                 </div>
//               </div>
//               <a
//                 href="#visit"
//                 className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 font-poppins text-[0.92rem] font-medium text-white shadow-md transition-colors hover:bg-navy-2 sm:w-auto sm:self-start"
//               >
//                 Request Pastoral Audience
//                 <ArrowRight size={18} />
//               </a>
//             </motion.div>
//           </div>
//         </div>

//         {/* ───────── Pastoral council ───────── */}
//         <Reveal className="mt-16 text-center lg:mt-24">
//           <p className="t-label">Meet the Team</p>
//           <h3 className="mt-2 font-poppins font-semibold text-navy [font-size:clamp(1.5rem,1.1rem+1.2vw,2.3rem)]">
//             Our Pastoral Council
//           </h3>
//         </Reveal>

//         {/*
//           Phones: one card per row, stacking on top of each other as you scroll.
//           Tablet and desktop: 2 x 2 grid (never 4 across).
//         */}
//         <ul
//           aria-label="Pastoral council"
//           className="mx-auto mt-8 flex max-w-md flex-col gap-6 pb-6 sm:mt-10 sm:grid sm:max-w-4xl sm:grid-cols-2 sm:gap-6 sm:pb-0 lg:gap-8"
//         >
//           {team.map((t, i) => (
//             <TeamCard
//               key={t.name}
//               t={t}
//               i={i}
//               total={team.length}
//               mobile={mobile}
//               reduce={reduce}
//             />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown, MailCheck, Users } from "lucide-react";
import { Reveal } from "./motion";

const lead =
  "We welcome you in the matchless and glorious name of our Lord and Saviour, Jesus Christ!";

const paragraphs = [
  "English Chapel Sanctuary of Peace is not just an assembly of people; it is a spiritual greenhouse designed to anchor your soul in truth, strengthen your marriage, inspire your children, nurture your faith, and release you into your divine purpose. We are a family of believers united by our love for God, our commitment to His Word, and our desire to see lives transformed through the power of the Holy Spirit. Here, we believe that everyone has a place, every life has value, and every individual carries a God-given purpose waiting to be discovered and fulfilled.",
  "Whether you are taking your first steps in faith, seeking a deeper relationship with God, navigating a challenging season, or simply longing for a place to belong, you are welcome here. You will find an atmosphere of genuine love, heartfelt worship, biblical teaching, meaningful fellowship, and spiritual encouragement to help you grow in your walk with Christ.",
  "At Sanctuary of Peace, we are committed to raising a generation rooted in God's truth, established in His love, strengthened in faith, and equipped to make a lasting difference in their homes, communities, and the world. We believe that families can flourish, destinies can be awakened, broken hearts can be restored, and lives can be renewed in the presence of God.",
  "Our prayer is that every time you walk through our doors, you encounter more than a church service; may you experience the warmth of God's family, the transforming power of His Word, and the peace that comes only through Christ.",
];

const team = [
  {
    img: "/images/landing/news-1.jpg",
    pos: "50% 0%",
    tag: "Pastoral Ministry",
    role: "Special Apostle Pastor",
    bio: "A father, teacher, mentor, and a pastor — shepherding the flock with the Word and a servant's heart.",
    name: "Joshua Oladunjoye",
    alt: "Special Apostle Pastor Joshua Oladunjoye ministering with a microphone",
  },
  {
    img: "/images/landing/news-1.jpg",
    pos: "50% 30%",
    tag: "Christian Education",
    role: "Associate Pastor (Discipleship & Family Life)",
    bio: "Leading the Believers' Foundation School, Sunday Bible School curriculum, and marriage counseling ministry.",
    name: "Pastor David O. Oladipo",
    alt: "Members in white garments reading their Bibles during service",
  },
  {
    img: "/images/landing/news-1.jpg",
    pos: "88% 50%",
    tag: "Secretariat & Welfare",
    role: "District Secretary & Welfare Coordinator",
    bio: "Overseeing the district secretariat, member records, and the welfare outreach to widows, students, and families in need.",
    name: "Deaconess Folashade Ajayi",
    alt: "A minister teaching a class of members in white garments",
  },
  {
    img: "/images/landing/news-1.jpg",
    pos: "50% 35%",
    tag: "Pastoral Care & Prayer",
    role: "Associate Pastor (Pastoral Care & Intercession)",
    bio: "Shepherding house fellowships, coordinating the intercessory watches, and visiting the sick and the bereaved.",
    name: "Pastor Samuel K. Adeleke",
    alt: "Members seated in rows with Bibles during the service",
  },
];

/** true below the `sm` breakpoint (640px) */
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

type Member = (typeof team)[number];

function TeamCard({
  t,
  i,
  total,
  mobile,
  reduce,
}: {
  t: Member;
  i: number;
  total: number;
  mobile: boolean;
  reduce: boolean | null;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const isLast = i === total - 1;

  // As the next card slides over this one on phones, this one shrinks + dims.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const stackScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const stackDim = useTransform(scrollYProgress, [0, 1], [0, 0.35]);

  const stack = mobile && !reduce && !isLast;

  return (
    <li
      ref={ref}
      // Sticky stack on phones only. Raise `top-24` if you have a taller fixed header.
      className="sticky top-24 sm:static"
      style={mobile ? { top: `${96 + i * 12}px` } : undefined}
    >
      <motion.article
        style={
          stack
            ? { scale: stackScale, transformOrigin: "top center" }
            : undefined
        }
        initial={reduce ? false : { opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 18,
          delay: mobile ? 0 : (i % 2) * 0.1,
        }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-12px_rgba(2,20,58,0.35)] ring-1 ring-navy/[0.06] transition-all duration-300 sm:flex-row sm:rounded-2xl sm:hover:-translate-y-1 sm:hover:shadow-[0_24px_44px_-16px_rgba(2,20,58,0.45)]"
      >
        {/* Photo */}
        <div className="relative aspect-[16/11] overflow-hidden sm:aspect-auto sm:w-[38%] sm:shrink-0 sm:self-stretch">
          <motion.div
            className="h-full w-full"
            initial={reduce ? false : { scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.img}
              alt={t.alt}
              loading="lazy"
              draggable={false}
              style={{ objectPosition: t.pos }}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f44]/70 via-transparent to-transparent" />

          <motion.span
            initial={reduce ? false : { opacity: 0, scale: 0.8, x: -12 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-poppins text-[0.66rem] font-medium uppercase tracking-[0.08em] text-maroon backdrop-blur"
          >
            {t.tag}
          </motion.span>

          {/* Index badge */}
          <span className="absolute right-4 top-3 font-poppins text-[2rem] font-semibold leading-none text-white/70 sm:bottom-3 sm:right-4 sm:top-auto sm:text-[1.6rem]">
            0{i + 1}
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-1 flex-col border-t-4 border-maroon p-5 text-center sm:justify-center sm:border-l-4 sm:border-t-0 sm:p-6 sm:text-left lg:p-7">
          <motion.h4
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="font-poppins text-[1.15rem] font-semibold text-navy sm:text-[1.1rem]"
          >
            {t.name}
          </motion.h4>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-1 text-[0.85rem] font-medium leading-snug text-maroon sm:text-[0.82rem]"
          >
            {t.role}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-3 text-[0.92rem] leading-[1.65] text-[#52525b] sm:text-[0.88rem]"
          >
            {t.bio}
          </motion.p>
        </div>

        {/* Dim overlay while the next card covers this one (phones) */}
        {stack && (
          <motion.div
            aria-hidden
            style={{ opacity: stackDim }}
            className="pointer-events-none absolute inset-0 rounded-3xl bg-[#0b1f44]"
          />
        )}
      </motion.article>
    </li>
  );
}

export default function Leadership() {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <section id="ministries" className="bg-white">
      <div className="container-x">
        {/* ───────── Header ───────── */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 font-poppins text-[0.78rem] font-medium text-navy ring-1 ring-navy/10 sm:text-[0.85rem]">
            <Users size={16} strokeWidth={1.8} />
            Osogbo District Secretariat
          </span>
          <p className="t-label mt-5">Pastoral Stewardship</p>
          <h2 className="t-h2 mt-2 text-balance">
            District Leadership &amp; Pastoral Council
          </h2>
        </Reveal>

        {/* ───────── Overseer ───────── */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#f6f8ff] ring-1 ring-navy/[0.06] sm:mt-14 lg:grid lg:grid-cols-[0.85fr_1.15fr]">
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[560px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/landing/ch7.jpeg"
                alt="Rev. & Pastor (Mr.) Oladunjoye Joshua, District Overseer"
                className="absolute inset-0 h-full w-full object-cover [object-position:50%_0%] lg:[object-position:50%_20%]"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1f44]/75 via-[#0b1f44]/10 to-transparent lg:hidden" />
            {/* Name overlay on mobile */}
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8 lg:hidden">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/80">
                Message from the Overseer
              </p>
              <h3 className="mt-1 font-poppins text-[1.35rem] font-semibold leading-tight sm:text-[1.8rem]">
                Rev. &amp; Pastor (Mr.) Oladunjoye Joshua
              </h3>
            </div>
          </div>

          {/* Message */}
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Desktop heading */}
            <div className="hidden lg:block">
              <p className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-maroon">
                Message from the Overseer
              </p>
              <h3 className="mt-3 font-poppins font-semibold leading-[1.2] text-navy-2 [font-size:clamp(1.9rem,1.4rem+1vw,2.6rem)]">
                Rev. &amp; Pastor (Mr.) Oladunjoye Joshua
              </h3>
            </div>
            <p className="text-[0.9rem] text-[#4a5878] sm:text-[0.95rem] lg:mt-2">
              District Overseer &amp; Senior Pastor, Osogbo Headquarters
            </p>
            <div className="mt-4 h-[3px] w-16 rounded-full bg-maroon" />

            <p className="mt-6 border-l-4 border-maroon pl-4 font-poppins text-[1.05rem] font-medium leading-[1.6] text-navy sm:pl-5 sm:text-[1.2rem]">
              {lead}
            </p>

            <div
              className={`relative mt-5 space-y-4 transition-[max-height] duration-500 ${
                open ? "" : "max-h-44 overflow-hidden lg:max-h-none"
              }`}
            >
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[0.97rem] leading-[1.8] text-[#52525b] sm:text-[1.02rem]"
                >
                  {p}
                </p>
              ))}
              {!open && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f6f8ff] to-transparent lg:hidden" />
              )}
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-3 inline-flex min-h-11 items-center gap-2 font-poppins text-[0.92rem] font-medium text-maroon lg:hidden"
            >
              {open ? "Show less" : "Read the full message"}
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Contact card */}
            <motion.div
              whileHover={reduce ? undefined : { y: -3 }}
              className="mt-6 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy/[0.08] sm:p-5 lg:mt-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-navy">
                  <MailCheck size={22} strokeWidth={1.7} />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.68rem] uppercase tracking-[0.14em] text-[#4b5563]">
                    Overseer&apos;s Desk
                  </p>
                  <a
                    href="mailto:overseer@englishchapelosogbo.org"
                    className="block truncate font-poppins text-[0.88rem] font-medium text-navy hover:text-maroon sm:text-[0.98rem]"
                  >
                    overseer@englishchapelosogbo.org
                  </a>
                </div>
              </div>
              <a
                href="#visit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 font-poppins text-[0.92rem] font-medium text-white shadow-md transition-colors hover:bg-navy-2 sm:w-auto sm:self-start"
              >
                Request Pastoral Audience
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* ───────── Pastoral council ───────── */}
        <Reveal className="mt-16 text-center lg:mt-24">
          <p className="t-label">Meet the Team</p>
          <h3 className="mt-2 font-poppins font-semibold text-navy [font-size:clamp(1.5rem,1.1rem+1.2vw,2.3rem)]">
            Our Pastoral Council
          </h3>
        </Reveal>

        {/*
          Phones: one card per row, stacking on top of each other as you scroll.
          Tablet and desktop: 2 x 2 grid (never 4 across).
        */}
        <ul
          aria-label="Pastoral council"
          className="mx-auto mt-8 flex max-w-md flex-col gap-6 pb-6 sm:mt-10 sm:grid sm:max-w-3xl sm:grid-cols-1 sm:gap-6 sm:pb-0 lg:max-w-6xl lg:grid-cols-2 lg:gap-8"
        >
          {team.map((t, i) => (
            <TeamCard
              key={t.name}
              t={t}
              i={i}
              total={team.length}
              mobile={mobile}
              reduce={reduce}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
