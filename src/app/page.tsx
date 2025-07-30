
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { scrapeJobPosting, ScrapeJobPostingOutput } from "@/ai/flows/scrape-job-posting-flow";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [url, setUrl] = useState('');
  const [jobDetails, setJobDetails] = useState<ScrapeJobPostingOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const debounce = <F extends (...args: any[]) => any>(func: F, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<F>): void => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleScrape = useCallback(async (scrapeUrl: string) => {
    if (!scrapeUrl || !scrapeUrl.startsWith('http')) {
      setJobDetails(null);
      return;
    }
    setIsLoading(true);
    setJobDetails(null);
    try {
      const result = await scrapeJobPosting({ url: scrapeUrl });
      setJobDetails(result);
    } catch (error: any) {
      console.error("Failed to scrape job posting:", error);
      toast({
        title: "Scraping Failed",
        description: "Could not retrieve details from the URL. Please check the link or try another.",
        variant: "destructive",
      });
      setJobDetails(null);
    } finally {
      setIsLoading(false);
    }
  }, [toast]);
  
  const debouncedScrape = useCallback(debounce(handleScrape, 1000), [handleScrape]);

  useEffect(() => {
    debouncedScrape(url);
  }, [url, debouncedScrape]);


  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="text-display-medium font-headline font-style-bold:font-headline-bold">
                  Tailor Your Resume with AI Precision
                </h1>
                <p className="max-w-[600px] text-body-large text-on-surface-variant font-style-bold:font-body-bold">
                  Darzi helps you craft the perfect resume for any job application. Our AI-powered tools analyze job descriptions and optimize your resume to beat the applicant tracking systems.
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="space-y-4">
                    <Label htmlFor="linkedin-url" className="text-title-small font-style-bold:font-body-bold">Enter LinkedIn Job Post Link</Label>
                    <Input 
                      id="linkedin-url" 
                      placeholder="https://www.linkedin.com/jobs/view/..." 
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                     {isLoading && (
                        <Card className="bg-surface-container-low border-outline-variant/50 p-4">
                          <div className="flex items-center gap-4">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2 flex-1">
                              <Skeleton className="h-4 w-3/4" />
                              <Skeleton className="h-4 w-1/2" />
                            </div>
                          </div>
                          <Skeleton className="h-4 w-full mt-4" />
                          <Skeleton className="h-4 w-5/6 mt-2" />
                        </Card>
                      )}
                      {jobDetails && (
                        <Card className="bg-surface-container-low border-outline-variant/50 overflow-hidden">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <Avatar className="h-12 w-12 border">
                                {jobDetails.companyLogoUrl && <AvatarImage src={jobDetails.companyLogoUrl} alt={jobDetails.companyName} />}
                                <AvatarFallback>
                                  {jobDetails.companyName.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <CardTitle className="text-title-large">{jobDetails.jobTitle}</CardTitle>
                                <p className="text-on-surface-variant text-body-medium">{jobDetails.companyName}</p>
                              </div>
                              <Button variant="ghost" size="icon">
                                <span className="material-symbols-outlined text-on-surface-variant">bookmark</span>
                              </Button>
                            </div>
                            <p className="mt-4 text-body-medium text-on-surface-variant">
                              {jobDetails.description}
                            </p>
                          </CardContent>
                        </Card>
                      )}
                </div>
                <Link 
                  href={{
                    pathname: '/get-started',
                    query: { jobDescription: jobDetails?.fullJobDescription || '' }
                  }} 
                  className="mt-4 block"
                  aria-disabled={!jobDetails}
                  onClick={(e) => !jobDetails && e.preventDefault()}
                >
                  <Button size="lg" variant="filled-tonal" className="w-full rounded-full shadow-sm transition-all hover:shadow-lg active:shadow-sm" disabled={!jobDetails}>
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                alt="Hero"
                className="mx-auto aspect-square rounded-extra-large object-cover sm:w-full lg:order-last shadow-xl"
                height="600"
                src="https://placehold.co/600x600.png"
                data-ai-hint="resume professional"
                width="600"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-surface-variant/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-large bg-secondary-container px-3 py-1 text-label-large text-on-secondary-container shadow-sm">Key Features</div>
              <h2 className="text-headline-medium font-headline font-style-bold:font-headline-bold">Craft Resumes that Get Noticed</h2>
              <p className="max-w-[900px] text-body-large text-on-surface-variant font-style-bold:font-body-bold">
                Leverage our suite of tools to create, tailor, and share resumes that stand out to recruiters and hiring managers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 flex flex-col p-6 hover:-translate-y-2 rounded-large bg-surface-container-low">
              <CardHeader className="items-center pb-4">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary-container">
                  <span className="material-symbols-outlined text-4xl text-on-primary-container">description</span>
                </div>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-center">
                <CardTitle className="font-headline text-title-large mb-2 font-style-bold:font-headline-bold">AI-Powered Tailoring</CardTitle>
                <p className="text-body-medium text-on-surface-variant font-style-bold:font-body-bold">Automatically customize your resume for each job description, highlighting relevant skills.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-0 flex flex-col p-6 hover:-translate-y-2 rounded-large bg-surface-container-low">
              <CardHeader className="items-center pb-4">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary-container">
                  <span className="material-symbols-outlined text-4xl text-on-primary-container">smart_toy</span>
                </div>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-center">
                <CardTitle className="font-headline text-title-large mb-2 font-style-bold:font-headline-bold">ATS Optimization</CardTitle>
                <p className="text-body-medium text-on-surface-variant font-style-bold:font-body-bold">Optimize your resume with keywords and formatting to pass Applicant Tracking Systems.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-0 flex flex-col p-6 hover:-translate-y-2 rounded-large bg-surface-container-low">
              <CardHeader className="items-center pb-4">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary-container">
                  <span className="material-symbols-outlined text-4xl text-on-primary-container">trending_up</span>
                </div>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-center">
                <CardTitle className="font-headline text-title-large mb-2 font-style-bold:font-headline-bold">Performance Analytics</CardTitle>
                <p className="text-body-medium text-on-surface-variant font-style-bold:font-body-bold">Track views and engagement on your shared resume links to see what is working.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-on-surface-variant font-style-bold:font-body-bold">&copy; 2024 Darzi Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 font-style-bold:font-body-bold" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 font-style-bold:font-body-bold" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </>
  );
}
