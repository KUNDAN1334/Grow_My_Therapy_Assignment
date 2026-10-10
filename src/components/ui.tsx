// Small building blocks shared by every section.

import type { Link } from "@/content/types";

/** Renders a heading string where *word* is shown in the script accent font. */
export function ScriptText({ text }: { text: string }) {
  return text.split(/\*(.+?)\*/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-script text-accent text-[1.45em] leading-none tracking-normal">
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
      className={`inline-block border-b border-current py-2 text-[0.78rem] font-normal uppercase tracking-[0.12em] transition-opacity hover:opacity-60 ${className}`}
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
      className={`inline-block rounded-[50%] border border-current px-5 py-3.5 text-[0.78rem] font-normal uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-page ${className}`}
    >
      {link.label}
    </a>
  );
}

/** Text logo: serif name with a spaced-out tagline underneath. */
export function Logo({ name, tagline, large = false }: { name: string; tagline: string; large?: boolean }) {
  return (
    <a href="#" className="inline-block leading-none">
      <span className={`block font-serif ${large ? "text-[3.4rem]" : "text-[2.2rem] md:text-[2.6rem]"}`}>{name}</span>
      <span
        className={`mt-2 block font-normal uppercase text-accent ${large ? "text-[0.95rem] tracking-[0.42em]" : "text-[0.62rem] tracking-[0.42em] md:text-[0.74rem]"}`}
      >
        {tagline}
      </span>
    </a>
  );
}
