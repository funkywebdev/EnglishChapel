"use client";
import AutoRail from "../AutoRail";
import { CountUp, Item, Reveal, Stagger } from "../motion";

export type Stat = {
  pre?: string;
  to: number;
  post?: string; // navy suffix, e.g. "M" / "-Bit"
  mark?: string; // small maroon suffix, e.g. "+" / "%"
  accent?: boolean; // whole value in maroon
  title: string;
  sub?: string;
};

export default function StatsBand({ stats, divider = false }: { stats: Stat[]; divider?: boolean }) {
  return (
    <section className="bg-[#edf0ff] py-6 sm:py-10 lg:py-[3.4rem]">
      <div className="container-x">
        <Reveal y={40}>
          <AutoRail>
            <Stagger
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto rounded-2xl bg-white p-6 text-center shadow-[0_20px_50px_-30px_rgba(2,20,58,0.3)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:p-8 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-10 lg:py-12 lg:text-left"
              stagger={0.12}
            >
              {stats.map((s, i) => (
                <Item
                  key={s.title}
                  className={`w-[56%] shrink-0 snap-center sm:w-[34%] lg:w-auto ${
                    divider && i > 0 ? "relative lg:before:absolute lg:before:-left-3 lg:before:top-1 lg:before:h-[3.2rem] lg:before:w-[3px] lg:before:bg-maroon" : ""
                  } ${divider ? "lg:pl-12" : "lg:pl-2"}`}
                >
                  <p className={`font-poppins font-semibold leading-none [font-size:clamp(1.7rem,1.2rem+1.4vw,2.7rem)] ${s.accent ? "text-maroon" : "text-navy"}`}>
                    {s.pre}
                    <CountUp to={s.to} />
                    {s.post}
                    {s.mark && (
                      <span className={`${s.accent ? "" : "text-maroon"} ml-1.5 [font-size:0.62em]`}>{s.mark}</span>
                    )}
                  </p>
                  <p className="mt-3 font-poppins text-[0.86rem] text-navy-2 sm:text-[0.98rem]">{s.title}</p>
                  {s.sub && <p className="mt-1 text-[0.74rem] text-[#6b7280] sm:text-[0.82rem]">{s.sub}</p>}
                </Item>
              ))}
            </Stagger>
          </AutoRail>
        </Reveal>
      </div>
    </section>
  );
}
