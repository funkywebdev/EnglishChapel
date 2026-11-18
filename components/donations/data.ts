export const banks = [
  { bank: "Zenith Bank", title: "Tithes & General Sanctuary", desc: "Designated for covenant tithes, regular offerings, and worship operations.", name: "English Chapel Sanctuary of Peace", acct: "1014829104", dark: false as const },
  { bank: "GTBank", title: "Missions & Church Planting", desc: "Directly sponsors rural Osun evangelists, village crusade sound rigs, and scripture printing.", name: "English Chapel Missions Directorate", acct: "1014829104", dark: false as const },
  { bank: "Access Bank", title: "District Welfare & Compassion", desc: "Exclusively disbursed for widow sustenance, medical prescriptions, and orphan scholarship.", name: "English Chapel Welfare Fund", acct: "1014829104", dark: false as const },
  { bank: "USD / GBP / EUR", title: "Diaspora & Global Partners", desc: "Swift telegraphic transfers for kingdom partners in UK, US, Canada, & Europe.", swift: "FLUTTERWAVE", usd: "507664505", dark: true as const },
] as { bank: string; title: string; desc: string; name?: string; acct?: string; swift?: string; usd?: string; dark: boolean }[];

export const allocations = [
  { pct: 40, bar: "#0f2a57", accent: false, title: "Pastoral & Sanctuary Worship Operations", desc: "Sustaining pastoral care, choir equipment, sanctuary electricity, multimedia live-broadcast infrastructure, and sanctuary grounds.", foot: "Verified Q4 2024 Audit" },
  { pct: 30, bar: "#5c0012", accent: true, title: "Compassionate Welfare & Community Dispensary", desc: "Monthly staple food bags, widows monthly stipend, elderly medical diagnostics, and emergency emergency relief fund.", foot: "1,200+ Beneficiaries Monthly" },
  { pct: 20, bar: "#02143a", accent: false, title: "Missions & Frontier Church Planting", desc: "Funding pioneering missionaries in agrarian Osun villages, university campus fellowship missions, and free Bible tracts.", foot: "4 Stations Under Construction" },
  { pct: 10, bar: "#0f2a57", accent: false, title: "Youth Empowerment & Educational Grants", desc: "Annual WAEC/JAMB sponsorship for brilliant underprivileged youth, coding bootcamps, and vocational artisan toolsets.", foot: "84 Students Supported 2024" },
];

export const testimonials = [
  { quote: "When the district announced the rural church plant in Ibokun, I made a sacrificial commitment of ₦100,000 despite business slowdown. Within three weeks, my export license arrived after two years of delay. God is truly mindful of those who honour Him.", name: "Bro. Foluso Adeleke", role: "Business Partner & Sanctuary Member", img: "/images/pages/av-d1.jpg" },
  { quote: "Living in London, sending my monthly tithes back home to English Chapel was always my spiritual anchor. The transparency of this portal gives me complete peace. I see the medical clinics and the children feeding programs active every single week.", name: "Dr. (Mrs.) Yinka Ojo", role: "UK Diaspora Kingdom Partner", img: "/images/pages/av-d2.jpg" },
  { quote: "We started sowing faithfully into the District Welfare Food Bank as a family. We have not visited the hospital once in 18 months, and God has steadily provided for our household beyond human calculation. Giving is our family’s joy.", name: "Elder & Deaconess Sanusi", role: "Sanctuary Elders Board", img: "/images/pages/av-d3.jpg" },
];

export const faqs = [
  { q: "How will my donation be officially acknowledge ?", a: "Every gift is recorded by the Finance Secretariat. Once your transfer is confirmed, a digital receipt is sent to the email or WhatsApp number on your transfer slip, and an annual giving statement is available on request." },
  { q: "Can I dedicate my gift to a specific ministry ?", a: "Yes. Use the account that matches your purpose — Sanctuary, Missions, or Welfare — and state the ministry in your transfer narration. Gifts are applied exactly as designated." },
  { q: "Can I donate landed property or equipments ?", a: "Yes. Landed property, building materials, and equipment gifts are welcomed. Please contact the District Secretariat so the item can be verified, documented, and formally acknowledged by the Board of Trustees." },
  { q: "How can I set up automatic monthly tithing ?", a: "Set a standing order with your bank using the Tithes & General Sanctuary account above, or send us your preferred date on WhatsApp and the Finance Secretariat will guide you through the setup." },
];
