"use client";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, amount: 0.18 } as const;

/* ---------- Reveal: fade + rise + de-blur when scrolled into view ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 40,
  duration = 0.9,
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  duration?: number;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, x, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={viewport}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Stagger container + items ---------- */
const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
const item: Variants = {
  hidden: { opacity: 0, y: 44, scale: 0.97, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease },
  },
};

export function Stagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  amount = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function Item({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/* ---------- Word-by-word masked headline reveal ---------- */
export function SplitWords({
  text,
  className,
  delay = 0,
  inView = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  inView?: boolean;
}) {
  const words = text.split(" ");
  const props = inView
    ? { whileInView: "show", viewport: { once: true, amount: 0.6 } }
    : { animate: "show" };
  return (
    <motion.span
      className={className}
      variants={container(0.07, delay)}
      initial="hidden"
      {...props}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "115%", rotate: 4, opacity: 0 },
              show: {
                y: "0%",
                rotate: 0,
                opacity: 1,
                transition: { duration: 0.9, ease },
              },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ---------- Count-up number ---------- */
export function CountUp({ to, duration = 2.2 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (l) => setV(Math.round(l)),
    });
    return () => c.stop();
  }, [inView, to, duration]);
  return <span ref={ref}>{v}</span>;
}

/* ---------- Image with clip-path reveal + scroll parallax ---------- */
export function ParallaxImage({
  src,
  alt,
  className,
  intensity = 7,
  round = 24,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
  round?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity}%`, `${intensity}%`]);
  const base = 1 + (intensity * 2.1) / 100;
  return (
    <div ref={ref} className={className} style={{ borderRadius: round }}>
      <motion.div
        className="h-full w-full overflow-hidden"
        style={{ borderRadius: round }}
        initial={{ clipPath: `inset(0 0 100% 0 round ${round}px)` }}
        animate={{ clipPath: inView ? `inset(0 0 0% 0 round ${round}px)` : `inset(0 0 100% 0 round ${round}px)` }}
        transition={{ duration: 1.3, ease }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover"
          style={{ y, scale: base }}
          initial={{ scale: base + 0.18 }}
          animate={{ scale: inView ? base : base + 0.18 }}
          transition={{ duration: 1.8, ease }}
        />
      </motion.div>
    </div>
  );
}

/* ---------- 3D tilt card (mouse only) ---------- */
export function Tilt({
  children,
  className,
  max = 7,
  lift = -8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  lift?: number;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 20 });
  const sry = useSpring(ry, { stiffness: 220, damping: 20 });
  return (
    <motion.div
      className={className}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      whileHover={{ y: lift }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * max * 2);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * max * 2);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
