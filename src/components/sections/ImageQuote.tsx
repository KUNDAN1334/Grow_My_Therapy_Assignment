import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { ScriptText } from "../ui";

// Wide photo on the left, short statement aligned to its bottom edge.
export function ImageQuote({ imageQuote }: { imageQuote: SiteContent["imageQuote"] }) {
  return (
    <section className="bg-page py-16 md:grid md:grid-cols-[53.4%_1fr] md:items-end md:gap-[4.5vw] md:py-[6.6vw]">
      <div className="relative aspect-[761/533]">
        <Image src={imageQuote.image.src} alt={imageQuote.image.alt} fill sizes="(min-width: 768px) 53vw, 100vw" className="object-cover" />
      </div>
      <h2 className="text-h2 mt-10 max-w-[33rem] px-6 md:mt-0 md:pr-[5vw] md:pl-0">
        <ScriptText text={imageQuote.title} />
      </h2>
    </section>
  );
}
