import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */

interface ChatRequestBody {
  businessType: string;
  challenge: string;
}

interface ChatResponse {
  message: string;
  statNum: string;
  statLabel: string;
  statSub: string;
}

/* ─────────────────────────────────────────────────────────────
   Fallback — returned if anything fails
───────────────────────────────────────────────────────────── */

const FALLBACK: ChatResponse = {
  message:
    "That's a really common one! An AI solution can handle this automatically — trained on your business, running 24/7. Most of our clients free up hours every week within the first month.",
  statNum: "4 hrs",
  statLabel: "saved per week",
  statSub: "on average for similar businesses",
};

/* ─────────────────────────────────────────────────────────────
   Parse the <stats> tag from the model's raw text
───────────────────────────────────────────────────────────── */

function parseResponse(raw: string): ChatResponse {
  const statsMatch = raw.match(/<stats>([\s\S]*?)<\/stats>/);

  if (!statsMatch) {
    return { ...FALLBACK, message: raw.trim() };
  }

  const mainText = raw.replace(/<stats>[\s\S]*?<\/stats>/, "").trim();

  try {
    const stats = JSON.parse(statsMatch[1]) as {
      statNum?: string;
      statLabel?: string;
      statSub?: string;
    };
    return {
      message: mainText,
      statNum:   stats.statNum   ?? FALLBACK.statNum,
      statLabel: stats.statLabel ?? FALLBACK.statLabel,
      statSub:   stats.statSub   ?? FALLBACK.statSub,
    };
  } catch {
    return { ...FALLBACK, message: mainText };
  }
}

/* ─────────────────────────────────────────────────────────────
   POST /api/chat
───────────────────────────────────────────────────────────── */

export async function POST(req: NextRequest) {
  let body: Partial<ChatRequestBody>;

  try {
    body = (await req.json()) as Partial<ChatRequestBody>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { businessType, challenge } = body;

  if (!businessType || !challenge) {
    return NextResponse.json(
      { error: "Both businessType and challenge are required" },
      { status: 400 }
    );
  }

  try {
    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const result = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 500,
      system: `You are an AI assistant for Pure Publishing, a company that builds custom AI solutions for small and medium businesses in Hastings, East Sussex. A potential customer is trying an interactive demo on our website. They've told us their business type and their biggest challenge. Your job is to:
1. Acknowledge their specific challenge warmly (show you understand)
2. Explain in 2-3 short paragraphs how a custom AI solution could solve that problem
3. Be specific about what the AI would do day-to-day
4. Keep it conversational, warm, jargon-free. British English.
5. Keep the total response under 150 words
6. On the very last line, include a stats tag like this: <stats>{"statNum": "4 hrs", "statLabel": "saved per week", "statSub": "on average for similar businesses"}</stats>
Make the stat relevant and realistic.`,
      messages: [
        {
          role: "user",
          content: `I run a ${businessType}. My biggest challenge is: ${challenge}`,
        },
      ],
    });

    const raw =
      result.content[0].type === "text" ? result.content[0].text : "";

    return NextResponse.json(parseResponse(raw));
  } catch (err) {
    console.error("[/api/chat] Anthropic error:", err);
    return NextResponse.json(FALLBACK);
  }
}
