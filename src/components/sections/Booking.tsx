import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { OvalButton, ScriptText } from "../ui";

// Final call to action, framed by a narrow photo on the left and a large one on the right.
// On mobile: small photo on top, then the text, then the large photo inset from the left.
export function Booking({ booking }: { booking: SiteContent["booking"] }) {
  const [leftImage, rightImage] = booking.images;

  return (
    <section
      id="contact"
      className="bg-surface pt-[55px] pb-14 md:grid md:grid-cols-[11.8vw_1fr_34.5%] md:items-start md:pt-[6.6vw] md:pb-[calc(14px+8.33vw)]"
    >
      <div className="relative aspect-[189/199] w-[48.5vw] md:mt-[calc(36px+5.625vw)] md:aspect-auto md:h-[calc(255px+16.25vw)] md:w-auto">
        <Image src={leftImage.src} alt={leftImage.alt} fill sizes="(min-width: 768px) 12vw, 49vw" className="object-cover" />
      </div>

      {/* on desktop this column stretches to the photos' height so the button sits near their bottom edge */}
      <div className="mt-[62px] px-[6vw] md:mt-0 md:flex md:flex-col md:self-stretch md:px-[8.2vw] md:pb-[1vw]">
        <p className="eyebrow">{booking.eyebrow}</p>
        <h2 className="text-h2 mt-7 md:mt-[calc(9px+5.6vw)]">
          <ScriptText text={booking.title} />
        </h2>
        <div className="text-body mt-6 space-y-4 md:mt-[calc(2.55vw-6px)] md:mb-5">
          {booking.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <OvalButton link={booking.button} className="mt-5 self-start md:mt-auto" />
      </div>

      <div className="relative mt-[51px] ml-[17.4vw] aspect-[322/269] md:mt-0 md:ml-0 md:aspect-auto md:h-[calc(291px+21.88vw)]">
        <Image
          src={rightImage.src}
          alt={rightImage.alt}
          fill
          sizes="(min-width: 768px) 35vw, 83vw"
          className="object-cover object-[63%_53%]"
        />
      </div>
    </section>
  );
}
