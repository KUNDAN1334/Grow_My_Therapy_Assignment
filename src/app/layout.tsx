import type { Metadata } from "next";
import { Mrs_Saint_Delafield, Mulish, Newsreader } from "next/font/google";
import "./globals.css";

// Original site uses Muli (now "Mulish"), Beaufort Pro and a hand-lettered script.
// Beaufort Pro and the script are paid fonts, so these are the closest free matches.
const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal", "italic"],
});

const script = Mrs_Saint_Delafield({
  variable: "--font-script-face",
  subsets: ["latin"],
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
