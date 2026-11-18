/** Shared classes for card groups that become a swipeable row on phones/tablets and a grid from `lg`. */
const base =
  "-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:gap-[31px] lg:overflow-visible lg:px-0 lg:pb-0";
export const rail2 = `${base} lg:grid-cols-2`;
export const rail3 = `${base} lg:grid-cols-3`;
export const rail4 = `${base} lg:grid-cols-4`;
export const railCard = "w-[84%] shrink-0 snap-center text-center sm:w-[56%] md:w-[44%] lg:w-auto lg:text-left";
