import type { SiteContent } from "@/content/types";
import { ScriptText } from "../ui";

// Heading on the left, two columns of keywords separated by hairlines.
export function Expertise({ expertise }: { expertise: SiteContent["expertise"] }) {
  const half = Math.ceil(expertise.items.length / 2);
  const columns = [expertise.items.slice(0, half), expertise.items.slice(half)];

  return (
    <section className="bg-page px-6 py-16 md:grid md:grid-cols-[30.7%_1fr] md:pt-[9vw] md:pr-[5vw] md:pb-[11vw] md:pl-[8.75vw]">
      <h2 className="text-h3 max-w-[20rem]">
        <ScriptText text={expertise.title} />
      </h2>

      <div className="mt-4 grid md:mt-0 md:grid-cols-2 md:gap-2.5">
        {columns.map((column, i) => (
          <ul key={i}>
            {column.map((item) => (
              <li key={item} className="eyebrow border-b border-line py-6 md:first:pt-0 md:last:border-0">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
