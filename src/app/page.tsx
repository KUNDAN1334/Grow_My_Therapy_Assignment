import type { Metadata } from "next";
import { mayaContent as c, mayaFaqs, mayaOffice } from "@/content/maya";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Audiences } from "@/components/sections/Audiences";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { Expertise } from "@/components/sections/Expertise";
import { Approach } from "@/components/sections/Approach";
import { ImageQuote } from "@/components/sections/ImageQuote";
import { Specialties } from "@/components/sections/Specialties";
import { Office } from "@/components/sections/Office";
import { Faq } from "@/components/sections/Faq";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";

const title = "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD";
const description =
  "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, CA, offering therapy for anxiety, panic, trauma (EMDR), and burnout — in person and online across California.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_US", images: ["/maya/office-lounge.jpg"] },
};

// Structured data so search engines understand this is a local therapy practice.
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dr. Maya Reynolds, PsyD — Clinical Psychologist",
  description,
  image: "/maya/dr-maya-reynolds.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123th Street 45 W",
    addressLocality: "Santa Monica",
    addressRegion: "CA",
    postalCode: "90401",
    addressCountry: "US",
  },
  areaServed: ["Santa Monica, CA", "California"],
  knowsAbout: ["Anxiety", "Panic", "Trauma", "EMDR", "Burnout", "Perfectionism", "CBT", "Mindfulness"],
};

// Part 2: the redesign. Same section components as /clone, plus the new Office and FAQ sections.
export default function HomePage() {
  return (
    <div className="theme-maya bg-page text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
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
        <Office office={mayaOffice} />
        <Faq faq={mayaFaqs} />
        <Booking booking={c.booking} />
      </main>
      <Footer brand={c.brand} footer={c.footer} />
    </div>
  );
}
