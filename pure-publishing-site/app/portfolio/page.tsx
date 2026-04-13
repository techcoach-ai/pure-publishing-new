import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Our work — websites and copy we're proud of.",
};

/* Portfolio page — content coming soon */
export default function PortfolioPage() {
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
        Portfolio
      </h1>
      <p
        className="font-nunito text-lg max-w-lg leading-relaxed"
        style={{ color: "var(--text-soft)" }}
        data-animate
        data-delay="200"
      >
        A showcase of our work. Page content coming soon.
      </p>
    </section>
  );
}
