import type { TwoColumnCopy } from "@/content/types";

// Body copy used by the Intro and Approach sections:
// an uppercase lead line + paragraph on the left, a second paragraph on the right.
export function TwoColumns({ copy }: { copy: TwoColumnCopy }) {
  return (
    <div className="text-body grid gap-6 md:grid-cols-2 md:gap-5">
      <div>
        <p className="eyebrow mb-4">{copy.lead}</p>
        <p>{copy.left}</p>
      </div>
      <p>{copy.right}</p>
    </div>
  );
}
