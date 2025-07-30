import {genkit, type Plugin} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import 'dotenv/config';

const plugins: Plugin<any>[] = [];

if (process.env.GEMINI_API_KEY) {
  plugins.push(googleAI({apiKey: process.env.GEMINI_API_KEY}));
}

export const ai = genkit({
  plugins,
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
