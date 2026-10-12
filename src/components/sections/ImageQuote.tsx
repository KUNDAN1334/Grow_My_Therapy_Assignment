import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { ScriptText } from "../ui";

// Wide photo on the left, short statement aligned to its bottom edge.
export function ImageQuote({ imageQuote }: { imageQuote: SiteContent["imageQuote"] }) {
  return (
    <section className="bg-page py-14 md:grid md:grid-cols-[53vw_1fr] md:items-end md:gap-[4.4vw] md:py-[6.6vw]">
      <div className="relative ml-[6vw] aspect-[367/304] md:ml-0 md:aspect-auto md:h-[calc(143px+27.08vw)]">
        <Image src={imageQuote.image.src} alt={imageQuote.image.alt} fill sizes="(min-width: 768px) 53vw, 94vw" className="object-cover" />
      </div>
      <h2 className="text-h2 mt-3 px-[6vw] md:mt-0 md:max-w-[35.4vw] md:px-0">
        <ScriptText text={imageQuote.title} />
      </h2>
    </section>
  );
}
