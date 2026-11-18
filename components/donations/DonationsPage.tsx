// // "use client";
// // import { AnimatePresence, animate, motion, useInView } from "framer-motion";
// // import {
// //   BriefcaseMedical, Check, MessageCircle, Church, Copy, Download, FileStack, GraduationCap, Globe, Heart, Landmark,
// //   Plus, PlaneTakeoff, Split,
// // } from "lucide-react";
// // import { useEffect, useRef, useState } from "react";
// // import AutoRail from "../AutoRail";
// // import { Item, Reveal, SplitWords, Stagger, Tilt, ease } from "../motion";
// // import PageHero from "../page/PageHero";
// // import StatsBand from "../page/StatsBand";
// // import { allocations, banks, faqs, testimonials } from "./data";

// // const bankIcons = [Landmark, Globe, Heart];
// // const allocIcons = [Church, BriefcaseMedical, Split, GraduationCap];

// // function WhatsApp() {
// //   return <MessageCircle size={22} fill="#25d366" color="#25d366" strokeWidth={0} className="[&>path]:fill-[#25d366]" aria-hidden />;
// // }

// // /* ---------------- Banking ---------------- */
// // function CopyBtn({ value }: { value: string }) {
// //   const [ok, setOk] = useState(false);
// //   return (
// //     <motion.button
// //       type="button"
// //       whileHover={{ scale: 1.08 }}
// //       whileTap={{ scale: 0.92 }}
// //       onClick={() => {
// //         try { navigator.clipboard?.writeText(value); } catch { /* ignore */ }
// //         setOk(true);
// //         setTimeout(() => setOk(false), 1800);
// //       }}
// //       className="flex items-center gap-1.5 rounded-md bg-maroon px-3 py-1.5 font-poppins text-[0.72rem] font-medium text-white sm:text-[0.8rem]"
// //       aria-label={`Copy account number ${value}`}
// //     >
// //       <AnimatePresence mode="wait" initial={false}>
// //         <motion.span key={String(ok)} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.18 }} className="flex items-center gap-1.5">
// //           {ok ? <Check size={13} /> : <Copy size={13} />} {ok ? "Copied" : "Copy"}
// //         </motion.span>
// //       </AnimatePresence>
// //     </motion.button>
// //   );
// // }

// // function Banking() {
// //   return (
// //     <section id="banking" className="bg-white py-10 sm:py-14 lg:py-[5.4rem] lg:pb-[4.4rem]">
// //       <div className="container-x">
// //         <div className="flex flex-col gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
// //           <div>
// //             <Reveal x={-30} y={0}><p className="t-label">Banking Secretariat</p></Reveal>
// //             <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]"><SplitWords text="Direct Bank & Transfer Directory" inView /></h2>
// //             <Reveal delay={0.1}>
// //               <p className="mx-auto mt-3 max-w-[40rem] text-[0.86rem] leading-[1.85] tracking-[0.01em] text-ink sm:text-[0.98rem] lg:mx-0">
// //                 For direct bank deposits, USSD transfers, corporate electronic wires, and standing orders. Click any account number to copy instantly.
// //               </p>
// //             </Reveal>
// //           </div>
// //           <Reveal delay={0.2} className="lg:pb-1">
// //             <motion.a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.03 }} className="inline-flex items-center gap-2.5 rounded-xl bg-[#eef1ff] px-5 py-3 font-poppins text-[0.8rem] font-medium text-navy sm:text-[0.88rem]">
// //               <WhatsApp /> Send Transfer Slip via WhatsApp
// //             </motion.a>
// //           </Reveal>
// //         </div>

// //         <AutoRail>
// //           <Stagger className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-12 lg:grid lg:grid-cols-4 lg:items-start lg:gap-[2.1rem] lg:overflow-visible lg:px-0 lg:pb-0" stagger={0.12} amount={0.05}>
// //             {banks.map((b, i) => {
// //               const I = bankIcons[i];
// //               return (
// //                 <Item key={b.title} className="w-[82%] shrink-0 snap-center sm:w-[46%] lg:w-auto">
// //                   <Tilt max={3} lift={-8}>
// //                     <article className={`rounded-2xl p-5 sm:p-6 ${b.dark ? "bg-navy-2 text-white shadow-[0_18px_40px_-20px_rgba(2,20,58,0.7)]" : "bg-white shadow-[0_14px_32px_-12px_rgba(2,20,58,0.3)]"}`}>
// //                       <div className="flex items-center justify-between">
// //                         <span className={`rounded-md px-3 py-1.5 font-poppins text-[0.76rem] font-medium sm:text-[0.84rem] ${b.dark ? "bg-white text-navy" : "bg-[#e8ecfb] text-navy"}`}>{b.bank}</span>
// //                         {b.dark ? <PlaneTakeoff size={20} /> : <span className={i === 2 ? "text-maroon" : "text-navy-2"}>{I && <I size={20} />}</span>}
// //                       </div>
// //                       <h3 className={`mt-5 font-poppins font-medium leading-[1.4] [font-size:clamp(1.2rem,0.95rem+0.6vw,1.65rem)] ${b.dark ? "text-white" : "text-navy-2"}`}>{b.title}</h3>
// //                       <p className={`mt-2 min-h-[4.2rem] text-[0.8rem] leading-[1.9] sm:text-[0.88rem] ${b.dark ? "text-[#d4dcf0]" : "text-ink"}`}>{b.desc}</p>
// //                       {b.dark ? (
// //                         <div className="mt-4 rounded-xl bg-[#0a1f45] p-3.5 text-[0.76rem] sm:text-[0.86rem]">
// //                           <p className="flex justify-between"><span className="text-[#c9d3ea]">Swift Code:</span><span className="font-medium font-poppins">{b.swift}</span></p>
// //                           <p className="flex justify-between mt-2"><span className="text-[#c9d3ea]">USD Domiciliary:</span><span className="font-medium font-poppins">{b.usd}</span></p>
// //                           <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full py-2 mt-3 font-medium text-white rounded-md bg-maroon font-poppins">Request Wire Routing Slip</motion.button>
// //                         </div>
// //                       ) : (
// //                         <div className="mt-4 rounded-xl bg-[#eef1ff] p-3.5">
// //                           <p className="text-[0.72rem] text-ink sm:text-[0.8rem]">Account Name</p>
// //                           <p className="font-poppins text-[0.8rem] font-medium text-navy sm:text-[0.88rem]">{b.name}</p>
// //                           <div className="flex items-center justify-between mt-2">
// //                             <span className="font-poppins text-[1.3rem] font-medium tracking-wide text-navy sm:text-[1.55rem]">{b.acct}</span>
// //                             <CopyBtn value={b.acct!} />
// //                           </div>
// //                         </div>
// //                       )}
// //                     </article>
// //                   </Tilt>
// //                 </Item>
// //               );
// //             })}
// //           </Stagger>
// //         </AutoRail>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ---------------- Allocation ---------------- */
// // function Bar({ pct, color }: { pct: number; color: string }) {
// //   return (
// //     <div className="h-[0.6rem] w-full overflow-hidden rounded-full bg-[#e8ecfb]">
// //       <motion.div initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 1.4, ease, delay: 0.3 }} className="h-full rounded-full" style={{ background: color }} />
// //     </div>
// //   );
// // }
// // function Pct({ to, className }: { to: number; className?: string }) {
// //   const ref = useRef<HTMLSpanElement>(null);
// //   const inView = useInView(ref, { once: true, amount: 0.6 });
// //   const [v, setV] = useState(0);
// //   useEffect(() => {
// //     if (!inView) return;
// //     const c = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (l) => setV(Math.round(l)) });
// //     return () => c.stop();
// //   }, [inView, to]);
// //   return <span ref={ref} className={className}>{v}%</span>;
// // }

// // function Allocation() {
// //   return (
// //     <section id="stewardship" className="bg-[#eef1ff] py-10 sm:py-14 lg:py-[4.2rem]">
// //       <div className="container-x">
// //         <div className="text-center">
// //           <Reveal><p className="t-label">Divine Stewardship</p></Reveal>
// //           <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]"><SplitWords text="Where Every Seed Sown Is Deployed" inView /></h2>
// //           <Reveal delay={0.1}>
// //             <p className="mx-auto mt-3 max-w-[30rem] text-[0.86rem] leading-[1.85] tracking-[0.01em] text-ink sm:text-[0.98rem]">
// //               Our finance committee enforces rigorous four-tier approval protocols and annual external chartered audits.
// //             </p>
// //           </Reveal>
// //         </div>

// //         <AutoRail>
// //           <Stagger className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-12 lg:grid lg:grid-cols-4 lg:items-start lg:gap-[2.1rem] lg:overflow-visible lg:px-0 lg:pb-0" stagger={0.12} amount={0.05}>
// //             {allocations.map((a, i) => {
// //               const I = allocIcons[i];
// //               return (
// //                 <Item key={a.title} className="w-[82%] shrink-0 snap-center text-left sm:w-[46%] lg:w-auto">
// //                   <motion.article whileHover={{ y: -8 }} className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_-18px_rgba(2,20,58,0.3)] transition-shadow hover:shadow-[0_26px_44px_-20px_rgba(2,20,58,0.4)] sm:p-6">
// //                     <div className="flex items-center justify-between">
// //                       <Pct to={a.pct} className={`font-poppins text-[1.9rem] font-semibold leading-none sm:text-[2.2rem] ${a.accent ? "text-maroon" : "text-navy"}`} />
// //                       <motion.span whileHover={{ rotate: 360 }} transition={{ duration: 0.7 }} className={`grid h-10 w-10 place-items-center rounded-full ${a.accent ? "bg-[#e3c2c8] text-maroon" : "bg-[#e8ecfb] text-navy"}`}><I size={18} /></motion.span>
// //                     </div>
// //                     <div className="mt-4"><Bar pct={a.pct} color={a.bar} /></div>
// //                     <h3 className="mt-5 font-poppins font-medium leading-[1.4] text-navy-2 [font-size:clamp(1.2rem,0.95rem+0.6vw,1.65rem)]">{a.title}</h3>
// //                     <p className="mt-2 text-[0.78rem] leading-[1.95] text-ink sm:text-[0.86rem]">{a.desc}</p>
// //                     <p className="mt-6 font-poppins text-[0.78rem] font-medium text-navy sm:text-[0.86rem]">{a.foot}</p>
// //                   </motion.article>
// //                 </Item>
// //               );
// //             })}
// //           </Stagger>
// //         </AutoRail>

// //         <Reveal y={40} className="mt-6 lg:mt-8">
// //           <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-5 rounded-2xl bg-white p-5 text-center shadow-[0_10px_30px_-18px_rgba(2,20,58,0.25)] sm:flex-row sm:p-7 sm:text-left lg:px-8 lg:py-7">
// //             <span className="grid h-[3.4rem] w-[4.2rem] shrink-0 place-items-center rounded-xl bg-[#e8ecfb] text-navy"><FileStack size={26} /></span>
// //             <div className="flex-1">
// //               <h3 className="font-poppins font-medium text-navy [font-size:clamp(1.05rem,0.9rem+0.5vw,1.5rem)]">2024 Audited Financial Statement &amp; Stewardship Overview</h3>
// //               <p className="mt-1 max-w-[46rem] text-[0.76rem] leading-[1.85] text-ink sm:text-[0.86rem]">Prepared by Balogun &amp; Associates Chartered Accountants (ICAN Certified). Complete breakdown of revenue, tithes, disbursements &amp; capital expenditures.</p>
// //             </div>
// //             <motion.a href="#" whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-navy-2 px-5 py-3 font-poppins text-[0.78rem] font-medium text-white sm:text-[0.86rem]">
// //               <Download size={15} /> Download Audit PDF (4.2 MB)
// //             </motion.a>
// //           </motion.div>
// //         </Reveal>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ---------------- Testimonies ---------------- */
// // function Testimonies() {
// //   return (
// //     <section id="testimonies" className="bg-white py-10 sm:py-14 lg:py-[4.2rem]">
// //       <div className="container-x">
// //         <div className="text-center">
// //           <Reveal><p className="t-label">Covenant Manifestations</p></Reveal>
// //           <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]"><SplitWords text="Testimonies of Cheerful Stewards" inView /></h2>
// //           <Reveal delay={0.1}>
// //             <p className="mx-auto mt-3 max-w-[30rem] text-[0.86rem] leading-[1.85] tracking-[0.01em] text-ink sm:text-[0.98rem]">
// //               Our finance committee enforces rigorous four-tier approval protocols and annual external chartered audits.
// //             </p>
// //           </Reveal>
// //         </div>
// //         <AutoRail>
// //           <Stagger className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-[2.5rem] lg:overflow-visible lg:px-0 lg:pb-0" stagger={0.14} amount={0.05}>
// //             {testimonials.map((t) => (
// //               <Item key={t.name} className="w-[84%] shrink-0 snap-center text-left sm:w-[56%] md:w-[44%] lg:w-auto lg:h-full">
// //                 <motion.figure whileHover={{ y: -6 }} className="flex h-full flex-col rounded-2xl bg-[#eef1ff] p-5 sm:p-6">
// //                   <span className="font-poppins text-[2rem] font-bold leading-none text-maroon">&ldquo;</span>
// //                   <blockquote className="mt-1 text-[0.82rem] leading-[2] tracking-[0.01em] text-navy sm:text-[0.94rem]">“{t.quote}”</blockquote>
// //                   <figcaption className="flex items-center gap-3 pt-6 mt-auto">
// //                     {/* eslint-disable-next-line @next/next/no-img-element */}
// //                     <img src={t.img} alt={t.name} className="object-cover rounded-full h-11 w-11" />
// //                     <span>
// //                       <span className="block font-poppins text-[0.92rem] text-navy sm:text-[1.02rem]">{t.name}</span>
// //                       <span className="block text-[0.7rem] text-ink sm:text-[0.8rem]">{t.role}</span>
// //                     </span>
// //                   </figcaption>
// //                 </motion.figure>
// //               </Item>
// //             ))}
// //           </Stagger>
// //         </AutoRail>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ---------------- FAQ ---------------- */
// // function Faq() {
// //   const [open, setOpen] = useState<number | null>(null);
// //   return (
// //     <section id="faq" className="bg-white pb-14 pt-4 sm:pb-20 lg:pb-[4.6rem]">
// //       <div className="container-x">
// //         <div className="text-center">
// //           <Reveal><p className="t-label">Frequently Asked Questions</p></Reveal>
// //           <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]"><SplitWords text="Giving Inquiries & Protocols" inView /></h2>
// //           <Reveal delay={0.1}>
// //             <p className="mx-auto mt-3 max-w-[34rem] text-[0.86rem] leading-[1.85] tracking-[0.01em] text-ink sm:text-[0.98rem]">Clear answers on financial privacy, digital receipt generation, and recurring pledges.</p>
// //           </Reveal>
// //         </div>
// //         <Stagger className="mx-auto mt-8 max-w-[56rem] space-y-3.5 lg:mt-10 lg:max-w-[57.5rem]" stagger={0.1} amount={0.05}>
// //           {faqs.map((f, i) => (
// //             <Item key={f.q}>
// //               <div className="overflow-hidden rounded-xl bg-[#eef1ff]">
// //                 <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-poppins text-[0.9rem] text-navy sm:px-6 sm:py-[1.15rem] sm:text-[1.02rem]">
// //                   {i + 1}. {f.q}
// //                   <motion.span animate={{ rotate: open === i ? 135 : 0 }} transition={{ duration: 0.35, ease }} className="grid w-6 h-6 text-white rounded-full shrink-0 place-items-center bg-maroon"><Plus size={15} /></motion.span>
// //                 </button>
// //                 <AnimatePresence initial={false}>
// //                   {open === i && (
// //                     <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }}>
// //                       <p className="px-5 pb-5 text-[0.84rem] leading-[1.9] text-ink sm:px-6 sm:text-[0.94rem]">{f.a}</p>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             </Item>
// //           ))}
// //         </Stagger>
// //       </div>
// //     </section>
// //   );
// // }

// // export default function DonationsPage() {
// //   return (
// //     <>
// //       <PageHero
// //         crumb="Biblical Integrity-Verifiable Impact"
// //         lines={[
// //           { text: "Sow into the Kingdom.", br: true },
// //           { text: "Empower Grace.", className: "text-maroon" },
// //           { text: "Transform Lives in Osogbo & Beyond." },
// //         ]}
// //         body="Your faithful tithes, freewill offerings, and kingdom partnerships sustain holy worship, provide weekly nourishment to indigent families, fund frontier missionary church planting, and build the physical Sanctuary of Peace."
// //         image="/images/pages/donations-hero.jpg"
// //         imageAlt="An open hand reaching toward the sunset"
// //         size="md"
// //         imageClass="aspect-[640/560]"
// //       />
// //       <StatsBand
// //         divider
// //         stats={[
// //           { to: 100, mark: "%", title: "Annual Audited Account" },
// //           { to: 256, mark: "+", title: "Families Nourished Monthly" },
// //           { to: 4, mark: "+", title: "Rural Mission Status" },
// //           { to: 256, post: "-Bit", title: "Bank Encrypted Gateways" },
// //         ]}
// //       />
// //       <Banking />
// //       <Allocation />
// //       <Testimonies />
// //       <Faq />
// //     </>
// //   );
// // }

// "use client";
// import { AnimatePresence, animate, motion, useInView } from "framer-motion";
// import {
//   BriefcaseMedical,
//   Check,
//   MessageCircle,
//   Church,
//   Copy,
//   Download,
//   FileStack,
//   GraduationCap,
//   Globe,
//   Heart,
//   Landmark,
//   Plus,
//   PlaneTakeoff,
//   Split,
//   Quote,
//   ShieldCheck,
// } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import AutoRail from "../AutoRail";
// import { Item, Reveal, SplitWords, Stagger, Tilt, ease } from "../motion";
// import PageHero from "../page/PageHero";
// import StatsBand from "../page/StatsBand";
// import { allocations, banks, faqs, testimonials } from "./data";

// const bankIcons = [Landmark, Globe, Heart];
// const allocIcons = [Church, BriefcaseMedical, Split, GraduationCap];

// /* Shared rail: horizontal swipe on mobile/tablet, equal-height row on desktop */
// const railBase =
//   "-mx-5 mt-8 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-5 pb-8 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-12 lg:grid lg:items-stretch lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-8";
// const itemBase =
//   "h-full w-[84%] shrink-0 snap-center sm:w-[48%] lg:w-auto lg:min-w-0";

// /* Soft decorative glow used behind sections */
// function Glow({ className = "" }: { className?: string }) {
//   return (
//     <motion.div
//       aria-hidden
//       animate={{ y: [0, -18, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }}
//       transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//       className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
//     />
//   );
// }

// function SectionHead({
//   label,
//   title,
//   body,
//   max = "34rem",
// }: {
//   label: string;
//   title: string;
//   body: string;
//   max?: string;
// }) {
//   return (
//     <div className="text-center">
//       <Reveal>
//         <p className="t-label">{label}</p>
//       </Reveal>
//       <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]">
//         <SplitWords text={title} inView />
//       </h2>
//       <motion.span
//         initial={{ scaleX: 0 }}
//         whileInView={{ scaleX: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.9, ease, delay: 0.25 }}
//         className="mx-auto mt-3 block h-[3px] w-16 origin-center rounded-full bg-gradient-to-r from-maroon via-[#c0485a] to-navy"
//       />
//       <Reveal delay={0.1}>
//         <p
//           style={{ maxWidth: max }}
//           className="mx-auto mt-4 text-[0.86rem] leading-[1.85] tracking-[0.01em] text-ink sm:text-[0.98rem]"
//         >
//           {body}
//         </p>
//       </Reveal>
//     </div>
//   );
// }

// function WhatsApp() {
//   return (
//     <MessageCircle
//       size={22}
//       fill="#25d366"
//       color="#25d366"
//       strokeWidth={0}
//       className="[&>path]:fill-[#25d366]"
//       aria-hidden
//     />
//   );
// }

// /* ---------------- Banking ---------------- */
// function CopyBtn({ value }: { value: string }) {
//   const [ok, setOk] = useState(false);
//   return (
//     <motion.button
//       type="button"
//       whileHover={{ scale: 1.08 }}
//       whileTap={{ scale: 0.9 }}
//       onClick={() => {
//         try {
//           navigator.clipboard?.writeText(value);
//         } catch {
//           /* ignore */
//         }
//         setOk(true);
//         setTimeout(() => setOk(false), 1800);
//       }}
//       className={`flex min-h-[2.25rem] items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-poppins text-[0.74rem] font-medium text-white shadow-md transition-colors sm:text-[0.8rem] ${ok ? "bg-emerald-600" : "bg-maroon"}`}
//       aria-label={`Copy account number ${value}`}
//     >
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.span
//           key={String(ok)}
//           initial={{ opacity: 0, y: 6, scale: 0.6 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: -6, scale: 0.6 }}
//           transition={{ duration: 0.18 }}
//           className="flex items-center gap-1.5"
//         >
//           {ok ? <Check size={14} /> : <Copy size={14} />}{" "}
//           {ok ? "Copied" : "Copy"}
//         </motion.span>
//       </AnimatePresence>
//     </motion.button>
//   );
// }

// function Banking() {
//   const cols = banks.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
//   return (
//     <section
//       id="banking"
//       className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-[5.4rem] lg:pb-[4.8rem]"
//     >
//       <Glow className="-left-24 top-10 h-64 w-64 bg-[#dfe6ff]" />
//       <Glow className="-right-24 bottom-0 h-72 w-72 bg-[#f3d5da]/70" />
//       <div className="relative container-x">
//         <div className="flex flex-col gap-5 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
//           <div>
//             <Reveal x={-30} y={0}>
//               <p className="t-label">Banking Secretariat</p>
//             </Reveal>
//             <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]">
//               <SplitWords text="Direct Bank & Transfer Directory" inView />
//             </h2>
//             <Reveal delay={0.1}>
//               <p className="mx-auto mt-3 max-w-[40rem] text-[0.86rem] leading-[1.85] tracking-[0.01em] text-ink sm:text-[0.98rem] lg:mx-0">
//                 For direct bank deposits, USSD transfers, corporate electronic
//                 wires, and standing orders. Click any account number to copy
//                 instantly.
//               </p>
//             </Reveal>
//           </div>
//           <Reveal delay={0.2} className="lg:pb-1">
//             <motion.a
//               href="https://wa.me/2348000000000"
//               target="_blank"
//               rel="noreferrer"
//               whileHover={{ y: -3, scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#eef1ff] px-5 py-3.5 font-poppins text-[0.82rem] font-medium text-navy shadow-[0_10px_24px_-14px_rgba(2,20,58,0.5)] sm:w-auto sm:text-[0.88rem]"
//             >
//               <span
//                 aria-hidden
//                 className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/70 transition-all duration-700 group-hover:left-[130%]"
//               />
//               <WhatsApp />{" "}
//               <span className="relative">Send Transfer Slip via WhatsApp</span>
//             </motion.a>
//           </Reveal>
//         </div>

//         <AutoRail>
//           <Stagger
//             className={`${railBase} ${cols}`}
//             stagger={0.12}
//             amount={0.05}
//           >
//             {banks.map((b, i) => {
//               const I = bankIcons[i];
//               return (
//                 <Item key={b.title} className={itemBase}>
//                   <Tilt max={3} lift={-8}>
//                     <article
//                       className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-5 sm:p-6 ${
//                         b.dark
//                           ? "bg-gradient-to-br from-navy-2 via-[#0a2a63] to-navy text-white shadow-[0_22px_44px_-20px_rgba(2,20,58,0.75)]"
//                           : "bg-white shadow-[0_14px_32px_-12px_rgba(2,20,58,0.3)] ring-1 ring-[#e3e8fa]"
//                       }`}
//                     >
//                       <span
//                         aria-hidden
//                         className={`absolute inset-x-0 top-0 h-1 ${b.dark ? "bg-gradient-to-r from-maroon to-[#e0576d]" : "bg-gradient-to-r from-navy-2 via-[#4a63c4] to-maroon"}`}
//                       />
//                       <span
//                         aria-hidden
//                         className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#4a63c4]/10 transition-transform duration-700 group-hover:scale-[2.2]"
//                       />
//                       <div className="relative flex items-center justify-between">
//                         <span
//                           className={`rounded-md px-3 py-1.5 font-poppins text-[0.76rem] font-medium sm:text-[0.84rem] ${b.dark ? "bg-white text-navy" : "bg-[#e8ecfb] text-navy"}`}
//                         >
//                           {b.bank}
//                         </span>
//                         {b.dark ? (
//                           <motion.span
//                             animate={{ x: [0, 4, 0], y: [0, -3, 0] }}
//                             transition={{
//                               duration: 3.2,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                             }}
//                           >
//                             <PlaneTakeoff size={20} />
//                           </motion.span>
//                         ) : (
//                           <span
//                             className={i === 2 ? "text-maroon" : "text-navy-2"}
//                           >
//                             {I && <I size={20} />}
//                           </span>
//                         )}
//                       </div>
//                       <h3
//                         className={`relative mt-5 font-poppins font-medium leading-[1.4] [font-size:clamp(1.2rem,0.95rem+0.6vw,1.65rem)] ${b.dark ? "text-white" : "text-navy-2"}`}
//                       >
//                         {b.title}
//                       </h3>
//                       <p
//                         className={`relative mt-2 flex-1 text-[0.8rem] leading-[1.9] sm:text-[0.88rem] ${b.dark ? "text-[#d4dcf0]" : "text-ink"}`}
//                       >
//                         {b.desc}
//                       </p>
//                       {b.dark ? (
//                         <div className="relative mt-5 rounded-xl bg-[#0a1f45]/90 p-3.5 text-[0.76rem] backdrop-blur sm:text-[0.86rem]">
//                           <p className="flex justify-between gap-3">
//                             <span className="text-[#c9d3ea]">Swift Code:</span>
//                             <span className="font-medium font-poppins">
//                               {b.swift}
//                             </span>
//                           </p>
//                           <p className="flex justify-between gap-3 mt-2">
//                             <span className="text-[#c9d3ea]">
//                               USD Domiciliary:
//                             </span>
//                             <span className="font-medium font-poppins">
//                               {b.usd}
//                             </span>
//                           </p>
//                           <motion.button
//                             type="button"
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.97 }}
//                             className="mt-3 w-full rounded-lg bg-maroon py-2.5 font-poppins font-medium text-white shadow-lg"
//                           >
//                             Request Wire Routing Slip
//                           </motion.button>
//                         </div>
//                       ) : (
//                         <div className="relative mt-5 rounded-xl bg-[#eef1ff] p-3.5">
//                           <p className="text-[0.72rem] text-ink sm:text-[0.8rem]">
//                             Account Name
//                           </p>
//                           <p className="font-poppins text-[0.8rem] font-medium text-navy sm:text-[0.88rem]">
//                             {b.name}
//                           </p>
//                           <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
//                             <span className="font-poppins text-[1.25rem] font-medium tracking-wide text-navy sm:text-[1.45rem]">
//                               {b.acct}
//                             </span>
//                             <CopyBtn value={b.acct!} />
//                           </div>
//                         </div>
//                       )}
//                     </article>
//                   </Tilt>
//                 </Item>
//               );
//             })}
//           </Stagger>
//         </AutoRail>
//       </div>
//     </section>
//   );
// }

// /* ---------------- Allocation ---------------- */
// function Bar({ pct, color }: { pct: number; color: string }) {
//   return (
//     <div className="h-[0.6rem] w-full overflow-hidden rounded-full bg-[#e8ecfb]">
//       <motion.div
//         initial={{ width: 0 }}
//         whileInView={{ width: `${pct}%` }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.4, ease, delay: 0.3 }}
//         className="relative h-full overflow-hidden rounded-full"
//         style={{ background: color }}
//       >
//         <motion.span
//           aria-hidden
//           animate={{ x: ["-100%", "300%"] }}
//           transition={{
//             duration: 2.6,
//             repeat: Infinity,
//             ease: "linear",
//             delay: 1.7,
//           }}
//           className="absolute inset-y-0 w-1/3 bg-white/40 blur-[2px]"
//         />
//       </motion.div>
//     </div>
//   );
// }
// function Pct({ to, className }: { to: number; className?: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true, amount: 0.6 });
//   const [v, setV] = useState(0);
//   useEffect(() => {
//     if (!inView) return;
//     const c = animate(0, to, {
//       duration: 1.8,
//       ease: [0.16, 1, 0.3, 1],
//       onUpdate: (l) => setV(Math.round(l)),
//     });
//     return () => c.stop();
//   }, [inView, to]);
//   return (
//     <span ref={ref} className={className}>
//       {v}%
//     </span>
//   );
// }

// function Allocation() {
//   return (
//     <section
//       id="stewardship"
//       className="relative overflow-hidden bg-[#eef1ff] py-12 sm:py-16 lg:py-[4.6rem]"
//     >
//       <Glow className="top-0 -translate-x-1/2 left-1/2 h-72 w-72 bg-white/80" />
//       <div className="relative container-x">
//         <SectionHead
//           label="Divine Stewardship"
//           title="Where Every Seed Sown Is Deployed"
//           body="Our finance committee enforces rigorous four-tier approval protocols and annual external chartered audits."
//           max="32rem"
//         />

//         <AutoRail>
//           <Stagger
//             className={`${railBase} lg:grid-cols-4`}
//             stagger={0.12}
//             amount={0.05}
//           >
//             {allocations.map((a, i) => {
//               const I = allocIcons[i];
//               return (
//                 <Item key={a.title} className={itemBase}>
//                   <motion.article
//                     whileHover={{ y: -8 }}
//                     transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                     className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_30px_-18px_rgba(2,20,58,0.3)] ring-1 ring-white transition-shadow hover:shadow-[0_28px_48px_-20px_rgba(2,20,58,0.4)] sm:p-6"
//                   >
//                     <span
//                       aria-hidden
//                       className="absolute inset-x-0 top-0 h-1"
//                       style={{ background: a.bar }}
//                     />
//                     <div className="flex items-center justify-between">
//                       <Pct
//                         to={a.pct}
//                         className={`font-poppins text-[1.9rem] font-semibold leading-none sm:text-[2.2rem] ${a.accent ? "text-maroon" : "text-navy"}`}
//                       />
//                       <motion.span
//                         whileHover={{ rotate: 360, scale: 1.1 }}
//                         transition={{ duration: 0.7 }}
//                         className={`grid h-11 w-11 place-items-center rounded-full ${a.accent ? "bg-[#f1d4d9] text-maroon" : "bg-[#e8ecfb] text-navy"}`}
//                       >
//                         <I size={19} />
//                       </motion.span>
//                     </div>
//                     <div className="mt-4">
//                       <Bar pct={a.pct} color={a.bar} />
//                     </div>
//                     <h3 className="mt-5 font-poppins font-medium leading-[1.4] text-navy-2 [font-size:clamp(1.2rem,0.95rem+0.6vw,1.65rem)]">
//                       {a.title}
//                     </h3>
//                     <p className="mt-2 flex-1 text-[0.78rem] leading-[1.95] text-ink sm:text-[0.86rem]">
//                       {a.desc}
//                     </p>
//                     <p className="mt-6 border-t border-[#e8ecfb] pt-4 font-poppins text-[0.78rem] font-medium text-navy sm:text-[0.86rem]">
//                       {a.foot}
//                     </p>
//                   </motion.article>
//                 </Item>
//               );
//             })}
//           </Stagger>
//         </AutoRail>

//         <Reveal y={40} className="mt-4 lg:mt-10">
//           <motion.div
//             whileHover={{ y: -4 }}
//             className="relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl bg-white p-5 text-center shadow-[0_10px_30px_-18px_rgba(2,20,58,0.25)] ring-1 ring-[#e3e8fa] sm:flex-row sm:p-7 sm:text-left lg:px-8 lg:py-7"
//           >
//             <span
//               aria-hidden
//               className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-maroon to-navy-2"
//             />
//             <motion.span
//               animate={{ y: [0, -4, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="grid h-[3.4rem] w-[4.2rem] shrink-0 place-items-center rounded-xl bg-[#e8ecfb] text-navy"
//             >
//               <FileStack size={26} />
//             </motion.span>
//             <div className="flex-1">
//               <h3 className="font-poppins font-medium text-navy [font-size:clamp(1.05rem,0.9rem+0.5vw,1.5rem)]">
//                 2024 Audited Financial Statement &amp; Stewardship Overview
//               </h3>
//               <p className="mt-1 max-w-[46rem] text-[0.76rem] leading-[1.85] text-ink sm:text-[0.86rem]">
//                 Prepared by Balogun &amp; Associates Chartered Accountants (ICAN
//                 Certified). Complete breakdown of revenue, tithes, disbursements
//                 &amp; capital expenditures.
//               </p>
//             </div>
//             <motion.a
//               href="#"
//               whileHover={{ y: -3, scale: 1.04 }}
//               whileTap={{ scale: 0.96 }}
//               className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-navy-2 px-5 py-3.5 font-poppins text-[0.8rem] font-medium text-white shadow-lg sm:w-auto sm:text-[0.86rem]"
//             >
//               <Download size={15} /> Download Audit PDF (4.2 MB)
//             </motion.a>
//           </motion.div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// /* ---------------- Testimonies ---------------- */
// function Testimonies() {
//   const cols = testimonials.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
//   return (
//     <section
//       id="testimonies"
//       className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-[4.6rem]"
//     >
//       <Glow className="-right-20 top-10 h-64 w-64 bg-[#dfe6ff]" />
//       <div className="relative container-x">
//         <SectionHead
//           label="Covenant Manifestations"
//           title="Testimonies of Cheerful Stewards"
//           body="Real stories from families and partners whose giving is changing lives in Osogbo and beyond."
//           max="32rem"
//         />
//         <AutoRail>
//           <Stagger
//             className={`${railBase} ${cols}`}
//             stagger={0.14}
//             amount={0.05}
//           >
//             {testimonials.map((t) => (
//               <Item key={t.name} className={itemBase}>
//                 <motion.figure
//                   whileHover={{ y: -6 }}
//                   transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                   className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef1ff] to-[#e2e8fb] p-5 ring-1 ring-[#dbe2f8] sm:p-6"
//                 >
//                   <Quote
//                     aria-hidden
//                     size={64}
//                     className="absolute rotate-180 -right-2 -top-2 text-maroon/10"
//                   />
//                   <span className="grid text-white rounded-full shadow-md h-9 w-9 place-items-center bg-maroon">
//                     <Quote size={15} />
//                   </span>
//                   <blockquote className="relative mt-4 flex-1 text-[0.84rem] leading-[1.95] tracking-[0.01em] text-navy sm:text-[0.94rem]">
//                     {t.quote}
//                   </blockquote>
//                   <figcaption className="flex items-center gap-3 pt-5 mt-6 border-t border-white/80">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={t.img}
//                       alt={t.name}
//                       loading="lazy"
//                       className="object-cover w-12 h-12 rounded-full ring-2 ring-white"
//                     />
//                     <span>
//                       <span className="block font-poppins text-[0.92rem] text-navy sm:text-[1.02rem]">
//                         {t.name}
//                       </span>
//                       <span className="block text-[0.72rem] text-ink sm:text-[0.8rem]">
//                         {t.role}
//                       </span>
//                     </span>
//                   </figcaption>
//                 </motion.figure>
//               </Item>
//             ))}
//           </Stagger>
//         </AutoRail>
//       </div>
//     </section>
//   );
// }

// /* ---------------- FAQ ---------------- */
// function Faq() {
//   const [open, setOpen] = useState<number | null>(0);
//   return (
//     <section
//       id="faq"
//       className="bg-[#f7f8ff] pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-[5rem]"
//     >
//       <div className="container-x">
//         <SectionHead
//           label="Frequently Asked Questions"
//           title="Giving Inquiries & Protocols"
//           body="Clear answers on financial privacy, digital receipt generation, and recurring pledges."
//         />
//         <Stagger
//           className="mx-auto mt-8 grid max-w-[60rem] items-start gap-3.5 lg:mt-12 lg:max-w-[72rem] lg:grid-cols-2 lg:gap-5"
//           stagger={0.08}
//           amount={0.05}
//         >
//           {faqs.map((f, i) => {
//             const isOpen = open === i;
//             return (
//               <Item key={f.q}>
//                 <motion.div
//                   layout
//                   className={`overflow-hidden rounded-xl bg-white ring-1 transition-shadow ${isOpen ? "shadow-[0_18px_36px_-20px_rgba(2,20,58,0.4)] ring-maroon/30" : "shadow-sm ring-[#e3e8fa] hover:shadow-md"}`}
//                 >
//                   <button
//                     type="button"
//                     onClick={() => setOpen(isOpen ? null : i)}
//                     aria-expanded={isOpen}
//                     className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-poppins text-[0.9rem] text-navy sm:px-6 sm:py-[1.15rem] sm:text-[1rem]"
//                   >
//                     <span className="flex items-center gap-3">
//                       <span
//                         className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[0.72rem] font-semibold ${isOpen ? "bg-maroon text-white" : "bg-[#e8ecfb] text-navy"}`}
//                       >
//                         {i + 1}
//                       </span>
//                       {f.q}
//                     </span>
//                     <motion.span
//                       animate={{ rotate: isOpen ? 135 : 0 }}
//                       transition={{ duration: 0.35, ease }}
//                       className="grid text-white rounded-full h-7 w-7 shrink-0 place-items-center bg-maroon"
//                     >
//                       <Plus size={15} />
//                     </motion.span>
//                   </button>
//                   <AnimatePresence initial={false}>
//                     {isOpen && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.4, ease }}
//                       >
//                         <p className="px-5 pb-5 text-[0.84rem] leading-[1.9] text-ink sm:px-6 sm:pl-[4.1rem] sm:text-[0.94rem]">
//                           {f.a}
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               </Item>
//             );
//           })}
//         </Stagger>
//         <Reveal delay={0.1}>
//           <p className="mt-8 flex items-center justify-center gap-2 text-center text-[0.78rem] text-ink sm:text-[0.86rem]">
//             <ShieldCheck size={16} className="text-maroon" /> All gifts are
//             receipted and independently audited every year.
//           </p>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// export default function DonationsPage() {
//   return (
//     <>
//       <PageHero
//         crumb="Biblical Integrity-Verifiable Impact"
//         lines={[
//           { text: "Sow into the Kingdom.", br: true },
//           { text: "Empower Grace.", className: "text-maroon" },
//           { text: "Transform Lives in Osogbo & Beyond." },
//         ]}
//         body="Your faithful tithes, freewill offerings, and kingdom partnerships sustain holy worship, provide weekly nourishment to indigent families, fund frontier missionary church planting, and build the physical Sanctuary of Peace."
//         image="/images/pages/donations-hero.jpg"
//         imageAlt="An open hand reaching toward the sunset"
//         size="md"
//         imageClass="aspect-[640/560]"
//       />
//       <StatsBand
//         divider
//         stats={[
//           { to: 100, mark: "%", title: "Annual Audited Account" },
//           { to: 256, mark: "+", title: "Families Nourished Monthly" },
//           { to: 4, mark: "+", title: "Rural Mission Status" },
//           { to: 256, post: "-Bit", title: "Bank Encrypted Gateways" },
//         ]}
//       />
//       <Banking />
//       <Allocation />
//       <Testimonies />
//       <Faq />
//     </>
//   );
// }

"use client";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import {
  BriefcaseMedical,
  Check,
  MessageCircle,
  Church,
  Copy,
  Download,
  FileStack,
  GraduationCap,
  Globe,
  Heart,
  Landmark,
  Plus,
  PlaneTakeoff,
  Split,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AutoRail from "../AutoRail";
import { Item, Reveal, SplitWords, Stagger, Tilt, ease } from "../motion";
import PageHero from "../page/PageHero";
import { allocations, banks, faqs, testimonials } from "./data";

const bankIcons = [Landmark, Globe, Heart];
const allocIcons = [Church, BriefcaseMedical, Split, GraduationCap];

/* Shared rail: horizontal swipe on mobile/tablet, equal-height row on desktop */
const railBase =
  "-mx-5 mt-8 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-5 pb-8 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-12 lg:grid lg:items-stretch lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-8";
const itemBase =
  "h-full w-[84%] shrink-0 snap-center sm:w-[48%] lg:w-auto lg:min-w-0";

/* Soft decorative glow used behind sections */
function Glow({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -18, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

function SectionHead({
  label,
  title,
  body,
  max = "34rem",
}: {
  label: string;
  title: string;
  body: string;
  max?: string;
}) {
  return (
    <div className="text-center">
      <Reveal>
        <p className="t-label">{label}</p>
      </Reveal>
      <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]">
        <SplitWords text={title} inView />
      </h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease, delay: 0.25 }}
        className="mx-auto mt-3 block h-[3px] w-16 origin-center rounded-full bg-gradient-to-r from-maroon via-[#c0485a] to-navy"
      />
      <Reveal delay={0.1}>
        <p
          style={{ maxWidth: max }}
          className="mx-auto mt-4 text-[0.86rem] leading-[1.85] tracking-[0.01em] text-ink sm:text-[0.98rem]"
        >
          {body}
        </p>
      </Reveal>
    </div>
  );
}

function WhatsApp() {
  return (
    <MessageCircle
      size={22}
      fill="#25d366"
      color="#25d366"
      strokeWidth={0}
      className="[&>path]:fill-[#25d366]"
      aria-hidden
    />
  );
}

/* ---------------- Banking ---------------- */
function CopyBtn({ value }: { value: string }) {
  const [ok, setOk] = useState(false);
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        try {
          navigator.clipboard?.writeText(value);
        } catch {
          /* ignore */
        }
        setOk(true);
        setTimeout(() => setOk(false), 1800);
      }}
      className={`flex min-h-[2.25rem] items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-poppins text-[0.74rem] font-medium text-white shadow-md transition-colors sm:text-[0.8rem] ${ok ? "bg-emerald-600" : "bg-maroon"}`}
      aria-label={`Copy account number ${value}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={String(ok)}
          initial={{ opacity: 0, y: 6, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.6 }}
          transition={{ duration: 0.18 }}
          className="flex items-center gap-1.5"
        >
          {ok ? <Check size={14} /> : <Copy size={14} />}{" "}
          {ok ? "Copied" : "Copy"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

function Banking() {
  const cols = banks.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  return (
    <section
      id="banking"
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-[5.4rem] lg:pb-[4.8rem]"
    >
      <Glow className="-left-24 top-10 h-64 w-64 bg-[#dfe6ff]" />
      <Glow className="-right-24 bottom-0 h-72 w-72 bg-[#f3d5da]/70" />
      <div className="relative container-x">
        <div className="flex flex-col gap-5 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <Reveal x={-30} y={0}>
              <p className="t-label">Banking Secretariat</p>
            </Reveal>
            <h2 className="t-h2 mt-1 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]">
              <SplitWords text="Direct Bank & Transfer Directory" inView />
            </h2>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-3 max-w-[40rem] text-[0.86rem] leading-[1.85] tracking-[0.01em] text-ink sm:text-[0.98rem] lg:mx-0">
                For direct bank deposits, USSD transfers, corporate electronic
                wires, and standing orders. Click any account number to copy
                instantly.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:pb-1">
            <motion.a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#eef1ff] px-5 py-3.5 font-poppins text-[0.82rem] font-medium text-navy shadow-[0_10px_24px_-14px_rgba(2,20,58,0.5)] sm:w-auto sm:text-[0.88rem]"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/70 transition-all duration-700 group-hover:left-[130%]"
              />
              <WhatsApp />{" "}
              <span className="relative">Send Transfer Slip via WhatsApp</span>
            </motion.a>
          </Reveal>
        </div>

        <AutoRail>
          <Stagger
            className={`${railBase} ${cols}`}
            stagger={0.12}
            amount={0.05}
          >
            {banks.map((b, i) => {
              const I = bankIcons[i];
              return (
                <Item key={b.title} className={itemBase}>
                  <Tilt max={3} lift={-8}>
                    <article
                      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-5 sm:p-6 ${
                        b.dark
                          ? "bg-gradient-to-br from-navy-2 via-[#0a2a63] to-navy text-white shadow-[0_22px_44px_-20px_rgba(2,20,58,0.75)]"
                          : "bg-white shadow-[0_14px_32px_-12px_rgba(2,20,58,0.3)] ring-1 ring-[#e3e8fa]"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-x-0 top-0 h-1 ${b.dark ? "bg-gradient-to-r from-maroon to-[#e0576d]" : "bg-gradient-to-r from-navy-2 via-[#4a63c4] to-maroon"}`}
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#4a63c4]/10 transition-transform duration-700 group-hover:scale-[2.2]"
                      />
                      <div className="relative flex items-center justify-between">
                        <span
                          className={`rounded-md px-3 py-1.5 font-poppins text-[0.76rem] font-medium sm:text-[0.84rem] ${b.dark ? "bg-white text-navy" : "bg-[#e8ecfb] text-navy"}`}
                        >
                          {b.bank}
                        </span>
                        {b.dark ? (
                          <motion.span
                            animate={{ x: [0, 4, 0], y: [0, -3, 0] }}
                            transition={{
                              duration: 3.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <PlaneTakeoff size={20} />
                          </motion.span>
                        ) : (
                          <span
                            className={i === 2 ? "text-maroon" : "text-navy-2"}
                          >
                            {I && <I size={20} />}
                          </span>
                        )}
                      </div>
                      <h3
                        className={`relative mt-5 font-poppins font-medium leading-[1.4] [font-size:clamp(1.2rem,0.95rem+0.6vw,1.65rem)] ${b.dark ? "text-white" : "text-navy-2"}`}
                      >
                        {b.title}
                      </h3>
                      <p
                        className={`relative mt-2 flex-1 text-[0.8rem] leading-[1.9] sm:text-[0.88rem] ${b.dark ? "text-[#d4dcf0]" : "text-ink"}`}
                      >
                        {b.desc}
                      </p>
                      {b.dark ? (
                        <div className="relative mt-5 rounded-xl bg-[#0a1f45]/90 p-3.5 text-[0.76rem] backdrop-blur sm:text-[0.86rem]">
                          <p className="flex justify-between gap-3">
                            <span className="text-[#c9d3ea]">Swift Code:</span>
                            <span className="font-medium font-poppins">
                              {b.swift}
                            </span>
                          </p>
                          <p className="flex justify-between gap-3 mt-2">
                            <span className="text-[#c9d3ea]">
                              USD Domiciliary:
                            </span>
                            <span className="font-medium font-poppins">
                              {b.usd}
                            </span>
                          </p>
                          <motion.button
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-3 w-full rounded-lg bg-maroon py-2.5 font-poppins font-medium text-white shadow-lg"
                          >
                            Request Wire Routing Slip
                          </motion.button>
                        </div>
                      ) : (
                        <div className="relative mt-5 rounded-xl bg-[#eef1ff] p-3.5">
                          <p className="text-[0.72rem] text-ink sm:text-[0.8rem]">
                            Account Name
                          </p>
                          <p className="font-poppins text-[0.8rem] font-medium text-navy sm:text-[0.88rem]">
                            {b.name}
                          </p>
                          <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
                            <span className="font-poppins text-[1.25rem] font-medium tracking-wide text-navy sm:text-[1.45rem]">
                              {b.acct}
                            </span>
                            <CopyBtn value={b.acct!} />
                          </div>
                        </div>
                      )}
                    </article>
                  </Tilt>
                </Item>
              );
            })}
          </Stagger>
        </AutoRail>
      </div>
    </section>
  );
}

/* ---------------- Allocation ---------------- */
function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-[0.6rem] w-full overflow-hidden rounded-full bg-[#e8ecfb]">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease, delay: 0.3 }}
        className="relative h-full overflow-hidden rounded-full"
        style={{ background: color }}
      >
        <motion.span
          aria-hidden
          animate={{ x: ["-100%", "300%"] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "linear",
            delay: 1.7,
          }}
          className="absolute inset-y-0 w-1/3 bg-white/40 blur-[2px]"
        />
      </motion.div>
    </div>
  );
}
function Pct({ to, className }: { to: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (l) => setV(Math.round(l)),
    });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className={className}>
      {v}%
    </span>
  );
}

function Allocation() {
  return (
    <section
      id="stewardship"
      className="relative overflow-hidden bg-[#eef1ff] py-12 sm:py-16 lg:py-[4.6rem]"
    >
      <Glow className="top-0 -translate-x-1/2 left-1/2 h-72 w-72 bg-white/80" />
      <div className="relative container-x">
        <SectionHead
          label="Divine Stewardship"
          title="Where Every Seed Sown Is Deployed"
          body="Our finance committee enforces rigorous four-tier approval protocols and annual external chartered audits."
          max="32rem"
        />

        <AutoRail>
          <Stagger
            className={`${railBase} lg:grid-cols-4`}
            stagger={0.12}
            amount={0.05}
          >
            {allocations.map((a, i) => {
              const I = allocIcons[i];
              return (
                <Item key={a.title} className={itemBase}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_30px_-18px_rgba(2,20,58,0.3)] ring-1 ring-white transition-shadow hover:shadow-[0_28px_48px_-20px_rgba(2,20,58,0.4)] sm:p-6"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ background: a.bar }}
                    />
                    <div className="flex items-center justify-between">
                      <Pct
                        to={a.pct}
                        className={`font-poppins text-[1.9rem] font-semibold leading-none sm:text-[2.2rem] ${a.accent ? "text-maroon" : "text-navy"}`}
                      />
                      <motion.span
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                        className={`grid h-11 w-11 place-items-center rounded-full ${a.accent ? "bg-[#f1d4d9] text-maroon" : "bg-[#e8ecfb] text-navy"}`}
                      >
                        <I size={19} />
                      </motion.span>
                    </div>
                    <div className="mt-4">
                      <Bar pct={a.pct} color={a.bar} />
                    </div>
                    <h3 className="mt-5 font-poppins font-medium leading-[1.4] text-navy-2 [font-size:clamp(1.2rem,0.95rem+0.6vw,1.65rem)]">
                      {a.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.78rem] leading-[1.95] text-ink sm:text-[0.86rem]">
                      {a.desc}
                    </p>
                    <p className="mt-6 border-t border-[#e8ecfb] pt-4 font-poppins text-[0.78rem] font-medium text-navy sm:text-[0.86rem]">
                      {a.foot}
                    </p>
                  </motion.article>
                </Item>
              );
            })}
          </Stagger>
        </AutoRail>

        <Reveal y={40} className="mt-4 lg:mt-10">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl bg-white p-5 text-center shadow-[0_10px_30px_-18px_rgba(2,20,58,0.25)] ring-1 ring-[#e3e8fa] sm:flex-row sm:p-7 sm:text-left lg:px-8 lg:py-7"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-maroon to-navy-2"
            />
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-[3.4rem] w-[4.2rem] shrink-0 place-items-center rounded-xl bg-[#e8ecfb] text-navy"
            >
              <FileStack size={26} />
            </motion.span>
            <div className="flex-1">
              <h3 className="font-poppins font-medium text-navy [font-size:clamp(1.05rem,0.9rem+0.5vw,1.5rem)]">
                2024 Audited Financial Statement &amp; Stewardship Overview
              </h3>
              <p className="mt-1 max-w-[46rem] text-[0.76rem] leading-[1.85] text-ink sm:text-[0.86rem]">
                Prepared by Balogun &amp; Associates Chartered Accountants (ICAN
                Certified). Complete breakdown of revenue, tithes, disbursements
                &amp; capital expenditures.
              </p>
            </div>
            <motion.a
              href="#"
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-navy-2 px-5 py-3.5 font-poppins text-[0.8rem] font-medium text-white shadow-lg sm:w-auto sm:text-[0.86rem]"
            >
              <Download size={15} /> Download Audit PDF (4.2 MB)
            </motion.a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Testimonies ---------------- */
function Testimonies() {
  const cols = testimonials.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section
      id="testimonies"
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-[4.6rem]"
    >
      <Glow className="-right-20 top-10 h-64 w-64 bg-[#dfe6ff]" />
      <div className="relative container-x">
        <SectionHead
          label="Covenant Manifestations"
          title="Testimonies of Cheerful Stewards"
          body="Real stories from families and partners whose giving is changing lives in Osogbo and beyond."
          max="32rem"
        />
        <AutoRail>
          <Stagger
            className={`${railBase} ${cols}`}
            stagger={0.14}
            amount={0.05}
          >
            {testimonials.map((t) => (
              <Item key={t.name} className={itemBase}>
                <motion.figure
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef1ff] to-[#e2e8fb] p-5 ring-1 ring-[#dbe2f8] sm:p-6"
                >
                  <Quote
                    aria-hidden
                    size={64}
                    className="absolute rotate-180 -right-2 -top-2 text-maroon/10"
                  />
                  <span className="grid text-white rounded-full shadow-md h-9 w-9 place-items-center bg-maroon">
                    <Quote size={15} />
                  </span>
                  <blockquote className="relative mt-4 flex-1 text-[0.84rem] leading-[1.95] tracking-[0.01em] text-navy sm:text-[0.94rem]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-5 mt-6 border-t border-white/80">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="object-cover w-12 h-12 rounded-full ring-2 ring-white"
                    />
                    <span>
                      <span className="block font-poppins text-[0.92rem] text-navy sm:text-[1.02rem]">
                        {t.name}
                      </span>
                      <span className="block text-[0.72rem] text-ink sm:text-[0.8rem]">
                        {t.role}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </Item>
            ))}
          </Stagger>
        </AutoRail>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="bg-[#f7f8ff] pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-[5rem]"
    >
      <div className="container-x">
        <SectionHead
          label="Frequently Asked Questions"
          title="Giving Inquiries & Protocols"
          body="Clear answers on financial privacy, digital receipt generation, and recurring pledges."
        />
        <Stagger
          className="mx-auto mt-8 grid max-w-[60rem] items-start gap-3.5 lg:mt-12 lg:max-w-[72rem] lg:grid-cols-2 lg:gap-5"
          stagger={0.08}
          amount={0.05}
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Item key={f.q}>
                <motion.div
                  layout
                  className={`overflow-hidden rounded-xl bg-white ring-1 transition-shadow ${isOpen ? "shadow-[0_18px_36px_-20px_rgba(2,20,58,0.4)] ring-maroon/30" : "shadow-sm ring-[#e3e8fa] hover:shadow-md"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-poppins text-[0.9rem] text-navy sm:px-6 sm:py-[1.15rem] sm:text-[1rem]"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[0.72rem] font-semibold ${isOpen ? "bg-maroon text-white" : "bg-[#e8ecfb] text-navy"}`}
                      >
                        {i + 1}
                      </span>
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="grid text-white rounded-full h-7 w-7 shrink-0 place-items-center bg-maroon"
                    >
                      <Plus size={15} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                      >
                        <p className="px-5 pb-5 text-[0.84rem] leading-[1.9] text-ink sm:px-6 sm:pl-[4.1rem] sm:text-[0.94rem]">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Item>
            );
          })}
        </Stagger>
        <Reveal delay={0.1}>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-[0.78rem] text-ink sm:text-[0.86rem]">
            <ShieldCheck size={16} className="text-maroon" /> All gifts are
            receipted and independently audited every year.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function DonationsPage() {
  return (
    <>
      <PageHero
        crumb="Biblical Integrity-Verifiable Impact"
        lines={[
          { text: "Sow into the Kingdom.", br: true },
          { text: "Empower Grace.", className: "text-maroon" },
          { text: "Transform Lives in Osogbo & Beyond." },
        ]}
        body="Your faithful tithes, freewill offerings, and kingdom partnerships sustain holy worship, provide weekly nourishment to indigent families, fund frontier missionary church planting, and build the physical Sanctuary of Peace."
        image="/images/pages/donations-hero.jpg"
        imageAlt="An open hand reaching toward the sunset"
        size="md"
        imageClass="aspect-[640/560]"
      />
      <Banking />
      <Allocation />
      <Testimonies />
      <Faq />
    </>
  );
}
