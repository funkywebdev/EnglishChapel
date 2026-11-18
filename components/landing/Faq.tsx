"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Item, Reveal, SplitWords, Stagger, ease } from "../motion";
import { faqs } from "./data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  // Nav "Donations" link (/#donations) opens the donation answer.
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === "#donations") setOpen(6);
    };
    // Next's <Link> updates the hash with pushState (no hashchange), so also watch clicks.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (a?.getAttribute("href")?.endsWith("#donations")) setOpen(6);
    };
    sync();
    window.addEventListener("hashchange", sync);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", sync);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <section id="faq" className="bg-white pb-10 sm:pb-20 lg:pb-[5.5rem]">
      <div className="container-x">
        <div className="text-center">
          <Reveal><p className="t-label">Common Inquiries</p></Reveal>
          <h2 className="t-h2 mt-2 [font-size:clamp(1.5rem,1.05rem+1.6vw,2.9rem)]">
            <SplitWords text="Frequently Asked Questions" inView />
          </h2>
          <Reveal delay={0.15}>
            <p className="t-small mx-auto mt-3 max-w-[40rem] text-[#52525b]">
              Everything you need to know about worshipping with us at Osogbo District Headquarters.
            </p>
          </Reveal>
        </div>

        <Stagger className="mx-auto mt-9 max-w-[1200px] space-y-3 lg:mt-12" stagger={0.07} amount={0.05}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Item key={f.id}>
                <div id={f.id === "donate" ? "donations" : undefined} className="scroll-mt-28 rounded-xl bg-[#f3f5ff] transition-shadow duration-300 hover:shadow-md">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-poppins text-[0.92rem] font-medium text-navy sm:px-6 sm:py-5 sm:text-[1rem]"
                  >
                    {f.q}
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0, backgroundColor: isOpen ? "#5c0012" : "#0f2a57" }}
                      transition={{ duration: 0.4, ease }}
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white"
                    >
                      <Plus size={15} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[0.88rem] leading-[1.75] text-ink sm:px-6 sm:text-[0.95rem]">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
