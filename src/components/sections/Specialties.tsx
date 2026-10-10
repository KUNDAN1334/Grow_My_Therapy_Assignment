import type { SiteContent } from "@/content/types";
import { ScriptText, TextLink } from "../ui";

// Heading on the left, a 2-column grid of specialty cards on the right.
export function Specialties({ specialties }: { specialties: SiteContent["specialties"] }) {
  return (
    <section
      id="specialties"
      className="bg-page px-6 py-16 md:grid md:grid-cols-[35%_1fr] md:pt-[7vw] md:pr-[5vw] md:pb-[9vw] md:pl-[8.75vw]"
    >
      <h2 className="text-h3 max-w-[23rem]">
        <ScriptText text={specialties.title} />
      </h2>

      <div className="mt-10 grid gap-14 md:mt-[1.2vw] md:grid-cols-2 md:gap-x-[4.5vw] md:gap-y-[8vw]">
        {specialties.items.map((item) => (
          <article key={item.title}>
            <h3 className="text-h4">{item.title}</h3>
            <p className="text-body mt-5 md:mt-7">{item.text}</p>
            <TextLink link={item.link} className="mt-5" />
          </article>
        ))}
      </div>
    </section>
  );
}
