import type { Metadata } from "next";
import { cloneContent as c } from "@/content/clone";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Audiences } from "@/components/sections/Audiences";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { Expertise } from "@/components/sections/Expertise";
import { Approach } from "@/components/sections/Approach";
import { ImageQuote } from "@/components/sections/ImageQuote";
import { Specialties } from "@/components/sections/Specialties";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Clone — Conejo Valley Family Counseling",
  robots: { index: false }, // copy of someone else's site, keep it out of search results
};

// Part 1: pixel-faithful clone of conejovalleycounseling.com/home.
export default function ClonePage() {
  return (
    <div className="theme-original bg-page text-ink">
      <Header brand={c.brand} nav={c.nav} navCta={c.navCta} />
      <main>
        <Hero hero={c.hero} />
        <Intro intro={c.intro} />
        <Audiences audiences={c.audiences} />
        <QuoteBanner quote={c.quote} />
        <Expertise expertise={c.expertise} />
        <Approach approach={c.approach} />
        <ImageQuote imageQuote={c.imageQuote} />
        <Specialties specialties={c.specialties} />
        <Booking booking={c.booking} />
      </main>
      <Footer brand={c.brand} footer={c.footer} />
    </div>
  );
}
