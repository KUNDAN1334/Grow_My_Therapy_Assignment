# Dr. Maya Reynolds — Therapy Website (Grow My Therapy assignment)

Built with **Next.js 15 (App Router) + Tailwind CSS v4**.

| Route | What it is |
|---|---|
| `/` | Redesign for Dr. Maya Reynolds, PsyD (Santa Monica, CA) — *in progress* |
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

## Fonts

The original uses Muli, Beaufort Pro and a paid script font. Muli is on Google Fonts as
**Mulish**; for the other two I used the closest free matches (**Newsreader** Light and
**Mrs Saint Delafield**). The font files are kept in `src/fonts` and loaded with
`next/font/local`, so the build never has to download anything.

## Run locally

```bash
npm install
npm run dev
```
