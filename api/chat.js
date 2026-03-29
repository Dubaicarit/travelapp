export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, system, provider, apiKey } = req.body;

  // Use key from env (Vercel) or from request body (fallback)
  const anthropicKey = process.env.ANTHROPIC_KEY || apiKey;
  const openaiKey    = process.env.OPENAI_KEY    || apiKey;
  const geminiKey    = process.env.GEMINI_KEY    || apiKey;

  try {
    if (provider === 'anthropic') {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': anthropicKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 600,
          system,
          messages
        })
      });
      const data = await response.json();
      if (data.error) return res.status(400).json({ error: data.error.message });
      return res.status(200).json({ reply: data.content[0].text });
    }

    if (provider === 'openai') {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + openaiKey
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          max_tokens: 600,
          messages: [{ role: 'system', content: system }, ...messages]
        })
      });
      const data = await response.json();
      if (data.error) return res.status(400).json({ error: data.error.message });
      return res.status(200).json({ reply: data.choices[0].message.content });
    }

    if (provider === 'gemini') {
      const contents = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: system }] },
            contents
          })
        }
      );
      const data = await response.json();
      if (data.error) return res.status(400).json({ error: data.error.message });
      return res.status(200).json({ reply: data.candidates[0].content.parts[0].text });
    }

    return res.status(400).json({ error: 'Provider non valido' });

  } catch (err) {
    return res.status(500).json({ error: 'Errore server: ' + err.message });
  }
}
