import type { SiteContent } from "@/content/types";
import { ScriptText, TextLink } from "../ui";

// Heading on the left, a 2×2 grid of specialty cards on the right.
// Cards fill the grid column by column (like the original), so on mobile they
// stack in the same order as the content file.
export function Specialties({ specialties }: { specialties: SiteContent["specialties"] }) {
  return (
    <section
      id="specialties"
      className="bg-page px-[6vw] py-16 md:grid md:min-h-[calc(261px+48.54vw)] md:grid-cols-[29.85vw_1fr] md:items-start md:pt-[6.7vw] md:pr-[5vw] md:pb-0 md:pl-[8.75vw]"
    >
      <h2 className="text-h3 md:max-w-[22vw]">
        <ScriptText text={specialties.title} />
      </h2>

      <div className="mt-10 grid gap-10 md:mt-[18px] md:grid-flow-col md:grid-cols-2 md:grid-rows-[calc(122px+21.25vw)_auto] md:gap-x-[4.4vw] md:gap-y-0">
        {specialties.items.map((item) => (
          <article key={item.title}>
            <h3 className="text-h4">{item.title}</h3>
            <p className="text-body mt-[30px]">{item.text}</p>
            <TextLink link={item.link} className="mt-6" />
          </article>
        ))}
      </div>
    </section>
  );
}
