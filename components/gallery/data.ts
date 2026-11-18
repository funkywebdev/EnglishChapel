export const IMG = "/images/landing/ch1.jpeg";

export type Tile = {
  tag: string;
  title: string;
  meta: { icon: "pin" | "clock" | "cal" | "users" | "church"; text: string }[];
  /** desktop placement (12-col grid, rows are half-tiles) */
  pos: string;
  tall?: boolean;
};

export const tiles: Tile[] = [
  {
    tag: "Worship & Services",
    title: "Sanctuary Choir in Apostolic Anthems & Solemn Hymns",
    meta: [
      { icon: "pin", text: "Main Sanctuary" },
      { icon: "clock", text: "Sunday Liturgy" },
    ],
    pos: "lg:col-span-8 lg:row-span-2",
  },
  {
    tag: "Worship & Vigil",
    title: "Hand Lifted in Reverend & Intercession",
    meta: [
      { icon: "pin", text: "Sanctuary Nave" },
      { icon: "cal", text: "Monthly Night of Fire" },
    ],
    pos: "lg:col-span-4 lg:row-span-4",
    tall: true,
  },
  {
    tag: "Youth & NextGen",
    title: "Children’s Heritage Day Celebration",
    meta: [{ icon: "pin", text: "Children Auditorium" }],
    pos: "lg:col-span-4 lg:row-span-2 lg:col-start-1",
  },
  {
    tag: "Community & Welfare",
    title: "Medical Outreach & Free Dispensary",
    meta: [{ icon: "pin", text: "Rural Osun Districts" }],
    pos: "lg:col-span-4 lg:row-span-2",
  },
  {
    tag: "Youth & NextGen",
    title: "Ignite Youth Summit : Tech & Kingdom Excellence",
    meta: [
      { icon: "pin", text: "District Youth Complex" },
      { icon: "users", text: "450+ Attendees" },
    ],
    pos: "lg:col-span-8 lg:row-span-2",
  },
  {
    tag: "Youth & NextGen",
    title: "Pastoral Dedications",
    meta: [{ icon: "pin", text: "Rev. & Pastor (Mrs.) Adeyemi" }],
    pos: "lg:col-span-4 lg:row-span-2",
  },
  {
    tag: "Compassion Wing",
    title: "Food Bank Distribution",
    meta: [{ icon: "pin", text: "Station Road Outreach Center" }],
    pos: "lg:col-span-4 lg:row-span-2",
  },
  {
    tag: "Architecture & Altar",
    title: "The Altar of the Lord",
    meta: [{ icon: "church", text: "Sanctuary Nave" }],
    pos: "lg:col-span-4 lg:row-span-4",
    tall: true,
  },
  {
    tag: "Holy Ordinances",
    title: "Water Baptism by Immersion",
    meta: [],
    pos: "lg:col-span-4 lg:row-span-2",
  },
];

/** Revealed by "Load More Photos" — three at a time. */
export const moreTiles: Tile[] = [
  {
    tag: "Worship & Services",
    title: "Praise Break at the Sunday Liturgy",
    meta: [{ icon: "pin", text: "Main Sanctuary" }],
    pos: "lg:col-span-4 lg:row-span-2",
  },
  {
    tag: "Compassion Wing",
    title: "Widows’ Monthly Stipend Day",
    meta: [{ icon: "pin", text: "Welfare Office" }],
    pos: "lg:col-span-4 lg:row-span-2",
  },
  {
    tag: "Holy Ordinances",
    title: "Communion of the Saints",
    meta: [{ icon: "pin", text: "Sanctuary Nave" }],
    pos: "lg:col-span-4 lg:row-span-2",
  },
];

export const videos = [
  {
    img: "/images/landing/ch1.jpeg",
    dur: "58:24",
    tag: "Full Sermon Replay",
    tagClass: "bg-[#e9edfb] text-navy-2",
    views: "2.4k views",
    title: "Walking in Divine Peace & Victory",
    desc: "Rev. E. A. Adeyemi expounds the apostolic promises of inner stillness amidst societal…",
    foot: "Delivered 3 Days Ago",
  },
  {
    img: "/images/landing/ch3.jpeg",
    dur: "14:10",
    tag: "Music Ministry",
    tagClass: "bg-[#e9edfb] text-navy-2",
    views: "4.1k views",
    title: "Sanctuary Praise: Choral Anthem",
    desc: "The English Chapel Mass Choir and Live Orchestra blend solemn English classical…",
    foot: "Sanctuary Orchestra",
  },
  {
    img: "/images/landing/ch11.jpeg",
    dur: "14:10",
    tag: "District Docu-Series",
    tagClass: "bg-[#fde4e4] text-maroon",
    views: "1.8k views",
    title: "2024 Welfare Outreach",
    desc: "Witness how your tithes and sacrificial seeds funded direct scholarships, maternal care…",
    foot: "District Media Ministry",
  },
];

export function share(title: string) {
  try {
    if (navigator.share)
      return navigator.share({ title, url: window.location.href });
    return navigator.clipboard?.writeText(window.location.href);
  } catch {
    /* ignore */
  }
}
