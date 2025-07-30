'use server';
/**
 * @fileOverview A resume tailoring AI agent.
 *
 * - tailorResume - A function that handles the resume tailoring process.
 * - TailorResumeInput - The input type for the tailorResume function.
 * - TailorResumeOutput - The return type for the tailorResume function.
 */

import { getGeminiApiKey } from '@/ai/genkit';
import { ai } from '@/lib/genkit';
import {z} from 'zod';

const TailorResumeInputSchema = z.object({
  resume: z.string().describe("The user's current resume text."),
  jobDescription: z.string().describe('The job description the user is applying for.'),
});
export type TailorResumeInput = z.infer<typeof TailorResumeInputSchema>;

const TailorResumeOutputSchema = z.object({
  tailoredResume: z.string().describe("The new, professionally tailored resume text, formatted in Markdown."),
  analysis: z.string().describe("A brief, bulleted list explaining the key changes made and why they will improve the resume's chances."),
});
export type TailorResumeOutput = z.infer<typeof TailorResumeOutputSchema>;

const tailorResumePrompt = ai.definePrompt({
    name: 'tailorResumePrompt',
    input: { schema: TailorResumeInputSchema },
    output: { schema: TailorResumeOutputSchema },
    prompt: `You are an expert career coach and professional resume writer. Your specialty is optimizing resumes to pass Applicant Tracking Systems (ATS) and impress human recruiters.

You will be given a resume and a job description. Your task is to rewrite the resume to be perfectly tailored for that specific job.

Instructions:
1.  **Analyze the Job Description:** Identify the key skills, qualifications, technologies, and action verbs in the job description.
2.  **Rewrite and Optimize:** Rewrite the resume's "Summary," "Experience," and "Skills" sections.
    - Integrate the keywords from the job description naturally.
    - Rephrase bullet points to reflect the responsibilities and requirements of the target job.
    - Quantify achievements with metrics wherever possible (e.g., "Increased user engagement by 15%" instead of "Responsible for user engagement").
3.  **Format Output:**
    - The tailored resume must be in clean, professional Markdown format.
    - The analysis should be a bulleted list of the most impactful changes you made.

**Resume to Tailor:**
\`\`\`
{{{resume}}}
\`\`\`

**Job Description:**
\`\`\`
{{{jobDescription}}}
\`\`\`
`,
});

const tailorResumeFlow = ai.defineFlow(
  {
    name: 'tailorResumeFlow',
    inputSchema: TailorResumeInputSchema,
    outputSchema: TailorResumeOutputSchema,
  },
  async (input) => {
    // This will throw an error if the key is not available.
    await getGeminiApiKey();

    const { output } = await tailorResumePrompt(input);
    return output!;
  }
);

export async function tailorResume(input: TailorResumeInput): Promise<TailorResumeOutput> {
  return tailorResumeFlow(input);
}
