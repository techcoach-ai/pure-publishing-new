import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design",
  description: "Beautiful, high-converting websites built for your business.",
};

/* Website Design page — content coming soon */
export default function WebsiteDesignPage() {
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
        Website Design
      </h1>
      <p
        className="font-nunito text-lg max-w-lg leading-relaxed"
        style={{ color: "var(--text-soft)" }}
        data-animate
        data-delay="200"
      >
        Websites that look great and work even harder. Page content coming soon.
      </p>
    </section>
  );
}
