import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { ScriptText, TextLink } from "../ui";
import { TwoColumns } from "./TwoColumns";

// "How we work" — tinted section with two columns of copy and a tall photo on the right.
export function Approach({ approach }: { approach: SiteContent["approach"] }) {
  return (
    <section className="bg-surface-alt py-16 md:py-[8vw]">
      <div className="grid gap-12 md:grid-cols-[1fr_22.7%] md:gap-[5.2vw]">
        <div className="px-6 md:pr-0 md:pl-[8.75vw]">
          <p className="eyebrow">{approach.eyebrow}</p>
          <h2 className="text-h2 mt-8 md:mt-[7vw]">
            <ScriptText text={approach.title} />
          </h2>
          <div className="mt-8 md:mt-12 md:max-w-[52rem]">
            <TwoColumns copy={approach.copy} />
          </div>
          <TextLink link={approach.button} className="mt-10" />
        </div>

        <div className="relative mx-6 aspect-[323/714] max-md:max-h-[34rem] max-md:aspect-[4/5] md:mx-0">
          <Image src={approach.image.src} alt={approach.image.alt} fill sizes="(min-width: 768px) 23vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
