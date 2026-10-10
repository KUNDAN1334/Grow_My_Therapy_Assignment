import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { OvalButton, ScriptText } from "../ui";

// Final call to action, framed by a narrow photo on the left and a large one on the right.
export function Booking({ booking }: { booking: SiteContent["booking"] }) {
  const [leftImage, rightImage] = booking.images;

  return (
    <section id="contact" className="bg-surface py-16 md:grid md:grid-cols-[11.9%_1fr_34.5%] md:pt-[6.6vw] md:pb-[9vw]">
      <div className="relative mt-[8.1vw] hidden aspect-[169/489] md:block">
        <Image src={leftImage.src} alt={leftImage.alt} fill sizes="12vw" className="object-cover" />
      </div>

      <div className="px-6 md:px-[8.2vw]">
        <p className="eyebrow">{booking.eyebrow}</p>
        <h2 className="text-h2 mt-8 md:mt-[5.5vw]">
          <ScriptText text={booking.title} />
        </h2>
        <div className="text-body mt-6 space-y-4">
          {booking.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <OvalButton link={booking.button} className="mt-5" />
      </div>

      <div className="relative mx-6 mt-12 aspect-[492/606] md:mx-0 md:mt-0">
        <Image src={rightImage.src} alt={rightImage.alt} fill sizes="(min-width: 768px) 35vw, 100vw" className="object-cover" />
      </div>
    </section>
  );
}
