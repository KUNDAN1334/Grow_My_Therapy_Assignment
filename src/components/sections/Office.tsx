import Image from "next/image";
import type { OfficeContent } from "@/content/types";
import { OvalButton, ScriptText } from "../ui";

// Part 3 — new section, not in the original template.
// Built from the same pieces as the rest of the page (eyebrow, script heading,
// hairline list, oval button) so it feels native to the design.
// Desktop: text on the left, a three-photo collage on the right.
export function Office({ office }: { office: OfficeContent }) {
  const [main, second, third] = office.images;

  return (
    <section
      id="office"
      className="bg-surface-alt px-[6vw] py-[78px] md:grid md:grid-cols-[34vw_1fr] md:gap-[5vw] md:py-[7vw] md:pr-[5vw] md:pl-[8.75vw]"
    >
      <div>
        <p className="eyebrow">{office.eyebrow}</p>
        <h2 className="text-h2 mt-7 md:mt-[2.5vw]">
          <ScriptText text={office.title} />
        </h2>
        <p className="text-body mt-6">{office.text}</p>

        <dl className="mt-8 border-t border-ink/15">
          {office.details.map((detail) => (
            <div key={detail.title} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/15 py-4">
              <dt className="eyebrow">{detail.title}</dt>
              <dd className="text-body">{detail.text}</dd>
            </div>
          ))}
        </dl>

        <OvalButton link={office.button} className="mt-8" />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:mt-0 md:h-[40vw] md:grid-cols-[1.6fr_1fr] md:grid-rows-2 md:gap-5">
        <div className="relative col-span-2 aspect-[4/3] md:col-span-1 md:row-span-2 md:aspect-auto">
          <Image src={main.src} alt={main.alt} fill sizes="(min-width: 768px) 32vw, 88vw" className="object-cover" />
        </div>
        <div className="relative aspect-square md:aspect-auto">
          <Image src={second.src} alt={second.alt} fill sizes="(min-width: 768px) 20vw, 44vw" className="object-cover" />
        </div>
        <div className="relative aspect-square md:aspect-auto">
          <Image src={third.src} alt={third.alt} fill sizes="(min-width: 768px) 20vw, 44vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
