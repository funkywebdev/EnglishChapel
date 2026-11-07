"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Navbar";
import { Item, Reveal, Stagger, ease } from "./motion";

const fields = [
  { name: "name", label: "Your Full Name", ph: "e.g. Samuel & Folake Adeleke", type: "text" },
  { name: "phone", label: "Phone/Whatsapp Number", ph: "+234 800 000 0000", type: "tel" },
  { name: "location", label: "Location", ph: "e.g Osogbo, Osun State", type: "text" },
  { name: "service", label: "Preferred First Service", ph: "e.g Sunday Service- 10:00 AM", type: "text" },
];

export default function Visit() {
  const [sent, setSent] = useState(false);

  return (
    <section id="visit" className="bg-white pb-14 pt-12 lg:pb-[3.1rem] lg:pt-[2.7rem]">
      <div className="container-x">
        <Reveal className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Logo size={0.95} />
          </motion.div>
          <h2 className="t-h2 mt-5">Plan Your First Visit</h2>
          <p className="t-body mt-3 max-w-[760px] tracking-[0.05em] text-[#52525b]">
            Receive church news, upcoming events, ministry updates, and encouraging weekly peace devotions directly in
            your inbox.
          </p>
        </Reveal>

        <form
          className="mx-auto mt-8 max-w-[747px] lg:mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            (e.currentTarget as HTMLFormElement).reset();
            setTimeout(() => setSent(false), 4500);
          }}
        >
          <Stagger className="grid gap-x-[31px] gap-y-6 sm:grid-cols-2 lg:gap-y-[34px]" stagger={0.08}>
            {fields.map((f) => (
              <Item key={f.name}>
                <label htmlFor={f.name} className="block font-poppins text-[0.9rem] font-medium text-navy 2xl:text-[15.5px]">
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  required
                  placeholder={f.ph}
                  className="mt-2 h-11 w-full rounded-lg bg-[#f1f3ff] px-5 text-[0.88rem] text-navy shadow-sm outline-none ring-0 transition-all duration-300 placeholder:text-[#a6aed0] focus:bg-white focus:shadow-[0_0_0_2px_#0f2a57,0_8px_20px_-8px_rgba(15,42,87,0.4)]"
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
              className="shimmer mt-8 flex h-[54px] w-full items-center justify-center gap-2.5 rounded-lg font-poppins text-[0.95rem] font-medium text-white shadow-[0_10px_20px_-6px_rgba(92,0,14,0.5)] lg:mt-10"
            >
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.span
                    key="done"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3, ease }}
                    className="flex items-center gap-2"
                  >
                    <Check size={20} /> Welcome reserved — God bless you!
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3, ease }}
                    className="flex items-center gap-2.5"
                  >
                    <Send size={20} strokeWidth={1.6} /> Reserve My Guest Welcome
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </Reveal>
        </form>
      </div>
    </section>
  );
}
