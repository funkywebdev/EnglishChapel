"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Armchair,
  BadgeCheck,
  Banknote,
  CheckCircle2,
  ChevronDown,
  CloudUpload,
  Download,
  Gavel,
  HandHeart,
  MapPin,
  MessageSquareText,
  PlaneTakeoff,
  Scale,
  Search,
  Send,
  Star,
  UserCheck,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Logo } from "../Navbar";
import { Item, Reveal, SplitWords, Stagger, Tilt, ease } from "../motion";
import PageHero from "../page/PageHero";
import { covenant, enterprises, fellowship, testimonials } from "./data";

const covIcons = [Scale, Banknote, HandHeart, BadgeCheck];
const fellowIcons = [Gavel, UserCheck, PlaneTakeoff];

/* Shared card look */
const cardBase =
  "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-navy/5";
const cardShadow =
  "shadow-[0_12px_32px_-16px_rgba(2,20,58,0.35)] transition-shadow duration-300 hover:shadow-[0_32px_56px_-24px_rgba(2,20,58,0.5)]";

/** Top accent bar that sweeps in on hover */
function Bar({ blue = false }: { blue?: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:scale-x-100 ${blue ? "bg-gradient-to-r from-navy-2 to-[#4a86e8]" : "bg-gradient-to-r from-maroon to-[#e0566b]"}`}
    />
  );
}

/** Reusable section header */
function Head({
  label,
  title,
  body,
  center = true,
}: {
  label: string;
  title: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : "text-center lg:text-left"}>
      <Reveal x={center ? 0 : -30} y={center ? 14 : 0}>
        <p className="t-label">{label}</p>
      </Reveal>
      <h2 className="t-h2 mt-2 [font-size:clamp(1.6rem,1.05rem+1.9vw,2.8rem)] [text-wrap:balance]">
        <SplitWords text={title} inView />
      </h2>
      {body && (
        <Reveal delay={0.1}>
          <p
            className={`mt-3 max-w-[40rem] text-[0.9rem] leading-[1.75] text-ink sm:text-[0.98rem] ${center ? "mx-auto" : "mx-auto lg:mx-0"}`}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Directory ---------------- */
const regions = [
  { v: "all", l: "All" },
  { v: "osogbo", l: "Osogbo" },
  { v: "global", l: "Global" },
];

function Directory() {
  const reduce = useReducedMotion();
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("all");
  const [verified, setVerified] = useState(false);
  const [more, setMore] = useState(false);

  const list = useMemo(() => {
    const base = more ? enterprises : enterprises.slice(0, 6);
    const needle = q.trim().toLowerCase();
    return base.filter((e) => {
      if (verified && !e.verified) return false;
      if (region === "osogbo" && !e.address.toLowerCase().includes("osogbo"))
        return false;
      if (region === "global" && e.address.toLowerCase().includes("osogbo"))
        return false;
      if (!needle) return true;
      return [e.name, e.cat, e.lead, e.desc, e.address, ...e.tags]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [q, region, verified, more]);

  return (
    <section id="directory" className="relative overflow-hidden bg-white">
      <div className="pt-12 container-x sm:pt-16 lg:pt-20">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-end lg:justify-between">
          <Head
            center={false}
            label="Eco-system of Excellence"
            title="The Chapel Marketplace Directory"
            body="Support brethren with kingdom diligence. Discover vetted enterprises providing world-class goods and professional services in Osogbo, the South-West, and international corridors."
          />
          <Reveal delay={0.2} className="w-full sm:w-auto lg:pb-1">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-maroon/30 bg-white px-5 font-poppins text-[0.85rem] font-medium text-maroon shadow-[0_8px_20px_-12px_rgba(2,20,58,0.4)] transition-colors hover:bg-maroon hover:text-white sm:w-auto"
            >
              <Download size={16} /> Download PDF Directory
            </motion.a>
          </Reveal>
        </div>

        {/* Filter bar */}
        <Reveal y={30} delay={0.1} className="mt-7">
          <div className="rounded-2xl bg-white p-3 shadow-[0_20px_50px_-28px_rgba(2,20,58,0.45)] ring-1 ring-navy/5 sm:p-4">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto] lg:items-center lg:gap-4">
              <label className="group flex items-center gap-3 rounded-xl bg-[#eef1ff] px-4 py-3.5 transition-shadow focus-within:bg-white focus-within:shadow-[0_0_0_2px_#0f2a57]">
                <Search
                  size={18}
                  className="shrink-0 text-[#6b7280] transition-colors group-focus-within:text-navy-2"
                />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by name, trade, lead or keyword..."
                  aria-label="Search enterprises"
                  className="w-full bg-transparent text-[16px] text-navy outline-none placeholder:text-[#8b93a8] sm:text-[0.9rem]"
                />
                {q && (
                  <button
                    type="button"
                    onClick={() => setQ("")}
                    aria-label="Clear search"
                    className="grid w-6 h-6 rounded-full shrink-0 place-items-center bg-navy/10 text-navy"
                  >
                    <X size={13} />
                  </button>
                )}
              </label>

              {/* Segmented location control (easier to tap than a dropdown) */}
              <div
                role="radiogroup"
                aria-label="Location"
                className="relative grid grid-cols-3 rounded-xl bg-[#eef1ff] p-1"
              >
                {regions.map((r) => (
                  <button
                    key={r.v}
                    type="button"
                    role="radio"
                    aria-checked={region === r.v}
                    onClick={() => setRegion(r.v)}
                    className={`relative min-h-[42px] rounded-lg px-4 text-[0.82rem] font-medium transition-colors ${region === r.v ? "text-white" : "text-navy"}`}
                  >
                    {region === r.v && (
                      <motion.span
                        layoutId="region-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-lg shadow-md bg-navy-2"
                      />
                    )}
                    <span className="relative flex items-center justify-center gap-1.5">
                      {r.v === "osogbo" && <MapPin size={13} />}
                      {r.l}
                    </span>
                  </button>
                ))}
              </div>

              {/* Verified switch */}
              <button
                type="button"
                role="switch"
                aria-checked={verified}
                onClick={() => setVerified((v) => !v)}
                className="flex min-h-[48px] items-center justify-between gap-3 rounded-xl bg-[#eef1ff] px-4 text-[0.82rem] font-medium text-navy lg:justify-start"
              >
                <span className="flex items-center gap-2">
                  <BadgeCheck size={16} className="text-navy-2" /> Verified only
                </span>
                <span
                  className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${verified ? "bg-maroon" : "bg-navy/20"}`}
                >
                  <motion.span
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 32 }}
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow ${verified ? "right-0.5" : "left-0.5"}`}
                  />
                </span>
              </button>
            </div>
          </div>
          <p
            className="mt-3 text-center text-[0.78rem] text-ink lg:text-left"
            aria-live="polite"
          >
            Showing <b className="text-navy">{list.length}</b>{" "}
            {list.length === 1 ? "enterprise" : "enterprises"}
          </p>
        </Reveal>
      </div>

      {/* Results */}
      <div className="mt-6 bg-gradient-to-b from-[#eaeeff] to-[#f4f6ff] pb-12 pt-8 sm:pt-12 lg:pt-14">
        <div className="container-x">
          {/* Mobile: stacked. Tablet: 2. Desktop: 3 side by side */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            <AnimatePresence mode="popLayout">
              {list.map((e, i) => (
                <motion.article
                  key={e.name}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease, delay: (i % 3) * 0.1 }}
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -8,
                          boxShadow: "0 28px 48px -22px rgba(2,20,58,0.45)",
                        }
                  }
                  className={`${cardBase} p-5 shadow-[0_10px_28px_-16px_rgba(2,20,58,0.3)] sm:p-6`}
                >
                  <Bar />
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start min-w-0 gap-3">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy-2 to-[#4a86e8] font-poppins text-[1.05rem] font-semibold text-white shadow-lg shadow-navy-2/25">
                        {e.initials}
                      </span>
                      <div className="min-w-0">
                        <span className="inline-block rounded-full bg-maroon/10 px-3 py-1 font-poppins text-[0.72rem] font-semibold text-maroon">
                          {e.cat}
                        </span>
                        <p className="mt-1.5 flex items-center gap-1 text-[0.78rem] text-[#6b7280]">
                          <Star size={13} fill="#5c0012" color="#5c0012" />{" "}
                          <b className="font-semibold text-maroon">
                            {e.rating}
                          </b>{" "}
                          ({e.reviews})
                        </p>
                      </div>
                    </div>
                    {e.verified && (
                      <motion.span
                        animate={
                          reduce ? undefined : { rotate: [0, 12, -12, 0] }
                        }
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                        className="text-navy-2"
                        title="Sanctuary verified"
                      >
                        <BadgeCheck size={24} />
                      </motion.span>
                    )}
                  </div>

                  <h3 className="mt-4 font-poppins font-semibold leading-snug text-navy [font-size:clamp(1.2rem,0.95rem+0.55vw,1.5rem)]">
                    {e.name}
                  </h3>
                  <p className="mt-1 font-poppins text-[0.86rem] text-navy-2">
                    Lead: {e.lead}
                  </p>
                  <p className="mt-2.5 text-[0.85rem] leading-[1.75] text-ink">
                    {e.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#eef1ff] px-3 py-1 font-poppins text-[0.72rem] text-navy"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 flex items-start gap-2 border-t border-navy/10 pt-4 text-[0.8rem] text-ink">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-maroon" />{" "}
                    {e.address}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-5 mt-auto">
                    <motion.a
                      href="https://wa.me/2348000000000"
                      target="_blank"
                      rel="noreferrer"
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-xl border border-maroon px-2 font-poppins text-[0.8rem] font-medium text-maroon transition-colors hover:bg-maroon hover:text-white"
                    >
                      <MessageSquareText size={16} /> WhatsApp
                    </motion.a>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      className="shimmer inline-flex min-h-[46px] items-center justify-center rounded-xl bg-maroon px-2 font-poppins text-[0.8rem] font-medium text-white shadow-md shadow-maroon/25"
                    >
                      View Profile
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {list.length === 0 && (
            <div className="text-center py-14">
              <p className="text-ink">No enterprise matches your search yet.</p>
              <button
                type="button"
                onClick={() => {
                  setQ("");
                  setRegion("all");
                  setVerified(false);
                }}
                className="mt-3 font-poppins text-[0.85rem] font-medium text-maroon underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}

          {!more && (
            <div className="mt-8 text-center lg:mt-10">
              <motion.button
                type="button"
                onClick={() => setMore(true)}
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-maroon bg-white px-8 font-poppins text-[0.88rem] font-medium text-navy shadow-sm sm:w-auto"
              >
                Load More <ChevronDown size={16} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Fellowship ---------------- */
function Fellowship() {
  const reduce = useReducedMotion();
  return (
    <section
      id="fellowship"
      className="relative py-12 overflow-hidden bg-white sm:py-16 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none -left-32 top-10 h-72 w-72 bg-maroon/5 blur-3xl"
      />
      <div className="relative container-x">
        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <Head
            center={false}
            label="Mentorship · Seed Capital · Strategy"
            title="The Joseph & Daniel Executive Fellowship"
            body="Named after the patriarchs who governed global empires with supernatural wisdom, this initiative bridges kingdom theology with boardroom mastery, micro-equity capital, and diaspora trade channels."
          />
          <Reveal x={50} y={0} delay={0.2}>
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-2 to-[#16397a] p-6 text-left text-white shadow-[0_28px_60px_-28px_rgba(2,20,58,0.7)] sm:p-7"
            >
              <div
                aria-hidden
                className="absolute w-40 h-40 rounded-full -right-10 -top-10 bg-white/10 blur-2xl"
              />
              <div className="relative flex items-start gap-4">
                <motion.span
                  animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  className="grid rounded-full h-14 w-14 shrink-0 place-items-center bg-white/15 ring-1 ring-white/30"
                >
                  <Armchair size={24} />
                </motion.span>
                <div>
                  <h3 className="font-poppins text-[1.15rem] font-semibold sm:text-[1.3rem]">
                    Monthly Executive Breakfast
                  </h3>
                  <p className="mt-1 text-[0.8rem] text-white/80 sm:text-[0.86rem]">
                    Every 1st Saturday • 8:00 AM - 10:30 AM • Sanctuary
                    Fellowship Hall
                  </p>
                  <p className="mt-3 flex flex-wrap items-center gap-3 text-[0.8rem] text-white/85">
                    <span className="rounded-full bg-maroon px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-white">
                      RSVP Required
                    </span>
                    Hot breakfast &amp; strategic networking
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Mobile: stacked. Tablet: 2 + 1. Desktop: 3 side by side */}
        <Stagger
          stagger={0.14}
          amount={0.05}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 sm:[&>*:nth-child(3)]:col-span-2 lg:mt-14 lg:grid-cols-3 lg:gap-7 lg:[&>*:nth-child(3)]:col-span-1"
        >
          {fellowship.slice(0, 3).map((f, i) => {
            const I = fellowIcons[i];
            return (
              <Item key={f.title} className="h-full">
                <Tilt className="h-full" max={3} lift={-8}>
                  <article
                    className={`${cardBase} ${cardShadow} p-6 text-left`}
                  >
                    <Bar />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-1 -top-3 select-none font-poppins text-[6rem] font-bold leading-none text-navy/[0.04]"
                    >
                      {i + 1}
                    </span>
                    <span className="relative grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-navy-2 to-[#4a86e8] text-white shadow-lg shadow-navy-2/25 transition-transform duration-300 group-hover:rotate-6">
                      <I size={24} />
                    </span>
                    <h3 className="relative mt-6 font-poppins font-semibold leading-snug text-navy [font-size:clamp(1.2rem,0.95rem+0.6vw,1.5rem)]">
                      {f.title}
                    </h3>
                    <p className="relative mt-3 text-[0.88rem] leading-[1.8] text-ink">
                      {f.desc}
                    </p>
                    <div className="relative pt-5 mt-auto border-t border-navy/10">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-maroon">
                        {f.label}
                      </p>
                      <p className="mt-1.5 text-[0.86rem] leading-[1.7] text-navy">
                        {f.note}
                      </p>
                    </div>
                  </article>
                </Tilt>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Covenant ---------------- */
function Covenant() {
  return (
    <section
      id="covenant"
      className="relative overflow-hidden bg-gradient-to-b from-[#f6f8ff] to-white py-12 sm:py-16 lg:py-24"
    >
      <div className="container-x">
        <Head
          label="Uncompromising Standards"
          title="The Biblical Marketplace Covenant"
          body="Every business listed on the Sanctuary Registry signs and adheres to four scriptural cornerstones. Profit is sacred only when acquired with absolute honor before God and our fellow citizens."
        />
        {/* Mobile: stacked. Tablet: 2x2. Desktop: all 4 side by side */}
        <Stagger
          stagger={0.12}
          amount={0.05}
          className="grid grid-cols-1 gap-5 mt-10 text-left sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4 lg:gap-6"
        >
          {covenant.slice(0, 4).map((c, i) => {
            const I = covIcons[i];
            return (
              <Item key={c.title} className="h-full">
                <Tilt className="h-full" max={4} lift={-8}>
                  <article className={`${cardBase} ${cardShadow} p-6`}>
                    <Bar blue />
                    <div className="flex items-center justify-between">
                      <span className="font-poppins text-[1.8rem] font-bold leading-none text-maroon/90">
                        {c.n}
                      </span>
                      <motion.span
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.7 }}
                        className="grid h-11 w-11 place-items-center rounded-xl bg-navy-2/10 text-navy-2"
                      >
                        <I size={22} />
                      </motion.span>
                    </div>
                    <h3 className="mt-5 font-poppins font-semibold leading-snug text-navy [font-size:clamp(1.15rem,0.95rem+0.4vw,1.35rem)]">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 font-poppins text-[0.8rem] font-medium text-maroon">
                      {c.ref}
                    </p>
                    <p className="mt-2.5 text-[0.86rem] leading-[1.8] text-ink">
                      {c.desc}
                    </p>
                    <p className="mt-auto border-t border-navy/10 pt-4 text-[0.8rem] leading-[1.6] text-navy-2">
                      Covenant: <i>&ldquo;{c.quote}&rdquo;</i>
                    </p>
                  </article>
                </Tilt>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Voices() {
  return (
    <section
      id="voices"
      className="relative overflow-hidden bg-[#eaeeff] py-12 sm:py-16 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none -right-28 top-10 h-72 w-72 bg-maroon/10 blur-3xl"
      />
      <div className="relative container-x">
        <Head
          label="Living Testimonies"
          title="Voices of Kingdom Trailblazers"
          body="How communion with the Chapel Marketplace Fellowship birthed breakthrough resilience, ethical triumph, and measurable growth."
        />
        {/* Mobile: stacked. Tablet: 2. Desktop: 3 side by side */}
        <Stagger
          stagger={0.14}
          amount={0.05}
          className="grid grid-cols-1 gap-5 mt-10 text-left sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-7"
        >
          {testimonials.slice(0, 3).map((t) => (
            <Item key={t.name} className="h-full">
              <motion.figure
                whileHover={{ y: -6 }}
                className={`${cardBase} ${cardShadow} p-6 sm:p-7`}
              >
                <Bar />
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-0 select-none font-poppins text-[7rem] font-bold leading-none text-maroon/10"
                >
                  &ldquo;
                </span>
                <blockquote className="relative text-[0.92rem] leading-[1.85] text-navy">
                  {t.quote}
                </blockquote>
                <figcaption className="relative flex items-center gap-3 pt-5 mt-auto border-t border-navy/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="object-cover w-12 h-12 rounded-full ring-2 ring-maroon/30"
                  />
                  <span>
                    <span className="block font-poppins text-[0.98rem] font-semibold text-navy">
                      {t.name}
                    </span>
                    <span className="block text-[0.78rem] text-ink">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Enlist form ---------------- */
const fields = [
  {
    l: "Enterprise Name",
    p: "e.g. Suntrust Enterprise",
    n: "name",
    ac: "organization",
  },
  {
    l: "Phone/Whatsapp Number",
    p: "+234 800 000 0000",
    n: "phone",
    t: "tel",
    ac: "tel",
  },
  { l: "CAC Registration Number", p: "e.g. CD34556262", n: "cac" },
  {
    l: "Lead Contact/ Principal Founder",
    p: "e.g Samuel Jude",
    n: "lead",
    ac: "name",
  },
  {
    l: "Official Business Email",
    p: "contact@companyname.ng",
    n: "email",
    t: "email",
    ac: "email",
  },
  {
    l: "Business Address",
    p: "e.g 13A Ajogbe Street.....",
    n: "address",
    ac: "street-address",
  },
];
// 16px on mobile prevents iOS from zooming into the field
const inputCls =
  "mt-2 w-full rounded-xl bg-[#eef1ff] px-4 py-3.5 text-[16px] text-navy outline-none transition-all duration-300 placeholder:text-[#9aa1b8] focus:bg-white focus:shadow-[0_0_0_2px_#0f2a57] sm:text-[0.92rem]";

const MAX_BYTES = 5 * 1024 * 1024;

function Enlist() {
  const reduce = useReducedMotion();
  const [file, setFile] = useState<string | null>(null);
  const [fileErr, setFileErr] = useState("");
  const [drag, setDrag] = useState(false);
  const [done, setDone] = useState(false);
  const inp = useRef<HTMLInputElement>(null);

  const onFile = (f?: File | null) => {
    if (!f) return;
    if (f.size > MAX_BYTES) {
      setFile(null);
      setFileErr("File is larger than 5MB. Please choose a smaller file.");
      return;
    }
    setFileErr("");
    setFile(f.name);
  };

  return (
    <section
      id="enlist"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#f4f6ff] pb-16 pt-12 sm:pb-20 lg:pb-24 lg:pt-20"
    >
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none -left-24 top-24 h-72 w-72 bg-navy-2/10 blur-3xl"
      />
      <div className="relative container-x">
        <div className="mx-auto max-w-[62rem]">
          <Reveal className="flex justify-center">
            <motion.div
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Logo size={0.95} />
            </motion.div>
          </Reveal>
          <Reveal y={50}>
            <div className="relative mt-4 overflow-hidden rounded-[1.75rem] border border-[#e6eaf6] bg-white px-5 py-8 shadow-[0_30px_70px_-40px_rgba(2,20,58,0.45)] sm:rounded-[2.2rem] sm:px-10 sm:py-10 lg:px-16 lg:pb-12 lg:pt-10">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-maroon via-[#e0566b] to-navy-2"
              />
              <h2 className="text-center font-poppins font-semibold leading-[1.3] text-navy-2 [font-size:clamp(1.4rem,1rem+1.4vw,2.3rem)] [text-wrap:balance]">
                Enlist Your Enterprise in the Sanctuary Directory
              </h2>
              <p className="mx-auto mt-3 max-w-[36rem] text-center text-[0.88rem] leading-[1.8] text-ink sm:text-[0.96rem]">
                Registration connects your enterprise to over 3,500 active
                church families, global diaspora partners, and our micro-grant
                opportunities.
              </p>

              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-14"
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 14,
                      }}
                      className="grid w-16 h-16 mx-auto text-white rounded-full shadow-lg place-items-center bg-maroon shadow-maroon/30"
                    >
                      <CheckCircle2 size={34} />
                    </motion.span>
                    <h3 className="mt-5 font-poppins text-[1.4rem] font-semibold text-navy">
                      Interest Received
                    </h3>
                    <p className="mx-auto mt-2 max-w-[24rem] text-[0.92rem] text-ink">
                      Thank you. The Osogbo District Headquarters Marketplace
                      Board will review your submission shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setDone(true);
                    }}
                    className="mt-8"
                  >
                    <Stagger
                      className="grid gap-x-8 gap-y-5 sm:grid-cols-2"
                      stagger={0.06}
                      amount={0.05}
                    >
                      {fields.map((f) => (
                        <Item key={f.n}>
                          <label className="block font-poppins text-[0.8rem] font-medium text-navy sm:text-[0.86rem]">
                            {f.l}
                            <input
                              name={f.n}
                              type={f.t ?? "text"}
                              placeholder={f.p}
                              autoComplete={f.ac}
                              inputMode={f.t === "tel" ? "tel" : undefined}
                              required
                              className={`${inputCls} font-normal`}
                            />
                          </label>
                        </Item>
                      ))}
                      <Item className="sm:col-span-2">
                        <label className="block font-poppins text-[0.8rem] font-medium text-navy sm:text-[0.86rem]">
                          Brief Description of Services
                          <textarea
                            name="desc"
                            rows={5}
                            placeholder="Outline your key commercial offerings, production capabilities, B2B wholesale services, or consultation scope..."
                            className={`${inputCls} resize-none font-normal`}
                          />
                        </label>
                      </Item>
                      <Item className="sm:col-span-2">
                        <span className="block font-poppins text-[0.8rem] font-medium text-navy sm:text-[0.86rem]">
                          Upload CAC Certificate
                        </span>
                        <motion.div
                          role="button"
                          tabIndex={0}
                          onClick={() => inp.current?.click()}
                          onKeyDown={(e) =>
                            (e.key === "Enter" || e.key === " ") &&
                            inp.current?.click()
                          }
                          onDragOver={(e) => {
                            e.preventDefault();
                            setDrag(true);
                          }}
                          onDragLeave={() => setDrag(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setDrag(false);
                            onFile(e.dataTransfer.files?.[0]);
                          }}
                          animate={{
                            scale: drag ? 1.02 : 1,
                            backgroundColor: drag ? "#e2e8ff" : "#eef1ff",
                          }}
                          whileHover={{ backgroundColor: "#e6ebff" }}
                          className={`mt-2 cursor-pointer rounded-xl border-2 border-dashed px-4 py-7 text-center ${drag ? "border-navy-2" : "border-navy-2/25"}`}
                        >
                          <motion.span
                            animate={reduce ? undefined : { y: [0, -4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block text-navy-2"
                          >
                            <CloudUpload size={30} />
                          </motion.span>
                          <p className="mt-2 break-all font-poppins text-[0.88rem] font-medium text-navy sm:text-[0.96rem]">
                            {file ?? (
                              <>
                                <span className="sm:hidden">
                                  Tap to upload CAC certificate
                                </span>
                                <span className="hidden sm:inline">
                                  Click to browse or drag and drop CAC
                                  certificate
                                </span>
                              </>
                            )}
                          </p>
                          <p className="mt-1 text-[0.74rem] text-ink sm:text-[0.82rem]">
                            PDF, JPG or PNG • Maximum file size: 5MB
                          </p>
                          <input
                            ref={inp}
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            onChange={(e) => onFile(e.target.files?.[0])}
                          />
                        </motion.div>
                        {fileErr && (
                          <p
                            role="alert"
                            className="mt-2 text-[0.8rem] font-medium text-maroon"
                          >
                            {fileErr}
                          </p>
                        )}
                      </Item>
                    </Stagger>

                    <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl bg-[#eef1ff] p-4 text-[0.8rem] leading-[1.65] text-navy sm:text-[0.86rem]">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-5 w-5 shrink-0 accent-[#5c0012]"
                      />
                      <span>
                        <b className="font-semibold">Solemn Declaration:</b> I
                        hereby commit that our enterprise will uphold the
                        Biblical Marketplace Covenant of English Chapel
                        Sanctuary of Peace by ensuring honest weights,
                        transparent invoicing, fair labour wages, and ethical
                        integrity in all commercial engagements.
                      </span>
                    </label>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="shimmer mt-6 flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-xl bg-maroon font-poppins text-[0.95rem] font-medium text-white shadow-[0_14px_24px_-12px_rgba(92,0,18,0.7)]"
                    >
                      <Send size={17} /> Submit My Interest
                    </motion.button>
                    <p className="mt-3 text-center text-[0.74rem] text-ink sm:text-[0.82rem]">
                      Submission acknowledges review by the Osogbo District
                      Headquarters Marketplace Board.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function BusinessPage() {
  return (
    <>
      <PageHero
        crumb="Kingdom Marketplace"
        lines={[
          { text: "Where Faith Meets Industry." },
          { text: "Honouring God in the Marketplace." },
        ]}
        body="Empowering Christian entrepreneurs, corporate executives, skilled artisans, and emerging professionals across Osun State and the global diaspora to build generational wealth with righteous stewardship, apostolic diligence, and mutual advancement."
        image="/images/pages/business-hero.jpg"
        imageAlt="An open hand reaching toward the sunset"
        size="md"
        imageClass="aspect-[640/647]"
      >
        <motion.a
          href="#enlist"
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="shimmer group inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-maroon px-6 py-3.5 font-poppins text-[0.92rem] font-medium text-white shadow-lg shadow-maroon/25 sm:w-auto sm:text-[0.95rem]"
        >
          Register Your Enterprise{" "}
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>
        <motion.a
          href="#directory"
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-maroon bg-white/70 px-6 py-3.5 font-poppins text-[0.92rem] font-medium text-maroon backdrop-blur transition-colors hover:bg-maroon hover:text-white sm:w-auto sm:text-[0.95rem]"
        >
          Explore Directory(180+)
        </motion.a>
      </PageHero>
      <Directory />
      <Fellowship />
      <Covenant />
      <Voices />
      <Enlist />
    </>
  );
}
