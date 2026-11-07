"use client";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ease } from "./motion";

const MLink = motion.create(Link);

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Business", href: "/#business" },
  { label: "Donations", href: "/#donations" },
  { label: "Contact Us", href: "/#contact" },
];
const VISIT = "/about#visit";

export function Logo({ size = 1 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.png"
      alt="English Chapel emblem"
      width={92 * size}
      height={52 * size}
      className="h-auto select-none"
      style={{ width: 92 * size }}
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [spy, setSpy] = useState("/");
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // On /about the About Us link is active; on / we scroll-spy the section anchors.
  const active = pathname !== "/" ? pathname.replace(/\/$/, "") : spy;

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    if (pathname !== "/") return;
    let cur = "/";
    for (const l of links) {
      const hash = l.href.split("#")[1];
      if (!hash) continue;
      const el = document.getElementById(hash);
      if (el && el.getBoundingClientRect().top <= 160) cur = l.href;
    }
    setSpy(cur);
  });

  useEffect(() => setSpy("/"), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease }}
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-shadow duration-500 ${
        scrolled ? "shadow-[0_8px_30px_-12px_rgba(2,20,58,0.25)]" : ""
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-[64px] lg:h-[76px]" : "h-[68px] lg:h-[88px] 2xl:h-[118px]"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5" aria-label="English Chapel home">
          <span className="hidden sm:block"><Logo size={0.95} /></span>
          <span className="sm:hidden"><Logo size={0.72} /></span>
          <span className="leading-tight">
            <span className="block font-poppins text-[1.02rem] font-semibold text-navy-2 sm:text-[1.2rem] lg:text-[1.3rem] 2xl:text-[22px]">
              English Chapel
            </span>
            <span className="block text-[0.58rem] font-medium uppercase tracking-[0.2em] text-navy-2 sm:text-[0.7rem] lg:text-[0.8rem] 2xl:text-[13.6px]">
              Sanctuary of Peace
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7 2xl:gap-9" aria-label="Main">
          {links.map((l, i) => (
            <MLink
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.06, duration: 0.6, ease }}
              className={`relative py-1 text-[0.86rem] transition-colors xl:text-[0.98rem] 2xl:text-[18px] ${
                active === l.href ? "text-navy-2" : "text-[#4b5563] hover:text-navy-2"
              }`}
            >
              {l.label}
              {active === l.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-maroon"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </MLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex 2xl:gap-4">
          <MLink
            href={VISIT}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-lg border border-maroon bg-maroon px-5 py-2 font-poppins text-[0.88rem] font-medium text-white shadow-md shadow-maroon/20 xl:px-7 2xl:px-10 2xl:py-2.5 2xl:text-[18px]"
          >
            Sign Up
          </MLink>
          <MLink
            href={VISIT}
            whileHover={{ y: -2, scale: 1.03, backgroundColor: "#5c0012", color: "#ffffff" }}
            whileTap={{ scale: 0.96 }}
            className="rounded-lg border border-maroon bg-white px-5 py-2 font-poppins text-[0.88rem] font-medium text-maroon xl:px-7 2xl:px-10 2xl:py-2.5 2xl:text-[18px]"
          >
            Sign In
          </MLink>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-mist lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <motion.span
              className="absolute left-0 top-0 block h-[2px] w-5 rounded bg-navy-2"
              animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease }}
            />
            <motion.span
              className="absolute left-0 top-[7px] block h-[2px] w-5 rounded bg-navy-2"
              animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 top-[14px] block h-[2px] w-5 rounded bg-navy-2"
              animate={open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease }}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "calc(100dvh - 68px)", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
              className="container-x flex h-full flex-col overflow-y-auto pb-10 pt-4"
              aria-label="Mobile"
            >
              {links.map((l) => (
                <MLink
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
                  }}
                  className={`flex items-center justify-between border-b border-mist py-4 font-poppins text-[1.25rem] font-medium ${
                    active === l.href ? "text-maroon" : "text-navy-2"
                  }`}
                >
                  {l.label}
                  <span className="text-maroon/60">→</span>
                </MLink>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
                className="mt-8 grid grid-cols-2 gap-3"
              >
                <Link href={VISIT} onClick={() => setOpen(false)} className="rounded-lg bg-maroon py-3 text-center font-poppins font-medium text-white">
                  Sign Up
                </Link>
                <Link href={VISIT} onClick={() => setOpen(false)} className="rounded-lg border border-maroon py-3 text-center font-poppins font-medium text-maroon">
                  Sign In
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
