"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════
   Types
═══════════════════════════════════════════════════════════ */

type Step = 1 | 2 | 3;

interface DemoResult {
  message: string;
  statNum: string;
  statLabel: string;
  statSub: string;
}

/* ═══════════════════════════════════════════════════════════
   Business type data — Step 1
═══════════════════════════════════════════════════════════ */

const BIZ_TYPES = [
  { key: "trades",       emoji: "🔧", label: "Trades" },
  { key: "cafe",         emoji: "☕", label: "Café/Restaurant" },
  { key: "hairbeauty",   emoji: "💅", label: "Hair & Beauty" },
  { key: "professional", emoji: "💼", label: "Professional Services" },
  { key: "retail",       emoji: "🛍️", label: "Retail" },
  { key: "healthfitness",emoji: "🏋️", label: "Health & Fitness" },
  { key: "estateagent",  emoji: "🏠", label: "Estate Agent" },
  { key: "childcare",    emoji: "🧒", label: "Childcare" },
  { key: "other",        emoji: "🏢", label: "Other" },
] as const;

/* ═══════════════════════════════════════════════════════════
   Challenge question / answer data — Step 2
   One question with four answers per business type.
═══════════════════════════════════════════════════════════ */

interface BizQuestion {
  question: string;
  answers: readonly [string, string, string, string];
}

const BIZ_QUESTIONS: Record<string, BizQuestion> = {
  trades: {
    question: "What's the biggest time drain in your week?",
    answers: [
      "Answering the same questions over and over",
      "Chasing customers for payment or approval",
      "Writing up quotes and following up",
      "Missed calls when I'm on a job",
    ],
  },
  cafe: {
    question: "What would make the biggest difference?",
    answers: [
      "Filling more tables and taking more bookings",
      "Saving time on social media and marketing",
      "Handling customer queries and reservations automatically",
      "Getting more reviews and responding to them",
    ],
  },
  hairbeauty: {
    question: "Where do you lose the most time or money?",
    answers: [
      "No-shows and last-minute cancellations",
      "Manual booking and reminder messages",
      "Writing content for Instagram and Facebook",
      "Responding to enquiries outside opening hours",
    ],
  },
  professional: {
    question: "What takes up more of your time than it should?",
    answers: [
      "Answering routine client queries",
      "Chasing documents and information from clients",
      "Writing reports, letters, or emails",
      "Following up on leads and proposals",
    ],
  },
  retail: {
    question: "What's your biggest challenge right now?",
    answers: [
      "Getting more customers through the door or online",
      "Managing customer questions and orders",
      "Creating content and promotions",
      "Following up with customers after a purchase",
    ],
  },
  healthfitness: {
    question: "What would help your business most?",
    answers: [
      "Booking and managing client sessions automatically",
      "Nurturing leads who don't book straight away",
      "Creating workout plans, content, or emails faster",
      "Staying on top of client check-ins and follow-ups",
    ],
  },
  estateagent: {
    question: "Where does your team spend too much time?",
    answers: [
      "Answering basic property enquiries",
      "Chasing landlords, tenants, or buyers for info",
      "Writing property descriptions and listings",
      "Following up with leads who've gone quiet",
    ],
  },
  childcare: {
    question: "What would make your life easier?",
    answers: [
      "Handling parent enquiries and waiting list queries",
      "Sending updates, reminders, and newsletters to parents",
      "Admin and paperwork taking too long",
      "Getting more local families to find and trust us",
    ],
  },
  other: {
    question: "What's the biggest challenge in your business?",
    answers: [
      "Responding to enquiries quickly enough",
      "Too much repetitive admin eating into my day",
      "Getting new customers and following up on leads",
      "Creating content and marketing materials",
    ],
  },
};

/* ═══════════════════════════════════════════════════════════
   Typewriter hook
   Reveals `fullText` one character at a time at `speed` ms/char.
   Returns the currently-visible slice and a `done` flag.
═══════════════════════════════════════════════════════════ */

function useTypewriter(fullText: string, speed = 18) {
  const [displayed, setDisplayed] = useState("");
  const [done,      setDone]      = useState(false);
  const idxRef  = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    /* Reset whenever the source text changes */
    setDisplayed("");
    setDone(false);
    idxRef.current = 0;

    if (!fullText) return;

    const tick = () => {
      idxRef.current += 1;
      setDisplayed(fullText.slice(0, idxRef.current));
      if (idxRef.current < fullText.length) {
        timerRef.current = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    };

    timerRef.current = setTimeout(tick, speed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [fullText, speed]);

  return { displayed, done };
}

/* ═══════════════════════════════════════════════════════════
   AiDemo component
═══════════════════════════════════════════════════════════ */

export default function AiDemo() {
  const [currentStep,    setCurrentStep]    = useState<Step>(1);
  const [selectedBiz,    setSelectedBiz]    = useState<string>("");
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isLoading,      setIsLoading]      = useState<boolean>(false);
  const [result,         setResult]         = useState<DemoResult | null>(null);

  const { displayed: typedText, done: typingDone } = useTypewriter(
    result?.message ?? "",
    18
  );

  /* Step 1 → 2: user picks a business type */
  const handleBizSelect = (key: string) => {
    setSelectedBiz(key);
    setSelectedAnswer("");
    setResult(null);
    setCurrentStep(2);
  };

  /* Step 2 → 3: user picks their main challenge, triggers API call */
  const handleAnswerSelect = async (answer: string) => {
    setSelectedAnswer(answer);
    setResult(null);
    setIsLoading(true);
    setCurrentStep(3);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessType: selectedBiz, challenge: answer }),
      });
      const data = (await res.json()) as DemoResult;
      setResult(data);
    } catch {
      setResult({
        message:
          "That's a really common one! An AI solution can handle this automatically — trained on your business, running 24/7. Most of our clients free up hours every week within the first month.",
        statNum:   "4 hrs",
        statLabel: "saved per week",
        statSub:   "on average for similar businesses",
      });
    } finally {
      setIsLoading(false);
    }
  };

  /* Back to Step 1 */
  const handleReset = () => {
    setCurrentStep(1);
    setSelectedBiz("");
    setSelectedAnswer("");
    setResult(null);
    setIsLoading(false);
  };

  const currentData = selectedBiz ? BIZ_QUESTIONS[selectedBiz] : null;

  return (
    <div
      className="rounded-2xl p-8 md:p-10"
      style={{
        background: "var(--bg-alt2)",
        border: "1px solid var(--card-border)",
      }}
    >

      {/* ── Step 1 — Business type selection ─────────────────── */}
      {currentStep === 1 && (
        <div>
          <p
            className="font-syne font-semibold text-xs uppercase tracking-widest mb-2"
            style={{ color: "var(--coral)" }}
          >
            ✦ Try it — what&apos;s your business?
          </p>
          <p
            className="font-nunito text-sm mb-6 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Pick your business type and see exactly how AI could help you.
          </p>

          {/* 3×3 grid on desktop, 2-col on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {BIZ_TYPES.map(({ key, emoji, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => handleBizSelect(key)}
                className="demo-btn flex flex-col items-center gap-2 p-4 rounded-[10px] border text-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b6b]"
                style={{
                  background: "var(--white)",
                  borderColor: "var(--card-border)",
                }}
              >
                <span className="text-2xl leading-none select-none" aria-hidden="true">
                  {emoji}
                </span>
                <span
                  className="font-nunito text-xs font-semibold leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 2 — Challenge question ──────────────────────── */}
      {currentStep === 2 && currentData && (
        <div>
          <p
            className="font-syne font-semibold text-xs uppercase tracking-widest mb-3"
            style={{ color: "var(--coral)" }}
          >
            ✦ Quick question for you
          </p>

          <p
            className="font-syne font-bold text-lg md:text-xl leading-snug mb-5"
            style={{ color: "var(--deep-indigo)" }}
          >
            {currentData.question}
          </p>

          <div className="flex flex-col gap-3">
            {currentData.answers.map((answer) => (
              <button
                key={answer}
                type="button"
                onClick={() => handleAnswerSelect(answer)}
                className="demo-btn w-full text-left px-4 py-3.5 rounded-[10px] border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b6b]"
                style={{
                  background: "var(--white)",
                  borderColor: "var(--card-border)",
                }}
              >
                <span
                  className="font-nunito text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {answer}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="mt-5 font-nunito text-sm hover:underline transition-opacity duration-200 cursor-pointer opacity-70 hover:opacity-100"
            style={{ color: "var(--text-muted)" }}
          >
            ← Change business type
          </button>
        </div>
      )}

      {/* ── Step 3 — AI response ─────────────────────────────── */}
      {currentStep === 3 && (
        <div>

          {/* ── Loading — typing indicator ── */}
          {isLoading && (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div
                className="flex items-center gap-1.5"
                role="status"
                aria-label="Loading recommendation"
              >
                <span className="typing-dot" style={{ animationDelay: "0ms" }}   />
                <span className="typing-dot" style={{ animationDelay: "160ms" }} />
                <span className="typing-dot" style={{ animationDelay: "320ms" }} />
              </div>
              <p className="font-nunito text-sm" style={{ color: "var(--text-muted)" }}>
                Getting your personalised AI recommendation&hellip;
              </p>
            </div>
          )}

          {/* ── Response — typewriter + stat card + CTAs ── */}
          {!isLoading && result && (
            <div>

              {/* Coral label */}
              <p
                className="font-syne font-semibold text-xs uppercase tracking-widest mb-4"
                style={{ color: "var(--coral)" }}
              >
                ✦ Here&apos;s what AI could do for you
              </p>

              {/* Typewriter message */}
              <p
                className="font-nunito text-sm leading-relaxed mb-6"
                style={{
                  color: "var(--text-soft)",
                  minHeight: "4.5rem", /* prevents layout shift while typing */
                }}
              >
                {typedText}
                {/* Blinking cursor while typing */}
                {!typingDone && (
                  <span
                    className="inline-block w-0.5 h-4 ml-0.5 align-middle animate-pulse"
                    style={{ background: "var(--coral)" }}
                    aria-hidden="true"
                  />
                )}
              </p>

              {/* Stat highlight card — fades in once typing is done */}
              <div
                className="rounded-xl p-5 mb-6 transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,107,107,0.08) 0%, rgba(14,165,160,0.08) 100%)",
                  border: "1px solid rgba(255,107,107,0.2)",
                  opacity: typingDone ? 1 : 0,
                  transform: typingDone ? "translateY(0)" : "translateY(10px)",
                }}
                aria-hidden={!typingDone}
              >
                <p
                  className="font-syne font-bold text-3xl leading-none mb-1"
                  style={{ color: "var(--coral)" }}
                >
                  {result.statNum}
                </p>
                <p
                  className="font-syne font-bold text-base mb-1"
                  style={{ color: "var(--deep-indigo)" }}
                >
                  {result.statLabel}
                </p>
                <p
                  className="font-nunito text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {result.statSub}
                </p>
              </div>

              {/* CTAs */}
              <div
                className="flex flex-wrap items-center gap-3 transition-all duration-500"
                style={{
                  opacity: typingDone ? 1 : 0,
                  transform: typingDone ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-nunito font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    border: "2px solid var(--coral)",
                    color: "var(--coral)",
                  }}
                >
                  See our plans →
                </Link>
                <button
                  type="button"
                  onClick={handleReset}
                  className="font-nunito text-sm cursor-pointer hover:underline transition-opacity duration-200 opacity-70 hover:opacity-100"
                  style={{ color: "var(--text-muted)" }}
                >
                  Try another business
                </button>
              </div>

            </div>
          )}

        </div>
      )}
    </div>
  );
}
