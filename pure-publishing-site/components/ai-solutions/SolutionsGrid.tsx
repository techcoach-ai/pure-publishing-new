"use client";

import { useCallback } from "react";

/* ─────────────────────────────────────────────────────────────
   Solution card data
   SEO keywords woven into descriptions:
   custom AI solutions, AI for small business,
   business automation, AI chatbot for business.
───────────────────────────────────────────────────────────── */
const SOLUTIONS = [
  {
    icon: "💬",
    title: "Customer Enquiry AI",
    desc: "An AI chatbot for your business that handles customer questions 24/7 — on your website, WhatsApp, Facebook, or Instagram. Trained on your prices, services, and FAQs. It answers in your tone, qualifies leads, and hands complex queries over to you.",
    tag: "Most Popular",
    featured: true,
  },
  {
    icon: "✍️",
    title: "Content Creation AI",
    desc: "Writes blog posts, social media captions, email newsletters, and product descriptions in your voice. Give it a topic and it'll produce ready-to-publish content in minutes — saving you hours every week.",
    tag: "Saves 4–6 hours/week",
    featured: false,
  },
  {
    icon: "📅",
    title: "Booking & Scheduling AI",
    desc: "Takes bookings, manages your calendar, sends confirmations and reminders, and handles cancellations — automatically. Business automation at its most practical: works with the tools you already use.",
    tag: "Zero no-shows",
    featured: false,
  },
  {
    icon: "⭐",
    title: "Review Management AI",
    desc: "Monitors your Google, Facebook, and Trustpilot reviews. Drafts thoughtful replies in your tone and alerts you to anything urgent. Your reputation, managed on autopilot.",
    tag: "Reputation on autopilot",
    featured: false,
  },
  {
    icon: "📧",
    title: "Follow-Up AI",
    desc: "Automatically follows up on quotes, unanswered enquiries, and leads that have gone quiet. A custom AI solution that turns missed opportunities into booked jobs without you lifting a finger.",
    tag: "Recovers lost revenue",
    featured: false,
  },
  {
    icon: "📊",
    title: "Reporting & Insights AI",
    desc: "Analyses your enquiries, reviews, and customer patterns to tell you what's working and what isn't. You get a plain-English summary every month — no spreadsheets, no dashboards.",
    tag: "Know your numbers",
    featured: false,
  },
] as const;

/* ─────────────────────────────────────────────────────────────
   Tag styles — featured card gets the coral→teal gradient,
   all others get the teal tint used elsewhere on the site.
───────────────────────────────────────────────────────────── */
const TAG_DEFAULT = {
  background: "rgba(14, 165, 160, 0.08)",
  border: "1px solid rgba(14, 165, 160, 0.2)",
  color: "var(--teal)",
} as const;

const TAG_FEATURED = {
  background: "linear-gradient(90deg, var(--coral) 0%, var(--teal) 100%)",
  color: "#fff",
} as const;

export default function SolutionsGrid() {
  /* Writes --mx / --my onto each card so the .feature-card::before
     pseudo-element can position the radial cursor glow correctly. */
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
    <section
      id="solutions"
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
            What We Build
          </p>
          <h2
            className="font-syne font-bold text-4xl md:text-5xl leading-tight mb-5"
            style={{ color: "var(--deep-indigo)" }}
          >
            AI tools that actually make a difference.
          </h2>
          <p
            className="font-nunito text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-soft)" }}
          >
            Here are some of the most popular custom AI solutions we build for
            small and medium businesses. Don&apos;t see exactly what you need?
            We&apos;ll build it.
          </p>
        </div>

        {/* Solutions grid — 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTIONS.map((item, i) => (
            <div
              key={item.title}
              className="feature-card p-8 flex flex-col"
              onMouseMove={handleCardMouseMove}
              data-animate
              /* Reset stagger every row (3 cols desktop) so each row
                 animates in independently as the user scrolls. */
              data-delay={String(((i % 3) + 1) * 100)}
            >
              {/* Inner content sits above the ::before glow layer */}
              <div className="relative z-[1] flex flex-col flex-1">

                {/* Emoji icon in a coral-tinted rounded square */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 flex-shrink-0 select-none"
                  style={{ background: "rgba(255, 107, 107, 0.1)" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                {/* Card title */}
                <h3
                  className="font-syne font-bold text-xl mb-3"
                  style={{ color: "var(--deep-indigo)" }}
                >
                  {item.title}
                </h3>

                {/* Description — flex-1 pushes tag to card bottom */}
                <p
                  className="font-nunito text-base leading-relaxed flex-1"
                  style={{ color: "var(--text-soft)" }}
                >
                  {item.desc}
                </p>

                {/* Tag pill — featured gets gradient, others get teal tint */}
                <div className="mt-5 flex items-center">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-nunito text-xs font-bold"
                    style={item.featured ? TAG_FEATURED : TAG_DEFAULT}
                  >
                    {item.featured && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
