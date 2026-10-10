import type { SiteContent } from "@/content/types";
import { Logo } from "../ui";

type Props = { brand: SiteContent["brand"]; footer: SiteContent["footer"] };

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-[15px]">{children}</p>;
}

// Logo + blurb, then three link columns. On mobile the columns stack as
// Navigate → Contact → Team (same order as the original).
export function Footer({ brand, footer }: Props) {
  return (
    <footer className="bg-page">
      <div className="text-small grid gap-[44px] pt-[73px] pr-[6vw] pb-6 pl-[11.3vw] md:min-h-[calc(187px+21.25vw)] md:grid-cols-[35.6vw_15vw_18.7vw_1fr] md:items-start md:gap-0 md:pt-[4.5vw] md:pr-[5vw] md:pb-0 md:pl-[6.8vw]">
        <div>
          <Logo name={brand.name} tagline={brand.tagline} size="footer" />
          <p className="text-body mt-5 max-w-[302px] md:mt-[1.7vw] md:max-w-[25.8vw]">{footer.blurb}</p>
        </div>

        <div className="ml-[6vw] md:ml-0">
          <ColumnTitle>Navigate</ColumnTitle>
          {footer.navigate.map((link) => (
            <a key={link.label} href={link.href} className="block hover:opacity-60">
              {link.label}
            </a>
          ))}
        </div>

        <div className="order-last ml-[6vw] md:order-none md:ml-0">
          <ColumnTitle>{footer.listTitle}</ColumnTitle>
          {footer.list.map((link) => (
            <a key={link.label} href={link.href} className="block hover:opacity-60">
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-[6vw] md:ml-0">
          <ColumnTitle>Contact</ColumnTitle>
          <address className="not-italic">
            {footer.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a href={`mailto:${footer.email}`} className="block break-words hover:opacity-60">
              {footer.email}
            </a>
            <a href={`tel:${footer.phone.replace(/\D/g, "")}`} className="block hover:opacity-60">
              {footer.phone}
            </a>
          </address>
          <p className="mt-[19px] italic">{footer.serving}</p>
        </div>
      </div>

      <div className="text-small flex min-h-[67px] items-center bg-accent px-[7.7vw] text-white md:min-h-0 md:h-[calc(12px+2.29vw)] md:px-[6.8vw]">
        <p>
          {footer.legal.map((link) => (
            <span key={link.label}>
              <a href={link.href} className="hover:opacity-60">
                {link.label}
              </a>
              {" | "}
            </span>
          ))}
          {footer.credit}
        </p>
      </div>
    </footer>
  );
}
