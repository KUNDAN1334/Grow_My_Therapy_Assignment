import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { ScriptText, TextLink } from "../ui";

// Desktop: big photo on the left, text in the middle, a thin photo strip on the right.
// Mobile: text first, then the two photos side by side.
//
// Like the original, photo heights grow with the screen at their own rate, so they
// are written as "a + b·vw" (measured on the original at 1440px and 1920px wide).
export function Hero({ hero }: { hero: SiteContent["hero"] }) {
  return (
    <section className="bg-surface pt-14 pb-9 lg:pt-[calc(12px+1.88vw)] lg:pb-[calc(24px+3.75vw)]">
      <div className="grid grid-cols-[71.3%_1fr_14.6%] lg:grid-cols-[34.5%_1fr_8.2%]">
        <div className="col-span-3 flex flex-col justify-between px-[6vw] lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:pt-[0.7vw] lg:pr-[4.4vw] lg:pb-[1.4vw] lg:pl-[8.1vw]">
          <p className="eyebrow max-w-[24rem]">{hero.eyebrow}</p>
          <div className="mt-8 lg:mt-0">
            <h1 className="text-display">
              <ScriptText text={hero.title} />
            </h1>
            <p className="text-body mt-[30px]">{hero.text}</p>
            {/* on wide screens the original leaves more room above the button */}
            <TextLink link={hero.button} className="mt-6 lg:mt-[max(28px,calc(6.67vw-68px))]" />
          </div>
        </div>

        <div className="relative col-start-1 row-start-2 mt-14 aspect-[278/304] lg:row-start-1 lg:mt-0 lg:aspect-auto lg:h-[calc(219px+25.6vw)]">
          <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="(min-width: 1024px) 35vw, 72vw" className="object-cover" />
        </div>

        <div className="relative col-start-3 row-start-2 aspect-[57/199] self-end lg:row-start-1 lg:aspect-auto lg:h-[calc(159px+16.25vw)]">
          <Image
            src={hero.sideImage.src}
            alt={hero.sideImage.alt}
            fill
            sizes="(min-width: 1024px) 8vw, 15vw"
            className="object-cover object-[87%_56%]"
          />
        </div>
      </div>
    </section>
  );
}
