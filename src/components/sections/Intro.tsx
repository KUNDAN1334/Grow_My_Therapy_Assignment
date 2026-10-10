import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { ScriptText } from "../ui";

// Headline + two columns of copy, with a tall photo bleeding off the right edge.
// On mobile everything stacks and the photo sits between the two paragraphs.
export function Intro({ intro }: { intro: SiteContent["intro"] }) {
  const { title, copy, image } = intro;

  return (
    <section id="about" className="bg-surface px-[6vw] py-[59px] md:pt-[7vw] md:pr-0 md:pb-[calc(18px+8.54vw)] md:pl-[8.75vw]">
      {/* grid-rows: the photo spans both rows; "1fr" lets the copy row absorb its extra height */}
      <div className="grid md:grid-cols-[25vw_25vw_1fr_30vw] md:grid-rows-[auto_1fr] md:gap-x-5">
        <h2 className="text-h2 md:col-span-3 md:max-w-[47.5vw] md:pt-[calc(19px+7.5vw)]">
          <ScriptText text={title} />
        </h2>

        <div className="text-body mt-3 md:col-start-1 md:row-start-2 md:mt-[4.3vw]">
          <p className="eyebrow mb-4">{copy.lead}</p>
          <p>{copy.left}</p>
        </div>

        <div className="relative my-[46px] aspect-[343/234] md:col-start-4 md:row-span-2 md:row-start-1 md:my-0 md:aspect-auto md:h-[calc(227px+27.71vw)]">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 30vw, 88vw" className="object-cover" />
        </div>

        <p className="text-body md:col-start-2 md:row-start-2 md:mt-[4.3vw]">{copy.right}</p>
      </div>
    </section>
  );
}
