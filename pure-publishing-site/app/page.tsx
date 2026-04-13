"use client";

import { useCallback } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════
   Page data
═══════════════════════════════════════════════════════════ */

const FEATURE_CHIPS = [
  "Customer Support AI",
  "Content Creation",
  "Booking Automation",
  "Review Management",
];

const WHAT_WE_DO = [
  {
    icon: "🤖",
    title: "Custom AI Solutions",
    desc: "From handling customer enquiries round the clock to automating your admin — we build AI tools that do the heavy lifting so you can focus on what you do best.",
  },
  {
    icon: "🌐",
    title: "Website Design",
    desc: "Beautiful, fast websites that work hand-in-hand with your AI tools. We design sites that convert visitors into customers — no templates, no cookie-cutter layouts.",
  },
  {
    icon: "📈",
    title: "Ongoing Support",
    desc: "We don't build it and disappear. Your AI gets smarter over time, and we're always here with plain-English support whenever you need us.",
  },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Free Chat",
    desc: "We listen. You tell us what eats into your time. 30 minutes, no pressure, no jargon.",
  },
  {
    num: "02",
    title: "We Build It",
    desc: "We create your custom AI solution, trained on your business, your tone, and your customers.",
  },
  {
    num: "03",
    title: "Plain-English Handover",
    desc: "We walk you through everything. You'll know exactly what it does and how to tweak it.",
  },
  {
    num: "04",
    title: "Live & Getting Smarter",
    desc: "Your AI goes live. We monitor it, improve it, and send you plain-English reports every month.",
  },
];

/* ═══════════════════════════════════════════════════════════
   Page component
═══════════════════════════════════════════════════════════ */

export default function HomePage() {
  /* Sets --mx / --my on whichever card the cursor is over.
     The .feature-card::before CSS rule reads these for the glow. */
  const handleCardMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.currentTarget;
      const { left, top } = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - left}px`);
      el.style.setProperty("--my", `${e.clientY - top}px`);
    },
    []
  );

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          minHeight: "calc(100vh - 4rem)",
          background: "linear-gradient(160deg, #ffffff 0%, var(--off-white) 100%)",
        }}
      >
        {/* Floating gradient orbs */}
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

        {/* Hero content */}
        <div
          className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center"
          style={{ paddingBottom: "6rem" }}
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

          {/* Main headline */}
          <h1
            className="font-syne font-bold leading-[1.05] mb-7"
            style={{ letterSpacing: "-0.045em" }}
          >
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
            <strong className="font-semibold" style={{ color: "var(--text-soft)" }}>
              custom AI tools
            </strong>{" "}
            that handle the time-consuming parts of your business — answering
            enquiries, writing content, managing bookings, and more. Affordable
            monthly plans.{" "}
            <strong className="font-semibold" style={{ color: "var(--text-soft)" }}>
              No jargon. Ever.
            </strong>
          </p>

          {/* CTA buttons */}
          <div
            className="hero-item flex flex-wrap items-center justify-center gap-4 mb-10"
            style={{ animationDelay: "740ms" }}
          >
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
            {FEATURE_CHIPS.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-nunito text-xs font-semibold"
                style={{
                  background: "rgba(14, 165, 160, 0.07)",
                  border: "1px solid rgba(14, 165, 160, 0.2)",
                  color: "var(--teal)",
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

        {/* Scroll hint */}
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

      {/* ═══════════════════════════════════════════════════════════
          2. WHAT WE DO
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="what-we-do"
        className="py-24 md:py-32"
        style={{ background: "var(--white)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="text-center mb-16" data-animate>
            <p
              className="font-syne font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "var(--coral)" }}
            >
              What We Do
            </p>
            <h2
              className="font-syne font-bold text-4xl md:text-5xl leading-tight mb-5"
              style={{ color: "var(--deep-indigo)" }}
            >
              AI that actually helps your business.
            </h2>
            <p
              className="font-nunito text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--text-soft)" }}
            >
              We don&apos;t do generic chatbots or off-the-shelf tools. Every AI
              solution we build is tailored to your business, your customers, and
              the way you work.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {WHAT_WE_DO.map((item, i) => (
              <div
                key={item.title}
                className="feature-card p-8"
                onMouseMove={handleCardMouseMove}
                data-animate
                data-delay={String((i + 1) * 100)}
              >
                {/* Inner wrapper sits above the ::before glow layer */}
                <div className="relative z-[1]">
                  <span
                    className="block text-4xl mb-5 leading-none"
                    role="img"
                    aria-label={item.title}
                  >
                    {item.icon}
                  </span>
                  <h3
                    className="font-syne font-bold text-xl mb-3"
                    style={{ color: "var(--deep-indigo)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-nunito text-base leading-relaxed"
                    style={{ color: "var(--text-soft)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. HOW IT WORKS
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="how-it-works"
        className="py-24 md:py-32"
        style={{ background: "var(--bg-alt)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="text-center mb-16" data-animate>
            <p
              className="font-syne font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "var(--coral)" }}
            >
              How It Works
            </p>
            <h2
              className="font-syne font-bold text-4xl md:text-5xl leading-tight"
              style={{ color: "var(--deep-indigo)" }}
            >
              From chat to live AI in days, not months.
            </h2>
          </div>

          {/* Steps grid — connecting line behind circles on desktop */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">

            {/* Gradient connecting line — visible lg+ only */}
            <div
              className="hidden lg:block absolute pointer-events-none"
              style={{
                top: "27px", /* vertical centre of the 56px circles */
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,107,107,0.28) 14%, rgba(14,165,160,0.28) 86%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            {HOW_IT_WORKS.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center gap-5"
                data-animate
                data-delay={String((i + 1) * 100)}
              >
                {/* Numbered circle — filled bg matches section so it covers the line */}
                <div
                  className="step-circle font-syne relative z-10"
                  style={{ background: "var(--bg-alt)" }}
                >
                  {step.num}
                </div>

                {/* Step text */}
                <div>
                  <h3
                    className="font-syne font-bold text-lg mb-2"
                    style={{ color: "var(--deep-indigo)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-nunito text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More sections coming soon */}
    </>
  );
}
