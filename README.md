# English Chapel – Sanctuary of Peace

Next.js 16 + Tailwind CSS 4 + Framer Motion.

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Pages
- `/`       Landing page (`app/page.tsx` → `components/landing/*`)
- `/about`  About Us page (`app/about/page.tsx` → `components/About.tsx`, `Foundation`, `Leadership`, `Beliefs`, `Visit`)

Nav links: Home `/`, About Us `/about`, Ministries / Gallery / Business / Donations / Contact Us scroll to sections on `/`
(`#ministries`, `#gallery`, `#business`, `#donations` opens the donation FAQ, `#contact` footer).

## Landing-page photos
All landing images live in `public/images/landing/`. Files without a real photo yet are generated placeholders —
replace them with your own photos using the **same file names** (no code change needed):

| File | Where it shows | Suggested size |
|---|---|---|
| `hero.jpg` | Hero background (church exterior) | 1920×1100 |
| `worship.jpg` | "You're Welcome Here" photo | 900×1100 |
| `men.jpg`, `youth.jpg`, `children.jpg`, `choir.jpg` | Ministry cards | 800×520 |
| `women.jpg`, `outreach.jpg` | Ministry cards (real photos already) | 800×520 |
| `sermon-featured.jpg`, `sermon-1.jpg` | Sermons (real photos already) | 1600×820 / 500×340 |
| `sermon-2.jpg`, `sermon-3.jpg` | Sermon list thumbnails | 500×340 |
| `news-1.jpg`, `news-2.jpg`, `news-3.jpg` | Gazette cards | 800×520 |

Copy for ministries, sermons, events, news, impact, stories and FAQ is in `components/landing/data.ts`.
Shared animation helpers (Reveal, Stagger, SplitWords, CountUp, ParallaxImage, Tilt) are in `components/motion.tsx`.
