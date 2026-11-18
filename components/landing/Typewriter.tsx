"use client";
import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Types `lines` character by character (one block per line) with a blinking caret.
 *  The untyped remainder is rendered invisibly so the layout never jumps. */
export default function Typewriter({
  lines,
  delay = 0.6,
  speed = 0.06,
  className,
}: {
  lines: string[];
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const total = lines.reduce((a, l) => a + l.length, 0);
  const [n, setN] = useState(0);

  useEffect(() => {
    const c = animate(0, total, {
      duration: total * speed,
      delay,
      ease: "linear",
      onUpdate: (v) => setN(Math.floor(v)),
    });
    return () => c.stop();
  }, [total, speed, delay]);

  // which line owns the caret
  let acc = 0;
  let current = lines.length - 1;
  for (let i = 0; i < lines.length; i++) {
    acc += lines[i].length;
    if (n < acc) { current = i; break; }
  }

  let left = n;
  return (
    <span className={className}>
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((l, i) => {
        const shown = Math.max(0, Math.min(l.length, left));
        left -= l.length;
        return (
          <span key={i} className="block" aria-hidden>
            {l.slice(0, shown)}
            {i === current && (
              <motion.span
                className="ml-1 inline-block h-[0.85em] w-[0.07em] bg-[#ff7a8e] align-[-0.06em]"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              />
            )}
            <span className="invisible">{l.slice(shown)}</span>
          </span>
        );
      })}
    </span>
  );
}
