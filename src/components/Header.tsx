"use client";

import { useState } from "react";
import type { SiteContent } from "@/content/types";
import { Logo, OvalButton } from "./ui";

type Props = Pick<SiteContent, "brand" | "nav" | "navCta">;

export function Header({ brand, nav, navCta }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 bg-surface">
      {/* the original logo image has ~16px of empty space on its left, hence the "+16px" */}
      <div className="flex items-center justify-between py-8 pr-[6vw] pl-[calc(6vw+16px)] md:py-[calc(8px+1.46vw)] md:pr-[5vw] md:pl-[calc(5vw+16px)]">
        <Logo name={brand.name} tagline={brand.tagline} size="header" />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-[2.5vw] lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <a href={item.href} className="text-nav font-normal uppercase tracking-[0.1em] hover:opacity-60">
                {item.label}
              </a>
              {item.children && (
                <div className="invisible absolute top-full left-1/2 w-max -translate-x-1/2 bg-surface px-6 py-4 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a key={child.label} href={child.href} className="text-nav block py-1 hover:opacity-60">
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <OvalButton link={navCta} />
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-2 lg:hidden"
        >
          <span className={`h-px w-8 bg-ink transition-transform ${open ? "translate-y-[4.5px] rotate-45" : ""}`} />
          <span className={`h-px w-8 bg-ink transition-transform ${open ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="absolute inset-x-0 top-full flex h-[calc(100vh-100%)] flex-col items-center gap-6 bg-surface pt-12 lg:hidden">
          {[...nav, navCta].map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="font-serif text-3xl">
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
