const I = "/images/landing/";

export const ministries = [
  { tag: "Men", title: "Men of Peace Fellowship", img: I + "men.jpg", desc: "Equipping fathers, brothers, and professionals to lead spiritually-filled families and integrity-driven careers." },
  { tag: "Women", title: "Women of Grace & Virtue", img: I + "women.jpg", desc: "A nurturing sisterhood committed to fervent prayer, family spiritual wellness, and impactful community living." },
  { tag: "Youths", title: "Youths & Young Adults Ignite", img: I + "youth.jpg", desc: "Empowering the next generation with passionate worship, intellectual outreaches and creative discipleship." },
  { tag: "Children", title: "Children’s Heritage Ministry", img: I + "children.jpg", desc: "A safe, joyful environment where kids learn scripture, cultivate godly character." },
  { tag: "Choir", title: "Sanctuary Praise Choir", img: I + "choir.jpg", desc: "Leading the sanctuary in anointed classical hymns and contemporary worship." },
  { tag: "Missions", title: "Community Outreach", img: I + "outreach.jpg", desc: "Carrying the gospel beyond chapel walls through medical outreaches and practical missions." },
];

export const sermons = [
  { series: "Faith & Family Series", title: "Building Altars in the Home", by: "Pastor E. A. Adeboye", mins: 44, date: "Oct 19", verse: "Genesis 12:1-8", img: I + "sermon-1.jpg" },
  { series: "Midweek Exhortation", title: "The Power of Secret Place Prayer", by: "District Ministerial Team", mins: 38, date: "Oct 15", verse: "Matthew 6:6", img: I + "sermon-2.jpg" },
  { series: "Revival Hour", title: "Standing Firm in Unshakable Truth", by: "Guest Minister", mins: 52, date: "Oct 08", verse: "Ephesians 6:10-18", img: I + "sermon-3.jpg" },
];

export const events = [
  { month: "Nov", day: "14", tag: "Conference", title: "Annual Peace & Revival", desc: "A 3-day spiritual gathering with anointed guest speakers, profound prayer retreats, and district-wide spiritual impartation.", when: "Thursday - Saturday · 5:00 PM Daily", where: "Main Auditorium, District HQ, Osogbo", cta: "Register / Details" },
  { month: "Dec", day: "05", tag: "Vigil", title: "Night of Breakthrough & Praise", desc: "An all-night praise explosion and worship prayer vigil ushering in the month of December with victorious breakthroughs.", when: "First Friday · 10:00 PM - 4:30 AM", where: "Sanctuary of Peace Grounds, Osogbo", cta: "Add to Calendar" },
  { month: "Dec", day: "20", tag: "Community", title: "Community Health & Welfare", desc: "Free diagnostic medical consultations, eye screening, health counseling, and essential welfare supplies for local families.", when: "Saturday Morning · 9:00 AM - 2:00 PM", where: "Chapel Outreach Pavilion, Osogbo", cta: "Volunteer / Sponsor" },
];

export const news = [
  { tag: "Building Project", date: "Oct 24, 2026", title: "Sanctuary Expansion", img: I + "news-1.jpg", desc: "Phase 2 construction of the 1,500-seat multi-purpose youth annex and education center advances steadily with widespread member giving." },
  { tag: "NextGen", date: "Oct 29, 2026", title: "Youth Leadership Summit", img: I + "news-2.jpg", desc: "Equipping 250 emerging university graduates and young professionals with Christian ethics and ministry skills." },
  { tag: "Welfare & Mercy", date: "Oct 31, 2026", title: "Food Drive For Families", img: I + "news-3.jpg", desc: "Through collective spiritual generosity, our benevolence department shared staples to low-income households across Osogbo townships." },
];

export const impact = [
  { icon: "hub", title: "Sanctuary Cooperative & Enterprise Hub", desc: "Micro-credit facilities, digital skill workshops, and mentoring circles designed to elevate small business owners and artisans of faith.", mail: "coop@englishchapelosogbo.org" },
  { icon: "agro", title: "Peace Agricultural & Food Initiative", desc: "Cooperative grain storage, cassava and poultry farming mentorship assisting rural community graduates and ensuring steady agricultural livelihood.", mail: "agro@englishchapelosogbo.org" },
  { icon: "edu", title: "Educational Scholarship & Literacy Support", desc: "Tuition grants for brilliant underprivileged students and community after-school remedial tutoring programs serving Osogbo townships.", mail: "education@englishchapelosogbo.org" },
] as const;

export const stories = [
  { q: "When my family relocated to Osogbo three years ago, we were searching for a sanctuary with sound doctrine and warm hearts. The moment we stepped into English Chapel, we found genuine peace and loving brotherhood.", name: "Engr. Adeleke Adetunji", role: "Member since 2021 · Men’s Fellowship", ini: "EA", tone: "navy" },
  { q: "Serving in the Sanctuary Choir transformed my theology. Ministry isn’t just performance; it is genuine consecrated devotion that brings healing to aching hearts.", name: "Sister Bukola Oladipo", role: "Sanctuary Choir · 6 years", ini: "BO", tone: "maroon" },
  { q: "The youth mentorship sessions gave me the confidence to excel both in my university studies and spiritual walk. My life has a clear, God-centered purpose through this holy sanctuary.", name: "Tobi Ogunmola", role: "Youth Ignite President", ini: "TO", tone: "navy" },
] as const;

export const faqs = [
  { id: "location", q: "1. Where is English Chapel Sanctuary of Peace located?", a: "We are at the Osogbo District Headquarters, Ogo-Oluwa, Osogbo, Osun State, Nigeria. Tap “Directions” in the Service Times card at the top of this page to open a map." },
  { id: "times", q: "2. What days and times are church services held?", a: "Sunday Worship Services hold at 8:00 AM (1st Service) and 10:30 AM (2nd Service). Our Wednesday Mid-Week Service, with Bible Study & Prayer, begins at 5:30 PM." },
  { id: "first", q: "3. What should I expect when visiting for the first time?", a: "A warm welcome, reverent Spirit-filled worship and a Word-centred message. Come as you are — our guest team will help you find a seat and connect your family to the right ministries. You can also let us know you are coming through the Plan Your Visit form." },
  { id: "join", q: "4. How can I join a ministry or small group?", a: "Browse the ministries above and tap “Get Connected” on the one that fits your season of life, or speak with any usher or minister after service and we will introduce you to the leaders." },
  { id: "online", q: "5. Can I watch church services online?", a: "Yes. Use the “Watch Live Stream” button in the Grow in the Word section during services, and explore recent teachings under “Explore All Sermons”." },
  { id: "prayer", q: "6. How can I submit a prayer request?", a: "Use the Prayer Requests link in the footer, or share your need with our prayer team after any service. Every request is received prayerfully." },
  { id: "donate", q: "7. How can I make a donation?", a: "Please contact the District Secretariat or see Giving Protocols in the footer for the official giving channels, so that your seed reaches the right account safely." },
  { id: "contact", q: "8. How can I contact the church office?", a: "Visit the District Secretariat at the sanctuary during service hours, or send us a note through the Plan Your Visit form and a member of our team will respond." },
];
