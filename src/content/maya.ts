import type { FaqContent, OfficeContent, SiteContent } from "./types";

// Part 2 — redesign for Dr. Maya Reynolds, PsyD.
// Every claim below comes from her profile. Things the profile does not mention
// (fees, insurance, phone, email) are deliberately left out rather than invented.

const photo = (file: string) => `/maya/${file}`;

const book = { label: "Book a Consultation", href: "#contact" };

const services = [
  { label: "Anxiety & Panic Therapy", href: "#specialties" },
  { label: "Trauma Therapy & EMDR", href: "#specialties" },
  { label: "Burnout & Perfectionism", href: "#specialties" },
];

export const mayaContent: SiteContent = {
  brand: { name: "Maya Reynolds", tagline: "PsyD · Psychologist" },

  nav: [
    { label: "About", href: "#meet" },
    { label: "Services", href: "#specialties" },
    { label: "Office", href: "#office" },
    { label: "FAQs", href: "#faq" },
  ],
  navCta: book,

  hero: {
    eyebrow: "In-person therapy in Santa Monica & online across California",
    title: "Anxiety & trauma therapy in Santa Monica, so you can finally *exhale*.",
    text: "Dr. Maya Reynolds, PsyD, helps high-achieving adults move through anxiety, panic, trauma, and burnout with warm, grounded, evidence-based care.",
    button: book,
    image: {
      src: photo("hero-exhale.jpg"),
      alt: "Woman stretching and relaxing in a bright, calm room",
    },
    sideImage: {
      src: photo("hero-shoreline.jpg"),
      alt: "Waves along a quiet Santa Monica shoreline",
      position: "35% 60%",
    },
  },

  intro: {
    title: "Functioning on the outside, quietly exhausted on the inside?",
    copy: {
      lead: "If you’re always bracing for something to go wrong, you’re not alone.",
      left: "Many of the people I work with are thoughtful, capable, and self-aware — yet underneath, they’re stuck in overthinking, carrying tension in their body, struggling to sleep, or feeling constantly on edge. Others are still living with earlier experiences that shape their relationships, confidence, and sense of safety.",
      right:
        "I’m Dr. Maya Reynolds, a licensed clinical psychologist offering therapy for adults in Santa Monica and across California. Together, we’ll make sense of both the emotional and the physical side of what you’re feeling, so you can feel steadier in your daily life — not just during our sessions.",
    },
    image: {
      src: photo("santa-monica-lifeguard-tower.jpg"),
      alt: "Santa Monica lifeguard tower on the beach in soft morning haze",
    },
  },

  audiences: {
    title: "Who I *help*",
    items: [
      {
        title: "High-Achieving Professionals",
        text: "You look like you have it all together, but inside it’s constant worry, overthinking, and pressure to perform. Therapy helps quiet the noise so you can rest, focus, and feel like yourself again.",
        image: {
          src: photo("professional-at-work.jpg"),
          alt: "Professional woman working on a laptop in a calm, light-filled room",
        },
      },
      {
        title: "Entrepreneurs & Creatives",
        text: "After years of pushing through stress, it’s easy to feel burned out and disconnected from yourself and the work you once loved. Together, we’ll build more sustainable ways of living and working.",
        image: {
          src: photo("creative-hands-clay.jpg"),
          alt: "Hands shaping a clay cup in a sunlit studio",
          position: "50% 80%",
        },
      },
      {
        title: "Adults Healing from Trauma",
        text: "Whether it was a single event or long-standing patterns from childhood, relationships, or chronic stress, we’ll move at a careful pace — focusing on safety, stabilization, and feeling more regulated day to day.",
        image: {
          src: photo("hands-holding-tea.jpg"),
          alt: "Hands holding a warm cup of tea wrapped in a soft blanket",
        },
      },
    ],
  },

  quote: {
    text: "Therapy can be a space to slow down, reconnect, and finally take a breath.",
    emphasis: "You don’t have to keep holding it all together on your own.",
    image: { src: photo("ocean-dusk.jpg"), alt: "" },
  },

  expertise: {
    title: "Areas of *focus*",
    items: [
      "Anxiety",
      "Panic Attacks",
      "Single-Incident Trauma",
      "Complex Trauma",
      "Professional Burnout",
      "Perfectionism",
      "Chronic Stress",
      "Overthinking",
      "Body Tension & Restless Sleep",
      "Relationship Patterns",
      "Confidence & Self-Worth",
      "…and more.",
    ],
  },

  approach: {
    eyebrow: "Meet Dr. Maya Reynolds, PsyD",
    title: "Warm, grounded, and *collaborative*.",
    copy: {
      lead: "Licensed clinical psychologist in Santa Monica, California.",
      left: "I believe therapy works best when you feel respected, understood, and actively involved. Sessions are structured enough to feel supportive, while leaving room for reflection and depth. I draw on cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to work with both the emotional and physical sides of anxiety and trauma.",
      right:
        "My goal isn’t only symptom relief — it’s helping you build insight, resilience, and a stronger relationship with yourself over time. If you’re looking for a therapist who combines practical tools with deeper work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit.",
    },
    button: book,
    image: {
      src: photo("dr-maya-reynolds.jpg"),
      alt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica",
      position: "50% 30%",
    },
  },

  imageQuote: {
    title: "Practical tools *&* deeper healing for life in a fast-paced world.",
    image: {
      src: photo("beach-walk.jpg"),
      alt: "Woman walking alone along a calm, misty beach",
    },
  },

  specialties: {
    title: "How I can *help*",
    items: [
      {
        title: "Anxiety & Panic Therapy",
        text: "Constant worry, racing thoughts, and panic can leave you exhausted even on good days. Using CBT, mindfulness, and body-based tools, we’ll calm your nervous system and change the patterns that keep anxiety going.",
        link: { label: "Learn More", href: "#faq" },
      },
      {
        title: "Burnout & Perfectionism",
        text: "High internal pressure can quietly wear you down. Therapy gives you room to slow down, reconnect with what matters, and find a pace of life and work you can actually sustain.",
        link: { label: "Learn More", href: "#faq" },
      },
      {
        title: "Trauma Therapy & EMDR",
        text: "Trauma — a single event or years of it — can keep your body on high alert. With carefully paced EMDR and trauma-focused therapy, we’ll build safety and stability first, so painful memories gradually lose their hold.",
        link: { label: "Learn More", href: "#faq" },
      },
      {
        title: "Not sure where to start?",
        text: "Many people come in with a mix of anxiety, stress, and past experiences. In our first conversation, we’ll talk through what you’re facing and decide on the right focus together.",
        link: book,
      },
    ],
  },

  booking: {
    eyebrow: "Begin therapy",
    title: "Ready to feel more like *yourself* again?",
    paragraphs: [
      "Reaching out is a courageous first step. Whether you’re navigating anxiety, the effects of past trauma, or the weight of burnout, you deserve support that feels both practical and deeply human.",
      "Sessions are available in person at my Santa Monica office and through secure telehealth anywhere in California.",
    ],
    button: book,
    images: [
      {
        src: photo("calm-still-life.jpg"),
        alt: "Soft linen sofa and a ceramic vase in a calm, neutral room",
      },
      {
        src: photo("tea-by-window.jpg"),
        alt: "Woman holding a cup of tea and looking out a sunlit window",
        position: "40% 50%",
      },
    ],
  },

  footer: {
    blurb:
      "Therapy for adults navigating anxiety, trauma, and burnout — in person in Santa Monica and online anywhere in California.",
    navigate: [
      { label: "Home", href: "#" },
      { label: "About", href: "#meet" },
      { label: "Office", href: "#office" },
      { label: "FAQs", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    listTitle: "Services",
    list: services,
    address: ["Dr. Maya Reynolds, PsyD", "123th Street 45 W", "Santa Monica, CA 90401"],
    serving: "Serving Santa Monica and the Westside in person, and all of California through telehealth.",
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
    credit: "© 2026 Dr. Maya Reynolds, PsyD",
  },
};

// Part 3 — new section. Details and photos come from the office part of her profile.
export const mayaOffice: OfficeContent = {
  eyebrow: "Our office",
  title: "A calm, private space in *Santa Monica*.",
  text: "My Santa Monica office is designed to help you feel at ease from the moment you arrive — quiet and private, filled with natural light, and comfortably uncluttered. Clients often tell me the space itself helps them settle in before we even begin.",
  details: [
    { title: "In person", text: "123th Street 45 W, Santa Monica, CA 90401" },
    { title: "Online", text: "Secure telehealth for clients anywhere in California" },
    { title: "The space", text: "Quiet, private, and filled with natural light" },
  ],
  button: { label: "Book an In-Person Session", href: "#contact" },
  images: [
    {
      src: photo("office-lounge.jpg"),
      alt: "Dr. Maya Reynolds’ Santa Monica therapy office with a sofa, armchair, and tall sunlit windows",
    },
    {
      src: photo("office-seating.jpg"),
      alt: "Comfortable seating area with plants and bookshelves in the therapy office",
    },
    {
      src: photo("office-armchair.jpg"),
      alt: "Armchair by a sunny window and exposed brick wall in the therapy office",
    },
  ],
};

export const mayaFaqs: FaqContent = {
  title: "Frequently asked *questions*",
  items: [
    {
      question: "Do you offer in-person or online therapy?",
      answer:
        "Both. I see clients in person at my office in Santa Monica, and I offer secure telehealth sessions for adults located anywhere in California.",
    },
    {
      question: "Who do you work with?",
      answer:
        "I work with adults who are dealing with anxiety, panic, trauma, burnout, or perfectionism — often professionals, entrepreneurs, and creatives who seem fine on the outside but feel exhausted or on edge inside.",
    },
    {
      question: "What is EMDR, and is it right for me?",
      answer:
        "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your brain process painful memories so they feel less overwhelming. We’ll decide together whether it fits your goals, and we’ll always build a sense of safety and stability first.",
    },
    {
      question: "What are sessions like?",
      answer:
        "Warm, collaborative, and structured enough to feel supportive. We’ll combine practical tools you can use day to day — from CBT, mindfulness, and body-based techniques — with space for reflection and deeper understanding.",
    },
    {
      question: "How do I get started?",
      answer:
        "Reach out to book a consultation. We’ll talk about what’s bringing you to therapy, answer your questions, and see whether we’re a good fit.",
    },
  ],
};
