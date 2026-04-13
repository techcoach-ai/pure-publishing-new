"use client";

import Link from "next/link";

const FEATURE_CHIPS = [
  "Customer Support AI",
  "Content Creation",
  "Booking Automation",
  "Review Management",
] as const;

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          minHeight: "calc(100vh - 4rem)",
          background: "linear-gradient(160deg, #ffffff 0%, var(--off-white) 100%)",
        }}
      >
        {/* ── Floating gradient orbs ──────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Orb 1 — deep-indigo, top-left */}
          <div
            style={{
              position: "absolute",
              width: 640,
              height: 640,
              top: -180,
              left: -200,
              borderRadius: "50%",
              background: "var(--deep-indigo)",
              opacity: 0.07,
              filter: "blur(90px)",
              animation: "orb-float-a 14s ease-in-out infinite",
            }}
          />
          {/* Orb 2 — coral, right side */}
          <div
            style={{
              position: "absolute",
              width: 460,
              height: 460,
              top: 20,
              right: -160,
              borderRadius: "50%",
              background: "var(--coral)",
              opacity: 0.09,
              filter: "blur(90px)",
              animation: "orb-float-b 11s ease-in-out infinite 2s",
            }}
          />
          {/* Orb 3 — teal, bottom-left */}
          <div
            style={{
              position: "absolute",
              width: 380,
              height: 380,
              bottom: 40,
              left: -80,
              borderRadius: "50%",
              background: "var(--teal)",
              opacity: 0.07,
              filter: "blur(90px)",
              animation: "orb-float-c 16s ease-in-out infinite 1s",
            }}
          />
        </div>

        {/* ── Hero content ────────────────────────────────────── */}
        <div
          className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center"
          style={{ paddingBottom: "6rem" /* clearance for scroll hint */ }}
        >
          {/* Status badge */}
          <div
            className="hero-item inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10 font-nunito text-sm font-semibold"
            style={{
              animationDelay: "100ms",
              background: "rgba(34, 197, 94, 0.08)",
              border: "1px solid rgba(34, 197, 94, 0.22)",
              color: "var(--text-soft)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0 dot-pulse-green"
              style={{ background: "#22c55e" }}
            />
            Custom AI Solutions for Every Business · Hastings, East Sussex
          </div>

          {/* Main headline — two lines */}
          <h1
            className="font-syne font-bold leading-[1.05] mb-7"
            style={{ letterSpacing: "-0.045em" }}
          >
            {/* Line 1 — deep-indigo */}
            <span
              className="hero-item block"
              style={{
                animationDelay: "260ms",
                fontSize: "clamp(3.2rem, 8.5vw, 7rem)",
                color: "var(--deep-indigo)",
              }}
            >
              AI that works for you,
            </span>

            {/* Line 2 — coral → teal gradient */}
            <span
              className="hero-item block gradient-text"
              style={{
                animationDelay: "420ms",
                fontSize: "clamp(3.2rem, 8.5vw, 7rem)",
              }}
            >
              not instead of you.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="hero-item font-nunito leading-relaxed mb-10"
            style={{
              animationDelay: "580ms",
              fontWeight: 300,
              fontSize: "1.15rem",
              maxWidth: 640,
              color: "var(--text-muted)",
            }}
          >
            We build{" "}
            <strong
              className="font-semibold"
              style={{ color: "var(--text-soft)" }}
            >
              custom AI tools
            </strong>{" "}
            that handle the time-consuming parts of your business — answering
            enquiries, writing content, managing bookings, and more. Affordable
            monthly plans.{" "}
            <strong
              className="font-semibold"
              style={{ color: "var(--text-soft)" }}
            >
              No jargon. Ever.
            </strong>
          </p>

          {/* CTA buttons */}
          <div
            className="hero-item flex flex-wrap items-center justify-center gap-4 mb-10"
            style={{ animationDelay: "740ms" }}
          >
            {/* Primary — coral glow */}
            <Link
              href="/ai-solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-nunito font-bold text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{
                background: "var(--coral)",
                boxShadow: "0 6px 32px var(--coral-glow)",
              }}
            >
              See AI Solutions →
            </Link>

            {/* Secondary — outline / ghost */}
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-nunito font-bold transition-all duration-300 hover:bg-black/[0.05]"
              style={{
                border: "2px solid rgba(26, 17, 69, 0.2)",
                color: "var(--text-primary)",
              }}
            >
              How It Works
            </a>
          </div>

          {/* Feature chips */}
          <div
            className="hero-item flex flex-wrap justify-center gap-2"
            style={{ animationDelay: "900ms" }}
          >
            {FEATURE_CHIPS.map((chip, i) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-nunito text-xs font-semibold"
                style={{
                  background: "rgba(14, 165, 160, 0.07)",
                  border: "1px solid rgba(14, 165, 160, 0.2)",
                  color: "var(--teal)",
                  /* Stagger the pulse animation start per chip */
                  animationDelay: `${i * 300}ms`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 dot-pulse-teal"
                  style={{ background: "var(--teal)" }}
                />
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* ── Scroll hint ─────────────────────────────────────── */}
        <div
          className="hero-item absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animationDelay: "1060ms" }}
          aria-hidden="true"
        >
          <span
            className="font-nunito text-[0.65rem] uppercase tracking-[0.18em]"
            style={{ color: "var(--text-muted)" }}
          >
            Scroll
          </span>
          {/* Vertical animated line */}
          <div
            className="w-px h-10 relative overflow-hidden rounded-full"
            style={{ background: "var(--card-border)" }}
          >
            <div
              className="absolute inset-0 scroll-fill rounded-full"
              style={{
                background: "linear-gradient(to bottom, var(--coral), var(--teal))",
              }}
            />
          </div>
        </div>
      </section>

      {/* ─ More sections coming soon ─────────────────────────── */}
    </>
  );
}
