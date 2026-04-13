import type { Metadata } from "next";
import Link from "next/link";
import SolutionsGrid from "@/components/ai-solutions/SolutionsGrid";

/* ─────────────────────────────────────────────────────────────
   Page metadata — exported from this server component so that
   Next.js can inject the correct <title> and <meta> tags.
───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Custom AI solutions built for small and medium businesses in Hastings and East Sussex. AI chatbots, content creation, booking automation, and more. Affordable monthly plans. No jargon.",
  keywords: [
    "custom AI solutions",
    "AI for small business",
    "business automation",
    "AI chatbot for business",
    "Hastings",
    "East Sussex",
  ],
};

/* ─────────────────────────────────────────────────────────────
   AI Solutions page

   Architecture:
   • This file is a Server Component — it keeps the metadata
     export and renders the pure-CSS hero section.
   • <SolutionsGrid /> is a Client Component ("use client")
     that handles the onMouseMove cursor-glow on the cards.
───────────────────────────────────────────────────────────── */
export default function AISolutionsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO — ~60 vh, CSS-only entrance animation
      ═══════════════════════════════════════════════════════ */}
      <section
        id="ai-hero"
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          minHeight: "60vh",
          background: "linear-gradient(160deg, #ffffff 0%, var(--off-white) 100%)",
        }}
      >
        {/* Floating gradient orbs — smaller than home hero */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Orb 1 — deep-indigo, top-left */}
          <div
            style={{
              position: "absolute",
              width: 440,
              height: 440,
              top: -120,
              left: -140,
              borderRadius: "50%",
              background: "var(--deep-indigo)",
              opacity: 0.06,
              filter: "blur(90px)",
              animation: "orb-float-a 14s ease-in-out infinite",
            }}
          />
          {/* Orb 2 — coral, top-right */}
          <div
            style={{
              position: "absolute",
              width: 340,
              height: 340,
              top: 10,
              right: -120,
              borderRadius: "50%",
              background: "var(--coral)",
              opacity: 0.08,
              filter: "blur(90px)",
              animation: "orb-float-b 11s ease-in-out infinite 2s",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 flex flex-col items-center text-center">

          {/* Coral badge — pulsing coral dot */}
          <div
            className="hero-item inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 font-nunito text-sm font-semibold"
            style={{
              animationDelay: "100ms",
              background: "rgba(255, 107, 107, 0.08)",
              border: "1px solid rgba(255, 107, 107, 0.2)",
              color: "var(--coral)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0 dot-pulse-coral"
              style={{ background: "var(--coral)" }}
            />
            Our Core Service
          </div>

          {/* Main headline */}
          <h1
            className="hero-item font-syne font-bold leading-tight mb-7"
            style={{
              animationDelay: "260ms",
              fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
              letterSpacing: "-0.04em",
              color: "var(--deep-indigo)",
            }}
          >
            Custom AI solutions built around your business.
          </h1>

          {/* Subtitle */}
          <p
            className="hero-item font-nunito leading-relaxed mb-10"
            style={{
              animationDelay: "420ms",
              fontWeight: 300,
              fontSize: "1.15rem",
              maxWidth: 560,
              color: "var(--text-muted)",
            }}
          >
            Every business is different. That&apos;s why we don&apos;t sell
            off-the-shelf tools. We sit down with you, understand how your
            business works, and build AI that fits — like a new team member
            who never clocks off.
          </p>

          {/* Single CTA */}
          <div className="hero-item" style={{ animationDelay: "560ms" }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-nunito font-bold text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{
                background: "var(--coral)",
                boxShadow: "0 6px 32px var(--coral-glow)",
              }}
            >
              Book a Free Chat →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SOLUTIONS GRID — client component (cursor glow)
      ═══════════════════════════════════════════════════════ */}
      <SolutionsGrid />
    </>
  );
}
