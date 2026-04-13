import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions",
  description: "AI-powered copywriting and content strategy for your business.",
};

/* AI Solutions page — content coming soon */
export default function AISolutionsPage() {
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
        AI Solutions
      </h1>
      <p
        className="font-nunito text-lg max-w-lg leading-relaxed"
        style={{ color: "var(--text-soft)" }}
        data-animate
        data-delay="200"
      >
        Smart content, powered by AI. Page content coming soon.
      </p>
    </section>
  );
}
