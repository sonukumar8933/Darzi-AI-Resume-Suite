
'use server';
/**
 * @fileOverview An agent that scrapes job posting data from a URL.
 *
 * - scrapeJobPosting - A function that handles the scraping process.
 * - ScrapeJobPostingInput - The input type for the scrapeJobPosting function.
 * - ScrapeJobPostingOutput - The return type for the scrapeJobPosting function.
 */

import {z} from 'zod';
import * as cheerio from 'cheerio';

const ScrapeJobPostingInputSchema = z.object({
  url: z.string().url().describe('The URL of the job posting to scrape.'),
});
export type ScrapeJobPostingInput = z.infer<typeof ScrapeJobPostingInputSchema>;

const ScrapeJobPostingOutputSchema = z.object({
  jobTitle: z.string().describe('The title of the job.'),
  companyName: z.string().describe('The name of the company.'),
  description: z.string().describe('A brief, one-sentence summary of the job.'),
  companyLogoUrl: z.string().url().optional().describe('The URL of the company logo.'),
  fullJobDescription: z.string().describe('The full job description text from the page.'),
});
export type ScrapeJobPostingOutput = z.infer<typeof ScrapeJobPostingOutputSchema>;


export async function scrapeJobPosting(
  {url}: ScrapeJobPostingInput
): Promise<ScrapeJobPostingOutput> {
    const response = await fetch(url, {
        headers: {
            // Use a realistic user agent to avoid being blocked
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch URL: ${response.statusText}`);
    }
    const html = await response.text();
    const $ = cheerio.load(html);

    // Logic adapted from the user's puppeteer script
    const jobTitle = $('h1').first().text().trim();
    // More robust selector for company name
    const companyName = $('.top-card-layout__second-subline div a').first().text().trim() || $('.topcard__flavor-alternate').first().text().trim();
    
    // This logic is directly inspired by the user's provided puppeteer script.
    // It iterates through images to find the most likely candidate for a company logo.
    let companyLogoUrl: string | undefined;
    $('img').each((i, el) => {
        const src = $(el).attr('src') || '';
        const alt = ($(el).attr('alt') || '').toLowerCase();
        if (src.includes('media.licdn.com') && (alt.includes('logo') || src.includes('company-logo'))) {
            companyLogoUrl = src;
            return false; // Exit the loop once found
        }
    });
    
    // Improved selector for job description and clean up the text
    const fullJobDescription = $('#job-details, .jobs-description__content').text().trim().replace(/\s\s+/g, '\n\n');

    const description = `A job opportunity at ${companyName} for the role of ${jobTitle}.`;

    const result = {
        jobTitle,
        companyName,
        description,
        companyLogoUrl,
        fullJobDescription,
    };
    
    // Validate the scraped data against the schema
    const validationResult = ScrapeJobPostingOutputSchema.safeParse(result);
    if (!validationResult.success) {
        console.error("Scraped data validation failed:", validationResult.error);
        // Provide fallbacks to prevent the app from crashing if scraping fails
        return {
            jobTitle: result.jobTitle || "N/A",
            companyName: result.companyName || "N/A",
            description: result.description,
            companyLogoUrl: result.companyLogoUrl,
            fullJobDescription: result.fullJobDescription || "Could not retrieve description.",
        }
    }

    return validationResult.data;
}
