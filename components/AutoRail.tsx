"use client";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wrap a horizontally scrollable card row. While the row is scrollable (phones / tablets)
 * it glides to the next card every few seconds, loops back to the start, pauses while the
 * visitor touches it, and shows tappable dots. On desktop (a plain grid) it does nothing.
 */
export default function AutoRail({ children, interval = 3200 }: { children: ReactNode; interval?: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  const rail = () => wrap.current?.firstElementChild as HTMLElement | null;

  const goTo = useCallback((i: number) => {
    const el = rail();
    const x = el && (Array.from(el.children)[i] as HTMLElement | undefined);
    if (!el || !x) return;
    const left = x.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft;
    el.scrollTo({ left: Math.max(0, left - (el.clientWidth - x.offsetWidth) / 2), behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = rail();
    if (!el) return;
    let paused = false;
    let visible = false;
    let resume: ReturnType<typeof setTimeout> | undefined;

    const items = () => Array.from(el.children) as HTMLElement[];
    const current = () => {
      const mid = el.scrollLeft + el.clientWidth / 2;
      const base = el.getBoundingClientRect().left - el.scrollLeft;
      let best = 0;
      let bestD = Infinity;
      items().forEach((x, i) => {
        const d = Math.abs(x.getBoundingClientRect().left - base + x.offsetWidth / 2 - mid);
        if (d < bestD) { bestD = d; best = i; }
      });
      return best;
    };
    const scrollable = () => el.scrollWidth > el.clientWidth + 4;

    setCount(items().length);
    const timer = setInterval(() => {
      if (paused || !visible || !scrollable()) return;
      goTo((current() + 1) % items().length);
    }, interval);

    const pause = () => {
      paused = true;
      clearTimeout(resume);
      resume = setTimeout(() => (paused = false), 5500);
    };
    const onScroll = () => setActive(current());
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.35 });
    io.observe(el);

    el.addEventListener("pointerdown", pause);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("wheel", pause, { passive: true });
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(timer);
      clearTimeout(resume);
      io.disconnect();
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("scroll", onScroll);
    };
  }, [interval, goTo]);

  return (
    <div ref={wrap} className="contents">
      {children}
      {count > 1 && (
        <div className="mt-1 flex justify-center gap-1.5 lg:hidden" role="tablist" aria-label="Slides">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-6 bg-maroon" : "w-1.5 bg-navy-2/25"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
