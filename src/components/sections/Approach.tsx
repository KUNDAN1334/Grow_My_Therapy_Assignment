import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { ScriptText, TextLink } from "../ui";

// "How we work" — tinted section with two columns of copy and a tall photo on the right.
// The button lines up with the bottom of the photo. On mobile the photo follows the heading.
export function Approach({ approach }: { approach: SiteContent["approach"] }) {
  const { eyebrow, title, copy, button, image } = approach;

  return (
    <section id="meet" className="bg-surface-alt px-[6vw] pt-[86px] pb-[82px] md:min-h-[calc(356px+41.04vw)] md:pt-[calc(33px+5.83vw)] md:pr-0 md:pb-0 md:pl-[8.75vw]">
      {/* grid-rows: the photo spans all rows; the last "1fr" row absorbs its extra height */}
      <div className="grid md:grid-cols-[29vw_29vw_1fr_22.6vw] md:grid-rows-[auto_auto_auto_1fr] md:gap-x-5">
        <p className="eyebrow md:col-span-3">{eyebrow}</p>

        <h2 className="text-h2 mt-[30px] md:col-span-3 md:mt-[calc(4px+8.75vw)]">
          <ScriptText text={title} />
        </h2>

        <div className="relative mt-12 aspect-[343/269] md:col-start-4 md:row-span-4 md:row-start-1 md:mt-0 md:aspect-auto md:h-[calc(288px+29.58vw)]">
          <Image src={image.src} alt={image.alt} style={{ objectPosition: image.position }} fill sizes="(min-width: 768px) 23vw, 88vw" className="object-cover" />
        </div>

        <div className="text-body mt-[46px] md:col-start-1 md:row-start-3 md:mt-[calc(13px+2.7vw)]">
          <p className="eyebrow mb-4">{copy.lead}</p>
          <p>{copy.left}</p>
        </div>

        <p className="text-body mt-4 md:col-start-2 md:row-start-3 md:mt-[calc(13px+2.7vw)]">{copy.right}</p>

        <TextLink link={button} className="mt-10 justify-self-start md:col-start-1 md:row-start-4 md:mt-8 md:self-end" />
      </div>
    </section>
  );
}
