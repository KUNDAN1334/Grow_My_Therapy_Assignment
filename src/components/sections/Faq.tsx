import type { FaqContent } from "@/content/types";
import { ScriptText } from "../ui";

// Heading on the left, questions on the right (same layout as "Areas of focus").
// <details> gives an accessible accordion without any JavaScript.
export function Faq({ faq }: { faq: FaqContent }) {
  return (
    <section
      id="faq"
      className="bg-page px-[6vw] py-[78px] md:grid md:grid-cols-[29.85vw_1fr] md:items-start md:py-[7vw] md:pr-[5vw] md:pl-[8.75vw]"
    >
      <h2 className="text-h3 md:max-w-[22vw]">
        <ScriptText text={faq.title} />
      </h2>

      <div className="mt-10 border-t border-line md:mt-0">
        {faq.items.map((item) => (
          <details key={item.question} className="group border-b border-line py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="text-h4">{item.question}</h3>
              <span aria-hidden className="text-2xl text-accent transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="text-body mt-4 max-w-[46rem]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
