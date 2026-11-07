"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { Logo } from "../Navbar";
import { Reveal, SplitWords, ease } from "../motion";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="bg-white pb-16 sm:pb-24 lg:pb-[6.5rem]">
      <div className="container-x flex flex-col items-center text-center">
        <Reveal>
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <Logo size={0.8} />
          </motion.div>
        </Reveal>
        <h2 className="t-h2 mt-4 [font-size:clamp(1.45rem,1.05rem+1.5vw,2.7rem)]">
          <SplitWords text="Stay Connected with Our Church Family." inView />
        </h2>
        <Reveal delay={0.1}>
          <p className="t-small mx-auto mt-3 max-w-[40rem] text-[#52525b]">
            Receive church news, upcoming events, ministry updates, and encouraging weekly peace devotions directly in your inbox.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="w-full max-w-[34rem]">
          <form
            className="mt-7 flex flex-col gap-3 sm:flex-row"
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
              aria-label="Email address"
              placeholder="Enter your best email address..."
              className="h-12 flex-1 rounded-lg bg-[#f1f3ff] px-5 text-[0.9rem] text-navy outline-none transition-all duration-300 placeholder:text-[#8a93bd] focus:bg-white focus:shadow-[0_0_0_2px_#0f2a57,0_8px_20px_-8px_rgba(15,42,87,0.4)]"
            />
            <motion.button
              type="submit"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              animate={{ backgroundColor: done ? "#0f6b3a" : "#5c0012" }}
              className="shimmer h-12 whitespace-nowrap rounded-lg px-7 font-poppins text-[0.9rem] font-medium text-white shadow-lg shadow-maroon/25"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={done ? "d" : "i"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease }}
                  className="flex items-center justify-center gap-2"
                >
                  {done ? <><Check size={17} /> Subscribed</> : "Subscribe to Newsletter"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </form>
        </Reveal>
        <p className="mt-4 text-[0.74rem] text-ink">We respect your privacy. Unsubscribe anytime with one click.</p>
      </div>
    </section>
  );
}
