"use client";
import { motion } from "framer-motion";
import { ScrollText, ShieldCheck } from "lucide-react";
import { Item, ParallaxImage, Reveal, SplitWords, Stagger, Tilt, ease } from "./motion";

const story = [
  "English Chapel Sanctuary of Peace, Ogo-Oluwa, Osogbo, is rooted in the rich spiritual heritage of the Cherubim and Seraphim Christian movement, one of Nigeria's historic indigenous Christian movements. The movement emerged in Nigeria in 1925 through the ministry of Saint Moses Orimolade Tunolase, popularly known as Baba Aladura, whose passion for evangelism, fervent prayers, holiness and spiritual revival contributed significantly to the growth of Christianity in Nigeria. As the movement expanded across the country, it reached Oshogbo in April 1927, spreading its distinctive tradition of prayer, worship, faith and total dependence on God.",
  "Building on this rich Christian heritage, English Chapel Sanctuary of Peace embraces the enduring values of prayer, holiness, love, discipline, spiritual growth and commitment to the Word of God. We recognise the sacrifices, dedication and spiritual contributions of the generations of believers and ministers who have preserved and advanced the C&S tradition. Their legacy reminds us that the Church is not merely a physical gathering place but a spiritual family called to worship God, demonstrate His love and make a meaningful difference in the lives of people.",
  "Today, English Chapel Sanctuary of Peace is committed to being a place where individuals and families can encounter God, grow in faith and discover their divine purpose. Our mission extends beyond regular church gatherings to building stronger marriages, nurturing children in the fear of God, inspiring young people, supporting families and raising spiritually grounded individuals who will positively influence their communities. We believe that the Church should be a sanctuary for the weary, a place of encouragement for the discouraged, a source of restoration for the broken and a home for everyone seeking a deeper relationship with Jesus Christ.",
  "Looking ahead, we remain committed to preserving our spiritual heritage while embracing the responsibility of reaching present and future generations with the unchanging truth of the Gospel. We envision a Church where God's presence is honoured, His Word is taught with integrity, genuine fellowship is encouraged and lives are continually transformed through the power of the Holy Spirit. Our desire is to extend the impact of our ministry beyond the walls of the Church, touching lives, strengthening families, transforming communities and raising generations committed to the advancement of God's Kingdom.",
  "Our heritage reminds us of where we come from, our faith establishes who we are, and our commitment to God's Kingdom determines where we are going. At English Chapel Sanctuary of Peace, we believe that every life matters, every family deserves spiritual nourishment and everyone has a place in God's divine plan. We warmly welcome you into a family where faith is nurtured, families are strengthened, destinies are awakened and lives are transformed through Christ Jesus. To God alone be all the glory, honour and praise.",
];

const milestones = [
  { n: "01", tag: "1996 · Foundation", title: "The Mustard Seed", desc: "Twelve pioneer families inaugurated regular Sunday expository services at Station Road, dedicated to untouched scripture." },
  { n: "02", tag: "2004 · Dedication", title: "Haven Dedication", desc: "Completion and solemn dedication of the main auditorium as the Sanctuary of Peace, inaugurating daily intercessory watches." },
  { n: "03", tag: "2015 · Elevation", title: "District Headquarters", desc: "Charters ratified establishing English Chapel as administrative seat for Osogbo District, supervising regional plants and leadership schools." },
  { n: "04", tag: "2024+ · Expansion", title: "Empowerment Era", desc: "Groundbreaking for the Multipurpose Youth Arena, Digital Media Suite, and expanded Community Welfare project that are sustainable." },
];

export default function About() {
  return (
    <>
      {/* Our Story */}
      <section id="about" className="bg-white pb-14 pt-14 sm:pt-16 lg:pb-[7.3rem] lg:pt-[4.5rem]">
        <div className="container-x">
          <h2 className="t-h2 text-center">
            <SplitWords text="Our Story," inView />{" "}
            <SplitWords text="His Glory" inView delay={0.2} className="text-maroon" />
          </h2>
          <Stagger stagger={0.18} amount={0.05} className="mt-7 sm:mt-9">
            {story.map((p, i) => (
              <Item key={i}>
                <p className="t-body leading-[1.78] text-left tracking-[0.02em] text-[#52525b] lg:tracking-[0.05em]">{p}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Heritage & Origins */}
      <section id="gallery" className="bg-white pb-12 lg:pb-14">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[612fr_848fr] lg:gap-x-[8.8%]">
          <div className="order-2 lg:order-1">
            <Reveal x={-40} y={0}>
              <p className="t-label">Our Heritage &amp; Origins</p>
            </Reveal>
            <Reveal delay={0.1} x={-40} y={0}>
              <h2 className="t-h2 mt-3 leading-[1.45]">From a Living Room Fellowship to District Headquarters</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="t-body mt-6 max-w-[580px] leading-[1.78] tracking-[0.03em] text-[#52525b] lg:tracking-[0.05em]">
                In 1996, a devoted band of university lecturers, civil servants, and passionate young disciples
                gathered under a simple wooden pavilion with an urgent calling: to cultivate a bilingual, reverent
                sanctuary where the peace of Jesus Christ could transform Osun State.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="t-body mt-5 text-[#52525b]">
                Named <span className="font-medium tracking-[0.04em] text-navy-2">English Chapel</span> to bridge
                ethnic and linguistic barriers, the church grew into a pivotal beacon of theological discipline and
                spiritual revival, later designated as the Osogbo District Headquarters in recognition of its
                missionary impact.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <motion.div
                whileHover={{ x: 6 }}
                className="mt-7 flex items-center gap-5 rounded-xl bg-[#e8edff] px-6 py-6 sm:px-10"
              >
                <motion.span
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="shrink-0 text-navy"
                >
                  <ScrollText size={30} strokeWidth={2.2} />
                </motion.span>
                <p className="t-small text-[#1f2937]">
                  &quot;We built not merely with stone, but with tears of intercession, fervent worship, and an
                  unbending thirst for sound doctrine.&quot;
                </p>
              </motion.div>
            </Reveal>
          </div>

          <div className="relative order-1 pb-6 lg:order-2 lg:pb-0">
            <ParallaxImage
              src="/images/heritage.jpg"
              alt="Believers in white garments praying beside the river"
              className="aspect-[848/598] w-full shadow-xl shadow-navy/10"
              round={24}
              intensity={3}
              priority
            />
            <motion.div
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease, delay: 0.7 }}
              className="absolute bottom-0 left-3 sm:left-5 lg:-left-[75px] lg:bottom-0"
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-4 rounded-xl bg-[#112a56] px-5 py-4 shadow-[0_25px_40px_-12px_rgba(2,20,58,0.55)] sm:gap-5 sm:px-8 sm:py-5"
              >
                <ShieldCheck className="shrink-0 text-[#f4a39b]" size={36} strokeWidth={1.6} />
                <span>
                  <span className="block text-[0.7rem] font-light uppercase tracking-wide text-[#d3d9ea] sm:text-[0.85rem] lg:text-[15.5px]">
                    Sanctuary Charter
                  </span>
                  <span className="block font-poppins text-[1.05rem] font-medium text-white sm:text-[1.3rem] lg:text-[23px]">
                    Osogbo District HQ
                  </span>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section id="milestones" className="bg-mist py-12 lg:pb-[3.25rem] lg:pt-[4.75rem]">
        <div className="container-x">
          <Reveal>
            <h2 className="t-h2">Milestones in Our Journey</h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-[31px]" stagger={0.14}>
            {milestones.map((m) => (
              <Item key={m.n} className="h-full">
                <Tilt className="h-full" max={5} lift={-10}>
                  <div className="group h-full rounded-2xl bg-white p-6 shadow-[0_6px_14px_-4px_rgba(2,20,58,0.25)] transition-shadow duration-300 hover:shadow-[0_28px_45px_-14px_rgba(2,20,58,0.35)] lg:px-[31px] lg:py-[31px]">
                    <motion.span
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.3 }}
                      className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-navy-2 font-poppins text-[1.15rem] text-white transition-colors group-hover:bg-maroon"
                    >
                      {m.n}
                    </motion.span>
                    <p className="mt-9 text-[0.78rem] uppercase text-maroon sm:text-[0.85rem] 2xl:text-[15.5px]">{m.tag}</p>
                    <h3 className="mt-1 font-poppins font-medium text-navy [font-size:clamp(1.2rem,0.9rem+0.6vw,1.65rem)]">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-[0.9rem] leading-[1.75] text-[#52525b] 2xl:text-[15.5px] 2xl:leading-[1.83]">{m.desc}</p>
                  </div>
                </Tilt>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
