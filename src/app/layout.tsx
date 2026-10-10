import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Original site uses Muli (now "Mulish"), Beaufort Pro and a hand-lettered script.
// Beaufort Pro and the script are paid fonts, so these are the closest free matches.
// The files (Google Fonts, latin subset) live in src/fonts so the build never
// depends on downloading them.
const mulish = localFont({
  src: "../fonts/mulish-latin.woff2",
  variable: "--font-mulish",
  weight: "300 400", // one variable file covers both weights
});

const newsreader = localFont({
  src: [
    { path: "../fonts/newsreader-latin.woff2", style: "normal" },
    { path: "../fonts/newsreader-italic-latin.woff2", style: "italic" },
  ],
  variable: "--font-newsreader",
  weight: "300",
});

const script = localFont({
  src: "../fonts/mrs-saint-delafield-latin.woff2",
  variable: "--font-script-face",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description: "Homepage clone built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${newsreader.variable} ${script.variable} font-sans font-light antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
