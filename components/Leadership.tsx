"use client";
import { motion } from "framer-motion";
import { ArrowRight, Megaphone, MailCheck, Users } from "lucide-react";
import { Item, ParallaxImage, Reveal, Stagger, Tilt } from "./motion";

const paragraphs = [
  "We welcome you in the matchless and glorious name of our Lord and Saviour, Jesus Christ!",
  "English Chapel Sanctuary of Peace is not just an assembly of people; it is a spiritual greenhouse designed to anchor your soul in truth, strengthen your marriage, inspire your children, nurture your faith, and release you into your divine purpose. We are a family of believers united by our love for God, our commitment to His Word, and our desire to see lives transformed through the power of the Holy Spirit. Here, we believe that everyone has a place, every life has value, and every individual carries a God-given purpose waiting to be discovered and fulfilled.",
  "Whether you are taking your first steps in faith, seeking a deeper relationship with God, navigating a challenging season, or simply longing for a place to belong, you are welcome here. You will find an atmosphere of genuine love, heartfelt worship, biblical teaching, meaningful fellowship, and spiritual encouragement to help you grow in your walk with Christ.",
  "At Sanctuary of Peace, we are committed to raising a generation rooted in God's truth, established in His love, strengthened in faith, and equipped to make a lasting difference in their homes, communities, and the world. We believe that families can flourish, destinies can be awakened, broken hearts can be restored, and lives can be renewed in the presence of God.",
  "Our prayer is that every time you walk through our doors, you encounter more than a church service; may you experience the warmth of God's family, the transforming power of His Word, and the peace that comes only through Christ. We believe that families can flourish, destinies can be awakened, broken hearts can be restored, and lives can be renewed in the presence of God.",
];

const team = [
  { img: "/images/p1.jpg", tag: "Christian Education", name: "Pastor David O. Oladipo", alt: "Pastor David O. Oladipo speaking at a lectern" },
  { img: "/images/p2.jpg", tag: "Secretariat & Welfare", name: "Deaconess Folashade Ajayi", alt: "Deaconess Folashade Ajayi holding a Bible" },
  { img: "/images/p3.jpg", tag: "Christian Education", name: "Pastor Samuel K. Adeleke", alt: "Pastor Samuel K. Adeleke in red and blue robes" },
];

export default function Leadership() {
  return (
    <section id="ministries" className="bg-white pb-6 pt-4 lg:pt-[2rem]">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <Reveal>
            <p className="t-label">Pastoral Stewardship</p>
            <h2 className="t-h2 mt-2">District Leadership &amp; Pastoral Council</h2>
          </Reveal>
          <Reveal delay={0.15} x={30} y={0}>
            <span className="inline-flex items-center gap-2 font-poppins text-[0.9rem] font-medium text-navy sm:mb-3 2xl:text-[15.5px]">
              <Users size={20} fill="currentColor" strokeWidth={1.5} /> Osogbo District Secretariat
            </span>
          </Reveal>
        </div>

        {/* Overseer */}
        <div className="mt-8 grid items-start gap-8 lg:mt-[4.4rem] lg:grid-cols-[612fr_950fr] lg:gap-x-[39px]">
          <ParallaxImage
            src="/images/overseer.jpg"
            alt="Rev. & Pastor (Mrs.) Emmanuel A. Adeyemi"
            className="mx-auto aspect-[612/728] w-full max-w-[520px] shadow-xl shadow-navy/10 lg:max-w-none"
            round={20}
            intensity={3}
          />
          <div>
            <Reveal x={40} y={0}>
              <p className="flex items-center gap-2 text-[0.75rem] uppercase text-maroon sm:text-[0.9rem] 2xl:text-[15.5px]">
                <Megaphone size={18} /> Message from the Overseer
              </p>
              <h3 className="mt-1 font-poppins font-semibold leading-[1.3] text-navy-2 [font-size:clamp(1.55rem,1.1rem+1.1vw,2.5rem)]">
                Rev. &amp; Pastor (Mrs.) Emmanuel A. Adeyemi
              </h3>
              <p className="mt-2 text-[0.88rem] text-[#4a5878] 2xl:text-[15.5px]">
                District Overseer &amp; Senior Pastor, Osogbo Headquarters
              </p>
            </Reveal>
            <Stagger stagger={0.12} className="mt-5 lg:mt-6" amount={0.05}>
              {paragraphs.map((p, i) => (
                <Item key={i}>
                  <p className="text-[0.9rem] leading-[1.75] text-[#52525b] 2xl:text-[15.5px] 2xl:leading-[1.84]">{p}</p>
                </Item>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="mt-7 flex flex-col gap-4 rounded-xl bg-[#e9edfe] px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-5 lg:py-[19px]"
              >
                <div className="flex items-center gap-4">
                  <MailCheck className="shrink-0 text-navy" size={32} strokeWidth={1.6} />
                  <div className="min-w-0">
                    <p className="text-[0.78rem] uppercase text-[#4b5563] 2xl:text-[15.5px]">Superintendent Desk</p>
                    <a href="mailto:overseer@englishchapelosogbo.org" className="block break-words font-poppins text-[0.9rem] font-medium text-navy sm:text-[0.97rem]">
                      overseer@englishchapelosogbo.org
                    </a>
                  </div>
                </div>
                <motion.a
                  href="#visit"
                  whileHover="hover"
                  className="inline-flex items-center gap-1.5 font-poppins text-[0.9rem] font-medium text-maroon 2xl:text-[15.5px]"
                >
                  Request Pastoral Audience
                  <motion.span variants={{ hover: { x: 6 } }}><ArrowRight size={18} /></motion.span>
                </motion.a>
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* Pastors */}
        <Stagger className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-[2.6rem] lg:grid-cols-3 lg:gap-[31px]" stagger={0.15}>
          {team.map((t) => (
            <Item key={t.name} className="h-full">
              <Tilt className="h-full" max={4} lift={-10}>
                <article className="group h-full overflow-hidden rounded-2xl bg-mist-2 shadow-[0_10px_16px_-3px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0_32px_50px_-14px_rgba(2,20,58,0.45)]">
                  <div className="aspect-[513/329] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.img}
                      alt={t.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="px-6 pb-7 pt-6 lg:px-[31px]">
                    <p className="font-poppins text-[0.75rem] font-medium uppercase text-maroon sm:text-[0.85rem] 2xl:text-[15.5px]">{t.tag}</p>
                    <h3 className="mt-2 font-poppins font-medium text-navy [font-size:clamp(1.2rem,0.9rem+0.62vw,1.75rem)]">{t.name}</h3>
                    <p className="mt-1.5 text-[0.84rem] font-medium text-[#4b5563] 2xl:text-[15.5px]">Associate Pastor (Discipleship &amp; Family Life)</p>
                    <p className="mt-3 text-[0.88rem] leading-[1.7] text-[#52525b] 2xl:text-[15.5px] 2xl:leading-[1.8]">
                      Leading the Believers&apos; Foundation School, Sunday Bible School curriculum, and marriage counseling ministry.
                    </p>
                  </div>
                </article>
              </Tilt>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
