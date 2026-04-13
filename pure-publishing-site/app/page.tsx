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

const TABLE_ROWS: Array<{ feature: string; other: boolean | string }> = [
  { feature: "Custom AI solutions",        other: false },
  { feature: "AI trained on your business", other: false },
  { feature: "24/7 customer handling",     other: false },
  { feature: "Bespoke website design",     other: true },
  { feature: "Plain-English support",      other: "Sometimes" },
  { feature: "Affordable monthly plans",   other: false },
  { feature: "Local team in Hastings",     other: "Some" },
];

const TESTIMONIALS = [
  {
    avatar: "🏰",
    quote:
      "Pure Publishing built us a FAQ page with an AI chatbot that answers customer questions automatically. It's saved us around four hours a week in admin alone. Brilliant.",
    author: "Swallows Oast",
    role: "Wedding Venue",
  },
  {
    avatar: "🔧",
    quote:
      "They set up a system that handles our enquiries outside office hours. We've picked up bookings we'd have completely missed before. Couldn't recommend them enough.",
    author: "Local Tradesperson",
    role: "Hastings",
  },
  {
    avatar: "🏢",
    quote:
      "I was nervous about AI but they explained everything without any jargon. The whole process was painless and the results speak for themselves.",
    author: "Small Business Owner",
    role: "East Sussex",
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

      {/* ═══════════════════════════════════════════════════════════
          4. WHY PURE PUBLISHING — COMPARISON TABLE
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="why-us"
        className="py-24 md:py-32"
        style={{ background: "var(--white)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="text-center mb-14" data-animate>
            <p
              className="font-syne font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "var(--coral)" }}
            >
              Why Us
            </p>
            <h2
              className="font-syne font-bold text-4xl md:text-5xl leading-tight"
              style={{ color: "var(--deep-indigo)" }}
            >
              Built for businesses like yours.
            </h2>
          </div>

          {/* Table card */}
          <div
            className="mx-auto overflow-hidden rounded-[20px]"
            style={{
              maxWidth: 820,
              border: "1px solid var(--card-border)",
              boxShadow: "0 4px 32px rgba(26, 17, 69, 0.08)",
            }}
            data-animate
            data-delay="100"
          >
            {/* Header row */}
            <div className="table-header">
              <div
                className="table-cell font-syne font-bold text-xs uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                Capability
              </div>
              <div
                className="table-cell justify-center font-syne font-bold text-xs uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                Other Agencies
              </div>
              {/* PP header — coral text, coral-tinted bg */}
              <div
                className="table-cell table-cell-pp justify-center font-syne font-bold text-xs uppercase tracking-widest"
                style={{ color: "var(--coral)" }}
              >
                Pure Publishing
              </div>
            </div>

            {/* Data rows */}
            {TABLE_ROWS.map((row) => (
              <div key={row.feature} className="table-row">
                {/* Feature name */}
                <div
                  className="table-cell font-nunito text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {row.feature}
                </div>

                {/* Other agencies cell */}
                <div className="table-cell justify-center">
                  {row.other === false ? (
                    <span
                      className="font-bold text-lg leading-none"
                      style={{ color: "#f87171" }}
                      aria-label="No"
                    >
                      ✕
                    </span>
                  ) : row.other === true ? (
                    <span
                      className="font-bold text-lg leading-none"
                      style={{ color: "var(--teal)" }}
                      aria-label="Yes"
                    >
                      ✓
                    </span>
                  ) : (
                    <span
                      className="font-nunito text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {row.other as string}
                    </span>
                  )}
                </div>

                {/* Pure Publishing cell — always a teal tick */}
                <div className="table-cell table-cell-pp justify-center">
                  <span
                    className="font-bold text-lg leading-none"
                    style={{ color: "var(--teal)" }}
                    aria-label="Yes"
                  >
                    ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="testimonials"
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
              What People Say
            </p>
            <h2
              className="font-syne font-bold text-4xl md:text-5xl leading-tight"
              style={{ color: "var(--deep-indigo)" }}
            >
              Real results. Real businesses.
            </h2>
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.author}
                className="testimonial-card p-8 flex flex-col"
                data-animate
                data-delay={String((i + 1) * 100)}
              >
                {/* Star rating */}
                <div
                  className="flex gap-0.5 mb-5 text-xl leading-none"
                  aria-label="Five stars"
                  style={{ color: "#f59e0b" }}
                >
                  ★★★★★
                </div>

                {/* Quote — italic, fills remaining height so author sits at bottom */}
                <blockquote
                  className="font-nunito text-base leading-relaxed italic flex-1 mb-6"
                  style={{ color: "var(--text-soft)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author row */}
                <div className="flex items-center gap-3">
                  {/* Avatar circle */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 select-none"
                    style={{ background: "var(--bg-alt2)" }}
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      className="font-syne font-bold text-sm"
                      style={{ color: "var(--deep-indigo)" }}
                    >
                      {t.author}
                    </p>
                    <p
                      className="font-nunito text-xs mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. CTA — LET'S TALK
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="cta"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #f0f0ff 0%, #f0fafa 100%)",
          paddingTop: "10rem",
          paddingBottom: "10rem",
        }}
      >
        {/* Single large blurred glow orb — static, centred behind content */}
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
              fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)",
              letterSpacing: "-0.035em",
              color: "var(--deep-indigo)",
            }}
            data-animate
            data-delay="100"
          >
            Let&apos;s get your business working smarter.
          </h2>

          {/* Subtitle — SEO: AI solutions for small business, Hastings, East Sussex */}
          <p
            className="font-nunito text-lg leading-relaxed mb-10"
            style={{ color: "var(--text-soft)", maxWidth: 580, margin: "0 auto 2.5rem" }}
            data-animate
            data-delay="200"
          >
            Book a free 30-minute chat about AI solutions for your small business.
            We&apos;ll listen, be honest about what&apos;ll work for you, and put
            together a plan — no obligation.
          </p>

          {/* Contact chips + primary CTA */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
            data-animate
            data-delay="300"
          >
            {/* Email chip */}
            <a
              href="mailto:hello@purepublishing.co.uk"
              className="contact-chip"
            >
              📧 hello@purepublishing.co.uk
            </a>

            {/* Phone chip — placeholder */}
            <a href="tel:01234567890" className="contact-chip">
              📞 01234 567 890
            </a>

            {/* Primary CTA — coral glow, same as hero */}
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

          {/* Trust line — SEO: affordable AI solutions, website design, Hastings, East Sussex */}
          <p
            className="font-nunito text-sm"
            style={{ color: "var(--text-muted)" }}
            data-animate
            data-delay="400"
          >
            Affordable AI solutions &amp; website design for small businesses ·
            Based in St Leonards-on-Sea, Hastings, East Sussex ·{" "}
            No jargon, ever · No hard sell
          </p>
        </div>
      </section>
    </>
  );
}
