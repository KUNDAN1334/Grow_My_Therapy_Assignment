# Dr. Maya Reynolds — Therapy Website (Grow My Therapy assignment)

Built with **Next.js 15 (App Router) + Tailwind CSS v4**.

| Route | What it is |
|---|---|
| `/` | Redesign for Dr. Maya Reynolds, PsyD (Santa Monica, CA) |
| `/clone` | Part 1 — clone of [conejovalleycounseling.com/home](https://www.conejovalleycounseling.com/home) |

Git tag `v1-clone` marks the point where only the clone existed.

## How it's organised

```
src/
  app/
    page.tsx          → redesign (/)
    clone/page.tsx    → clone (/clone)
    globals.css       → themes (colours) + type scale
  content/
    types.ts          → the shape of all homepage content
    clone.ts          → original site's text and images
    maya.ts           → Dr. Maya Reynolds' copy, office details and FAQs
  components/
    Header.tsx        → nav + mobile menu
    ui.tsx            → small shared pieces (links, buttons, logo, script text)
    sections/         → one file per homepage section
```

**One layout, many skins.** Every section component takes its text and images as props,
and every colour comes from a theme class in `globals.css` (`.theme-original`, …).
The clone and the redesign render the *same* components — only the content file
and the theme class change.

In headings, a word wrapped in `*asterisks*` is rendered in the script accent font,
e.g. `"Who we *help*"`.

## Redesign (Part 2 & 3)

**Theme — "Linen, Sage & Clay"**, taken from Dr. Reynolds' own office photos
(warm linen and wood, green plants, red brick):

| Role | Colour | Used for |
|---|---|---|
| Primary | Evergreen `#2d3a32` | text, dark photo tint |
| Secondary | Linen `#f2ece3` · Sage mist `#dfe3d6` | section backgrounds |
| Accent | Clay `#9a5a41` | script words, logo tagline, bottom bar |

Contrast: evergreen on linen 10.1:1, white on clay 5.4:1 (both pass WCAG AA).

**Copy** is written only from her profile (anxiety, panic, trauma, burnout,
perfectionism; CBT, EMDR, mindfulness, body-oriented work; adults; Santa Monica
office + telehealth across California). Fees, insurance, phone and email are not
in the profile, so they are left out rather than invented. The H1, title tag,
meta description and JSON-LD (`MedicalBusiness` with a Santa Monica address)
target "anxiety / trauma therapy Santa Monica".

**New sections**
- *Our Office* (Part 3) — her two office photos plus a detail crop of the
  armchair by the window, the address, and in-person / telehealth details.
- *FAQ* — the assignment asks for FAQ copy and the original homepage has none,
  so it is added as a small accordion (`<details>`, no JavaScript).

**Images** — Dr. Reynolds' portrait and office photos come from her profile.
The others are from Unsplash, chosen for the same warm, natural-light, coastal
Santa Monica feel.

## Fonts

The original uses Muli, Beaufort Pro Light and a paid script font (Printed Moments).
Muli is on Google Fonts as **Mulish**. For the two paid fonts I rendered ~40 Google
Fonts next to the original at the same size and picked the closest:

- **Taviraj ExtraLight** for headings: the same thin, low-contrast strokes and the
  same x-height as Beaufort Pro. Letter-spacing is tightened slightly so every
  heading breaks onto exactly the same lines as the original (checked at 390,
  1440 and 1920px).
- **WindSong** for the script accent words: a thin, slanted, single-line signature
  script like Printed Moments.

Every other text property (size, weight, line-height, letter-spacing, colour) was
compared element by element with the original and matches.

The font files live in `src/fonts` and load with `next/font/local`, so the build
never has to download anything.

## Measured, not eyeballed

Every size and gap was measured on the original at 390px, 1440px and 1920px wide.
The original's text and photos keep growing on wide screens, so desktop values are
written as `a + b·vw` (for example `calc(219px+25.6vw)`), which matches the
original at both 1440px and 1920px and scales smoothly in between.

## Run locally

```bash
npm install
npm run dev
```
