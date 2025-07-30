'use server';
import {GenkitError} from 'genkit';
import 'dotenv/config';

export async function getGeminiApiKey() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new GenkitError({
      status: 'UNAUTHENTICATED',
      message:
        'Please provide a Gemini API key in the .env.local file (GEMINI_API_KEY=xxx).',
    });
  }
  return apiKey;
}
