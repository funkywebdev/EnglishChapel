"use client";
import { BookOpenText, Flame, Flower, HandHeart, Ribbon, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Item, Reveal, Stagger } from "./motion";

const beliefs = [
  { icon: BookOpenText, title: "The Holy Scriptures", desc: "We believe the 66 books of the Old and New Testaments are the inspired, infallible, and authoritative Word of God, serving as the ultimate rule of faith and conduct for all believers." },
  { icon: Flower, title: "The Divine God", desc: "There is one eternally existent God in three co-equal persons: Father, Son, and Holy Spirit—Creator of all things visible and invisible, infinite in power, holiness, and mercy." },
  { icon: Ribbon, title: "Salvation by Grace", desc: "Humanity's only hope of redemption is through the shed blood of Jesus Christ, His bodily resurrection, and personal faith in Him. Salvation is entirely by grace, received." },
  { icon: Flame, title: "The Holy Spirit & Gifts", desc: "We believe in the baptism and ongoing infilling of the Holy Spirit, empowering the church with spiritual gifts, fervent prayer, and holy living to witness effectively in the world." },
  { icon: Users, title: "Christian Family", desc: "We uphold the sacredness of biblical marriage and the home as God's foundational institution, nurturing children in godly discipline, mutual respect, and unconditional love.", fill: true },
  { icon: HandHeart, title: "Social Stewardship", desc: "True faith expresses itself in social action: advocating for the vulnerable, visiting the sick, feeding the hungry, and being exemplary citizens with civic integrity in Nigeria." },
];

export default function Beliefs() {
  return (
    <section id="beliefs" className="bg-white pb-10 pt-14 lg:pt-[5.4rem]">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="t-label">Doctrinal Creed</p>
          <h2 className="t-h2 mt-2">What we believe &amp; Preach</h2>
          <p className="t-body mt-3 tracking-[0.05em] text-[#52525b]">
            Our confession of faith rooted strictly in the infallible Word of God.
          </p>
        </Reveal>
        <Stagger className="mt-9 grid items-center gap-5 sm:grid-cols-2 lg:mt-[5.5rem] lg:grid-cols-3 lg:gap-x-[68px] lg:gap-y-[62px]" stagger={0.1}>
          {beliefs.map((b, i) => (
            <Item key={b.title} className="h-full lg:h-auto">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="group h-full rounded-[1.25rem] bg-mist px-6 py-8 text-center transition-shadow duration-300 hover:shadow-[0_24px_40px_-18px_rgba(2,20,58,0.35)] lg:h-auto lg:px-[34px] lg:py-[37px]"
              >
                <h3 className="inline-flex items-center justify-center gap-2.5 font-poppins font-medium text-navy [font-size:clamp(1.15rem,0.9rem+0.62vw,1.75rem)]">
                  <motion.span
                    className="text-maroon"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.7 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <b.icon size={24} strokeWidth={2} fill={b.fill ? "currentColor" : "none"} />
                  </motion.span>
                  {b.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[27rem] text-[0.92rem] leading-[1.75] text-[#52525b] 2xl:text-[15.5px] 2xl:leading-[1.84]">{b.desc}</p>
              </motion.div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
