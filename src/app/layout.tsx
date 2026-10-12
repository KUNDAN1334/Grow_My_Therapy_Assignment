import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Original site uses Muli (now "Mulish"), Beaufort Pro Light and "Printed Moments".
// The last two are paid fonts, so these are the closest free matches, picked by
// rendering ~40 Google Fonts next to the original:
// - Taviraj ExtraLight: same thin, low-contrast strokes and x-height as Beaufort Pro
// - WindSong: thin, slanted, single-line signature script like Printed Moments
// The files (Google Fonts, latin subset) live in src/fonts so the build never
// depends on downloading them.
const mulish = localFont({
  src: "../fonts/mulish-latin.woff2",
  variable: "--font-mulish",
  weight: "200 1000", // variable font, one file for every weight
});

const heading = localFont({
  src: [
    { path: "../fonts/taviraj-extralight-latin.woff2", style: "normal" },
    { path: "../fonts/taviraj-extralight-italic-latin.woff2", style: "italic" },
  ],
  variable: "--font-heading-face",
  weight: "200",
});

const script = localFont({
  src: "../fonts/windsong-latin.woff2",
  variable: "--font-script-face",
  weight: "400",
});

// Each page sets its own title and description; this is only the fallback.
export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica, CA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${heading.variable} ${script.variable} font-sans font-light antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
