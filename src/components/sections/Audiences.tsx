import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { ScriptText } from "../ui";

// "Who we help" — three photo cards.
export function Audiences({ audiences }: { audiences: SiteContent["audiences"] }) {
  return (
    <section className="bg-page px-6 py-16 md:px-[5vw] md:pt-[7vw] md:pb-[5vw]">
      <h2 className="text-h2">
        <ScriptText text={audiences.title} />
      </h2>

      <div className="mt-10 grid gap-12 md:mt-12 md:ml-[11.3vw] md:grid-cols-3 md:gap-5">
        {audiences.items.map((item) => (
          <article key={item.title}>
            <div className="relative aspect-[359/416]">
              <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
            </div>
            <h3 className="text-h4 mt-8 md:mt-12">{item.title}</h3>
            <p className="text-body mt-4 md:mt-7">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
