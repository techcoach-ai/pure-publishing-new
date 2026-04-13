import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch or book a free chat with the Pure Publishing team.",
};

/* Contact page — content coming soon */
export default function ContactPage() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center"
      style={{ background: "var(--off-white)" }}
    >
      <h1
        className="font-syne font-bold text-5xl md:text-6xl mb-6"
        style={{ color: "var(--deep-indigo)" }}
        data-animate
      >
        Contact Us
      </h1>
      <p
        className="font-nunito text-lg max-w-lg leading-relaxed"
        style={{ color: "var(--text-soft)" }}
        data-animate
        data-delay="200"
      >
        We&apos;d love to hear from you. Contact form coming soon.
      </p>
    </section>
  );
}
