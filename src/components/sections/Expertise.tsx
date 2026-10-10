import type { SiteContent } from "@/content/types";
import { ScriptText } from "../ui";

// Heading on the left, two columns of keywords separated by hairlines.
// On mobile the two columns become one continuous list.
export function Expertise({ expertise }: { expertise: SiteContent["expertise"] }) {
  const half = Math.ceil(expertise.items.length / 2);
  const columns = [expertise.items.slice(0, half), expertise.items.slice(half)];

  return (
    <section className="bg-page px-[6vw] pt-[78px] pb-24 md:grid md:min-h-[calc(258px+32.08vw)] md:grid-cols-[26.15vw_1fr] md:items-start md:pt-[calc(69px+4.375vw)] md:pr-[5vw] md:pb-0 md:pl-[8.75vw]">
      <h2 className="text-h3 md:max-w-[18vw]">
        <ScriptText text={expertise.title} />
      </h2>

      {/* mt is 59px minus the first item's 21px top padding */}
      <div className="mt-[38px] grid md:mt-0 md:grid-cols-2 md:gap-2.5">
        {columns.map((column, i) => (
          <ul key={i}>
            {column.map((item) => (
              <li key={item} className="eyebrow border-b border-line py-[21px] md:py-[1.75vw] md:first:pt-0 md:last:border-0">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
