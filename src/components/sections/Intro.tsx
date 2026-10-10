import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { ScriptText } from "../ui";
import { TwoColumns } from "./TwoColumns";

// Headline + two columns of copy, with a tall photo bleeding off the right edge.
export function Intro({ intro }: { intro: SiteContent["intro"] }) {
  return (
    <section id="about" className="bg-surface py-16 md:py-[7vw]">
      <div className="grid gap-12 md:grid-cols-[1fr_30.2%] md:gap-[9vw]">
        <div className="px-6 md:pt-[8.8vw] md:pr-0 md:pl-[8.75vw]">
          <h2 className="text-h2 max-w-[43rem]">
            <ScriptText text={intro.title} />
          </h2>
          <div className="mt-8 md:mt-14">
            <TwoColumns copy={intro.copy} />
          </div>
        </div>

        <div className="relative mx-6 aspect-[431/626] md:mx-0">
          <Image src={intro.image.src} alt={intro.image.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
