import Image from "next/image";
import type { SiteContent } from "@/content/types";

// Full-width photo under a 54% dark tint, with a large quote in light text.
export function QuoteBanner({ quote }: { quote: SiteContent["quote"] }) {
  return (
    <section className="relative min-h-[557px] px-[6vw] pt-[146px] md:h-[calc(204px+27.08vw)] md:min-h-0 md:px-0 md:pt-[calc(57px+16.9vw)] md:pl-[8.75vw]">
      <Image src={quote.image.src} alt={quote.image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink/54" />
      <h2 className="text-h2 relative max-w-[330px] text-surface md:max-w-[56.6vw]">
        {quote.text} <em>{quote.emphasis}</em>
      </h2>
    </section>
  );
}
