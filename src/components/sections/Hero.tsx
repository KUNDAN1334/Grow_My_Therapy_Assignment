import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { ScriptText, TextLink } from "../ui";

// Desktop: big photo on the left, text in the middle, a thin photo strip on the right.
// Mobile: text first, then the two photos side by side.
export function Hero({ hero }: { hero: SiteContent["hero"] }) {
  return (
    <section className="bg-surface pt-6 pb-16 lg:pt-10 lg:pb-20">
      <div className="grid grid-cols-[70%_1fr_17%] gap-y-12 lg:grid-cols-[34.5%_1fr_8%]">
        <div className="col-span-3 flex flex-col justify-between gap-8 px-6 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:pr-[4.5vw] lg:pl-[8.3vw]">
          <p className="eyebrow max-w-[26rem] text-[0.8rem] lg:text-[0.9375rem]">{hero.eyebrow}</p>
          <div>
            <h1 className="text-display">
              <ScriptText text={hero.title} />
            </h1>
            <p className="text-body mt-6 max-w-[40rem] lg:mt-8">{hero.text}</p>
            <TextLink link={hero.button} className="mt-6" />
          </div>
        </div>

        <div className="relative col-start-1 row-start-2 aspect-[492/588] lg:row-start-1">
          <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="(min-width: 1024px) 35vw, 70vw" className="object-cover" />
        </div>

        <div className="relative col-start-3 row-start-2 aspect-[115/393] self-end lg:row-start-1">
          <Image src={hero.sideImage.src} alt={hero.sideImage.alt} fill sizes="(min-width: 1024px) 8vw, 17vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
