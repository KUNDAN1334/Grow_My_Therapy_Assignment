// Small building blocks shared by every section.

import type { Link } from "@/content/types";

/**
 * Renders a heading string where *word* is shown in the script accent font.
 * line-height 0 stops the script's tall loops from pushing the heading's lines apart.
 */
export function ScriptText({ text }: { text: string }) {
  return text.split(/\*(.+?)\*/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="mx-[0.1em] font-script text-accent text-[1.1em] leading-[0] tracking-normal">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/** Uppercase text link with a thin underline ("BOOK AN APPOINTMENT"). */
export function TextLink({ link, className = "" }: { link: Link; className?: string }) {
  return (
    <a
      href={link.href}
      className={`text-button inline-block border-b border-current py-2 font-normal uppercase tracking-[0.12em] transition-opacity hover:opacity-60 ${className}`}
    >
      {link.label}
    </a>
  );
}

/** Uppercase link inside an oval outline ("CONTACT", "BOOK NOW"). */
export function OvalButton({ link, className = "" }: { link: Link; className?: string }) {
  return (
    <a
      href={link.href}
      className={`text-button inline-block rounded-[50%] border border-current px-5 py-3.5 font-normal uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-page ${className}`}
    >
      {link.label}
    </a>
  );
}

/**
 * Text logo: serif name with a widely spaced tagline underneath.
 * "header" stays a fixed size; "footer" grows with the screen, like the original.
 */
const logoSizes = {
  header: { name: "text-[2.35rem] md:text-[2.5rem]", tagline: "text-[0.64rem] md:text-[0.69rem]" },
  footer: { name: "text-[3.15rem] md:text-[3.98vw]", tagline: "text-[0.86rem] md:text-[1.09vw]" },
};

export function Logo({ name, tagline, size }: { name: string; tagline: string; size: keyof typeof logoSizes }) {
  return (
    <a href="#" className="inline-block leading-none">
      <span className={`block font-serif font-extralight ${logoSizes[size].name}`}>{name}</span>
      <span className={`mt-[0.4em] block font-bold uppercase tracking-[0.6em] text-accent ${logoSizes[size].tagline}`}>
        {tagline}
      </span>
    </a>
  );
}
