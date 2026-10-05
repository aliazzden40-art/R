import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Deep encouragement and future possibilities endpoint
app.post('/api/inspire', async (req, res) => {
  const { topic, context } = req.body;

  if (ai) {
    try {
      const prompt = `You are generating a supportive, deeply thoughtful, elegant, and personal statement written by Ali to Rayan.
Context:
- Rayan: Birthday December 6, 2007. Studies programming and cybersecurity. Loves coffee, cinnamon rolls, cats, children. She is brilliant, determined, and deeply kind.
- Ali: Birthday December 16, 2007. Studies programming and cybersecurity.
- The two became a couple on January 8, 2026 (08 · 01 · 2026).
- The tone must be: luxury editorial, authentic, deeply grounding, mature, poetic yet clear, acknowledging her strength in computer science, cybersecurity, and character.
- Avoid all cheesy romance clichés, fake drama, or generic greeting card fluff.
Focus area: "${topic || 'Her potential and resilience in programming & cybersecurity'}"
${context ? `Extra note: ${context}` : ''}
Provide a single cohesive thought (2-3 sentences max) that feels like an intimate, unwavering declaration of belief in her.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: prompt,
        config: {
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.HIGH,
          },
        },
      });

      const message = response.text?.trim();
      if (message) {
        return res.json({ message, source: 'ai' });
      }
    } catch (err) {
      console.warn('Gemini generateContent call failed or unavailable:', err);
    }
  }

  // Curated, beautiful statements if API key is absent or pending
  const curatedMessages = [
    "You are building a mind capable of analyzing systems that most people take for granted. Never mistake a difficult concept for your limit.",
    "Every line of logic you master and every complex security architecture you solve is proof of what I already know: your intellect was made to shape what comes next.",
    "The journey through code is quiet and demanding, but the grit you demonstrate every single day is exactly why you will excel.",
    "When the challenge feels steep, remember how far you've come since the start. You're not just learning a craft; you're building a foundation that will stand strong.",
    "Your quiet tenacity is your greatest strength, Rayan. On any day you question your pace, remember that true depth takes time to form, and you are building something extraordinary.",
    "You have an instinct for clarity and care that makes you not just a brilliant mind, but a truly rare person in everything you do."
  ];

  const chosen = curatedMessages[Math.floor(Math.random() * curatedMessages.length)];
  return res.json({ message: chosen, source: 'curated' });
});

// Vite middleware in dev or static files in production
const isProduction = process.env.NODE_ENV === 'production';
if (!isProduction) {
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
