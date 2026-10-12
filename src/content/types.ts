// Shape of all homepage content. Both the clone and the redesign fill this in,
// so the same section components can render either one.
//
// In headings, wrap a word in *asterisks* to show it in the script accent font,
// e.g. "Who we *help*".

// position: optional CSS object-position, to choose which part of the photo stays
// visible when it is cropped (e.g. "50% 30%" keeps a face in frame).
export type Img = { src: string; alt: string; position?: string };
export type Link = { label: string; href: string };
export type NavItem = Link & { children?: Link[] };

// Two columns of body copy: an uppercase lead line + paragraph on the left,
// one more paragraph on the right.
export type TwoColumnCopy = { lead: string; left: string; right: string };

// Part 3: the "Our Office" section, only used by the redesign.
export type OfficeContent = {
  eyebrow: string;
  title: string;
  text: string;
  details: { title: string; text: string }[];
  button: Link;
  images: [Img, Img, Img];
};

export type FaqContent = {
  title: string;
  items: { question: string; answer: string }[];
};

export type SiteContent = {
  brand: { name: string; tagline: string };
  nav: NavItem[];
  navCta: Link;

  hero: {
    eyebrow: string;
    title: string;
    text: string;
    button: Link;
    image: Img;
    sideImage: Img;
  };

  intro: { title: string; copy: TwoColumnCopy; image: Img };

  audiences: {
    title: string;
    items: { title: string; text: string; image: Img }[];
  };

  quote: { text: string; emphasis: string; image: Img };

  expertise: { title: string; items: string[] };

  approach: {
    eyebrow: string;
    title: string;
    copy: TwoColumnCopy;
    button: Link;
    image: Img;
  };

  imageQuote: { title: string; image: Img };

  specialties: {
    title: string;
    items: { title: string; text: string; link: Link }[];
  };

  booking: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    button: Link;
    images: [Img, Img];
  };

  footer: {
    blurb: string;
    navigate: Link[];
    listTitle: string;
    list: Link[];
    address: string[];
    email?: string;
    phone?: string;
    serving: string;
    legal: Link[];
    credit: string;
  };
};
