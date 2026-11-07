"use client";
import { motion } from "framer-motion";
import { BookOpen, Eye, Handshake, Heart, Rocket, Shield } from "lucide-react";
import { Item, Reveal, Stagger, Tilt, ease } from "./motion";

const pillars = [
  { icon: BookOpen, title: "Sound Doctrine", desc: "Uncompromising fidelity to the Holy Scriptures with systematic expository preaching and sound biblical education." },
  { icon: Heart, title: "Sanctuary of Peace", desc: "Radical hospitality where wounded hearts find healing, families discover unity, and newcomers experience warmth." },
  { icon: Shield, title: "Holiness & Integrity", desc: "A pursuit of clean hands and pure hearts in pastoral governance, public witness, financial transparency, and daily lifestyle." },
  { icon: Handshake, title: "Transformative Action", desc: "Engaging the needy through community food pantries, university scholarships, vocational workshops, and hospital ministries." },
];

export default function Foundation() {
  return (
    <section id="foundation" className="bg-white pb-16 pt-12 lg:pb-[6rem] lg:pt-[3.1rem]">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="t-label">Our Foundation</p>
          <h2 className="t-h2 mt-2">Vision, Mission &amp; Guiding Pillars</h2>
          <p className="t-body mx-auto mt-3 max-w-3xl tracking-[0.05em] text-[#52525b]">
            The divine mandate steering our pastoral team and congregational initiatives.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-6 lg:mt-[3.8rem] lg:grid-cols-2 lg:gap-[41px]">
          <Reveal x={-60} y={0} duration={1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="h-full rounded-[1.25rem] bg-navy-3 p-7 shadow-[0_14px_30px_-10px_rgba(1,21,56,0.6)] sm:p-10 lg:px-[52px] lg:py-[39px]"
            >
              <motion.span
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-white/20 text-white lg:h-[62px] lg:w-[62px]"
              >
                <Eye size={30} strokeWidth={1.8} />
              </motion.span>
              <h3 className="mt-6 font-poppins font-medium text-white [font-size:clamp(1.4rem,1rem+0.85vw,2rem)]">Our Sacred Vision</h3>
              <p className="t-body mt-4 tracking-[0.05em] text-[#cdd3e3]">
                &quot;To be a beacon of spiritual revival, peace, holistic transition and all transformation across
                Osogbo and Nigeria—nurturing believers who mirror Christ&apos;s character in society, market places, and
                public leadership.&quot;
              </p>
              <p className="mt-5 flex items-center gap-2 text-[0.78rem] uppercase text-[#cdd3e3] sm:text-[0.95rem]">
                <motion.span
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-white"
                />
                Reverence · Revival · Reconciliation
              </p>
            </motion.div>
          </Reveal>

          <Reveal x={60} y={0} duration={1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="h-full rounded-[1.25rem] border-2 border-maroon bg-white p-7 sm:p-10 lg:px-[50px] lg:py-[37px]"
            >
              <motion.span
                whileHover={{ rotate: -12, scale: 1.1, y: -4 }}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-mist text-navy lg:h-[62px] lg:w-[62px]"
              >
                <Rocket size={30} strokeWidth={1.8} />
              </motion.span>
              <h3 className="mt-6 font-poppins font-medium text-navy-2 [font-size:clamp(1.4rem,1rem+0.85vw,2rem)]">Our Apostolic Mission</h3>
              <p className="t-body mt-4 tracking-[0.05em] text-[#52525b]">
                &quot;Preaching sound biblical doctrine, raising mature disciples, empowering families through radical
                love, and uplifting society through purposeful, compassionate welfare outreaches across all
                strata.&quot;
              </p>
              <p className="mt-5 flex items-center gap-2 text-[0.78rem] uppercase text-[#111827] sm:text-[0.95rem]">
                <motion.span
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }}
                  className="h-2 w-2 rounded-full bg-maroon"
                />
                Discipleship · Compassion · Stewardship
              </p>
            </motion.div>
          </Reveal>
        </div>

        {/* Four pillars */}
        <div id="pillars" className="pt-16 lg:pt-[5.9rem]">
          <Reveal>
            <h2 className="t-h2">The Four Pillars of Our Sanctuary</h2>
          </Reveal>
          <Stagger className="mt-7 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-[31px]" stagger={0.14}>
            {pillars.map((p, i) => (
              <Item key={p.title} className="h-full">
                <Tilt className="h-full" max={5} lift={-8}>
                  <div className="group h-full rounded-2xl bg-white px-6 pb-8 pt-5 text-center shadow-[0_2px_14px_-2px_rgba(2,20,58,0.1)] ring-1 ring-black/[0.03] transition-shadow duration-300 hover:shadow-[0_26px_44px_-16px_rgba(92,0,18,0.3)] lg:px-[50px]">
                    <motion.span
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.25 + i * 0.1 }}
                      className="mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-full bg-maroon-2 text-white transition-colors duration-300 group-hover:bg-maroon"
                    >
                      <p.icon size={22} strokeWidth={1.8} />
                    </motion.span>
                    <h3 className="mt-4 font-poppins font-medium text-navy [font-size:clamp(1.2rem,0.9rem+0.62vw,1.75rem)]">{p.title}</h3>
                    <p className="mt-3 text-[0.92rem] leading-[1.75] text-[#52525b] 2xl:text-[15.5px] 2xl:leading-[1.84]">{p.desc}</p>
                  </div>
                </Tilt>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
