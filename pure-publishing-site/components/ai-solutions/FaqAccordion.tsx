"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────────────────────
   FAQ data
───────────────────────────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    q: "What exactly is an AI solution?",
    a: "It's a piece of clever software that can hold conversations, make decisions, and carry out tasks on behalf of your business — automatically. Think of it as a very capable team member who works around the clock, never takes a day off, and responds to customers in seconds. We build it, train it on your business, and look after it for you.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None at all. We handle every technical aspect — building, hosting, training, and maintaining your AI tools. Your job is just to tell us about your business. If you can use WhatsApp, you can work with us.",
  },
  {
    q: "Will the AI get things wrong?",
    a: "We train your AI carefully and set strict guardrails so it won't say anything it shouldn't. It's also designed to hand conversations over to you when it's unsure. No AI is perfect, which is why we review and improve yours regularly based on real conversations.",
  },
  {
    q: "What does it cost?",
    a: "We keep things simple — a one-off setup fee to get everything built, then an affordable monthly plan that covers hosting, AI usage, support, and ongoing improvements. Head over to our contact page for a chat and we'll give you an honest quote.",
  },
  {
    q: "Can AI work with my existing website?",
    a: "Absolutely. We can add AI tools to your current website, or build you a brand new one that's designed to work seamlessly with your AI. Either way, we make it easy.",
  },
  {
    q: "Do I need a website to use AI?",
    a: "No. AI tools can work on WhatsApp, Facebook Messenger, Instagram, and other platforms too. That said, a website does make them more effective. We can advise on the best setup for your business.",
  },
] as const;

/* ─────────────────────────────────────────────────────────────
   FaqAccordion
   One item open at a time. The answer area uses the CSS grid
   0fr → 1fr trick for a smooth height transition without needing
   to know the content's exact pixel height.
───────────────────────────────────────────────────────────── */

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="max-w-3xl mx-auto">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            style={{ borderBottom: "1px solid var(--card-border)" }}
          >
            {/* Question row */}
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b6b]"
            >
              <span
                className="font-syne font-bold text-base md:text-lg leading-snug"
                style={{ color: "var(--deep-indigo)" }}
              >
                {item.q}
              </span>

              {/* + icon — rotates 45° to become × when open */}
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light"
                style={{
                  color: "var(--coral)",
                  border: "1.5px solid var(--coral)",
                  transition: "transform 0.3s ease",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            {/* Answer — CSS grid height transition */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.3s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  className="font-nunito text-base leading-relaxed pb-5"
                  style={{ color: "var(--text-soft)" }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
