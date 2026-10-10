import type { SiteContent } from "@/content/types";
import { Logo } from "../ui";

type Props = { brand: SiteContent["brand"]; footer: SiteContent["footer"] };

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

export function Footer({ brand, footer }: Props) {
  return (
    <footer className="bg-page">
      <div className="grid gap-10 px-6 py-16 text-[0.94rem] leading-[1.8] md:grid-cols-2 md:px-[5vw] lg:grid-cols-[42%_17%_21%_minmax(0,1fr)] lg:gap-0 lg:pt-[4.5vw] lg:pb-[8vw]">
        <div className="lg:pr-[10vw]">
          <Logo name={brand.name} tagline={brand.tagline} large />
          <p className="text-body mt-6 max-w-[23rem]">{footer.blurb}</p>
        </div>

        <div>
          <ColumnTitle>Navigate</ColumnTitle>
          {footer.navigate.map((link) => (
            <a key={link.label} href={link.href} className="block hover:opacity-60">
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <ColumnTitle>{footer.listTitle}</ColumnTitle>
          {footer.list.map((link) => (
            <a key={link.label} href={link.href} className="block hover:opacity-60">
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <ColumnTitle>Contact</ColumnTitle>
          <address className="not-italic">
            {footer.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a href={`mailto:${footer.email}`} className="block hover:opacity-60">
              {footer.email}
            </a>
            <a href={`tel:${footer.phone.replace(/\D/g, "")}`} className="block hover:opacity-60">
              {footer.phone}
            </a>
          </address>
          <p className="mt-4">{footer.serving}</p>
        </div>
      </div>

      <div className="bg-accent px-6 py-2 text-[0.94rem] md:px-[6.8vw]">
        {footer.legal.map((link) => (
          <span key={link.label}>
            <a href={link.href} className="hover:opacity-60">
              {link.label}
            </a>
            {" | "}
          </span>
        ))}
        {footer.credit}
      </div>
    </footer>
  );
}
