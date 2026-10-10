import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { ScriptText } from "../ui";

// "Who we help" — three photo cards.
export function Audiences({ audiences }: { audiences: SiteContent["audiences"] }) {
  return (
    <section className="bg-page px-[6vw] pt-[59px] pb-16 md:min-h-[calc(321px+48.5vw)] md:px-[5vw] md:pt-[7vw] md:pb-[5vw]">
      <h2 className="text-h2">
        <ScriptText text={audiences.title} />
      </h2>

      <div className="mt-[52px] grid gap-[46px] md:mt-[3.5vw] md:ml-[11.3vw] md:grid-cols-3 md:gap-5">
        {audiences.items.map((item) => (
          <article key={item.title}>
            <div className="relative aspect-[343/304] md:aspect-auto md:h-[calc(107px+21.46vw)]">
              <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 768px) 25vw, 88vw" className="object-cover" />
            </div>
            <h3 className="text-h4 mt-[46px] md:mt-[calc(23px+1.875vw)]">{item.title}</h3>
            <p className="text-body mt-[30px]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
