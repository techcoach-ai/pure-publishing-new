export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { businessType, challenge } = req.body;
  if (!businessType || !challenge) return res.status(400).json({ error: 'Missing fields' });
  const FALLBACK = {
    message: "Yeah, that's one of the most common things we hear!\n\nAn AI agent can handle this automatically — trained on your business, running 24/7.\n\nMost clients free up hours every week within the first month.",
    statNum: "4 hrs", statLabel: "saved per week", statSub: "on average for similar businesses"
  };
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const prompt = `You are a friendly local AI consultant from Hastings chatting casually with a small business owner.\n\nRespond ONLY with a valid JSON object — no markdown, no code fences:\n{"message": "...", "statNum": "...", "statLabel": "...", "statSub": "..."}\n\nmessage: EXACTLY 3 very short sentences separated by \\n\\n. Start with "Oh," "Yeah," or "Honestly,". Be warm and specific.\nstatNum: time/money stat e.g. "4 hrs" or "£200"\nstatLabel: 3-5 words e.g. "saved on admin weekly"\nstatSub: one short phrase e.g. "on average, per week"\n\nBusiness type: ${businessType}\nChallenge: ${challenge}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { maxOutputTokens: 300, temperature: 0.7 } })
    });
    if (!response.ok) throw new Error('Gemini error');
    const data = await response.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
    const cleaned = raw.replace(/```json|```/g, '').trim();
    let parsed;
    try { parsed = JSON.parse(cleaned); } catch { parsed = FALLBACK; }
    return res.status(200).json(parsed);
  } catch (e) {
    return res.status(500).json(FALLBACK);
  }
}
