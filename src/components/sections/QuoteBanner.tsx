import Image from "next/image";
import type { SiteContent } from "@/content/types";

// Full-width photo with a dark tint and a large quote on top.
export function QuoteBanner({ quote }: { quote: SiteContent["quote"] }) {
  return (
    <section className="relative flex min-h-[28rem] items-center bg-ink md:min-h-[41vw]">
      <Image src={quote.image.src} alt={quote.image.alt} fill sizes="100vw" className="object-cover opacity-60" />
      <h2 className="text-h2 relative max-w-[56rem] px-6 py-20 text-white md:pt-[6vw] md:pl-[8.75vw]">
        {quote.text} <em>{quote.emphasis}</em>
      </h2>
    </section>
  );
}
