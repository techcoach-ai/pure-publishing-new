import type { Metadata } from "next";
import Link from "next/link";
import SolutionsGrid from "@/components/ai-solutions/SolutionsGrid";
import FaqAccordion from "@/components/ai-solutions/FaqAccordion";
import AiDemo from "@/components/AiDemo";

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
   • This file is a Server Component — keeps the metadata export
     and all static sections (hero, demo header, FAQ header, CTA).
   • <SolutionsGrid /> — Client Component (cursor glow)
   • <AiDemo />       — Client Component (multi-step demo widget)
   • <FaqAccordion /> — Client Component (accordion toggle)
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

      {/* ═══════════════════════════════════════════════════════
          INTERACTIVE DEMO
      ═══════════════════════════════════════════════════════ */}
      <section
        id="demo"
        className="py-24 md:py-32"
        style={{ background: "var(--white)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="text-center mb-12" data-animate>
            <p
              className="font-syne font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "var(--coral)" }}
            >
              Try It Yourself
            </p>
            <h2
              className="font-syne font-bold text-4xl md:text-5xl leading-tight mb-5"
              style={{ color: "var(--deep-indigo)" }}
            >
              See how AI could help your business.
            </h2>
            <p
              className="font-nunito text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--text-soft)" }}
            >
              Pick your business type, answer one question, and our AI will
              show you exactly what&apos;s possible.
            </p>
          </div>

          {/* Demo widget — max 700px, centred */}
          <div
            className="max-w-[700px] mx-auto"
            data-animate
            data-delay="200"
          >
            <AiDemo />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════ */}
      <section
        id="faq"
        className="py-24 md:py-32"
        style={{ background: "var(--bg-alt)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="text-center mb-14" data-animate>
            <p
              className="font-syne font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "var(--coral)" }}
            >
              Common Questions
            </p>
            <h2
              className="font-syne font-bold text-4xl md:text-5xl leading-tight mb-5"
              style={{ color: "var(--deep-indigo)" }}
            >
              AI questions, answered in plain English.
            </h2>
          </div>

          {/* Accordion — client component */}
          <div data-animate data-delay="200">
            <FaqAccordion />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section
        id="ai-cta"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #f0f0ff 0%, #f0fafa 100%)",
          paddingTop: "10rem",
          paddingBottom: "10rem",
        }}
      >
        {/* Large blurred glow orb — static, centred */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            style={{
              width: 720,
              height: 720,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,107,107,0.13) 0%, rgba(14,165,160,0.07) 45%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

          {/* Eyebrow */}
          <p
            className="font-syne font-semibold text-sm uppercase tracking-widest mb-5"
            style={{ color: "var(--coral)" }}
            data-animate
          >
            Let&apos;s Talk
          </p>

          {/* Title */}
          <h2
            className="font-syne font-bold leading-tight mb-7"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              letterSpacing: "-0.035em",
              color: "var(--deep-indigo)",
            }}
            data-animate
            data-delay="100"
          >
            Ready to see what AI can do for your business?
          </h2>

          {/* Subtitle */}
          <p
            className="font-nunito text-lg leading-relaxed mb-10"
            style={{ color: "var(--text-soft)", maxWidth: 560, margin: "0 auto 2.5rem" }}
            data-animate
            data-delay="200"
          >
            Book a free chat. We&apos;ll listen, give you honest advice, and
            put a plan together — no obligation.
          </p>

          {/* Contact chips + primary CTA */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
            data-animate
            data-delay="300"
          >
            <a href="mailto:hello@purepublishing.co.uk" className="contact-chip">
              📧 hello@purepublishing.co.uk
            </a>
            <a href="tel:01234567890" className="contact-chip">
              📞 01234 567 890
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-nunito font-bold text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{
                background: "var(--coral)",
                boxShadow: "0 6px 32px var(--coral-glow)",
              }}
            >
              Book Your Free Chat →
            </Link>
          </div>

          {/* Trust line */}
          <p
            className="font-nunito text-sm"
            style={{ color: "var(--text-muted)" }}
            data-animate
            data-delay="400"
          >
            Based in St Leonards-on-Sea, Hastings &middot; No jargon, ever
          </p>

        </div>
      </section>
    </>
  );
}
