const I = "/images/landing/";

export const stats = [
  { to: 14, suffix: "+", title: "Active Ministerial Arms.", sub: "Structured for growth & care" },
  { to: 650, suffix: "+", title: "Active Volunteers", sub: "Serving Osogbo District weekly" },
  { to: 28, suffix: "+", title: "Cell Fellowships", sub: "Across Osun State localities" },
  { to: 100, suffix: "%", title: "Christ-Centered Faith", sub: "Holy Spirit inspired mission" },
];

const HALL = "Chapel Fellowship Hall, Main Auditorium";
export const fellowships = [
  { tag: "Men & Fathers", img: I + "men.jpg", sched: "Monthly Breakfast & Vigils", verse: "1 Tim 2:8", title: "Men of Peace Fellowship", desc: "Equipping fathers, brothers, and professionals to lead spiritually grounded families and integrity-driven careers.", when: "1st Saturday of Month • 7:30 AM", where: HALL },
  { tag: "Women & Mothers", img: I + "women.jpg", sched: "1st & 3rd Saturdays", verse: "2 Tim 2:9", title: "Women of Grace & Virtue", desc: "Nurturing praying mothers, virtuous daughters, and visionary women through intercession, family wellness.", when: "1st Saturday of Month • 10:00 AM", where: HALL },
  { tag: "Youths & Professionals", img: I + "youth.jpg", sched: "Sundays -4:00 pm", verse: "1 Tim 2:8", title: "Ignite Youths", desc: "Empowering tertiary students and emerging career professionals across Osun State with bold faith.", when: "1st Sundays • 04:00PM", where: HALL },
  { tag: "Ages 2-12 Years", img: I + "children.jpg", sched: "Sunday Services-09:30AM", verse: "1 Tim 2:8", title: "Children’s Heritage", desc: "A secure, vibrant biblical environment where children experience interactive scripture memorization and music.", when: "Every Sundays • 09:30 AM", where: "Children Auditorium" },
  { tag: "Vocals & Instrumentals", img: I + "choir.jpg", sched: "Thursdays- 05:30PM", verse: "1 Tim 2:8", title: "Sanctuary Choir", desc: "Ministering sacred choral excellence, apostolic worship anthems, and soulful highlife hymns.", when: "Every Thursdays • 05:30 PM", where: HALL },
  { tag: "Missions & Mercy", img: I + "outreach.jpg", sched: "Bi-Weekly Outreaches", verse: "1 Tim 2:8", title: "Evangelism Outreach", desc: "Carrying Christ’s restorative love to rural settlements, correctional centers, campuses, and health centers.", when: "2nd & 3rd Saturdays of the month • 7:30 AM", where: HALL },
];

export const wings = [
  { icon: "hand", tag: "Hospitality", title: "Protocol & Ushers Guild", desc: "Welcoming worshippers with divine warmth, orchestrating sanctuary seating order, supporting visiting dignitaries, and upholding reverent church decorum.", lead: "Head: Deacon O. Adesina", time: "Briefing: Sundays 6:45 AM" },
  { icon: "video", tag: "Digital & Broadcast", title: "Media & Live Broadcast", desc: "Pro sound engineering, 4K multicam livestreaming, sermon graphics, lighting presets, photography, and online digital discipleship across global channels.", lead: "Lead: Bro. K. Balogun", time: "Sound Check: Sat 3:00 PM" },
  { icon: "flame", tag: "Altar Intercession", title: "Intercessory Watchmen", desc: "Keeping the altar fire burning through 24/7 prayer chains, emergency intercession for members, revival for the Osun District, and monthly solemn vigils.", lead: "Lead: Pastor (Mrs.) L. Alabi", time: "Daily Prayer Watches & Fri Vigils" },
  { icon: "book", tag: "Spiritual Foundation", title: "Follow Up & Discipleship", desc: "Welcoming first-time seekers, conducting the Believers’ Foundation School, assigning prayer partners, and integrating new converts into cell fellowships.", lead: "Director: Elder B. Okon", time: "Tuesdays 5:00 PM & Post-Service" },
  { icon: "care", tag: "Compassion Care", title: "Welfare Unit", desc: "Providing dry staple food distribution, medical subsidy assistance, emergency relief, and educational material grants to vulnerable homes across Osogbo and its local environs.", lead: "Head: Sis. T. Ajayi", time: "Distribution: Last Sat of Month" },
  { icon: "decor", tag: "House of God", title: "Decor & Environmental Care", desc: "Curating sacred aesthetics, altar floral designs, seasonal sanctuary theme layouts, and pristine cleanliness ensuring an atmosphere worthy of God’s presence.", lead: "Head: Deacon O. Adesina", time: "Briefing: Sundays 6:45 AM" },
] as const;

export const steps = [
  { n: "01", title: "Discover Your Gifts", desc: "Take our brief Spiritual Gifts Questionnaire or sit down with a pastoral mentor for a 20-minute ministerial discovery conversation to discern your ministerial calling.", foot: "Self-paced & Mentored", icon: "user", tone: "navy" },
  { n: "02", title: "Orientation Track", desc: "Attend our 3-week Believers & Ministry Orientation (held Sundays after second service), exploring sound doctrine, biblical servant leadership, and ministry ethics.", foot: "3 Modules • Sundays 11:30 AM", icon: "shield", tone: "navy" },
  { n: "03", title: "Commissioning", desc: "Receive your department badge, be assigned under an experienced departmental leader, receive your monthly roster, and take part in prayer.", foot: "Warm Induction Ceremony", icon: "heart", tone: "maroon" },
] as const;
