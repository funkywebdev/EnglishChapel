"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Item, Stagger, ease } from "./motion";

const MLink = motion.create(Link);
const hrefs: Record<string, string> = {
  "Our Heritage": "/about",
  "District Leadership": "/about#ministries",
  "Youth & Children": "/ministries",
  "Evangelism Wing": "/ministries",
  "Audio Sermons": "/#sermons",
  "District Live Stream": "/#sermons",
  "Upcoming Programs": "/#events",
  "Weekly Bulletin": "/#gallery",
  "District Gallery": "/#gallery",
  "Chapel Marketplace": "/#business",
  "Prayer Requests": "/about#visit",
  "Volunteer": "/ministries#volunteer",
  "Locate Sanctuary": "/#home",
};

const cols = [
  { title: "About & Ministries", links: ["Our Heritage", "District Leadership", "Youth & Children", "Evangelism Wing"] },
  { title: "Sermons & Events", links: ["Audio Sermons", "District Live Stream", "Upcoming Programs", "Weekly Bulletin"] },
  { title: "Community & Gallery", links: ["District Gallery", "Chapel Marketplace", "Prayer Requests", "Locate Sanctuary"] },
];

const socials = [
  {
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]"><circle cx="12" cy="12" r="11" fill="#1877f2" /><path d="M13.4 20v-7h2.3l.4-2.7h-2.7V8.6c0-.8.3-1.3 1.4-1.3h1.4V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2h-2.3V13h2.3v7h2.8z" fill="#fff" /></svg>
    ),
  },
  {
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]"><defs><linearGradient id="ig" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#feda75" /><stop offset=".35" stopColor="#fa7e1e" /><stop offset=".6" stopColor="#d62976" /><stop offset="1" stopColor="#4f5bd5" /></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig)" /><rect x="6.2" y="6.2" width="11.6" height="11.6" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" /><circle cx="12" cy="12" r="2.8" fill="none" stroke="#fff" strokeWidth="1.8" /><circle cx="16.6" cy="7.4" r="1" fill="#fff" /></svg>
    ),
  },
  {
    label: "YouTube",
    svg: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]"><rect x="1.5" y="5" width="21" height="14" rx="4" fill="#ff0000" /><path d="M10 9l5 3-5 3z" fill="#fff" /></svg>
    ),
  },
  {
    label: "TikTok",
    svg: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]"><path d="M16.5 3c.3 2.2 1.6 3.6 3.8 3.8v2.6c-1.4 0-2.7-.4-3.8-1.2v6.2a5.6 5.6 0 11-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 102 2.8V3h2.7z" fill="#25f4ee" transform="translate(-.6 .6)" /><path d="M16.5 3c.3 2.2 1.6 3.6 3.8 3.8v2.6c-1.4 0-2.7-.4-3.8-1.2v6.2a5.6 5.6 0 11-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 102 2.8V3h2.7z" fill="#fe2c55" transform="translate(.6 -.4)" /><path d="M16.5 3c.3 2.2 1.6 3.6 3.8 3.8v2.6c-1.4 0-2.7-.4-3.8-1.2v6.2a5.6 5.6 0 11-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 102 2.8V3h2.7z" fill="#fff" /></svg>
    ),
  },
];

export default function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer id="contact" className="bg-navy-2 text-[#c9d3ea]">
      <div className="container-x pb-8 pt-12 lg:pt-[3.6rem]">
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.84fr_1fr_1fr_1fr_0.77fr] lg:gap-x-0" stagger={0.1}>
          <Item className="col-span-2 lg:col-span-1 lg:pr-10">
            <h3 className="font-poppins font-medium text-white [font-size:clamp(1.3rem,1rem+0.7vw,1.75rem)]">English Chapel</h3>
            <p className="mt-2 text-[0.85rem] uppercase 2xl:text-[15.5px]">Sanctuary of Peace</p>
            <p className="mt-3 max-w-[29rem] text-[0.88rem] leading-[1.7] text-white/90 2xl:text-[15.5px]">
              Osogbo District Headquarters, Nigeria. Dedicated to spiritual sanctuary, biblical truth, and
              compassionate community transformation across the district.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.3 + i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.12 }}
                  className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-[#0a1f45]"
                >
                  {s.svg}
                </motion.a>
              ))}
            </div>
          </Item>

          {cols.map((c) => (
            <Item key={c.title}>
              <h3 className="font-poppins font-medium leading-[1.4] text-white [font-size:clamp(1.15rem,0.9rem+0.62vw,1.75rem)] lg:min-h-[5.4rem] lg:max-w-[12rem]">{c.title}</h3>
              <ul className="mt-2 space-y-3 lg:mt-0 lg:space-y-[17px]">
                {c.links.map((l) => (
                  <li key={l}>
                    <MLink
                      href={hrefs[l] ?? "/"}
                      whileHover={{ x: 6, color: "#ffffff" }}
                      transition={{ duration: 0.2 }}
                      className="inline-block text-[0.9rem] 2xl:text-[18px]"
                    >
                      {l}
                    </MLink>
                  </li>
                ))}
              </ul>
            </Item>
          ))}

          <Item className="col-span-2 lg:col-span-1">
            <h3 className="font-poppins font-medium text-white [font-size:clamp(1.15rem,0.9rem+0.62vw,1.75rem)]">Weekly Digest</h3>
            <p className="mt-4 max-w-[14rem] text-[0.86rem] leading-[1.75] text-white/90 2xl:text-[15.5px]">
              Receive sermon excerpts, peace devotions, and district alerts.
            </p>
            <form
              className="mt-3.5 max-w-[14rem] space-y-2.5"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
                (e.currentTarget as HTMLFormElement).reset();
                setTimeout(() => setDone(false), 3500);
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter email...."
                aria-label="Email address"
                className="h-[38px] w-full rounded-lg bg-[#7480a8] px-3 text-[0.85rem] text-white outline-none transition-all duration-300 placeholder:text-[#c4cbe3] focus:bg-[#8a95b8] focus:shadow-[0_0_0_2px_#fff]"
              />
              <motion.button
                type="submit"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="h-[38px] w-full rounded-lg bg-maroon font-poppins text-[0.88rem] font-medium text-white shadow-md"
              >
                {done ? "Subscribed ✓" : "Subscribe"}
              </motion.button>
            </form>
          </Item>
        </Stagger>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-12 flex flex-col gap-5 lg:mt-[4.2rem] lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="text-[0.8rem] leading-relaxed 2xl:text-[15.5px]">
            <p>© 2025 English Chapel Sanctuary of Peace · Osogbo District Headquarters. All rights reserved.</p>
            <p className="uppercase text-[#b4c0de]">A habitation of divine serenity, holiness and grace</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] 2xl:text-[15.5px] lg:mr-[3.5rem]">
            {["Privacy Policy", "Giving Protocols", "District Secretariat"].map((l) => (
              <motion.a key={l} href="#" whileHover={{ y: -2, color: "#fff" }}>
                {l}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
