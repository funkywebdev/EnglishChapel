"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../Navbar";
import { Item, Reveal, Stagger, ease } from "../motion";

const fields = [
  { name: "name", label: "Your Full Name", ph: "e.g. Samuel & Folake Adeleke", type: "text" },
  { name: "phone", label: "Phone/Whatsapp Number", ph: "+234 800 000 0000", type: "tel" },
  { name: "location", label: "Location", ph: "e.g. Osogbo, Osun State", type: "text" },
  { name: "department", label: "Preferred Department of Interest", ph: "e.g Ushering Unit", type: "text" },
];

export default function Volunteer() {
  const [sent, setSent] = useState(false);
  const dept = useRef<HTMLInputElement>(null);

  // "Join Our Fellowship" / "Express Interest" buttons pre-fill the department.
  useEffect(() => {
    const on = (e: Event) => {
      if (dept.current) dept.current.value = (e as CustomEvent<string>).detail;
    };
    window.addEventListener("ministry-interest", on);
    return () => window.removeEventListener("ministry-interest", on);
  }, []);

  return (
    <section id="volunteer" className="scroll-mt-20 bg-white pb-12 pt-4 sm:pb-16 lg:pb-[4rem]">
      <div className="container-x">
        <Reveal className="flex flex-col items-center text-center">
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}><Logo size={0.85} /></motion.div>
          <h2 className="t-h2 mt-4 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.7rem)]">Volunteer Interest Application</h2>
          <p className="mt-2.5 max-w-[40rem] text-[0.88rem] leading-[1.7] text-ink sm:text-[0.95rem]">
            Tell us where you would love to serve and a ministry leader will reach out to you personally.
          </p>
        </Reveal>

        <form
          className="mx-auto mt-7 max-w-[747px] lg:mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            (e.currentTarget as HTMLFormElement).reset();
            setTimeout(() => setSent(false), 4500);
          }}
        >
          <Stagger className="grid gap-x-8 gap-y-5 sm:grid-cols-2" stagger={0.08}>
            {fields.map((f) => (
              <Item key={f.name}>
                <label htmlFor={f.name} className="block font-poppins text-[0.85rem] font-medium text-navy">{f.label}</label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  ref={f.name === "department" ? dept : undefined}
                  required
                  placeholder={f.ph}
                  className="mt-2 h-11 w-full rounded-lg bg-[#f1f3ff] px-5 text-[0.88rem] text-navy shadow-sm outline-none transition-all duration-300 placeholder:text-[#a6aed0] focus:bg-white focus:shadow-[0_0_0_2px_#0f2a57,0_8px_20px_-8px_rgba(15,42,87,0.4)]"
                />
              </Item>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <motion.button
              type="submit"
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
              animate={{ backgroundColor: sent ? "#0f6b3a" : "#5c000e" }}
              className="shimmer mt-7 flex h-[52px] w-full items-center justify-center gap-2.5 rounded-lg font-poppins text-[0.92rem] font-medium text-white shadow-[0_10px_20px_-6px_rgba(92,0,14,0.5)] lg:mt-9"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={sent ? "d" : "i"} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3, ease }} className="flex items-center gap-2">
                  {sent ? <><Check size={19} /> Received — God bless you!</> : <><Send size={18} strokeWidth={1.6} /> Submit My Interest</>}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </Reveal>
        </form>
      </div>
    </section>
  );
}
